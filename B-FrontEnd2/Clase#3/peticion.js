//Variables globales
let divRespuesta = document.querySelector("#respuesta");
let boton = document.querySelector("#boton2");

let url = "https://jsonplaceholder.typicode.com/users";

/*boton.addEventListener('click', () => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      divRespuesta.innerHTML = ""; // Limpia antes de insertar
      data.forEach(user => {
        divRespuesta.innerHTML += `
          <h3>${user.name}</h3>
          <h3>${user.phone}</h3>
          <h3>${user.email}</h3>
        `;
      });
      console.table(data);
    })
    .catch(error => {
      alert("Error al cargar datos: " + error);
    });
});*/

async function obtenerPeliculas() {
    try{
        let url = "http://localhost/peliculasApi/peliculas.txt";
        let respuesta = await fetch(url);
        let peliculas = await respuesta.json();
        console.log(peliculas);
    }catch(error){
        console.log(error);
    }
}

boton.addEventListener('click',()=>{
    obtenerPeliculas();
})