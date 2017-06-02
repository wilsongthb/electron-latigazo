var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        data: Array,
        session: Object
    },
    data () {
        return {
        }
    },
    methods: {
        cout (frase, color) {
            // Para tener un buen rendimiento no se usa los Vue data
            try{
                if(arguments.length < 2){
                    document.getElementById('syncSalida').innerHTML += frase + "\n"
                }else{
                    document.getElementById('syncSalida').innerHTML += `<span style="color: ${color}">${frase}</span>` + "\n"
                }
            }catch(error){
                document.getElementById('syncSalida').innerHTML += `<span class="danger">Error: ${error.message}</span>` + "\n"
            }
        },
        sync () {
            this.cout("\nEmpezando con la sincronizacion", 'green')
            
            // conexion con mysql
            var mysql = require('mysql');
            this.cout(`Iniciando conexion con la Base de Datos, configuracion de conexión: ${JSON.stringify(config.db.connection)}`)
            var connection = mysql.createConnection(config.db.connection);
            connection.connect();

            // La primera consulta es para definir el timestamp de creacion, para que todos los registros tengan la misma fecha de creacion
            connection.query('SELECT VERSION() as version, CURRENT_TIMESTAMP as ct, CONCAT(CURRENT_DATE, " ", CURRENT_TIME) as str_ct', (error, results, fields) => {
                if (error) throw error;
                
                // informacion del servidor mysql
                this.cout(`Version MySQL: ${results[0].version}`)

                // timestamps
                var time_creacion = results[0].ct
                var time_creacion = results[0].str_ct
                this.cout(`Creacion en: ${results[0].ct}`)

                // crear sentencias para los facilitadores
                sqlFacilitadores = []
                for(var i in this.data){
                    var fila = this.data[i]
                    var keys = csvClaves.facilitador
                    var ubicacion = {}
                    for(var j in csvClaves.ubicacion){
                        ubicacion[j] = fila[csvClaves.ubicacion[j]]
                    }
                    if(typeof sqlFacilitadores[fila[keys.codigo]] === 'undefined'){
                        // sqlFacilitadores[fila[keys.codigo]] = "INSERT INTO `latigazo`.`facilitadores` "
                        // sqlFacilitadores[fila[keys.codigo]] += ""
                        sqlFacilitadores[fila[keys.codigo]] = `('${fila[keys.codigoFamilia]}', '${fila[keys.codigo]}', '${fila[keys.nombre]}', '${JSON.stringify(ubicacion)}', '${time_creacion}', '${time_creacion}', '${this.session.id}')`
                    }
                }
                var sql = "INSERT INTO `latigazo`.`facilitadores` (`codigoFamilia`, `codigo`, `nombre`, `ubicacion`, `creacion`, `edicion`, `usuarios_id`) VALUES "
                for(var i in sqlFacilitadores){
                    sql += `${sqlFacilitadores[i]},`
                }
                sql = sql.substring(0, sql.length - 1) + ";"
            });

            // connection.end()
        }
    }
}