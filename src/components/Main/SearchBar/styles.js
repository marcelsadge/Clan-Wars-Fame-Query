import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { Button } from '@material-ui/core';

const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20vw;
    width: 72%;
    z-index: 97;
`;

const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    margin-right: 14vw;
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
    width: 85%;
    height: 70px;
    border-bottom: 1px solid #242c30;
    border-right: 1px solid #242c30;
    font-weight: bold;
    z-index: 97;
    background: rgb(20, 23, 41, 0.85)
`;

const SearchInput = styled(InputBase)`
    font-family: Nunito !important;
    color: white !important;
    padding-left: 60px;
    font-size: 16px;
    width: 70vw;
`;

const ServerButton = styled(Button)`
    font-family: Nunito !important;
    font-size: 1rem !important;
    font-weight: bold !important;
    background-color: ${({ $option, $backgroundColor }) => ($option ? $backgroundColor : '#E63946')} !important;
    padding: 2px 20px !important;
    &:hover {
        background-color: #87F5FB !important;
    }
    z-index: 98;
`;

export {
    SearchContainer,
    ButtonContainer,
    SearchForm,
    SearchInput,
    SearchBox,
    ServerButton
};