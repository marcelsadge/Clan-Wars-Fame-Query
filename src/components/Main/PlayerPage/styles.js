import styled from 'styled-components';
import rank from '../../../img/master3.png';

const EmptyContainer = styled.div`
    display: flex;
    margin: 0;
    top: 0;
    left: 0;
`;

const Loader = styled.div`
    display: flex;
    width: 84vw;
    margin-left: 15vw;
    font-family: 'Rubik', sans-serif;
    background: #252735;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    justify-content: center;
    height: 100vh;
    align-items: center;
`;

const PlayerPage = styled.div`
    display: flex;
    width: 84vw;
    margin-left: 14.35vw;
    font-family: 'Rubik', sans-serif;
    background: #252735;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    justify-content: center;
    align-items: center;
`;

const TextFont = styled.div`
    font-size: ${({ $font }) => $font} !important;
    color: white;
`;

const TopStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StatsContainer = styled.div`
    display: flex;
    font-size: 36px;
    width: 200px;
    height: 110px;
    color: white;
    border-radius: 10%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #401070;
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
    margin-left: 30px;
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
    margin-left: 1.4vw;
    border-radius: 15px;
    width: 370px;
    height: 150px;
    color: #fff;
    font-size: 25px;
    border: 2px solid #242c30;
`;

const MiddleBox = styled.div`
    background-color: #2a3142;
    margin-left: 1.4vw;
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
    HomeRow,
    HomeColumn,
    TopBox,
    MiddleBox,
    SummaryBox,
    DashboardContainer,
    SettingsContainer,
    EmptyContainer
};

export {
    Loader,
    PlayerPage,
    TextFont,
    TopStats,
    StatsContainer
};