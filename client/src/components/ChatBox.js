import styled from 'styled-components';

const Message = ({message}) => {
    return (
        <MessageView>
            <strong>{`${message.id}: `}</strong>
            {message.message}
            <br />
            <br />
        </MessageView>
    )
}

const ChatBox = (props) => {
    const { messages } = props;
    return (
        <View className='ChatBox'>
            {messages.map((message, index) => (
                <Message 
                    key={index}  // Make sure to include a key prop for each item in the map
                    message={message}
                />
            ))}
        </View>
    )
};

export default ChatBox;

const View = styled.div`
    flex-grow: 1;
    width: 50%;
    overflow-y: auto;
`;

const MessageView = styled.div`
    padding: 10px;
`;