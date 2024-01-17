import styled from 'styled-components';

const InfoHomePage = styled.div`
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
    margin-left: 25px;
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