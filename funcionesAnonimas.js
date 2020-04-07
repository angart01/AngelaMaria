'use strict'
//funciones anónimas: no tiene nombre y se guarda dentro de una variable
//funciones flecha

function suma(n1, n2, sumayMuestra,SumaPorDos){
    var sumar = n1 + n2;

    sumayMuestra(sumar);
    SumaPorDos(sumar);

    return sumar;

    sumame (5,7, dato => {
        console.log("la suma es:", dato);
    },
    dato => {
        console.log("la suma por dos es: ", (dato*2));
        });
        

    }