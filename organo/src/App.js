import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Fomulario';
import Time from './componentes/Time';


function App() {
  const [colaboradores, setColaboradores] = useState([]) 
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }
  const times = [
    'Back-End',
    'Front-End',
    'Data Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]

  

  return (
    <div>
      <Banner />
      <Formulario times={times} texto='Preencha os dados para criar o card do colaborador' aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        {times.map((time) => <Time nome={time}></Time>)}
    </div>
  );
}

export default App;
