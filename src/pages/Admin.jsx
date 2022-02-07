import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import useAuth from '../hooks/useAuth'

const AdminStyled = styled.div`
  /*  */
`

const Admin = () => {
  const { logout } = useAuth()

  return (
    <AdminStyled>
      <h1>Admin</h1>
      <Button onClick={logout}>
        Cerrar Sesión
      </Button>
    </AdminStyled>
  )
}

export default Admin
