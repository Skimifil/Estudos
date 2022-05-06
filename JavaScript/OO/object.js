const sistesmaDeRpgs = {
    nome: 'D&D 5e',
    anoDePublicacao: 2014,
    notaPessoal: 10,
    livros: [`Player's Handbook`, `Dungeon Master's Guide`, `Monster Manual`]
}

console.log(`Um dos meus sistemas de RPG preferidos é o ${sistesmaDeRpgs.nome} que foi lançado em ${sistesmaDeRpgs.anoDePublicacao}.`)

// Além de acessar o valor de uma chave, é possível utilizar funções com ela
console.log(sistesmaDeRpgs.nome.substring(0,3))

// Também é possivel validar as chaves que contém no objeto, utilizando uma variável de arrays
const arrayDeChaves = [`nome`, `anoDePublicacao`, `notaPessoal`]
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
sistesmaDeRpgs.ramificacoes = [{
    nome: `Pathfinder`,
    anoDePublicacao: 2018,
    Motivo: `Depois do descontentamento dos fâs de D&D na 4º edição, foi criado o sistema Pathfinder.`
}]
console.log(sistesmaDeRpgs)

// Agora, para acessar uma chave de um objeto DENTRO de outro objeto.
console.log(sistesmaDeRpgs.ramificacoes[0].nome)

// Quando queremos adicionar um novo dado a array, podemos utilizar o "push" e no objeto segue a mesma ideia (quando temos um array dentro do objeto)

sistesmaDeRpgs.livros.push(`Guia do Aventureiro para a Costa da Espada`)
console.log(sistesmaDeRpgs.livros)

// Gerando uma visualização mais "bonita" percorrendo as chaves e valores do objeto utilizando o FOR.
// O typeof indica qual o tipo do dado.

let relatorio = ``
for( let info in sistesmaDeRpgs){
    if(typeof sistesmaDeRpgs[info] === "object" || typeof sistesmaDeRpgs[info] === "function"){
        continue
    }else{
        relatorio += `${info} ==> ${sistesmaDeRpgs[info]} \n\n`
    }
}
console.log(relatorio)

// Métodos de objetos
// Através da função "Object", conseguimos trazer informações sobre o objeto que estamos trabalhando.
const propsSistemas = Object.keys(sistesmaDeRpgs)
console.log(propsSistemas)

// Utilizando o método "include", nós validamos se um determinado valor consta em um objeto.
function validaRamificacao(obj){
    const propsSisRam = Object.keys(obj)
    if(propsSisRam.includes(`ramificacoes`)){
        console.log(`O livro ${obj.nome} tem ramificações dele!`)
    }
}
validaRamificacao(sistesmaDeRpgs)
console.log(`-----------------------------------------`)

// Sintaxe de espalhamento
// Pegar uma lista de ramificações e criar uma lista própria dela
// Desafio, arrumar todo o código para que a lógica abaixo funcione no código de cima...

const outroSistesmaDeRpgs = [
    {
    nome: 'Livro Teste 1',
    anoDePublicacao: 2022,
    notaPessoal: 5,
    livros: [`Livro 1-1`, `Livro 1-2`],
    ramificacoes: [{
        nome: `Livro 1.1`,
        anoDePublicacao: 2022,
        Motivo: `Blá blá bla'bonito.`
    }]
    },
    {
        nome: 'Livro Teste 2',
        anoDePublicacao: 2022,
        notaPessoal: 5,
        livros: [`Livro 2-1`, `Livro 2-2`],
        ramificacoes: [{
            nome: `Livro 2.1`,
            anoDePublicacao: 2022,
            Motivo: `Blá blá bla'bonito.`
        },{
            nome: `Livro 2.2`,
            anoDePublicacao: 2022,
            Motivo: `Oto Blá blá bla'bonito.`
        }]
        }
]


console.log(outroSistesmaDeRpgs)

const listaDeRamificacoes = [...outroSistesmaDeRpgs[0].ramificacoes,...outroSistesmaDeRpgs[1].ramificacoes]
console.table(listaDeRamificacoes)

console.log(`-----------------------------------------`)