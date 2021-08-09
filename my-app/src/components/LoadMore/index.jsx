import React from 'react'


//1、懒加载逻辑的设计，涉及到一个监听滚轮滑动事件，把高度差进行一个比较，其中包含一个防抖函数
//2、loadmore函数在recommed函数中定义
class LoadMore extends React.PureComponent{
  render(){
    return(
      <div>
           { 
           this.props.isLoadingMore ?  <p>--------------加载中--------------</p> :
           <p onClick={this.loadMoreInfo} ref='wrapper'>加载更多</p>
          }
      </div>
    )
  }
  componentDidMount(){
    let timeoutId;
    let wrapper=this.refs.wrapper
    window.addEventListener('scroll',()=>{
        if(!this.props.isLoadingMore){
          if(timeoutId){
            clearTimeout(timeoutId)
          }
          timeoutId = setTimeout(() =>{
            const top=wrapper.getBoundingClientRect().top;
            const height=window.screen.height;
            if(top&&(top)>height){
              this.props.loadMoreFn();
            }
          },600)
        }
    })
  }
  loadMoreInfo=()=>{
    this.props.loadMoreFn()
  }
  
}
export default LoadMore