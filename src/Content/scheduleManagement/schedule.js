import { doc, setDoc } from "firebase/firestore"
import { db } from "../Firebase/firebase"

const emptyDay = []
for (let i = 0; i < 24; i++) {
    emptyDay.push(
        {
            taken: false,
            name: '',
            number:'',
            service: '',
        }
    )
}

export function checkGenerateDay(data, dateTime, profIndex) {
    const prof = data[profIndex]
    if (prof['schedule'][dateTime]) return
    console.log(prof['schedule'])
    prof['schedule'][dateTime]= emptyDay
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