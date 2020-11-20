/*CARGA*/
$('html').toggleClass('js no-js');

/* Seleccionamos elementos */
let background = document.body;
let mensajeH1 = document.getElementsByTagName('h1')[0];
let boton = document.getElementById('miboton');

/* Añadimos el evento click y le asociamos una función*/
boton.addEventListener('click', generarHEX);

/* FUNCIÓN PARA GENERAR UN COLOR HEXADECIMAL */

function generarHEX() {
  const numerosHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
  let hexadecimal = "#"; //Iniciamos la cadena con una almohadilla, los colores son tipo #00AA32
  let i; // Iniciamos la variable para el for
  
      for (i=0; i<6; i++) { //necesitamos 6 elementos HEX aleatorios
        let indiceAleatorio = parseInt(Math.random() * numerosHex.length); // generamos una posición aleatoria del 1 al 16 y lo convertimos en número entero         console.log('indiceAleatorio: ' + indiceAleatorio);

        let hexGenerado = numerosHex[indiceAleatorio]; //añadimos el elemento que hemos obtenido a una variable para sumarselo a la cadena hexadecimal que teníamos con un #        console.log('hexGenerado: ' + hexGenerado);
        hexadecimal = hexadecimal + hexGenerado; //esto ocurrirá 6 veces hasta que tengamos un código de color HEX
        
      }

  background.style.background=hexadecimal;  //cambiamos el color al código generado
  mensajeH1.innerHTML = 'Color ' + hexadecimal.toUpperCase(); //mostramos en el h1 el color generado   console.log('soy el numero hex: ' + hexadecimal);

  /* HISTORIAL DE COLORES */
    
  let colorUsado = document.createElement('div'); //creamos un elemento div
  colorUsado.setAttribute('class', 'color-usado'); //le ponemos la clase color-usado
  colorUsado.style.backgroundColor=hexadecimal;  //a esa clase le cambiamos el color de fondo
  
  let historial = document.getElementsByClassName('historial')[0];
  historial.appendChild(colorUsado);
  
  
  colorUsado.addEventListener('click', cambiarFondo);
}
  
function parseColor(color) {
    var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
    return {
        hex: "#" + arr.slice(0, 3).map(toHex).join(""),
        opacity: arr.length == 4 ? arr[3] : 1
    };
}
function toHex(int) {
    var hex = int.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function cambiarFondo(){
    let colorUsadoCSS = this;
    console.log(colorUsadoCSS);
    let colorUsadoEstilo = window.getComputedStyle(colorUsadoCSS);
    let colorFondoCSS = colorUsadoEstilo.getPropertyValue('background-color');
    background.style.background = colorFondoCSS;
    
    let colorRGBhistorico = parseColor(colorFondoCSS);
            
    mensajeH1.innerHTML = 'Color ' + (colorRGBhistorico.hex).toUpperCase(); 
  }

/*function saludar(nombre){
  alert(`Hola ${nombre}`);
  }

saludar('Gaizka');
setTimeout( () => { alert('Esta ventana saldrá 3 segundos después');}, 3000);*/
