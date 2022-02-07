import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/authDucks'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.auth.user)
  const loading = useSelector(store => store.auth.loading)
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      dispatch(actions.authLogin(currentUser))
    })
  }, [dispatch])

  const login = async ({email, password}) => {
    dispatch(actions.authLoading())

    try {
      if(email && password) {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/admin')
      }
    } catch(error) {
      console.error(error)
    }
  }

  const logout = async () => {
    dispatch(actions.authLoading())

    try {
      if(user) {
        await signOut(auth)
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