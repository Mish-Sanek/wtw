const initialState = {
  data: {
    id: null,
    email: null,
    token: null,
    avatar_url: "https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg"
  },
  isAuth: false,
}

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuth: true,
        data: {
          ...state.data,
          id: action.payload.uid,
          email: action.payload.email,
          token: action.payload.accessToken,
        }
      }
    case LOG_OUT:
      return {...state, authorizationStatus: action.payload}
    default:
      return state;
  }
}

export const userLogInAction = (payload) => ({type: LOG_IN, payload});
export const userLogOutAction = (payload) => ({type: LOG_OUT, payload});
