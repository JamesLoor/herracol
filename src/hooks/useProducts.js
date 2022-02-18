/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/productDucks'
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { store, storage } from '../firebase'

const useProducts = () => {
  const dispatch = useDispatch()
  const all = useSelector(store => store.product.all)
  const productListByCategory = useSelector(store => store.product.productListByCategory)
  const productListByName = useSelector(store => store.product.productListByName)
  const isLoading = useSelector(store => store.product.isLoading)
  const isProductListEmpty = !all.length
  const category = useSelector(store => store.product.category)
  const name = useSelector(store => store.product.name)
  const API = "https://herracol-api-8820d-default-rtdb.firebaseio.com"

  const selectList = () => {
    if(productListByCategory.length > 0 && category && !name) {
      return productListByCategory
    }

    if(name) {
      return productListByName
    }

    return all
  }

  let list = selectList()
  const totalProducts = all.length
  const totalProductsShowed = list.length
  const isListEmpty = !list.length

  const fetchProducts = async () => {
    dispatch(actions.loading())
    try {
      if(isProductListEmpty) {
        const result = await fetch(`${API}/products.json`)
        const data = await result.json()
        dispatch(actions.fetchProducts(data))
      }
    } catch(error) {
      console.error(error)
    }
    // dispatch(actions.loading())
    // try {
    //   if(isProductListEmpty) {
    //     const products = []
    //     const query = collection(store, "Products")
    //     const querySnapshot = await getDocs(query)
    //     querySnapshot.forEach((doc) => {
    //       const data = doc.data()
    //       const product = { id: doc.id , ...data}
    //       products.push(product)
    //     })
    //     dispatch(actions.fetchProducts(products))
    //   }
    // } catch(error) {
    //   console.error(error)
    // }
  }

  const getAllProducts = () => {
    dispatch(actions.loading())
    try {
      if(!isProductListEmpty) {
        dispatch(actions.getProducts())
      }
    } catch(error) {
      console.error(error)
    }
  }

  const getProductsByCategory = async (category) => {
    dispatch(actions.loading())
    try {
      if(category) {
        if(isProductListEmpty) {
          await fetchProducts()
        }
        dispatch(actions.getProductsByCategory(category))
      } else {
        getAllProducts()
      }
    } catch(error) {
      console.error(error)
    }
  }

  const getProductsByName = (name) => {
    dispatch(actions.loading())
    try {
      dispatch(actions.getProductsByName(name))
    } catch(error) {
      console.error(error);
    }
  }

  const createProduct = async (data) => {
    const imageId = `${data.code}-${data.name}`
    const storageRef = ref(storage, `/productImage/${imageId}`)
    const uploadTask = uploadBytesResumable(storageRef, data.image)
    uploadTask.on('state_changed', () => {
      // Here progress bar
    }, (error) => {
      console.error(error)
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
        default:
          return null
      }
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then(async firebaseUrl => {
          data.image = firebaseUrl
          const docRef = await addDoc(collection(store, "Products"), data)
          console.log("Document written with ID: ", docRef.id);
        })
    })
  }

  return {
    // Constants
    list,
    category,
    isListEmpty,
    isProductListEmpty,
    isLoading,
    totalProducts,
    totalProductsShowed,

    // Methods
    fetchProducts,
    getAllProducts,
    getProductsByCategory,
    getProductsByName,
    createProduct,
  }
}

export default useProducts