import React from 'react'
import './buystore.css'
import {bindActionCreators}from'redux'
import * as commonActionsFrom from '../../../actions/common'
import {connect} from 'react-redux'

//1、主要是购买和收藏按钮的逻辑实现
//2、收藏和购买之前都需要检查用户是否登录
//3、收藏按钮的实现，要将收藏的id存到redux中，如果已经收藏的会一直显示显示的状态

class DetailbuyStore extends React.PureComponent{
  constructor(props){
        super(props)
        this.state={
          isStore:false
        }
  }

  render(){
    const storeStyle=this.state.isStore? 'has-store':'no-store'
    return(
      <div>         
            <div className="Detail-Button">
               <button onClick={this.store} className={storeStyle}>收藏</button>
               <button onClick={this.buy} className="buystore-buy">购买</button>
            </div>
      </div>
    )
  }
 componentDidMount(){
  this.checkStoreState()
 }
 //检查是否已经收藏
 checkStoreState=()=>{
  const id=this.props.id
  const common=this.props.common
  common.some((item)=>{
    if(item.id === id){
      this.setState({
        isStore:true
      })
      return true
    }
  })
 }
  //首先每一步都需要检查登陆状态
  loginCheck=()=>{
      const username=this.props.username
      if(!username.phone || !username.password){
       this.props.history.push('/login');
        return false;
      }else{
        return true;
      }
  }
  //收藏操作
  store=()=>{
    //验证登录
    const loginFlag=this.loginCheck();
    if(!loginFlag){
      return
    }
    const id = this.props.id;
    const commonActions = this.props.commonActions;
    if(!this.state.isStore){
      commonActions.add({id:id})
    }else{
      commonActions.rm({id:id})
    }
    this.setState({
      isStore:!this.state.isStore
    })
  }
//购买操作
  buy=()=>{
    //验证登录
    const loginFlag=this.loginCheck()
    if(!loginFlag){
      return
    }
     this.props.history.push('/User')
  }
}

function mapStateToProps(state){
  return{
    username: state.username,
    common:state.common
  }
}
function mapDispatchToProps(dispatch){
  return{
    commonActions:bindActionCreators(commonActionsFrom,dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailbuyStore)