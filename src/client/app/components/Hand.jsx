import React, { PropTypes } from 'react';
import Card from './Card'

const Hand = (props) => {
  const handClass = `hand ${props.player}`;
  return(
     <div className={handClass}>
        {props.cards}
     </div>
    );
}

Hand.propTypes = {
  player: PropTypes.string.isRequired,
  cards: PropTypes.object.isRequired
}

export default Hand;