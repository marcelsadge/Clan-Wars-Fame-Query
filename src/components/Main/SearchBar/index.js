import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GoSearch } from 'react-icons/go';

import InputBase from '@mui/material/InputBase';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';

import './index.css';

const SearchContainer = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: row;
    margin-left: 290px;
    background-color: #111111;
    width: 100%;
`

const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    margin-left: 75%;
`

const SearchForm = styled.form`
`
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
`

const SearchInput = styled(InputBase)`
    width: 100%;
    font-family: Segoe UI !important;
    color: #fff !important;
    padding-left: 60px;
    font-size: 16px;
`

const ServerButton = styled(Button)`
font-family: Segoe UI !important;
    font-size: 1rem !important;
    color: #111111;
    background-color: ${({ $option, $backgroundColor }) => ($option ? $backgroundColor : 'gray')} !important;
    padding: 2px 15px !important;
    &:hover {
        background-color: #28b48c !important;
    }
`

function SearchBar() {
    const [server, setServer] = useState('1');
    const [type, setType] = useState('1');
    const [search, setSearch] = useState('');
    
    const navigation = useNavigate();

    const serverArray = ['NA', 'EU', 'ASIA'];
    const typeArray = ['PLYR', 'CLAN'];

    const serverOptions = [
        { server: 'NA', value: '1' },
        { server: 'EU', value: '2' },
        { server: 'ASIA', value: '3' },
    ];

    const typeOptions = [
        { type: 'PLYR', value: '1' },
        { type: 'CLAN', value: '2' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === '1') {
            navigation('/playerstat', { state: { playerName: search } });
        } else {
            navigation('/clanmap', { state: { clanName: search } });
        }
    };

    return (
        <SearchContainer>
            <GoSearch style={{ marginLeft: '25px', position: 'absolute' }} color='lightgray' size='1.5rem' />
            <SearchForm onSubmit={handleSubmit}>
                <SearchBox>
                    <SearchInput
                        placeholder={ type === '1' ? `Search ${serverArray[parseInt(server) - 1]} Player` : `Search ${serverArray[parseInt(server) - 1]} Clan`}
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </SearchBox>
            </SearchForm>
            <ButtonContainer>
                <ButtonGroup style={{ marginRight: '0.5em' }}>
                    {serverOptions.map((svr, i) => (
                        <ServerButton
                            key={i}
                            $backgroundColor={'#28b48c'}
                            $option={server === svr.value}
                            onClick={() => setServer(svr.value)}
                        >
                            {svr.server}
                        </ServerButton>
                    ))}
                </ButtonGroup>
                <ButtonGroup>
                    {typeOptions.map((t, i) => (
                        <ServerButton
                            key={i}
                            $backgroundColor={'#28b48c'}
                            $option={type === t.value}
                            onClick={() => setType(t.value)}
                        >
                            {t.type}
                        </ServerButton>
                    ))}
                </ButtonGroup>
            </ButtonContainer>
        </SearchContainer>
    );
}

export default SearchBar;