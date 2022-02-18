import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import HeaderAdmin from './HeaderAdmin'

const LayoutAdminStyled = styled.div`
  main {
    min-height: 100vh;
  }
`

const LayoutAdmin = () => {
  return (
    <LayoutAdminStyled>
      <HeaderAdmin />
      <main>
        <Outlet />
      </main>
    </LayoutAdminStyled>
  )
}

export default LayoutAdmin
