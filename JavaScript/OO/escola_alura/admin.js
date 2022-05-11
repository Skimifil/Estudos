import User from "./user.js"

export default class Admin extends User {
    constructor(nome, email, nascimento, role = `admin`, ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}