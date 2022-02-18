import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";

const AddReview = () => {

  const films = useSelector(state => state.films.films);
  const activeFilmId = useSelector(state => state.films.activeFilmId);
  const userAvatar = useSelector(state => state.user.data);

  const activeFilm = films.find(film => film.id === activeFilmId);

  return (
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor: activeFilm.backgroundColor}}
    >
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="/movie-page" className="breadcrumbs__link">{activeFilm.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
            <div className="user-block">
              <div className="user-block__avatar">
                <img src={userAvatar.avatar_url} alt="User avatar" width={63} height={63} />
              </div>
            </div>
          </header>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={activeFilm.posterImage} alt={activeFilm.name} width={218} height={327} />
          </div>
        </div>
        <AddReviewForm />
      </section>
  )
}

export default AddReview;
