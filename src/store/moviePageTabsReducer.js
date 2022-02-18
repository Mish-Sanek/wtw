const initialState = {
  moviePageActiveTab: 'Overview',
}

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

export const moviePageTabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_TAB:
      return {...state, moviePageActiveTab: action.payload}
    default:
      return state;
  }
}

export const changeMoviePageTabAction = (payload) => ({type: CHANGE_ACTIVE_TAB, payload});
