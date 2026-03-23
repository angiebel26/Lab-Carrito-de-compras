// Esto es un comentario

//!

console.log("Hola Mundo");

//! Variables se pueden declarar de 3 formas let, const y var

var mensaje = "Andres";

if (true) {
    var mensaje = "Anna";
    var mensaje4 = "Pipo";
}


console.log(mensaje);

let mensaje2 ="Andres";

if (true){
    let mensaje2 = "Anna";
    console.log(mensaje2);
}

let mensaje3= "Miguel"
console.log(mensaje3);

console.log(mensaje2);

console.log(mensaje4)

const PI = 3.14156;
const Nombre = "Mi app"

console.log(x);
var x =10;

//console.log(y);
//let y = 10;

//! == Compara unicamente el valor
console.log(5 == "5");

//! === Compara tipo valor y dato 
console.log(5 === "5" );

// ? Tipos de datos

let edad = 10;
let precio = 10.99;
let nombre = "Pepito"
let activo = true;
let sinValor; 
let vacio = null;

console.log(sinValor);
console.log(vacio);

console.log(typeof edad);
console.log(typeof precio);
console.log(typeof vacio);

let Variable1 = "Hola";
let Variable2 = 'Hola';
let Variable3 = `Hola`;

let mensaje5 = `Este es un mensaje ${Variable2} otro mensaje ${Variable3} `

console.log(`Este es un mensaje ${Variable2} otro mensaje ${Variable3} `);
