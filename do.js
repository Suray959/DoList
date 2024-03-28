
let table=document.querySelector('.input')
// console.log(table);
let text=document.querySelector('#in_1')
// console.log(task);
let list=document.querySelector('.li')
// console.log(list);

table.addEventListener('submit', function(event) {
    event.preventDefault();
    let newTask = text.value.trim();
  
    if (newTask === '') {
        alert('check your task!');
        
        return ;
    }
    text.value = '';
    addTask(newTask);
  });

  function addTask(task) {
    let listItem = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);
  
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);
  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);
  
    list.appendChild(listItem);
  
  
   
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    })}
  


