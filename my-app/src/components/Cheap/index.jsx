import React from 'react'
import './index.css'
import {getAdData} from '../../fetch/cheap'


//1、Home界面中超值特惠部分的构建，首先是采用引入图片的方式去对图片进行布局，涉及到宽度的百分比设置以及flex
//2、图片采用float设置，图片的宽度百分比都为45%
//后续采用fetch方法从后端获取数据。
class Cheap extends React.PureComponent{
      constructor(props){
        super(props);
        this.state={
          data: []
        }
      }
      
  render(){
    return(
    <div>
        <div className="cheap-text">超值特惠</div>
        {
          this.state.data.map((item, index) => {
            return(                 
                    <div key={index} className="cheap-main">
                      <img src={item.img} alt="pto" className="cheap-img"></img>
                      <p className="cheap-te">{item.title}</p>
                    </div>
            )
          })
        }
    </div>     
    )
  }

componentDidMount(){
  const result=getAdData();
  result.then((res)=>{
    return res.json()
  }).then((json)=>{
    this.setState({
      data:json
    })
  })
}

}
export default Cheap;