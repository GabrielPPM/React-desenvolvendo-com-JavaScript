import './Rodape.css'

const Rodape = () =>{
    return(
        <footer className='footer'>
            <div className='icon-container'>
                <a href='https://github.com/GabrielPPM' target='blank_'>
                <img className='icon' src='/imagens/github.svg' alt='icone do facebook'></img>
                </a>
                <a href='https://www.linkedin.com/in/gabriel-plinio-porto-machado/' target='blank_'>
                <img className='icon' src='/imagens/linkedin.svg' alt='icone do instagram'></img>
                </a>
            </div>
            <img src='/imagens/logo.png' alt='logo do Organo'></img>
            <p>Desenvolvido por Gabriel Machado.</p>
        </footer>
    )
}

export default Rodape