import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import MenuAdmin from './MenuAdmin'
import Profile from './Profile'

const HeaderAdminStyled = styled.div`
  width: 100%;
  position: fixed;
  align-items: center;
  padding: 20px 2% 0 2%;
  z-index: ${theme.positions.header};
  background: linear-gradient(180deg,hsla(0,0%,97.3%,.95) 44%,hsla(0,0%,97.3%,.46) 73%,hsla(0,0%,100%,0));
  .header__container {
    width: 100%;
    display: grid;
    min-height: 62px;
    grid-template-columns: min-content max-content;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primary};
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0px 6px 20px 6px rgb(0 0 0 / 10%);
  }

  @media (min-width: 1024px) {
    & {
      padding: 20px 20px 0 285px;
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
