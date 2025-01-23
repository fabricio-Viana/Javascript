const tecnologias = new Map()

tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)


const n = new Map([
    [function () { }, 'função'],
    [{}, 'objeto'],
    [123, 'numero']
])

n.forEach((i, j) => {
    console.log(j, i)
})

console.log(n.has(123))
n.delete(123)
console.log(n.has(123))

console.log(n.size)

n.set(123, 'a')
n.set(123, 'b')
console.log(n)
