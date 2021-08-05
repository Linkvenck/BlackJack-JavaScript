//creando arreglo del deck de cartas
let deck=[];

//Tipos de cartas C = cloves D = diamonds H = Hearts S = Spades
const tipos=["C","D","H","S"];

//Numeración de cartas especiales como As, Rey, Reina, Jota
const especiales=["A","J","Q","K"];

//Variables que manejan el puntaje de los participantes
let puntosJugador=0;
let puntosCompu=0;
//referencias HTML
const btnPedir = document.querySelector("#btnPedir");
const puntosHTML = document.querySelectorAll("small");


//Función para crear el deck de cartas añadiendo el nombre de las cartas al arreglo deck
const crearDeck = () =>{
    
    //ciclo para concatenar el numero de la carta con el tipo
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    //ciclo para concatenar el nombre especial de carta con el tipo de carta 
    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    } 

    //revolver el arreglo de cartas para "barajearla"
    deck= _.shuffle(deck);

    //regresa el deck de cartas
    return deck;
}

crearDeck();

//Función para poder tomar cartas
const pedirCarta = () =>{
    //Condicional donde avisa cuando ya no haya cartas en el deck
    if (deck.length === 0) {
        throw "No hay cartas";
    }
    //Toma la carta del deck y la elimina del arreglo
    const carta=deck.pop();
    return carta;
}

//darle valor numerico a las cartas que saqué el jugador
const valorCarta = (carta)=>{
    //eliminando el tipo de carta para quedarnos con el numero o numero especial de la carta
    const valor = carta.substring(0, carta.length-1);
    let puntos = 0;
    //Validando si la carta es un numero o una de tipo especial
    puntos = (!isNaN(valor)) ? valor*1 :
             valor === "A" ? 11 : 10;
    return puntos;

}

//

btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText= puntosJugador;
});