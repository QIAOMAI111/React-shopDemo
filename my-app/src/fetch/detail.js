export function getDetailData(id){
  const result = fetch('/api/detail/info/'+id,{
    credentials: 'include',
    headers:{
      'Accept':'application/json,text/plain,*/*'
    }
  })
  return result
}

export function getCommentData(page,id){
  const result = fetch('/api/detail/comment/'+page+'/'+id,{
    credentials: 'include',
    headers:{
      'Accept':'application/json,text/plain,*/*'
    }
  })
  return result
}