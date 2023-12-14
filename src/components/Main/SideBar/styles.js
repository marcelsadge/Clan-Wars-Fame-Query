import styled from 'styled-components';

const SideBarComponent = styled.div`
    background-color: #111111;
    font-family: Segoe UI;
    position: fixed;
    height: 100%;
    width: 290px;
    border-right: 1px solid #242c30;
`;

const SideContainer = styled.div`
    display: flex;
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
    width: 260px;
    margin-left: 30px;
    &:hover {
        background-color: #28b48c;
        background: linear-gradient(to right, #111111 99%, #28b48c 1%);
        cursor: pointer;
    }
`
const SideLink = styled.a`
  color: #28b48c;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`;

const Title = styled.div`
    font-weight: normal;
    color: white;
    font-size: 24px;
    padding: 20px;
    text-align: center;
`;

const PageIndicator = styled.div`
    position: absolute;
    background: #28b48c;
    margin-left: 288px;
    margin-top: ${(props) => props.currPosition};
    padding: 20px;
    padding-left: 1px;
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