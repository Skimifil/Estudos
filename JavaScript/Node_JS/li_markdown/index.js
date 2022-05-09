const chalk = require('chalk')
const fs = require('fs')

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arraResultados = []
    let temp
    while((temp = regex.exec(texto)) !== null) {
        arraResultados.push({[temp[1]]: temp[2]})
    }
    return arraResultados.length === 0 ? `Não há links` : arraResultados
}

function trataErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = `utf-8`
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch(erro) {
        trataErro(erro)
    }
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = `utf-8`
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => chalk.green(console.log(texto)))
//     .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = `utf-8`
//     fs.readFile(caminhoDoArquivo, encoding, (erro, text0) => {
//         if(erro){
//             trataErro(erro)
//         }
//         console.log(chalk.green(text0))
//     })
// }

//pegaArquivo('./arquivos/texto1.md')

module.exports = pegaArquivo