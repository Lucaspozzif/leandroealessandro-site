import { useParams } from 'react-router-dom';
import { ReadProfessional } from '../../Content/Firebase/firestoreData';
import { ItemListTime } from '../../Content/itemList/itemList';
import { checkGenerateDay } from '../../Content/scheduleManagement/schedule';

export function TimePage() {
    var data = ReadProfessional()
    const { profIndex } = useParams();
    const { servIndex } = useParams();
    if (data.length == 0) return
    const date = new Date()
    const today = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
    checkGenerateDay(data, today, profIndex)
    return (
        <>
            {data[profIndex]['schedule'][today].map((hour) => {
                return (
                    <ItemListTime
                    msg={hour}
                    index={data[profIndex]['schedule'][today].indexOf(hour)}
                    servIndex = {servIndex}
                    profIndex = {profIndex}
                    />

                )
            })}
        </>
    )

}