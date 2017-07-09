// var path = require('path')
// var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            view: 2
        }
    },
    components: {
        'cunamas-bebes': require(path.join(__dirRoot, 'render/components/cunamas-bebes')),
        'calcular-edad': require(path.join(__dirRoot, 'render/components/calcular-edad'))
    }
}