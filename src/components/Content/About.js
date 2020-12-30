import React from 'react'

import AboutList from './AboutList'
import { StyledAboutContent } from '../../style/elements/about/StyledAbout'

const listContent = [
    {
        title: "I am a noob",
        comment: "A quick brown fox jumped over the lazy dog"
    },
    {
        title: "Feature Quality",
        comment: "A quick brown fox jumped over the lazy dog"
    },
    {
        title: "Good Humour",
        comment: "A quick brown fox jumped over the lazy dog"
    },
]

const ScrollContent = () => {
    return (
        <>
            <StyledAboutContent id="about">
                <div className="content-container">
                    <div className="content-left">
                        <h1>My name is Brecht</h1>
                        <p>lorem ipsum dicit</p>
                        <ul>
                            {
                                listContent.map(i => {
                                    return (
                                        <li>{i.title}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="content-right">
                        <AboutList listContent={listContent} />
                    </div>
                    
                </div>
            </StyledAboutContent>
        </>
    )
}   

export default ScrollContent