import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import MenuAdmin from './MenuAdmin'
import Profile from './Profile'

const HeaderAdminStyled = styled.div`
  width: 100%;
  position: fixed;
  align-items: center;
  padding: 20px 2%;
  z-index: ${theme.positions.header};
  background: #FFFFFF;

  .header__container {
    width: 100%;
    display: grid;
    min-height: 62px;
    grid-template-columns: min-content max-content;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primary};
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.13);
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  }

  @media (min-width: 1024px) {
    & {
      padding: 20px 2% 0 285px;
    }
  }
`

const HeaderAdmin = () => {
  return (
    <HeaderAdminStyled>
      <div className="header__container">
        <MenuAdmin/>
        <Profile />
      </div>
    </HeaderAdminStyled>
  )
}

export default HeaderAdmin
