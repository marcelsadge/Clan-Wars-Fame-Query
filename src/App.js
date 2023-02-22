import { useEffect, useState } from 'react';
import { getPlayerFamePoints, getPlayersFamePoints, getPlayerId, getFameCutoff, getAllClanMemberIds, getAllPlayersFameFromClan, getClanId, getTankClanCount } from './api/ApiCalls';

import './App.css';

import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import JsonDataDisplay from './ComponentDisplay';
import JsonDataDisplay2 from './ComponentDisplay2';

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
  const [checkLocal, setLocal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [player, setPlayer] = useState('');
  const [cutoff, setCutoff] = useState('');

  const [clanLoading, setClanLoading] = useState(false);
  const [clanSearch, setClanSearch] = useState('');
  const [clanPlayerFame, setClanPlayerFame] = useState([]);

  const [tankLoading, setTankLoading] = useState(false);
  const [tankCount, setTankCount] = useState([]);

  const findPlayer = async () => {
    const playerId = await getPlayerId(search);
    const playerStats = await getPlayerFamePoints(playerId[0]);
    setPlayer(search);
    setQuery(playerStats);
  };

  const findClan = async () => {
    setClanLoading(true);
    let final = [];
    const clanId = await getClanId(clanSearch.toUpperCase());
    const arrayOfPlayers = await getAllClanMemberIds(clanId);
    const allFame = await getAllPlayersFameFromClan(arrayOfPlayers);
    for (const elem in allFame) {
      if (allFame[elem]["rank"] != null) {
        if (allFame[elem]["fame"] > cutoff) {
          allFame[elem]["has_tank"] = "Yes";
        } else {
          allFame[elem]["has_tank"] = "No";
        }
        final.push(allFame[elem]);
      }
    }
    final.sort((a,b) => a.rank - b.rank);
    setClanPlayerFame(final);
    setLocal(true);
    localStorage.setItem('clan', clanSearch.toUpperCase());
    localStorage.setItem('clans', JSON.stringify(final));
    setClanLoading(false);
  };

  const updateClanTankList = async () => {
    setTankLoading(true);
    const tank_counts = await getTankClanCount(cutoff);
    localStorage.setItem('tank_count', JSON.stringify(tank_counts));
    setTankCount(tank_counts);
    setTankLoading(false);
  };

  const updateClanData = async () => {
    if (localStorage.getItem('clan') != null) {
      setClanSearch(localStorage.getItem('clan'));
      await findClan();
    }
  };

  async function getFameCutoff(cutoff) {
    if (localStorage.getItem('clan') != null) {
      console.log(checkLocal);
      setLocal(true);
    }
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

    if (localStorage.getItem('clans') == null) {
      setClanPlayerFame([]);
    } else {
      setClanPlayerFame(JSON.parse(localStorage.getItem('clans')));
    }

    setLoading(false);

    setTankLoading(true);

    if (localStorage.getItem('tank_count') == null) {
      const tank_counts = await getTankClanCount(prev["fame_points"]);
      setTankCount(tank_counts);
      localStorage.setItem('tank_count', JSON.stringify(tank_counts));
    } else {
      setTankCount(JSON.parse(localStorage.getItem('tank_count')));
    }

    setTankLoading(false);

    return prev["fame_points"];
  }

  useEffect(() => {
    setLoading(true);
    getFameCutoff(2250);
  }, []);

  useEffect(() => {
  }, [cutoff, query, clanPlayerFame, tankCount]);

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
          <div className='Search-Button'>
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
        </div>
        <div className='player-result-box'>
          { clanLoading ? <h1 style={{color : "white"}}>Loading... </h1> :
          checkLocal &&
            <div className='tank-count-container'>
              <button onClick={async () => {
                await updateClanData();
                }}>
                Update Current Clan
              </button>
              <JsonDataDisplay fameData={clanPlayerFame}/>
            </div>
          }
        </div>
        <div className='clan-tank-count-box'>
          <h1 className='header-name'>
            Clan Tank Count:
          </h1>
          { tankLoading ? <h1 style={{color : "white"}}>Loading... </h1> :
            <div className='tank-count-container'>
              <div className='tank-count-container'>
                <button onClick={async () => {
                  await updateClanTankList();
                  }}>
                  Update Tanks
                </button>
              </div>
              <div className='tank-count-container'>
                <JsonDataDisplay2 fameData={tankCount}/>
              </div>
            </div>
          }
        </div>
      </div>}
    </div>
    
  );
  
}

export default App;