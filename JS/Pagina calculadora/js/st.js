export class st{
    matriz = [];
    static validarUsuarios(usuario1,i){
        let valor = false;
        if(matriz[i][0]==usuario1){
            document.getElementById('miSegundoModal').style.display = flex;
        }else{
            valor = true;
        }
        return valor;
    }
    static validarCorreo(correo,i){
        let valor = false;
        if(matriz[i][1]==correo){
            document.getElementById('modalAlerta').style.display = flex;
        }else{
            valor = true;
        }
        return valor;
    }
    static validarConstraseñas(contraseña1, contraseña2){
        let valor = false;
        if(contraseña1 != contraseña2){
            document.getElementById('miModal').style.display=flex;
        }else{
            valor = true;
        }
        return valor;
    }
    static tabla(usuario, correo, contraseña){
        matriz[-1] = [usuario,correo,contraseña];
        return matriz;
    }
    //CREEMOS PRIMERO LA TABLA PARA VALIDAR USUARIO Y CORREO
}