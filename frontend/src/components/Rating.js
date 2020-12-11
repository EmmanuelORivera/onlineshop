import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  console.log(value, text, color);
  const makeStarsRating = () => {
    const numOfStars = 5;
    const arrayOfStars = [];
    for (let index = 0; index < numOfStars; index++) {
      arrayOfStars.push(
        <>
          <i
            style={{ color }}
            className={
              value >= index + 1
                ? 'fas fa-star'
                : value >= index + 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </>
      );
    }
    return arrayOfStars;
  };

  const starsRating = makeStarsRating();

  return (
    <div className='rating'>
      {starsRating.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
