document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    thingTodos(e.target.querySelector('#new-task-description').value)
    
  })
});

function thingTodos(todo){
 let li = document.createElement('li')
 let btn = document.createElement('button')
 btn.addEventListener('click',deleteThingToDo)
 btn.textContent = "x"
 li.textContent = `${todo} `;
 li.appendChild(btn);
 document.querySelector('#tasks').appendChild(li);
 
}
function deleteThingToDo(e){
  e.target.parentNode.remove()
}