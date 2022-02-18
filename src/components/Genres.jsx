import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeGenreAction } from '../store/activeGenreReducer';

const Genres = () => {

  const genres = [
    {name: 'All genres', type: 'All genres'},
    {name: 'Adventures', type: 'Adventure'},
    {name: 'Actions', type: 'Action'},
    {name: 'Fantasies', type: 'Fantasy'},
    {name: 'Criminal', type: 'Crime'},
    {name: 'Comedies', type: 'Comedy'},
    {name: 'Dramas', type: 'Drama'},
    {name: 'Thrillers', type: 'Thriller'},
  ];

  const dispatch = useDispatch();
  const activeGenre = useSelector(state => state.activeGenre.activeGenre);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map(genre =>
          <li
            key={genre.name}
            className={`catalog__genres-item ${activeGenre.name === genre.name ? 'catalog__genres-item--active' : ''}`}
          >
            <Link
              to={'#' + genre.name}
              className="catalog__genres-link"
              onClick={() => {
                dispatch(activeGenreAction(genre));
              }}
            >
              {genre.name}
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default Genres;
