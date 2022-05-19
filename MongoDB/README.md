# MongoDB

## Por que aprender?

A ideia agora é me profissionalizar em programação, irei utilizar o MongoDB como uma extensão do aprendizado. Quero ter conhecimentos desse SGDB para utilizar ele no meu aprendizado de programação e usar o Mongo para possíveis projetos.

## O que espero aprender?

Espero ter conhecimento em como funciona o MongoDB para ter capacidade de utilizar em meus projetos de forma profissional.

# MongoDB

MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.

O MongoDB armazenas os dados como "documentos", mais especificamente como [BSON documents](https://www.mongodb.com/docs/manual/core/document/#std-label-bson-document-format) e esses documentos ficam em "*Collections*". Uma base de dados MongoDB pode ter um ou mais *collections* ou documentos.

---
#### Criando uma base
Em MongoDB, a base de dados é criado quando vocês faz a primeira inserção de dados nela, logo você pode:
```sql
    use myDB
    db.createCollection("alunos")
```
Com isso sua base é criada e a primeira *collection* é aplicada na base.

#### *Collections*
*Collections* são como tabelas e um MySQL, são onde armazenamos os documentos do nosso banco.

#### *Documents*
Documentos são os dados que precisamos armazenar na base, mas ele possui uma estrutura em BSON que é estrutura parecida com JSON(*field*: *value*), mas possui mais tipos de dados.
```json
    {
        nome: "Rafa",
        idade: 29,
        grupos: ["GostaDeRPG", "JogaNoComputador"]
    }
```

### Alguns comando
Criação de uma *collection*.
```sql
    db.createCollection("alunos")
```

Incluir dados.
```sql
    db.alunos.insert({
    "nome": "Rafael",
    "data_nascimento": new Date(1993,03,29),
    "curso": {
        "nome": "MongoDB: uma alternativa aos bancos relacionais tradicionais"
        },
    "notas": [10.0, 9.0, 4.5],
    "habilidades": [
        {
            "nome": "JavaScript",
            "nivel": "básico"
        },
        {
            "nome": "MongoDB",
            "nivel": "Noob"
        }
        ]
    })
```

Para encontrar um dado.
```sql
    db.alunos.find()
    db.alunos.find().pretty()
    db.alunos.find({nome: "Rafael"})
    db.alunos.find({nome: "Rafael"}).pretty()
    db.alunos.find({"habilidades.nome": "inglês"}).pretty()
    db.alunos.find({"nome": "Rafael","habilidades.nome": "inglês"}).pretty()
```

Para remover.
```sql
    db.alunos.remove({
        "_id": ObjectId("627fa6c6246e5aa720c5b34b")
    })
```

*OR*, *AND* e *IN*.
- *OR*
```sql
    db.alunos.find({$or: [{"curso.nome": "Sistemas de informação"},{"curso.nome": "Engenharia Química"}]})
```

- *AND*
```sql
    db.alunos.find({$or: [{"curso.nome": "Sistemas de informação"},{"curso.nome": "Engenharia Química"}],"nome": "Daniela"})
```

- *IN*
```sql
    db.alunos.find({"curso.nome": $in: ["Sistemas de informação", "Engenharia Química"]})
```

Atualizando um documento.

Atualiza o documento por inteiro.
```sql
    db.alunos.update({"curso.nome": "Sistema de informação"},{"curso.nome": "Sistemas de informação"})
```

Atualiza só o campo necessário.
```sql
    db.alunos.update({"curso.nome": "Sistema de informação"},{$set: {"curso.nome": "Sistemas de informação"}})
```

Atualiza só o campo necessário em múltiplas linhas.
```sql
    db.alunos.update({"curso.nome": "Sistema de informação"},{$set: {"curso.nome": "Sistemas de Informação"}},{multi: true})
```

Adicionando um valor ao array de um objeto.
```bash
    db.alunos.update({"_id": ObjectId("627fa6c6246e5aa720c5b34b")},{$push:{notas: 8.5}})
```

Adicionando mais de um valor ao array de um objeto.
```bash
    db.alunos.update({"_id": ObjectId("627fa6c6246e5aa720c5b34b")},{$push:{notas: {$each: [8.5, 3]}}})
```

Maior que.
```sql
    db.alunos.find({notas: {$gt: 5}})
    db.alunos.findOne({notas: {$gt: 5}})
```

Ordenação.
```sql
    db.alunos.find().sort({"nome": 1})
    db.alunos.find().sort({"nome": 1}).limit(3)
```

Posicionamento
```sql
    db.alunos.update({"_id": ObjectId("627fa6c6246e5aa720c5b34b")},{$set:{localizacao:{endereco: "Rua Vergeiro, 3185", coordinates: [-23.588213, -46.632356], type: "Point"}}})
    
    db.alunos.createIndex({localizacao: "2dsphere"})
    db.alunos.aggregate([{$geoNear:{near: {coordinates: [-23.588213, -46.632356],type: "Point"},distanceField: "distancia.calculada",spherical: true, num: 4}},{$skip: 1}])
```

Importar JSON
```bash
    mongoimport -c alunos --jasonArray < alunos.json
```


## Agradecimentos/Referências

[Documentação do MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/)
MongoDB: uma alternativa aos bancos relacionais tradicionais

### Alura
##### Instrutores 
#### "MongoDB: uma alternativa aos bancos relacionais tradicionais"
Felipe Oliveira