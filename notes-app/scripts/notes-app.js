'use strict'

/* import { v4 as uuidv4 } from 'uuid4'

const uuid = uuidv4()
console.log(uuid) */

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited',
    sortByCreated: 'byCreated'
}


renderNotes(notes, filters)

document.querySelector('#new-note').addEventListener('click', (e) => {
    
    const noteid = uuidv4()
    const timestamp = moment().valueOf()
    notes.push ({
        id: noteid,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
  
    saveNotes(notes)
    location.assign('/edit.html#' +  noteid)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)

        renderNotes(notes, filters)
    }
})
















// localStorage.setItem('location', 'Canada')

// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

//localStorage.clear()

/* const user = {
    name: 'Kash',
    age: '15'
}
const userJSON = JSON.stringify(user)
console.log(userJSON)
localStorage.setItem('user', userJSON)
 

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)

*/








/* document.querySelector('#remove-all-note').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
    // console.log('Delete All Notes')
}) 

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})

*/


// DOM - Document Object Model

// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     p.textContent = '*********'
//     //console.log(p.textContent)
//     // p.remove()
// })

// // Adding new element
// const newp = document.createElement('p')
// newp.textContent = 'New Js element'
// document. querySelector('body').append(newp)