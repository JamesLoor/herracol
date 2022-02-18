import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/authDucks'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store => store.auth.user)
  const error = useSelector(store => store.auth.error)
  const loading = useSelector(store => store.auth.loading)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      dispatch(actions.authLogin(currentUser))
    })
  }, [dispatch])

  const login = async ({email, password}) => {
    dispatch(actions.authLoading())

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          dispatch(actions.authError({
            code: error.code,
            message: 'Contraseña incorrecta'
          }))
          break;
        case 'auth/user-not-found':
          dispatch(actions.authError({
            code: error.code,
            message: 'Correo no existe'
          }))
          break;
        case 'auth/too-many-requests':
          dispatch(actions.authError({
            code: error.code,
            message: 'Cuenta inhabilitada temporalmente, intente mas tarde.'
          }))
          break;
        default:
          return null
      }
    }
  }

  const logout = async () => {
    dispatch(actions.authLoading())

    try {
      if(user) {
        await signOut(auth)
        navigate('/login')
      }
    } catch(error) {
      console.error(error)
    }
  }

  return {
    user,
    error,
    loading,

    login,
    logout
  }
}

export default useAuth