import { useParams } from 'react-router-dom';
import { DaySelectorIndividual } from '../../Content/daySelector/daySelector';
import { ReadProfessional } from '../../Content/Firebase/firestoreDataReader';
import { ItemListTimeSecret } from '../../Content/itemList/itemList';
import { checkGenerateDay } from '../../Content/scheduleManagement/schedule';

import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'


export function IndividualSchedule() {
    var data = ReadProfessional()
    const { profIndex } = useParams();
    const { dayIndex } = useParams();
    if (data.length == 0) return
    checkGenerateDay(data, dayIndex, profIndex)
    return (
        <div className='body'>
            <div className='backgroundColor'>
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
                        />
                    )
                })}

            </div>

        </div>
    )

}