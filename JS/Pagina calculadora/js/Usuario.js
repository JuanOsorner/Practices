import { st } from "./st.js";
export class Usuario{
    #NombreUsuario;
    #Correo;
    #Clave1;
    constructor(nombre,correo,clave1){
        this.#Clave1 = clave1;
        this.#NombreUsuario = nombre;
        this.#Correo = correo;
    }
    getClave(){
        return this.#Clave1;
    }
    setClave(clave){
        this.#Clave1 = clave;
    }
    getNombre(){
        return this.#NombreUsuario;
    }
    setNombre(nombre){
        this.#NombreUsuario = nombre;
    }
    getCorreo(){
        return this.#Correo;
    }
    setClave(correo){
        this.#Correo = correo;
    }
    iniciarSesion(NomUsuario,contraseña){
        
    }
    registrarse(NomUsuario,correo,contraseña,Ccontraseña){

    }
}