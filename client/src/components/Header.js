import styled from 'styled-components';

const Header = () => {
    return (
        <View className='header'>
            <h1>mon chum.</h1>
        </View>
    )
};

export default Header;

const View = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: Arial, sans-serif;
    width: 70%;
    padding: 10px;
    text-align: left;
    height: 50px;
`;