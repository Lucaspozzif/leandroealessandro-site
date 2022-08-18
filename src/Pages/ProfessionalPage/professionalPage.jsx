import { ReadProfessional } from "../../Content/Firebase/firestoreData"
import { ItemList } from "../../Content/itemList/itemList"

export function ProfessionalPage() {
    const data = ReadProfessional()
    console.log(data)
    return (
        <>
            tete
            <ItemList />
        </>
    )
}