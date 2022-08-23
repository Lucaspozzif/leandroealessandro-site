import { ReadProfessional } from "../../Content/Firebase/firestoreDataReader"
import { ItemListProfSecret } from "../../Content/itemList/itemList"

import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'

export function ProfessionalSchedulePage() {
    const data = ReadProfessional()
    return (
        <div className="body">
        <div className="backgroundColor">
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