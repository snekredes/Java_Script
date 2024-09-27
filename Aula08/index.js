const nome = 'Renato'
const sobrenome ='Alves'
const idade = 37
const peso  = 80
const altura = 1.75
let imc = peso / (altura*altura)
let anoNascimento= 2024-idade

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}KG`)
console.log(`tem ${altura} de altura e seu imc é de ${imc}`) 
console.log( `${nome} ${sobrenome} nasceu em ${anoNascimento}!`)