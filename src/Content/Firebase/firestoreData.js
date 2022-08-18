import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export function ReadProfessional() {
    const [profLists, setProfList] = useState([])
    const professionalCollectionRef = collection(db, 'professionals')
    //useEffect(() => {
        const getProfs = async () => {
            const data = await getDocs(professionalCollectionRef)
            setProfList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getProfs()
    //})
    return(profLists)
}
export function WriteProfessional() {
    const [data] = useState('')

    const professionalCollectionRef = collection(db, 'professionals')
}