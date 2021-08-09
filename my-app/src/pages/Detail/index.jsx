import React from 'react'
import Comment from './subpage/comment'
import Info from './subpage/Info'
import DetailbuyStore from './subpage/buyStore'


//1、推荐中的detail界面设计，包括用户详情与用户评论两个模块
//2、传递id的方法

class Detail extends React.PureComponent{
  
  render(){
      const params=this.props.match.params;
      //1、params方法↑
      //2、query方法，const params=this.props.location.query
      //3、const params=this.props.location.state
    return(
          <div>
          <Info id={params.id}/>
          <DetailbuyStore id={params.id} history={this.props.history}/>
          {/* 子组件使用history路由时需要对父组件进行定义 */}
          <Comment id={params.id}/>
      </div>
       )
}
}

export default Detail