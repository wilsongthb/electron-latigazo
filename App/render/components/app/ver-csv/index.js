var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        data: Array,
        verClaves: Boolean
    },
    data () {
        return {
            listaClaves: valorClaves()
        }
    }
}