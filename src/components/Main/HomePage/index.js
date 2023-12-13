import React from 'react';
import styled from 'styled-components';

import './index.css';

const FameHomePage = styled.div`
    display: flex;
    font-family: 'Segoe UI';
    background-color: #111111;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 290px;
    flex-wrap: wrap;
`

const HomeRow = styled.div`
    display: flex;
    flex-direction: row;
`

const HomeColumn = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`

const IntroContainer = styled.div`
    background-color: #181c1c;
    margin-top: 100px;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    color: #fff;
    font-size: 50px;
`

const TopRightBox = styled.div`
    background-color: #181c1c;
    margin-top: 100px;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 600px;
    height: 115px;
    color: #fff;
    font-size: 25px;
`

const MiddleBox = styled.div`
    background-color: #181c1c;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 450px;
    height: 300px;
    color: #fff;
    font-size: 25px;
`

const MiddleRightBox = styled.div`
    background-color: #181c1c;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    height: 525px;
    color: #fff;
    font-size: 25px;
`

const BottomBox = styled.div`
    background-color: #181c1c;
    margin-left: 25px;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    height: 200px;
    color: #fff;
    font-size: 25px;
`

function HomePage() {
    return( 
        <FameHomePage>
            <HomeColumn>
                <HomeRow>
                    <IntroContainer>
                        Welcome to !
                    </IntroContainer>
                </HomeRow>
                <HomeRow>
                    <MiddleBox>
                        Middle Left Box
                    </MiddleBox>
                    <MiddleBox>
                        Middle Right Box
                    </MiddleBox>
                </HomeRow>
                <HomeRow>
                    <BottomBox>
                        Bottom Box
                    </BottomBox>
                </HomeRow>
            </HomeColumn>
            <HomeColumn>
                <HomeRow>
                    <TopRightBox>
                        Top right box
                    </TopRightBox>
                </HomeRow>
                <HomeRow>
                    <MiddleRightBox>
                        Middle Right Box
                    </MiddleRightBox>
                </HomeRow>
            </HomeColumn>
        </FameHomePage>
    );
}

export default HomePage;