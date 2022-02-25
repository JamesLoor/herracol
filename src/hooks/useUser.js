/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/userDuck'
import { auth, store } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const useUser = () => {
  const dispatch = useDispatch()
  const all = useSelector(store => store.user.all)
  const userListByName = useSelector(store => store.user.userListByName)
  const isLoading = useSelector(store => store.user.isLoading)
  const isUserListEmpty = !all.length
  const name = useSelector(store => store.user.name)
  const user = useSelector(store => store.auth.user)

  const selectList = () => {
    if(name) {
      return userListByName
    }

    return all
  }

  let list = selectList()
  const totalUsers = all.length
  const totalUsersShowed = list.length
  const isListEmpty = !list.length

  const fetchUsers = async () => {
    dispatch(actions.loading())
    try {
      if(isUserListEmpty) {
        const users = []
        const query = collection(store, 'Users')
        const querySnapshot = await getDocs(query)
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          const user = { id: doc.id , ...data}
          users.push(user)
        })
        dispatch(actions.fetchUsers(users))
      }
    } catch(error) {
      console.error(error)
    }
  }

  const getAllUsers = () => {
    // dispatch(actions.loading())
    // try {
    //   if(!isProductListEmpty) {
    //     dispatch(actions.getProducts())
    //   }
    // } catch(error) {
    //   console.error(error)
    // }
  }


  const getUsersByByName = (name) => {
    // dispatch(actions.loading())
    // try {
    //   dispatch(actions.getProductsByName(name))
    // } catch(error) {
    //   console.error(error);
    // }
  }

  const createUser = async (data) => {
    try {
      const userRef = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const userDoc = {
        uid: userRef.user.uid,
        username: data.username,
        email: data.email,
        phoneNumber: data.phoneNumber,
        role: data.role,
      }
      await addDoc(collection(store, "Users"), userDoc)
    } catch(error) {
      console.log(error)
      console.error(error)
      switch(error.code) {
        case 'auth/email-already-in-use':
          dispatch(actions.userError({
            code: error.code,
            message: 'Correo no disponible'
          }))
          break;
        default:
          return null
      }
    }
  }

  const deleteUser = async (uid) => {
    auth
    .deleteUser(uid)
    .then(() => {
      console.log('Successfully deleted user');
    })
    .catch((error) => {
      console.log('Error deleting user:', error);
    })
  }

  return {
    // Constants
    list,
    isListEmpty,
    isUserListEmpty,
    isLoading,
    totalUsers,
    totalUsersShowed,

    // Methods
    fetchUsers,
    getAllUsers,
    getUsersByByName,
    createUser,
  }
}

export default useUser