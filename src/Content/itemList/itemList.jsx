const { time } = require('../../data/hourCount/hourcount.json')
export function ItemListProf(props) {
    return (
        <a href={"/select-service/" + props.index}>
            <h1>{props.msg[props.title]}</h1>
            <p>{props.msg[props.subtitle].join(', ')}</p>
        </a>
    )
}
export function ItemListServ(props) {
    return (
        <a href={"/select-time/" + props.profIndex + '/' + props.servIndex}>
            <h1>{props.msg}</h1>
        </a>
    )
}
export function ItemListTime(props) {
    if(props.msg['taken'] == false){
        return (
            <a href={'/confirm/'+props.profIndex+'/'+props.servIndex+'/'+props.index}>
                <h1>{time[props.index]}</h1>
            </a>
        )
    }
}