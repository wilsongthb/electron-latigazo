var ver = function(){
    if(basicConfig.ver){
        for(i in arguments){
            console.log(arguments[i])
        }
    }
}

module.exports = {
    ver
}