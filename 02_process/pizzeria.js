const pizzas = require("./datos.js")

let menu = `
=============
Node's Pizza
=============
`

/*

// La solucion que yo he adoptado:

for (i = 0; i < pizzas.length; i++) {
    menu += `\n${i + 1} - ${pizzas[i].nombre} : ${pizzas[i].precio}`
}


// Cuatro quesos 6,95
// Primavera 6,50
// Vegetariana 7,80


// Console logs de prueba
// console.log(process.argv.length)
// console.log(process.argv[2])
// console.log(pizzas[0].nombre)

let nombre
let precio


if (process.argv.length > 2) {

    switch (process.argv[2]) {
        case "1":
            nombre = pizzas[0].nombre
            precio = pizzas[0].precio
            break
        case "2":
            nombre = pizzas[1].nombre
            precio = pizzas[1].precio
            break
        case "3":
            nombre = pizzas[2].nombre
            precio = pizzas[2].precio
            break
        default:
            console.log("La opcion no esta disponible...")
            return

    }

    console.log("\n")
    console.log("Has elegido: La pizza de ", nombre)
    console.log("El importe es: ", precio, "€")
    console.log("\n")
    console.log("================================================")


} else {
    console.log(menu + "\n")

    console.log("¿Cuál prefieres?, elige un numero... \n")
}
*/


if (process.argv.length < 3) {

    for (i = 0; i < pizzas.length; i++) {
        menu += `\n${i + 1} - ${pizzas[i].nombre} : ${pizzas[i].precio}`
    }

    console.log(menu + "\n")
    console.log("¿Cuál prefieres?, elige un numero... \n")

} else {
    const eleccion = parseInt(process.argv[2])

    if (0 < eleccion && eleccion <= pizzas.length) {

        console.log("\nHas elegido : pizza", pizzas[eleccion - 1].nombre)
        console.log("El importe es", pizzas[eleccion - 1].precio.toFixed(2), "€\n")
    } else {
        console.log("\nError en la eleccion\n")
    }
}


