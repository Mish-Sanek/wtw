import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlayVideoButton = () => {

  const isAuth = useSelector(state => state.user.isAuth);
  const toLogin = useNavigate();
  const toPlayer = useNavigate();

  return (
    <button
      onClick={() => {
        isAuth ? toPlayer('/player') : toLogin('/sign-in')
      }}
      className="btn btn--play movie-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  )
}

export default PlayVideoButton;
