/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../redux/productDucks'

const useProducts = () => {
  const dispatch = useDispatch()
  const all = useSelector(store => store.product.all)
  const productListByCategory = useSelector(store => store.product.productListByCategory)
  const productListByName = useSelector(store => store.product.productListByName)
  const isLoading = useSelector(store => store.product.isLoading)
  const isProductListEmpty = !all.length
  const category = useSelector(store => store.product.category)
  const name = useSelector(store => store.product.name)

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
        const result = await fetch(`${process.env.REACT_APP_API_URL}/products.json`)
        const data = await result.json()
        dispatch(actions.fetchProducts(data))
      }
    } catch(error) {
      console.error(error)
    }
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

  return {
    // Constants
    list,
    isListEmpty,
    isProductListEmpty,
    isLoading,
    totalProducts,
    totalProductsShowed,

    // Methods
    fetchProducts,
    getAllProducts,
    getProductsByCategory,
    getProductsByName
  }
}

export default useProducts