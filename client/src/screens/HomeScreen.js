import React from 'react';
import styled from 'styled-components';
import ChatContainer from ''

const HomeScreen = () => {
    return (
        <HomeScreenContainer>
            <ChatContainer />
        </HomeScreenContainer>
    )
}

export default HomeScreen;

const HomeScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;
