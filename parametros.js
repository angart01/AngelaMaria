'use strict'

//parámetro REST (incluir todos los parámetros y los guarda en un array)
// parámetro SPREAD

function listaFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("fruta 1:", fruta1);
    console.log("fruta 2:", fruta2);
    console.log(resto_de_frutas);
}
listaFrutas("naranja", "manzana", "sandía", "pera", "melón"); //parámetros indefinidos

var frutas = ["naranja", "manzana"]
listaFrutas(...frutas, "sandía", "pera", "melón");
