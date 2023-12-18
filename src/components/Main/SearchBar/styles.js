import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';
import { Button } from '@material-ui/core';

const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 50vw;
    gap: 10px;
`;

const SearchGroup = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
    right: 0;
`;

const SearchForm = styled.form`
`;

const SearchBox = styled.div`
    padding: 5px 4px;
    margin-top: 30px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    border-radius: 15px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    font-weight: bold;
    z-index: 98;
`;

const SearchPopup = styled.div`
    padding: 5px 4px;
    margin-top: 30px;
    margin-left: 20px;
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    border-radius: 15px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    font-weight: bold;
`;

const SearchInput = styled(InputBase)`
    position: fixed;
    font-family: Nunito !important;
    color: white !important;
    padding-left: 60px;
    width: 300px;
    font-size: 16px;
`;

const ServerButton = styled(Button)`
    font-family: Nunito !important;
    font-size: 1rem !important;
    background-color: ${({ $option, $backgroundColor }) => ($option ? $backgroundColor : 'white')} !important;
    padding: 1px 5px !important;
    &:hover {
        background-color: #de3c4b !important;
    }
`;

const Modal = styled.div`
    position: absolute;
    top: 50px;
    right: calc(50% - 100px)
    border: 1px solid white;
    padding: 20px;
    min-height: 200px;
`;

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 98;
`;

export {
    SearchContainer,
    ButtonContainer,
    SearchGroup,
    SearchPopup,
    SearchForm,
    SearchInput,
    SearchBox,
    ServerButton,
    Modal,
    ModalContainer
};