import styled from 'styled-components';

const InfoHomePage = styled.div`
    display: flex;
    font-family: 'Secular One';
    background-color: #03022b;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 290px;
    flex-wrap: wrap;
    justify-content: center;
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
    background-color: #181c1c;
    margin-top: 100px;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 500px;
    color: #fff;
    font-size: 50px;
`;

export {
    InfoHomePage,
    InfoRow,
    InfoColumn,
    InfoContainer
};