import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyled = styled.button`
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
    return <ReactRouterLink className={className} to={to} {...props}>{children}</ReactRouterLink>
  }
}

export default Link