import styled from 'styled-components';

const DataBarComponent = styled.div`
    display: flex;
    background: linear-gradient(#141729, #101221);
    font-family: 'Nunito';
    position: fixed;
    justify-content: flex-end;
    text-align: center;
    width: 20vw;
    height: 100vh;
    border-left: 1px solid #242c30;
    z-index: 99;
    right: 0;
`;

const DataContainer = styled.div`
    display: flex;
    height: 70vh;
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
`
const DataLink = styled.a`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`;

export { 
    DataBarComponent,
    DataContainer, 
    DataGrid,
    DataTable,
    DataRow,
    DataLink
};