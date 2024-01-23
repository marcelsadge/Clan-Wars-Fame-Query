import styled from 'styled-components';

const SideBarComponent = styled.div`
    background: linear-gradient(#141729, #101221);
    font-family: 'Nunito';
    position: fixed;
    justify-content: center;
    text-align: center;
    width: 20vw;
    height: 100vh;
    border-right: 1px solid #242c30;
    z-index: 99;
`;

const SideContainer = styled.div`
    display: flex;
    height: 70vh;
    flex-direction: column;
    justify-content: center;
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

const SideTableMini = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
`;

const SideRow = styled.div`
    display: flex;
    padding: 9px;
    column-gap: 10px;
    width: 15vw;
    margin-left: 3vw;
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        transform: scaleX(1.1) scaleY(1.1);
        transition: 0.3s;
    }
`

const SideLink = styled.a`
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
`;

const Title = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    padding: 21px;
    text-align: center;
`;

const PageIndicator = styled.div`
    position: fixed;
    background: #de3c4b;
    margin-left: 2vw;
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
    SideTableMini,
    SideRow,
    SideLink,
    Title,
    PageIndicator 
};