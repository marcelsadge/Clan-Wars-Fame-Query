import styled from 'styled-components';

import './index.css';

const FameHomePage = styled.div`
    display: flex;
    font-family: 'Segoe UI';
    background: linear-gradient(#141729, #212840, #101221);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 350px;
    height: 100vh;
`;

const HomeRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const HomeColumn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`;

const IntroContainer = styled.div`
    background-color: #101221;
    margin-top: 100px;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    color: #fff;
    font-size: 50px;
`;

const TopRightBox = styled.div`
    background-color: #101221;
    margin-top: 100px;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 600px;
    height: 115px;
    color: #fff;
    font-size: 25px;
`;

const MiddleBox = styled.div`
    background-color: #101221;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 450px;
    height: 300px;
    color: #fff;
    font-size: 25px;
`;

const MiddleRightBox = styled.div`
    background-color: #101221;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    height: 525px;
    color: #fff;
    font-size: 25px;
`;

const BottomBox = styled.div`
    background-color: #101221;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    height: 200px;
    color: #fff;
    font-size: 25px;
`;

const BoxContainer = styled.div`
    background-color: #101221;
    margin-top: 100px;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 500px;
    height: 500px;
    color: #fff;
    font-size: 50px;
`;

export {
    FameHomePage,
    HomeRow,
    HomeColumn,
    IntroContainer,
    TopRightBox,
    MiddleBox,
    MiddleRightBox,
    BottomBox,
    BoxContainer
};