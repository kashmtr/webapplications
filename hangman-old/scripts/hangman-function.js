class Hangman {
    constructor(word, numOfGuesses) {
        this.word = word.toLowerCase().split('')
        this.numOfGuesses = numOfGuesses
        this.guessedLetters = []
        this.gameStatus = 'playing' 
    }

    
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
    })
        return puzzle
    }

    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (finished) {
            this.gameStatus = 'finished'
        } else if (this.numOfGuesses === 0 ) {
            this.gameStatus = 'failed'
        } else {
            this.gameStatus = 'playing'
        } 
    }

    makeGuess(guess) {
        
        guess = guess.toLowerCase()

        if(this.gameStatus !== 'playing') {
            return 
        } 
    
        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess)
        }
    
        if (this.guessedLetters.includes(guess) && !this.word.includes(guess)){
            this.numOfGuesses--
        }
        this.calculateStatus()
    }

    get statusMessage() {
        if (this.gameStatus === 'finished') {
            return'Great work! You guessed the word.'
        } else if (this.gameStatus === 'failed') {
            return`Nice try! The word was "${this.word.join('')}".`
        } else {
            return`Guesses left: ${this.numOfGuesses}`
        }
    }
}

/* 
const Hangman = function (word, numOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.numOfGuesses = numOfGuesses
    this.guessedLetters = []
    this.gameStatus = 'playing'
} 
*/

/* 
Hangman.prototype.getPuzzle = function () {

    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '_ '
        }
    })
    return puzzle
} 
*/

/* 
Hangman.prototype.makeGuess = function (guessedLetter) {

    guessed = guessedLetter.toLowerCase()

    if(this.gameStatus !== 'playing') {
        return 
    } 

    if (!this.guessedLetters.includes(guessedLetter)) {
        this.guessedLetters.push(guessedLetter)
    }

    if (this.guessedLetters.includes(guessedLetter) && !this.word.includes(guessedLetter)){
        this.numOfGuesses--
    }
    this.calculateStatus()
} 
*/

/* 
Hangman.prototype.calculateStatus = function () {

   const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    if (finished) {
        this.gameStatus = 'finished'
    } else if (this.numOfGuesses === 0 ) {
        this.gameStatus = 'failed'
    } else {
        this.gameStatus = 'playing'
    }
} 
*/

/* 
Hangman.prototype.sendMessage = function () {

    if (this.gameStatus === 'finished') {
        return'Great work! You guessed the word.'
    } else if (this.gameStatus === 'failed') {
        return`Nice try! The word was "${this.word.join('')}".`
    } else {
        return`Guesses left: ${this.numOfGuesses}`
    }
} 
*/