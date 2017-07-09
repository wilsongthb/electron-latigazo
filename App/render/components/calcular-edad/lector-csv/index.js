var path = require('path')
var fs = require('fs')

const ipc = require('electron').ipcRenderer

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        // datos: {
        //     type: Array
        // },
        // pathArchivo: {
        //     type: String
        // }
    },
    data () {
        return {
            pathArchivo: `D:\\code\\cunamas\\resources\\REPORTE Y PADRON OFICIAL MAYO 2017 POR PROVINCIA.csv`,
            datos: []
        }
    },
    methods: {
        leer () {
            const csv = require('fast-csv')

            let dataTemp = []
            
            var stream = fs.createReadStream(this.pathArchivo, { encoding: 'UTF-8'});            
            var csvStream = csv
                .parse()
                .on("data", function(data){
                    // console.log(data)
                    // this.data.push(data)
                    dataTemp.push(data)
                    // ver(data)
                    // dataTemp.push(data)
                }.bind(this))
                .on("end", () => {
                    // console.log("done")
                    // try {
                    //     console.log(this.data)
                    //     ver(this.data)
                    //     this.datos = this.data
                    //     ver(this.data)
                    // } catch (error) {
                    //     ver(error)
                    // }
                    // ver("termino la lectura")
                    // ver(this.datos, this.data)
                    this.datos = dataTemp
                    this.$emit('EnviarDatosA', dataTemp)
                });

            stream.pipe(csvStream);
        },
        abrirArchivo () {
            ipc.send('open-file-dialog')
        }
    },
    created () {
        ipc.on('selected-file', (event, path) => {
            this.pathArchivo = path[0]
            this.leer()
            // this.leer()
        })

        this.leer()
    }
}