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


class Ramificacao extends SistemasDeRpg{
    constructor(nome,anoDePublicacao,notaPessoal,livros,motivo){
        super(nome,anoDePublicacao,notaPessoal,livros)
        this.motivo = motivo
    }
}

const livroPath = new Ramificacao(`Pathfinder`, 2018, 10, `Pathfinder`, `Depois do descontentamento dos fâs de D&D na 4º edição, foi criado o sistema Pathfinder.`)

console.log(livroPath)