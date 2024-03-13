import React, { useEffect, useState } from 'react';
import { GoGear } from "react-icons/go";

import {
    FameHomePage,
    HomeRow,
    HomeColumn,
    TopBox,
    MiddleBox,
    DashboardContainer,
    SettingsContainer,
    SummaryBox
} from './styles';

function HomePage() {
    const [marks, setMarks] = useState([]);

    const handleSettingsPopup = () => {
        
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function getMarks() {
            await fetch(`http://tank.lol/get/moe`, {
                method: 'POST'
            })
            .then((response) => response.json())
            .then((result) => {
                return result.data;
            });
        }

        //getMarks();
    }, []);

    return( 
        <FameHomePage>
            <HomeColumn>
                <HomeRow>
                    <DashboardContainer>
                        Dashboard
                    </DashboardContainer>
                    <SettingsContainer>
                        <GoGear />
                        Settings
                    </SettingsContainer>
                </HomeRow>
                <HomeRow>
                    <TopBox>

                    </TopBox>
                    <TopBox>

                    </TopBox>
                    <TopBox>

                    </TopBox>
                    <TopBox>
                        
                    </TopBox>
                </HomeRow>
                <HomeRow>
                    <MiddleBox>

                    </MiddleBox>
                    <SummaryBox>

                    </SummaryBox>
                </HomeRow>
                <HomeRow>
                    <MiddleBox>

                    </MiddleBox>
                    <SummaryBox>
                        
                    </SummaryBox>
                </HomeRow>
            </HomeColumn>
        </FameHomePage>
    );
}

export default HomePage;