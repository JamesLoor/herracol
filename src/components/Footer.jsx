import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'
import Logo from '../assets/logo.png'
import FooterSection from './FooterSection'
import { footerSections } from '../data/footerSections.data'

const FooterStyled = styled.div`
  padding-bottom: 30px;

  .footer__container {
    display: grid;
    grid-auto-flow: row;
    gap: 40px;
  }

  .footer__logo {
    display: grid;
    grid-template-rows: min-content min-content;
    text-align: center;
    img {
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    .footer__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
    }
  }

  @media (min-width: 1100px) {
    .footer__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 40px;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="footer__container">
          <div className="footer__logo">
            <img src={Logo} alt="Logo Herracol" />
            <span>© Herracol 2021</span>
          </div>
          {
            footerSections.map((section) => {
              return (
                <FooterSection
                  key={section.id}
                  title={section.title}
                  links={section.data}
                />
              )
            })
          }
        </div>
      </Wrapper>
    </FooterStyled>
  )
}

export default Footer
