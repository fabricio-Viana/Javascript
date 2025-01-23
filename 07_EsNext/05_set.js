//não aceita repetição e nem é indexado

const times = new Set()

times.add('vasco')
times.add('são paulo').add('corintias').add('palmeiras')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.delete('corintias'))
console.log(times.has('corintias'))

const alunos = ['fabricio','lucas','melissa','gaby']
const alunosSet = new Set(alunos)
console.log(alunosSet)


const alunosSet2 = new Set(['juniro','saubino','malibu','cabirú','juniro'])
console.log(alunosSet2)




