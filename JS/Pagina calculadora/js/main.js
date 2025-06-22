import { st } from './st.js';
import { Usuario } from './Usuario.js';
const cerrarModal = document.getElementById('cerrarModal');
cerrarModal.addEventListener('click',()=>{
    document.getElementById('Modal').style.display = none;
});