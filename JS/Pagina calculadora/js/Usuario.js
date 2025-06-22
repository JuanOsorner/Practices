import { st } from "./st.js";
export class Usuario{
    #NombreUsuario;
    #Correo;
    #Clave1;
    constructor(nombre,correo="",clave1){
        this.#Clave1 = clave1;
        this.#NombreUsuario = nombre;
        this.#Correo = correo;
        if(!correo.includes("@")){
            document.getElementById('')
        }
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
    iniciarSesion(NomUsuario,contraseña,i){
        
    }
    registrarse(NomUsuario,correo,contraseña,Ccontraseña,i){
        let valor1 = st.validarUsuarios(NomUsuario,i);
        let valor2 = st.validarCorreo(correo,i);
        let valor3 = st.validarConstraseñas(contraseña,Ccontraseña);
        if(valor1 == false || valor2 == false || valor3 == false){
            console.table(st.tabla(NomUsuario,correo,contraseña));
        }
    }
}