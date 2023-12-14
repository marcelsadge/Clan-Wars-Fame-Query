import { useEffect, useState } from 'react';
import { 
  getPlayerFamePoints, 
  getPlayersFamePoints, 
  getPlayerId, 
  getFameCutoff, 
  getAllClanMemberIds, 
  getAllPlayersFameFromClan, 
  getClanId, 
  getTankClanCount, 
  getAllClanIds,
  getAvailableClans} from '../../../api/apicalls';

import { ClipLoader } from 'react-spinners';
import CampaignClanDisplay from '../CampaignClanDisplay/index';
import CampaignTankCountDisplay from '../CampaignTankCountDisplay/index';
import SearchBar from '../CampaignSearchBar/index';

import {
  Loader,
  CampaignStatsPage,
  IntroContainer
} from './styles';

const api_key = 'a1ade2adb0a147e81c3115c498bbb1c7';
const event_id = 'we_2023';
const front_id = 'we_2023_bg';

function CampaignHomePage() {
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

  const findClan = async (input) => {
    setClanLoading(true);
    let final = [];
    const clanId = await getClanId(input.toUpperCase());
    const arrayOfPlayers = await getAllClanMemberIds(clanId);
    const allFame = await getAllPlayersFameFromClan(arrayOfPlayers);
    for (const elem in allFame) {
      if (allFame[elem]["rank"] != null) {
        if (allFame[elem]["fame"] > cutoff) {
          allFame[elem]["has_tank"] = "Y";
        } else {
          allFame[elem]["has_tank"] = "N";
        }
        final.push(allFame[elem]);
      }
      allFame[elem]["Points/Battles"] = (allFame[elem]["fame"] / allFame[elem]["battles"]).toFixed(2);
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
      await findClan(localStorage.getItem('clan'));
    }
  };

  async function getFameCutoff(cutoff) {
    if (localStorage.getItem('clan') != null) {
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

    if (localStorage.getItem('clan') != null) {
      setLocal(true);
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
    <CampaignStatsPage>
      <IntroContainer>
        Sorry! This feature is only available during campaign season. Check back soon!
      </IntroContainer>
    </CampaignStatsPage>
    /* 
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
          <h1 className='header-name'>
            Cutoff: 
            &nbsp;{cutoff}
          </h1>
        </div>
        <div className='Search-Button'>
          <h1 className='header-name'>
            Player Search:
          </h1>
          <SearchBar search={search} setSearch={setSearch} placeholder={"Player Name"}/>
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
            <SearchBar search={clanSearch} setSearch={setClanSearch} placeholder={"Clan Name"}/>
            <button onClick={async () => {
              await findClan(clanSearch)
              }}>
              Find Clan
            </button>
          </div>
        </div>
        <div className='player-result-box'>
          { clanPlayerFame && clanLoading ? 
          <h1 style={{color : "white", "font-size" : "20px" }}>
            Loading... 
          </h1> :
          checkLocal &&
            <div className='tank-count-container'>
              <button onClick={async () => {
                await updateClanData();
                }}>
                Update Current Clan
              </button>
              <CampaignClanDisplay fameData={clanPlayerFame}/>
            </div>
          }
        </div>
        <div className='clan-tank-count-box'>
          <h1 className='header-name'>
            Clan Tank Count:
          </h1>
          { tankLoading ? 
            <h1 style={{color : "white", "font-size" : "20px" }}>
              Loading... 
            </h1> :
            <div className='tank-count-container'>
              <div className='tank-count-container'>
                <button onClick={async () => {
                  await updateClanTankList();
                  }}>
                  Update Tanks
                </button>
              </div>
              <div className='tank-count-container'>
                <CampaignTankCountDisplay fameData={tankCount}/>
              </div>
            </div>
          }
        </div>
      </div>}
    </div>
    */
  );
  
}

export default CampaignHomePage;