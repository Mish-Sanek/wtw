import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showMoreFilmsAction } from "../store/showMoreFilmsReducer";
import CardList from "./CardList";
import FavoriteButton from "./FavoriteButton";
import Genres from "./Genres";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";
import PlayVideoButton from "./PlayVideoButton";

const Main = () => {
  const dispatch = useDispatch();

  const films = useSelector(state => state.films.films);
  const activeFilmId = useSelector(state => state.films.activeFilmId);
  const activeFilm = films.find(film => film.id === activeFilmId);
  const showedFilmsCount = useSelector(state => state.showedFilmsCount.showedFilmsCount);
  const activeGenre = useSelector(state => state.activeGenre.activeGenre);

  const genreFilterCunstructor = (genre) => {
    const filteredFilms = films.filter(film => film.genre === genre);
    return filteredFilms;
  }

  const genredFilms = () => {
    if(activeGenre.type === 'All genres') {
      return films;
    } else {
      return genreFilterCunstructor(activeGenre.type);
    }
  }

  let shownedFilms = genredFilms().slice(0, showedFilmsCount);

  const addShownFilms = () => {
    let prevCount = shownedFilms.length;
    dispatch(showMoreFilmsAction(prevCount += 8));
  }

  return (
    <>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <PageHeader />
          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={activeFilm.posterImage} alt={activeFilm.name} width={218} height={327} />
              </div>
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{activeFilm.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{activeFilm.genre}</span>
                  <span className="movie-card__year">{activeFilm.released}</span>
                </p>
                <div className="movie-card__buttons">
                  <PlayVideoButton />
                  <FavoriteButton />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <Genres genredFilms={genredFilms} />
            <CardList films={shownedFilms} />
            {
              showedFilmsCount <= films.length && shownedFilms.length >= showedFilmsCount ?
              <div className="catalog__more">
                <button
                  onClick={() => addShownFilms()}
                  className="catalog__button"
                  type="button"
                >
                  Show more
                </button>
              </div>
              :
              ''
            }
          </section>
          <PageFooter />
        </div>
    </>
  )
}

export default Main;
