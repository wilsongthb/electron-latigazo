const fichas = require('./fichas.json')
const config = require('./../main/config.json')
var mysql = require('mysql')

var connection = mysql.createConnection(config.db.connection)
var semana = 1;

// connection.connect();

str_sql_tipoCartillas = ''
str_sql_cartillas = ''
str_sql_logros = ''
str_sql_objetivos = ''
sql_fichas = ''

for(f in fichas){
    // console.log(fichas[f].fichasSemanas)
    for(s in fichas[f].fichasSemanas){
        // console.log(fichas[f].fichasSemanas[s])

        // area de objetivos
        

        for(o in fichas[f].fichasSemanas[s].objetivos){
            // console.log('-----------------------------------------------------------')
            // console.log('semana ', semana)
            // console.log(fichas[f].fichasSemanas[s].objetivos[o])


            // area de cartillas
            var cartilla = fichas[f].fichasSemanas[s].objetivos[o]
            // str_sql_tipoCartillas += `INSERT INTO `latigazo`.`tipocartillas` (`id`, `descripcion`) VALUES ('2', 'fufu');\n`

            // for(c in fichas[f].fichasSemanas[s].objetivos[o].logros){
            //     // console.log(fichas[f].fichasSemanas[s].objetivos[o].logros[c])

            //     // area logros

            // }

            // sql fichas
            sql_fichas += `INSERT INTO \`latigazo\`.\`fichas\` (\`semana\`, \`titulo\`, \`numero\`, \`tipo\`, \`descripcion\`) VALUES ('${semana}', '${cartilla.titulo}', '${cartilla.numcard}', '${cartilla.tipo}', '${JSON.stringify(cartilla.logros)}');\n`



        }
        semana++
    }
}

console.log(sql_fichas)
const fs = require('fs')
fs.writeFileSync('outfichas.sql', sql_fichas, {encoding: 'utf-8'})

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'me',
//     password : 'secret',
//     database : 'my_db'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// connection.end();