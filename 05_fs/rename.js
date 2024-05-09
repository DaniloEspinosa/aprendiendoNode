const fs = require("node:fs")

/*
fs.rename("./text1.txt", "./text2.txt", (error) => {

    if (error) {
        fs.rename("./text2.txt", "./text1.txt", (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Fichero renombrado")

            }
        })
    } else {
        console.log("Fichero renombrado")
    }
})
*/

function cambiarNombre(nameOld, nameNew) {
    fs.rename(nameOld, nameNew, (error) => {

        if (error) {
            fs.rename(nameNew, nameOld, (error) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log("Fichero renombrado")
                }
            })
        } else {
            console.log("Fichero renombrado")
        }
    })
}

// cambiarNombre("./text2.txt", "./text1.txt")

function cambiarNombre2(nameOld, nameNew) {
    fs.rename(nameOld, nameNew, (error) => {
        if (error) {
            cambiarNombre2(nameNew, nameOld)
        } else {
            console.log("Fichero renombrado")
        }
    })

}
// Lo del profe
// function cambiarNombre(nameOld, nameNew) {
//     fs.rename(nameOld, nameNew, (error) => {
//       if (error) {
//         cambiarNombre(nameNew, nameOld);
//       } else {
//         console.log("Fichero renombrado");
//       }
//     });
//   }

cambiarNombre2("./text2.txt", "./text1.txt")
