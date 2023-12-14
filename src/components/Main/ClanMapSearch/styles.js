import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 290px;
`;

const Box = styled.div`
    margin-top: 100px;
`;

const SearchForm = styled.form`
    margin-left: 1rem;
`;

const SearchBox = styled.div`
    padding: 5px 4px;
    display: flex;
    align-items: center;
    width: 700px;
    height: 50px;
    background-color: #242729;
    color: white;
    :hover {
        background-color: #222527;
        box-shadow: 0px 1px 3px rgba(20, 20, 50, 1) ;
    }
`;

const SearchInput = styled(InputBase)`
    width: 100%;
    font-family: Segoe UI !important;
    color: #fff !important;
    padding-left: 20px;
    font-size: 16px;
`;

export {
    SearchContainer,
    Box,
    SearchForm,
    SearchBox,
    SearchInput
};