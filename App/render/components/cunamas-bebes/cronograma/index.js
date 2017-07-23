var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            facilitador: '',
            comiteDeGestion: '',
            semana: '',
            nombre_pdf: 'out.pdf'
        }
    },
    created () {
        // cargar el temporal de crono
    },
    props: {
        cartillas: Array
    },
    methods: {
        generarPDF () {
            // ver({
            //     facilitador: this.facilitador,
            //     comiteDeGestion: this.comiteDeGestion,
            //     semana: this.semana,
            //     cartillas: this.cartillas
            // })

            var crono_data = {
                facilitador: this.facilitador,
                comiteDeGestion: this.comiteDeGestion,
                semana: this.semana,
                cartillas: this.cartillas
            }
            ver(crono_data)

// GENERACION DEL PDF
var str_html = `
<style>
    h5, input, h4 {
        font-family: calibri;
        margin: 0;
        text-align: center;
    }
    .img {

    }
    .text-right {
        text-align: right
    }
    .table-main {
        border-spacing: 0px 0px;
    }
    .td-main {
        border: 1px solid black;
    }
    .table-child {
        padding: 0px;
        border: none;
        width: 217px;
        font-size: x-small;
        font-family: calibri;
    }
</style>
`
// cabecera
str_html += `
<img src="" alt="CUNAMAS-LOGO" align="right">
<h5>PROGRAMA NACIONAL CUNA MÁS – SERVICIO DE ACOMPAÑAMIENTO A FAMILIAS</h5>
<h4>CRONOGRAMA DE VISITA AL HOGAR – Formato 3.1</h4>
<table width="100%">
    <tr>
        <td>
            COMITE DE GESTION <input type="text" value="${crono_data.comiteDeGestion}">
        </td>
        <td>
            FACILITADOR(A) <input type="text" value="${crono_data.facilitador}">
        </td>
        <td>
            SEMANA <input type="text" value="${crono_data.semana}">
        </td>
    </tr>
</table>
`
/////////////////////////////////////////////////////
// rrnderizado de las tablas
str_html += `<table class="table-main">`
// los primeros 5
str_html += `<tr>`
for (var i = 0; i < 5; i++) {
    if(crono_data.cartillas[i]){
        // objetivos
        var str_html_obj = ``
        for (var j = 0; j < crono_data.cartillas[i].objetivos.length; j++) {
            var element = crono_data.cartillas[i].objetivos[j];
            str_html_obj += `
                <tr>
                    <td><strong>${element.titulo}</strong></td>
                    <td class="text-right"><strong>${element.identificadores}</strong></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>${element.logros}</p>
                    </td>
                </tr>`
        }
        

        str_html += `
        <td class="td-main">
            <table class="table-child">
                <tr>
                    <td><strong>FECHA:</strong> ${crono_data.cartillas[i].fecha}
                    </td>
                    <td class="text-right"><strong>HORA:</strong> ${crono_data.cartillas[i].hora}
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><strong>FAMILIA:</strong> ${crono_data.cartillas[i].familia}
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><strong>EDAD:</strong> ${crono_data.cartillas[i].edad}
                    </td>
                </tr>
                ${str_html_obj}
            </table>
        </td>
        `
    }
}
str_html += `</tr>`
// los siguientes 5
str_html += `<tr>`
for (var i = 5; i < 10; i++) {
    if(crono_data.cartillas[i]){
        // objetivos
        var str_html_obj = ``
        for (var j = 0; j < crono_data.cartillas[i].objetivos.length; j++) {
            var element = crono_data.cartillas[i].objetivos[j];
            str_html_obj += `
                <tr>
                    <td><strong>${element.titulo}</strong></td>
                    <td class="text-right"><strong>${element.identificadores}</strong></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p>${element.logros}</p>
                    </td>
                </tr>`
        }
        

        str_html += `
        <td class="td-main">
            <table class="table-child">
                <tr>
                    <td><strong>FECHA:</strong> ${crono_data.cartillas[i].fecha}
                    </td>
                    <td class="text-right"><strong>HORA:</strong> ${crono_data.cartillas[i].hora}
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><strong>FAMILIA:</strong> ${crono_data.cartillas[i].familia}
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><strong>EDAD:</strong> ${crono_data.cartillas[i].edad}
                    </td>
                </tr>
                ${str_html_obj}
            </table>
        </td>
        `
    }
}
str_html += `</tr>`
/////////////////////////////////////////////////////

            // TEST
            // var crono_data = require(path.join(__dirRoot, '..', 'tests/testcrono.json'))
            // ver(crono_data)

            var html_pdf = require('html-pdf')

            // var str_html = `<h1>hola</h1>`

            // guarda el pdf

            html_pdf
                .create(str_html, { format: 'A4', orientation: 'landscape' })
                .toFile(path.join(__dirRoot, '../pdf', this.nombre_pdf), function(err, res){
                    ver(res)
                    ver(err)
                    alert("Resultado: " + JSON.stringify(res) + "\n Error: " + JSON.stringify(err))
                    // alert("Archivo de salida: " + res.file + "\n Error:" + JSON.stringify(err))
                })
        }
    }
}