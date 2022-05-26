const ul = document.getElementById('list')
const form = document["addItem"]

form.addEventListener('submit', function(event){
    event.preventDefault()
    let listItems = form.title.value
    form.reset()

    let li = document.createElement('li')
    let h1 = document.createElement('h1')
    h1.style.fontSize = 'large'
    h1.textContent = listItems
    ul.appendChild(li)
    li.appendChild(h1)
    
    const editBtn = document.createElement('button')
    editBtn.setAttribute('id', 'editButton')
    editBtn.textContent = 'Edit'
    li.appendChild(editBtn)

    const clearBtn = document.createElement('button')
    clearBtn.setAttribute('id', 'clearButton')
    clearBtn.textContent = "remove"
    li.appendChild(clearBtn)

    clearBtn.addEventListener('click', () => {
        ul.removeChild(li)
    })
    editBtn.addEventListener('click', () => {
        const editInput = document.createElement('input')
        const saveBtn = document.createElement('button')
        saveBtn.textContent = 'Save'
        li.removeChild(editBtn)
        li.appendChild(editInput)
        editInput.setAttribute('placeholder', h1.textContent)
        li.appendChild(saveBtn)
        saveBtn.addEventListener('click', () => {
            h1.textContent = editInput.value
            li.appendChild(editBtn)
            li.appendChild(clearBtn)
            li.removeChild(editInput)
            li.removeChild(saveBtn)
        })
        
    })


})