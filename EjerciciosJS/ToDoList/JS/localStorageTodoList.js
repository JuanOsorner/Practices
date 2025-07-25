export class localStorageTodoList{
    static guardarDatos(dato){
        const datos = JSON.parse(localStorage.getItem("datos"))||[];
        datos.push(dato);
        localStorage.setItem("datos",JSON.stringify(datos));
    }
    // Eliminar datos por nombre
    static eliminarDato(nombre){
        const datos = JSON.parse(localStorage.getItem("datos"))||[];
        //Filtramos por nombre
        datos = datos.filter(dato => dato.nombre !== nombre);
        //Añadimos la nueva lista
        localStorage.setItem("datos",JSON.stringify(datos));
    }
    static eliminarTodosLosDatos(){
        localStorage.clear();
    }
}