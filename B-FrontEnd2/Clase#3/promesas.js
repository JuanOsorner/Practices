let peliculas = [
    {
        "titulo": "spiderman",
        "sinopsis": "Un estudiante que lo pico una araña",
        "genero": "acción, ficción, superheroes",
        "lanzamiento": 2008,
        "portada": ""
    },
    {
        "titulo": "spiderman",
        "sinopsis": "Un estudiante que lo pico una araña",
        "genero": "acción, ficción, superheroes",
        "lanzamiento": 2008,
        "portada": ""
    },
    {
        "titulo": "spiderman",
        "sinopsis": "Un estudiante que lo pico una araña",
        "genero": "acción, ficción, superheroes",
        "lanzamiento": 2008,
        "portada": ""
    },
    {
        "titulo": "spiderman",
        "sinopsis": "Un estudiante que lo pico una araña",
        "genero": "acción, ficción, superheroes",
        "lanzamiento": 2008,
        "portada": ""
    }
]
// Investigar de que trata esto:
function obtenerPeliculas(pelicula){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(pelicula.length > 0){
                resolve(pelicula);
            }else{
                reject("Error, No hay datos en la BD")
            }
        },2000); 
    });
}
//forma 1 de resolver la promesa: 
const btn = document.getElementById('boton1')
/*btn.addEventListener('click',(e)=>{
    e.preventDefault();
    //Then es para cuando entrega la informacion
    obtenerPeliculas(peliculas).then((p)=>{
        console.table(p)
    }).catch((error)=>{
        alert("EL QUE LEE ES GAY")
    })
});*/
//forma 2: resolver una promesa 
async function  mostrarPeliculas(movies){
    try{
        let respuesta = await obtenerPeliculas(movies);
        console.table(respuesta)
    }catch(error){
        alert(error);
    }
}
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    mostrarPeliculas(peliculas);
});