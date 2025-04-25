import './Input.css'

const Input = (props) => {


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div>
            <label>{props.label}</label>
            <input value={props.valor} required={props.obrigatorio} placeholder={props.placeholder} onChange={aoDigitado}/>
        </div>
    )
}

export default Input;