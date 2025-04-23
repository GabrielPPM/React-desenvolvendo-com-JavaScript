import './Rodape.css'

const Rodape = () =>{
    return(
        <footer className='footer'>
            <div className='icon-container'>
                <a href='https://www.facebook.com/profile.php?id=100004160359167' target='blank_'>
                <img className='icon' src='/imagens/facebook.png' alt='icone do facebook'></img>
                </a>
                <a href='https://x.com/Gabriel06912447' target='blank_'>
                <img className='icon' src='/imagens/tw.png' alt='icone do twitter' ></img>
                </a>
                <a href='https://www.instagram.com/gabriel_ppm/' target='blank_'>
                <img className='icon' src='/imagens/ig.png' alt='icone do instagram'></img>
                </a>
            </div>
            <img src='/imagens/logo.png' alt='logo do Organo'></img>
            <p>Desenvolvido por Gabriel Machado.</p>
        </footer>
    )
}

export default Rodape