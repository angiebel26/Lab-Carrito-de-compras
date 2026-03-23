//! Estructuras datos

//& Arrays

let learners = ["Ana", "Luis", "Carlos", "María"];

// Ahora sí puedes acceder a sus elementos
console.log(learners[0]); // Ana
console.log(learners[1]); // Luis
console.log(learners[2]); // Carlos
console.log(learners[3]); // María

// Y también a su longitud
console.log(learners.length); // 4

//! añadir elemento
learners.push("Juanda");
console.log(learners);

//! borrar
learners.pop();
console.log(learners);

//!Buscar un elemento
console.log(learners.includes("Juanda"));

let carrito = [];
let productos = ["Audifonos", "Teclado"]

//! Objectos

let estudiantes = {
    nombre: "Pablo",
    telefono: 12531456,
    ciudad: "Bogota",
    estactivo: true,
    hobbies: ["Jugar","Programar","Escuchar musica"]
}

console.log(estudiantes.nombre);
console.log(estudiantes["ciudad"])


estudiantes.telefono = 23456212;
estudiantes.hobbies.push("Leer");
console.log(estudiantes)

console.log(Object.keys(estudiantes));
console.log(Object.keys(estudiantes)); 

