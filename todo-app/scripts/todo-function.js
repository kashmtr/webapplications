'use strict'

//console.log(uuidv4())

//Read existing todos from local storage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')

    try{
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        return []
    }
}

// Save the todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}
// Check completed todo by id
const checkTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    // todo.completed = status

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Render application todoscheckTodo
const rendertodos = (lists, filters)  => {
 
    const filteredtodos = lists.filter((list) => {
        const search = list.todo.toLowerCase().includes(filters.searchText.toLowerCase())
        const hide = filters.hideCompleted === false || list.completed === false
        return search && hide 
    })
    
    const notDone = filteredtodos.filter((todo) => todo.completed === false)
    document.querySelector('#todos').innerHTML = '' 

    generateSummaryDOM(notDone.length)

    if (filteredtodos.length > 0) {
        filteredtodos.forEach((eachtodo) => {
            document.querySelector('#todos').appendChild(generateTodoDOM(eachtodo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        document.querySelector('#todos').appendChild(messageEl)
    }
}

// Get the DOM structure for an individual todo
const generateTodoDOM = (eachtodo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
    // checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = eachtodo.completed
    containerEl.appendChild(checkbox)
    if (eachtodo.completed) {
        checkbox.setAttribute("checked", "true")
    }
    checkbox.addEventListener('change',(e) => {
        const toggleStatus = e.target.checked
        console.log("Toggle Status", toggleStatus)
        checkTodo(eachtodo.id, toggleStatus)
        saveTodos(todos)
        rendertodos(todos, filters)
    })
    // text
    todoText.textContent = eachtodo.todo
    containerEl.appendChild(todoText)
    // container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)
    // remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click',() => {
        removeTodo(eachtodo.id)
        saveTodos(todos)
        rendertodos(todos, filters)
    }) 
    return todoEl
}

const generateSummaryDOM = (leftTodosLength) => {
    const summaryEl = document.createElement('h3')
    const plural = leftTodosLength === 1 ? '' : 's'
    summaryEl.classList.add('list-title')
    summaryEl.textContent = `You have ${leftTodosLength} to-do${plural} left`
    document.querySelector('#todos').appendChild(summaryEl)
}