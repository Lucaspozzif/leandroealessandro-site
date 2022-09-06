import { BottomButtons } from "../../Content/bottomButtons/bottomButtons"
import { ReadProfessional } from "../../Content/Firebase/firestoreDataReader"
import { ItemListProf } from "../../Content/itemList/itemList"

import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'
import { ReturnButton } from "../../Content/ReturnButton/returnButton"

export function ProfessionalPage() {
    const data = ReadProfessional()
    return (
        <div className="body">
        <div className="backgroundColor">
            <ReturnButton link={'/'}/>
            {data.map(
                (prof => {
                    return (
                        <ItemListProf
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