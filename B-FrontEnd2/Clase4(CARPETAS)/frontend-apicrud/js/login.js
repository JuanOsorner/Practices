let usuarioInput = document.querySelector("#usuarioInput");
//Recordemos que querySelector toma todo el objeto HTML
let contraseñaInput = document.querySelector("#contraInput");
let btnLogin = document.querySelector(".btn-user");

btnLogin.addEventListener('click',()=>{
    //alert("Probando "+usuarioInput.value+" "+contraseñaInput.value);
    let datos = validform();
    getlogin(datos);
});

//funcion para validar datos formulario
let validform = ()=>{
    let usuario;
    //Ahora vamos a validar que no este vacio dichos valores
    if(usuarioInput.value.trim() !== "" && contraseñaInput.value.trim() !== ""){
        usuario = {
            /*Hay que copiar la clave tal cual en 
            el backend*/
            "usuario": usuarioInput.value,
            "contrasena": contraseñaInput.value
        };
        console.log(usuario);
        return usuario;
    }else{
        alert("Es obligatorio escribir usuario y contraseña");
        //Es vacio el return para que el codigo no se siga leyendo
        return;
    };
};

//funcion para realizar login

let getlogin = async ( data )=>{
    try{
        let url = "http://localhost/backend-apiCrud/login"
        //ESTO ES COMPLETAMENTE NUEVO
        let respuesta = await fetch(url,{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        });
        if(respuesta.status == 401){
            alert("Usuario y/o contraseña incorrectos");
            //return vacio para evitar problemas
            return;
        }
        let datos = respuesta.json(); //Convertirlo a json
        console.log(datos);
        localStorage.setItem("usuario",JSON.stringify(datos));
        alert("Bienvenido "+datos+" "+nombre)
    }catch(error){
        console.log(error);
    };
};