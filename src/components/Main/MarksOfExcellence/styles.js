import styled from 'styled-components';
import { TableCell } from '@mui/material';

const MarksContainer = styled.div`
    display: flex;
    font-family: 'Nunito';
    background: linear-gradient(#141729, #212840, #101221);
    height: 100vh;
    background-size: 100%;
    margin-left: 20vw;
    margin: auto;
    flex-wrap: wrap;
`;

const MarksGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
    margin-left: 23.5vw;
    z-index: 96;
`;

const MarksTitle = styled.div`
    color: white;
    background: #101221;
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