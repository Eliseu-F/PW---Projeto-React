import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Produto() {

    const { id } = useParams()

    const [dadosBackend, setDadosBackend] = useState({})

    const marca = dadosBackend.marca;


    //GET
    useEffect(() => {
        fetch(`/produto/${id}`)
            .then(response => response.json())
            .then(dados => { setDadosBackend(dados) })

    }, [])


    //POST
    const salvar = () => {

        if (dadosBackend.id == null) {
            const produto = {
                "id": null,
                "descricao": dadosBackend.descricao,
                "marca": dadosBackend.marca,
                "preco": dadosBackend.preco
            }

            fetch('/produto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            })
                .then(response => {
                    if (response.ok) {
                        window.alert("Produto cadastrado com sucesso")
                    } else {
                        window.alert("Falha ao cadastrar produto")
                    }
                })
        } else {
            const produto = {
                "descricao": dadosBackend.descricao,
                "marca": dadosBackend.marca,
                "preco": dadosBackend.preco
            }
            fetch(`/produto/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            })
                .then(response => {
                    if (response.ok) {
                        window.alert("Produto editado com sucesso")
                    } else {
                        window.alert("Falha ao editar produto")
                    }
                })
        }
    }

    return (

        <header className="header">
      <div className="produto-form-wrap">
        <div>
          <h2>
            <h1>Produto</h1>
            <p>Id do produto: {id}</p>
            <p>Descrição: </p>
            <input
              type="text"
              className="form-input"
              value={dadosBackend.descricao || ''}
              onChange={(e) =>
                setDadosBackend({ ...dadosBackend, descricao: e.target.value })
              }
            />
            <p>Marca: </p>
            <input
              type="text"
              className="form-input"
              value={dadosBackend.marca || ''}
              onChange={(e) =>
                setDadosBackend({ ...dadosBackend, marca: e.target.value })
              }
            />
            <p>Valor: </p>
            <input
              type="text"
              className="form-input"
              value={dadosBackend.preco || ''}
              onChange={(e) =>
                setDadosBackend({ ...dadosBackend, preco: e.target.value })
              }
            />
          </h2>
        </div>

        <div>
          <button type="button" className="btn btn-primary" onClick={salvar}>
            Salvar
          </button>
          <button type="button" className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </header>
  );
}

export default Produto;