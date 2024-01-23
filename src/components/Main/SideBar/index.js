import React, { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaMap, FaChartLine, FaBloggerB, FaMailBulk } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { GiStarsStack, GiTank } from 'react-icons/gi'
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
    PageIndicator, 
    SideTableMini} from './styles';

function SideBar({ props }) {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
    const {currContext, setContext} = useContext(PageContext);
    const {currPosition, setPosition} = useContext(PositionContext);

    const navigation = useNavigate();

    const handleWindowSize = () => {
        setDesktop(window.innerWidth > 600);
    };

    const handleOnClick = (navi) => {
        setContext(navi);
    };

    useEffect(() => {
        setPosition(
            currContext === "/" ? "3px" : ( 
            currContext === "/marks" ? "48px" : ( 
            currContext === "/stats" ? "92px" : (
            currContext === "/clanmapsearch" ? "138px" : (
            currContext === "/campaignstats" ? "182px" : (
            currContext === "/blog" ? "227px" : (
            currContext === "/info" ? "272px" : "")))))));
        navigation(currContext);
    }, [currContext]);
    
    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
        return () => window.removeEventListener("resize", handleWindowSize);
    });

    return (
        
        <SideBarComponent>
            {isDesktop ? (
            <Title>
                In Progress Project
            </Title>
            ) : (
                <Title>
                    I.P.P.
                </Title>
            )}
            <SideContainer>
                <SideGrid>
                    {isDesktop ? (
                        <SideTable>
                            {isDesktop ? (
                                <PageIndicator currPosition={currPosition} />
                            ) : (<div></div>)}
                            <SideRow onClick={() => handleOnClick('/')}>
                                <FiHome size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Home
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/marks')}>
                                <GiStarsStack size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Marks of Excellence
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/stats')}>
                                <FaChartLine size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Trends
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/clanmapsearch')}>
                                <FaMap size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Clan Map
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/campaignstats')}>
                                <GiTank size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Campaign Stats
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/blog')}>
                                <FaBloggerB size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Blog
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/info')}>
                                <FaMailBulk size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Info
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                        </SideTable>
                    ) : (
                        <SideTableMini>
                        {isDesktop ? (
                            <PageIndicator currPosition={currPosition} />
                            ) : (<div></div>)}
                            <SideRow onClick={() => handleOnClick('/')}>
                                <FiHome size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Home
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/marks')}>
                                <GiStarsStack size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Marks of Excellence
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/stats')}>
                                <FaChartLine size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Trends
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/clanmapsearch')}>
                                <FaMap size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Clan Map
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/campaignstats')}>
                                <GiTank size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Campaign Stats
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/blog')}>
                                <FaBloggerB size={'23px'} color={'white'} />
                                {isDesktop ? (<SideLink>
                                    Blog
                                </SideLink>) : (<div></div>)}
                            </SideRow>
                            <SideRow onClick={() => handleOnClick('/info')}>
                            <FaMailBulk size={'23px'} color={'white'} />
                            {isDesktop ? (<SideLink>
                                Info
                            </SideLink>) : (<div></div>)}
                        </SideRow>
                    </SideTableMini>
                    )}
                </SideGrid>
            </SideContainer>
        </SideBarComponent>
    );
}

export default SideBar;