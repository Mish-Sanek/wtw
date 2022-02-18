import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { activeFilmAction } from "../store/filmsReducer";

import CardVideo from "./CardVideo";

const Card = (props) => {

  const film = props.film;

  const articleRef = useRef();
  const videoRef = useRef();
  const dispatch = useDispatch();

  const [isVideoPlay, setIsVideoPlay] = useState(false);

  let playVideo;

  const stopVideo = () => {
    videoRef.current.load();
  }

  return (
    <article
      ref={articleRef}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        playVideo = setTimeout(() => {
          videoRef.current.play();
        }, 1000)
      }}
      onMouseOut={() => {
        clearTimeout(playVideo);
        stopVideo();
      }}
    >
      <div className="small-movie-card__image">
        <CardVideo
          ref={videoRef}
          poster={film.previewImage}
          videoUrl={film.previewVideoLink}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/movie-page/${film.id}`}
          onClick={() => {
            dispatch(activeFilmAction(film.id));
          }}
        >
          {props.film.name}
        </Link>
      </h3>
    </article>
  )
}

export default Card;
