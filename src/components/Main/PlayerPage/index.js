import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ClipLoader } from 'react-spinners';

import { calculateOverallWinRate, getPlayerId, getPlayerStatistics, getTankNameById, getClanFromPlayer, getClanEmblem } from '../../../api/apicalls';
import {
    Loader,
    PlayerPage,
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
    const [wrColor, setWrColor] = useState("");
    const [wn8Color, setWn8Color] = useState("");

    const location = useLocation();

    const setWrColors = (val) => {
        if (val < 47) {
            return "black";
        } else if (val >= 47 && val < 48) {
            return "#5e0000";
        } else if (val >= 48 && val < 49) {
            return "#cd3333";
        } else if (val >= 49 && val < 50) {
            return "#d77900";
        } else if (val >= 50 && val < 51) {
            return "#d7b600";
        } else if (val >= 51 && val < 52) {
            return "#6d9521";
        } else if (val >= 52 && val < 53) {
            return "#4c762e";
        } else if (val >= 53 && val < 56) {
            return "#46a892";
        } else if (val >= 56 && val < 60) {
            return "#cd3333";
        } else if (val >= 60 && val < 65) {
            return "#83579d";
        } else {
            return "#5a3175";
        }
    };

    const setWn8Colors = (val) => {
        if (val < 500) {
            return "black";
        } else if (val >= 500 && val < 700) {
            return "#5e0000";
        } else if (val >= 700 && val < 900) {
            return "#cd3333";
        } else if (val >= 900 && val < 1000) {
            return "#d77900";
        } else if (val >= 1000 && val < 1200) {
            return "#d7b600";
        } else if (val >= 1200 && val < 1400) {
            return "#6d9521";
        } else if (val >= 1400 && val < 1600) {
            return "#4c762e";
        } else if (val >= 1600 && val < 2000) {
            return "#46a892";
        } else if (val >= 2000 && val < 2450) {
            return "#cd3333";
        } else if (val >= 2450 && val < 2850) {
            return "#83579d";
        } else if (val >= 2850 && val < 3500) {
            return "#5a3175";
        } else {
            return "#250840";
        }
    };

    useEffect(() => {
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