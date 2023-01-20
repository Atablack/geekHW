const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {

    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const delBtn = document.createElement('button')
        const edit = document.createElement('button')

        const fuc = 'delete'
        delBtn.innerText = fuc
        const edText = 'edit'
        edit.innerText = edText

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        text.innerText = input.value
        delBtn.setAttribute('class', 'delete_button')
        edit.setAttribute('class', 'edit_button')
        

        div.append(text)
        div.append(delBtn)
        div.append(edit)
        todoList.prepend(div)

        delBtn.onclick = () => div.remove()


        edit.addEventListener('click', () => {
            let prp = prompt('edit your notes')
            text.innerText = prp
        })
        
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (event) => {event.code === 'Enter' ? createTodo() : false})