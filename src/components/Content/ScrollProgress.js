import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ProgressBar = styled.div`
    position: sticky;
    display: block;
    top: 0;
    height: 4px;
    width: 100%;
    z-index: 100;
    --scroll: 0%;
    background: linear-gradient(90deg, var(--color-purple) var(--scroll), transparent 0);
`

const ScrollProgress = () => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const catchProgress = e => {
            if (typeof window !== undefined) {
                e.preventDefault();
                const aboutSection = document.getElementById("about");
                const progressBar = document.getElementById("about-scroll__progress");
                const aboutRect = aboutSection.getBoundingClientRect();

                if(aboutRect.top < 0 && aboutRect.bottom >= document.documentElement.clientHeight) {
                    const progress = Math.floor(aboutRect.top / aboutSection.clientHeight * -145) + "%";
                    setProgress(progress);
                    progressBar.style.setProperty("--scroll", progress);
                }
            }
        }
    
        window.addEventListener("scroll", catchProgress, { passive: false });
        return () => window.removeEventListener("scroll", catchProgress);

    }, [progress, setProgress])

    return (
        <ProgressBar id="about-scroll__progress"></ProgressBar>
    )
}

export default ScrollProgress