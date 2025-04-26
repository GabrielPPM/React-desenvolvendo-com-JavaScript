import "./CardColaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const CardColaborador = ({ cor, colaborador, aoDeletar, id, aoFavoritar }) => {

	const propsFavorito = {
		size: 25,
		onClick: favoritar
	}

	function favoritar(){
		aoFavoritar(colaborador.id)
	}

	return (
		<section className="card" style={{ borderTopColor: cor }}>
			<div className="deletar" onClick={() => 
				{
					aoDeletar(id)
				}
				}>
				<IoIosCloseCircle size={30} className="deletar-icon"/>
			</div>
			<img src={colaborador.imagem} alt={colaborador.nome}></img>
			<div>
				<p className="card-nome">{colaborador.nome}</p>
				<p className="card-descricao">
					Desenvolvedor de software e {colaborador.cargo}
				</p> 
				<div className="favoritar">{colaborador.favorito ? <FaHeart {...propsFavorito} color="#ff0000" /> : <FaRegHeart  {...propsFavorito} />}</div>
			</div>
		</section>
	);
};

export default CardColaborador;
