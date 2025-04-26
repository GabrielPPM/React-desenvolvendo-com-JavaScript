import { useState } from "react"
import Botao from "../Botao"
import Input from "../Input"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import { v4 as uuidv4} from 'uuid';

const Formulario = (props) => {
    const times = props.times.map((time) => time.nome)
    
    const [nomeColaborador, setNomeColaborador] = useState('Gabriel Machado');
    const [cargo, setCargo] = useState('G1');
    const [imagem, setImagem] = useState('./imagens/foto.png');
    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('')


    const aoSalvarColaborador = (evento) =>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({id: uuidv4(), nome: nomeColaborador, cargo: cargo, imagem: imagem, time: time});
        limpaFormulario();
    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault();
        props.aoTimeCadastrado({id: uuidv4(), nome: nomeTime, cor: corTime})
    }

    const limpaFormulario = () =>{
        setNomeColaborador('');
        setCargo('');
        setImagem('');
        setTime('');
        setNomeTime('');
        setCorTime('');
    }

    
    return(
        <section className="formulario-container">
            <div className='formulario'>
                <form  onSubmit={aoSalvarColaborador}>
                    <h1>Preencha o formulário para adicionar um novo colaborador</h1>
                    <Input obrigatorio={true} label='Nome' placeholder='Digite seu nome' valor={nomeColaborador} aoAlterado={valor => setNomeColaborador(valor)}></Input>
                    <Input obrigatorio={true} label='Cargo' placeholder='Digite seu cargo' valor={cargo} aoAlterado={valor => setCargo(valor)}></Input>
                    <Input label='Imagem' placeholder='Insira a URL da imagem' valor={imagem} aoAlterado={valor => setImagem(valor)}></Input>
                    <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} itens={times} label='Time'/>
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
                <form onSubmit={aoSalvarTime}>
                    <h1>Preencha os dados para criar um novo time</h1>
                    <Input obrigatorio={true} label='Nome do time' placeholder='Digite o nome time' valor={nomeTime} aoAlterado={valor => setNomeTime(valor)}></Input>
                    <Input type='color' obrigatorio={true} label='Cor do time' placeholder='Ex.: #FFF5D9' valor={corTime} aoAlterado={valor => setCorTime(valor)}></Input>
                    <Botao>
                        Criar Card
                    </Botao>
                </form>
            </div>
        </section>
    )
      
}
    
export default Formulario