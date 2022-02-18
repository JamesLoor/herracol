import React from 'react'
import styled from 'styled-components'
import { WrapperAdmin } from '../../globalStyles'
import Box from '../../components/Box'
import { theme } from '../../theme'
import Button from '../../components/Button'

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
  return (
    <UsersAdminStyled>
      <WrapperAdmin>
        <Box>
        <div className="user__header">
          <input type="text" placeholder="Buscar..."/>
          <Button onClick={() => {}} children="Añadir Usuario"></Button>
        </div>
        </Box>
      </WrapperAdmin>
    </UsersAdminStyled>
  )
}

export default UsersAdmin
