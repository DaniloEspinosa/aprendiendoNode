function esMenor(nacimiento) {

    let date = new Date()
    let arrayDate = date.toLocaleString().split(", ")
    let hoy = arrayDate[0].split("/")
    
    nacimiento = nacimiento.split("-")

    if (hoy[2] - nacimiento[0] > 18 ||
        (parseInt(hoy[2]) - parseInt(nacimiento[0]) == 18 && parseInt(hoy[1]) >= parseInt(nacimiento[1]) && parseInt(hoy[0]) >= parseInt(nacimiento[2]))) {
        return false;
    } else {
        return true;
    }
}

function esMayor65(nacimiento) {

    let date = new Date()
    let arrayDate = date.toLocaleString().split(", ")
    let hoy = arrayDate[0].split("/")
    
    nacimiento = nacimiento.split("-")

    if (hoy[2] - nacimiento[0] > 65 ||
        (parseInt(hoy[2]) - parseInt(nacimiento[0]) == 65 && parseInt(hoy[1]) >= parseInt(nacimiento[1]) && parseInt(hoy[0]) >= parseInt(nacimiento[2]))) {
        return true;
    } else {
        return false;
    }
}

function diasParaSerMayor(nacimiento) {

    let date = new Date()
    let arrayDate = date.toLocaleString().split(", ")
    let hoy = arrayDate[0].split("/")

    if (esMenor(nacimiento)) {
        nacimiento = nacimiento.split("-")

        let años = 18 - (parseInt(hoy[2]) - parseInt(nacimiento[0]))
        let meses = parseInt(nacimiento[1]) -parseInt(hoy[1])
        let dias = parseInt(nacimiento[2]) -  parseInt(hoy[0])

        // console.log(años)
        // console.log(meses)
        // console.log(dias)
        return dias + meses * 30 + años * 365
    }
}

function añosTienes(nacimiento) {
    let date = new Date()
    
}

module.exports = {
    esMenor,
    esMayor65,
    diasParaSerMayor
}