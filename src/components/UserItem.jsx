import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const UserItemStyled = styled.div`
  border-bottom: 2px solid ${theme.colors.primaryDark};
  display: grid;
  grid-template-columns: repeat(4, 200px);
  padding: 10px 20px;
  text-align: left;

  .data__user span{
    font-size: 14px;
    color: ${theme.colors.secundaryLight};
  }

  @media (min-width: 768px) {
    /* grid-template-columns: repeat(4, 1fr); */
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
   }
`

const UserItem = ({ diplayName, email, rol, status }) => {
  return (
    <UserItemStyled>
      <div className="data__user">
        <p>{diplayName}</p>
        <span>{email}</span>
      </div>
      <p>{rol}</p>
      <p>{status}</p>
      <div>
        <span>I</span>
        <span>O</span>
      </div>
    </UserItemStyled>
  )
}

export default UserItem
