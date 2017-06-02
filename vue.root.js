// ================================
// DEPENDENCIAS
// ================================
var path = require('path')
var fs = require('fs')
var mysql = require('mysql')
// ================================
// DEPENDENCIAS
// ================================

// ==========================================
// RECURSOS GLOBALES PARA LA APLICACION
// ==========================================

// VARIABLES
var config = require('./render/config/app.json')
var csvClaves = require('./render/config/csv_claves.json')
var dirRoot = __dirname
var DB = mysql.createConnection(config.db.connection)
// FUNCIONES
var valorClaves = require('./render/data/valor_claves.js') // util para mostrar la clave de un dato del csv
var calcularEdad = require('./render/edad.js')
var fechaFormat = require('./render/edad_format.js')
var {ver, plantilla, fileToString} = require('./render/esencial.js')

// ==========================================
// RECURSOS GLOBALES PARA LA APLICACION
// ==========================================

// abrir conexion con mysql
// DB.connect()

new Vue({
    el: '#root',
    components: {
        'app': require('./render/components/app')
    }
})