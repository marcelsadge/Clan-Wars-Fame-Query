import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClanMap from './components/Main/ClanMap';
import HomePage from './components/Main/HomePage';
import PageHeader from './components/Main/PageHeader';
import PlayerStatsPage from './components/Main/PlayerPage';
import CampaignHomePage from './components/Campaigns/CampaignHomePage';

function Core() {
  return (
    <Router>
      <PageHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/clanmap' element={<ClanMap />} />
        <Route path='/playerstat' element={<PlayerStatsPage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<Core />, document.getElementById("root"));