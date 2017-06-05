var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            fichas: require(dirRoot + '/render/data/fichas.json')
        }
    },
    components: {
        'ficha': require(path.join(dirRoot, 'render/components/app/ver-cartilla/ficha'))
    }
}