import React from 'react';
import styled from 'styled-components';

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

const IntroContainer = styled.div`
    display: flex;
    background-color: #181c1c;
    margin-left: 50px;
    margin-top: 50px;
    margin-right: 50px;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    color: #fff;
    font-size: 50px;
`

function HomePage() {
    return( 
        <FameHomePage>
            <IntroContainer>
                Welcome to the alpha website of Project Fame!
            </IntroContainer>
        </FameHomePage>
    );
}

export default HomePage;