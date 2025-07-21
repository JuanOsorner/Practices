//Creamos una función para agregar los elementos
function agregarTarea(){
    const input0 = document.getElementById('new-task-input');
    const texto = input0.ariaValueMax.trim();
    if(texto == ''){
        //Mientras tanto voy a crear un alert
        alert("No se ingresaron tareas")    
    }else{
        const li = document.createElement('li');
        li.classList.add('task-item');
        const input1 = document.createElement('input');
        input1.classList.add('task-checkbox')
        input1.type = 'checkbox';
        const label = document.getElementById('label')
        label.classList.add('task-text');
        label.textContent = texto;
        const button = document.createElement('button');
        button.classList.add('delete-task-btn');
        button.textContent = 'Eliminar';        
    }
}

//Vamos a crear la funcion que elimina todos esos li's creados anteriormente

function eliminarTarea(text){

    //1.Tomamos todos los elementos input del ul con id task-list
    //2.Los guardamos en un nodelist

    const tareas = document.querySelectorAll('#task-list input[type="checkbox"]');

    //3.Recorremos el nodelist y eliminar los que tengan texto

    tareas.forEach(tarea=>{
        if(tarea.checked == true){
            //parentElement permite subir un escalon, al padre para eliminarlo
            tarea.parentElement.remove();
        }
    });

    //4.Tarea representa cada input
}
