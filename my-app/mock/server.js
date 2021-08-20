const Koa=require('koa')
const Router=require('koa-router')
const bodyparser=require('koa-bodyparser')
const app=new Koa();
const router=new Router();
app.use(bodyparser())

app.use(router.routes()) 
    .use(router.allowedMethods()); 
    //ad.js
    const cheap = require('./state/cheap')
    app.use(cheap.routes(), cheap.allowedMethods())
    //banner.js
    const banner = require('./state/banner')
    app.use(banner.routes(), banner.allowedMethods())
    //home/list.js
    const homelist = require('./state/homelist')
    app.use(homelist.routes(), homelist.allowedMethods())
    //comment.js
    const comment = require('./state/comment')
    app.use(comment.routes(), comment.allowedMethods())
    //info.js
    const info = require('./state/info')
    app.use(info.routes(), info.allowedMethods())
    //order.js
    const orderlist = require('./state/orderlist')
    app.use(orderlist.routes(), orderlist.allowedMethods())
    //search list
    const searchlist = require('./state/searchlist')
    app.use(searchlist.routes(),searchlist.allowedMethods())
    //search Post list
    const searchpost = require('./state/searchpost')
    app.use(searchpost.routes(),searchpost.allowedMethods())


    let port = 3001
    app.listen(port,(ctx)=>{
      console.log('服务启动成功：http://localhost:' + port)
      router.get('/', async (ctx, next) => {
          ctx.body = `
          <h2 style="text-align: center;margin: 10%;">
              当你看到此页面时表示服务启动成功
          </h2>
          `
      })
  })

// // 首页 —— 广告（超值特惠）
// var homeAdData = require('./api/home/ad.js')
// router.get('/api/homead', async(ctx,next)=>{
//       ctx.response.body = homeAdData
//     next()
// });
// //首页 ——轮播图
// var bannerData = require('./api/banner/banner.js')
// router.get('/api/banner',async(ctx,next)=>{
//   ctx.response.body =bannerData 
//   next()
// });


// // 首页 —— 推荐列表（猜你喜欢）
// var homeListData = require('./api/home/list.js')
// router.get('/api/homelist/:city/:page', async(ctx,next)=>{
//     ctx.response.body = homeListData
//     next()
// });

// // 搜索结果页 - 搜索结果 - 三个参数
// var searchListData = require('./api/search/list.js')
//   router.get('/api/search/:page/:location/:category/:keyword',  async(ctx,next)=>{
//     ctx.response.body = searchListData
//     next()
// })

// // 详情页 - 商户信息
// const detailInfo = require('./api/detail/info.js')
// router.get('/api/detail/info/:id',  async(ctx,next)=>{
//     console.log('详情页 - 商户信息')
//     ctx.response.body = detailInfo
//     next()
// })
// // 详情页 - 用户评论
// const detailComment = require('./api/detail/comment.js')
// router.get('/api/detail/comment/:page/:id',  async(ctx,next)=>{
//     console.log('详情页 - 用户点评')
//     ctx.response.body = detailComment
//     next()
// })

// // 订单列表
// const orderList = require('./api/orderlist/orderList.js')
// router.get('/api/orderlist/:username', async(ctx,next)=>{
//     console.log(orderList)
//     ctx.response.body= orderList
//     next()
// })

// app.use( async ( ctx ) => {
//    if ( ctx.url === '/api/choose/' && ctx.method === 'POST' ) {
//     // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
//     let postData = '567'
//     ctx.response.body = postData
//   } 
// })

// // 开始服务并生成路由
