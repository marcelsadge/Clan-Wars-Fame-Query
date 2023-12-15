import styled from 'styled-components';

const SideBarComponent = styled.div`
    background-color: #03022b;
    font-family: Segoe UI;
    position: fixed;
    height: 100%;
    width: 290px;
    border-right: 1px solid #242c30;
`;

const SideContainer = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const SideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(235px, 1fr));
  grid-gap: 20px;
`;

const SideTable = styled.div`
    display: flex;
    flex-direction: column;
`;

const SideRow = styled.div`
    display: flex;
    padding: 9px;
    column-gap: 10px;
    width: 259px;
    margin-left: 30px;
    &:hover {
        background: linear-gradient(to right, #03022b 99%, #b7abe3 1%);
        cursor: pointer;
    }
`
const SideLink = styled.a`
  color: #b7abe3;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;

const Title = styled.div`
    font-weight: normal;
    color: #fd9c9d;
    font-size: 24px;
    font-weight: bold;
    padding: 21px;
    text-align: center;
    border-bottom: 1px solid #242c30;
`;

const PageIndicator = styled.div`
    position: absolute;
    background: #b7abe3;
    margin-left: 286px;
    margin-top: ${(props) => props.currPosition};
    padding: 19px;
    padding-left: 2px;
    padding-right: 1px;
`;

export { 
    SideBarComponent,
    SideContainer, 
    SideGrid,
    SideTable,
    SideRow,
    SideLink,
    Title,
    PageIndicator 
};