import React from 'react';
import styled from 'styled-components';
import ChatContainer from '../containers/ChatContainer';

const HomeScreen = () => {
    return (
        <View>
            <Header />
            <ChatContainer />
            <Footer />
        </View>
    )
}

export default HomeScreen;

const View = styled.div`
`;
