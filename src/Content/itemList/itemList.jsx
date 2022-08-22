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
export function ItemListServ(props) {
    return (
        <Link to={"/select-time/" + props.profIndex + '/' + props.servIndex + '/' + today}>
            <div className='button scheduleButton'>
            <h1 className='title'>{props.msg}</h1>
            </div>
        </Link>
    )
}
export function ItemListTime(props) {
    if (props.msg['taken'] == false) {
        return (
            <Link to={'/confirm/' + props.profIndex + '/' + props.servIndex + '/' + props.dayIndex + '/' + props.index}>
                <div className='button scheduleButton'>
                <h1>{time[props.index]}</h1>

                </div>
            </Link>
        )
    }
}