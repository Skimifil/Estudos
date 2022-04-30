# Git e GitHub

## Por que aprender?

A ideia agora é me profissionalizar em programação e documentar tudo o que eu fazer, então dentro do meu *roadmap* de aprendizado, o Git DEVE estar incluso.

## O que espero aprender?

Espero ter total conhecimento em como utilizar a ferramenta e ter meios mais práticos de ter meus estudo centralizados e prontos para serem consultados ou baixados de qualquer lugar.

# Git

É um sistema de versionamento, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.

A instalação do Git é simples, basta acessar o site [https://git-scm.com/](https://git-scm.com/) e seguir as instruções. Depois de instalado, abra o terminal (dependendo do sistema operacional, como o Windows, o Git terá seu próprio terminal), execute o comando “git —version”, isso trará a versão do Git e a comprovação que a instalação foi feita sem problemas.

```bash
$ git —version
```

Na sua pasta em que você esta trabalhando, você vai criar o arquivo “README.md”, este é um arquivo de instrução, de como seu código funciona, é onde a documentação de tudo que você fez ou faz está. Este arquivo usa a linguagem de marcação “Markdown”. O Git funciona com outros tipos de arquivos, não necessariamente é obrigatório este arquivo, mas é uma boa prática.

Agora vamos inicializar o Git, utilizando o comando “git init”.

```bash
$ git init
```

O “init” inicia o Git usando seu diretório atual como sua “*branch master*”. Quando fazemos isso, é criado na pasta, uma outra pasta oculta chamada “.git” que contem tudo sobre o projeto.

Após a inicialização do Git e antes de fazer o “*commit*”, nós precisamos enviar os arquivos para a área de “*stating*”. Nisso nós usamos o como comando “git add”, nele nós passamos o caminho do diretório ou o próprio arquivo que será comitado.

```bash
$ git add README.md
```

Caso queira validar o status do processo até agora, tem o “git status”.

```bash
$ git status
```

Agora, faremos o “*Commit*” do arquivo no repositório.

```bash
$ git commit -m “primeiro commit”
```

O Git vem mudando e uma dessas alterações é o “*master*” da *branch* para “*main*”. Para mudar isso no seu repositório:

```bash
$ git branch -M “main”
```

# GitHub

> GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.
> 

Como a ideia é ter seu repositório pronto para ser baixado e trabalhado em qualquer lugar, o Github se torna a melhor opção. Com isso, crie um repositório na plataforma. Com o repositório criado, é gerado uma URL de acesso ao repositório, ele segue um padrão, sendo:

> 📖 https://github.com/seuUserName/nomeDoRepositorio.git


Com isso, usamos esse repositório para trabalhar, no seu terminal, vincule esse repositório remoto ao diretório de trabalho da sua máquina:

```bash
$ git remote add origin https://github.com/seuUserName/nomeDoRepositorio.git
```

Agora que o vinculo esta feito, você pode enviar seu(s) arquivo(s) usando o comando:

```bash
$ git push -U origin main
```

Após isso, uma tela de confirmação de cadastro será aberta, basta colocar suas credenciais.

Agora que está tudo pronto, basta seguir trabalhando......

Depois de atualizações feitas nos seus arquivos, você precisa atualizar seu repositório, com isso você irá iniciar com o “git add .” (o “.” indica que é todos os arquivos que estão dentro daquele diretório, caso queira mandar algum arquivo em especifico, basta passar o nome dele).

```bash
$ git add .
```

Agora segue com o *commit* das alterações.

```bash
$ git commit -m “Criação do projeto”
```

E envia o commit para o GitHub

```bash
$ git push origin main
```

### Criando uma nova *branch*

Quando você quer criar uma ramificação do seu código, uma nova função, você vai criar uma nova “*branch*” nele.

```bash
$ git checkout -b “novo-botao” 
```

Agora com a atualização feita, basta seguir os passos ja conhecidos:

```bash
$ git add .
$ git commit -m "novo botão"
$ git push origin novo-botao
```

Lembrando que aqui você esta na *branch*, logo você **não** faz o *push* no “*main*” e sim na *branch* que você nomeou.

Agora você precisa fazer o “*merge*” da *branch* para que ela seja vinculada a *main* e faça o “*push*”.

```bash
$ git merge novo-botao
$ git push origin main
```

### Voltando para *main*

Quando você abriu uma *branch*, você esta trabalhando dentro daquela *branch*, para voltar para a mais, execute o “*checkout*” de novo:

```bash
$ git checkout main
```

### Clonando um repositório para seu computador

Pegue a URL do repositório que quer clonar, entre na pasta do seu computador e de um clone:

```bash
$ git clone https://github.com/seuUserName/nomeDoRepositorio.git
```

### Atualizando seu repositório local

Caso o repositório sofra alterações e na sua máquina ela não esta atualizada também, você usa o “*pull*”.

```bash
$ git pull
```

### Enviando uma atualização para o repositório de outra pessoa.

Quando você clona o repositório de alguém e faz uma melhoria e gostria que a pessoa que é dona daquilo faça a atualização do código dela (caso ela entenda que faz sentido), você irá fazer um “*pull request*”.

Esse *pull* é feito na interface do GiHub, bem intuitivo.

Agradecimentos/Referências

## Rafaella Ballerini

[https://www.youtube.com/watch?v=DqTITcMq68k](https://www.youtube.com/watch?v=DqTITcMq68k)

[https://www.youtube.com/watch?v=UBAX-13g8OM](https://www.youtube.com/watch?v=UBAX-13g8OM)