import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (user == null) return <Navigate to="/login" />

  return <>{children}</>
}

export default PrivateRoute