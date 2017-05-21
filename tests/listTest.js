// var lista = [
// 	{
//   	nombre: "angel",
//     f: "23345"
//   },
//   {
//   	nombre: "wilson",
//     f: "23345"
//   },
//   {
//   	nombre: "novel",
//     f: "24564"
//   },
//   {
//   	nombre: "destiny",
//     f: "45345"
//   },
//   {
//   	nombre: "life",
//     f: "23321"
//   }
// ];

var lista = [
    {
        b: {
            codigo: "222"
        },
        be: {
            nombre: "wilson"
        }
    },
    {
        b: {
            codigo: "222"
        },
        be: {
            nombre: "angel"
        }
    },
    {
        b: {
            codigo: "221"
        },
        be: {
            nombre: "wilsun"
        }
    }
]

// Filtro = [
//     {
//         key: 'nombre',
//         value: 'n'
//     },
//     {
//         key: 'f',
//         value: '23345'
//     }
// ]
Filtro = [
    {
        key: 'be.nombre',
        value: 'w'
    }
]


// console.log(lista.filter(function(item){
//   return item.nombre.indexOf('w') >- 1
// }))

function filtroMultiple(Lista, Filtros){
    var res = Lista;
    for(i in Filtros){
        console.log(`
            Filtro: 
                key: ${Filtros[i].key}
                value: ${Filtros[i].value}
        `)
        res = res.filter(function(item){
            return item[Filtros[i].key].indexOf(Filtros[i].value) > -1
        })
    }
    return res
}

console.log(filtroMultiple(lista, Filtro))