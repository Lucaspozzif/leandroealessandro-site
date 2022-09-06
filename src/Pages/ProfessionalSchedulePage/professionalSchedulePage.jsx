import { ReadProfessional } from "../../Content/Firebase/firestoreDataReader"
import { ItemListProfSecret } from "../../Content/itemList/itemList"

import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'
import { ReturnButton } from "../../Content/ReturnButton/returnButton"

export function ProfessionalSchedulePage() {
    const data = ReadProfessional()
    return (
        <div className="body">
        <div className="backgroundColor">
            <ReturnButton link={'/'}/>
            {data.map(
                (prof => {
                    return (
                        <ItemListProfSecret
                        key = {prof['name']}
                            msg={prof}
                            title={'name'}
                            subtitle={'occupation'}
                            index={data.indexOf(prof)}
                        />
                    )
                })
            )
            }
        </div>

        </div>
    )
}