import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { StyledAboutContent, StyledAboutList } from '../../style/elements/about/StyledAbout'

class ScrollSpy extends Component {

    state = {
        scrollHeight: 0
    };
    
    componentDidMount() {
        typeof window !== 'undefined' && window.addEventListener('scroll', this.handleScroll)

        //Listen to the scroll event
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount() {
        //Remove the scroll listener
        window.removeEventListener("scroll", () => {});
        
    }

    handleScroll = () => {
        if(typeof window !== 'undefined'){
            this.setState({
                scrollHeight: window.scrollY
            })
        }
    };

    handleScrollTo = i => {
    };

    //Start scrolling to top
    scrollTo = pos => {
    };

    scrollTowardsTop = pos => {
    };
    
    scrollTowardsBottom = pos => {
    };

    render() {
        const { scrollHeight } = this.state;
        const listContent = [
            {
                tag: "noob",
                title: "I am a noob",
                comment: "Hello"
            },
            {
                tag: "quality",
                title: "Feature Quality",
                comment: "A quick brown fox jumped over the lazy dog"
            },
            {
                tag: "extra",
                title: "Good Humour",
                comment: "A quick brown fox jumped over the lazy dog"
            },
        ];

        // Left side nav list items
        const bulletListItems = listContent.map((a, i) => (
            <div className={`content-left__bullet-${this.state.sectionOffsetPosition ? "active" : "featured"}`}>
                <h3 className="content-left__bullet-index">{`0${i + 1}`}</h3>
                <a 
                    className="content-left__bullet-link"
                    href={`/#${a.tag}`} 
                    key={a.tag} 
                    onClick={() => this.handleScrollTo(i)}
                >
                    {a.title}
                </a>
            </div>
        ));

        // Right side article items
        const aboutListItems = listContent.map((a, i) => {
            return (
                <li id={a.tag} className="list-item__card" key={Math.random() * 10} ref={e => (this.sectionRef = e)}>
                    <article className="list-item__article">
                        <StaticQuery 
                            className="list-item__image"
                            query={graphql`
                                query {
                                    allCloudinaryMedia(filter: {public_id: {glob: "gatsby-portfolio/about/*"}}) {
                                        edges {
                                            node {
                                                secure_url
                                            }
                                        }
                                    }
                                }
                                `
                            }
                            render={data => <img src={data.allCloudinaryMedia.edges[i].node.secure_url} alt="item" className="list-item__image"/>}
                        />
                        <h3 className="list-item__title">{a.title}</h3>
                        <p className="list-item__text">{a.comment}</p>
                    </article>
                </li>
            ) 
        })


        return (
            <StyledAboutContent id="about">
                <div className="scroll-height">{scrollHeight}</div>
                <div className="content-container">
                    <div className="content-left">
                        <h1>My name is Brecht</h1>
                        <p>In this paragraph I explain something about my skills, features and strong points to entice you to read further</p>
                        <nav> 
                            <ul ref={e => (this.menuRef = e)}>{bulletListItems}</ul>
                        </nav>
                    </div>
                    <div className="content-right">
                        <StyledAboutList>
                            {aboutListItems}
                        </StyledAboutList>
                    </div>
                </div>
            </StyledAboutContent>
        )
    }

}

export default ScrollSpy