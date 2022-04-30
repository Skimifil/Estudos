# JavaScript

## Por que aprender?

A ideia agora é me profissionalizar em programação, irei utilizar o JavaScript como a linguagem que irei dar o maior foco. Antes eu ja tinha tentado Python, mas não segui em frente, mas quero utilizar o JavaScript como minha *linguagem principal*.

## O que espero aprender?

Espero ter total conhecimento em como utilizar a linguagem para ter capacidade de *criar* integraçãoes e automações para as ferramentas e atividades do meu dia de trabalho.

# JavaScript

JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.

---

## Objetos
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
    $ Um dos meus sistemas de RPG preferidos é o D&D 5e que foi lançado em 2014.
```

Além de acessar o valor de uma chave, é possível utilizar funções com ela.

```javascript
    console.log(sistesmaDeRpgs.nome.substring(0,3))
```
Saída:
```bash
    $ D&D
```

Também é possivel validar as chaves que contém no objeto, utilizando uma variável de arrays
```javascript
    const arrayDeChaves = [`nome`, `anoDePublicacao`, `notaPessoal`]
    console.log(sistesmaDeRpgs[arrayDeChaves[0]])
```
Saída:
```bash
    $ D&D 5e
```

Printando todos os camponentes do objeto
```javascript
    arrayDeChaves.forEach(info=>console.log(sistesmaDeRpgs[info]))
```
Saída:
```bash
    $ D&D 5e
    $ 2014
    $ 10
```

Adicionando e alterando valores
A adição de um novo valor é direta e bem simples
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

A alteração também é direta e simples
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

É possivel que os tipos de valores das chaves seja, também, um array, para acessar a informação dessa array
```javascript
    sistesmaDeRpgs.livros.forEach(nomeDosLivros => console.log(nomeDosLivros))
```
Saída:
```bash
    $ Player's Handbook
    $ Dungeon Master's Guide
    $ Monster Manual
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
    $   {
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

Quando queremos adicionar um novo dado a array, podemos utilizar o "push" e no objeto segue a mesma ideia (quando temos um array dentro do objeto)
```javascript
    sistesmaDeRpgs.livros.push(`Guia do Aventureiro para a Costa da Espada`)
```
Saída:
```bash
    $   [
          "Player's Handbook",
          "Dungeon Master's Guide",
          'Monster Manual',
          'Guia do Aventureiro para a Costa da Espada'
        ]
```


## Agradecimentos/Referências
### Alura
#### Instrutores JS Objetos
André Bessa e Juliana Amoasei 