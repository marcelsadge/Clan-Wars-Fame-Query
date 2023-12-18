import styled from 'styled-components';

const SideBarComponent = styled.div`
    background: linear-gradient(#141729, #101221);
    font-family: 'Nunito';
    position: fixed;
    height: 100%;
    width: 350px;
    border-right: 1px solid #242c30;
`;

const SideContainer = styled.div`
    display: flex;
    margin-top: 100%;
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
    width: 300px;
    margin-left: 50px;
    &:hover {
        background: linear-gradient(to right, #141729 99%, #de3c4b 1%);
        cursor: pointer;
        opacity: 0.8;
        transition: 1s;
    }
`
const SideLink = styled.a`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;

const Title = styled.div`
    color: white;
    font-size: 24px;
    font-weight: bold;
    padding: 21px;
    text-align: center;
`;

const PageIndicator = styled.div`
    position: absolute;
    background: #de3c4b;
    margin-left: 347px;
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