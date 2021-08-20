
export function getAdData(){
  const result = fetch('/api/cheap',{
    credentials: 'include',
    headers:{
      'Accept': 'application/json, text/plain, */*'
    }
  });
  return result;
}