const { ConsoleSqlOutlined } = require('@ant-design/icons')
const Router = require('koa-router')
const router = new Router()



const data=require('../api/orderlist/orderList')
router.post('/api/choose', async (ctx, next) => {
  // 打印get请求携带的参数
  console.log('ctx.request.body',ctx.request.body)
  console.log(JSON.stringify(ctx.request.body));
  
  //对获取信息进行筛选逻辑
  const index = ctx.request.body.text
  console.log(index)
  const resultDatas=data
  if(resultDatas<=0){
    return
  }
  const peerHtml=[]
  resultDatas.forEach((item,key)=>{
         let s='';
         s+=item.title?item.title+' ':''
         if(s.indexOf(index)>=0){
            peerHtml.push(item)
         }
        })
  ctx.body = peerHtml;
})

// 导出 router 实例
module.exports = router