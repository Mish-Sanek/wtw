const initialState = {
  activeGenre: {name: 'All genres', type: 'All genres'}
}

const CHANGE_GENRE = 'CHANGE_GENRE';

export const activeGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {...state, activeGenre: {name: action.payload.name, type: action.payload.type }};
    default:
      return state;
  }
}

export const activeGenreAction = (payload) => ({type: CHANGE_GENRE, payload});
