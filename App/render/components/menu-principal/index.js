var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    data () {
        return {
            view: 1
        }
    },
    components: {
        'ninios': require(__dirRoot + 'render/components/app'),
        'calcular-edad': require(__dirRoot + 'render/components/calcular-edad')
    }
}