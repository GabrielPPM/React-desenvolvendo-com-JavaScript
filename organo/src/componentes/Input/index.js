import './Input.css'

const Input = ({type = 'text', obrigatorio ,valor, label, placeholder, aoAlterado}) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={'input-' + type}>
            <label>{label}</label>
            <input type={type} value={valor} required={obrigatorio} placeholder={placeholder} onChange={aoDigitado}/>
        </div>
    )
}

export default Input;