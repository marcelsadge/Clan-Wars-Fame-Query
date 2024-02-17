import styled from 'styled-components';

const DataBarComponent = styled.div`
    display: flex;
    background: #2a3142;
    font-family: 'Nunito';
    position: fixed;
    justify-content: center;
    text-align: center;
    width: 15vw;
    height: 100vh;
    border-left: 1px solid #242c30;
    z-index: 99;
    right: 0;
`;

const DataContainer = styled.div`
    display: flex;
    height: 500px;
    flex-direction: column;
    justify-content: center;
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(235px, 1fr));
  grid-gap: 20px;
`;

const DataTable = styled.div`
    display: flex;
    flex-direction: column;
`;

const DataRow = styled.div`
    display: flex;
    padding: 9px;
    column-gap: 10px;
    width: 297px;
    margin-left: 50px;
    &:hover {
        background: linear-gradient(to left, #101221 99%, #de3c4b 1%);
        cursor: pointer;
        opacity: 0.8;
        transition: 1s;
    }
`;

const DataLink = styled.a`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`;

const SubTitleRow = styled.div`
    display: flex;
    font-size: 25px;
    justify-content: center;
    color: #06b6ff;
    width: 17vw;
    height: 1px;
    margin-top: 15px;
`;

const RecentSearchBox = styled.div`
    display: flex;
    background: #6886b4;
    width: 100px;
    height: 50px;
    border: 1px solid white;
    border-radius: 10px;
`;

export { 
    DataBarComponent,
    DataContainer, 
    DataGrid,
    DataTable,
    DataRow,
    DataLink,
    SubTitleRow,
    RecentSearchBox
};