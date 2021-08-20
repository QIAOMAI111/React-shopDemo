export function getSearchData(page,location,category,keyword){
  const keywordStr = keyword ? '/'+keyword:''
  const result = fetch('/api/search/'+page +'/'+location+'/'+category+keywordStr,{
    credentials:'include',
    headers:{
      'Accept':'application/json,text/plain,*/*'
    }
  })
  return result
}