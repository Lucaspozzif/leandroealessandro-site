import { useNavigate, useParams } from 'react-router-dom';
import { DaySelectorIndividual } from '../../Content/daySelector/daySelector';
import { ReadProfessional } from '../../Content/Firebase/firestoreDataReader';
import { ItemListTimeSecret } from '../../Content/itemList/itemList';
import { checkGenerateDay } from '../../Content/scheduleManagement/schedule';

import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'
import './individualSchedule.css'
import { ReturnButton } from '../../Content/ReturnButton/returnButton';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Content/Firebase/firebase';



export function IndividualSchedule() {
    const navigate = useNavigate();
    var data = ReadProfessional()
    const { profIndex } = useParams();
    const { dayIndex } = useParams();
    if (data.length == 0) return
    checkGenerateDay(data, dayIndex, profIndex)

    function blockAllDay() {
        const prof = data[profIndex]
        const lockedDay = []
        for (let i = 0; i < 23; i++) {
            if(prof['schedule'][dayIndex][i]['name'] != '' && prof['schedule'][dayIndex][i]['name'] != 'bloqueado'){
                alert('Remova todos os agendamentos antes!')
                return
            }
            console.log(prof['schedule'][dayIndex][i]['name'])
            lockedDay.push(
                {
                    taken: true,
                    name: 'bloqueado',
                    number: 'bloqueado',
                    service: 'bloqueado',
                }
            )
        }
        prof['schedule'][dayIndex] = lockedDay
        const addSchedule = async () => {
            const profRef = doc(db, "professionals", data[profIndex]["id"]);
            const update = {
                name: prof["name"],
                services: prof["services"],
                occupation: prof["occupation"],
                schedule: prof["schedule"],
                photo: prof["photo"],
            };
            await setDoc(profRef, update);
            navigate(0);
        };
        addSchedule()

    }
    return (
        <div className='body'>
            <div className='backgroundColor'>
                <div className='headerDiv'>
                    <ReturnButton link={'/p'} />
                    <div className='button blockButton' onClick={() => {
                        blockAllDay()
                    }}>
                        <h2>Bloquear tudo</h2>
                    </div>

                </div>
                <DaySelectorIndividual
                    day={dayIndex}
                    profIndex={profIndex}
                />
                {data[profIndex]['schedule'][dayIndex].map((hour) => {
                    return (
                        <ItemListTimeSecret
                            key={data[profIndex]['schedule'][dayIndex].indexOf(hour)}
                            msg={hour}
                            index={data[profIndex]['schedule'][dayIndex].indexOf(hour)}
                            data={[profIndex, dayIndex]}
                        />
                    )
                })}

            </div>

        </div>
    )

}