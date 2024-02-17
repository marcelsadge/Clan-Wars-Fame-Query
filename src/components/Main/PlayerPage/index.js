import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ClipLoader } from 'react-spinners';

import { calculateOverallWinRate, getPlayerId, getPlayerStatistics, getTankNameById, getClanFromPlayer, getClanEmblem } from '../../../api/apicalls';
import {
    Loader,
    PlayerPage,
    TextFont,
    StatsContainer,
    RecentStats,
    NameContainer,
    GeneralContainer,
    NameGroup,
    HoverContainer,
    TopGeneralContainer,
    TopMiddleContainer,
    EmptyContainer
} from './styles';

import {
    HomeRow,
    HomeColumn,
    TopBox,
    MiddleBox,
    DashboardContainer,
    SummaryBox,
    SettingsContainer
} from './styles';
import { GoGear } from 'react-icons/go';

function PlayerStatsPage() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [wn8, setWn8] = useState([]);
    const [wr, setWr] = useState([]);
    const [clan, setClan] = useState([]);
    const [clanEmblem, setClanEmblem] = useState([]);
    const [tankData, setTankData] = useState([]);

    const location = useLocation();

    const getPlayerData = async () => {
        const player = await getPlayerId(location.state.playerName.toLowerCase());
        const clan = await getClanFromPlayer(player[0]);
        setClanEmblem(await getClanEmblem(clan));
        setName(player[1]);
        setClan(clan);
        await getPlayerStatistics(player[0])
            .then((response) => {
                console.log(response);
                setWn8(response['overallWn8']);
                setTankData(response['tankData']);
            });
        await calculateOverallWinRate(player[0])
            .then((response) => {
                console.log(response);
                setWr(response);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (!localStorage.getItem("1")) {
            getTankNameById();
        }
        setLoading(true);
        getPlayerData();
    }, []);

    return (
        <EmptyContainer>
            {loading ? 
                <Loader>
                    <ClipLoader
                        size={150}
                        color={'white'}
                        loading={loading}
                    />
                </Loader>
                :
                <PlayerPage>
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
                </PlayerPage>
            }
        </EmptyContainer>
    );

}

export default PlayerStatsPage;

/*
<GeneralContainer>
                        <TopGeneralContainer>
                            <TopMiddleContainer>
                                <NameGroup>
                                    <NameContainer>
                                        {name}
                                    </NameContainer>
                                </NameGroup>
                                <RecentStats>
                                    <StatsContainer>
                                        <TextFont $font={'18px'}>
                                            Recent WN8: <br />
                                        </TextFont>
                                        ---
                                    </StatsContainer>
                                    <StatsContainer>
                                        <TextFont $font={'18px'}>
                                            Recent Win Rate: <br />
                                        </TextFont>
                                        ---
                                    </StatsContainer>
                                    <StatsContainer>
                                        <TextFont $font={'18px'}>
                                            Overall WN8: <br />
                                        </TextFont>
                                        <TextFont $font={'16px'}>
                                            {Math.ceil(wn8)}
                                        </TextFont>
                                    </StatsContainer>
                                    <StatsContainer>
                                        <TextFont $font={'18px'}>
                                            Win Rate: <br />
                                        </TextFont>
                                        <TextFont $font={'16px'}>
                                            {wr}
                                        </TextFont>
                                    </StatsContainer>
                                </RecentStats>
                            </TopMiddleContainer>
                        </TopGeneralContainer>
                    </GeneralContainer>
                    */