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
const __dirRoot = __dirname
const __dirConfig = path.join(__dirname, '../config')
// var {ver, plantilla, fileToString} = require(path.join(__dirRoot, '/render/utils/esencial.js'))

// CONSTANTES
// var csvClaves = require(path.join(__dirConfig, 'csv_claves.json'))

// VARIABLES
// var config = require(path.join(__dirConfig, 'config.json'))
// var DB = mysql.createConnection(config.db.connection)

// FUNCIONES
// var valorDeClaves = require(path.join(__dirRoot, 'render/utils/valor_claves.js')) // util para mostrar la clave de un dato del csv
// var calcularEdad = require(path.join(__dirRoot, 'render/utils/edad.js'))
// var formatearFecha = require(path.join(__dirRoot, 'render/utils/edad_format.js'))

// ==========================================
// RECURSOS GLOBALES PARA LA APLICACION
// ==========================================

// abrir conexion con mysql
// DB.connect()

new Vue({
    el: '#root',
    components: {
        'menu-principal': require(path.join(__dirRoot, 'render/components/menu-principal'))
    }
})