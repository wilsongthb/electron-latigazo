module.exports = function(fechaNoFormat, fechaSplit) {
    var fecha = fechaNoFormat.split(fechaSplit)
    return `${fecha[2]}-${fecha[1]}-${fecha[0]}`
}