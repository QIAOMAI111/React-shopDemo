import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Cheap from '../../components/Cheap'
import Recommend from '../../components/Recommend'
import './index.css'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import LocalStore from '../../util/localStore'

//1、Home为主页面的构造包括Headr、轮播图Banner、超值特惠模块、推荐模块
//2、结合redux把位置上的数据读取作为一个同步获得的操作

class Home extends React.PureComponent {
  
  render() {
    return (
      <div>
        <Header location={this.props.userinfo.location} history={this.props.history}></Header>
        <Banner/>     
        <Cheap/>
        <Recommend/>
      </div>
    )
  }

componentDidMount(){
  let location = LocalStore.getItem('USER_CURRENT_CITY_NAME')

  if(location == null){
    location = "位置"
  }
  //将数据写入redux
  this.props.userInfoActions.update({
   location: location   //为对象 data:data
  })
}
}

//将state转为props
function mapStateToProps(state){
  return{
    userinfo: state.userinfo
  }
}
//将操作转为action
function mapDispatchToProps(dispatch){
  return{
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
  }
}

//react-redux 中的connect属性
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

