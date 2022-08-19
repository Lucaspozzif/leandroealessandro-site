import { useNavigate } from 'react-router-dom'
import { DateGenerator } from '../dateGenerator/dateGenerator'

import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'
import './daySelector.css'

const { date } = require('../../data/Today/today')
var { currentDay } = require('../../data/Today/today')

export function DaySelector(props) {
    const navigate = useNavigate();
    var day = props.day.split('.')
    day[1]++
    day.pop()

    var previousDay = new Date(date)
    var nextDay = new Date(date)

    return (
        <div className='group'>
            <a onClick={
                () => {
                    if (currentDay > 0) currentDay--
                    previousDay.setDate(previousDay.getDate() + currentDay)
                    var displayPreviousDay = DateGenerator(previousDay)
                    navigate(
                        "/select-time/" +
                        props.profIndex + '/' +
                        props.servIndex + '/' +
                        displayPreviousDay
                    )
                }
            }>
                <div className='button moveButton'>
                    <h2>
                        Voltar
                    </h2>
                </div>
            </a>

            <p className='date'>{day.join('/')}</p>
            <a onClick={
                () => {
                    currentDay++
                    nextDay.setDate(nextDay.getDate() + currentDay)
                    var displayNextDay = DateGenerator(nextDay)
                    navigate(
                        "/select-time/" +
                        props.profIndex + '/' +
                        props.servIndex + '/' +
                        displayNextDay
                    )
                }
            }>
                <div className='button moveButton'>
                    <h2>
                        Avançar
                    </h2>
                </div>
            </a>
        </div>
    )
}