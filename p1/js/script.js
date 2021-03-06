/* Components Definition
 * @score-board: Component showing the score and history board
 * @game-controls: Component showing the game controls
 */

// Score Board component
Vue.component('score-board', {

	template: '#score-board',
	props: ['user-score', 'computer-score', 'score-history', 'round']
	
});

// Game controls buttons component
Vue.component('game-controls', {
	template: '#game-controls',
	props: ['restart']
	
});


/* Game Root
 * @components: score-board, game-controls
 *
 * @methods: 
 * - initialize: initializes the window event listener for the game
 * - start: game starter that reinitializes all variables and picks a new word
 * - newWord: word picker that uses a random algorithm to pick a word from the dictionary
 * - checkCharacter: verifies if the entered character is present in the mystery word
 * - end: exit state upon loss
 * - success: exit state upon win
 * - replay: Adds another round to the game without restarting the game
 * - displayMessage: changes the message board
 *
 * @watch:
 * - strikes: defines the number of trials. Upon reaching the game setting max, the game ends
 */

let game = new Vue({
	
	el: '#app',
	data: {
		settings: {
			words: ['Apple', 'Banana', 'Pear', 'Husky', 'Bichon', 'Javascript', 'Harvard', 'Vue', 'Framework', 'Server', 'Client', 'MySQL', 'Internet', 'Browser', 'Console', 'Cookies', 'Storage', 'Production', 'Development', 'Git', 'Github', 'DigitalOcean', 'VSCode', 'Brackets', 'Laravel', 'PHP', 'Angular', 'React'],
			permittedKeyCodes: [20, 16], // caps lock and shift are permitted
			strikes: 6
		},
		strikes: 6,
		status: false,
		wordStyle: '',
		selectedWord: '',
		maskedWord: '',
		message: 'You have 6 guesses to unveil the mystery word. Type a letter...',
		messageStyle: '',
		restart: null,
		userScore: 0,
		computerScore: 0,
		round: 1,
		scoreHistory: []
	},
	
	watch: {
		
		// watch the strikes property to control messaging and end the game 
		strikes() {
			
			if (this.strikes == this.settings.strikes) {
				switch (this.round) {
					case 1:
						this.displayMessage('You have 6 guesses to unveil the mystery word. Type a letter...');
						break;
					default:
						this.displayMessage("Round " + this.round);
				}
			} else if (this.strikes > 0) {
				
				// display remaining number of guesses
				this.displayMessage(this.strikes + " guess(es) remaining...");
				
			} else {
				
				// end the game when strikes are out
				this.end();
			}
			
		
		}
		
	},
	
	methods: {
		
	
		/* Mode Initializer
		 * Initializes the game when the application is mounted
		 */
		initialize: function() 
		{	
				
			// A window event listener needs to be created at mounted in VueJS
			window.addEventListener('keyup', (e) => {


				// check if the game is active and if the key entered is alphabetical
				if (this.status && e.keyCode >= 65 && e.keyCode <= 90) return this.checkCharacter(e);

				// if the game is active but not alphabetical key then notify the player. Shift and Caps Lock are permitted keys
				else if (this.status && (!this.settings.permittedKeyCodes.includes(e.keyCode))) this.displayMessage('Make sure to enter letters only. ' + this.strikes + ' guess(es) remaining...', 'lose');

			});
			
			
		},
		
		/* 
		 * Game starter
		 * @mode: set to true if all game variables need to be reset to start from fresh
		 * 
		 */
		start: function(mode = true) {
			
			// reset variables upon initialization
			this.status = true;
			this.strikes = this.settings.strikes;
			this.wordStyle = '';
			this.maskedWord ='';		
			this.messageStyle = '';
			this.restart = null;
			
			// If more than round 1 then display the round
			if (this.round > 1) {
				this.displayMessage("Round " + this.round);
			}
			
			// if it is a reset mode then reset all remaining variables to start from fresh
			if (mode) {
				this.selectedWord = '';
				this.userScore = 0;
				this.computerScore = 0;
				this.round = 1;
				this.scoreHistory = [];			
			}
			
			// generate a new word
			this.newWord();
			
		},
		
		
		
		/* 
		 * newWord function that allows the system to pick a work randomly and mask it
		 */
		newWord: function() {
			
			let previousWord = this.selectedWord;
			
			// get the list of words and pick one randomly
			this.words = this.settings.words;
			this.selectedWord = this.settings.words[this.words.length * Math.random() << 0];
			
			// avoid repeating the same word twice in a row
			if (this.selectedWord === previousWord) {
				this.newWord();
			}

			// mask the word with dashes
			this.maskedWord = '-'.repeat(this.selectedWord.length);
		},
		
		
		/*
		 * checkCharacter function that renders the word on the page
		 * @e: defines the key event that will be checked against the word
		 */		
		checkCharacter: function(e) {

			// initialize match replacement
			var match = false;


			let replacement = this.maskedWord.split("") || [];

			// iterate in the word to find character match
			for(let i=0; i < this.selectedWord.length; i++) {

				// when match is found reveal the masked character
				if (this.selectedWord.toLowerCase().charAt(i) == e.key.toLowerCase()) {
					match = true;
					replacement[i] = e.key;
				} 
			}

			// reveal word on the page
			this.maskedWord = replacement.join("");

			// check if win
			if (this.selectedWord.toLowerCase() == this.maskedWord.toLowerCase()) this.success();

			// if no match deduct strike
			if (!match) {
				this.strikes--;

			}			
		},

		/*
		 * end function that ends the game when all strikes are out
		 */
		end: function() {
			
			// set the status of the game to false
			this.status = false;

			// display loss message
			this.displayMessage("Sorry you lost :(", 'lose');

			// reveal word
			this.maskedWord = this.selectedWord;
			
			// increment computer score
			this.computerScore++;
			
			// save round winner to history
			this.scoreHistory[this.round - 1] = 'Computer';

			// add play again button
			this.replay('lose');			
			
		},
		
		
		
		/*
		 * success function that ends the game when win
		 */		
		success: function() {
			
			// set the status of the game to false
			this.status = false;

			// display win message
			this.displayMessage("Great Job!", 'win');
			
			// increment user score
			this.userScore++;
			
			// save round winner to history
			this.scoreHistory[this.round - 1] = 'Player';

			// add play again button
			this.replay('win');			
		},
		
		
		/*
		 * provides the user with the ability to restart the game at the end of the game
		 * @style: defines the style in which the word will be displayed based on whether they won or lost the round
		 * 
		 */		
		replay: function(style) {
		
			this.restart = true;
			
			// Increment rounds
			this.round++;
			
			this.wordStyle = style || '';
		
		},

		
		
		/*
		 * Changes the game messaging based on the state of the game
		 * @msg: defines the message to be displayed
		 * @style: defines the style in which the message will be displayed
		 * 
		 */	
		displayMessage: function(msg, style) {
			
			this.message = msg;
			this.messageStyle = style || '';
			
		}
		
	},
	
	mounted () {
		
		// Initialize the game 
		this.initialize();
		
		// start the game
		this.start();
		
	}
	
})