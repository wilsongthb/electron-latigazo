var path = require('path')
var fs = require('fs')

const ipc = require('electron').ipcRenderer
const sessionInit = {
                username: '',
                password: '',
                logued: false,
                
                // id: 1,
                // logued: true
            }

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    components: {
        'cronograma': require('./cronograma'),
        'ver-cartilla': require('./ver-cartilla'),
        'ver-fichas': require('./ver-fichas'),
        'inicio': require('./inicio'),
        'ver-csv': require('./ver-csv'),
        'ver-lista': require('./ver-lista'),
        'ver-detalles': require('./ver-detalles'),
        'sync-db': require('./sync-db'),
        'ayuda': require('./ayuda')
    },
    data: function(){
        return {
            // app
            verNavbarAbajo: false, // mostrar o ocultar navbar de abajo
            vista: '0', // numero de la vista

            // ver detalles
            detalles: false, // objeto detalles, inicialmente se usa como flag de vista detalle

            // ver cartilla
            detallesCartilla: false,
            
            //cartillas
            cartillas: [],
            
            // ver lista
            data: [], // array que contiene los datos del archivo csv

            // session
            session: sessionInit, // valores iniciales de session

            // ver csv
            verClaves: false, // mostrar o ocultar claves
            path: 'tests/entrada.csv', // path del archivo csv

            // actualizaciones
            verReadme: fs.readFileSync(path.join(dirRoot, 'readme.md'), { encoding: 'utf-8'}), // string del contenido del archivo readme.md
        }
    },
    methods: {
        agregarCartilla (cartilla) {
            // ver('recibido', cartilla)
            // ver('argumentos:', arguments)
            ver(arguments)
            this.cartillas.push(JSON.parse(cartilla))
            ver(this.cartillas)
            // this.cartillas.push(cartilla)
            // this.cartillas[this.cartillas.length] = cartilla
        },
        generarCartilla (fila) {
            // console.log('listen')
            this.detallesCartilla = fila
            this.vista = '2'
            this.verNavbarAbajo = true
        },
        verDetalles (fila) {
            // esta funcion recibe un evento emitido por su hijo ver-lista
            // console.log('on')
            this.detalles = fila
            this.vista = '3' // cambiar a vista detalles
            this.verNavbarAbajo = true
        },
        seleccionarArchivo () {
            ipc.send('open-file-dialog')
        },
        leer () {
            const csv = require('fast-csv')

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
        // abrir conexion con mysql
        DB.connect()
        
        // ES2015
        // ipc.on('selected-file', function(event, path){
        //     this.path = path[0]
        //     this.leer()
        // }.bind(this))

        //ES5 (ES2016)
        ipc.on('selected-file', (event, path) => {
            this.path = path[0]
            this.leer()
        })
        this.leer()
    }
}