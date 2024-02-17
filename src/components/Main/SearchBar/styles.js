import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { Button } from '@material-ui/core';

const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    background: #36394c;
    position: fixed;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-left: 15vw;
    width: 85vw;
    height: 64px;
    z-index: 97;
`;

const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    margin-right: 5vw;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    right: 0;
`;

const SearchForm = styled.form`
`;

const SearchBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 400px;
    height: 48px;
    border-bottom: 1px solid #242c30;
    font-weight: bold;
    background: #434658;
    border-radius: 50px;
    z-index: 97;
`;

const SearchInput = styled(InputBase)`
    font-family: 'Quicksand', sans-serif !important;
    color: white !important;
    padding-left: 60px;
    font-size: 16px;
    width: 70vw;
    opacity: 0.9;
`;

const ServerButton = styled(Button)`
    font-family: 'Quicksand', sans-serif !important;
    font-size: 1rem !important;
    font-weight: bold !important;
    background-color: ${({ $option, $backgroundColor }) => ($option ? $backgroundColor : '#6886b4')} !important;
    padding: 2px 20px !important;
    transition: 0.3s;
    &:hover {
        background-color: #626ed4 !important;
        transition: 0.3s;
    }
    z-index: 96;
`;

export {
    SearchContainer,
    ButtonContainer,
    SearchForm,
    SearchInput,
    SearchBox,
    ServerButton
};