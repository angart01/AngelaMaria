'use strict'
//Switch

var edad = 35;
var imprime = "";

switch (edad){
case 18:
    imprime = "Acabas de cumplir la mayoria de edad";
    break;
case 35:
    imprime = "Ya eres un adulto";
    break;
case 75:
    imprime = "Eres un anciano";
    break;
    //cuando no sucede nada de lo anterior DEFAULT:
default:
    imprime = "No hay comenatrios";
    break;
}

console.log(imprime);