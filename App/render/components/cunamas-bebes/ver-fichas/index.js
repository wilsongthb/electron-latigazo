// var path = require('path')
// var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            idFicha: 0,
            fichas: [],

            verEditar: false,
            ficha: {},
            // newLogro: ""
        }
    },
    props: {
        pathFile: {
            type: String,
            required: true
        },
        config: {
            type: Object,
            required: true
        }
    },
    created () {
        this.leer()
    },
    methods: {
        leer () {
            this.fichas = require(this.pathFile)
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
            fs.writeFileSync(this.pathFile, JSON.stringify(this.fichas))
            this.cerrar()
        },
        cerrar () {
            this.verEditar = false
            this.leer()
        }
    },
    components: {
        'ficha': require(path.join(__dirRoot, 'render/components/cunamas-bebes/ficha')),
        'json-editor': require('../../json-editor')
    }
}