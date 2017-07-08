var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            idFicha: 0,
            fichas: [],

            verEditar: false,
            ficha: {},
            newLogro: ""
        }
    },
    created () {
        this.leer()
    },
    methods: {
        leer () {
            this.fichas = require(__dirRoot + config.dirFichas)
        },
        editar () {
            this.verEditar = true
            // this.ficha = JSON.parse(JSON.stringify(this.fichas[this.idFicha]))
            this.ficha = this.fichas[this.idFicha]
            // ver(JSON.parse(JSON.stringify(this.fichas[this.idFicha])))
            ver(this.ficha)
        },
        guardar () {
            // this.fichas[this.idFicha] = this.ficha
            fs.writeFileSync(__dirRoot + config.dirFichas, JSON.stringify(this.fichas))
            this.cerrar()
        },
        cerrar () {
            this.verEditar = false
            this.leer()
        }
    },
    components: {
        'ficha': require(path.join(__dirRoot, 'render/components/app/ver-cartilla/ficha'))
    }
}