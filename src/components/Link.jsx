import { Link as ReactRouterLink } from 'react-router-dom'

const Link = ({ children, to = '', ...props }) => {
  if (to.startsWith('http') || to.startsWith('//')) {
    return (
      <button onClick={() => window.open(to)}>
        {children}
      </button>
    )
  } else {
    return <ReactRouterLink to={to} {...props}>{children}</ReactRouterLink>
  }
}

export default Link