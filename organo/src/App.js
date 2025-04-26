import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Fomulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4} from 'uuid';

function App() {
	const [colaboradores, setColaboradores] = useState([]);

	const aoNovoColaboradorAdicionado = (colaborador) => {
		setColaboradores([...colaboradores, colaborador]);
	};

	const aoNovoTimeAdicionado = (time) => {
		setTimes([...times, time])
	}
	const [times, setTimes] = useState([
		{ 	id: uuidv4(),
			favorito: false,
			nome: "Back-End",
			cor: "#D9F7E9" 
		},
		{ 	id: uuidv4(),
			favorito: false,
			nome: "Front-End",
			cor: "#E8F8FF" 
		},
		{ 	id: uuidv4(),
			favorito: false,
			nome: "Data Science",
			cor: "#F0F8E2" 
		},
		{ 	id: uuidv4(),
			favorito: false,
			nome: "DevOps",
			cor: "#FDE7E8" 
		},
		{ 	id: uuidv4(),
			favorito: false,
			nome: "UX e Design",
			cor: "#FAE9F5" 
		},
		{ 	id: uuidv4(),
			favorito: false,
			nome: "Mobile",
			cor: "#FFF5D9" 
		},
		{
			id: uuidv4(),
			favorito: false,
			nome: "Inovação e Gestão",
			cor: "#FFEEDF",
		},
	]);

	let timesComColaboradores = new Set(
		colaboradores.map((colaborador) => {
			return colaborador.time;
		})
	);

	function aoDeletar(id) {
		setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id)
	)
	}
	
	function mudarCorDoTime(id, cor) {
		setTimes(
			times.map((time) => {
				if (time.id === id) {
					time.cor = cor;
				}
				return time;
			})
		);
	}

	function resolverFavorito(id){
		setColaboradores(colaboradores.map(colaborador => {
			if(colaborador.id === id){
				colaborador.favorito  = !colaborador.favorito
				return colaborador
			}
		}))
	}

	
	return (
		<div className="app">
			<Banner />
			<Formulario
				times={times}
				aoColaboradorCadastrado={(colaborador) =>
					aoNovoColaboradorAdicionado(colaborador)
				}
				aoTimeCadastrado={(time) => aoNovoTimeAdicionado(time)}
			/>
			<div className="titulo">
				<h2>Minha Organização:</h2>
				<hr></hr>
			</div>
			{times.map((time) => {
				if (colaboradores.length > 0 && timesComColaboradores.has(time.nome)) {
					return (
						<Time
							key={time.nome}
							id={time.id}
							nome={time.nome}
							cor={time.cor}
							colaboradores={colaboradores}
							aoDeletar={aoDeletar}
							mudarCor={mudarCorDoTime}
							aoFavoritar={resolverFavorito}></Time>
					);
				} else return "";
			})}
			<Rodape />
		</div>
	);
}

export default App;
