// Exportando lo que necesito de los modulos
const {alumnos, matricula} = require("./alumnos.js")
const {esMenor, esMayor65, diasParaSerMayor} = require("./funciones.js")

// Para una escuela de idiomas, hace falta saber:
// 1) que alumnos son menores de edad, ya que se pasa la información de su asistencia a los padres
// 2) que alumnos son mayores de 65, ya que disponen de un descuento en la matrícula, a razón de
// un 5% por cada año que pasen de 64.

// Función que indique para los alumnos menores de edad
// su nombre, cuantos años tienen y cuantos días les faltan para cumplir 18
// De este modo:
// Pepa Pi tienes 17 años y te faltan 32 días para cumplir 18 años.

console.log(diasParaSerMayor(alumnos[0].fecha_nacimiento))

function alumnosMenores(array) {
    array.forEach( item => {
        if (esMenor(item.fecha_nacimiento)) {
            let mensaje
            mensaje = `${item.nombre} ${item.apellido} tienes ${años} y te faltan ${diasParaSerMayor(item.fecha_nacimiento)} para cumplir 18 años.`
        }
    })
}



// Función que indique que alumnos pasan de 65 años, a qué descuento tienen derecho y
// cuanto costaría su matrícula. Por ejemplo:
// Pau Guerra tienes 66 años, tu descuento es del 10% y el importe de tu matrícula es de 225 € 





console.log(alumnos[0].fecha_nacimiento)
console.log(matricula)

console.log(esMenor(alumnos[0].fecha_nacimiento))
console.log(esMayor65(alumnos[3].fecha_nacimiento))
