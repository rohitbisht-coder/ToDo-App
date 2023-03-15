let addBtn= document.querySelector(".task-submit")
let input = document.querySelector('.task-input');
let msgAlert = document.querySelector('.alert');
let alertMsg = document.querySelector('h1');

 addBtn.addEventListener('click' , ()=>{
    if(input.value == false){
        alert('Task Cannot Be Blank')
        return;
      }
   addtask ()
   
 })


 
 const addtask = (_task = input.value)=>{
    const container = document.createElement('div');
       container.classList.add("task-list");
       const html = `<div class="tasks">
       <div class="task">
  <div class="content ${_task? "" : "hidden "}">
  </div>
    <input type="text" class="text ${_task ? "hidden " : ""}">
  </input>
  <div class="actions">
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>
  </div>
   </div>
   `
   container.insertAdjacentHTML("afterbegin" , html);
 
 
  const mainDiv = container.querySelector(".content");
  const deleteBtn = container.querySelector(".delete");
  const editBtn = container.querySelector(".edit");
  const inputArea = container.querySelector(".text")
  
 
  deleteBtn.addEventListener('click',()=>{
      container.remove();
      saveData()
  });

 inputArea.value = _task;
 mainDiv.innerHTML = _task;


 editBtn.addEventListener('click',()=>{
   if(editBtn.innerHTML == "Edit"){
     editBtn.innerHTML= "Save";
   }else if(editBtn.innerHTML== "Save"){
     editBtn.innerHTML = "Edit";
   }
   inputArea.classList.toggle("hidden")
   mainDiv.classList.toggle("hidden")
   saveData()
    
 })


 inputArea.addEventListener('change' , (event)=>{
    const value = event.target.value;
    mainDiv.innerHTML = value;
 })  


 const reset = ()=>{
   input.value = ''
 }
 reset()

  document.body.appendChild(container);
  function saveData(){
    let notess = document.querySelectorAll('input');
    let data = [];
    notess.forEach((note)=>{
      return data.push(note.value)
    })
    localStorage.setItem('data' , JSON.stringify(data))
    }
    saveData();
 
 }
 

 
(()=>{
    const notes = JSON.parse(localStorage.getItem('data'));
    if(notes) notes.forEach((sum)=>addtask(sum))
})()



