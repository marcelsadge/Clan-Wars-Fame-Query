import React, { useEffect } from 'react';

import {
    FameHomePage,
    HomeRow,
    HomeColumn,
    IntroContainer,
    TopRightBox,
    MiddleBox,
    MiddleRightBox,
    BottomBox
} from './styles';

function HomePage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return( 
        <FameHomePage>
            <HomeColumn>
                <HomeRow>
                    <IntroContainer>
                        Intro Box
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
        </FameHomePage>
    );
}

export default HomePage;