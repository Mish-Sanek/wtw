import React from "react";

const OverviewTab = (props) => {
  const tabInfo = props.tabsInfo;

  const getRatingWord = (value) => {
    switch (Math.round(value)) {
      case 0:
      case 1:
      case 2:
        return 'Bad';
      case 3:
      case 4:
        return 'Normal'
      case 5:
      case 6:
      case 7:
        return 'Good'
      case 8:
      case 9:
        return 'Very good'
      default:
        return "Awesome";
    }
  }

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{tabInfo.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {getRatingWord(tabInfo.rating)}
          </span>
          <span className="movie-rating__count">{tabInfo.scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{tabInfo.description}</p>
        <p className="movie-card__director"><strong>Director: {tabInfo.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {tabInfo.starring.join(', ')}</strong></p>
      </div>
    </>
  )
}

export default OverviewTab;
