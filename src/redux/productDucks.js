// Constants
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY'
const GET_PRODUCTS_BY_NAME = 'GET_PRODUCTS_BY_NAME'
const LOADING = 'LOADING'

const initialState = {
  all: [],
  productListByCategory: [],
  productListByName: [],
  isLoading: false,
  category: '',
  name: '',
}

// Reducer
export const productReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        all: [...payload],
        isLoading: false,
        category: ''
      }
    }

    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        category: ''
      }
    }

    case GET_PRODUCTS_BY_CATEGORY: {
      const productListByCategory = state.all.filter((product) => product.category.includes(payload))
      return {
        ...state,
        productListByCategory,
        isLoading: false,
        category: payload
      }
    }

    case GET_PRODUCTS_BY_NAME: {
      let productListByName
      if(state.category) {
        productListByName = state.productListByCategory.filter((product) => product.name.toLowerCase().startsWith(payload.toLowerCase()))
      } else {
        productListByName = state.all.filter((product) => product.name.toLowerCase().startsWith(payload.toLowerCase()))
      }

      return {
        ...state,
        productListByName,
        isLoading: false,
        name: payload
      }
    }

    case LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }

    default:
      return state
  }
}

// Actions
export const actions = {
  fetchProducts: (products) => {
    return {
      type: FETCH_PRODUCTS,
      payload: products
    }
  },

  getProducts: () => {
    return {
      type: GET_PRODUCTS
    }
  },

  getProductsByCategory: (category) => {
    return {
      type: GET_PRODUCTS_BY_CATEGORY,
      payload: category
    }
  },

  getProductsByName: (name) => {
    return {
      type: GET_PRODUCTS_BY_NAME,
      payload: name
    }
  },

  loading: () => {
    return {
      type: LOADING
    }
  }

}