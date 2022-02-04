import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/authDucks'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const useAuth = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.auth.user)
  const loading = useSelector(store => store.auth.loading)

  const login = async ({email, password}) => {
    dispatch(actions.authLoading())

    try {
      if(email && password) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        dispatch(actions.authLogin(email, password))
        console.log('logeado')
        console.log(userCredential)
      }
    } catch(error) {
      console.error(error)
    }
  }

  const logout = () => {
    dispatch(actions.authLoading())

    try {
      if(user) {
        dispatch(actions.authLogout())
      }
    } catch(error) {
      console.error(error)
    }
  }

  return {
    user,
    loading,

    login,
    logout
  }
}

export default useAuth