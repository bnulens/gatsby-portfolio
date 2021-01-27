import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ScrollProgress from './ScrollProgress'
import { StyledAboutContent, StyledAboutList } from '../../style/elements/about/StyledAbout'

const listContent = [
    {
        tag: "newbie",
        title: "Looking for",
        comment: "Hello"
    },
    {
        tag: "quality",
        title: "Quality",
        comment: "A quick brown fox jumped over the lazy dog"
    },
    {
        tag: "extra",
        title: "Possibility",
        comment: "A quick brown fox jumped over the lazy dog"
    },
];

const GatsbyScroll = () => {
    const data = useStaticQuery(graphql`
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
    );

    // Extracting imageURLs & pushing them into an array
    const clImages = data.allCloudinaryMedia.edges;
    const filteredUrls = [];
    clImages.forEach(item => { filteredUrls.push(item.node.secure_url) });

    // Checking if the window is defined
    // const isBrowser = typeof window !== `undefined`;
    
    const articleRef = listContent.map(a => {
        a = React.createRef();
        return a
    });

    const [activeLink, setActiveLink] = useState(0);

    // Index of clicked target toggles active class
    const handleClick = (e, i)=> {
        e.preventDefault();
        articleRef[i].current.scrollIntoView({ behavior: 'smooth'});
        setActiveLink(i)
        if (articleRef[0] && i > activeLink) {
            e.preventDefault()
            setActiveLink(0)
        }   
    };
    
    const isElementInViewport = (el) => {
        let rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 && 
            rect.left >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
        
    useEffect(() => {
        const handleScroll = e => {
            if (typeof window !== undefined) {
                e.preventDefault();
                const markers = [...document.getElementsByClassName("list-item__card-marker")];
    
                if (isElementInViewport(markers[0])){
                    setActiveLink(0)
                } else {
                    markers.forEach((m, i) => {
                        switch (isElementInViewport(m) && i !== activeLink) {
                            case true:
                                setActiveLink(i);
                            break;
                            case false:
                                // console.log(i)
                            break;
                            default:
                                setActiveLink(0);
                            break;
                        }
                    })
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: false });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeLink, setActiveLink]);
    
    return (
        <StyledAboutContent id="about">
            <ScrollProgress/>
            <div className="content-container">
                <div className="content-left">
                    <h1>My name is Brecht</h1>
                    <p>In this paragraph I explain something about my skills, features and strong points to entice you to read further</p>
                    <ul>
                        {
                            listContent.map((a, i) => {
                                return (
                                    <li className="content-left__bullet" key={i}>
                                        <h3 className="content-left__bullet-index">{`0${i + 1}`}</h3>
                                        <a
                                            className={`content-left__bullet-link-${activeLink === i ? "active" : "inactive"}`}
                                            href={`/#${a.tag}`} 
                                            key={a.tag} 
                                            onClick={(e) => handleClick(e, i)}
                                        >
                                            {a.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="content-right">
                    <StyledAboutList>
                        {
                            listContent.map((a, i) => {
                                return (
                                    <li className="list-item__card" key={Math.random() * 10} ref={articleRef[i]}>
                                        <div className="list-item__card-marker"></div>
                                        <article className="list-item__article">
                                            <img src={filteredUrls[i]} alt="item" className="list-item__image"/>
                                            <h3 className="list-item__title">{a.title}</h3>
                                            <p className="list-item__text">{a.comment}</p>
                                        </article>
                                    </li>
                                ) 
                            })
                        }
                    </StyledAboutList> 
                </div>
                
            </div>
        </StyledAboutContent>
    )
}   

export default GatsbyScroll