import { useState } from 'react/cjs/react.production.min';
import styled from 'styled-components';

const ChatContainer = () => {
    const [chatHistory, setChatHistory] = useState([]);

    const handleUserInput = (UserInput) => {
        const newMessage = {id: 'You', message: UserInput};
        setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);

        // call api function from api.js
    };

    return (
        <View>
            <ChatBox messages={chatHistory}/>
            <UserInput onUserInput={handleUserInput}/>
        </View>
    )

};

export default ChatContainer;

const View = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;


