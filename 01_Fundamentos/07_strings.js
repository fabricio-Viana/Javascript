const aluno = "Fabriciojkbsojdo"
const aluno2 = "joãozim"
console.log(aluno.charAt(4))

console.log(aluno.charCodeAt(6))
console.log(aluno.indexOf("c"))

console.log(aluno.substring(5))
console.log(aluno.substring(0,8))

console.log(aluno.substring(0,8).concat(" Viana").concat(" tem 22 anos"))
console.log(aluno.replace(aluno,aluno2))
console.log(aluno.replace("jkbsojdo","        "))

let familia = "fabricio,meliisa,aurora,levi";
familia = familia.split(",")
console.log(familia)