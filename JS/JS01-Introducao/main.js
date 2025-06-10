//

/* 



*/

// let não pode ter duas variaveis com o mesmo nome em um documento
// const deixa o valor fixo no codigo

let idade 
const ano = 2010

console.log("Hello word") // apresentar mesagem
console.clear() // limpar

// variaveis

var numero1 = 192 // iniciar uma variavel
console.log(numero1) 

var num1 = 4
var num2 = 4
var resultado = num1 + num2
console.log(resultado)

idade = 89 // iniciar a variavel em outra parte do codigo
console.log(idade)

//textos strings
var nome = 'Matheus Araujo'
var nome2 = 'Matheus Vinicius'
var nome3 = '12345.6789' // texto
console.log(nome, nome2, nome3)

console.log("Olá" + " papai") // concatenar

console.log("Aluno " + nome + "e Aluno " + nome2 + 'Tem um total de ' + nome3 + 'dinheiros') // concatenar

//template string

console.log(`Aluno ${nome} e Aluno ${nome2} Tem um total de ${nome3} dinheiros`) //concatenar

// var é flexivl e com menos regras (posso alterar o valor inicial de uma var e recriar a mesma em outras partes do codigo)

// let você não pode recriar a mesma em outras partes do codigo com o mesmo nome, mas pode chamar e alterar o valor inicial

// const você não pode recriar a mesma em outras partes do codigo e não pode alterar  o valor inicial dela garantindo a confiança do dado que está sendo utiliado no decorrer do seu codigo


// Operadores

var valor1 = 5
var valor2 = 5
console.log(valor2 + valor1)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)

console.log(5 / 2 * (2 + 3))

//Operadores relacionais

console.log(5 == 5)
console.log(5 > 5)
console.log(22 < 8)
console.log(22 >= 22)
console.log(22 != 23)
console.log('A' == 'A')
console.log(true == false)
console.log(true == true)
console.log(true != 'false')

let temCamisa = false
let temCracha = true
console.log(temCamisa)
console.log(temCracha)
console.log(temCamisa == true && temCracha == true) // && = "and" ou "e"
console.log(temCamisa == true || temCracha == true) // || = "our" ou "ou"
console.log(!(temCamisa == true || temCracha == true))

//Operador de atribuição
var x = 3
var y = 2
x= x + y
console.log(x);
// var soma = x + y
// x = soma

x = 120
console.log(x)


// log > para mostrar os resultados, mensagens do sistema
// clear > serve para limpar o console e deixar disponivel para novas mensagens

console.clear()
console.log("Está tudo limpo");
console.log("Olá mundo");

console.error("Não use essa tela, você pode ser punido por isso")
console.warn("Mas apresenta uma mesagem em amarelo")
