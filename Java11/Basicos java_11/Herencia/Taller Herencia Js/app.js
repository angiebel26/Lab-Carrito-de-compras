//! Clase --> Plantilla para crear objetos

class Usuario
{
    constructor(nombre,email) //cómo construyo a mis objetos. Este constructor es un método
    {
    this.nombre = nombre;
    this.email = email;
    this.activo = true;
    } 
    estado()
    {   //! condición ?         "Si es true"    "Si es false"
        return this.activo ? "Cuenta activa" : "Inactivo"
    }
    saludo()
    {
        return "Hola " + this.nombre + "mi email: " + this.email
    }
}       

let usuario1 = new Usuario("Luselly", "luselly@gmail.com")
let usuario2 = new Usuario("Pepito", "pepito@gmail.com", "hola")

console.log(usuario1.saludo());
console.log(usuario2.saludo())

console.log(usuario2.saludo());
usuario2.activo = false;
console.log(usuario2.estado());

                // !herencia
class UsuarioVIP extends Usuario 
    {
        constructor(nombre, email, membresia)
        {
            super(nombre, email); //! Me lo heredó mi papá
            this.membresia = membresia; //! Es mío propio
        }

        beneficios()
            {
                return this.nombre + "tu membresía: " + this.membresia
            }
            //! sobreescritura
            saludo()
            {
                return "Hola Usuario Vip: " + this.nombre + "tu membresia es: " + this.membresia
            }
    }

let usuarioVp = new UsuarioVIP("Pepito", "pe@coreo.com", "Platino");

console.log(usuarioVp.saludo());
console.log(usuarioVp.beneficios());

const prompt = require('prompt-sync')();
let nombre = prompt("Nombre? ")

console.log(nombre);



