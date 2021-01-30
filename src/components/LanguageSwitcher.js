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
`

const LanguageSwitcher = () => {
  const handleLanguageSwitch = language => {
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

