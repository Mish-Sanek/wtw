import React from "react";
import Card from "./Card";

const CardList = ({films}) => {

  return (
    <div className="catalog__movies-list">
      {
        films.map((film, index) => <Card key={film.id} index={index} film={film} />)
      }
    </div>
  )
}

export default CardList;
