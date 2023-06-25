import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SideBarComponent = styled.div`
    background-color: #111111;
    position: absolute;
    height: 100%;
    width: 300px;
    border-right: 1px solid #202020;
    box-shadow: 0.5px 0px 10px black;
    animation: ${props => props.open ? openSideBar : closeSideBar} .4s;
    > svg {
        color: #fff;
        height: 50px;
        width: 25px;
        margin-top: 10px;
        margin-left: 240px;
        cursor: pointer;
    }
`;

const openSideBar = keyframes`
    from {
        opacity: 0;
        width: 0;
    } to {
        opacity: 1;
        width: 300px;
    }
`;

const closeSideBar = keyframes`
    from {
        opacity: 1;
        width: 300px;
    } to {
        opacity: 0;
        width: 0;
    }
`;

const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const SideRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(190px, 1fr));
  grid-gap: 20px;
`;

const SideLink = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #e5e5e5;
      cursor: pointer;
      transition: 200ms ease-in;
  }
`;

function SideBar({ show }) {
    const [isOpen, setIsOpen] = useState(true);

    const navigation = useNavigate();

    const collapseSidebar = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                show(false);
            }, '300');
        }
    }, [isOpen]);
    
    return (
        <SideBarComponent open={isOpen}>
            <FaBars
                    onClick={collapseSidebar}
                />
            <SideContainer>
                <SideRow>
                    <SideLink onClick={() => navigation('/')}>
                        Home
                    </SideLink>
                    <SideLink onClick={() => navigation('/clanmapsearch')}>
                        Clan Map
                    </SideLink>
                    <SideLink onClick={() => navigation('/campaignstats')}>
                        Campaign Stats
                    </SideLink>
                </SideRow>
            </SideContainer>
        </SideBarComponent>
    );
}

export default SideBar;