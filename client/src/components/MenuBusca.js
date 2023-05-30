function MenuBusca(){

    const buscarBrinquedo = () => {
        const procurar = document.getElementById("inputBusca").value;
        alert("Procurando "+ procurar + " no estoque...");
    }

    return(
        <div>
            <h1>ToyStore</h1>
            <p>Brinquedos para todas as idades: Encontre diversão na ToyStore!</p>
            <input type="text" id="inputBusca" placeholder="Encotre o brinquedo perfeito :D" style={{width: '400px'}}/>
            <button onClick={buscarBrinquedo}>Buscar</button>
        </div>

        
    )
}

export default MenuBusca;