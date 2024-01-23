import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    SearchContainer,
    Box,
    SearchForm,
    SearchBox,
    SearchInput
} from './styles';

function ClanMapSearch() {
    const [search, setSearch] = useState('');
    
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigation('/clanmap', { state: { clanName: search } });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SearchContainer>
            <Box>
                <h1 style={{ color: '#fff', fontSize: 100 }}>
                        Clan Map Search
                </h1>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchBox>
                        <SearchInput
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </SearchBox>
                </SearchForm>
            </Box>
        </SearchContainer>
    );
}

export default ClanMapSearch;