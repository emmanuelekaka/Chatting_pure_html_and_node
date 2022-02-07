const dialog = document.querySelector('.main')
const addForm = document.forms['add']

addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    //information fetching a soon as it is entered
    const field = addForm.querySelector('input[type="text"]')
    const entry = field.value
    //Element creation
    const message = document.createElement('div')
    message.className='message'
    const paragraph =document.createElement('p')
    
    //content and element addition
    paragraph.textContent = entry
    message.appendChild(paragraph)
    dialog.appendChild(message)
    field.value =""

})