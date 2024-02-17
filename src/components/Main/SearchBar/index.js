import React, { useEffect, useState, useContext } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { GoSearch } from 'react-icons/go';
import { ButtonGroup } from '@material-ui/core';

import {
    SearchContainer,
    ButtonContainer,
    SearchGroup,
    SearchForm,
    SearchBox,
    SearchInput,
    ServerButton,
} from './styles';
import { RecentContext } from '../../Context/recentcontext';

function SearchBar() {
    const [server, setServer] = useState('1');
    const [type, setType] = useState('1');
    const [search, setSearch] = useState('');
    const [isDesktop, setDesktop] = useState(window.innerWidth > 800);
    const {recentSearches, setRecentSearches} = useContext(RecentContext);

    const onUpdateSearches = (value) => {
        let arr = recentSearches;
        if (arr.length >= 3) {
            arr.shift();
        }
        arr.pushback(value);
        setRecentSearches(arr);
    };

    const handleWindowSize = () => {
        setDesktop(window.innerWidth > 800);
    };
    
    const navigation = useNavigate();

    const serverArray = ['NA', 'EU', 'ASIA'];
    //const typeArray = ['PLYR', 'CLAN'];

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

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
        return () => window.removeEventListener("resize", handleWindowSize);
    });

    return (
        <SearchContainer>
            <GoSearch style={{ position: 'absolute', marginRight: '340px', zIndex: '98' }} color='#778890' size='1.3rem' />
            <SearchForm onSubmit={handleSubmit}>
                <SearchBox>
                    <SearchInput
                        placeholder={ type === '1' ? `Search ${serverArray[parseInt(server) - 1]} Player` : `Search ${serverArray[parseInt(server) - 1]} Clan`}
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </SearchBox>
            </SearchForm>
            {isDesktop ? (
            <ButtonContainer>
                <ButtonGroup>
                    {serverOptions.map((svr, i) => (
                        <ServerButton
                            key={i}
                            $backgroundColor={'#626ed4'}
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
                            $backgroundColor={'#626ed4'}
                            $option={type === t.value}
                            onClick={() => setType(t.value)}
                        >
                            {t.type}
                        </ServerButton>
                    ))}
                </ButtonGroup>
            </ButtonContainer>
            ) : <></>}
        </SearchContainer>
    );
}

export default SearchBar;