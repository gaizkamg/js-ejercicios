/*CARGA*/
$('html').toggleClass('js no-js');

/*Código*/

//Definimos el boton y el body seleccionandolos en el DOM con las propiedades getElementById, getElementsByTagName y querySelector

const miBoton = document.getElementById("miboton");

/*
const body = document.body; <-- podemos acceder al body con la propiedad
const body = document.getElementsByTagName('body')[0]; <-- o usar la propiedad getElementByTagName y seleccionar el primer elemento del array (aunque en este caso solo hay uno, si no lo indicas marca error)*/

const body = document.querySelector('body'); // este es el método EMACS6
const h1 = document.getElementsByTagName('h1')[0];

//Definimos la variable para guardar colores. Usamos un array

const colores = ['YellowGreen', 'rebeccapurple', 'tomato', 'skyblue', 'hotpink', 'orchid'];

//Ponemos el primer color de fondo que sea gris, para saber cuando empieza nuestro script a funcionar

body.style.backgroundColor = 'grey';

//Añadimos el evento click y le asignamos la función cambiarFondo
miBoton.addEventListener('click', cambiarFondo);

//Creamos la función cambiarFondo

function cambiarFondo(){

  /* Vamos a buscar un número aleatorio del 1 al 6 que son los colores dentro del array. Como los arrays empiezan en 0, tendremos que ver el número total (que es 6) y restarle 1 para que sean del 0 al 5. Usamos parseInt para que el número resultante sea un Entero (integer)
  */
  let colorIndex;
  colorIndex = parseInt(Math.random() * colores.length - 1);

  /* Ahora cambiamos el color del body estableciendo el nombre del color a su backgroundColor, y también mostramos el nombre en su H1 con innerHTML
  */

  let coloresTexto = colores[colorIndex]; // será la cadena de texto con el nombre del color

  body.style.backgroundColor = coloresTexto;
  h1.innerHTML = coloresTexto.toUpperCase(); // convertimos a mayúsculas el nombre con el método toUpperCase()
  }



