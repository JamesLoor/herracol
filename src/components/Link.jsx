import { Link as ReactRouterLink } from 'react-router-dom'

const Link = ({ children, to = '', className, ...props }) => {
  if (to.startsWith('http') || to.startsWith('//') || to.startsWith('tel:') || to.startsWith('mailto:')) {
    return (
      <button onClick={() => window.open(to)} className={className}>
        {children}
      </button>
    )
  } else {
    return <ReactRouterLink to={to} {...props}>{children}</ReactRouterLink>
  }
}

export default Link