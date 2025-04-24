import "./CardColaborador.css";
import { IoIosCloseCircle } from "react-icons/io";

const CardColaborador = ({ cor, colaborador, aoDeletar, id }) => {
	console.log("KEY: ", id);
	return (
		<section className="card" style={{ borderTopColor: cor }}>
			<div className="deletar" onClick={aoDeletar}>
				<IoIosCloseCircle size={30} className="deletar-icon"/>
			</div>
			<img src={colaborador.imagem} alt={colaborador.nome}></img>
			<div>
				<p className="card-nome">{colaborador.nome}</p>
				<p className="card-descricao">
					Desenvolvedor de software e {colaborador.cargo}
				</p>
			</div>
		</section>
	);
};

export default CardColaborador;
