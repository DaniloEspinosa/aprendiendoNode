// FS = File System

const fs = require("node:fs")

console.log("Linea 5")

const texto = fs.readFileSync("./text1.txt", "utf-8")
console.log(texto)
console.log("linea 9")

fs.readFile("./text2.txt", "utf-8", (err, data) => {

    if (err) {
        throw err
    }
    console.log(data)

    /*  otra manera de gestionar asincronias
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
    */
})

console.log("linea 19")