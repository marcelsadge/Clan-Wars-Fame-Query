import styled from 'styled-components';

const TrendsHomePage = styled.div`
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
    width: 100vw - 290px;
`;

const PlayerNameContainer = styled.div`
    display: flex;
    font-size: 52px;
    color: white;
    justify-content: center;
    align-items: center;
`;

const PlayerStatsContainer = styled.div`
    display: flex;
    position: absolute;
    color: white;
    justify-content: center;
    align-items: center;
`;

export { TrendsHomePage, PlayerNameContainer, PlayerStatsContainer };