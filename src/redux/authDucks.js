// Constants
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGIN'
const AUTH_LOADING = 'AUTH_LOADING'

const initialState = {
  user: {},
  loading: false
}

// Reducer
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        user: payload,
        loading: false
      }
    }

    case AUTH_LOGOUT: {
      return {
        ...state,
        user: {},
        loading: false,
      }
    }

    case AUTH_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    default:
      return state
  }
}

// Actions
export const actions = {
  authLogin: (email, password) => {
    return {
      type: AUTH_LOGIN,
      payload: {email, password}
    }
  },

  authLogout: () => {
    return {
      type: AUTH_LOGOUT
    }
  },

  authLoading: () => {
    return {
      type: AUTH_LOADING
    }
  }
}