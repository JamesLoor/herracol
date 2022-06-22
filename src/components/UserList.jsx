/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import UserItem from './UserItem'
import useUser from '../hooks/useUser'

const UserListStyled = styled.div`
  @media (max-width: 1024px) {
    overflow-x: scroll;
  }

  .user__list__title {
    background-color: ${theme.colors.primaryDark};
    color: ${theme.colors.white};
    display: grid;
    padding: 10px 20px;
    border-radius: 20px;
    width: max-content;
  }

  .grid__column {
    grid-template-columns: 250px repeat(3, 200px);

    @media (min-width: 1024px) {
      width: 100%;
      grid-template-columns: 1.5fr repeat(3, 1fr);
    }
  }

  .user__list__data {
    display: grid;
    gap: 5px;
  }
`

const UserList = () => {
  const { list, fetchUsers } = useUser()

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <UserListStyled>
      <div className="user__list">
        <div className="user__list__title grid__column ">
          <h5>Usuario</h5>
          <h5>Rol</h5>
          <h5>Estado</h5>
          <h5>Acciones</h5>
        </div>
        <div className="user__list__data">
          {list.map((data) => {
            return (
              <UserItem key={data.id} diplayName={data.username} email={data.email} role={data.role} status={data.status} gridClass={"grid__column"}/>
            )
          })}
        </div>
      </div>
    </UserListStyled>
  )
}

export default UserList
