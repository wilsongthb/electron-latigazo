// var path = require('path')
// var fs = require('fs')

const ipc = require('electron').ipcRenderer

// informacion inicial del usuario
const sessionInit = {
    username: '',
    password: '',
    logued: false,

    // comiteDeGestion: '',
    // nombre: '',
}

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    components: {
        // componentes externos
        // estos son componentes externo, no necesita de cunamas, pero cunamas si requiere del ellos
        'json-editor': require(path.join(__dirRoot, 'render/components/json-editor')), // modal, 

        // componentes internos
        'inicio': require('./inicio'), // 0
        'csv': require('./csv'), // 1
        'lista-de-registros': require('./lista-de-registros'), // 2
        'cartilla': require('./cartilla'),
        'ver-fichas': require('./ver-fichas'),
        'cronograma': require('./cronograma'),
        'ayuda': require('./ayuda'),


        // 'lista-filtrada': require('./lista-filtrada'), // 5
        
        // 'ver-cartilla': require('./ver-cartilla'),
        
        // 'ver-csv': require('./ver-csv'),
        // 'ver-lista': require('./ver-lista'),
        // 'ver-detalles': require('./ver-detalles'),
        // 'sync-db': require('./sync-db'),
        
    },
    data: function(){
        return {
            vista: '0', // numero de la vista
            session: sessionInit, // valores iniciales de session
            datos: [], // array que contiene los datos del archivo csv
            detallesCartilla: false,// ver cartilla
            verReadme: fs.readFileSync(path.join(__dirRoot, '../readme.md'), { encoding: 'utf-8'}), // string del contenido del archivo readme.md
            cartillas: [],

            // valores de configuracion
            config: require(path.join(__dirConfig, 'config.json')),
            
            // path, deveran de cargarse desde config
            pathClavesCsv: path.join(__dirConfig, 'arr_claves_csv.json'), // un array en json en donde esta la clave y el sgnificado de la clave, ejm 12: beneficiario.nombre
            pathClavesMostrar: path.join(__dirConfig, 'csv_claves_mostrar.json'),
            pathCsvFile: path.join(__dirRoot, '../../resources/REPORTE Y PADRON OFICIAL MAYO 2017 POR PROVINCIA.csv'),
            pathFichas: path.join(__dirConfig, 'fichas.json'),

            // corregir
            arrayClavesCsv: require(path.join(__dirConfig, 'arr_claves_csv.json')), // se calcula con los methodos this
            objectClavesMostrar: require(path.join(__dirConfig, 'csv_claves_mostrar.json')),
            fichas: require(path.join(__dirConfig, 'fichas.json'))


            //-----------------------------------------------------
            // clavesCsv: require(path.join(__dirConfig, 'csv_claves.json')),
            // // ver detalles
            // detalles: false, // objeto detalles, inicialmente se usa como flag de vista detalle

            
            
            // //cartillas
            
            
            // // ver lista
            // data: [], // array que contiene los datos del archivo csv

            // session
            

            // // ver csv
            // verClaves: false, // mostrar o ocultar claves
            // path: '../tests/entrada.csv', // path del archivo csv

            
        }
    },
    methods: {
        guardarEnDatos(datosCsv){
            this.datos = datosCsv
        },
        // darClavesCsv () {
        //     // se encarga de probeer claves a los demas componentes
        //     return require(path.join(__dirConfig, 'csv_claves.json'))
        // },
        // darArrayDeClavesCsv () {
        //     // se encarga de probeer claves a los demas componentes
        //     var valorDeClaves = require(path.join(__dirRoot, 'render/utils/valor_claves.js')) // util para mostrar la clave de un dato del csv
        //     return valorDeClaves(require(path.join(__dirConfig, 'csv_claves.json')))
        // },
        // darArrayDeClavesMostrar () {
        //     // se encarga de probeer claves a los demas componentes
        //     var valorDeClaves = require(path.join(__dirRoot, 'render/utils/valor_claves.js')) // util para mostrar la clave de un dato del csv
        //     return valorDeClaves(require(path.join(__dirConfig, 'csv_claves_mostrar.json')))
        // },
        imprimir () {
            ipc.send('print-to-pdf')
        },
        agregarCartilla (cartilla) {
            // ver('recibido', cartilla)
            // ver('argumentos:', arguments)
            // ver(arguments)
            ver('hola', cartilla)
            this.cartillas.push(cartilla) // en javascript al pasar un objeto como argumento a una funcion, este pasa como referencia, con esta tecnica, eso no sucede y se crea un nuevo objeto individual del objeto que se recibio como parametro
            // ver(this.cartillas)
            // this.cartillas.push(cartilla)
            // this.cartillas[this.cartillas.length] = cartilla
        },
        generarCartilla (fila) {
            // console.log('listen')
            // ver(fila.edad)
            this.detallesCartilla = fila
            this.vista = '3'
            this.verNavbarAbajo = true
        },
        // verDetalles (fila) {
        //     // esta funcion recibe un evento emitido por su hijo ver-lista
        //     // console.log('on')
        //     this.detalles = fila
        //     this.vista = '3' // cambiar a vista detalles
        //     this.verNavbarAbajo = true
        // },
        // seleccionarArchivo () {
        //     ipc.send('open-file-dialog')
        // },
        // leer () {
        //     const csv = require('fast-csv')

        //     this.data = []
        //     // var dataTemp = []
            
        //     var stream = fs.createReadStream(this.path, { encoding: 'UTF-8'});            
        //     var csvStream = csv
        //         .parse()
        //         .on("data", function(data){
        //             // console.log(data)
        //             this.data.push(data)
        //             // dataTemp.push(data)
        //         }.bind(this))
        //         .on("end", function(){
        //             // console.log("done")
        //             // this.data = []
        //             // this.data = dataTemp
        //         });

        //     stream.pipe(csvStream);
        // }
    },
    created () {
        // var f = require('./../../utils/valor_claves.js')
        // var obj = require(path.join(__dirConfig, 'csv_claves.json'))
        // ver(JSON.stringify(f(obj))
        // const ipc = require('electron').ipcRenderer
        // ipc.on('wrote-pdf', function (event, path) {
        //     const message = `Wrote PDF to: ${path}`
        //     ver(message)
        // })
        // // abrir conexion con mysql
        // // DB.connect()
        
        // // ES2015
        // // ipc.on('selected-file', function(event, path){
        // //     this.path = path[0]
        // //     this.leer()
        // // }.bind(this))

        // //ES5 (ES2016)
        // ipc.on('selected-file', (event, path) => {
        //     this.path = path[0]
        //     this.leer()
        // })
        // this.leer()
    }
}