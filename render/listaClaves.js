var listaClaves = []

for(var i in csv_claves){
    for(var j in csv_claves[i]){
        listaClaves[csv_claves[i][j]] = `${i}.${j}`
    }
}

module.exports = listaClaves