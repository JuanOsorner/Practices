const newUl = document.getElementById('taskList');
const buttonAddtask = document.getElementById('taskAddButton')
buttonAddtask.addEventListener('click',(e)=>{
    e.preventDefault();
    const taskInput = document.getElementById('taskInput').value;
    //(1)Creamos un li
    const newLi = document.createElement('li');
    newLi.textContent = taskInput;
    newUl.appendChild(newLi);
    const newElementdiv = document.createElement('div');
    //(2)Creamos el div
    newElementdiv.classList.add('task-actions');
    newLi.appendChild(newElementdiv);
    //(3)Creamos el boton blanco
    const newElementCompletedbutton = document.createElement('button');
    newElementCompletedbutton.classList.add('complete-btn');
    newElementCompletedbutton.textContent = "⬜";
    newElementCompletedbutton.addEventListener('click',(eve)=>{
        eve.preventDefault();
        newLi.classList.add("completed");
        newElementCompletedbutton.textContent = "✅";
    });
    newElementdiv.appendChild(newElementCompletedbutton);
    //(4)Creamos el boton basura
    const newElementDeletebutton = document.createElement('button');
    newElementDeletebutton.classList.add("delete-btn")
    newElementDeletebutton.textContent = "🗑️";
    newElementdiv.appendChild(newElementDeletebutton);
    //(5)Creamos el metodo eliminar tarea
    newElementDeletebutton.addEventListener('click',(ev)=>{
        ev.preventDefault();
        newUl.removeChild(newLi);
    });
    
});

//Con appendchild marcamos la gerarquia de la creación 
//Podemos usar removechild para eliminar 
// Es mejor usar .classlist.add para añadir la clase