import React from 'react'
import { Input } from 'antd'
import './index.css'

//2、搜索框设置，采用AntDesign中的Input输入框
class Search extends React.PureComponent{
render(){
  return(
      <div className="search-main">
        <Input  size="small" placeholder="请输入地址"/>
      </div>
      )
    }
}
export default Search