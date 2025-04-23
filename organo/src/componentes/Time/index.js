import CardColaborador from "../CardColaborador";
import "./Time.css";

const Time = (props) => {
	return (
		<section className="time" style={{ backgroundColor: props.corSecundaria }}>
			<h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>
			<div className="colaboradores">
				{props.colaboradores.map((colaborador) => {
					if (colaborador.time === props.nome)
						return (
							<CardColaborador
								colaborador={colaborador}
								cor={props.corPrimaria}></CardColaborador>
						);
					else return "";
				})}
			</div>
		</section>
	);
};

export default Time;
