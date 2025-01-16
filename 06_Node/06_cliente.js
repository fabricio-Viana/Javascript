const contA = require('./06_InstanciaUnica')
const contB = require('./06_InstanciaUnica')

const contC = require('./06_novaInstancia')() //ISTO PORQUE RETORNA UMA FUNÇÃO FACTORY
const contD = require('./06_novaInstancia')()  //ISTO PORQUE RETORNA UMA FUNÇÃO FACTORY


contA.inc()
contA.inc()
console.log(contA.n1, contB.n1)


contC.inc()
contC.inc()
console.log(contD.n1, contC.n1)

