var config = require('./main/config.json')

new Vue({
    el: '#root',
    components: {
        'app': require('./render/components/app')
    }
})