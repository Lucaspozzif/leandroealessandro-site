import { useParams } from 'react-router-dom';
import { BottomButtons } from '../../Content/bottomButtons/bottomButtons';
import { ReadProfessional } from '../../Content/Firebase/firestoreData';
import { ItemListServ } from '../../Content/itemList/itemList';

export function ServicePage() {
    var data = ReadProfessional()
    const { profIndex } = useParams();
    const service = data
    //
    if (data.length == 0) {
        return console.log('vazio')
    }
    return (
        <>
            {data[profIndex]['services'].map((serv) => {
                return (
                    <ItemListServ
                        key={data[profIndex]['services'].indexOf(serv)}
                        msg={serv}
                        profIndex={profIndex}
                        servIndex={data[profIndex]['services'].indexOf(serv)}
                    />
                )
            })}
            <BottomButtons />
        </>
    )

}