export function getListData(location,page){
  const result = fetch('/api/homelist/' + encodeURIComponent(location) + '/' + page,
  {
    headers:{
      'Accept': 'application/json, text/plain, */*'
    }
  }) 
  return result
}