import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
    position: relative;
    width: 60px;
    height: 25px;
    tranform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    z-index: 2;

    & span {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 8px;
        background: var(--color-grey);
        border-radius: 8px;
        opacity: 1;
        tranform: rotate(0deg);
        transition: 0.25s ease-in-out;
        
        &:nth-child(1) {
            top: ${props => (props.opened ? '18px' : '0px' )};
            width: ${props => (props.opened ? '0%' : '100%')};
            left: ${props => (props.opened ? '50%' : null)};
        }
    
        &:nth-child(2) {
        transform: ${props => (props.opened ? 'rotate(45deg)' : null)}; 
        }

        &:nth-child(3) {
        transform: ${props => (props.opened ? 'rotate(-45deg)' : null)}; 
        }

        &:nth-child(2),
        &:nth-child(3) {
            top: 18px;
        }

        &:nth-child(4) {
            top: ${props => (props.opened ? '18px' : '36px' )};
            width: ${props => (props.opened ? '0%' : '100%')};
            left: ${props => (props.opened ? '50%' : null)};
        }
    }
`
const Hamburger = ({ opened, clicked }) => {
    return ( 
        <StyledHamburger opened={opened} onClick={clicked}>
            <span/>
            <span/>
            <span/>
            <span/>
        </StyledHamburger>
    )
}

export default Hamburger