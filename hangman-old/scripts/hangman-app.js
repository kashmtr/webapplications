'use strict'

const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#gameStatus')
let game1


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
}) 

const render = () => {
    puzzleEl.innerHTML = ''
    statusEl.textContent = game1.statusMessage 

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/* GET PUZZLE CALL
getPuzzle('2').then((puzzle) => {
    console.log(`Generated word: ${puzzle}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
}) 
*/

/* ASYNC & AWAIT 
getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch ((error) => {
    console.log(`Error: ${error}`)
}) 
*/

/* 
getLocation().then((location) => {
    return getCountry(location.country)
}).then ((country) => {
    console.log(`Country name: ${country.name} `)
}). catch ((error) => {
    console.log(`Error: ${error}`)
}) 
*/

/* FETCH EXAMPLE
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error ('Unable to fetch puzzle')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
}) 
*/

/* OOP 

// Primitive Value: string, number, boolean, null, undefiend
// anything not in that list is an object

// Object: myObject --> Object.prototype --> null 
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction -->Function.prototyoe --> Object.prototpe --> null
// String: myString --> String.prototype -->Object.prototpe --> null
// Number: myNumber --> Number.prototype -->Object.prototpe --> null
// Boolean: myBoolean --> Boolean.prototype -->Object.prototpe --> null


const product = 'Computer'
console.log(product)

//----------------------------------------------------------\\

const otherProduct = new String ('Phone')
console.log(otherProduct)

//----------------------------------------------------------\\

const getScore = () => 1
console.log(getScore)

//----------------------------------------------------------\\

const team = new Array(['Luke', 'Maddison'])
console.log(team.hasOwnProperty(''))

//----------------------------------------------------------\\

const product = new Object({
    name: 'the Shadow Of Malabron'
})

product.name = 'Rest'

Object.prototype.someNewMethod = () => 'New Function'

// hasOwnProperty 
console.log(product.someNewMethod())
console.log(product) 

// HTTP - Hypertext Transfer Protocal
// Request - What do we want to do 
// Response = WHat was actually done 
*/