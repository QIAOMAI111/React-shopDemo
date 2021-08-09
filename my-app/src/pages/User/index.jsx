import React from 'react'
import "./index.css"
import { connect } from 'react-redux'
import{bindActionCreators} from 'redux'
import * as userNameActionsFrom from '../../actions/username'
import {getorderlist} from '../../fetch/orderlist'
import Usercomment from './subpage/usercomment'


class User extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      orderArr:[],
    }
  }

  render(){
    return(
      <div>
            <div className="User-title">
                <p onClick={this.backToHome} className="User-titlet">返回</p>
                <p className="User-titley">用户中心</p>
                <p></p>
            </div>
            <div className="User-name">
              <p>登录名：{this.props.username.phone}</p>
              <p>密码：{this.props.username.password}</p>
            </div>
            <div className="User-order-main">
                 <p className="splice"></p>
                 <p className="User-order-text">您的订单</p>
            </div>          
           {
             this.state.orderArr.map((item,index) => {
               return (
                  <Usercomment key={index} order={item}/>
               )
             })
           }         
      </div>
    )
  }

  componentDidMount(){
    const username=this.props.username
      if(!username.phone || !username.password){
        this.props.history.push('/login')
        alert('请输入正确的账号和密码')
      }
    
    const result = getorderlist(username);
    result.then((res)=>{
      return res.json()
    }).then((json)=>{
      this.setState({
        orderArr:json
      })
    })
  }



  handleComment = ()=>{
    this.setState({
      hascomment:true
    })
  }

  backToHome = ()=>{   
        this.props.history.push('/') 
    }
}
function mapStateToProps(state){
  return{
    username: state.username
  }
}
function mapDispatchToProps(dispatch){
  return{
    usernameActions:bindActionCreators(userNameActionsFrom,dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (User)

