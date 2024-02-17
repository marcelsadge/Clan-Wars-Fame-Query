import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CampaignHomePage from './components/Campaigns/CampaignHomePage';

import ClanMapSearch from './components/Main/ClanMapSearch';
import ClanMap from './components/Main/ClanMap';

import Blog from './components/Main/Blog';
import Info from './components/Main/Info';
import Trends from './components/Main/Trends';
import HomePage from './components/Main/HomePage';
import PlayerStatsPage from './components/Main/PlayerPage';
import Footer from './components/Main/Footer';
import DataBar from './components/DataBar';
import SideBar from './components/Main/SideBar';
import SearchBar from './components/Main/SearchBar';
import MarksOfExcellence from './components/Main/MarksOfExcellence';
import PageContext from './components/Context/pagecontext';
import PositionContext from './components/Context/positioncontext';

import './index.css';
import { RecentProvider } from './components/Context/recentcontext'

function Core() {
  const [currContext, setContext] = useState("/");
  const [currPosition, setPosition] = useState("0px");

  return (
    <PageContext.Provider value={{currContext, setContext}}>
      <PositionContext.Provider value={{currPosition, setPosition}}>
        <RecentProvider>
          <Router>
              <SideBar />
              <SearchBar />
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/marks' element={<MarksOfExcellence />} />
                  <Route path='/stats' element={<Trends />} />
                  <Route path='/clanmap' element={<ClanMap />} />
                  <Route path='/clanmapsearch' element={<ClanMapSearch />} />
                  <Route path='/player/:name' element={<PlayerStatsPage />} />
                  <Route path='/blog' element={<Blog />} />
                  <Route path='/campaignstats' element={<CampaignHomePage />} />
                  <Route path='/Info' element={<Info />} />
              </Routes>
              <Footer />
          </Router>
        </RecentProvider>
      </PositionContext.Provider>
    </PageContext.Provider>
  );
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<Core />);