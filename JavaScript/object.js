const sistesmaDeRpgs = {
    nome: "D&D 5e",
    anoDePublicacao: 2014,
    notaPessoal: 10
}

console.log(`Um dos meus sistemas de RPG preferidos é o ${sistesmaDeRpgs.nome} que foi lançado em ${sistesmaDeRpgs.anoDePublicacao}.`)

//Além de acessar o valor de uma chave, é possível utilizar funções com ela
console.log(sistesmaDeRpgs.nome.substring(0,3))