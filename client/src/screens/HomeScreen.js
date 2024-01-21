import React from 'react';
import styled from 'styled-components';
import ChatContainer from '../containers/ChatContainer';
import Header from '../components/Header';

const HomeScreen = () => {
    return (
        <View className='HomeScreenContainer'>
            <Header />
            <ChatContainer />
        </View>
    )
}

export default HomeScreen;

const View = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: 0 auto; 
`;
