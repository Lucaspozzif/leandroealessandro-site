import { useParams } from 'react-router-dom';
export function timePage(){
    let {professional, service} = useParams();
    return(
        <p> bom dia {professional}</p>
    )
}