export function add(item){
  return{
    type:'STORE_ADD',
    data:item
  }
}

export function rm(item){
  return{
    type:'STORE_RM',
    data:item
  }
}

