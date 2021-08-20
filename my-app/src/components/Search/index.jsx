import React from 'react'
import SearchList from './subpage/SearchList'
import SearchHeader from './subpage/SearchHeader'


class Search extends React.PureComponent{

  render(){
    //路由传参
    const params=this.props.location.query
    // const params=this.props.match.params; 使用state/query更加灵活与路由就无关了
  
    return(
      <div>
            <div className="Page-header">
                 <p onClick={this.backToHome} className="Page-text">返回</p>
                 <SearchHeader className="Page-search"/>
            </div> 
                 <SearchList category={params.type} keyword={params.keyword} ></SearchList>
      </div>
    )
  }

  //返回功能
  backToHome=()=>{
    this.props.history.push('/')
  }
}

export default Search