const obj = {a:1,b:2,c:3, soma(){ return a+b+c}}
console.log(JSON.stringify(obj)) //JSON é um formato textul que apenas pega dados e se comunica com outros sistemas

//JSON.parse("{a:1 b:2 c:3}") errado
//JSON.parse("{'a':1 'b':2 'c':3}") errado

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a":1.8,"b":"hello world","c":true, "c": {}, "d": []}'))