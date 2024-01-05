import { useState, useCallback } from 'react';
import styled from 'styled-components';
import  getGPTResponse from '../services/api';
import ChatBox from '../components/ChatBox';
import UserInput from '../components/UserInput';

const ChatContainer = () => {
    const dummyMessage = {id: 'You', message: 'This is a sample message.'};
    const [chatHistory, setChatHistory] = useState([dummyMessage]);

    const handleUserInput = useCallback(async (userInput) => {
        const newMessage = {id: 'You', message: userInput};
        setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);

        // get gpt response from api.js
        try {
            const gptResponse = await getGPTResponse(userInput);
            const newGPTMessage = {id: 'GPT', message: gptResponse};
            setChatHistory((prevChatHistory) => [...prevChatHistory, newGPTMessage]);
        } catch (error) {
            console.error('Error getting GPT response:', error);
        }
    }, []);

    return (
        <View className='ChatContainer'>
            <ChatBox messages={chatHistory}/>
            <UserInput onUserInput={handleUserInput}/>
        </View>
    )
};

export default ChatContainer;

const View = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
`;

    // overflow: hidden;
    // height: 100vh;
    // margin: 50px 250px 100px 250px;

