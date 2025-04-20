import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={valor => props.aoAlterado(valor.target.value)} required={props.obrigatorio}>
                <option value='' selected disabled>Selecione um time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa