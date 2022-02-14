export default function Message(props) {
    return <div className="message">
        <span className="messge-user">{props.user}</span>
        <span>{props.text}</span>
    </div>;
}