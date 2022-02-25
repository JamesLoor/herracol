import React from 'react'
import styled from 'styled-components'
import { WrapperAdmin } from '../../globalStyles'
import Box from '../../components/Box'
import { theme } from '../../theme'
import Button from '../../components/Button'
import UserItem from '../../components/UserItem'
import { userList } from '../../data/mock/userList.data.mock'
import UserForm from '../../components/UserForm'
import { useState } from 'react'
import UserList from '../../components/UserList'
import { useEffect } from 'react'

const UsersAdminStyled = styled.div`
  .user__header {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 20px;
  }

  .user__header input {
    border: 1px solid ${theme.colors.white};
    padding: 10px 20px;
    border-radius: 20px;
    width: 100%;
    color: ${theme.colors.white};
  }

  .user__header input::placeholder {
    color: ${theme.colors.white};
  }
`

const UsersAdmin = () => {
  const [ userFormOpen, setUserFormOpen ] = useState(false)

  const openUserForm = () => setUserFormOpen(true)
  const closeUserForm = () => setUserFormOpen(false)

  return (
    <UsersAdminStyled>
      <WrapperAdmin>
        <Box>
          <div className="user__header">
            <input type="text" placeholder="Buscar..."/>
            <Button onClick={openUserForm}>Añadir Usuario</Button>
          </div>
          <UserList />
        </Box>
      </WrapperAdmin>
      <UserForm isOpen={userFormOpen} closeForm={closeUserForm}/>
    </UsersAdminStyled>
  )
}

export default UsersAdmin
