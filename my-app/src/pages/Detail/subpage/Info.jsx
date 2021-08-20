import React from 'react'
import '../index.css'
import Rate from 'react-tiny-rate'
import {getDetailData}from'../../../fetch/detail'

//1、用户详情的设计，先画出具体的页面之后使用fetch引入数据
//2、主要是一些布局的问题
class DetailInfo extends React.PureComponent{
    constructor(props){
      super(props)
      this.state={
        info:[]
      }
    }

  render(){
    const datailInfo = this.state.info
    return(
      <div>
            <div className="Detail-title">
                      <p onClick={this.backToHome}className="back">返回</p>
                      <p className="Detail-d">商户详情</p>
                      <p></p>
            </div>
            <div className="Detail-context">              
                      <img src={datailInfo.img} alt="logo" className="Detail-img"></img>
                          <div className="Detail-Context">
                              <p className="Detail-p">{datailInfo.title}</p>
                              <Rate theme="red" size="20px" value={datailInfo.star} readonly="true"></Rate>
                              <p className="Detail-p">￥{datailInfo.price}</p>
                              <p className="Detail-p">{datailInfo.subTitle}</p>
                          </div>
                          <div className="Detail-COntext" dangerouslySetInnerHTML={{__html:datailInfo.desc}}></div>
            </div>
      </div>
      
    )
  }
  backToHome = ()=>{
   this.props.history.push('/')
  }
  componentDidMount(){
    const id = this.props.id
    const result = getDetailData(id);
    result.then((res)=>{
      return res.json()
    }).then((json)=>{
      this.setState({
        info:json
      })
    })
  }
}
export default DetailInfo