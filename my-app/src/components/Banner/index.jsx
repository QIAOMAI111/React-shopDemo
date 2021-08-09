import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"

//轮播图，采用Slider组件库，设置一些默认的属性，使用组件时要取github上看引用的数量，看热度去选择
class Banner extends React.Component{ 
    render(){  
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
      };
      return(
        <div>
          <Slider {...settings}>
          <div>
            <h3 className="Banner-main">
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
                <p className="Banner-piece">海贼</p>
            </h3>
          </div>
          <div>
          <h3 className="Banner-main">
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
                <p className="Banner-piece">火影</p>
            </h3>
          </div>
          <div>
          <h3 className="Banner-main">
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>
                <p className="Banner-piece">待续</p>                
            </h3>
          </div>
          </Slider>
        </div>       
     
         
    
      );
    }
    }  
export default Banner