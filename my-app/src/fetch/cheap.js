
export function getAdData(){
  const result = fetch('/api/homead',{
    credentials: 'include',
    headers:{
      'Accept': 'application/json, text/plain, */*'
    }
  });
  return result;
}