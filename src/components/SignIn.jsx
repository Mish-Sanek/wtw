import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { userLogInAction } from "../store/userReducer";

const SignIn = () => {

  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const auth = getAuth();

  const onFormSubmit = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((user) => {
        dispatch(userLogInAction(user.user))
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return isAuth === true ?
    <Navigate to="/" />
    :
    (
      <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <Link to="/movies" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <h1 className="page-title user-page__title">Sign in</h1>
          </header>
          <div className="sign-in user-page__content">
            <form
              className="sign-in__form"
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit();
              }}
            >
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="user-email"
                    id="user-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email" >
                    Email address
                  </label>
                </div>
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="user-password"
                    id="user-password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </form>
          </div>
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
    )
};

export default SignIn;
