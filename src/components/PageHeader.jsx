import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const PageHeader = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const userAvatar = useSelector(state => state.user.data);

  const location = useLocation();

  return (
    <header className={"page-header movie-card__head user-page__head"}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {location.pathname === '/my-list' && <h1 className="page-title user-page__title">My list</h1>}
      <div className="user-block">
        {
          isAuth ?
          <div className="user-block__wrapper">
            <Link to="/my-list">My list</Link>
            <div className="user-block__avatar">
              <img src={userAvatar.avatar_url} alt="User avatar" width={63} height={63} />
            </div>
          </div>
          :
          <div>
            <Link to="/sign-in" className="user-block__link">Sign in</Link>
          </div>
        }
      </div>
    </header>
  )
}

export default PageHeader;
