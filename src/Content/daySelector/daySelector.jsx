import { useNavigate } from 'react-router-dom'
import { DateGenerator } from '../dateGenerator/dateGenerator'
import { Link } from 'react-router-dom'


import '../../Style/reset.css'
import '../../Style/style.css'
import '../../Style/selectPages.css'
import './daySelector.css'

const { date, today } = require('../../data/Today/today')
var { currentDay } = require('../../data/Today/today')
const {week} =require('../../data/hourCount/hourcount.json')

export function DaySelector(props) {
    const navigate = useNavigate();
    var day = props.day.split('.')
    day[1]++
    day.pop()

    var previousDay = new Date(date)
    var nextDay = new Date(date)

    return (
        <div className='group'>
            <div onClick={
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
            </div>
            <div className='centerDiv'>
            <p className='date'>{day.join('/')}</p>
            <p className='date'>{week[props.day.split('$')[1]]}</p>

            </div>
            <div onClick={
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
            </div>
        </div>
    )
}
export function DaySelectorIndividual(props) {
    const navigate = useNavigate();
    var day = props.day.split('.')
    day[1]++
    day.pop()

    var previousDay = new Date(date)
    var nextDay = new Date(date)

    return (
        <div className='group'>
            <div onClick={
                () => {
                    if (currentDay > 0) currentDay--
                    previousDay.setDate(previousDay.getDate() + currentDay)
                    var displayPreviousDay = DateGenerator(previousDay)
                    navigate(
                        "/p/" +
                        props.profIndex + '/' +
                        displayPreviousDay
                    )
                }
            }>
                <div className='button moveButton'>
                    <h2>
                        Voltar
                    </h2>
                </div>
            </div>
            <div>
                <p className='date'>{day.join('/')}</p>
                <p>{}</p>
            </div>
            <div onClick={
                () => {
                    currentDay++
                    nextDay.setDate(nextDay.getDate() + currentDay)
                    var displayNextDay = DateGenerator(nextDay)
                    navigate(
                        "/p/" +
                        props.profIndex + '/' +
                        displayNextDay
                    )
                }
            }>
                <div className='button moveButton'>
                    <h2>
                        Avançar
                    </h2>
                </div>
            </div>
        </div>
    )
}