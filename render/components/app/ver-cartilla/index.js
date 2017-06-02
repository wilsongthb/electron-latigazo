var initCartilla = {
    fecha: "",
    hora: "",
    familia: "",
    edad: "",
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

module.exports = {
    template: fileToString('/render/components/app/ver-cartilla/index.html'),
    components: {
        'detalles': require('./../ver-detalles')
    },
    data () {
        return {
            cartilla: initCartilla,
            fichas: [],
            buscar: new String(""),
            enviado: false,
            csvClaves
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
                return item.semana == this.cartilla.semana
            })
        }
    },
    methods: {
        enviarACronograma () {
            // ver('enviando', this.cartilla)
            this.enviado = true
            this.$emit('enviar', JSON.stringify(this.cartilla))
        }
    }
}