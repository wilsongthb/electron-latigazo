// var path = require('path')
var fs = require('fs')

module.exports = {
    template: fs.readFileSync(path.join(__dirname, 'index.html'), { encoding: 'utf-8'}),
    props: {
        idEditor: {
            required: true,
            type: String
        },
        pathFile: {
            required: true,
            type: String
        }
    },
    data () {
        return {
            obj: {}
        }
    },
    methods: {
        leerJson () {
            // var jsonData = require(this.pathFile)
            // return jsonData
            this.obj = require(this.pathFile)
            // this.obj = fs.readFileSync(this.pathFile, {encoding: 'utf-8'})
            // ver(this.obj)
        },
        guardar () {
            if(window.confirm("Seguro que quiere guardar los cambios?")){
                this.escribirJson()
            }
        },
        escribirJson () {
            // ver("escribiendo", this.obj)
            fs.writeFileSync(this.pathFile, JSON.stringify(this.obj))
        }
    },

    // iniciando
    mounted () {
        var JSONView = require('json-view')
        
        this.leerJson()
        var view = new JSONView(this.pathFile, this.obj)
        
        // Listen for change events 
        view.on('change', function(key, oldValue, newValue){
            // console.log('change', key, oldValue, '=>', newValue)
            // ver(this.obj)
        });
        
        // Expand recursively 
        view.expand(true);

        var element = document.getElementById(this.idEditor)
        element.appendChild(view.dom)
        // ver(view)
    }
}