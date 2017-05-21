var config = require('./main/config.json')
var csv_claves = require('./main/csv_claves.json')

new Vue({
    el: '#root',
    components: {
        'app': require('./render/components/app')
    }
})