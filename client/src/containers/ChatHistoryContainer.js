import styled from 'styled-components';

const ChatHistoryContainer = () => {

    return (
        <View>
            <Header />
            <ChatHistoryList />
        </View>
    )
};

export default ChatHistoryContainer;

const View = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex: 1;
`;

