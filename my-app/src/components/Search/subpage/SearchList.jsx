import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {getSearchData} from '../../../fetch/search'
import LoadMore from '../../LoadMore'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'


class SearchList extends React.PureComponent{
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
         {
              this.state.listInfo.map((item,index) => {
                return(
                <Link to={"/Detail/" + item.mumber}>  
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
    const page = 0
    const location=this.props.userinfo.location
    const category = this.props.category;
    const keyword = this.props.keyword;
    const resule = getSearchData(page,location,category, keyword);
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
    const page = 1;
    const location=this.props.userinfo.location
    const category = this.props.category;
    const keyword = this.props.keyword;
    this.setState({
      isLoadingMore: true,
    })
    const resulf =getSearchData(page,location,category, keyword);
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

function mapStateToProps(state){
  return{
    userinfo:state.userinfo
  }
}

function mapDispathToProps(dispatch){
  return{
    userInfoActions: bindActionCreators( userInfoActionsFromOtherFile, dispatch)
  }
}
  export default connect(
    mapStateToProps,
    mapDispathToProps
  )(SearchList)