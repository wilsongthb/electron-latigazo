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
            this.cout("Empezando con la sincronizacion", 'green')
            
            // conexion con mysql
            var mysql = require('mysql');
            this.cout(`Iniciando conexion con la Base de Datos, configuracion de conexión: ${JSON.stringify(config.db.connection)}`)
            var connection = mysql.createConnection(config.db.connection);           

            // empieza la conexion con Mysql
            connection.connect();
            // La primera consulta es para definir el timestamp de creacion, para que todos los registros tengan la misma fecha de creacion
            var time_creacion = ""
            var sql = 'SELECT VERSION() as version, CURRENT_TIMESTAMP as ct, CONCAT(CURRENT_DATE, " ", CURRENT_TIME) as str_ct'
            connection.query(sql, (error, results, fields) => {
                if (error){
                    this.cout('Error: error desde la base de datos', 'red')
                    throw error
                }
                // informacion del servidor mysql
                this.cout(`Version MySQL: ${results[0].version}`)

                // timestamps
                time_creacion = results[0].str_ct
                this.cout(`Creacion en: ${results[0].ct}`)

                 // crear sentencias para los facilitadores
                var sqlFacilitadores = []
                for(var i in this.data){
                    var fila = this.data[i]

                    //generar ubicacion
                    var ubicacion = {}
                    for(var j in csv_claves.ubicacion){
                        ubicacion[j] = fila[csv_claves.ubicacion[j]]
                    }

                    // generar objeto para insertarlo
                    var f = {
                        codigoFamilia: fila[csv_claves.facilitador.codigoFamilia],
                        codigo: fila[csv_claves.facilitador.codigo],
                        nombre: fila[csv_claves.facilitador.nombre],
                        ubicacion: JSON.stringify(ubicacion),
                        creacion: time_creacion,
                        edicion: time_creacion,
                        usuarios_id: this.session.id
                    }


                    if(typeof sqlFacilitadores[fila[keys.codigo]] === 'undefined'){
                        sqlFacilitadores[fila[keys.codigo]] = `('${fila[keys.codigoFamilia]}', '${fila[keys.codigo]}', '${fila[keys.nombre]}', '${JSON.stringify(ubicacion)}', '${time_creacion}', '${time_creacion}', '${this.session.id}')`
                    }
                }

                // generar sentencia sql
                var sql = "INSERT INTO `latigazo`.`facilitadores` (`codigoFamilia`, `codigo`, `nombre`, `ubicacion`, `creacion`, `edicion`, `usuarios_id`) VALUES "
                for(var i in sqlFacilitadores){
                    sql += `${sqlFacilitadores[i]},`
                }
                sql = sql.substring(0, sql.length - 1) + ";"
                // insertar facilitadores
                this.cout(sql, 'blue')
                connection.query(sql, (error, results, fields) => {
                    if (error){
                        this.cout('Error: error al insertar facilitadores', 'red')
                        throw error
                    }
                    

                    // crear sentencias para insertar cuidadores
                    var sqlCuidadores = []
                    for(var i in this.data){
                        var fila = this.data[i]
                        
                        // generando sentencia sql para insertar cuidadores
                        var c = {
                            nombre: fila[csv_claves.cuidador.nombre],
                            codigo: fila[csv_claves.cuidador.codigo],
                            sexo: fila[csv_claves.cuidador.sexo],
                            parentesco: fila[csv_claves.cuidador.parentesco],
                            dni: fila[csv_claves.cuidador.dni],
                            seguro: fila[csv_claves.cuidador.tipoSeguro],
                            fechaNacimiento: edadFormat(fila[csv_claves.cuidador.fechaNacimiento]),
                            fechaRegistro: edadFormat(fila[csv_claves.cuidador.fechaRegistro]),
                            creacion: time_creacion,
                            edicion: time_creacion,
                            usuarios_id: this.session.id,
                            codigoFacilitador: fila[csv_claves.facilitador.codigo]
                        }
                        if(typeof sqlCuidadores[fila[csv_claves.cuidador.codigo]] === 'undefined'){
                            sqlCuidadores[fila[csv_claves.cuidador.codigo]] = `('${c.nombre}', '${c.codigo}', '${c.sexo}', '${c.parentesco}', '${c.dni}', '${c.seguro}', '${c.fechaNacimiento}', '${c.fechaRegistro}', '${c.creacion}', '${c.edicion}', '${c.usuarios_id}', '${c.codigoFacilitador}'),`
                        }
                    }
                    sql = "INSERT INTO `latigazo`.`cuidadores` "
                    sql += "(`nombre`, `codigo`, `sexo`, `parentesco`, `dni`, `seguro`, `fechaNacimiento`, `fechaRegistro`, `creacion`, `edicion`, `usuarios_id`, `codigoFacilitador`) VALUES "
                    for(var i in sqlCuidadores){
                        sql += sqlCuidadores[i]
                    }
                    sql = sql.substring(0, sql.length - 1) + ";"
                    this.cout(sql, 'blue')
                    connection.query(sql, (error, results, fields) => {
                        if (error){
                            this.cout('Error: error al insertar cuidadores', 'red')
                            throw error
                        }

                    })
                })
            })
        }
    }
}