import React, { useState } from 'react';
import styled from 'styled-components';

import Hamburger from './Hamburger';
import NavItems from '../NavItems/NavItems';

const SideHeader = styled.header`
    position: relative;
    display: none;
    
    @media ${props => props.theme.mediaQueries.medium} {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 120px;
    }
`
const SideNavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%; 
    max-width: 80vw;
    margin: 0 auto;
`

const SideNavMenu = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: ${props => (props.opened ? '1' : '0')};
    transform: translateY(${props => (props.opened ? '0%' : '-100%')});
    transition: transform 0.6s, background 0.6s cubic-bezier(.38,0,.64,1);
`

const SideNav = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <SideHeader>
            <SideNavWrapper>
                <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
            </SideNavWrapper>
            <SideNavMenu opened={isOpened}>
                <NavItems mobile clicked={() => setIsOpened(false)} />
            </SideNavMenu>
        </SideHeader>
    )
};

export default SideNav;

