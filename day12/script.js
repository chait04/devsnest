const input = document.querySelector('#task')
const addBtn = document.querySelector('#add')
const todos = document.querySelector('#todos')


addBtn.addEventListener('click', () => {
    newTodo = document.createElement('div')
    newTodo.innerHTML = input.value;
    todos.appendChild(newTodo)

})