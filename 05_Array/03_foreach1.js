const aprovados = ['Fabricio','Melissa', 'Isaac','Maria']

aprovados.forEach(function(nome , indice){
    console.log(indice+1,')', nome)
})
console.log('--------------------------------')
aprovados.forEach((i,j)=>{
    console.log(j+1,i)
})


const aprovado = (nome,indice ,rray)=>{console.log(indice+1+"_",nome, rray)}

aprovados.forEach(aprovado)