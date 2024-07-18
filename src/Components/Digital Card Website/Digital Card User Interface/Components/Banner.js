import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import b1 from "../../Digital Card Assets/bb1.jpg"
import b2 from "../../Digital Card Assets/bb2.jpg"
import b3 from "../../Digital Card Assets/bb3.jpg"
import b4 from "../../Digital Card Assets/bb4.jpg"
import b5 from "../../Digital Card Assets/bb5.jpg"
import b6 from "../../Digital Card Assets/bb6.jpg"
import b7 from "../../Digital Card Assets/bb7.jpg"
import b8 from "../../Digital Card Assets/bb8.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function TopBrand()
{
    const matches = useMediaQuery("(max-width:500px)");
  var settings = {               
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: "true",
    slidesToShow: matches ?2:4,
    arrows:false,
    cssEase: 'linear',
    pauseOnHover: false,
    autoplaySpeed: 0,
   };

   var data=[b1,b2,b3,b4,b5,b6,b7,b8]
   const showSlider=()=>{
    return data.map((item)=>{
        return(<div style={{width:'100%'}}>
          <div style={{width:'95%',height:'95%',borderRadius:'45%',display:'flex',justifyContent:'center',flexDirection:'row'}}>
          <LazyLoadImage
            src={item} style={{width:'100%',margin:0}}
           effect="blur" // this will add a blur effect until the image loads
          />
          </div>
        </div>)
    })
   }

    return(<div style={{width:'100%',marginTop:'3%'}}>
   <Slider {...settings}>
    {showSlider()}    
  </Slider>
    </div>)
}