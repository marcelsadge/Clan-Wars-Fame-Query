import styled from 'styled-components';

const TrendsHomePage = styled.div`
    display: flex;
    margin-left: 15vw;
    font-family: 'Nunito';
    background: #252735;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    width: 84vw;
    background-size: 100%;
    margin-left: 15vw;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
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