import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaMap } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { TbBrandCampaignmonitor } from 'react-icons/tb';

import { useNavigate } from 'react-router-dom';

const SideBarComponent = styled.div`
    background-color: #111111;
    position: fixed;
    height: 100%;
    width: 290px;
    border-right: 1px solid #242c30;
`;

const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const SideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(235px, 1fr));
  grid-gap: 20px;
`;

const SideTable = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
`;

const SideRow = styled.div`
    display: flex;
    column-gap: 20px;
    &:hover {
        background-color: #28b48c;
        background: linear-gradient(to right, #111111 99%, #28b48c 1%);
        cursor: pointer;
    }
`
const SideLink = styled.a`
  color: #28b48c;
  font-size: 18px;
  text-decoration: none;
`;

const Title = styled.div`
    font-weight: normal;
    color: white;
    font-size: 24px;
    padding: 20px;
    text-align: center;
`

function SideBar({ show }) {
    const navigation = useNavigate();

    useEffect(() => {
    }, []);
    
    return (
        <SideBarComponent>
            <Title>
                Project Fame
            </Title>
            <SideContainer>
                <SideGrid>
                    <SideTable>
                        <SideRow onClick={() => navigation('/')}>
                            <FiHome size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Home
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => navigation('/clanmapsearch')}>
                            <FaMap size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Clan Map
                            </SideLink>
                        </SideRow>
                        <SideRow onClick={() => navigation('/campaignstats')}>
                            <TbBrandCampaignmonitor size={'23px'} color={'#28b48c'} />
                            <SideLink>
                                Campaign Stats
                            </SideLink>
                        </SideRow>
                    </SideTable>
                </SideGrid>
            </SideContainer>
        </SideBarComponent>
    );
}

export default SideBar;