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

// esencial
const __dirRoot = __dirname + '/'
var {ver, plantilla, fileToString} = require(__dirRoot + './render/utils/esencial.js')

// CONSTANTES
var csvClaves = require(__dirRoot + './../config/csv_claves.json')

// VARIABLES
var config = require(__dirRoot + './../config/config.json')
var DB = mysql.createConnection(config.db.connection)

// FUNCIONES
var valorClaves = require(__dirRoot + './render/utils/valor_claves.js') // util para mostrar la clave de un dato del csv
var calcularEdad = require(__dirRoot + './render/utils/edad.js')
var fechaFormat = require(__dirRoot + './render/utils/edad_format.js')

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