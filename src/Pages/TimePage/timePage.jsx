import { useParams } from 'react-router-dom';
import { DaySelector } from '../../Content/daySelector/daySelector';
import { ReadProfessional } from '../../Content/Firebase/firestoreDataReader';
import { ItemListTime } from '../../Content/itemList/itemList';
import { checkGenerateDay } from '../../Content/scheduleManagement/schedule';

export function TimePage() {
    var data = ReadProfessional()
    const { profIndex } = useParams();
    const { servIndex } = useParams();
    const { dayIndex } = useParams();
    console.log(dayIndex)
    if (data.length == 0) return
    checkGenerateDay(data, dayIndex, profIndex)
    return (
        <>
            <DaySelector
                day={dayIndex}
                servIndex={servIndex}
                profIndex={profIndex}
            />
            {data[profIndex]['schedule'][dayIndex].map((hour) => {
                return (
                    <ItemListTime
                        msg={hour}
                        index={data[profIndex]['schedule'][dayIndex].indexOf(hour)}
                        servIndex={servIndex}
                        profIndex={profIndex}
                        dayIndex={dayIndex}
                    />
                )
            })}

        </>
    )

}