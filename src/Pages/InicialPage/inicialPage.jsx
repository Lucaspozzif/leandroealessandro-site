import '../../Style/reset.css';
import '../../Style/style.css';
import './inicialPage.css';

import { Link } from 'react-router-dom';

export function InicialPage() {
    return (
        <div className='inicialPage'>
            <div className='background'>
                <img className='logoImage' src={require('../../Assets/Logo/logoBranca.png')} />
                <div className='textBlock'>
                    <h1>Olá!</h1>
                    <p className='darkText salutation'>Nós do Salão Leandro e Alessandro estamos prontos para atendê-lo</p>
                </div>
                <Link to="/select-professional">
                    <div className='button inicialButton'><h1>Agendar</h1></div>
                </Link>
            </div>
            <div className='whatsappDiv'>
                <a href='https://api.whatsapp.com/send?phone=5522997801980&text=Olá!%20Por%20favor,%20gostaria%20de%20saber%20sobre%20serviços%20e%20valores%20para%20um%20possível%20agendamento'>
                    <img className='whatsappLogo logoInicial' src={require('../../Assets/Icons/whatsapp-inicial.png')}></img>
                </a>
            </div>

        </div>
    )
}