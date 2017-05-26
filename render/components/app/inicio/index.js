var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        session: Object
    },
    data () {
        return {
            error: {
                log: false
            }
        }
    },
    methods: {
        iniciarSesion () {
            var mysql = require('mysql')
            var connection = mysql.createConnection(config.db.connection)
            connection.connect()
            
            connection.query(`SELECT * FROM usuarios AS u WHERE u.nombreUsuario = '${this.session.username}' AND u.clave = MD5('${this.session.password}')`, (error, results, fields) => {
                if(error) throw error

                // console.log(results)

                if(results.length >= 1){
                    this.session.id = results[0].id
                    this.session.name = results[0].nombre
                    this.session.email = results[0].email
                    this.session.logued = true
                }else{
                    this.error.log = true
                }

                // console.log(this.session)
            })
        },
    }
}