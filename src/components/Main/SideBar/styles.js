import styled from 'styled-components';

const SideBarComponent = styled.div`
    background: #2a3142;
    font-family: 'Quicksand', sans-serif;
    position: fixed;
    justify-content: center;
    width: 15vw;
    height: 100vh;
    z-index: 99;
`;

const SideContainer = styled.div`
    display: flex;
    height: 500px;
    flex-direction: column;
    justify-content: center;
`;

const MainGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
    align-items: center;
`;

const SideGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 
                            minmax(235px, 1fr));
    grid-gap: 10px;
`;

const SideTable = styled.div`
    display: flex;
    flex-direction: column;
`;

const SideTableMini = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 75px;
`;

const SideRow = styled.div`
    display: flex;
    padding: 9px;
    column-gap: 10px;
    width: 250px;
    margin-left: 20px;
    transition: 0.3s;
    &:hover {
        cursor: pointer;
        transform: scaleX(1.1) scaleY(1.1);
        transition: 0.3s;
    }
    z-index: 99;
`;

const TitleRow = styled.div`
    display: flex;
    align-items: center;
    width: 15vw;
    cursor: pointer;
`;

const SubTitleRow = styled.div`
    display: flex;
    font-size: 20px;
    justify-content: center;
    color: white;
    width: 15vw;
    height: 1px;
    margin-top: 15px;
`;

const SideLink = styled.a`
    color: white;
    opacity: 0.9;
    font-size: 16px;
    text-decoration: none;
    z-index: 99;
`;


const Title = styled.div`
    display: flex;
    color: white;
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    width: 15vw;
    opacity: 0.9;
`;

const PageIndicator = styled.div`
    position: fixed;
    background: #2f374a;
    width: 15vw;
    margin-top: ${(props) => props.currPosition};
    padding: 19px;
    padding-left: 2px;
    padding-right: 1px;
    z-index: 1;
`;

export { 
    SideBarComponent,
    SideContainer, 
    SideGrid,
    SideTable,
    SideTableMini,
    SideRow,
    SubTitleRow,
    TitleRow,
    SideLink,
    Title,
    PageIndicator,
    MainGroup
};