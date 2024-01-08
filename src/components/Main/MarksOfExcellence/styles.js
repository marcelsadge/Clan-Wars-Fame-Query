import styled from 'styled-components';
import { TableCell } from '@mui/material';

const MarksContainer = styled.div`
    display: flex;
    font-family: 'Nunito';
    background: linear-gradient(#141729, #212840, #101221);
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: 350px;
    flex-wrap: wrap;
`;

const MarksGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20vh;
    margin-left: 12vw;
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