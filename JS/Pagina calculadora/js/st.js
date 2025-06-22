export class st{
    static validarUsuarios(usuario1, usuario2){
        if(usuario1 != usuario2){
            document.getElementById('miSegundoModal').style.display = flex;
        }
    }
    static validarConstraseñas(contraseña1, contraseña2){
        if(contraseña1 != contraseña2){
            document.getElementById('miModal').style.display=flex;
        }
    }
    static vector(usuario, correo, contraseña){
        return [usuario,correo,contraseña];
    }
    
}