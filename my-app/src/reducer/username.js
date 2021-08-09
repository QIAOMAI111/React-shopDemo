const previousState = {}

export default function username(state=previousState,action){
  switch(action.type){
    case 'username':
      return action.data;
    default:
      return state
  }
}