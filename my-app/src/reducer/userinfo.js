//初始化 state
const previousState = {}

//reducer创建，输入state以及action 输出新的state
export default function userinfo (state = previousState, action){
  switch (action.type){
    case 'LOCATION':
         return action.data;
    default:
      return state
  }
}