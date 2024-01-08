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
    font-family: 'Nunito';
    background: linear-gradient(#141729, #212840, #101221);
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 350px;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
    width: 100wh;
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