'use strict'
let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

rendertodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    rendertodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    const text = e.target.elements.newtodo.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            todo: text,
            completed: false
        })
        saveTodos(todos)
        rendertodos(todos, filters)
        e.target.elements.newtodo.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    console.log (e.target.checked)
    filters.hideCompleted = e.target.checked
    rendertodos(todos, filters)
})

























/*
// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log("I'm adding a new To-Do")
} )

// Listen for todo text chane=ge
document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
    //filters.searchText = e.target.value
    //renderToDos(ToDoList, filters)
})
*/



/* const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    const hw = p.textContent.includes('homework')
    if ( hw === true ) {
        p.remove()
    }
}) */