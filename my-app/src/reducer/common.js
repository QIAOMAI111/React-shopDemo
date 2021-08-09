//1、初始化state
const previousState = []
//reducer创建，输入state以及action 输出新的state
export default function common(state=previousState,action){
  switch(action.type){
       case 'STORE_ADD':
         state.unshift(action.data);
         return state
       case 'STORE_RM':
        return state.filter((item)=>{
           if(item.id !==action.data.id){
              return item
           }
         });

    default:
      return state 

  }
}

