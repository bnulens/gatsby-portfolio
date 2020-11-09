import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StyledHeader } from "../style/elements/StyledHeader"

const navLinks = [{
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
}];

const Header = () => (

  <StyledHeader>
    <div className="header__inner-wrapper">
      <nav className="header__social-nav">
        {
          navLinks[0].social.map((item) => {
            return (
              <a className="header__social-link" href={item.url} target="__blank" rel="norefferer noopener" key={item.title}>
                <img className="header__social-icon" src={`../../svg/${item.title}.svg`} alt={item.title}/>
              </a>
            )
          })
        }
      </nav>
      <nav className="header__site-nav">
        {
          navLinks[0].site.map((link) => {
            return (
              <Link className="header__site-nav-link" to={`#${link}`} key={link}>{link}</Link>
            )
          })
        }
      </nav>
    </div>
  </StyledHeader>

)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
