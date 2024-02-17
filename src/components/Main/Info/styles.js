import styled from 'styled-components';

const InfoHomePage = styled.div`
    display: flex;
    width: 84vw;
    margin-left: 15vw;
    font-family: 'Nunito';
    background: #252735;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    flex-wrap: wrap;
    justify-content: center;
    height: 100vh;
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`;

const InfoContainer = styled.div`
    display: flex;
    background-color: #101221;
    margin-top: 100px;
    border-radius: 20px;
    padding: 20px;
    width: 500px;
    height: 500px;
    color: #fff;
    font-size: 50px;
    justify-content: center;
    align-text: center;
`;

export {
    InfoHomePage,
    InfoRow,
    InfoColumn,
    InfoContainer
};