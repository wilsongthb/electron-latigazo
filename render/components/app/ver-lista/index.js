var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        data: Array
    },
    data () {
        return {
            filtros: [],
            filtro: {},
            keyData: csv_claves 
        }
    },
    computed: {
        dataFiltrada () {
            var res = this.data
            for(i in this.filtros){
                res = res.filter(item =>{
                    return item[this.filtros[i].key].indexOf(this.filtros[i].value) > -1
                })
            }
            return res
        }
    },
    methods: {
        cargarDetalles () {
            
        },
        agregarFiltro () {
            this.filtros.push({
                key: this.filtro.clave,
                value: this.filtro.valor
            })
        },
        listaClaves () {
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