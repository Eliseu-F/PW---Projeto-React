import { Link } from "react-router-dom";


function TabelaBrinquedos({ props }) {

    const deletar = (id) => {
        fetch(`/gerenciar/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    window.alert("Produto deletado com sucesso")
                } else {
                    window.alert("Falha ao deletar")
                }
            })
    }

    const linhasTabela = []

    Object.entries(props).forEach(([chave, valor]) => {

        const { id, descricao, marca, preco } = valor;

        const linha = (
            <tr>
                <td>{id}</td>
                <td>{descricao}</td>
                <td>{marca}</td>
                <td>{preco}</td>
                <td>
                    <button id={id}>
                        <Link to={`/produto/${id}`}>Editar</Link>
                    </button>
                    <button id={id} onClick={() => deletar(id)}>Deletar</button>
                </td>
            </tr>
        );

        linhasTabela.push(linha);
    });

    return (
        <div>
            <h2>Gerenciar Brinquendos em Estoque:</h2>
            <table style={{ borderCollapse: 'collapse', width: '60%' }}>
                <thead>
                    <tr style={{ border: '1px solid black', padding: '8px' }}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            ID
                        </td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            Descrição
                        </td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            Fabricante
                        </td >
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            Valor
                        </td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>
                            Gerenciar
                        </td>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {linhasTabela}
                </tbody>
            </table>
            <button><Link to={'/produto'}>Adicionar</Link></button>
        </div>
    )
}

export default TabelaBrinquedos;