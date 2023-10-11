let ultimoOperador = null;
let n1 = '';
let n2 = '';
let ultimoDisplay = null;
let ultimoEnPantalla = '';

const botonNumeros = document.querySelectorAll('[data-number]');
const botonOperador = document.querySelectorAll('[data-operator]');
const display = document.getElementById('display');
const igual = document.getElementById('igual');


botonOperador.forEach((boton) => 
    boton.addEventListener('click', () => anexarOperador(boton.textContent))
)

botonNumeros.forEach((boton) => 
    boton.addEventListener('click', () => anexarNumero(boton.textContent))
)

igual.addEventListener('click', () =>
    evaluar()
)

function anexarNumero(numero){
    if (display.textContent == 0){
        limpiarDisplay();
    }
    display.textContent += numero;
    ultimoEnPantalla += numero;
    console.log(display.textContent)
}

function limpiarDisplay(){
    display.textContent = '';
}

function anexarOperador(operador){

    if(ultimoOperador != null){
        evaluar(operador)
    } else {
        n1 = ultimoEnPantalla;
        ultimoDisplay = display.textContent;
        display.textContent += operador;
        ultimoOperador = operador;
        ultimoEnPantalla = '';
        
        console.log(n1)
    }
}


function evaluar (operador){
    if (ultimoEnPantalla == '' && n2 == ''){
        display.textContent = ultimoDisplay;
        display.textContent += operador;
        ultimoOperador = operador;
    }
    if(ultimoEnPantalla != ''){
        n2 = ultimoEnPantalla;
        ultimoEnPantalla = '';
    }
    if (ultimoEnPantalla == '' && n2 != ''){
        display.textContent = (operar(ultimoOperador, n1, n2))
    }
}

function suma (n1, n2){
    return n1 + n2;
}

function resta (n1, n2){
    res = n1 - n2;
    return res;
}

function multi (n1, n2){
    res = n1 * n2;
    return res;
}

function div (n1, n2){
    res = n1 / n2;
    return res;
}

function operar (operador, n1, n2){
    n1 = Number(n1);
    n2 = Number(n2);
    switch (operador){
        case "+":
            return suma(n1, n2);
            break;
        case "-":
            return resta(n1, n2);
            break;
        case "*":
            return multi(n1, n2);
            break;
        case "/":
            return div(n1, n2);
            break;
    }
}




