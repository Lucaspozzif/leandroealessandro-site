export function BottomButtons(props) {
    return (
        <>
            <a href="/">{props.left}</a>
            <a href={props.link} >{props.right}</a>
        </>
    )
}