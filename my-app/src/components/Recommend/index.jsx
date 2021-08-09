import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {getListData} from '../../fetch/comment'
import LoadMore from '../LoadMore'

//1、主页面中推荐模块的设计，主要涉及图片与文字的排版问题：首先分成一个大的模块recom-main，然后把文字界面recom-container和图像recom-img作为两个模块
//2、根据fetch获取对应的信息，点击跳转路由时候能够传递id参数
//3、实现懒加载的功能loadmore函数的定义

class Recommend extends React.PureComponent{
  constructor(props){
    super(props);
    this.state={
        listInfo: [],
        page: 1,
        hasMore: false,
        isLoadingMore: false,
    }
  }
 
  render(){
    return(
     <div>
        <div className="recom-text">推荐</div>
         {
              this.state.listInfo.map((item,index) => {
                return(
                <Link to={"/Detail/" + item.mumber}>  
                {/* state方法 <Link to={{pathname:'/Detail/'+item.mumber,state:{id:item.mumber}}}>
                {/* query方法<Link to={{pathname:'/Detail/'+item.mumber,query:{id:item.mumber}}}> */}
                      <div key={index} className="recom-main">
                          <img src={item.img}  alt="logo" className="recom-img"/>
                          <div className="recom-container">
                                <div className="recom-title">
                                  <p className="recom-context">{item.title}</p>
                                  <p className="recom-distance">{item.distance}</p>                           
                                </div>
                                  <p className="recom-details">{item.subTitle}</p>
                                  <p className="recom-number">{item.number}</p>
                                  <p className="recom-price">{'￥'+item.price}</p>
                          </div>           
                      </div>
                   </Link>
                )
              })
         }

        {
          this.state.hasMore ?
          <LoadMore isLoadingMore={this.state.isLoadingMore} 
                    loadMoreFn={this.loadMore}></LoadMore> : ""
        }
     </div>  
    )
  }
  componentDidMount(){
    const location = '北京';
    const page = 0
    const resule = getListData(location,page);
    resule.then((res) =>{
      return res.json()
    }).then((json) => {
       this.setState({
         listInfo: json.data,
         hasMore: json.hasMore
       })
    })
  }

  loadMore=()=>{
    const location = '位置';
    const page = this.state.page;
    this.setState({
      isLoadingMore: true,
    })
    const resulf = getListData(location,page);
    resulf.then((res) =>{
      return res.json()
    }).then((json) =>{
      this.setState({
        listInfo: this.state.listInfo.concat(json.data),
        hashMore: json.hasMore,
        isLoadingMore:false,
        page:page + 1
      })
    }).catch((error) =>{
      alert(error)
    })
  }
}
export default Recommend;