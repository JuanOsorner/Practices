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
function obtenerPeliculas(pelicula){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(pelicula.length > 0){
                resolve(pelis);
            }else{
                reject("Error, No hay datos en la BD")
            }
        },2000); 
    });
}
const btn
//Mostrar la información 
console.table(obtenerPeliculas(peliculas));