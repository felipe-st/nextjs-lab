import { useState } from "react";
import Pessoa from "../components/pessoa";
import comAutorizacao from "../hoc/comAutorizacao";

function Home() {
  const [idadeMinerva, setIdadeMinerva] = useState(17);
  const pessoas = [
    {
      nomePessoa: 'Cleiton',
      idadePessoa: 28
    },
    {
      nomePessoa: 'Glau',
      idadePessoa: 25
    },
    {
      nomePessoa: 'Paulo',
      idadePessoa: 30
    }
  ];

  const incrementaIdadeMinerva = () => {
    setIdadeMinerva(idadeMinerva++);
  }

  return (
    <>
      <h1>Olá Mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome='Minerva' idade={idadeMinerva} />
      <Pessoa nome='Pallas' idade={3} />

      {pessoas.map(({ nomePessoa, idadePessoa }, index) => {
        return <Pessoa
          nome={nomePessoa}
          idade={idadePessoa}
          key={index}
          />
      })}

      <button onClick={incrementaIdadeMinerva}>Incrementa idade da Minerva</button>
    </>
  )
}

export default comAutorizacao(Home);
