function crearPocion(dato1){
    //CON ESTO BUSCAMOS EL DATO CON ID pociones: si existe devuelve texto, sino devuelve null
    let pociones = JSON.parse(localStorage.getItem("pociones"))||[];
    //LO GUARDAMOS, RECORDEMOS QUE ESTO FUNCIONA COMO UN ARRAY
    pociones.push(dato1);
    localStorage.setItem("pociones",JSON.stringify(pociones));
    console.table(pociones);
}
//Eliminemos por id 
function eliminarPocion(id){
    let pociones = JSON.parse(localStorage.getItem("pociones")||[]); //[] devuelve uno vacio si no encuentra pociones
    let index = prompt("Ingrese la pocion a eliminar por orden de pedido: ");

}
/*function eliminarPocion(nombreP){
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
}*/
//Debemos eliminar y actualizar por id
/*function actualizarPocion(nombreP,cantidadP){
    //OBTENER EL ARREGLO
    let pociones = JSON.parse(localStorage.getItem("pociones"))||[];
    let pocionFija = pociones.find(posicion => posicion.nombre === nombreP.toLowerCase());
    if(pocionFija === undefined){
        alert("No existe la pocion: "+nombreP);
    }else{
        //VAMOS A FILTRARLAS POR NOMBRE Y ELIMINAR LA QUE TIENE DATO1
        let nuevasPociones = pociones.filter(pocion => pocion.nombre !== nombreP.toLowerCase());
        //GUARDAMOS EL NUEVO ARREGLO
        localStorage.setItem("pociones",JSON.stringify(nuevasPociones));
    }

}*/
function limpiarDatos(){
    localStorage.clear();
}
const btnCrear = document.getElementById('btn-crear');
btnCrear.addEventListener('click',(e)=>{
    e.preventDefault(); //Para que no se recargue la pagina
    //Minusculas mejor
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const cantidad = int(document.getElementById('cantidad').value);
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
/*btnEliminar.addEventListener('click',()=>{
    limpiarDatos()
});*/