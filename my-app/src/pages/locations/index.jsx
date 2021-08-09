import React from 'react'
import './index.css'
import {hashHistory} from 'react-router-dom'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import LocalStore from '../../util/localStore'

//1、位置路由模块的设计，首先画出具体的布局，以及点击返回的按钮功能实现
//2、设计点击事件，点击后能在home界面中更新数据并且回返回home的路由
//3、涉及localhistory以及redux两个存储数据的实现
class Locations extends React.PureComponent{
  render(){
    const LocaArr = [
      '北京','上海','广州',
      '西安','云南','河南',
      '河北','大连','广西',
      '南京','杭州','深圳',
    ]

    return(
      <div>
          <div className="loca-main">
            <p onClick={this.backToHome} className="loca-text">返回</p>
            <p className='loca-city'>选择城市</p>  
            <p></p>
          </div>
          <div className="loca-choose">{this.props.userinfo.location}</div>
          <div className="loca-content">
              {
                LocaArr.map((item,index) => {
                  return(
                    <div className="loca-matrix" key={index} onClick={() => this.getValue(item)}>{item}</div> )
                })
              }
          </div>
      </div>
    )
  }
  backToHome = ()=> {
    if(this.props.route){
      hashHistory.push('/');
  }else {
      window.history.back();
  }
  }

  getValue = (location)=>{
    if(location){
      LocalStore.setItem('USER_CURRENT_CITY_NAME',location);
      window.history.back()
    }
  }
}

function mapStateToProps(state){
  return{
    userinfo: state.userinfo
  }
}

function mapDispathToProps(dispatch){
  return{
    userInfoActions: bindActionCreators( userInfoActionsFromOtherFile, dispatch )
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Locations)