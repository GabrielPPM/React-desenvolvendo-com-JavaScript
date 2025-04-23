import './CardColaborador.css'

const CardColaborador = (props) => {

    return(
        <section className="card" style={{borderTopColor: props.cor}}>
            <img  src={props.colaborador.imagem} alt={props.colaborador.nome}></img>
            <div>
                <p className='card-nome'>{props.colaborador.nome}</p>
                <p className='card-descricao'>Desenvolvedor de software e {props.colaborador.cargo}</p>
            </div>
        </section>
    )
}

export default CardColaborador;