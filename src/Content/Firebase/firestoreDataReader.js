import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export function ReadProfessional() {
    const [profLists, setProfList] = useState([])
    useEffect(() => {
        const getProfs = async () => {
            const data = await getDocs(collection(db, 'professionals'))
            setProfList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        if(profLists.length == 0)getProfs()
    })
    return (profLists)
}