import { ConfirmedPage } from "../Firebase/write/write"

export function BottomButtons(props) {
    return (
        <>
            <a href="/">{props.left}</a>
            <a href={props.link} >{props.right}</a>
        </>
    )
}
export function BottomButtonsConfirm(props) {
    return (
        <div onClick={props.click}>
            <a href="/">{props.left}</a>
            <a href={props.link} >{props.right}</a>
        </div>
    )
}