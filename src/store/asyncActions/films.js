import { filmsFetchAction } from "../filmsReducer"

export const fetchFilms = () => {
  return dispatch => {
    fetch('https://9.react.pages.academy/wtw/films')
    .then(response => response.json())
    .then(json => dispatch(filmsFetchAction(json)))
  }
}
