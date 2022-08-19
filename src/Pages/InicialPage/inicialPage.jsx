import '../../Style/reset.css'
import '../../Style/style.css'
import './inicialPage.css'

export function InicialPage() {
    return (
        <div className='inicialPage'>
        <div className='background'>
            <img className='logoImage' src={require('../../Assets/Logo/logoBranca.png')}/>
            <div className='textBlock'>
            <h1>Olá!</h1>
            <p className='darkText salutation'>Nós do Salão Leandro e Alessandro estamos prontos para atendê-lo</p>
            </div>
            <a href="/select-professional">
                <div className='button inicialButton'><h1>Agendar</h1></div>
            </a>
        </div>

        </div>
    )
}