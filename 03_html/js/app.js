// Sintaxis que importa todas las funciones
import libreria from "./calculadora.js"



console.log(libreria)
console.log(libreria.sumar(1,2))
console.log(libreria.restar(100,25))


// Una sintaxis para utilizar solo las funciones que me interesan
const {sumar, restar} = libreria

console.log(sumar(1,2))
console.log(restar(100,25))


document.querySelector("p").innerHTML = "hola"