/*CARGA*/
$("html").toggleClass("js no-js");

/* Creamos el objeto que contendrá todas las citas */

let quotes = {

  quote_1: {
    text: "No te tomes la vida demasiado en serio.No saldrás de ella con vida",

    author: "Elbert Hubbard"
  },

  quote_2: {
    text: "Tener la conciencia limpia es señal de mala memoria",

    author: "Steven Wright"
  },

  quote_3: {
    text: "Me gustan los largos paseos, especialmente cuando los toman gente molesta",

    author: "Fred Allen"
  },

  quote_4: {
    text: "Creo que he encontrado el eslabón perdido entre el animal y el hombre civilizado. \n Somos nosotros",

    author: "Konrad Lorenz"
  },


  quote_5: {
    text: "Todo es divertido, con tal de que le suceda a otra persona",

    author: "Will Rogers"
  },

  quote_6: {
    text: "Siempre recuerda que tú eres único. Absolutamente igual que todos los demás",
    author: "Margaret Mead"
  },

  quote_7: {
    text: "Estoy seguro de que el universo está lleno de vida inteligente. Simplemente ha sido demasiado inteligente para venir aquí",
    author: "Arthur C. Clark"
  },
  quote_8: {

    text: "Sólo hay dos cosas infinitas: el universo y la estupidez humana. Y no estoy tan seguro de la primera",

    author: "Albert Einstein"
  },

  quote_9: {

    text: "Un experto es alguien que te explica algo sencillo de forma confusa de tal manera que te hace pensar que la confusión sea culpa tuya",

    author: "William Castle"
  },
  quote_10: {

    text: "Claro que lo entiendo. Incluso un niño de cinco años podría entenderlo. ¡Qué me traigan un niño de cinco años! ",

    author: "Groucho Marx"
  }

};

/* Creamos el botón que disparará nuestra función generateQuote */

let button = document.getElementsByClassName("button")[0];
button.addEventListener("click", generateQuote);



function generateQuote() {

  /* seleccionamos elemento del párrafo de la cita en el HTML*/

  let text = document.getElementsByClassName("quote-text")[0];

  /* seleccionamos el elemento del autor de la cita en el HTML*/

  let author = document.getElementsByClassName("quote-author")[0];


  /* generamos un número aleatorio que sea Entero, redondeando hacia arriba con math.ceil un número aleatorio multiplicado por el total de objetos dentro de quotes */

  let quoteIndex = parseInt(Math.ceil(Math.random() * (Object.keys(quotes).length)));

  //  console.log("quoteIndex: " + Object.keys(quotes).length);
  //  console.log("text: " + "quote_" + quoteIndex);

  /* convertimos el índice en el nombre de la propiedad del objeto */

  let quoteSelected = "quote_" + quoteIndex;
  //  console.log("quoteSelected: " + quoteSelected);

  /* Extraemos el texto y el autor de la cita seleccionada*/

  let quoteText = quotes[quoteSelected].text;
  let quoteAuthor = quotes[quoteSelected].author;

  /* Incluimos el texto y el autor de la cita seleccionada a los elementos HTML */

  text.innerHTML = quoteText;
  author.innerHTML = quoteAuthor;

}
