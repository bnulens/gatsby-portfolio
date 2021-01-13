import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery }from 'gatsby'

import { StyledAboutContent, StyledAboutList } from '../../style/elements/about/StyledAbout'

const listContent = [
    {
        tag: "newbie",
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
    
    const [activeLink, setActiveLink] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    
    // For each tag a ref is made to be adressed in the DOM
    const articleRefs = listContent.reduce((acc, value) => {
        acc[value.tag] = React.createRef();
        return acc;
    }, {});

    // Index of clicked target toggles active class
    const handleClick = (tag, i, e)=> {
        e.preventDefault();
        articleRefs[tag].current.scrollIntoView({ behavior: 'smooth'});
        setActiveLink(i);
    };

    // Change state on scroll
    // useEffect(() => {
        

    //     const handleScroll = () => {
    //         const isScrolled = window.scrollY < 15;
    //         if (isScrolled !== scrolled) {
    //             setScrolled(!scrolled);
    //         }
    //         document.addEventListener('scroll', handleScroll, { passive: true });
    //     };

    //     return () => {
    //         // clean up the event handler when the component unmounts
    //         document.removeEventListener('scroll', handleScroll);
    //     };
    // }, [scrolled]);

    useEffect(() => {
        const articles = [...document.getElementsByClassName("list-item__article")];
        console.log(articles)

        articles.forEach((article, i) => {
            console.log(article.offsetTop)
        })

        const onScroll = () => {
          const scrollCheck = window.scrollY < 10
          if (scrollCheck !== scrolled) {
            setScrolled(scrollCheck)
          }
        }
      
        // setting the event handler from web API
        document.addEventListener("scroll", onScroll)
      
        // cleaning up from the web API
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
      }, [scrolled, setScrolled])
    
    return (
        <StyledAboutContent id="about" data-active={scrolled}>
            <div className="content-container">
                {/* <div className="scroll-height">{window.scrollY}</div> */}
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
                                            onClick={(e) => handleClick(a.tag, i, e)}
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
                                    <li className="list-item__card" key={Math.random() * 10} ref={articleRefs[a.tag]}>
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