import { Link } from 'react-router-dom'
import '../../Style/reset.css'
import '../../Style/style.css'
import './itemList.css'

const { time } = require('../../data/hourCount/hourcount.json')
const { today } = require('../../data/Today/today')

export function ItemListProf(props) {
    return (
        <Link to={"/select-service/" + props.index}>
            <div className='button scheduleButton'>
                <div>
                    <h1 className='title'>{props.msg[props.title]}</h1>
                    <p className='subtitle'>{props.msg[props.subtitle].join(', ')}</p>

                </div>

            </div>
        </Link>
    )
}
export function ItemListProfSecret(props) {
    return (
        <Link to={"/p/" + props.index + '/' + today}>
            <div className='button scheduleButton'>
                <div>
                    <h1 className='title'>{props.msg[props.title]}</h1>
                    <p className='subtitle'>{props.msg[props.subtitle].join(', ')}</p>

                </div>

            </div>
        </Link>
    )
}
export function ItemListServ(props) {
    return (
        <Link to={"/select-time/" + props.profIndex + '/' + props.servIndex + '/' + today}>
            <div className='button scheduleButton'>
                <h1 className='title'>{props.msg['name']}</h1>
            </div>
        </Link>
    )
}
export function ItemListTime(props) {
    var appear = true
    for (let i = props.index; i < (parseInt(props.service) + parseInt(props.index)); i++) {
        if (!props.data[i]) return
        if (props.data[i]['taken'] == true) {
            appear = false
        }
    }
    if (appear == true) {
        return (
            <Link to={'/confirm/' + props.profIndex + '/' + props.servIndex + '/' + props.dayIndex + '/' + props.index}>
                <div className='button scheduleButton'>
                    <h1>{time[props.index]}</h1>

                </div>
            </Link>
        )
    }
}
export function ItemListTimeSecret(props) {
    if(props.msg['taken'] == true){
        return(
            
            <div className='greyButton scheduleButton'>
                <h1>{time[props.index]}</h1>
                <p>{props.msg['name']} agendou {props.msg['service']}</p>
            </div>
        )
    }
    return (
            <div className='button scheduleButton'>
                <h1>{time[props.index]}</h1>

            </div>
    )
}