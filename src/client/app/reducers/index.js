function drawCards(){
  //Randomly returns an array of 6 card components 
  let cards = [];
  var colors = ["red","green","blue"];
  for (var i = 0; i <= 5; i++) {
    let color = colors[Math.floor(Math.random() * 3)];
    cards.push({color: color, id: i})
  }   
  return cards
}

const initialState = {
  message: "This is the initial message",
  myHand: drawCards(),
  opponentHand: drawCards(),
  currentCard: {color: "red"}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PlAY_CARD':
      return ;
    default:
      return state;
  }
}


export default reducer;

//Use spread function to add a card like this
// [... state.myHand, card]


//to remove an item from an array
//reutrn list.slice (0, index).concat(list.slice(index+1))