import React from 'react';
import styled from 'styled-components';

const MarksContainer = styled.div`
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
`

function MarksOfExcellence() {
    return( 
        <MarksContainer>
            <IntroContainer>
                Welcome to the Marks of Excellence Page!
            </IntroContainer>
        </MarksContainer>
    );
}

export default MarksOfExcellence;