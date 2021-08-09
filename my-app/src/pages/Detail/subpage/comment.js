import React from 'react'
import '../index.css'
import Rate from 'react-tiny-rate'
import  {getCommentData} from '../../../fetch/detail'
import LoadMoree from './loadmoree'



//1、用户评论界面的实现：首先把评论按钮、评论框、提交和取消按钮画出来，之后实现具体的逻辑
//2、评论点击后可以弹出评论区域，点击取消收回评论区域
//3、点击提交会把对应的数据和评价显示到页面中
//4、评论有更新和添加两个功能
//5、loadmore功能
class Detailcomment extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
        commentt: [],
        hasMore:false,
        isLoadingMore:false,
        page:0,
    }
  }
  render(){
    return(
      <div>
        <p className='comment-title'>用户点评</p>
            {
              this.state.commentt.map((item, index)=>{
                return(
                  <div key={index} className="comment-main">
                      <div className="comment-text">
                          <p className="Detail-p">{item.username}</p>
                          <Rate  theme="red" size="20px" value={item.star} readonly="true"></Rate>
                          <p>{item.comment}</p>
                      </div>   
                  </div>)
              })          
            }

            {
              this.state.hasMore? 
              <LoadMoree isLoadingMore={this.state.isLoadingMore}
                        loadMoreFn={this.loadMoremore}></LoadMoree>:''
            }
      </div>
    )
  }
  componentDidMount(){
    const page=0;
    const id = this.props.id
    const resule = getCommentData(page,id);
    resule.then((res)=>{
      return res.json()
    }).then((json)=>{
      this.setState({
          commentt:json.data,
          hasMore:json.hasMore,
          isLoadingMore:false,
          page:this.state.page+1
      })
    })
  }
  loadMoremore=()=>{
    this.setState({
      isLoadingMore:true
    })
    let page = this.state.page;
    const id = this.props.id
    const result = getCommentData(page,id)
    result.then((res)=>{
      return res.json()
    }).then((json)=>{
      this.setState({
        commentt:this.state.commentt.concat(json.data),
        hasMore:json.hasMore,
        isLoadingMore:false,
        page:this.state.page+1
      })
    })
  }
  
}
export default Detailcomment