let numerosecreto = 0;
let intentosUsuario = 0;
let listaNumerosSorteados = [];
let numeroMaximoDeIntentos = 10;

//console.log(numerosecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroDeUsuario === numerosecreto) {
        asignarTextoElemento("p", `Felicidades, has acertado el numero secreto en: ${intentosUsuario} ${(intentosUsuario === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no ha acertado
        if (numeroDeUsuario > numerosecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentosUsuario++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
     document.querySelector("#valorUsuario").value = "";
}

function generadorNumeroSecreto() {
    let numerosGenerados = Math.floor(Math.random() * numeroMaximoDeIntentos) + 1;
    //console.log(numerosGenerados);
    //console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximoDeIntentos){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
        //Si el numero generado esta en la lista 
        if (listaNumerosSorteados.includes(numerosGenerados)){
            return generadorNumeroSecreto ();
        } else {
            listaNumerosSorteados.push(numerosGenerados);
            return numerosGenerados;
        }
   }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximoDeIntentos}`);
    numerosecreto = generadorNumeroSecreto();
    intentosUsuario = 1;
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function reiniciarJuego() {
    //Limpiar caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalos del juego
    //Geenerar un nuevo numero aleatorio
    //Inicializar el contador de intentos
    condicionesIniciales();
    ///Deshabilitar boton de nuevo juego
    
}
    


condicionesIniciales(); 

