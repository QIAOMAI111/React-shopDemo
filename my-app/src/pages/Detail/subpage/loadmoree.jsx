import React from 'react'

class LoadMoree extends React.PureComponent{
  render(){
    return(
      <div>
           { 
           this.props.isLoadingMore ?  <p>——————————————--------------加载中--------------————————————</p> :
           <p onClick={this.loadMoreInfo} ref='wrapper'>加载更多</p>
          }
      </div>
    )
  }
  componentDidMount(){
    let timeoutId;
    let wrapper=this.refs.wrapper
    window.addEventListener('scroll',()=>{
        if(!this.props.isLoadingMore){   //isLoadingMore为false,监测窗口是否划到底部
          if(timeoutId){                //滑动防抖函数
            clearTimeout(timeoutId)
          }
          timeoutId = setTimeout(() =>{
            const top=wrapper.getBoundingClientRect().top;
            const height=window.screen.height;
            if(top&&(top)<height){
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
export default LoadMoree