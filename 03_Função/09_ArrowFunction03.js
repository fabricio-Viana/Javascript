let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let compareComThisArrow = param => console.log(this === param)
compareComThisArrow(global)
compareComThisArrow(module.exports)

compareComThisArrow = compareComThisArrow.bind(obj)
compareComThisArrow(obj)
compareComThisArrow(module.exports)