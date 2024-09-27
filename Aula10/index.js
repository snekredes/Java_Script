// tipos de dados primitivos: String, Number, Undefined, null, boolean, symbol
const nome = 'Renato'// String
const nome2 = "Renato"// String
const nome3 = `Renato`// String
const num1 = 10    //Number 
const num2 = 20.52 //Number
let nomeAluno // Undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null // Nulo -> não aponta pra local nenhuma na memória
const aprovado = true // Bolean = true , false (lógico)

console.log(typeof nome, nome)


let a = [ 1, 5 , 7]
let b = a
console.log(a , b)
b.push(9)
console.log(a,b)