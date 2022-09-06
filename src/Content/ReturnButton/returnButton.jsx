import { Link } from "react-router-dom";
import './returnButton.css'

export function ReturnButton(props) {
    const link = props.link
    return (

        <Link to={link}>
            <div className="returnButton button">
                <img className='returnIcon' src={require('../../Assets/Icons/left-arrow.png')} />
            </div>
        </Link>
    )

}