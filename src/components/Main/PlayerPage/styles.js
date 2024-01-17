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
    background-size: 100%;
    margin-left: 350px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw - 290px;
`;

const TextFont = styled.div`
    font-size: ${({ $font }) => $font} !important;
    color: white;
`;

const BadgeImage = styled.div`
    background-image: url(${rank});
    width: 120px;
    height: 110px;
`;

const TopStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StatsContainer = styled.div`
    display: flex;
    font-size: 36px;
    width: 220px;
    height: 110px;
    color: white;
    border-radius: 10%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #401070;
`;

const RecentStats = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-between;
    width: 60vw;
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
    margin-top: 100px;
    margin-left: 25px;
    margin-bottom: 50px;
    border-radius: 20px;
    padding: 20px;
    width: 70vw;
    height: 100vh;
    color: #fff;
    font-size: 50px;
    align-items: center;
    flex-direction: column;
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
    BadgeImage,
    NameGroup
};