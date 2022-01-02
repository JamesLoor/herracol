import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'

const LayoutStyled = styled.div`
  main {
    padding-top: 90px;
  }
`

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutStyled>
  )
}

export default Layout
