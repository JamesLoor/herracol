import React from 'react'
import Link from './Link'
import styled from 'styled-components'
import { theme } from '../theme'

const FooterSectionStyled = styled.div`
  .section__title {
    font-size: 24px;
    font-weight: 1000;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 2px solid ${theme.colors.accent};
  }

  .section__grid {
    display: grid;
    grid-auto-flow: row;
    margin-top: 20px;
    gap: 18px;
  }
`

const FooterSection = ({ title, links }) => {
  return (
    <FooterSectionStyled>
      <h5 className="section__title">{title}</h5>

      <ul className="section__grid">
        {
          links.map(({ url, name }) => {
            return (
              <li key={name}><Link to={url}>{name}</Link></li>
            )
          })
        }
      </ul>
    </FooterSectionStyled>
  )
}

export default FooterSection
