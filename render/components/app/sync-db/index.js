var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        data: Array
    },
    data () {
        return {
            // salida: "Salida del programa \n"
        }
    },
    methods: {
        cout (frase, color) {
            // salida += frase
            try{
                if(arguments.length < 2){
                    document.getElementById('syncSalida').innerHTML += frase + "\n"
                }else{
                    document.getElementById('syncSalida').innerHTML += `<span style="color: ${color}">${frase}</span>` + "\n"
                }
            }catch(error){
                document.getElementById('syncSalida').innerHTML += `<span class="danger">Error: ${error.message}</span>` + "\n"
                // document.getElementById('syncSalida').innerHTML += JSON.stringify(frase)
            }
        },
        sync () {
            this.cout("\nEmpezando con la sincronizacion", 'green')
            // conexion con mysql
            var mysql = require('mysql');
            this.cout(`Iniciando conexion con la Base de Datos, configuracion de conexión: ${JSON.stringify(config.db.connection)}`)
            var connection = mysql.createConnection(config.db.connection);
            connection.connect();

            connection.query('SELECT VERSION() as version, CURRENT_TIMESTAMP as ct', function (error, results, fields) {
                if (error) throw error;
                console.log(results)
                // timestamps
                var time_creacion = results[0].ct
            });

            connection.end();

            // crear sentencias para los facilitadores
            sqlFacilitadores = []
            for(i in this.data){
                var fila = this.data[i]
                var keys = csv_claves.facilitador
                var ubicacion = {}
                for(j in csv_claves.ubicacion){
                    ubicacion[j] = fila[csv_claves.ubicacion[j]]
                }
                sqlFacilitadores[fila[keys.codigo]] = "INSERT INTO `latigazo`.`facilitadores` "
                sqlFacilitadores[fila[keys.codigo]] += "(`codigoFamilia`, `codigo`, `nombre`, `ubicacion`, `creacion`, `edicion`, `usuarios_id`) VALUES "
                sqlFacilitadores[fila[keys.codigo]] += `('${fila[keys.codigoFamilia]}', '${fila[keys.codigo]}', '${fila[keys.nombre]}', '${JSON.stringify(ubicacion)}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1');`
                // this.cout(sqlFacilitadores[fila[keys.codigo]])
            }

            console.log(sqlFacilitadores)

            // for(){
            //     var facilitador{

            //     }
            // }


        }
    }
}