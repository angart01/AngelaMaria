'use strict'

//Pedir nombre y edad del usuario y decir si es: "niño, adulto, anciano"
// IF (SI) Estructura if(si pasa esto){ ejecuta esto}

var nombre = prompt("Ingrese un nombre", 0);
var edad = parseInt(prompt("Ingrese su edad:", 0));


if(edad <=12){
    alert(nombre+ " Aún eres un(a) niño(a)")
}else if(edad >=30){
    alert(nombre+ " Eres un adulto(a)")
}else if(edad >=70){
        alert("Eres un(a) anciano(a)")
    }else{
        alert("No hemos caracterizado su edad")
    }

    



