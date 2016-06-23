import React, { PropTypes } from 'react';
import Card from './Card'

const Hand = (props, onCardClick) => {
  const handClass = `hand ${props.player}`;
  return(
     <div className={handClass}>
        {props.cards.map(card =>
          <Card color={card.color} onClick={onCardClick(card.id)}/>
          )}
     </div>
    );
}

Hand.propTypes = {
  player: PropTypes.string.isRequired,
  cards: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired,
}

export default Hand;
