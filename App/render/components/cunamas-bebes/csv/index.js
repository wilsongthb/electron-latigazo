const ipc = require('electron').ipcRenderer
// var path = require('path')
// var fs = require('fs')
// const valorDeClaves = require(path.join(__dirRoot, 'render/utils/valor_claves.js'))

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        // datos: Array
        clavesCsv: {
            require: false,
            type: Array
        },
        pathCsvFile: {
            type: String
        }
    },
    data () {
        return {
            verClavesCsv: false,
            datos: [],
            pathFile: ''
        }
    },
    methods: {
        seleccionarArchivo () {
            ipc.send('open-file-dialog')
        },
        leer () {
            const csv = require('fast-csv')
            var dataTemp = []
            
            var stream = fs.createReadStream(this.pathFile, { encoding: 'UTF-8'});
            var csvStream = csv
                .parse()
                .on("data", function(data){
                    // console.log(data)
                    dataTemp.push(data)
                }.bind(this))
                .on("end", () => {
                    // console.log("done")
                    // this.data = []
                    this.datos = dataTemp
                    this.$emit('guardarDatos', dataTemp)
                    // this.$emit('update:datos', dataTemp)
                    // ver(this.datos)
                });

            stream.pipe(csvStream);
        }
    },
    created () {
        ipc.on('selected-file', (event, path) => {
            this.pathFile = path[0]
            this.leer()
        })

        if(this.pathCsvFile){
            this.pathFile = this.pathCsvFile
            this.leer()
        }

        // ver(this.clavesCsv)
    }
    // props: {
    //     data: Array,
    //     verClaves: Boolean
    // },
    // data () {
    //     return {
    //         listaClaves: valorDeClaves(require(path.join(__dirConfig, 'csv_claves.json')))
    //     }
    // }
}