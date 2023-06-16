import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Bem-vindo(a) à ToyStore</h1>
            <div className="image-container">  
              <center>  <img src={process.env.PUBLIC_URL + '/images/batman.jpg'} alt="Descrição da imagem 1" /></center>
            </div>
        </div>
    )
}

export default Home;