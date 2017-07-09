// var path = require('path')
// var fs = require('fs')
const valorDeClaves = require(path.join(__dirRoot, 'render/utils/valor_claves.js'))

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