const funcionarios = {nome: 'Fabricio', salrio: 2000}
const clone = {...funcionarios, ativo:true}

console.log(Object.values(clone))


const grupo = ['fabricio','melissa']
const grupoDepois =[...grupo,'Tom tomas Junior','Emile']
const gurpoFinal = [...grupoDepois,'Aurora', 'Levi','Hana' ]

console.log(Object.values(gurpoFinal))