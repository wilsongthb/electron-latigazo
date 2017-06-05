var initCartilla = {
    fecha: "",
    hora: "",
    familia: "",
    edad: "",
    semana: "",
    objetivos: [
        {
            titulo: "VIDA EN FAMILIA",
            numero: "",
            descripcion: "",
        },
        {
            titulo: "JUGANDO APRENDO",
            numero: "",
            descripcion: "",
        },
        {
            titulo: "CUENTAME UN CUENTO",
            numero: "",
            descripcion: "",
        }
    ],
    semana: 0
}
var initTemp = {
    logros: []
}

module.exports = {
    template: fileToString('/render/components/app/ver-cartilla/index.html'),
    components: {
        'ficha': require('./ficha')
    },
    data () {
        return {
            cartilla: initCartilla,
            fichas: [],
            buscar: new String(""),
            enviado: false,
            csvClaves,
            tempListDescripcion: initTemp
        }
    },
    props: {
        detalles: {
            required: true
        }
    },
    created () {
        this.cartilla.familia = this.detalles[csvClaves.facilitador.codigoFamilia]
        this.cartilla.edad = this.detalles.edad.str
        this.cartilla.semana = this.detalles.edad.semanas
        this.fichas = require(dirRoot + '/render/data/fichas.json')
    },
    computed: {
        fichasBuscar () {
            return this.fichas.filter( item => {
                return item.titulo.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1
            })
        },
        fichasSugeridas () {
            return this.fichas.filter( item => {
                // return item.titulo.toLowerCase().indexOf(this.buscar.toLowerCase()) > -1
                var mes = Math.floor(this.cartilla.semana/4)
                return (item.semana > mes*4 && item.semana < (mes+1)*4)
            })
        }
    },
    methods: {
        buscarFicha (numero) {
            return this.fichas.filter( item => {
                return item.numero == numero
            })[0]
        },
        definirFicha(objetivo){
            objetivo.descripcion = ""
            this.tempListDescripcion = initTemp
            this.tempListDescripcion = this.buscarFicha(objetivo.numero)
        },
        enviarACronograma () {
            // ver('enviando', this.cartilla)
            this.enviado = true
            this.$emit('enviar', JSON.stringify(this.cartilla))
        }
    }
}