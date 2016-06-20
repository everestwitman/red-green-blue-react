import React, { PropTypes } from 'react';
import Hand from './Hand'

const Table = ({currentCard}) => (
  <div>
    <Hand player="opponent-hand"/>
      <div className="play-area">
          {currentCard}
      </div>
    <Hand player="my-hand"/>
  </div>
)

Table.propTypes = {
  currentCard: PropTypes.object.isRequired,
}

export default Table;