import React from 'react'
import {Button} from 'antd'
import Rate from 'react-tiny-rate'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as commentActionsFrom from '../../../actions/usercomment'
import '../index.css'


class Usercomment extends React.PureComponent{
  myRef = React.createRef()
  constructor(props){
    super(props)
    this.state={
      comment:'',
      commentInfo:"",
      hasComment:false,
      handleState:0,
      stars:0
    }
  }
  render(){
    const ordertext=this.props.order
    return(
        <div>
            <div className="User-order-details">
                <img src={ordertext.img} alt="backup" className="order-img"/>
                <div className="detail-text">
                    <p className="p">{ordertext.title}</p>  
                    <p className="p">数量：{ordertext.count}</p>
                    <p className="p">价格：{ordertext.price}</p>
                    {
                      this.state.commentInfo?
                      <div>
                           <p className="userp">评价：{this.state.commentInfo}</p>
                           <Rate theme="red" size='20px' value={this.state.stars}></Rate> 
                      </div>:""
                    }
                </div>               
               { 
               this.state.handleState===0?
                 <Button size="small" onClick={this.handleComment} className="order-button">评价</Button>
                 : <Button size="small" onClick={this.handleComment} className="order-button">已评价</Button>
               }                   
           </div>
            {
              this.state.hasComment? 
              <div className="comment-main">
                <textarea className="textarea" rows="4" ref={this.myRef}></textarea>
                <Rate theme="red" size='20px' onRate={this.handleRate}></Rate> 
                <Button size="small" onClick={this.handup} className="oorder-button">提交</Button>
                <Button size="small" onClick={this.cancel} className="oorder-button" >取消</Button>                                      
             </div> : ""
            } 
        </div>
    )
  }
  handleRate=(stars)=>{
    this.setState({
      stars
    })
  }
  handup=()=>{
      const commentValue=this.myRef.current.value;
      const commentActions=this.props.commentActions;
      //未提交过
      if(this.state.handleState===0){
          commentActions.add({
          comment:commentValue,
          handleState:1,
          title:this.props.order.title,
        })
      }else if(this.state.handleState===1){
          commentActions.update({
          comment:commentValue,
          handleState:1,
          title:this.props.order.title
        })
      }
      this.setState({
        hasComment:false
      })
      this.showComment()

  }
  showComment=()=>{
    const usercomment=this.props.usercomment
    if(usercomment.length>0){
      for(let i=0;i<usercomment.length;i++){
        if(usercomment[i].title===this.props.order.title){
          this.setState({
            commentInfo:usercomment[i].comment,
            handleState:1,
          })
        }
      }
    }
  }

  handleComment=()=>{
    this.setState({
      hasComment:true
    })
  }
  cancel=()=>{
    this.setState({
      hasComment:false
    })
  }
}

function mapStateToProps(state){
  return{
    usercomment:state.usercomment
  }
}

function mapDispatchToProps(dispatch){
  return{
    commentActions:bindActionCreators(commentActionsFrom,dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Usercomment)