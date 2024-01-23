import styled from 'styled-components';
import rank from '../../../img/master3.png';

const Loader = styled.div`
    display: flex;
    font-family: 'Nunito';
    background: linear-gradient(#141729, #212840, #101221);
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: 20vw;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
    width: 60vw;
    align-items: center;
`;

const PlayerPage = styled.div`
    display: flex;
    font-family: 'Nunito';
    background: linear-gradient(#141729, #212840, #101221);
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: 20vw;
    flex-wrap: wrap;
    justify-content: center;
    width: 60vw;
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

const HoverContainer = styled.div`
    display: flex;
    width: 120px;
    height: 110px;
    background: #212840;
    background-image: url(${rank});
    border-radius: 25%;
`;


const RecentStats = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-between;
    width: 45vw;
    height: 10vh;
`;

const NameGroup = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: row;
`;

const NameContainer = styled.div`
    display: flex;
    font-size: 60px;
    margin-top: 30px;
    color: white;
    align-text: center;
`;

const GeneralContainer = styled.div`
    display: flex;
    background-color: #101221;
    margin-top: 5vw;
    margin-right: 0.5vw;
    margin-bottom: 50px;
    border-radius: 20px;
    padding: 20px;
    width: 56vw;
    height: 100vh;
    color: #fff;
    font-size: 50px;
    align-items: center;
    flex-direction: column;
    border: 1px solid #242c30;
`;

export {
    Loader,
    PlayerPage,
    TextFont,
    TopStats,
    StatsContainer,
    RecentStats,
    NameContainer,
    GeneralContainer,
    NameGroup,
    HoverContainer
};