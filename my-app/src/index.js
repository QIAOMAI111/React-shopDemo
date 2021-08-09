import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';  //（1）引入的ANT组件要在主文件中引入相应的CSS依赖，否则不能够显示对应的样式；
import './index.css';
//（2）引入redux的Provider以及store定义函数；
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'


//（3）创建 Redux 中的 store 
const store=configureStore();
//（4）引入主要的路由组件
import MyRoute from './router'
//（5）ReactDOM为渲染对应的组件，为数不多的采用document的方式获取root，Provider是react-redux中的方法
ReactDOM.render(
  <Provider store={store}> 
     <MyRoute />
  </Provider>,
  document.getElementById('root')
);


//简述：本页是项目的主体中的引入路由以及引入Redux的相关操作
