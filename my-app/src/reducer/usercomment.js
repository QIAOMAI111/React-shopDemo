const previousState=[]
export default function usercomment(state=previousState,action){
  switch(action.type){
    case 'COMMENT_ADD':
    state.push(action.data);
    return state

    case 'COMMENT_UPDATE':
      if(state.length>0){
        state.some((item)=>{
          if(item.title === action.data.title){
              item.comment=action.data.comment;
              item.stars=action.data.stars;
              return true
          }
        })
      }
      return state
      default:
        return state
  }
}