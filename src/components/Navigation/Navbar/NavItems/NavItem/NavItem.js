import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledlListItem = styled.li`
    display: block;
    cursor: pointer;
`
const StyledNavLink = styled(Link)`
    margin: 0 16px;
    color: var(--color-white);
`

const NavItem = ({ link, clicked, children }) => {
    return (
        <StyledlListItem>
            <StyledNavLink to={`/#${link}`} onClick={clicked}>{children}</StyledNavLink>
        </StyledlListItem>
    )
};

export default NavItem;