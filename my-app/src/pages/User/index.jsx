import React from 'react'
import "./index.css"
import { connect } from 'react-redux'
import{bindActionCreators} from 'redux'
import * as userNameActionsFrom from '../../actions/username'
import {getorderlist} from '../../fetch/orderlist'
import Usercomment from './subpage/usercomment'
import {SearchOutlined}from '@ant-design/icons';
import {Input}from 'antd'
import {post} from '../../fetch/choose'


class User extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      orderArr:[],
      text:'',
      peerData:[],
      search:false
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
                        <div className="user-search">
                            <p className="User-order-text">您的订单</p> 
                                  <div className='search-right'>
                                      <Input placeholder="搜索所需内容" style={{ width: 200 }} 
                                             value={this.state.text} onKeyUp={this.keyup} onChange={this.handleChange} />
                                            {/* //  value={this.state.text} onKeyDown={this.filterInfo} onKeyUp={this.keyup} onChange={this.handleChange} /> */}
                                      <SearchOutlined />
                                 </div>
                        </div>
            </div>          
           {
                    this.state.search && this.state.text.length>0?     
                    this.state.peerData.map((item,index) => {
                      return (
                        <Usercomment key={index} order={item}/>
                      )
                    }):
                        this.state.orderArr.map((item,index) => {
                          return (
                              <Usercomment key={index} order={item}/>
                          )
                        })
           }         
      </div>
    )
  }
  
  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }

  //  filterInfo=(e)=>{ 前端实现信息的筛选
  //    const text = e.target.value
  //    const resultDatas = this.state.orderArr;
  //    if(resultDatas.length<=0){
  //      return
  //    }
  //    const peerHtml=[]
  //    resultDatas.forEach((item,key)=>{
  //      let s='';
  //      s+=item.title?item.title+' ':''
  //      if(s.indexOf(text)>=0){
  //         peerHtml.push(item)
  //         this.setState({peerData:peerHtml})
  //      }
  //    })
  //    if(peerHtml.length<=0){
  //      this.setState({peerData:peerHtml})
  //    }
  // }
  // keyup=(e)=>{
  //   if(e.key!=='Enter'){
  //     return 
  //   }else{
  //     this.setState({
  //       search:true
  //     })
  //   }
  keyup=(e)=>{
    if(e.key!=='Enter'){
      return 
    }else{
      console.log({text:e.target.value})
      const result=post('/api/choose',{text:e.target.value})
        result.then((res)=>{
          return res.json()
        }).then((json)=>{
          this.setState({
            search:true,
            peerData:json
          })
        })
      }
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

