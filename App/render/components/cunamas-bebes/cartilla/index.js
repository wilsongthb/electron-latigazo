// var path = require('path')
// var fs = require('fs')
var initCartilla = {
    fecha: "",
    hora: "",
    familia: "",
    edad: "",
    // semana: "",
    objetivos: [
        // {
        //     titulo: "VIDA EN FAMILIA",
        //     numero: "",
        //     logros: [],
        // },
        // {
        //     titulo: "JUGANDO APRENDO",
        //     numero: "",
        //     logros: [],
        // },
        // {
        //     titulo: "CUENTAME UN CUENTO",
        //     numero: "",
        //     logros: [],
        // }
    ],
    semana: 0
}

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8' }),
    components: {
        'ficha': require('../ficha')
    },
    data () {
        return {
            cartilla: initCartilla,
            buscarFicha: {
                modo:true,
                mes: 1,
                semana: 1,
                semanas: 1
            },
            // fichas: [],
            // buscar: "",
            enviado: false,
            // tempListDescripcion: initTemp
        }
    },
    props: {
        detalles: {
            required: true
        },
        claves: {
            required: true,
            type: Object
        },
        fichas: {
            required: true,
            type: Array
        }
    },
    created () {
        ver(this.detalles.edad)
        // this.cartilla.familia = this.detalles[this.csvClaves.facilitador.codigoFamilia]
        this.cartilla.familia = this.detalles[this.claves.codigo_familia]
        this.cartilla.edad = this.detalles.edad.str
        // this.cartilla.semana = this.detalles.edad.semanas

        // datos para modo de busqueda
        this.buscarFicha.semanas = this.detalles.edad.semanas
        this.buscarFicha.mes = Math.floor(this.detalles.edad.semanas/4)
        this.buscarFicha.semana = this.detalles.edad.semanas%4
        // this.fichas 
        // this.fichas = require(__dirRoot + config.dirFichas)
    },
    methods: {
        // definirFicha (c) {
        //     ver(c)
        // },
        seleccionarFicha (id) {
            ver(id)
            // ver(JSON.parse(JSON.stringify(
            //         this.fichas[id]
            //     )))
            this.cartilla.objetivos.push(
                JSON.parse(JSON.stringify(
                    this.fichas[id]
                ))
            )
        },
        enviarA () {
            this.enviado = true
            ver(JSON.parse(JSON.stringify(this.cartilla)))
            this.$emit('enviarA', JSON.parse(JSON.stringify(this.cartilla)))
        }
    },
    computed: {
        calcularSemanas () {
            // ver(this.buscarFicha)
            this.buscarFicha.semanas = (parseInt(this.buscarFicha.mes)*4)+parseInt(this.buscarFicha.semana)
            return this.buscarFicha.semanas
        },
        buscarFichas () {
            for(i in this.fichas){
                let ficha = this.fichas[i]
                ficha.id = i
            }
            return this.fichas.filter(item => {
                return item.semana == this.buscarFicha.semanas
            })
        }
    }
}