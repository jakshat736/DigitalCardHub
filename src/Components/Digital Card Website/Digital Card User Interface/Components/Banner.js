import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import b1 from "../../Digital Card Assets/b1.png"
import b2 from "../../Digital Card Assets/b2.png"
import b3 from "../../Digital Card Assets/b3.png"
export default function TopBrand()
{
    const matches = useMediaQuery("(max-width:500px)");
  var settings = {               
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: "true",
    slidesToShow: matches ?2:4,
    slidesToScroll: 1,
    arrows:false,
    cssEase: 'linear',
    pauseOnHover: false,
    autoplaySpeed: 0,
   };

   var data=[b1,b2,b3,b1,b1,b2,b3,b1,]
   const AddBrand=()=>{
    return data.map((item)=>{
        return(<div style={{width:'100%'}}>
          <div style={{width:'90%',height:'90%',borderRadius:'45%',display:'flex',justifyContent:'center',flexDirection:'row'}}>
          <img src={item} style={{width:'98%',margin:4}}></img>
          </div>
        </div>)
    })
   }

    return(<div style={{width:'100%',marginTop:'-7%'}}>
   <Slider {...settings}>
    {AddBrand()}    
  </Slider>
    </div>)
}