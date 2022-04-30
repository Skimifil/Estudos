const sistesmaDeRpgs = {
    nome: "D&D 5e",
    anoDePublicacao: 2014,
    notaPessoal: 10,
    livros: ["Player's Handbook", "Dungeon Master's Guide", "Monster Manual"]
}

console.log(`Um dos meus sistemas de RPG preferidos é o ${sistesmaDeRpgs.nome} que foi lançado em ${sistesmaDeRpgs.anoDePublicacao}.`)

// Além de acessar o valor de uma chave, é possível utilizar funções com ela
console.log(sistesmaDeRpgs.nome.substring(0,3))

// Também é possivel validar as chaves que contém no objeto, utilizando uma variável de arrays
const arrayDeChaves = ["nome", "anoDePublicacao", "notaPessoal"]
console.log(sistesmaDeRpgs[arrayDeChaves[0]])

//----------------------------------------------------
// Printando todos os camponentes do objeto
arrayDeChaves.forEach(info=>console.log(sistesmaDeRpgs[info]))

//----------------------------------------------------
// Adicionando e alterando valores
// A adição de um novo valor é direta e bem simples
sistesmaDeRpgs.numeroDeLivros = 50

// A alteração também é direta e simples
sistesmaDeRpgs.numeroDeLivros = 53

console.log(sistesmaDeRpgs)

//----------------------------------------------------
// É possivel que os tipos de valores das chaves seja, também, um array, para acessar a informação dessa array
sistesmaDeRpgs.livros.forEach(nomeDosLivros => console.log(nomeDosLivros))

//----------------------------------------------------
// Compondo objetos com objetos
// Conforme visto acima, conseguimos adicionar vários tipos de valores e mesmo fora da estrutura inicial. Com isso podemos colocar um objeto dentro de um objeto.
sistesmaDeRpgs.ramificacoes = {
    nome: "Pathfinder",
    anoDePublicacao: 2018,
    Motivo: "Depois do descontentamento dos fâs de D&D na 4º edição, foi criado o sistema Pathfinder."
}
console.log(sistesmaDeRpgs)

// Agora, para acessar uma chave de um objeto DENTRO de outro objeto.
console.log(sistesmaDeRpgs.ramificacoes.nome)