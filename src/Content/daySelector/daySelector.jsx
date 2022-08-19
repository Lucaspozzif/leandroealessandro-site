import { useNavigate } from 'react-router-dom'
import { DateGenerator } from '../dateGenerator/dateGenerator'
const { date } = require('../../data/Today/today')
var { currentDay } = require('../../data/Today/today')


export function DaySelector(props) {
    const navigate = useNavigate();
    const day = props.day
    const tomorrow = new Date(date)
    tomorrow.setDate(tomorrow.getDate() + currentDay)

    var previousDay = new Date(date)
    var nowDay = new Date(date)
    var nextDay = new Date(date)

    return (
        <>
            <a onClick={
                () => {
                    if (currentDay > 0)currentDay--
                    previousDay.setDate(previousDay.getDate() + currentDay)
                    var displayPreviousDay = DateGenerator(previousDay)
                    navigate(
                        "/select-time/" +
                        props.profIndex + '/' +
                        props.servIndex + '/' +
                        displayPreviousDay
                    )
                }
            }>Voltar</a>

            <a>{day}</a>
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
            }>avançar</a>
        </>
    )
}