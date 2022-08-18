import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../Content/Firebase/firebase';
import { ReadProfessional } from '../../Content/Firebase/firestoreDataReader';

const { time } = require('../../data/hourCount/hourcount.json')

export function ConfirmPage() {
    var navigate = useNavigate()
    const [name, setName] = useState('')
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

    prof['schedule'][dayIndex][timeIndex]['service'] = prof['services'][servIndex]
    prof['schedule'][dayIndex][timeIndex]['name'] = name
    prof['schedule'][dayIndex][timeIndex]['taken'] = true

    const addSchedule = async () => {
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
        <>
            <p>Você está quase acabando</p>
            <div>
                <p>{prof['services'][servIndex]} - {time[timeIndex]}</p>
                <p>com {prof['name']}</p>
            </div>
            <p>Digite seu nome</p>
            <input onChange={nameValue}></input>
            <div>
                <p>Alterar Horário</p>
                <p>Dia {dayIndex.split('.').join('/')} - {time[timeIndex]}</p>
            </div>
            <div>
                <p>Alterar Profissional</p>
                <p>{prof['name']}</p>
            </div>
            <div>
                <a href='/'>Cancelar</a>
                <a
                    onClick={(e) => {
                        addSchedule()
                    }}
                    >
                    Concluir
                </a>
            </div>
        </>
    )

}