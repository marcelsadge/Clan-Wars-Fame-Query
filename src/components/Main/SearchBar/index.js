import React, { useEffect, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { GoSearch } from 'react-icons/go';
import { ButtonGroup } from '@material-ui/core';

import {
    SearchContainer,
    ButtonContainer,
    SearchForm,
    SearchBox,
    SearchInput,
    ServerButton
} from './styles';

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
            navigation(generatePath('/player/:name', { name: search }), { state: { playerName: search } });
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