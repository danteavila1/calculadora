let ultimoOperador = null;
let n1;
let n2;
let ultimoEnPantalla;

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
    evaluar();
    operar(n1, n2, operador);
)


function anexarNumero(numero){
    if (display.textContent == 0){
        limpiarDisplay();
    }
    display.textContent += numero;
    ultimoEnPantalla = display.textContent;
}

function limpiarDisplay(){
    display.textContent = '';
}

function anexarOperador(operador){
    evaluar();
    console.log(n1,' ', n2)
    if(ultimoOperador != null){
        display.textContent = ultimoDisplay;
        display.textContent += operador;
        ultimoEnPantalla = '';
    } else {
        ultimoDisplay = display.textContent;
        display.textContent += operador;
        ultimoOperador = operador;
        ultimoEnPantalla = '';
    }
}

function evaluar (){
    if (n1 == null) {
        n1 = ultimoEnPantalla;
    } else {
        n2 = ultimoEnPantalla;
    }
}

function suma (n1, n2){
    res = n1 + n2;
    return res;
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




