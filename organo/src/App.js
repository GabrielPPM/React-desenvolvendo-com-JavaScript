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
	const [times, setTimes] = useState([
		{ 	id: uuidv4(),
			nome: "Back-End", cor: "#D9F7E9" },
		{ 	id: uuidv4(),
			nome: "Front-End", cor: "#E8F8FF" },
		{ 	id: uuidv4(),
			nome: "Data Science", cor: "#F0F8E2" },
		{ 	id: uuidv4(),
			nome: "DevOps", cor: "#FDE7E8" },
			{ 	id: uuidv4(),
				nome: "UX e Design", cor: "#FAE9F5" },
				{ 	id: uuidv4(),
					nome: "Mobile", cor: "#FFF5D9" },
					{
						id: uuidv4(),
			nome: "Inovação e Gestão",
			cor: "#FFEEDF",
		},
	]);

	let timesComColaboradores = new Set(
		colaboradores.map((colaborador) => {
			return colaborador.time;
		})
	);
	
	function mudarCorDoTime(nome, cor) {
		setTimes(
			times.map((time) => {
				if (time.nome === nome) {
					time.cor = cor;
				}
				return time;
			})
		);
	}
	
	console.log(colaboradores)
	return (
		<div className="app">
			<Banner />
			<Formulario
				times={times}
				texto="Preencha os dados para criar o card do colaborador"
				aoColaboradorCadastrado={(colaborador) =>
					aoNovoColaboradorAdicionado(colaborador)
				}
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
							nome={time.nome}
							cor={time.cor}
							colaboradores={colaboradores}
							mudarCor={mudarCorDoTime}></Time>
					);
				} else return "";
			})}
			<Rodape />
		</div>
	);
}

export default App;
