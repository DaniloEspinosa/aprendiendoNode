const fs = require('node:fs');

fs.appendFile("./text2.txt", "\nYa me quiero ir!!", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Fichero actualizado")
    }
})