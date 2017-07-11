// var path = require('path')
// var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props:{
        datos: {
            type: Array,
            required: true
        },
        claves: {
            type: Array,
            required: true
        },
        clavesMostrar: {
            type: Object,
            required: true
        },
        config: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            // verFiltros: true,
            lista: [],
            filtros: [],
            filtro: {
                clave: '0',
                valor: '',
            }
        }
    },
    computed: {
        listaOrdenada () {
            this.lista = this.datos

            // agrega edad
            for(let i in this.lista){
                let fila = this.lista[i]
                fila.edad = calcularEdad(
                    formatearFecha(
                        fila[this.clavesMostrar.fecha_nacimiento], 
                        this.config.fechaSplit
                    )
                )
            }

            // filtrar
            for(let i in this.filtros){
                this.lista = this.lista.filter(item => {
                    return item[this.filtros[i].clave].toLowerCase().indexOf(this.filtros[i].valor.toLowerCase()) > -1
                })
            }

            return this.lista.sort(function(a, b){
                if(a.edad && b.edad){
                    if(a['edad'].meses < b['edad'].meses)
                        return 1
                    if(a['edad'].meses > b['edad'].meses)
                        return -1
                }
                return -1
            })
        }
    },
    methods: {
        agregarFiltro () {
            this.filtros.push(JSON.parse(JSON.stringify(this.filtro)))
        },
        generarCartilla (fila) {
            // ver(JSON.parse(JSON.stringify(fila.edad)))
            // this.$emit('generar-cartilla', JSON.parse(JSON.stringify(fila)))
            this.$emit('generar-cartilla', fila)
        },
        // verDetalles (fila) {
        //     // ver(JSON.parse(JSON.stringify(fila)))
        //     this.$emit('ver-detalles', JSON.parse(JSON.stringify(fila)))
        // },
    }
}