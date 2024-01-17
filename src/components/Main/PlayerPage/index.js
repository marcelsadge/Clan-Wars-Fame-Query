import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ClipLoader } from 'react-spinners';

import { calculateOverallWinRate, getPlayerId, getPlayerStatistics, getTankNameById, getClanFromPlayer, getClanEmblem } from '../../../api/apicalls';
import {
    Loader,
    PlayerPage,
    TextFont,
    TopStats,
    StatsContainer,
    RecentStats,
    NameContainer,
    GeneralContainer,
    BadgeImage,
    NameGroup
} from './styles';

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
        <div>
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
                        <GeneralContainer>
                            <NameGroup>
                                <BadgeImage />
                                <NameContainer>
                                    {name}
                                </NameContainer>
                                <img src={clanEmblem} width={'120px'} height={'110px'} />
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
                                    {Math.ceil(wn8)}
                                </StatsContainer>
                                <StatsContainer>
                                    <TextFont $font={'18px'}>
                                        Win Rate: <br />
                                    </TextFont>
                                    {wr}
                                </StatsContainer>
                            </RecentStats>
                        </GeneralContainer>
                </PlayerPage>
            }
        </div>
    );

}

export default PlayerStatsPage;