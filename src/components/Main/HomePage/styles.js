import styled from 'styled-components';

import './index.css';

const FameHomePage = styled.div`
    display: flex;
    font-family: 'Rubik', sans-serif;
    background: #252735;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: 15vw;
    width: 84vw;
    height: 100%;
`;

const HomeRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HomeColumn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`;

const DashboardContainer = styled.div`
    margin-top: 100px;
    margin-left: 40px;
    border-radius: 25px;
    height: 50px;
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`;

const SettingsContainer = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    right: 0;
    margin-right: 40px;
    width: 100px;
    height: 40px;
    margin-top: 100px;
    background-color: #626ed4;
    color: white;
    font-size: 16px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #4a56c7;
        transition: 0.3s;
    }
`;

const TopBox = styled.div`
    background-color: #626ed4;
    margin-left: 1.5vw;
    border-radius: 15px;
    width: 370px;
    height: 150px;
    color: #fff;
    font-size: 25px;
    border: 2px solid #242c30;
`;

const MiddleBox = styled.div`
    background-color: #2a3142;
    margin-left: 1.5vw;
    border-radius: 15px;
    width: 1165px;
    height: 450px;
    color: #fff;
    font-size: 25px;
    border: 2px solid #242c30;
`;

const SummaryBox = styled.div`
    background-color: #2a3142;
    border-radius: 15px;
    width: 370px;
    height: 450px;
    color: #fff;
    font-size: 25px;
    border: 2px solid #242c30;
`;

export {
    FameHomePage,
    HomeRow,
    HomeColumn,
    TopBox,
    MiddleBox,
    SummaryBox,
    DashboardContainer,
    SettingsContainer
};