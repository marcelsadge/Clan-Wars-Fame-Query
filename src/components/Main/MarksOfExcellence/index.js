import React, { useEffect } from 'react';

import { MarksContainer } from './styles';

function MarksOfExcellence() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return( 
        <MarksContainer>

        </MarksContainer>
    );
}

export default MarksOfExcellence;