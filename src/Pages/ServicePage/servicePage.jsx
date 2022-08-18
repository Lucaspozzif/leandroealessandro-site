import { useParams } from 'react-router-dom';
export function ServicePage(){
    let {professional} = useParams();
    return(
        <p> bom dia {professional}</p>
    )
}