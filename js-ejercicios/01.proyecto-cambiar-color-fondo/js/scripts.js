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

//Ponemos el primer color de fondo seleccionando el primer objeto del array colores (coral)
let color = 'grey';
body.style.backgroundColor = color;

//Añadimos el evento click y le asignamos la función cambiarFondo
miBoton.addEventListener('click', cambiarFondo);

//Creamos la función

function cambiarFondo(){

  let colorIndex;

/* Vamos a buscar un número aleatorio del 1 al 6 que son los colores dentro del array. Repetiremos este proceso siempre que el número resultante sea distinto al que ya está establecido como fondo. Si 'color = al que generamos', se repite el do
*/

  do {

  colorIndex = Math.ceil(Math.random()*colores.length - 1); //Math.ceil redondea por arriba los decimales
  console.log('COLORINDEX dentro de DO: ' + colorIndex);
  }
  while (color === colorIndex);

 /* Ahora cambiamos el color del body estableciendo el nombre del color a su backgroundColor, y también el nombre en su H1 con innerHTML
*/
//  console.log('COLORINDEX tras DO: ' + colorIndex + ' Color anterior: ' + color + ' = ' + colores[color])  ;
  coloresTexto = (colorIndex + 1) + '. ' + colores[colorIndex];
  body.style.backgroundColor = colores[colorIndex];
  h1.innerHTML = coloresTexto.toUpperCase();
  h1.classList.toggle("trans");
//  console.log('Cambio de color normal: ' + colorIndex + ' = '+ coloresTexto);
  color = colorIndex; // aquí guardamos el color que hemos usado para compararlo después cuando volvamos a pichar.


  /* Vamos a mantener un historial de colores seleccionados y los vamos a mostrar en pantalla
  */

  /* Creamos un div con la clase color-usado */
  let colorUsado = document.createElement("div");

  colorUsado.setAttribute('class','color-usado');

  /* Seleccionamos el div padre, primer elemento con la clase "historial", recuerda que es un array y hay que indicar su posición (ya que getElementsByClassName devuelve todos los elementos en un array) */
  let historial = document.getElementsByClassName('historial')[0];

  /* Añadimos el div colorUsado como hijo al div historial */
  historial.appendChild(colorUsado);

  /* ponemos el color de fondo al div colorUsado el color seleccinado y ponemos su número en el texto interno del div */
  colorUsado.style.backgroundColor = colores[colorIndex];
  colorUsado.innerHTML = (colorIndex + 1);

}



