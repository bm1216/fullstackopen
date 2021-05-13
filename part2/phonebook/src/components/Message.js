const Message = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className={!message.isError ? "message" : "error-message"}>
            {message.content}
        </div>
    )
}

export default Message