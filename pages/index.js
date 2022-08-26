import { useState } from "react";
import Pessoa from "../components/pessoa";

export default function Home() {
  const [idadeMinerva, setIdadeMinerva] = useState(8);

  const incrementaIdadeMinerva = () => {
    setIdadeMinerva(idadeMinerva++);
  }

  return (
    <>
      <h1>Olá Mundo!</h1>
      <Pessoa nome='Minerva' idade={idadeMinerva} />
      <Pessoa nome='Pallas' idade={3} />
      <button onClick={incrementaIdadeMinerva}>Incrementa idade da Minerva</button>
    </>
  )
}
