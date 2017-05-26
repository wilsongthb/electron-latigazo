var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        data: Array
    },
    data () {
        return {
            verFiltros: true,
            filtros: [],
            filtro: {
                clave: '0',
                valor: '',
            },
            keyData: csv_claves,
            listaClaves
        }
    },
    computed: {
        dataFiltrada () {
            var res = this.data

            // agrega edad para ayudar en la ordenacion
            for(var r in res){
                res[r]['edad'] = this.edadFormat(res[r][csv_claves.beneficiario.fechaNacimiento])
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
        verDetalles (fila) {
            // console.log('emit')
            this.$emit('ver-detalles', fila)
        },
        edadFormat (fechaNoFormat) {
            var fecha = fechaNoFormat.split(config.csv.fechaSplit)
            var newFecha = `${fecha[2]}-${fecha[1]}-${fecha[0]}`
            return edad(newFecha)
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
            for(var i in csv_claves){
                for(var j in csv_claves[i]){
                    listaClaves.push({
                        clave: `${i}.${j}`,
                        valor: csv_claves[i][j]
                    })
                }
            }
            return listaClaves
        }
    }
}