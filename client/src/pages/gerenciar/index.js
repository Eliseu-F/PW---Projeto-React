/*
========== Centro Universitário SENAC ============== 
 
Anáslie e Desenvolvimento de sistemas
 
Programação Web
 
Alunos - Kayke, Alexandro, Eliseu, Arthur
 
2ºB - sala F279

REACT - Produção coletiva
==================================================== 
*/
import TabelaBrinquedos from "../../components/TabelaBrinquedos";
import MenuBusca from "../../components/MenuBusca";
import { useEffect, useState } from "react";

function Gerenciar() {

  const [dadosBackend, setDadosBackend] = useState({});

  useEffect(() => {
    fetch('/gerenciar')
      .then(response => response.json())
      .then(dados => { setDadosBackend(dados) })
  }, [])

  const brinquedos = dadosBackend

  return (
    <>
  
      <MenuBusca />
      <TabelaBrinquedos props={brinquedos} />
    </>
  );
}

export default Gerenciar;