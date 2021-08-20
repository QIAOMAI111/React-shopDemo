export function getBannerData(){
  const result = fetch('/api/banner',{
    credentials:'include',
    headers:{
      'Accept':'application/json,text/plain,*/*'
    }
  });
  return result
}