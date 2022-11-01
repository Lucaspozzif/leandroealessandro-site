import { doc, setDoc } from "firebase/firestore"
import { currentDay, date } from "../../Data/Today/today"
import { db } from "../Firebase/firebase"

const emptyDay = []
const lockedDay = []
for (let i = 0; i < 23; i++) {
    emptyDay.push(
        {
            taken: false,
            name: '',
            number: '',
            service: '',
        }
    )
    lockedDay.push(
        {
            taken: true,
            name: 'bloqueado',
            number: 'bloqueado',
            service: 'bloqueado',
        }
    )
}

export function checkGenerateDay(data, dateTime, profIndex) {

    const prof = data[profIndex]
    //Limitations on specific professionals accounts
    if (profIndex == 0) {

    }

    if (prof['schedule'][dateTime]) return

    if (dateTime.split('$')[1] == 0 || dateTime.split('$')[1] == 1) {
        prof['schedule'][dateTime] = lockedDay

    } else {
        prof['schedule'][dateTime] = emptyDay

        if (profIndex == 1) {
            prof['schedule'][dateTime][19] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][20] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][21] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][22] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
        }
        if (profIndex == 2) {
            prof['schedule'][dateTime][0] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][1] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][2] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][3] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][4] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][5] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][6] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][7] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }


            prof['schedule'][dateTime][19] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][20] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][21] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][22] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }

        }
        if(profIndex == 3){
            
            prof['schedule'][dateTime][0] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][1] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][2] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][3] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
        }
        if(profIndex == 4){
            
            prof['schedule'][dateTime][0] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][1] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][2] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][3] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
        }
        if(profIndex == 5){
            prof['schedule'][dateTime][21] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
            prof['schedule'][dateTime][22] =
            {
                taken: true,
                name: 'bloqueado',
                number: 'bloqueado',
                service: 'bloqueado',
            }
        }

    }
    function compare(a, b) {
      if (a["name"] < b["name"]) {
        return -1;
      }
      if (a["name"] > b["name"]) {
        return 1;
      }
      return 0;
    }
    const addSchedule = async () => {
        const profRef = doc(db, 'professionals', data[profIndex]['id'])
        const update = {
            name: prof['name'],
            services: prof['services'].sort(compare),
            occupation: prof['occupation'],
            schedule: prof['schedule']
        }
        await setDoc(profRef, update)
    }
    addSchedule()
}