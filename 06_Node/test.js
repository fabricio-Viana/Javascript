process.stdout.write('Informe seu nome: ')

process.stdin.on('data',data=>{
    const nome = data.toString()

    process.stdout.write(nome)
    process.exit()

    
})
process.exit()