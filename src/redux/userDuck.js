// Constants
const FETCH_USERS = 'FETCH_USERS'
const GET_USERS = 'GET_USERS'
const GET_USERS_BY_NAME = 'GET_USERS_BY_NAME'
const LOADING = 'LOADING'
const USER_ERROR = 'USER_ERROR'

const initialState = {
  all: [],
  userListByName: [],
  isLoading: false,
  name: '',
  error: {
    code: '',
    message: '',
  },
}

// Reducer
export const userReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_USERS: {
      return {
        ...state,
        all: [...payload],
        isLoading: false,
        name: ''
      }
    }

    case GET_USERS: {
      return {
        ...state,
        isLoading: false,
        name: ''
      }
    }

    case GET_USERS_BY_NAME: {
      let userListByName
      if(state.category) {
        userListByName = state.userListByName.filter((user) => user.displayName.toLowerCase().includes(payload.toLowerCase()))
      } else {
        userListByName = state.all.filter((user) => user.displayName.toLowerCase().includes(payload.toLowerCase()))
      }

      return {
        ...state,
        userListByName,
        isLoading: false,
        name: payload
      }
    }

    case USER_ERROR: {
      return {
        ...state,
        error: payload,
        isLoading: false
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
  fetchUsers: (users) => {
    return {
      type: FETCH_USERS,
      payload: users
    }
  },

  getUsers: () => {
    return {
      type: GET_USERS
    }
  },


  getUsersByName: (name) => {
    return {
      type: GET_USERS_BY_NAME,
      payload: name
    }
  },

  loading: () => {
    return {
      type: LOADING
    }
  },

  userError: (error) => {
    return {
      type: USER_ERROR,
      payload: error
    }
  }

}