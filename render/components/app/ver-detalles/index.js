var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            csvClaves: csv_claves
        }
    },
    props: {
        detalles: {
            required: true
        }
    },

}