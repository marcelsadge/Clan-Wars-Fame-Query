import React, { useEffect } from 'react';

import { MarksContainer, IntroContainer } from './styles';

function MarksOfExcellence() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return( 
        <MarksContainer>
            <IntroContainer>
                Welcome to the Marks of Excellence Page!
            </IntroContainer>
        </MarksContainer>
    );
}

export default MarksOfExcellence;