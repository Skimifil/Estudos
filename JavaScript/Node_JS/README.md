# Node JS

### O que é?
Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

## NPM ou Yarn
[NPM](https://www.npmjs.com/) e [YARN](https://yarnpkg.com/) são *gerenciadores de pacotes*, eles nos auxiliam na inicialização de nossos projetos em *node* e ainda nos ajuda na instalação de bibliotecas para utilização em nosso código.

Esse NPM e Yarn são repositórios que DEVs de todo lugar disponibilizam seus trabalhos para que a comunidade possa utilizar. Esses trabalhos podem ser de bibliotecas simples a grandes *frameworks* com muitos recursos.

A diferença entre um e outro esta na forma com que os comandos são dados e como esses gerenciadores lidam com os módulos (bibliotecas, frameworks, etc...).

Comandos básicos:
```bash
    npm install nomeDoPacote
    yarn add nomeDoPacote
```

Quando fazemos a instalação de um módulo, esses pacotes são colocados em uma pasta chamada "node_modules" e ele será utilizado dentro do seu projeto, de forma "local". Mas é possível fazer a instalação desse(s) módulo(s) de forma "global", fazendo com que ele possa ser utilizado em todos seus projetos.
```bash
    npm install -g nomeDoPacote
    yarn add global nomeDoPacote
```

Geralmente você irá usar de forma local, pois em muitos casos um projeto seu utilizara um determinado módulo e depois não irá mais usar ele em outros projetos e para que não tenha lixo nesses outros projetos, você acaba fazendo localmente. Mas vale ressaltar que existem módulos que precisam estar de forma "global".

Vale informar que, o próprio *node* ja possui alguns módulos que vem com ele e nisso não precisa de instalação, mas precisa apenas de chamar ele.

### Iniciando um projeto com NPM

**Para aprendizagem desse tema, será feito a criação de um módulo que faz a validação de um arquivo *markdown* e valida se as URLs estão funcionando.**

Quando utilizamos o NPM para iniciar nosso projeto, iniciamos o comando de "init" e passando o parametro de "-y" para aprovar as perguntas que são feitas ao longo da criação de nosso projeto pelo Gerenciador de Pacotes.
```bash
    npm init -y
```

Com a finalização do comando, é gerado um arquivo chamado "package.json", algo parecido com isso.
```json
{
  "name": "li_markdown",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

Iremos utilizar o módulo "chalk" nesse projeto, com isso fazemos a instalação dele.
```bash
    npm install chalk@4.0
```
Você terá uma saída parecida com essa:
```bash
    
    added 1 package, and audited 2 packages in 840ms
    
    1 package is looking for funding
      run `npm fund` for details
    
    found 0 vulnerabilities
```
E no diretório do seu projeto, a pasta "node_modules" será criada com os arquivos do módulo que você instalou.

Como estamos fazendo um projeto que será enviado para o GitHub, não faz sentido levarmos os módulos baixados pro projeto, pois se não ficaria um envio muito grande e visto que, sempre que você iniciar seu código de outra máquina, ele ja irá baixar os módulos que você colocou no seu projeto, pois no arquivo "package.json" esta informando quais são as "*dependences*".

Com isso, nós criado o arquivo ".gitignore" e colocamos dentro dele o nome da pasta do "node_modules".
```bash
    node_modules
```

### O que é o "package.json"?
O arquivo de "package.json" é uma receitinha do seu projeto, que contém  tudo que ele precisa para ser executado, então as dependências (módulos que são importados) e scripts que você usa no projeto são informadas nesse arquivo.

Como visto antes, quando damos o comando "npm init", o *npm* configura nosso diretório do projeto e com isso, cria o arquivo "package,json".

Com o passar do tempo e durante a construção da sua aplicação, seu arquivo de "package.json" começa a popular.
```json
    {
      "name": "li_markdown",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "cli": "node cli.js ./arquivos/texto1.md"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "chalk": "4.0"
      }
    }
```
Agora, vamos entender o que são os campos e o que podemos adicionar.

- *name* - Nome do seu projeto, quando não informado durante a inicialização, é dado o nome da pasta raiz do seu projeto.
- *version* - Versão do seu projeto.
- *description* - A descrição dele.
- *main* - Qual o arquivo base do seu projeto.
- *scripts* - Quando estamos testando a execução de nossos códigos, usamos o terminal passando o nome do arquivo base do projeto. Na sessão de "scripts", conseguimos automatizar a execução desses comandos passando o nome dele, exemplo o "cli":
    ```bash
        npm run cli
    ```
- *Keywords* - Palavras chaves para referenciar o projeto, algo como TAGs.
- *author* - Informações do desenvolvedor que criou o projeto.
- *license* - Qual a licença que esta sendo usada.
- *dependecies* - Quais são as dependências usadas, quais os módulos que foram instalados e utilizados no projeto.

Links de referencia:

[NodeJS Reativa - package-json](https://nodejs.reativa.dev/0019-package-json/index)

[NodeJS - what is the file package-json](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)

[Gabrie Luiz Ramos - Entendendo o package-json](https://gabrieluizramos.com.br/entendendo-o-package-json)

[luiztools - o guia completo do package-json do node js](https://www.luiztools.com.br/post/o-guia-completo-do-package-json-do-node-js/)


### Módulos interessantes

- [Jest](https://jestjs.io/pt-BR/) - Módulo usado para fazer testes no código.
- [chalk](https://www.npmjs.com/package/chalk) - Faz com que tu possa gerar string customizadas.

## Agradecimentos/Referências
### Alura
##### Instrutores "NodeJS: criando sua primeira biblioteca"
Juliana Amoasei

##### Instrutores "Node.js: API Rest com Express e MongoDB"
Jacqueline Oliveira