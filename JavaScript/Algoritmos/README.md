# Algoritmos com JavaScript

 É uma sequencia de instruções executáveis que servem para trazer uma solução para um determinado problema.

### Problema 1
Dentro de uma lista de livros, precisamos saber qual o livro mais barato.
Lista de livros:
- JavaScript - R$25
- PHP -R$15
- Java - R$30
- Elixir - R$50
- Go - R$45
- Python - R$20

Primeiro iniciamos com a construção do nosso módulo de livros:
```javascript
    const precosLivros = [
        {
            titulo: "JavaScript",
            preco: 25
        },{
            titulo: "PHP",
            preco: 15
        },{
            titulo: "Java",
            preco: 30
        },{
            titulo: "Elixir",
            preco: 50
        },{
            titulo: "Go",
            preco: 45
        },{
            titulo: "Python",
            preco: 20
        }]
    
    module.exports = precosLivros
```
E agora usamos o módulo no nosso código:
```javascript
    const livros = require('./listaDeLivros')
    
    let maisBarato = 0
    
    for(let atual = 0; atual < livros.length; atual++){
        if(livros[atual].preco < livros[maisBarato].preco){
            maisBarato = atual
        }
    }
    
    console.log(`O livro mais barato é o ${livros[maisBarato].titulo} que custa R$${livros[maisBarato].preco}!`)
    
    console.log("-------------------------------------------------")
```
Com isso, teremos a saída:
```bash
    O livro mais barato é o PHP que custa R$15!
    -------------------------------------------------
```



## Agradecimentos/Referências
### Alura
##### Instrutores "Algoritmos com JavaScript I: iniciando com algoritmos de ordenação"
Juliana Amoasei