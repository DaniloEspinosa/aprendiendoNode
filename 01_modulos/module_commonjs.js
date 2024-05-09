// Calculadora
function sumar(num1, num2) { return num1 + num2 }

function restar(num1, num2) { return num1 - num2 }

// Esto se utiliza para exportar de una en una las funciones
// module.exports = sumar


// La mejor manera de exportar todas las funciones
module.exports = {
    sum: sumar,
    restar
}
