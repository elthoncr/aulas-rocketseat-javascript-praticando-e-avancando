//  1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?

//console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Bollean
*/

let name = 'Elthon'
let ageNew = 15
let stars = 4.5
let isSubscribed = true

/*

    4. A Variável student abaixo é de que tipo de dados?
    // Variavel do tipo objeto!

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

*/

let student = {
  name: 'Otávio',
  age: 27,
  weight: 110.5,
  isSubscribed: true
}

console.log(student)

// console.log(
//   `O Estudante ${student.name} tem de idade ${student.age} e pesa ${student.weight} `
// )

/**
 *  5. Declare uma variável do tipo Array, de nome
 *  student e atribua a ela nenhum valor, ou seja,
 *  somente o Array vazio.
 */

/**
 * 6. Retribua valor para a variável acima, colocando
 * dentro dela o objeto student da questão 4. (Não
 * copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).
 */

let students = [student]

console.log(students)

/**
 * 7. Coloque no console o valor da posição zero do Array acima
 */

console.log(students[0])

/**
 * 8. Crie um novo student e coloque na posição 1 do Array students
 */

student = {
  name: 'Renato',
  age: 45,
  weight: 80.8
}

students[1] = [student]

console.log(students[1])

/**
 *  9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
 *
 * console.log(a)
 * var a = 1
 *
 *    A resposta para essa execução é a seguinte:
 *    Primeiro a variável a esta utilizando um tipo de variável var, isso faz com que a variável tenha elevação ou no inglês heisiling, fazendo que o código faça isso com ela:
 *
 * var a = 1
 * console.log(a)
 * Console(> 1)
 *
 * Sendo assim, será impresso o valor 1.
 */

var a = 1
console.log(a)
