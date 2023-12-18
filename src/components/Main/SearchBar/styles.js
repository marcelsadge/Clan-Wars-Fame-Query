import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { Button } from '@material-ui/core';

const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: row;
    background: #141729;
    margin-left: 350px;
    width: 90%;
`;

const ButtonContainer = styled.div`
    position: absolute;
    margin-right: 150px;
    right: 0;
`;

const SearchForm = styled.form`
`;

const SearchBox = styled.div`
    padding: 5px 4px;
    position: relative;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 70px;
    border-bottom: 1px solid #242c30;
    border-right: 1px solid #242c30;
    font-weight: bold;
`;

const SearchInput = styled(InputBase)`
    width: 100%;
    font-family: Segoe UI !important;
    color: #b7abe3 !important;
    padding-left: 60px;
    font-size: 16px;
`;

const ServerButton = styled(Button)`
    font-family: Segoe UI !important;
    font-size: 1rem !important;
    background-color: ${({ $option, $backgroundColor }) => ($option ? $backgroundColor : '#E63946')} !important;
    padding: 2px 20px !important;
    &:hover {
        background-color: #87F5FB !important;
    }
`;

export {
    SearchContainer,
    ButtonContainer,
    SearchForm,
    SearchInput,
    SearchBox,
    ServerButton
};