import CardColaborador from "../CardColaborador";
import hexToRgba from 'hex-to-rgba'
import "./Time.css";

const Time = ({
	cor,
	id,
	nome,
	colaboradores,
	aoDeletar,
	mudarCor,
	aoFavoritar,
}) => {


	return (
		<section className="time" style={{ backgroundColor: hexToRgba(cor, ' 0.65'), backgroundImage: 'url(./imagens/fundo.png)'}}>
			<input value={cor} onChange={evento => mudarCor(id, evento.target.value)} type="color" className="input-cor"/>
			<h3 style={{ borderBottomColor: cor }}>{nome}</h3>
			<div className="colaboradores">
				{colaboradores.map((colaborador, index) => {
					if (colaborador.time === nome)
						return (
							<CardColaborador
								key={index}
								id={colaborador.id}
								colaborador={colaborador}
								cor={cor}
								aoDeletar={aoDeletar}
								aoFavoritar={aoFavoritar}
							/>
						);
					else return "";
				})}
			</div>
		</section>
	);
};

export default Time;
