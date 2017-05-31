var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            csv_claves,
            fichas: JSON.parse(fs.readFileSync(path.join(rootDir, 'render/fichas.json'), { encoding: 'utf-8'})),
            cartilla: {
                fecha: '',
                hora: '',

            }
        }
    },
    props: {
        detalles: {
            required: true
        }
    },
    created () {
        console.log(this.detalles)
    },
    computed: {
        fichasPorSemana () {
            return this.fichas.filter( item => {
                return item.semana == this.detalles.edad.semanas
            })
        }
    },
    methods: {
    }
}