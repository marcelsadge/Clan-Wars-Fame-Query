import React, { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaMap, FaChartLine, FaBloggerB, FaMailBulk } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { GiStarsStack } from 'react-icons/gi'
import { TbBrandCampaignmonitor } from 'react-icons/tb';

import { useNavigate } from 'react-router-dom';

import PageContext from '../../Context/pagecontext';
import PositionContext from '../../Context/positioncontext';

import { 
    SideBarComponent, 
    SideContainer, 
    SideGrid, 
    SideTable, 
    SideRow, 
    SideLink, 
    Title, 
    PageIndicator } from './styles';

function SideBar({ props }) {
    const {currContext, setContext} = useContext(PageContext);
    const {currPosition, setPosition} = useContext(PositionContext);

    const navigation = useNavigate();

    const handleOnClick = (navi) => {
        setContext(navi);
    };

    useEffect(() => {
        setPosition(
            currContext === "/" ? "1px" : ( 
            currContext === "/marks" ? "43px" : ( 
            currContext === "/stats" ? "85px" : (
            currContext === "/clanmapsearch" ? "127px" : (
            currContext === "/campaignstats" ? "169px" : (
            currContext === "/blog" ? "210px" : (
            currContext === "/contact" ? "253px" : "")))))));
        navigation(currContext);
    }, [currContext]);
    
    return (
        <SideBarComponent>
            <Title>
                In Progress Project
            </Title>
            <SideContainer>
                <SideGrid>
                    <SideTable>
                    <PageIndicator currPosition={currPosition} />
                        <SideRow onClick={() => handleOnClick('/')}>
                            <FiHome size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Home
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => handleOnClick('/marks')}>
                            <GiStarsStack size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Marks of Excellence
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => handleOnClick('/stats')}>
                            <FaChartLine size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Trends
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => handleOnClick('/clanmapsearch')}>
                            <FaMap size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Clan Map
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => handleOnClick('/campaignstats')}>
                            <TbBrandCampaignmonitor size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Campaign Stats
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => handleOnClick('/blog')}>
                            <FaBloggerB size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Blog
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => handleOnClick('/contact')}>
                            <FaMailBulk size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Contact
                            </SideLink>
                        </SideRow>
                    </SideTable>
                </SideGrid>
            </SideContainer>
        </SideBarComponent>
    );
}

export default SideBar;