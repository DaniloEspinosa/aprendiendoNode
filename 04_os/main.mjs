// Módulo operating sistem
// const os = require('node:os');

// Con control + . (punto) sobre el require se transforma a la nueva sintaxis de ecmascript 6
// de esta manera hay que cambiar la extension del fichero de .js a .mjs
import { type, userInfo, homedir, platform, arch, cpus, freemem, totalmem, uptime } from 'node:os';


console.log("Informacion del Sistema Operativo:")

console.log("Nombre del Sistema Operativo: ", type())
console.log("Usuario activo: ", userInfo().username)
console.log("Directorio principal: ", homedir())
console.log("Tipo de sistema operativo: ",platform())
console.log("Arquitectura: ", arch())
console.log("Cuantas CPUs hay: ", cpus().length)
console.log("Memoria libre: ", (freemem() / (1024 * 1024)).toFixed(2), "mb")
console.log("Memoria total: ", (totalmem() / (1024 * 1024 * 1024)).toFixed(2), "Gb")
console.log("Tiempo que lleva la maquina funcionando: ", (uptime()))

function horaMinSeg (num) {
    parseFloat(num)
    let hora = parseInt(num/(60 * 60))
    num = num - (Math.floor(hora) * 60 * 60)
    let min = num/(60)
    num = num - (Math.floor(min) * 60)
    let seg = num


    return `${Math.floor(hora)} horas, ${Math.floor(min)} minutos, ${Math.floor(seg)} segundos`

}

console.log(horaMinSeg(uptime()))