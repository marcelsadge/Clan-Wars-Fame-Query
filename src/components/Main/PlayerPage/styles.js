import styled from 'styled-components';

const Loader = styled.div`
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
    align-items: center;
`;

const PlayerPage = styled.div`
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
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const RecentStats = styled.div`
`;

const NameContainer = styled.div`
    display: flex;
    justify-content: left;
    font-size: 52px;
    color: white;
    margin-left: 300px;
    margin-top: 100px;
`;

export {
    Loader,
    PlayerPage,
    TextFont,
    TopStats,
    StatsContainer,
    RecentStats,
    NameContainer
};