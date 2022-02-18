import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changefilmsFavoriteFlagAction } from "../store/filmsReducer";

const FavoriteButton = () => {

  const films = useSelector(state => state.films.films);
  const activeFilmId = useSelector(state => state.films.activeFilmId);

  const activeFilm = films.find(film => film.id === activeFilmId);

  const isAuth = useSelector(state => state.user.isAuth);


  const dispatch = useDispatch();

  const toggleFavoriteFilm = (activeFilm) => {
    dispatch(changefilmsFavoriteFlagAction(activeFilm.id));
  }

  return isAuth && (
    <button
      className="btn btn--list movie-card__button" type="button"
      onClick={() => {
        toggleFavoriteFilm(activeFilm);
      }}
    >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        {activeFilm.isFavorite ? <use xlinkHref="#in-list" /> : <use xlinkHref="#add" />}
      </svg>
      <span>My list</span>
    </button>
  )
}

export default FavoriteButton;
