const Router = require('koa-router')
const router = new Router()
const cors = require('koa-cors')




const data=require('../api/banner/banner')
router.get('/api/banner', async (ctx, next) => {
  // 打印get请求携带的参数
  console.log(ctx.query);
  // 允许cors跨域请求
  await cors();
  ctx.body = JSON.stringify(data);
})

// 导出 router 实例
module.exports = router