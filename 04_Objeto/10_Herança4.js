console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('meu amor'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([3,4,97,6,2,96,2].first())

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('ola mundo'.reverse())

