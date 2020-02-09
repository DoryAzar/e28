/* 
 * Game Class
 * author: Dory Azar
 */

class Game {
	
	/*
	 * Constructor that creates a new game with settings
	 * Settings include: 
	 * - Words: The words that the system can guess from
	 * - Strikes: Defines the number of strikes/guesses that a user can have
	*/
	constructor(settings) {
		
		// load the settings
		this.settings = settings;
		this.strikes = this.settings.strikes || 6;
	
		// start the game
		this.start();
		
	}
	
	
	/* 
	 * Game starter
	 * 
	*/
	start() {
		
		// defines if this game is still active or ended
		this.status = true;
		
		// system picks a word randomly
		this.newWord();
		
		// word is masked and rendered on the page
		this.drawWord();

	}
	
	
	/* 
	 * newWord function that allows the system to pick a work randomly and mask it
	*/
	newWord() {
		
		// get the list of words and pick one randomly
		this.words = this.settings.words;
		this.selectedWord = this.settings.words[this.words.length * Math.random() << 0]; 
		
		// mask the word with dashes
		this.maskedWord = '-'.repeat(this.selectedWord.length);
		
	}
	
	
	/*
	 * drawWord function that renders the word on the page
	*/
	drawWord(style = '') {
		
		// Get the elemnents
		let word = document.getElementById('word') || null;
		
		// draw the word
		if(word) word.innerHTML = this.maskedWord;
		word.setAttribute('class', style);
		
	}
	
	/*
	 * checkCharacter function that checks if the letter exists in the word
	 * @e: the event that triggered the function 
	*/
	checkCharacter(e) {
		
		// initialize match replacement
		var match = false;
		
		// when guesses are still possible
		if (this.strikes > 1) {
			
			let replacement = this.maskedWord.split("") || [];

			// iterate in the word to find character match
			for(let i=0; i < this.selectedWord.length; i++) {

				// when match is found reveal the masked character
				if (this.selectedWord.toLowerCase().charAt(i) == e.key) {
					match = true;
					replacement[i] = e.key;
				} 
			}

			// if no match deduct strike
			if (!match) {
				this.strikes--;
				
				// display remaining number of guesses
				this.message(this.strikes + " guess(es) remaining...", 'lose');
			}

			// reveal word on the page
			this.maskedWord = replacement.join("");
			this.drawWord();
			
			// check if win
			if (this.selectedWord.toLowerCase() == this.maskedWord.toLowerCase()) this.success();
			
		} else {
			
			// end the game when all strikes are out
			this.end();
		}
		
		
	}
	
	/*
	 * end function that ends the game when all strikes are out
	*/
	end() {
		
		// set the status of the game to false
		this.status = false;
		
		// display loss message
		this.message("Sorry you lost :(", 'lose');
		
		// reveal word
		this.maskedWord = this.selectedWord;

		// add play again button
		this.replay('lose');
			
	}
	
	/*
	 * success function that ends the game when win
	*/
	success() {
		
		// set the status of the game to false
		this.status = false;
		
		// display win message
		this.message("Great Job!", 'win');
		
		// add play again button
		this.replay('win');
		
	}
	
	/*
	 * draw a play again button that resets the game
	*/
	replay(style) {
		
		this.drawWord(style);
		
		// add a try again button
		let restartBtn = document.createElement('BUTTON');
		restartBtn.innerHTML = "Play Again";
		restartBtn.addEventListener('click', () => location.reload());
		document.body.appendChild(restartBtn);
	}
	
	
	/*
	 * display a message on the game page
	 * @msg: the message to display
	 * @style: the style of the message
	*/
	message(msg, style = '') {
		
		// get the page elements to modify
		let message = document.getElementById('message') || null;
		
		// change the message
		if (message) {
			message.innerHTML = msg;
			message.setAttribute('class', style);
		}
	}
	
}

/* 
 * Mystery Word
 * Runtime of the game 
 * author: Dory Azar
 */

var game = new Game({'words': ['Apple', 'Banana', 'Pear', 'Husky', 'Bichon', 'Javascript', 'Harvard', 'Vue', 'Framework', 'Server', 'Client', 'MySQL', 'Internet', 'Browser', 'Console', 'Cookies', 'Storage', 'Production', 'Development', 'Git', 'Github', 'DigitalOcean', 'VSCode', 'Brackets', 'Laravel', 'PHP', 'Angular', 'React'], 'strikes': 6});

window.addEventListener('keyup', (e) => {
	if (game.status) return game.checkCharacter(e);

});