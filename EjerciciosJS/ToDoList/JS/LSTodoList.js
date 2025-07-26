export class LSTodoList{
    static guardarDatos(dato){
        const datos = JSON.parse(localStorage.getItem("datos"))||[];
        //Dato debe ser un arreglo {}
        datos.push(dato);
        localStorage.setItem("datos",JSON.stringify(datos));
    }
    // Eliminar datos por nombre
    static eliminarDato(nombre){
        const datos = JSON.parse(localStorage.getItem("datos"))||[];
        //Filtramos por nombre y creamos un nuevo arreglo
        datos = datos.filter(dato => dato.nombre !== nombre);
        //Añadimos la nueva lista
        localStorage.setItem("datos",JSON.stringify(datos));
    }
    static actualizarDato(nombre,arreglo){
        const datos = JSON.parse(localStorage.getItem("datos"))||[];
    }
    static BuscarDato(nombre){
        let valor = false;
        const datos = JSON.parse(localStorage.getItem("datos"))||[];
        let dato = datos.find(index => index.nombre === nombre);
        if(dato === nombre || dato === undefined){
            valor = true;
        }
        return valor;
    }
    static eliminarTodosLosDatos(){
        localStorage.clear();
    }
}
// find sirve para buscar un solo objeto
// filter para todos los objetos