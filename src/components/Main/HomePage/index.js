import React from 'react';
import styled from 'styled-components';

import SearchBar from '../SearchBar';
import './index.css';

const FameHomePage = styled.div`
    display: flex;
    font-family: 'Secular One';
    background-color: #111111;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 290px;
`

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function HomePage() {
    return( 
        <FameHomePage>
            <SearchContainer>
                <SearchBarContainer>
                    <SearchBar
                    />
                </SearchBarContainer>
            </SearchContainer>
        </FameHomePage>
    );
}

export default HomePage;