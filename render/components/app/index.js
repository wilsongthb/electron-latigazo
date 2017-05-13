var path = require('path')
var fs = require('fs')

var edad = require(path.join('.','..','..','edad.js'))

const ipc = require('electron').ipcRenderer
const csv = require('fast-csv')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data: function(){
        return {
            // String: String,
            data: [],
            vista: '0',
            filtrar: '',
            detalles: {},
            path: 'tests/entrada.csv'
        }
    },
    computed: {
        beneficiarios () {
            return this.getBeneficiarios().filter( item => {
                return item.nombre.indexOf(this.filtrar.toUpperCase()) > -1
            })
        }
    },
    methods: {
        loadDetalles (b) {
            var fila = this.data[b.row]

            this.detalles.beneficiario = b

            this.detalles.ubicacion = {}
            for(u in config.csv.ubicacion){
                this.detalles.ubicacion[u] = fila[config.csv.ubicacion[u]]
            }

            this.detalles.facilitador = {}
            for(u in config.csv.facilitador){
                this.detalles.facilitador[u] = fila[config.csv.facilitador[u]]
            }

            this.detalles.cuidador = {}
            for(u in config.csv.cuidador){
                this.detalles.cuidador[u] = fila[config.csv.cuidador[u]]
            }

            console.log(this.detalles)

            this.vista = '3'
        },
        getBeneficiarios () {
            var beneficiarios = []
            for(d in this.data){
                var data = this.data[d]
                var obj_beneficiario = {}
                for(i in config.csv.beneficiarios){
                    if(i === 'fechaNacimiento'){
                        
                        var fecha = data[config.csv.beneficiarios[i]].split(config.csv.fechaSplit)
                        var fechaNacimiento = `${fecha[2]}-${fecha[1]}-${fecha[0]}`
                        var edad_temp = edad(fechaNacimiento)
                        obj_beneficiario[i] = fechaNacimiento
                        obj_beneficiario.edad = edad_temp.str
                        obj_beneficiario.meses = edad_temp.meses
                        continue
                    }
                    if(i === 'nombre'){
                        // console.log(data[config.csv.beneficiarios[i]])
                        obj_beneficiario[i] = data[config.csv.beneficiarios[i]].toUpperCase()
                        continue
                    }
                    obj_beneficiario[i] = data[config.csv.beneficiarios[i]]
                }
                obj_beneficiario.row = d
                // console.log(obj_beneficiario)
                beneficiarios.push(obj_beneficiario)
                obj_beneficiario = {}
                
            }
            return beneficiarios.sort(function(a, b){
                if(a.meses < b.meses)
                    return 1
                if(a.meses > b.meses)
                    return -1
                return 0
            })
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
        ipc.on('selected-file', function(event, path){
            // document.getElementById('selected-file').innerHTML = `You selected: ${path}`
            console.log(path)
            console.log(this.path)
            this.path = path[0]
            this.leer()
        }.bind(this))
        this.leer()
    }
}