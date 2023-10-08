let n1 = 10;
let n2 = 2;
const operador = "/";

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



