function MenuBusca(){

    const buscarBrinquedo = () => {
        const procurar = document.getElementById("inputBusca").value;
        alert("Procurando "+ procurar + " no estoque...");
    }

    return(
        <div>
            <h1>ToyStore</h1>
            <header>
            <p>Brinquedos para todas as idades: Encontre diversão na ToyStore!</p>
            <div class="input-group mb-3">
            <input class="input-group-text" type="text" id="inputBusca" placeholder="Encotre o brinquedo perfeito :D" style={{width: '400px'}}/>
            <button type="button" class="btn btn-primary" onClick={buscarBrinquedo}>Buscar</button>
            </div>
            </header>
        </div>

        
    )
}

export default MenuBusca;