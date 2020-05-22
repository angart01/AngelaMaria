'use strict'

window.addEventListener('load', function(){
    console.log('DOM cargado');


var formulario = document.querySelector("#formulario");
var box_dashed = document.querySelector(".dashed");


formulario.addEventListener('submit', function(){
    console.log("Datos enviados");

var nombre = document.querySelector("#nombre").value;
var apellidos = document.querySelector("#apellidos").value;
var edad = parseInt(document.querySelector("#edad").value);   

if(nombre.trim() == null || nombre.trim().length == 0){
    alert ("Datos ingresados inávlidos");
    return false;
}
if(apellidos.trim() == null || apellidos.trim().length == 0){
    alert ("Datos ingresados inávlidos");
    return false;
}
if(edad == null ||   isNaN(edad)){
    alert ("Datos ingresados inválidos");
    return false;
}

box_dashed.style.display = "block";


var _nombre = document.querySelector("#_nombre span");
var _apellidos = document.querySelector("#_apellidos span");
var _edad = document.querySelector("#_edad span");

_nombre.innerHTML = nombre;
_apellidos.innerHTML = apellidos;
_edad.innerHTML = edad;

        console.log(nombre, apellidos, edad);
    });
});