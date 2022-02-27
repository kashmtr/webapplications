'use strict'

const noteID = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteID)

if (!note) {
    location.assign('/index-notes.html')
}

const dateElement = document.querySelector('#last-edited')
dateElement.textContent = generateLastEdited(note.updatedAt)

const titleElement = document.querySelector('#note-title')
titleElement.value = note.title
titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

const bodyElement = document.querySelector('#note-body')
bodyElement.value = note.body
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

const removeButton = document.querySelector('#remove-note')
removeButton.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index-notes.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note)  => note.id === noteID)
        
        if (!note) {
            location.assign('/index-notes.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
        
    }
    
})


/* document.querySelector('#note-title').addEventListener('input', function (e) {
    document.querySelector('#note-title').value = note.title
    note.title = e.target.value
    saveNotes(notes)
    console.log(e.target.value)
}) 

document.querySelector('#note-body').addEventListener('input', function (e) {
    document.querySelector('#note-body').value = note.body
    note.body = e.target.value
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index-notes.html)
})

*/