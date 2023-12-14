import styled from 'styled-components';

import InputBase from '@mui/material/InputBase';
import { Button } from '@material-ui/core';

import './index.css';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const SearchForm = styled.form`
    margin-left: 1rem;
`;

const SearchBox = styled.div`
    padding: 5px 4px;
    display: flex;
    align-items: center;
    width: 300px;
    height: 30px;
    background-color: #242729;
    color: white;
    :hover {
        background-color: #222527;
        box-shadow: 0px 1px 3px rgba(20, 20, 50, 1) ;
    }
`;

const SearchInput = styled(InputBase)`
    width: 100%;
    font-family: 'Secular One' !important;
    color: #fff !important;
    padding-left: 20px;
    font-size: 16px;
`;

const ServerButton = styled(Button)`
    font-family: 'Secular One' !important;
    font-size: 1rem !important;
    color: #111111;
    background-color: ${({ $option, $backgroundColor }) => ($option ? $backgroundColor : '#fff')} !important;
    padding: 2px 15px !important;
    &:hover {
        background-color: gray !important;
    }
`;

export {
    SearchContainer,
    ButtonContainer,
    SearchForm,
    SearchBox,
    SearchInput,
    ServerButton
};