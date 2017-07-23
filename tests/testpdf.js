// var crono_data = require(path.join(__dirRoot, '..', 'tests/testcrono.json'))
// ver(crono_data)

// require
var html_pdf = require('html-pdf')
var path = require('path')
var fs = require('fs')

// data
var crono_data = require('./crono_data.json')
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

html_pdf
    .create(str_html, { format: 'A4', orientation: 'landscape' })
    .toFile(path.join('pdf/out.pdf'), function(err, res){
        // ver(res)
        console.log(res)
    })