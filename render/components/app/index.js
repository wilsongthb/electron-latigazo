var path = require('path')
var fs = require('fs')

var edad = require(path.join('.','..','..','edad.js'))

const ipc = require('electron').ipcRenderer
const csv = require('fast-csv')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    components: {
        'ver-csv': require('./ver-csv'),
        'ver-lista': require('./ver-lista'),
        'ver-detalles': require('./ver-detalles'),
        'sync-db': require('./sync-db'),
        'ayuda': require('./ayuda')
    },
    data: function(){
        return {
            verClaves: false,
            data: [],
            vista: '0',
            path: 'tests/entrada.csv'
        }
    },
    methods: {
        verDetalles (fila) {
            // esta funcion recibe un evento emitido por su hijo ver-lista
            console.log('on')
            this.detalles = fila

            this.vista = '3' // cambiar a vista detalles
        },
        seleccionarArchivo () {
            ipc.send('open-file-dialog')
        },
        leer () {
            this.data = []
            var stream = fs.createReadStream(this.path, { encoding: 'UTF-8'});            
            var csvStream = csv
                .parse()
                .on("data", function(data){
                    // console.log(data)
                    this.data.push(data)
                }.bind(this))
                .on("end", function(){
                    // console.log("done")
                });

            stream.pipe(csvStream);
        }
    },
    created () {
        // ipc.on('selected-file', function(event, path){
        //     this.path = path[0]
        //     this.leer()
        // }.bind(this))
        ipc.on('selected-file', (event, path) => {
            this.path = path[0]
            this.leer()
        })
        this.leer()
    }
}