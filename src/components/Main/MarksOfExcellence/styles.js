import styled from 'styled-components';
import { TableCell } from '@mui/material';

const MarksContainer = styled.div`
    display: flex;
    font-family: 'Nunito';
    background: #252735;
    height: 100vh;
    width: 84vw;
    background-size: 100%;
    margin-left: 15vw;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    flex-wrap: wrap;
`;

const MarksGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    z-index: 96;
`;

const MarksTitle = styled.div`
    color: white;
    background: #626ed4;
    font-size: 24px;
    font-weight: bold;
    padding: 21px;
    text-align: center;
`;

const CustomMarksCell = styled(TableCell)`

`;

export {
    MarksContainer,
    MarksGroup,
    MarksTitle,
    CustomMarksCell
};