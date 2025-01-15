console.log(typeof Array, typeof new Array, typeof []) // array em javascritp é um objeto

let aprovados = new Array('Bia','Carlos','Ana')

 
aprovados = ['Bia','Carlos','Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Abia')

console.log(aprovados.length)


aprovados[9] = 'rafael' 
console.log(aprovados.length)
 console.log(aprovados === undefined)

 console.log(aprovados)

 console.log(aprovados)
 aprovados.sort()
 console.log(aprovados)

 delete aprovados[1]
 console.log(aprovados)
 

 aprovados = ['Bia','Carlos','ana']
 aprovados.splice(1,1,'FAFA','MEMEL')

 console.log(aprovados)

 console.log(_.random(1,10))