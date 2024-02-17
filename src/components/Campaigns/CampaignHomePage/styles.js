import styled from 'styled-components';
import './index.css';

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const CampaignStatsPage = styled.div`
    display: flex;
    width: 84vw;
    margin-left: 15vw;
    font-family: 'Rubik', sans-serif;
    background: #252735;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
`;

const IntroContainer = styled.div`
    background-color: #101221;
    margin-top: 100px;
    margin-right: 50px;
    border-radius: 20px;
    padding: 20px;
    height: 100px;
    color: #fff;
`;

export {
    Loader,
    CampaignStatsPage,
    IntroContainer
};