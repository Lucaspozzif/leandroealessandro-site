import { useParams } from 'react-router-dom';
import { DaySelector } from '../../Content/daySelector/daySelector';
import { ReadProfessional } from '../../Content/Firebase/firestoreDataReader';
import { ItemListTime } from '../../Content/itemList/itemList';
import { checkGenerateDay } from '../../Content/scheduleManagement/schedule';

import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'


export function TimePage() {
    var data = ReadProfessional()
    const { profIndex } = useParams();
    const { servIndex } = useParams();
    const { dayIndex } = useParams();
    console.log(dayIndex.split('$')[1])
    if (data.length == 0) return
    checkGenerateDay(data, dayIndex, profIndex)
    return (
        <div className='body'>
            <div className='backgroundColor'>
                <DaySelector
                    day={dayIndex}
                    servIndex={servIndex}
                    profIndex={profIndex}
                />
                {data[profIndex]['schedule'][dayIndex].map((hour) => {
                    return (
                        <ItemListTime
                            data={data[profIndex]['schedule'][dayIndex]}
                            key={data[profIndex]['schedule'][dayIndex].indexOf(hour)}
                            service={data[profIndex]['services'][servIndex]['time']}
                            msg={hour}
                            index={data[profIndex]['schedule'][dayIndex].indexOf(hour)}
                            servIndex={servIndex}
                            profIndex={profIndex}
                            dayIndex={dayIndex}
                        />
                    )
                })}
                <h1 className='button padding'> O salão funciona de terça a sábado, das 9:00 às 20:00</h1>

            </div>

        </div>
    )

}