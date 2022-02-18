// Constants
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGIN'
const AUTH_LOADING = 'AUTH_LOADING'
const AUTH_ERROR = 'AUTH_ERROR'

const initialState = {
  user: {},
  error: {
    code: '',
    message: '',
  },
  loading: false
}

// Reducer
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN: {
      return {
        user: payload,
        error: {
          code: '',
          message: ''
        },
        loading: false
      }
    }

    case AUTH_LOGOUT: {
      return {
        user: {},
        error: {
          code: '',
          message: ''
        },
        loading: false,
      }
    }

    case AUTH_LOADING: {
      return {
        ...state,
        error: {
          code: '',
          message: ''
        },
        loading: true,
      }
    }

    case AUTH_ERROR: {
      return {
        ...state,
        error: payload,
        loading: false
      }
    }

    default:
      return state
  }
}

// Actions
export const actions = {
  authLogin: (user) => {
    return {
      type: AUTH_LOGIN,
      payload: user
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
  },

  authError: (error) => {
    return {
      type: AUTH_ERROR,
      payload: error
    }
  }
}