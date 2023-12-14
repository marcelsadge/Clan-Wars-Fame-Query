import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';

const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: row;
    margin-left: 290px;
    background-color: #111111;
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
    width: 88vw;
    height: 70px;
    color: white;
    border-bottom: 1px solid #242c30;
    border-right: 1px solid #242c30;
    font-weight: bold;
`;

const SearchInput = styled(InputBase)`
    width: 100%;
    font-family: Segoe UI !important;
    color: #fff !important;
    padding-left: 60px;
    font-size: 16px;
`;

const ServerButton = styled(Button)`
    font-family: Segoe UI !important;
    font-size: 1rem !important;
    color: #111111;
    background-color: ${({ $option, $backgroundColor }) => ($option ? $backgroundColor : 'lightgray')} !important;
    padding: 2px 10px !important;
    &:hover {
        background-color: #28b48c !important;
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