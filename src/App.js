import { useEffect, useState } from 'react';
import { getPlayerFamePoints, getPlayersFamePoints, getPlayerId, getFameCutoff } from './api/ApiCalls';

import './App.css';

import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

const api_key = 'a1ade2adb0a147e81c3115c498bbb1c7';
const event_id = 'we_2023';
const front_id = 'we_2023_bg';

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [player, setPlayer] = useState('');
  const [cutoff, setCutoff] = useState('');

  const [clanSearch, setClanSearch] = useState('');

  const findPlayer = async () => {
    const playerId = await getPlayerId(search);
    console.log(playerId);
    const playerStats = await getPlayerFamePoints(playerId[0]);
    setPlayer(search);
    setQuery(playerStats);
  };

  const findClan = async () => {
    
  };

  async function getFameCutoff(cutoff) {
    const page = Math.ceil(cutoff / 100);
    const fameCutoffPage = await fetch(`https://api.worldoftanks.com/wot/globalmap/eventaccountratings/?application_id=${api_key}&event_id=${event_id}&front_id=${front_id}&limit=100&page_no=${page}`, {
        method: 'GET'
    })
    .then((response) => response.json())
    .then((result) => {
        return result.data;
    });
    let prev = {};
    for (const elem in fameCutoffPage) {
        if (fameCutoffPage[elem]["award_level"] > cutoff) {
            setCutoff(prev["fame_points"]);
            break;
        }
        prev = fameCutoffPage[elem];
    }
    setLoading(false);
  }

  useEffect(() => { 
    setLoading(true);
    getFameCutoff(2250);
    
  }, []);

  useEffect(() => {
  }, [cutoff, query]);

  return (
    <div>
      { loading ? 
      <Loader>
        <ClipLoader
          size={150}
          color={'white'}
          loading={loading}
        />
      </Loader> : 
      <div className="Fame-Query-App">
        <div className="Fame-Query-Box">
          <h1 className='header-name-1'>
            Wot Fame
          </h1>
          <h1 className='header-name'>
            Current Fame Cutoff: 
            &nbsp;{cutoff}
          </h1>
        </div>
        <div className='Search-Button'>
          <input
          value={search}
          placeholder="Search Player"
          onChange={(event) => {
            setSearch(event.target.value);
          }}/>
          <button onClick={async () => {
            await findPlayer()
            }}>
            Find Fame
          </button>
        </div>
        <div className='player-result-box'>
          {query && 
            <div>
              <h1 className='header-name'>
                Player: 
                {player}
              </h1>
              <h1 className='header-name'>
                Fame: 
                {query.fame}
              </h1>
              <h1 className='header-name'>
                Rank: 
                {query.rank}
              </h1>
            </div>
          }
        </div>
        <div className='clan-result-box'>
          <h1 className='header-name'>
              Clan Search:
          </h1>
          <input
            value={clanSearch}
            placeholder="Search Clan"
            onChange={(event) => {
              setClanSearch(event.target.value);
          }}/>
          <button onClick={async () => {
            await findClan()
            }}>
            Find Clan
          </button>
        </div>
      </div>}
    </div>
    
  );
  
}

export default App;