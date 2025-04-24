import CardColaborador from "../CardColaborador";
import hexToRgba from 'hex-to-rgba'
import "./Time.css";

const Time = ({
	cor,
	nome,
	colaboradores,
	aoDeletar,
	mudarCor,
}) => {
	function aoDeletar(id) {
		console.log("DELETANDO COLABORADOR!");
		console.log(colaboradores[id]);
	}

	console.log('SOCORRO! ', nome)

	return (
		<section className="time" style={{ backgroundColor: hexToRgba(cor, ' 0.7'), backgroundImage: 'url(./imagens/fundo.png)'}}>
			<input value={cor} onChange={evento => mudarCor(nome, evento.target.value)} type="color" className="input-cor"/>
			<h3 style={{ borderBottomColor: cor }}>{nome}</h3>
			<div className="colaboradores">
				{colaboradores.map((colaborador, index) => {
					if (colaborador.time === nome)
						return (
							<CardColaborador
								key={index}
								id={index}
								colaborador={colaborador}
								cor={cor}
								aoDeletar={aoDeletar}
							/>
						);
					else return "";
				})}
			</div>
		</section>
	);
};

export default Time;
