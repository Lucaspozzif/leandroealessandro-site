import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../Content/Firebase/firebase';
import { ReadProfessional } from '../../Content/Firebase/firestoreDataReader';
import {Link} from 'react-router-dom'

import '../../Style/reset.css'
import '../../Style/style.css'
import './confirmPage.css'

const { time } = require('../../data/hourCount/hourcount.json')

export function ConfirmPage() {
    var navigate = useNavigate()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const numberValue = (e) => {
        setNumber(e.target.value)
    }
    const nameValue = (e) => {
        setName(e.target.value)
    }

    var data = ReadProfessional()
    const { profIndex } = useParams();
    const { servIndex } = useParams();
    const { dayIndex } = useParams();
    const { timeIndex } = useParams();
    if (data.length == 0) return

    const prof = data[profIndex];
    for (let i = timeIndex; i < parseInt(prof['services'][servIndex]['time'])+parseInt(timeIndex); i++) {
        prof['schedule'][dayIndex][i]['service'] = prof['services'][servIndex]['name']
        prof['schedule'][dayIndex][i]['name'] = name
        prof['schedule'][dayIndex][i]['number'] = number
        prof['schedule'][dayIndex][i]['taken'] = true
    
    }
    const addSchedule = async () => {
        if (name == '' || number == '') {
            alert('digite seu nome e número por favor')
            return
        }
        const profRef = doc(db, 'professionals', data[profIndex]['id'])
        const update = {
            name: prof['name'],
            services: prof['services'],
            occupation: prof['occupation'],
            schedule: prof['schedule']
        }
        await setDoc(profRef, update)
        navigate('/')
    }
    return (
        <div className='body'>
            <div className='backgroundColor'>
                <div className='center'>
                    <h1 className='pageTitle'>Você está quase acabando</h1>
                    <div className='button scheduleButton'>
                        <div>
                            <h1>{prof['services'][servIndex]['name']}, de {time[timeIndex]} as {time[parseInt(prof['services'][servIndex]['time'])+parseInt(timeIndex)]}</h1>
                            <p>Com {prof['name']}</p>
                        </div>
                    </div>

                    <div className='spaceBox'></div>

                    <p className='inputLabel'>Digite seu nome</p>
                    <input onChange={nameValue}></input>

                    <div className='spaceBox'></div>

                    <p className='inputLabel'>Digite seu número</p>
                    <input type={number} onChange={numberValue}></input>

                </div>

                <div className='spaceBox'></div>
                <div className='spaceBox'></div>
                <div className='button changeButton'>
                    <h1>Alterar Horário</h1>
                    <p>Dia {dayIndex.split('.').join('/')} - {time[timeIndex]}</p>
                </div>
                <div className='spaceBox'></div>

                <div>
                    <div className='button changeButton'>
                        <h1>Alterar Profissional</h1>
                        <p>{prof['name']}</p>
                    </div>
                </div>
                <div className='bottomGroup'>
                    <Link to='/'>
                        <div className='button bottomButton left'>
                            <h1>
                                Cancelar
                            </h1>
                        </div>
                    </Link>

                    <div onClick={(e) => { addSchedule() }}>
                        <div className='button bottomButton right'>
                            <h1>
                            Concluir
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}