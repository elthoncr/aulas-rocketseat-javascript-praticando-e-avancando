// Array

const animals = ['Lion', 'Monkeys', 'Cat']

//Agora imprimindo o Array:
console.log(animals)

// Como acessar valores dentro do Array?
console.log(animals[0])

// Como verificar o tamanho do Array?
console.log(`O array ${animals} tem ${animals.length} animais nele.`)

// Caso eu tente acessar uma posição que não contenha nenhuma informação ela apresentara undefined no console,
// Exemplo:

console.log(`O Valor da posição 3 do array Animals é: ${animals[3]}`)
// Console: (> O Valor da posição 3 do array Animals é: undefined)

// Outro tipo de acesso ao Array é da seguinte forma:

const cars = [
  'Fusca',
  'Combe',
  {
    name: 'Brasilia',
    brand: 'Volkswagen'
  }
]

//Acessando valores dentro do Array
console.log(
  `O nome do Carro na posição 2 do Array é ${cars[2].name} da marca ${cars[2].brand}`
)
