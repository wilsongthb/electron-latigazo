module.exports = function(fechaNoFormat) {
    var fecha = fechaNoFormat.split(config.csv.fechaSplit)
    return `${fecha[2]}-${fecha[1]}-${fecha[0]}`
}