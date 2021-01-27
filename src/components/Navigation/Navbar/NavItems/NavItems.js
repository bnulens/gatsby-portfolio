import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const NavList = styled.ul`
    display: flex;
    flex-direction: ${props => (props.mobile ? 'column' : 'row')};
    align-items: center;
    height: 100%;
`
const NavListSocial = styled.ul`
    display: flex;
    flex-direction: ${props => (props.mobile ? 'column' : 'row')};
    align-items: center;
    height: 100%;  

    a {
        display: block;
        margin-right: 24px;
        cursor: pointer;

        img {
            display: block;
            height: 20px;
            width: auto;
            transition: 0.4s all ease;

            :hover {
                filter: invert(1);
            }
        }
    }
`
const navLinks = {
    social: [
      {
        title: 'linkedIn',
        url: 'https://www.linkedin.com/in/brecht-nulens/'
      },{
        title: 'github',
        url: 'https://github.com/bnulens'
      },
      {
        title: 'email',
        url:'mailto:brechtnulens@gmail.com'
      }
    ],
    site: ['about','skills','experience','contact']
};

const NavItems = ({ mobile, clicked }) => {
    return (
        <Nav>
                <NavListSocial>
                {
                    navLinks.social.map((item) => {
                        return (
                            <a className="header__social-link" href={item.url} target="__blank" rel="norefferer noopener" key={item.title}>
                                <img className="header__social-icon" src={`../../svg/${item.title}.svg`} alt={item.title}/>
                            </a>
                        )
                    })
                }
                </NavListSocial>
                <NavList mobile={mobile}>
                {
                    navLinks.site.map(item => {
                        return (
                            <NavItem link={item} key={item} clicked={clicked}>{item}</NavItem>
                        )
                    })
                }
                </NavList>
        </Nav>
    )
};

export default NavItems;