import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputBase from '@mui/material/InputBase';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const SearchForm = styled.form`
    margin-left: 1rem;
`
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
`

const SearchInput = styled(InputBase)`
    width: 100%;
    font-family: 'Secular One' !important;
    color: #fff !important;
    padding-left: 20px;
    font-size: 16px;
`

function ClanMapSearch() {
    const [search, setSearch] = useState('');
    
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigation('/clanmap', { state: { clanName: search } });
    };

    return (
        <SearchContainer>
            <h1 style={{ color: '#fff', fontSize: 100 }}>
                    Clan Map Search
            </h1>
            <SearchForm onSubmit={handleSubmit}>
                <SearchBox>
                    <SearchInput
                        placeholder={'Enter Clan Tag'}
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </SearchBox>
            </SearchForm>
        </SearchContainer>
    );
}

export default ClanMapSearch;