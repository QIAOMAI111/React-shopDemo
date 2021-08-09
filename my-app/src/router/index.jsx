import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/home'
import Locations from '../pages/locations'
import Login from '../pages/login'
import User from '../pages/User'
import Detail from '../pages/Detail'


class MyRoute extends React.PureComponent{
  render(){
    return(
      <Router>
        <Route exact path='/' component={Home}></Route>
        <Route path='/locations' component={Locations}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/User' component={User}></Route>
        <Route path='/Detail/:id' component={Detail}></Route>
        {/*query和state方法 <Route path='/Detail' component={Detail}></Route> */}
      </Router>
    )
  }
}

export default MyRoute

//设置总的路由文件（1）Home主页；exact是精确匹配（2）位置选择页面；（3）登录页面；（4）详情页面；（5）用户信息页面【id指自定义的变量】
//Router 使用HTML5 History API BrowserRouter 保证UI组件和URL同步 ；Route是在路径与URL匹配时渲染指定的UI组件
