var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    components: {
        'csv': require('./lector-csv')
    },
    data () {
        return {
            datos: [],
            verCsv: false,
            config: require(__dirRoot + '../config/calcular-edad.json'),
            buscar: ''
        }
    },
    methods: {
        guardarEnDatos () {
            this.datos = arguments[0]
        }
    },
    computed: {
        listaFiltrada () {
            var res = this.data

            
        }
    }
}