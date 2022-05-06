// Algoritomo
// É uma sequeência de instruções executaveis que servem para trazer uma solução para um determinado problema.

// Precisamos exibir o menor valor de um livro dentro de uma array.
const livros = require('./listaDeLivros')

let maisBarato = 0

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`O livro mais barato é o ${livros[maisBarato].titulo} e custa R$ ${livros[maisBarato].preco}!`)

console.log("-------------------------------------------------")

