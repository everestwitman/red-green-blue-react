export const message(text = "Default text"){
  return {type: 'MESSAGE', text: text};
}

export const playCard(index){
  return {type: 'PLAY_CARD', index: index};
}

export const drawCards(){
  return {type: "DRAW_CARDS"};
}
