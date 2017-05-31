// ================================
// DEPENDENCIAS
// ================================
var mysql = require('mysql')

// ===================================
// VALORES GLOBALES PARA LA APLICACION
// ===================================
var config = require('./render/config.json')
var csv_claves = require('./render/csv_claves.json')
var listaClaves = require('./render/listaClaves.js') // contiene la clave que se usa en el archivo render/csv_claves.json para leer el archivo csv
var DB = mysql.createConnection(config.db.connection)
var rootDir = __dirname

// ===================================
// FUNCIONES GLOBALES
// ===================================
var edad = require('./render/edad.js')
var fechaFormat = require('./render/edadFormat.js')

// abrir conexion con mysql
// DB.connect()

new Vue({
    el: '#root',
    components: {
        'app': require('./render/components/app')
    }
})