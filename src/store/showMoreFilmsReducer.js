const initialState = {
  showedFilmsCount: 8,
}

const ADD_SHOWN_FILMS = 'ADD_SHOWN_FILMS';

export const showMoreFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOWN_FILMS:
      return {...state, showedFilmsCount: action.payload}
    default:
      return state;
  }
}

export const showMoreFilmsAction = (payload) => ({type: ADD_SHOWN_FILMS, payload});
