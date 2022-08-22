import {Link} from 'react-router-dom'
export function BottomButtons(props) {
    return (
        <>
            <Link to="/">{props.left}</Link>
            <Link to={props.link} >{props.right}</Link>
        </>
    )
}
export function BottomButtonsConfirm(props) {
    return (
        <div onClick={props.click}>
            <Link to="/">{props.left}</Link>
            <Link to={props.link} >{props.right}</Link>
        </div>
    )
}