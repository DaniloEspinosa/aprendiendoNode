const fs = require('node:fs');

fs.writeFile("./text.txt", "Todavia un poquito mas 2!!", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Archivo creado")
    }
})