import { doc, setDoc } from "firebase/firestore"
import { currentDay, date } from "../../data/Today/today"
import { db } from "../Firebase/firebase"

const emptyDay = []
const lockedDay = []
for (let i = 0; i < 23; i++) {
    emptyDay.push(
        {
            taken: false,
            name: '',
            number:'',
            service: '',
        }
    )
    lockedDay.push(
        {
            taken: true,
            name: 'bloqueado',
            number:'bloqueado',
            service: 'bloqueado',
        }
    )
}

export function checkGenerateDay(data, dateTime, profIndex) {
    const prof = data[profIndex]
    if (prof['schedule'][dateTime]) return
    if(dateTime.split('$')[1] == 0 || dateTime.split('$')[1] == 1){
        prof['schedule'][dateTime]= lockedDay

    }else{
        prof['schedule'][dateTime]= emptyDay

    }
    const addSchedule = async () => {
        const profRef = doc(db, 'professionals', data[profIndex]['id'])
        const update = {
            name: prof['name'],
            services: prof['services'],
            occupation: prof['occupation'],
            schedule: prof['schedule']
        }
        await setDoc(profRef,update)
    }
    addSchedule()
}