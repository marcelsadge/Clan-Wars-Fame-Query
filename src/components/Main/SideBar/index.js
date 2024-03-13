import React, { useContext, useEffect, useState } from 'react';
import { FaMap, FaChartLine, FaBloggerB, FaMailBulk } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { GiStarsStack, GiTank } from 'react-icons/gi'

import { useNavigate } from 'react-router-dom';

import PageContext from '../../Context/pagecontext';
import PositionContext from '../../Context/positioncontext';

import { 
    SideBarComponent, 
    SideContainer, 
    SideGrid, 
    SideTable, 
    SideRow, 
    TitleRow,
    SideLink, 
    Title, 
    PageIndicator, 
    SideTableMini,
    SubTitleRow,
    MainGroup
} from './styles';

function SideBar() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1279);
    const {currContext, setContext} = useContext(PageContext);
    const {currPosition, setPosition} = useContext(PositionContext);

    const navigation = useNavigate();

    const handleWindowSize = () => {
        setDesktop(window.innerWidth > 1279);
    };

    const handleOnClick = (navi) => {
        setContext(navi);
        navigation(currContext);
    };

    useEffect(() => {
        setPosition(
            currContext === "/" ? "1px" : (
            currContext === "/marks" ? "42px" : ( 
            currContext === "/stats" ? "125px" : ( 
            currContext === "/clanmapsearch" ? "83px" : (
            currContext === "/blog" ? "165px" : (
            currContext === "/info" ? "205px" : (
            currContext === "/campaignstats" ? "313px" : "")))))));
        navigation(currContext);
    }, [currContext]);
    
    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
        return () => window.removeEventListener("resize", handleWindowSize);
    });

    return (
        
        <SideBarComponent>
            {isDesktop ? (
            <TitleRow onClick={() => handleOnClick('/')}>
                <Title>
                    WoT Fame
                </Title>
            </TitleRow>
            ) : (
                <Title>
                    <GiTank size={'23px'} color={'white'} opacity={'0.9'}/>
                </Title>
            )}
            <MainGroup>
                {isDesktop ? (
                <SubTitleRow>
                    Main
                </SubTitleRow>
                ) : <></> }
                <SideContainer>
                    <SideGrid>
                        {isDesktop ? (
                            <>
                            <SideTable>
                                {isDesktop ? (
                                    <PageIndicator currPosition={currPosition} />
                                ) : (<div></div>)}
                                <SideRow onClick={() => handleOnClick('/')}>
                                    <FiHome size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Home
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                                <SideRow onClick={() => handleOnClick('/marks')}>
                                    <GiStarsStack size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Marks of Excellence
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                                <SideRow onClick={() => handleOnClick('/clanmapsearch')}>
                                    <FaMap size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Clan Map
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                                <SideRow onClick={() => handleOnClick('/stats')}>
                                    <FaChartLine size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Trends
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                                <SideRow onClick={() => handleOnClick('/blog')}>
                                    <FaBloggerB size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Blog
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                                <SideRow onClick={() => handleOnClick('/info')}>
                                    <FaMailBulk size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Info
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                            </SideTable>
                            <SubTitleRow>
                                Campaign
                            </SubTitleRow>
                            <SideTable>
                                <SideRow onClick={() => handleOnClick('/campaignstats')} style={{"marginTop" : "30px"}}>
                                    <GiTank size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Stats
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                            </SideTable>
                            </>
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
                                <SideRow onClick={() => handleOnClick('/clanmapsearch')}>
                                    <FaMap size={'23px'} color={'white'} />
                                    {isDesktop ? (<SideLink>
                                        Clan Map
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                                <SideRow onClick={() => handleOnClick('/stats')}>
                                    <FaChartLine size={'23px'} color={'white'} />
                                    {isDesktop ? (<SideLink>
                                        Trends
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
                                <SideRow onClick={() => handleOnClick('/campaignstats')} style={{"marginTop" : "30px"}}>
                                    <GiTank size={'23px'} color={'white'} opacity={'0.9'}/>
                                    {isDesktop ? (<SideLink>
                                        Stats
                                    </SideLink>) : (<div></div>)}
                                </SideRow>
                        </SideTableMini>
                        )}
                        
                    </SideGrid>
                </SideContainer>
            </MainGroup>
        </SideBarComponent>
    );
}

export default SideBar;
