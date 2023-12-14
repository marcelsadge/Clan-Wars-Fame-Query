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
`;

const IntroContainer = styled.div`
    background-color: #181c1c;
    margin-top: 100px;
    margin-left: 340px;
    margin-right: 50px;
    border-radius: 20px;
    padding: 20px;
    color: #fff;
`;

export {
    Loader,
    CampaignStatsPage,
    IntroContainer
};