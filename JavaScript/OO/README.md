
# Objetos
Objetos no JS me parecem ser iguais a *arrays*, a diferença é que o objeto tem uma chave e um valor.

```JavaScript
    const sistesmaDeRpgs = {
        nome: 'D&D 5e',
        anoDePublicacao: 2014,
        notaPessoal: 10,
        livros: [`Player's Handbook`, `Dungeon Master's Guide`, `Monster Manual`]
    }
```
Para acessar esses dados, nós referenciamos o nome da chave do valor que queremos.
```javascript
    console.log(`Um dos meus sistemas de RPG preferidos é o ${sistesmaDeRpgs.nome} que foi lançado em ${sistesmaDeRpgs.anoDePublicacao}.`)
```
Saída:
```bash
    Um dos meus sistemas de RPG preferidos é o D&D 5e que foi lançado em 2014.
```

Além de acessar o valor de uma chave, é possível utilizar funções com ela.

```javascript
    console.log(sistesmaDeRpgs.nome.substring(0,3))
```
Saída:
```bash
    D&D
```

Também é possível validar as chaves que contém no objeto, utilizando uma variável de arrays.
```javascript
    const arrayDeChaves = [`nome`, `anoDePublicacao`, `notaPessoal`]
    console.log(sistesmaDeRpgs[arrayDeChaves[0]])
```
Saída:
```bash
    D&D 5e
```

Printando todos os componentes do objeto.
```javascript
    arrayDeChaves.forEach(info=>console.log(sistesmaDeRpgs[info]))
```
Saída:
```bash
    D&D 5e
    2014
    10
```

#### Adicionando e alterando valores

A adição de um novo valor é direta e bem simples.
```javascript
    sistesmaDeRpgs.numeroDeLivros = 50
    console.log(sistesmaDeRpgs)
```
Saída:
```bash
    {
        nome: 'D&D 5e',
        anoDePublicacao: 2014,
        notaPessoal: 10,
        livros: [ "Player's Handbook", "Dungeon Master's Guide", 'Monster Manual' ],
        numeroDeLivros: 50
    }
```

A alteração também é direta e simples.
```javascript
    sistesmaDeRpgs.numeroDeLivros = 53
    console.log(sistesmaDeRpgs)
```
Saída:
```bash
    {
        nome: 'D&D 5e',
        anoDePublicacao: 2014,
        notaPessoal: 10,
        livros: [ "Player's Handbook", "Dungeon Master's Guide", 'Monster Manual' ],
        numeroDeLivros: 53
    }
```

É possivel que os tipos de valores das chaves seja, também, um array, para acessar a informação dessa array.
```javascript
    sistesmaDeRpgs.livros.forEach(nomeDosLivros => console.log(nomeDosLivros))
```
Saída:
```bash
    Player's Handbook
    Dungeon Master's Guide
    Monster Manual
```

#### Compondo objetos com objetos
Conforme visto acima, conseguimos adicionar vários tipos de valores e mesmo fora da estrutura inicial. Com isso podemos colocar um objeto dentro de um objeto.
```javascript
    sistesmaDeRpgs.ramificacoes = [{
        nome: `Pathfinder`,
        anoDePublicacao: 2018,
        Motivo: `Depois do descontentamento dos fâs de D&D na 4º edição, foi criado o sistema Pathfinder.`
    }]
```
Saída:
```bash
    {
        nome: 'D&D 5e',
        anoDePublicacao: 2014,
        notaPessoal: 10,
        livros: [ "Player's Handbook", "Dungeon Master's Guide", 'Monster Manual' ],
        numeroDeLivros: 53,
        ramificacoes: [
        {
            nome: 'Pathfinder',
            anoDePublicacao: 2018,
            Motivo: 'Depois do descontentamento dos fâs de D&D na 4º edição, foi criado o sistema Pathfinder.'
        }
        ]
    }
```

Agora, para acessar uma chave de um objeto DENTRO de outro objeto.
```javascript
    console.log(sistesmaDeRpgs.ramificacoes[0].nome)
```
Saída:
```bash
    $ Pathfinder
```

Quando queremos adicionar um novo dado a array, podemos utilizar o "push" e no objeto segue a mesma ideia (quando temos um array dentro do objeto).
```javascript
    sistesmaDeRpgs.livros.push(`Guia do Aventureiro para a Costa da Espada`)
```
Saída:
```bash
    [
        "Player's Handbook",
        "Dungeon Master's Guide",
        'Monster Manual',
        'Guia do Aventureiro para a Costa da Espada'
    ]
```

Gerando uma visualização mais "bonita" percorrendo as chaves e valores do objeto utilizando o FOR. O typeof indica qual o tipo do dado.

```javascript
let relatorio = ``
for( let info in sistesmaDeRpgs){
    if(typeof sistesmaDeRpgs[info] === "object" || typeof sistesmaDeRpgs[info] === "function"){
        continue
    }else{
        relatorio += `${info} ==> ${sistesmaDeRpgs[info]} \n\n`
    }
}
console.log(relatorio)
```
Saída:
```bash
    nome ==> D&D 5e 
    
    anoDePublicacao ==> 2014 
    
    notaPessoal ==> 10 
    
    numeroDeLivros ==> 53
```
### Métodos de objetos
Através da função "Object", conseguimos trazer informações sobre o objeto que estamos trabalhando.

```javascript
    const propsSistemas = Object.keys(sistesmaDeRpgs)
    console.log(propsSistemas)
```
Saída:
```bash
    [
        'nome',
        'anoDePublicacao',
        'notaPessoal',
        'livros',
        'numeroDeLivros',
        'ramificacoes'
    ]
```

Utilizando o método "include", nós validamos se um determinado valor consta em um objeto.

```javascript
function validaRamificacao(obj){
    const propsSisRam = Object.keys(obj)
    if(propsSisRam.includes(`ramificacoes`)){
        console.log(`O livro ${obj.nome} tem ramificações dele!`)
    }
}
validaRamificacao(sistesmaDeRpgs)
```
Saída:
```bash
O livro D&D 5e tem ramificações dele!
```

#### Sintaxe de espalhamento
Pegar uma lista de ramificações e criar uma lista própria dela. *Confesso que não entendi bem, preciso de uma revisão.*

*Acho que vale arrumar todo o código para que a lógica abaixo funcione no código de cima...???*

```javascript
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
```
Saída:
```bash
        [
          {
            nome: 'Livro Teste 1',
            anoDePublicacao: 2022,
            notaPessoal: 5,
            livros: [ 'Livro 1-1', 'Livro 1-2' ],
            ramificacoes: [ [Object] ]
          },
          {
            nome: 'Livro Teste 2',
            anoDePublicacao: 2022,
            notaPessoal: 5,
            livros: [ 'Livro 2-1', 'Livro 2-2' ],
            ramificacoes: [ [Object], [Object] ]
          }
        ]
        ┌─────────┬─────────────┬─────────────────┬───────────────────────────┐
        │ (index) │    nome     │ anoDePublicacao │          Motivo           │
        ├─────────┼─────────────┼─────────────────┼───────────────────────────┤
        │    0    │ 'Livro 1.1' │      2022       │   "Blá blá bla'bonito."   │
        │    1    │ 'Livro 2.1' │      2022       │   "Blá blá bla'bonito."   │
        │    2    │ 'Livro 2.2' │      2022       │ "Oto Blá blá bla'bonito." │
        └─────────┴─────────────┴─────────────────┴───────────────────────────┘
```

## Orientação a Objeto
"É um modelo de se programar que você pega situações do mundo real e traz pro seu código".
Me parece uma forma mais inteligente de programar, com sistema de classes que você faz um template do que se quer usar, uma estrutura de objeto com características e ações e depois você só instancia ela para alguém, além das Heranças que tem. A base da Orientação a Objetos é a Classe.

Por convenção, o nome das classes SEMPRE devem começar com a primeira letra maiúscula.

### UML

UML é a "Linguagem de Modelagem Unificada", ela é utilizada para ilustrar o comportamento e funcionalidades do nosso código, representar as estruturas e relações entre as classes de um projeto e interfaces com outros sistemas.

___

Estruturando sua classe:
```javascript

class SistemasDeRpg {
    constructor(nome,anoDePublicacao,notaPessoal,livros){
        this.nome = nome
        this.anoDePublicacao = anoDePublicacao
        this.notaPessoal = notaPessoal
        this.livros = livros
    }

    aumentaANota(valor){
        this.notaPessoal += valor
    }

    exibeOsLivros(){
        console.table(this.livros)
    }
}

const livroDnD = new SistemasDeRpg('D&D 5e', 2014, 10, [`Player's Handbook`, `Dungeon Master's Guide`, `Monster Manual`])
console.log(livroDnD)
livroDnD.exibeOsLivros()
```
Saída:
```javascript
    $    SistemasDeRpg {
          nome: 'D&D 5e',
          anoDePublicacao: 2014,
          notaPessoal: 10,
          livros: [ "Player's Handbook", "Dungeon Master's Guide", 'Monster Manual' ]
        }
        ┌─────────┬──────────────────────────┐
        │ (index) │          Values          │
        ├─────────┼──────────────────────────┤
        │    0    │   "Player's Handbook"    │
        │    1    │ "Dungeon Master's Guide" │
        │    2    │     'Monster Manual'     │
        └─────────┴──────────────────────────┘
```

Agora nós conseguimos criar as Heranças.
```javascript
class Ramificacao extends SistemasDeRpg{
    constructor(nome,anoDePublicacao,notaPessoal,livros,motivo){
        super(nome,anoDePublicacao,notaPessoal,livros)
        this.motivo = motivo
    }
}

const livroPath = new Ramificacao(`Pathfinder`, 2018, 10, `Pathfinder`, `Depois do descontentamento dos fâs de D&D na 4º edição, foi criado o sistema Pathfinder.`)

console.log(livroPath)
```
Saída:
```bash
        Ramificacao {
          nome: 'Pathfinder',
          anoDePublicacao: 2018,
          notaPessoal: 10,
          livros: 'Pathfinder',
          motivo: 'Depois do descontentamento dos fâs de D&D na 4º edição, foi criado o sistema Pathfinder.'
        }
```



___
## Agradecimentos/Referências
### Alura
##### Instrutores 
#### "Fundamentos do JavaScript: objetos"
André Bessa e Juliana Amoasei
#### "JavaScript: primeiros passos da programação orientada a objetos"
Juliana Amoasei