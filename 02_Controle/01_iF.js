function nota(nota){
    if(nota >= 7){
        console.log("Aprovado com "+ nota)
    }
}

nota(8.1)
nota(6.1)

function soFaloSeForVerdade(fala){
    if(fala){
        console.log('É verdade... '+ fala)
    }
}

soFaloSeForVerdade()
soFaloSeForVerdade(null)
soFaloSeForVerdade(undefined)
soFaloSeForVerdade(NaN)
soFaloSeForVerdade('')
soFaloSeForVerdade('vc respira')