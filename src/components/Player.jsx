import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Player = () => {

  const goBack = useNavigate();
  const films = useSelector(state => state.films.films);
  const activeFilmId = useSelector(state => state.films.activeFilmId);
  const activeFilm = films.find(film => film.id === activeFilmId);
  const videoRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [videoDuration, setVideoDuration] = useState({hours: 0, minutes: 0, seconds: 0});

  const playToggler = () => {
    isPlay ? videoRef.current.pause() : videoRef.current.play();
    setIsPlay(!isPlay);
  }

  const getPlayerRuntime = (seconds) => {
    const time = {
      hours: 0,
      minutes: Math.floor(seconds / 60),
      seconds: Math.floor(seconds % 60),
    }

    return time;
  }

  useEffect(() => {
    isPlay && setVideoDuration(getPlayerRuntime(videoRef.current.duration));
  }, [isPlay]);

  return (
    <div className="player">
        <video ref={videoRef} className="player__video" poster={activeFilm.previewImage} src={activeFilm.videoLink} />
        <button type="button" className="player__exit" onClick={() => goBack('/')}>Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={0} max={100} />
              <div className="player__toggler" style={{left: 0}}>Toggler</div>
            </div>
            <div className="player__time-value">{videoDuration.hours + ':' + videoDuration.minutes + ':' + videoDuration.seconds}</div>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={() => playToggler()}>
              <svg viewBox="0 0 19 19" width={19} height={19}>
                {isPlay ? <use xlinkHref="#pause" /> : <use xlinkHref="#play-s" />}
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{activeFilm.name}</div>
            <button type="button" className="player__full-screen" onClick={() => videoRef.current.requestFullscreen()}>
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Player;
