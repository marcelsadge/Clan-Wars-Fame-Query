import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { ClipLoader } from 'react-spinners';

import { getPlayerId, getPlayerStatistics, getTankNameById } from '../../../api/apicalls';
import {
    Loader,
    PlayerPage,
    TextFont,
    TopStats,
    StatsContainer,
    RecentStats,
    NameContainer
} from './styles';

function PlayerStatsPage() {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [wn8, setWn8] = useState([]);
    const [tankData, setTankData] = useState([]);

    const location = useLocation();

    const getPlayerData = async () => {
        const player = await getPlayerId(location.state.playerName.toLowerCase());
        setName(player[1]);
        await getPlayerStatistics(player[0])
            .then((response) => {
                console.log(response);
                setWn8(response['overallWn8']);
                setTankData(response['tankData']);
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
                    <TopStats>
                        <NameContainer>
                            {name}
                        </NameContainer>
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
                            {Math.floor(wn8)}
                        </StatsContainer>
                        <StatsContainer>
                            <TextFont $font={'18px'}>
                                Win Rate: <br />
                            </TextFont>
                            {Math.floor(wn8)}
                        </StatsContainer>
                    </TopStats>
                </PlayerPage>
            }
        </div>
    );

}

export default PlayerStatsPage;