function MenuBusca() {

    const buscarBrinquedo = () => {
        const procurar = document.getElementById("inputBusca").value;
        alert("Procurando " + procurar + " no estoque...");
    }

    return (
        <header className="header">
            <div className="produto-form-wrap">
                <h1>TOY STORE</h1>
                <header>
                    <p>Brinquedos para todas as idades: Encontre diversão na ToyStore!</p>
                    <div class="input-group mb-3">
                        <input class="input-group-text" type="text" id="inputBusca" placeholder="Encotre o brinquedo perfeito :D" style={{ width: '800px' }} />
                        <button type="button" class="btn btn-primary" onClick={buscarBrinquedo}>Buscar</button>
                    </div>
                </header>
            </div>
        </header>

    )
}

export default MenuBusca;