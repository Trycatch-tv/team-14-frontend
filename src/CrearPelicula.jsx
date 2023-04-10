import React from 'react'
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const CrearPelicula = () => {

  const mostrarNotificacion = (message, type) => {
    if (type === 'success') {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_CENTER
        });
    } else if (type === 'error') {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
}
  const submitHandler = (e) =>{
    e.preventDefault();
    // obtener todos los datos del formulario como un objeto FormData
  const formData = new FormData(e.target);

  // crear un objeto vacío para almacenar los valores del formulario
  const formValues = {};

  // recorrer todos los elementos del objeto FormData y almacenar sus valores en el objeto formValues
  for (let [key, value] of formData.entries()) {
    formValues[key] = value;
  }
  console.log(formValues)
  axios.post('https://team-14-backend-production.up.railway.app/peliculas', formValues)
  .then(response => {
    mostrarNotificacion('Pelicula creada', 'success')
    console.log('Respuesta del servidor:', response.data);
  })
  .catch(error => {
    mostrarNotificacion('Error al crear la pelicula', 'error')
    console.error('Error en la solicitud:', error);
  });

  }
  return (
    <div className="container mx-auto shadow-[rgba(0,_0,_0,_0.24)_5px_7px_8px] mt-4 p-6">
       <h1 className='text-xl font-bold'>Crear nueva pelicula</h1>
<form className='pt-4' onSubmit={submitHandler}>
  <div className="mb-6">
    <label htmlFor="titulo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
    <input type="text" id="titulo" name="titulo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titulo pelicula" required></input>
  </div>
  <div className="mb-6">
    <label htmlFor="anio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Año</label>
    <input type="number" id="anio" name='anio' min="1900" max="2099" placeholder="Año de estreno pelicula" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
  </div>
  <div className="mb-6">
    <label htmlFor="sinopsis" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinopsis</label>
    <textarea id="sinopsis" name="sinopsis"  rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deja un comentario..."></textarea>
  </div>

  
  <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
</form>
<ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
    </div>
  )
}

export default CrearPelicula
