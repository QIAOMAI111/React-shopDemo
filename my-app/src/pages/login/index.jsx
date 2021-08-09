import React from 'react'
import './index.css'
import { Input , Button } from 'antd'
import {UserOutlined,KeyOutlined } from '@ant-design/icons'
import { bindActionCreators } from 'redux'
import * as userNameActionsFrom from '../../actions/username'
import {connect} from 'react-redux'

//1、登录页面的实现，首秀按采用antDesign中Input和Button设计，改变默认的点击按钮变色功能
//2、登录验证以及登陆成功的实现
//3、将登陆用户名与登陆密码存进redux，然后在User界面调用


class Login extends React.PureComponent{
  constructor(props){
    super(props);
    //初始化state
    this.state= {
      username: '',
      password: '',
    }
  }
  render(){
    return(
      <div>
          <div className="login-main">
            <p onClick={this.backToHome} className="back">返回</p>
            <p className="log">登录</p>  
            <p></p>
          </div>
          <div className="login-blank"></div>

          <div className="login-context">             
                  <Input  onChange={this.saveusername} size="large" placeholder="请输入手机号" prefix={<UserOutlined />}className="input"/>   
                  <Input  onChange={this.savepassword} size="large" placeholder="请输入密码" prefix={<KeyOutlined />}className="input"/>
                  <Button onClick={this.login} type="primary"className="Binput">登录</Button>             
          </div>
      </div>
    )
  }
  componentDidMount(){
    this.checkout()
  }

  checkout=()=>{
    const username = this.props.username
    if(username.phone && username.password){
      this.props.history.push('/User')
    }else{
      this.props.history.push('/login')
    }
  }

  saveusername = (event)=>{ 
    this.setState({
      username:event.target.value
    })
  }
  savepassword = (event)=>{
    this.setState({
      password:event.target.value
    })
  }

  //登录
  login =()=>{
   let phone = this.state.username;
   let password = this.state.password;
   this.loginFN(phone, password)
  }


  
  //返回路由
  backToHome = ()=> {
    this.props.history.push('/')
  }
  

loginFN(phone,password){
   this.props.usernameActions.updata({
     phone:phone,
     password:password,
   });
   alert('登陆中');
   this.props.history.push('/User')
}
}

function mapStateToProps(state){
  return{username: state.username}
}

function mapDispatchToProps(dispatch){
  return{
    usernameActions:bindActionCreators(userNameActionsFrom,dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Login)