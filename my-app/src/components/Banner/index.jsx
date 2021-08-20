import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import {getBannerData} from '../../fetch/banner'


//轮播图，采用Slider组件库，设置一些默认的属性，使用组件时要取github上看引用的数量，看热度去选择
class Banner extends React.Component{ 
  constructor(props){
    super(props);
    this.state={
      image:[]
    }
  }

    render(){  
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return(
        <div className="Banner">
          <Slider {...settings}>
              {
                this.state.image.map((item,index)=>{
                  return(   
                          <div key={index} className="Banner-main">
                              <img src={item.img} alt="ptoo" className="Banner-img"></img>
                          </div> 
                  )
                })
            
              }
          </Slider>
        </div>
      );
    }
    componentDidMount(){
      const result=getBannerData();
      result.then((res)=>{
        return res.json()
      }).then((json)=>{
        this.setState({
          image:json
        })
      })
    }
    }   

export default Banner

