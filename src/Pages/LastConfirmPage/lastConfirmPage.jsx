import { useParams } from 'react-router-dom';
import { ReadProfessional } from '../../Content/Firebase/firestoreDataReader';
import { Link } from 'react-router-dom'

import '../../Style/selectPages.css'
import './lastConfirmPage.css'

const { time } = require('../../Data/hourCount/hourcount.json')

export function LastConfirmPage() {
    var data = ReadProfessional()
    const { profIndex } = useParams();
    const { servIndex } = useParams();
    const { dayIndex } = useParams();
    const { timeIndex } = useParams();

    if (data.length == 0) return

    const prof = data[profIndex];
    return (
        <div className='body centerDiv'>
            <div className='imgDiv'>
                <img className='endLogo' src={require('../../Assets/Logo/logoBranca.png')} />
            </div>
            <h1>Agendado para o dia {dayIndex.split('$')[0]}</h1>

            <div className='button scheduleButton'>
                <div>
                    <h1>{prof['services'][servIndex]['name']}, de {time[timeIndex]} as {time[parseInt(prof['services'][servIndex]['time']) + parseInt(timeIndex)]}</h1>
                    <p>Com {prof['name']}</p>
                </div>
            </div>
            <div></div>
            <p className='infoText'>
                Cajo haja algum imprevisto, favor entrar em contato com o whatsapp do salão.
            </p>
            <div className='button okButton'>
                <Link to='/'>
                    <h1>OK!</h1>
                </Link>
            </div>
            <a href='https://api.whatsapp.com/send?phone=5522997801980&text=Olá!%20Por%20favor,%20gostaria%20de%20saber%20sobre%20serviços%20e%20valores%20para%20um%20possível%20agendamento'>
                <div className='whatsappButton'>
                    <img className='whatsappLogo' src={require('../../Assets/Icons/whatsapp.png')}></img>
                </div>
            </a>

        </div>

    )
}