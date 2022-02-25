import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const UserItemStyled = styled.div`
  border-bottom: 2px solid ${theme.colors.primaryDark};
  display: grid;
  padding: 10px 20px;
  text-align: left;

  .data__user {
    width: 100%;
    overflow-x: scroll;
  }

  .data__user span{
    font-size: 14px;
    color: ${theme.colors.secundaryLight};
  }
`

const UserItem = ({ diplayName, email, role, status, gridClass }) => {
  return (
    <UserItemStyled className={gridClass}>
      <div className="data__user">
        <p className="displayName">{diplayName}</p>
        <span>{email}</span>
      </div>
      <p>{role}</p>
      <p>{status}</p>
      <div>
        <span>I</span>
        <span>O</span>
      </div>
    </UserItemStyled>
  )
}

export default UserItem
