import React from 'react'
import { Input } from 'antd'
import '../index.css'

//2、搜索框设置，采用AntDesign中的Input输入框
class SearchHeader extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      value:""
    }
  }
  
render(){
  return(
      <div className="search-main">
        <Input  size="small" 
              value={this.state.value} 
              onChange={this.handlechange}
              onKeyUp={this.keyup}
              placeholder="请输入地址"/>
      </div>
      )
    }
    handlechange=(e)=>{
      this.setState({
        value:e.target.value
      })
    }
    keyup=(e)=>{
      if(e.key!=='Enter'){
        return 
      }else{
        // this.props.history.push('/search/all/'+this.state.value)
        this.props.history.push({pathname:"/search",query: { type : 'all', keyword:this.state.value }})
      }

    }
}
export default SearchHeader