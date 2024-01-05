import { useState } from 'react';
import styled from 'styled-components';

const UserInput = ({onUserInput}) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputText !== '') {
            onUserInput(inputText);
            setInputText('');
        }
    };

    const handleSubmitClick = () => {
        if (inputText !== '') {
            onUserInput(inputText);
            setInputText('');
        }
    };

    return (
        <View className='UserInput'>
            <Input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
            />
            <SubmitButton onClick={handleSubmitClick}>Submit</SubmitButton>
         </View>
    )

};

export default UserInput;

const View = styled.div`
    background-color: #333;
    height: 100px;
    display: flex;
    flex-direction: row;
    width: 75%;
    flex-shrink: 0;
`;

const Input = styled.input`
    flex: 10;
    padding: 5px;
    margin-right: 10px;
`;

const SubmitButton = styled.button`
    flex: 1;
    padding: 5px;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
`;
