function falarDepois(segundos, frase) {
    return new Promise((resolve, rejetc) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    } )  
}

falarDepois(3,"Que legal")
                .then(frase => frase.concat(' este javascript'))
                .then(outra =>console.log(outra))
                .catch(e => console.log(e))