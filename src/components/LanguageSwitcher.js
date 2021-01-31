import React from "react"
import i18next from "i18next"
import styled from "styled-components"

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 12px;
  z-index: 100;
`

const LanguageBlock = styled.button`
  margin-right: 6px;
  padding: 4px;
  border-radius: 50%;
  border: 1px solid white;
  background: transparent;
  color: var(--color-white);
  transition: all ease 0.3s;

  :hover {
    background-color: var(--color-white);
    color: var(--color-black);
  }
`

const LanguageSwitcher = () => {
  const handleLanguageSwitch = (language) => {
    console.log("clicked", language)
    i18next.changeLanguage(language, (err, t) => {
      if (err) return console.log("something went wrong loading", err)
    })
  }

  return (
    <Wrapper>
      <LanguageBlock
        className="language-button"
        onClick={() => handleLanguageSwitch("nl")}
      >
        NL
      </LanguageBlock>
      <LanguageBlock
        className="language-button"
        onClick={() => handleLanguageSwitch("en")}
      >
        EN
      </LanguageBlock>
    </Wrapper>
  )
}

export default LanguageSwitcher
