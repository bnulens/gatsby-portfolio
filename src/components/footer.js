import React from 'react'
import { StyledFooter } from '../style/elements/StyledFooter'

const thisYear = new Date().getFullYear();

const Footer = () => (
    <StyledFooter>
        <div className="footer__inner-wrapper">
            <section>A</section>
            <span>&copy; {thisYear}</span>
        </div>
    </StyledFooter>
)

export default Footer 