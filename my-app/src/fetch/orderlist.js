export function getorderlist(username){
  const result = fetch('/api/orderlist/'+username,{
    credentials:'include',
    headers:{
      'Accept':'application/json,text/plain,*/*'
    }
  })
  return result
}