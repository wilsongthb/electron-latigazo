const csv = require('fast-csv');
const fs = require('fs');
var stream = fs.createReadStream(__dirname + "/fichasCSV.csv");

var dataOut = [];

// mis vars
var semana = 0;
var filaAnterior = {};

var csvStream = csv
    .parse()
    .on("data", function(data){
         // primera condicion
        if( (data[1] + data[2]).length !== 0 ){
            if( data[0].substring(0, 6) === "SEMANA" ){
                semana++;
            }else{
                // console.log(semana)
                // formateando resultado
                if(data[0].length === 0){
                    // console.log("mes", Math.floor((semana-1)/4)+1, " semana", semana)
                    data[0] = filaAnterior[0]
                    // console.log(data[0], data[1])
                }
                // data[0] = (data[0].length === 0) ? filaAnterior[0] : data[0];

                let fila = {
                    mes: Math.floor((semana-1)/4)+1,
                    semana,
                    titulo: data[0],
                    // identificadores: data[1].split("  "),
                    identificadores: data[1],
                    // logros: data[2].split("OTROS LOGROS")
                    // logros: [data[2]]
                    logros: data[2]
                    // logros: data[2].split(".")
                }

                // guardando
                dataOut.push(fila);
            }
            // console.log(data);
        }


        // guardar registro para la siguiente
        filaAnterior = JSON.parse(JSON.stringify(data));

    })
    .on("end", function(){
         console.log("done");
         fs.writeFileSync('fichas.json', JSON.stringify(dataOut));
    });

stream.pipe(csvStream);