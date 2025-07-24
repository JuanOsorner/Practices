function crearPocion(dato1){
    //CON ESTO BUSCAMOS EL DATO CON ID pociones: si existe devuelve texto, sino devuelve null
    let pociones = JSON.parse(localStorage.getItem("pociones"))||[];
    //LO GUARDAMOS, RECORDEMOS QUE ESTO FUNCIONA COMO UN ARRAYs
    pociones.push(dato1);
    localStorage.setItem("pociones",JSON.stringify(pociones));
    console.table(pociones);
}
function eliminarPocion(nombreP){
    //OBTENER EL ARREGLO
    let pociones = JSON.parse(localStorage.getItem("pociones"))||[]; //[] devuelve uno vacio si no encuentra pociones
    let pocionFija = pociones.find(posicion => posicion.nombre === nombreP.toLowerCase());
    if(pocionFija === undefined){
        alert("No existe la posicion: "+nombreP);
    }else{
        //VAMOS A FILTRARLAS POR NOMBRE Y ELIMINAR LA QUE TIENE DATO1
        let nuevasPociones = pociones.filter(pocion => pocion.nombre !== nombreP.toLowerCase());
        //GUARDAMOS EL NUEVO ARREGLO
        localStorage.setItem("pociones",JSON.stringify(nuevasPociones));
    }
}
function actualizarPocion(nombreBuscar,nuevaCantidad){
    let pociones = JSON.parse(localStorage.getItem("pociones")||[]);
    // VAMOS A BUSCAR POR INDICES
    const indices = pociones.findIndex(p => p.nombre.toLowerCase()===nombreBuscar.toLowerCase());
    if(indices !== -1){
        pociones[indices].cantidad = nuevaCantidad;
        //GUARDAMOS LOS CAMBIOS
        localStorage.setItem("pociones",JSON.stringify(pociones));
    }
}
function limpiarDatos(){
    localStorage.clear();
}
const btnCrear = document.getElementById('btn-crear');
btnCrear.addEventListener('click',(e)=>{
    e.preventDefault(); //Para que no se recargue la pagina
    //Minusculas mejor
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const cantidad = document.getElementById('cantidad').value;
    //CREAMOS EL OBJETO JSON
    const pocion = {
        nombre: nombre,
        cantidad: cantidad
    };
    crearPocion(pocion);
    alert("POCION GUARDADA")
});
console.log()
const btnEliminar = document.getElementById('btn-eliminar')
btnEliminar.addEventListener('click',(e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    eliminarPocion(nombre);
});
const btnLeer = document.getElementById('btn-leer');
btnLeer.addEventListener('click',(e)=>{
    e.preventDefault();
    console.table(JSON.parse(localStorage.getItem("pociones"))||[]);
});
const btnActualizar = document.getElementById('btn-actualizar')
btnActualizar.addEventListener('click',(e)=>{
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    //MAS ADELANTE IMPLEMENTAREMOS UN MODAL
    let nuevaCantidad = prompt("Ingrese una nueva cantidad");
    actualizarPocion(nombre,nuevaCantidad);
});
const btnBuscar = document.getElementById('btn-buscar');
btnBuscar.addEventListener('click', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const pociones = JSON.parse(localStorage.getItem("pociones")) || [];

    const resultado = pociones.find(pocion => pocion.nombre.toLowerCase() === nombre.toLowerCase());

    if (resultado) {
        alert(`Poción encontrada:\nNombre: ${resultado.nombre}\nCantidad: ${resultado.cantidad}`);
    } else {
        alert("⚠️ No se encontró ninguna poción con ese nombre.");
    }
});
/*btnEliminar.addEventListener('click',()=>{
    limpiarDatos()
});*/