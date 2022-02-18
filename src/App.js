import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import MoviePage from "./components/MoviePage";
import Player from "./components/Player";
import { fetchFilms } from "./store/asyncActions/films";
import AddReview from "./components/AddReviewPage";
import MyList from "./components/MyList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" exact element={<SignIn  />} />
        <Route path="/" element={<Main  />} />
        <Route path="/movie-page/:id" element={<MoviePage />} />
        <Route path="/player" element={<Player />} />
        <Route path="/add-review" element={<AddReview/>} />
        <Route path="/my-list" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
