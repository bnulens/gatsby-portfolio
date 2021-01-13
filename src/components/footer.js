import React from 'react'

import { StyledFooter } from '../style/elements/StyledFooter'

const thisYear = new Date().getFullYear();

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

const Footer = () => (
    <StyledFooter>
        <div className="footer__inner-wrapper">
            <section className="footer__brief">
                <h3>Alley-Oop</h3>
                <p>Here I say something</p>
            </section>
            <section className="footer__social-media">
                <nav>
                    {
                        navLinks.social.map((item) => {
                            return (
                                <a className="footer-link" href={item.url} target="__blank" rel="norefferer noopener" key={item.title}>
                                    <img className="footer__social-icon" src={`../../svg/${item.title}.svg`} alt={item.title}/>
                                </a>
                            )
                        })
                    }
                </nav>
                <span>&copy; {thisYear}</span>
            </section>
        </div>
    </StyledFooter>
)

export default Footer 