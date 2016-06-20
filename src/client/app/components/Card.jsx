import React, { PropTypes } from 'react';

const Card = (props) => {
  const cardClass = `card ${props.color}-card`;

  return <div className={cardClass} onClick={props.onClick}></div>;
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}

export default Card;