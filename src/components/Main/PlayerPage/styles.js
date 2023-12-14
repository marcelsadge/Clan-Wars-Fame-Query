import styled from 'styled-components';

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
`;

const PlayerPage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    margin-left: 100px;
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