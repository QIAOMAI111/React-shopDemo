import React from 'react';
import './index.css';
import { DownOutlined , UserOutlined} from '@ant-design/icons'
import Search from '../Search'
import {Link} from 'react-router-dom'


//1、主页面Home中的Header设置，其中主要是（1）左边箭头点击（2）右边用户点击设定（3）位置按钮处传递home组件传递的位置信息
//2、Link为路由的一种方式，使用AntDesign中的下箭头和用户形象图标
//3、主体的样式布局为flex，其中Search搜索界面作为模块引入，其flex-grow：2，是占据两倍的宽度


class Header extends React.PureComponent {
  render() {
    return (
     <div className="header">  
          <Link to="/locations" className="header-link">   
             {this.props.location} <DownOutlined />
          </Link> 
        <Search/>
          <div className="header-right">
              <Link to="/login" className="header-link1">
              <UserOutlined style={{ fontSize: '16px' ,color:'white'}}/>
              </Link>
          </div>
     </div>

    )
  }
}




export default Header
