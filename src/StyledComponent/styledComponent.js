import styled from 'styled-components';

export const BackgroundApp = styled.div`
    height: 100vh;
    background-image: url('./img/bgGame.png');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px 0;
`;

export const Bubble = styled.div`
    width: 120px;
    height: 120px;
    border: 4px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: relative;
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 100%;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;

        border-top: 40px solid green;
    }
    img {
        width: 50px;
        height: 50px;
    }
`;

export const PlayerStyled = styled.div`
    margin-top: 36px;
    width: 200px;
    height: 200px;

    img {
        max-width: 100%;
    }
`;

export const Options = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 0 8px;
    border: 4px solid transparent;
    transition: all .3s;

    img {
        max-width: 100%;
        width: 30px;
        height: 30px;
    }

    ${props => (props.$option ? 'border-color: orange' : 'border-color: transparent')}
`;
