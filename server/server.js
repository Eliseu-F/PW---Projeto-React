const express = require('express');
const routes = require('./routes');
const server = express();

server.use(express.json());
server.use(routes);

server.get('/', (req, res) => {
    res.send('Hello world');
})

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})


let idControl = 5;

//BANCO DE DADOS
const brinquedoDB = {
    "produtos": [
        { "id": 1, "descricao": "Bola Oficial Nike", "marca": "Nike", "preco": "R$600" },
        { "id": 2, "descricao": "Patinete", "marca": "Caloi", "preco": "R$250" },
        { "id": 3, "descricao": "Bicicleta", "marca": "Caloi", "preco": "R$980" },
        { "id": 4, "descricao": "Skate", "marca": "Mormai", "preco": "R$350" },
        { "id": 5, "descricao": "Boneco Homem Aranha", "marca": "Hihappy", "preco": "R$150" }
    ]
}

server.get('/gerenciar', (req, res) => {
    res.json(brinquedoDB.produtos)
})

server.get('/produto/:id', (req, res) => {
    const idProduto = req.params.id;
    const produto = brinquedoDB.produtos.find(item => item.id == idProduto)
    res.json(produto)
})

server.post('/produto', (req, res) => {
    idControl++;
    const produto = req.body;
    produto.id = idControl;
    brinquedoDB.produtos.push(produto);
    res.send(res.ok);
})

server.put('/produto/:id', (req, res) => {
    const idProduto = req.params.id;
    const produtoEditado = req.body;

    const produtoExistente = brinquedoDB.produtos.find(produto => produto.id == idProduto)

    if (produtoExistente) {
        produtoExistente.descricao = produtoEditado.descricao;
        produtoExistente.marca = produtoEditado.marca;
        produtoExistente.preco = produtoEditado.preco;
        res.send(res.ok)
    }
})

server.delete('/gerenciar/:id', (req, res) => {
    const idDeletar = req.params.id

    const index = brinquedoDB.produtos.findIndex(produto => produto.id == idDeletar);

    if (index !== -1) {
        brinquedoDB.produtos.splice(index, 1);
        res.send(res.ok)
    } else {
        console.log("falha ao deletar")
    }
})

