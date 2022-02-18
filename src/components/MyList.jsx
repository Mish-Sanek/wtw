import React from "react";
import { useSelector } from "react-redux";
import PageHeader from "./PageHeader";
import CardList from "./CardList";
import PageFooter from "./PageFooter";
import { Navigate } from "react-router-dom";

const MyList = () => {

  const isAuth = useSelector(state => state.user.isAuth);
  const films = useSelector(state => state.films.films);
  const favoriteFilms = films.filter(film => film.isFavorite === true);

  return isAuth ?
    (
      <div className="user-page">
          <PageHeader />
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            {
              favoriteFilms.length ?
              <CardList films={favoriteFilms} /> :
              <p>There's not films in watchlist yet.</p>
            }
          </section>
          <PageFooter />
      </div>
    )
    :
    <Navigate to='/sign-in' />
}

export default MyList;
