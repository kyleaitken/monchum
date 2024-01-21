import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const UserInput = ({onUserInput}) => {
    const [inputText, setInputText] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [speechRecognitionAvailable, setSpeechRecognitionAvailable] = useState(false);
    const recognition = useRef(null);

    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            console.log('SpeechRecognition is supported.');
            setSpeechRecognitionAvailable(true);
        } else {
            console.log('SpeechRecognition is not supported in this browser.');
        }
    
      }, []);
    
    useEffect(() => {
        if (speechRecognitionAvailable) {
            recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.current.continuous = true;
            recognition.current.interimResults = true;
            recognition.current.lang = 'fr-FR';
        }

    }, [speechRecognitionAvailable]);

    useEffect(() => {
        if (isListening) {
            recognition.current.onresult = (event) => {
                let finalTranscript = '';
                for (let i = 0; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    finalTranscript += transcript + ' ';
                    setInputText(finalTranscript.trim());
                }
            };
        }
        if (!isListening) {
            setTimeout(() => {
                clearInput();
            }, 300);
        }

    }, [isListening])

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const stopMic = () => {
        if (isListening) {
            recognition.current.stop();
            setIsListening(false);
        }
    }

    const clearInput = () => {
        setInputText('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputText !== '') {
            stopMic();
            onUserInput(inputText);
        }
    };

    const handleSubmitClick = () => {
        stopMic();
        if (inputText !== '') {
            onUserInput(inputText);
        }
    };

    const handleMicClick = () => {
        if (!isListening) {
            recognition.current.start();
            setIsListening(true);
        } else {
            handleSubmitClick();
        }
    };

    const MicButton = () => {
        return (
            <MicButtonView onClick={handleMicClick}>
                {isListening ? 'Stop Mic' : 'Use Mic'}
            </MicButtonView>
        )
    }

    return (
        <View className='UserInput'>
            <Input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Message mon chum..."
            />
            <SubmitButton onClick={handleSubmitClick}>Submit</SubmitButton>
            <>
                {speechRecognitionAvailable && <MicButton />}
            </>
         </View>
    )

};

export default UserInput;

const View = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    width: 50%;
    flex-shrink: 0;
`;

const Input = styled.input`
    flex: 10;
    padding: 5px;
    border-radius: 5px;
    border-width: 1px;
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

const MicButtonView = styled.button`
    flex: 1;
    padding: 5px;
    cursor: pointer;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
`;