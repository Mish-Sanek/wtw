import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeMoviePageTabAction } from "../store/moviePageTabsReducer";

const TabSelectors = (props) => {

  const tabs = ['Overview', 'Details', 'Reviews'];

  const dispatch = useDispatch();

  return (
    <ul className="movie-nav__list">
      {
        tabs.map((tab, index) =>
          <li
            key={index}
            className={`movie-nav__item ${props.activeTab === tab ? 'movie-nav__item--active' : ''}`}
          >
            <Link
              to={'#' + tab}
              onClick={() => {
                dispatch(changeMoviePageTabAction(tab))
              }}
              className="movie-nav__link"
            >
              {tab}
            </Link>
          </li>
        )
      }
    </ul>
  )
}

export default TabSelectors;
