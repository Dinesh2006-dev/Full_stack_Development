export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "gold" : "white"
    }
    return (
        <button style={styles} onClick={props.hold}>
            {props.value}
        </button>
    )
}