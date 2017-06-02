var ver = function(){
    if(config.consola){
        for(i in arguments){
            console.log(arguments[i])
        }
    }
}

var plantilla = function(ruta){
    return fs.readFileSync(path.join(dirRoot, ruta), { encoding: 'utf-8'})
}
var fileToString = plantilla

module.exports = {
    ver,
    plantilla,
    fileToString
}