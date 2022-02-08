import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  width: 100%;
  text-align: left;
`

const Link = ({ children, to = '', className, ...props }) => {
  if (to.startsWith('http') || to.startsWith('//') || to.startsWith('tel:') || to.startsWith('mailto:')) {
    return (
      <ButtonStyled onClick={() => window.open(to)} className={className}>
        {children}
      </ButtonStyled>
    )
  } else {
    return <RouterLink className={className} to={to} {...props}>{children}</RouterLink>
  }
}

export default Link