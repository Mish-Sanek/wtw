import React, { useState } from "react";

const AddReviewForm = () => {

  const ratingArray = [1, 2, 3, 4, 5];
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(3);

  const submitHandle = () => {
    const reviewData = {
      rating,
      text: reviewText
    }
    console.log(reviewData);
  }

  return (
    <div className="add-review">
      <form
        className="add-review__form"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandle();
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            {
              ratingArray.map(star =>
                <React.Fragment key={star}>
                  <input
                    className="rating__input"
                    id={'star-' + star}
                    type="radio" name="rating"
                    defaultChecked={star === rating && true}
                    defaultValue={star}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <label className="rating__label" htmlFor={'star-' + star}>Rating {star}</label>
                </React.Fragment>
              )
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" disabled={reviewText === '' ? true : false} type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddReviewForm;
