// ===================================
//
// VALORES GLOBALES PARA LA APLICACION
//
// ===================================
var config = require('./render/config.json')
var csv_claves = require('./render/csv_claves.json')
var listaClaves = [] // contiene la clave que se usa en el archivo render/csv_claves.json para leer el archivo csv
var edad = require('./render/edad.js')

for(var i in csv_claves){
    for(var j in csv_claves[i]){
        listaClaves[csv_claves[i][j]] = `${i}.${j}`
    }
}



new Vue({
    el: '#root',
    components: {
        'app': require('./render/components/app'),
        // 'csv-to-db': require('./render/components/csv-to-db')
    }
})