import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {
    const times = props.times.map((time) => time.nome)
    
    const [nome, setNome] = useState('Gabriel Machado');
    const [cargo, setCargo] = useState('CEO AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    const [imagem, setImagem] = useState('./imagens/foto.png');
    const [time, setTime] = useState('');
    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({nome: nome, cargo: cargo, imagem: imagem, time: time});
    }
    
    return(
        <section>
            <form className='formulario' onSubmit={aoSalvar}>
                <h1>{props.texto}</h1>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' valor={nome} aoAlterado={valor => setNome(valor)}></CampoTexto>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu cargo' valor={cargo} aoAlterado={valor => setCargo(valor)}></CampoTexto>
                <CampoTexto label='Imagem' placeholder='Insira a URL da imagem' valor={imagem} aoAlterado={valor => setImagem(valor)}></CampoTexto>
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} itens={times} label='Time'/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
      
}
    
export default Formulario