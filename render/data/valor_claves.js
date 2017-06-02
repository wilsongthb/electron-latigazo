valorClaves = function(){
    var lista = []
    for(var i in csvClaves){
        for(var j in csvClaves[i]){
            lista[csvClaves[i][j]] = `${i}.${j}`
        }
    }
    return lista
}

module.exports = valorClaves