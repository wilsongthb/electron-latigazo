// var path = require('path')
// var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        data: {
            type: Array,
            require: true
        },
        listaClaves: {
            type: Array,
            require: true
        },
        keyData: {
            require: true,
            type: Object
        },
        csvClaves: {
            require: true,
            type: Object
        },
        config: {
            require: true,
            type: Object
        }
    },
    data () {
        return {
            verFiltros: true,
            filtros: [],
            filtro: {
                clave: '0',
                valor: '',
            }
        }
    },
    created () {
        this.filtros.push({key: '12', value: ''})
        this.filtros.push({key: '24', value: ''})
    },
    computed: {
        dataFiltrada () {
            var res = this.data

            // agrega edad para ayudar en la ordenacion
            for(var r in res){
                res[r]['edad'] = this.edadFormat(res[r][this.csvClaves.beneficiario.fechaNacimiento])
                res[r]['indice'] = r
            }
            for(var i in this.filtros){
                res = res.filter(item =>{
                    return item[this.filtros[i].key].toLowerCase().indexOf(this.filtros[i].value.toLowerCase()) > -1
                })
            }
            // ordenacion
            return res.sort(function(a, b){
                if(a['edad'].meses < b['edad'].meses)
                    return 1
                if(a['edad'].meses > b['edad'].meses)
                    return -1
                return 0
            })
        }
    },
    methods: {
        generarCartilla (fila) {
    //         console.log(`
    // From: ver-detalles
    // Event: generarCartilla
    // Arg: ${JSON.stringify(fila)}
    //         `)

            this.$emit('generar-cartilla', fila)
        },
        verDetalles (fila) {
            // console.log('emit')
            this.$emit('ver-detalles', fila)
        },
        edadFormat (fechaNoFormat) {
            var fecha = fechaNoFormat.split(this.config.csv.fechaSplit)
            var newFecha = `${fecha[2]}-${fecha[1]}-${fecha[0]}`
            return calcularEdad(newFecha)
        },
        cargarDetalles () {
            
        },
        agregarFiltro () {
            this.filtros.push({
                key: this.filtro.clave,
                value: this.filtro.valor
            })
        },
        clavesOptions () {
            var listaClaves = []
            for(var i in this.csvClaves){
                for(var j in this.csvClaves[i]){
                    listaClaves.push({
                        clave: `${i}.${j}`,
                        valor: this.csvClaves[i][j]
                    })
                }
            }
            return listaClaves
        }
    }
}