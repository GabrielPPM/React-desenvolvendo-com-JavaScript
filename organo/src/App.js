import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Fomulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
	const [colaboradores, setColaboradores] = useState([]);
	const aoNovoColaboradorAdicionado = (colaborador) => {
		setColaboradores([...colaboradores, colaborador]);
	};
	const times = [
		{ nome: "Back-End", corPrimaria: "#57c278", corSecundaria: "#D9F7E9" },
		{ nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
		{ nome: "Data Science", corPrimaria: "#a6d157", corSecundaria: "#F0F8E2" },
		{ nome: "DevOps", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
		{ nome: "UX e Design", corPrimaria: "#DB6EBF", corSecundaria: "#FAE9F5" },
		{ nome: "Mobile", corPrimaria: "#FFBAD5", corSecundaria: "#FFF5D9" },
		{
			nome: "Inovação e Gestão",
			corPrimaria: "#FF8A29",
			corSecundaria: "#FFEEDF",
		},
	];

	let timesComColaboradores = new Set(
		colaboradores.map((colaborador) => {
			return colaborador.time;
		})
	);

	return (
		<div>
			<Banner />
			<Formulario
				times={times}
				texto="Preencha os dados para criar o card do colaborador"
				aoColaboradorCadastrado={(colaborador) =>
					aoNovoColaboradorAdicionado(colaborador)
				}
			/>
			{times.map((time) => {
				if (colaboradores.length > 0 && timesComColaboradores.has(time.nome)) {
					return (
						<Time
							key={time.nome}
							nome={time.nome}
							corPrimaria={time.corPrimaria}
							corSecundaria={time.corSecundaria}
							colaboradores={colaboradores}></Time>
					);
				} else return "";
			})}
		<Rodape />
		</div>
	);
}

export default App;
