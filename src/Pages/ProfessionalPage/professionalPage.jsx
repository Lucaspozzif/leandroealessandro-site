import { BottomButtons } from "../../Content/bottomButtons/bottomButtons"
import { ReadProfessional } from "../../Content/Firebase/firestoreData"
import { ItemListProf } from "../../Content/itemList/itemList"

export function ProfessionalPage() {
    const data = ReadProfessional()
    return (
        <>
            {data.map(
                (prof => {
                    return (
                        <ItemListProf
                            msg={prof}
                            title={'name'}
                            subtitle={'occupation'}
                            index={data.indexOf(prof)}
                        />
                    )
                })
            )
            }
            <BottomButtons left={'Voltar'} right={'Serviços'} link={'/select-service'} />
        </>
    )
}