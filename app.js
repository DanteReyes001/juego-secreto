let numeroSecreto = 0;
//console.log(numeroSecreto);
let intentos = 0;
let listaNumerosSorteados = []; 	
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        //console.log(numeroSecreto);
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); /*Strings templates recordar que se pone 
        con comillas invertidas y entre las llaves va a ir la variabley el operador ternario se inicializa con ${nombreDeLaVariable == 'lo que se quiere 
        evaluar' ? (el signo de interrogacion se interpreta como if) 'primera condicion' : 
        (los dos puntos se interpretan comoelse) 'segunda condicion' }*/
        document.getElementById('reiniciar').removeAttribute( "disabled" );
    } else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        //Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos 
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();