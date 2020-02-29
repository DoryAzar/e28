let app = new Vue({
	
	el: '#app',
	data: {
		
		settings: {
			maxGuesses: 8,
			words: [
				    ['apple', 'Sometimes red, sometimes delicious'],
    				['washington', 'Rushmore’s left edge'],
    				['pumpkin', 'Halloween’s favorite fruit'],
    				['football', 'Play with your hands or feet, depending on your location']
			]
		},
		state: 'start',
		status: '',
		message: '',
		messageStyle: '',
		word: '',
		wordStyle: '',
		firstname: null,
		guessedWord: '',
		guesses: 0,
		hint: ''
	
	},
	
	computed: {
		
		// the scrambled word is a computed property calculated automatically from the moment word changes
		scrambledWord () {
			let word = this.word;
			if (this.state == 'play') {
				word = word.split('').sort(function(){return 0.5-Math.random()}).join('');
			}
			return word;
		}
	},
	methods: {
		
		
		/*
		 * Game States:
		 * @start: identifies the initial state of the game if the name still needs to be entered
		 * @play: identifies the game play
		 * @end: identifies the end of the game
		*/
		
		// Start state
		start: function() {
			this.message = "What is your name?";
			
		},	
		
		// Play state
		play: function () {
			
			// reset all variables
			this.state = 'play';
			this.status = '';
			this.firstname = this.firstname && this.firstname != ''? this.firstname : 'Player 1';
			this.wordStyle = '';
			this.guessedWord = '';
			this.word = this.generateWord();
			
			// generate the game play
			this.message = 'Game on, ' + this.firstname + '! Your mystery word is...';
			
		},
		
		// End state
		end: function () {
			this.wordStyle = this.status;
			
			// only when there is a win set the state to end, otherwise the game is still going
			if (this.status == 'win') {
				this.state = 'end';
				this.guesses = 0;
			} 
			
			// when the number of guesses exceeds a max end the game
			if (this.guesses > this.settings.maxGuesses) {
				this.state = 'end';
				this.message = 'Sorry...Restart the game to get a new word';
				this.guesses = 0;
			}

		},
		
		
		
		/*
		 * Utilities methods
		*/
		
		// Generating a random word
		generateWord: function () {
			
			// keep track of the previous word
			let previousWord = this.word;
			
			// generate a random number within the words array length
			let randomNumber = Math.floor(Math.random() * Math.floor(this.settings.words.length));
			
			// if the word changed then return it, otherwise regenerate
			let word = this.settings.words[randomNumber][0];
			
			if (word != previousWord) {
				
				// set the hint
				this.hint = this.settings.words[randomNumber][1];
				
				// return the word
				return word;
				
			} else {
				return this.generateWord();
			}
		},
		
		
		// Upon a guess change status and state of the game
		guessWord: function() {
			switch(this.guessedWord.toLowerCase()) {
				case this.word.toLowerCase():
					this.guesses = -1;
					this.status = 'win';
					break;
				default:
					this.guesses++;
					this.status = 'lose';
					break;
					
			}
		},
		
		// Simple methods that changes the feedback messages to add more realism
		entice: function() {
			let messages = ['Sorry that is not correct. Please try again.', 
							'Don\'t discourage! You can do this ' + this.firsname,
							'Keep it up...',
							'Remember the combinations are not endless',
							'It\s getting warmer...',
							'You are almost there',
							'Now is not the time to let go',
							'You can still do this'
						   ];
			
			return messages[(this.guesses-1) % messages.length ];
		}
		
	},
	mounted () {
		this.start();
		
	},
		
	watch: {
		
		// we watch the guesses to evaluate win or loss
		guesses() {
			if (this.state == 'play') {
				this.message = this.status == 'win'? 'Nice Job!' : this.entice();
				this.end();	
			}
		},
		
		
	}
	
})