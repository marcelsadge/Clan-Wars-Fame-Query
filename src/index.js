import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CampaignHomePage from './components/Campaigns/CampaignHomePage';

import ClanMapSearch from './components/Main/ClanMapSearch';
import ClanMap from './components/Main/ClanMap';

import HomePage from './components/Main/HomePage';
import PageHeader from './components/Main/PageHeader';
import PlayerStatsPage from './components/Main/PlayerPage';
import Footer from './components/Main/Footer';
import SideBar from './components/Main/SideBar';
import SearchBar from './components/Main/SearchBar';
import MarksOfExcellence from './components/Main/MarksOfExcellence';

function Core() {
  return (
    <Router>
      <SideBar />
      <SearchBar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/marks' element={<MarksOfExcellence />} />
          <Route path='/clanmapsearch' element={<ClanMapSearch />} />
          <Route path='/clanmap' element={<ClanMap />} />
          <Route path='/playerstat' element={<PlayerStatsPage />} />
          <Route path='campaignstats' element={<CampaignHomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

ReactDOM.render(<Core />, document.getElementById("root"));