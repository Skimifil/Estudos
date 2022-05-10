const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

function manejaErros(erro){
    throw new Error(erro.message)
}

async function checaStatus(arrayUrls){
    try{
        const arrayDeStatus = await Promise
        .all(arrayUrls
            .map(async url => {
                const res = await fetch(url)
                return res.status
        }))
        return arrayDeStatus
    } catch(erro) {
        manejaErros(erro)
    }
}

function geraArrayDeUrls(arrayLinks){
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

async function validaUrls(arrayDeLinks){
    const links = geraArrayDeUrls(arrayDeLinks)
    const statusLinks = await checaStatus(links)
    
    const resultados = arrayDeLinks.map((objeto, indice) => ({ 
        ...objeto, 
        status: statusLinks[indice]}) )
        return resultados
}

module.exports = validaUrls