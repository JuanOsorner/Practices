export class Usuario{
    #NombreUsuario;
    #Clave;
    constructor(nombre,clave){
        this.#Clave = nombre;
        this.#NombreUsuario = nombre;
    }
    getClave(){
        return this.#Clave;
    }
    setClave(clave){
        this.#Clave = clave;
    }
    getNombre(){
        return this.#NombreUsuario;
    }
    setNombre(nombre){
        this.#NombreUsuario = nombre;
    }
    
}