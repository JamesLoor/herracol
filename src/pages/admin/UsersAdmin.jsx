import React from 'react'
import styled from 'styled-components'
import { WrapperAdmin } from '../../globalStyles'
import Box from '../../components/Box'
import { theme } from '../../theme'
import Button from '../../components/Button'
import UserItem from '../../components/UserItem'
import { userList } from '../../data/mock/userList.data.mock'

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

  .user__list {
    overflow-x: scroll;
  }

  .user__list__title {
    background-color: ${theme.colors.primaryDark};
    display: grid;
    grid-template-columns: repeat(4, 200px);
    padding: 10px 20px;
    border-radius: 20px;
    width: max-content;
  }

  .user__list__data {
    display: grid;
    gap: 5px;
  }

   @media (min-width: 1024px) {
    .user__list__title {
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
    }
   }
`

const UsersAdmin = () => {
  return (
    <UsersAdminStyled>
      <WrapperAdmin>
        <Box>
          <div className="user__header">
            <input type="text" placeholder="Buscar..."/>
            <Button onClick={() => {}}>Añadir Usuario</Button>
          </div>
          <div className="user__list">
            <div className="user__list__title">
              <h5>Usuario</h5>
              <h5>Rol</h5>
              <h5>Estado</h5>
              <h5>Acciones</h5>
            </div>
            <div className="user__list__data">
              {userList.map((data) => {
                return (
                  <UserItem key={data.id} diplayName={data.fullname} email={data.email} rol={data.rol} status={data.status}/>
                )
              })}
            </div>
          </div>
        </Box>
      </WrapperAdmin>
    </UsersAdminStyled>
  )
}

export default UsersAdmin
