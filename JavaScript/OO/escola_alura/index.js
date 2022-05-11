import User from "./user.js"
import Admin from "./admin.js"
import Docente from "./docente.js"

const novoUser = new User(`Rafael`, `r@f.com`, `2021-01-01`)
console.log(novoUser.exibirInfos())