import { connect } from 'react-redux'
import { playCard } from '../actions'
import Table from '../components/Table'

const mapStateToProps = (state) => {
  return {
    currentCard: state.currentCard;
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: (id) => {
//       dispatch(playCard(id))
//     }
//   }
// }

const CurrentCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)

export default CurrentCard