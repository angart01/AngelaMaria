'use strict'
// La declaración switch evalúa una expresión,  y compara con (case)
// ??? DISTINGUIR MAYUSCULAS toUpperCase()/ MINUSCULAS toLowerCase(); - 

var mes = prompt("Ingrese el mes actual: ", 0);
var imprime ="";

switch (mes.toUpperCase()){
    case "JUNIO":
        imprime = "Es verano";
        break;
    case "DICIEMBRE":
        imprime = "Es invierno";
        break;
    case "MAYO":
        imprime = "Es Primavera";
        break;
    case "MARZO":
        imprime = "Es otoño";
        break;
        //cuando no sucede nada de lo anterior DEFAULT:
    default:
        imprime = "No hay comentarios";
        break;
    }
    
    alert(imprime);
