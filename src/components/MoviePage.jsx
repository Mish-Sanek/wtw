import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardList from "./CardList";
import FavoriteButton from "./FavoriteButton";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";
import PlayVideoButton from "./PlayVideoButton";
import Tabs from "./Tabs";
import TabSelectors from "./TabSelectors";

const MoviePage = () => {

  const films = useSelector(state => state.films.films);
  const activeFilmId = useSelector(state => state.films.activeFilmId);
  const activeTab = useSelector(state => state.moviePageActiveTab.moviePageActiveTab);
  const isAuth = useSelector(state => state.user.isAuth);

  const film = films.find(film => film.id === activeFilmId);

  const tabsInfo = {
    rating: film.rating,
    scoresCount: film.scoresCount,
    description: film.description,
    director: film.director,
    starring: film.starring,
    runTime: film.runTime,
    genre: film.genre,
    released: film.released
  }

  const sameFilms = films.filter(item => item.genre === film.genre);

  return (
    <div>
        <section
          className="movie-card movie-card--full"
          style={{backgroundColor: film.backgroundColor}}
        >
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <PageHeader />
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.released}</span>
                </p>
                <div className="movie-card__buttons">
                  <PlayVideoButton />
                  {
                    isAuth &&
                    <>
                      <FavoriteButton />
                      <Link to='/add-review' className="btn movie-card__button">Add review</Link>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={film.posterImage} alt={film.name} width={218} height={327} />
              </div>
              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <TabSelectors activeTab={activeTab}/>
                </nav>
                <Tabs tabsInfo={tabsInfo} activeTab={activeTab} />
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <CardList films={sameFilms}  />
          </section>
          <PageFooter />
        </div>
      </div>
  )
}

export default MoviePage;
