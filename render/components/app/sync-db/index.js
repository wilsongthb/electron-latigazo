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

1            // La primera consulta es para definir el timestamp de creacion, para que todos los registros tengan la misma fecha de creacion
            var time_creacion = ""
            let ProbarConexion = new Promise((resolve, reject) => {
                var sql = 'SELECT VERSION() as version, CURRENT_TIMESTAMP as ct, CONCAT(CURRENT_DATE, " ", CURRENT_TIME) as str_ct'
                connection.connect();
                connection.query(sql, (error, results, fields) => {
                    if (error){
                        this.cout('Error: error en la conexión de la base de datos', 'red')
                        throw error
                    }
                    
                    // informacion del servidor mysql
                    this.cout(`Version MySQL: ${results[0].version}`)

                    // timestamps
                    time_creacion = results[0].str_ct
                    this.cout(`Creacion en: ${results[0].ct}`)
                    
                    resolve('finalizado ProbarConexion')
                })
            })

            ProbarConexion.then((mensaje) => {
                // console.log('yes ', mensaje, time_creacion)

                 // crear sentencias para los facilitadores
                var sqlFacilitadores = []
                for(var i in this.data){
                    var fila = this.data[i]
                    var keys = csv_claves.facilitador
                    var ubicacion = {}
                    for(var j in csv_claves.ubicacion){
                        ubicacion[j] = fila[csv_claves.ubicacion[j]]
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
                // insertar facilitadores
                connection.query(sql, (error, results, fields) => {
                    if (error){
                        this.cout('Error: error en la conexión de la base de datos', 'red')
                        throw error
                    }
                    
                })
            })

            // connection.end()
        }
    }
}