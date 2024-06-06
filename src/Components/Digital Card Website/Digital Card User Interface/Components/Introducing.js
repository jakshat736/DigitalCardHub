import { Grid } from "@mui/material";
import blurground from "../../Digital Card Assets/blurBackground.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stand1 from "../../Digital Card Assets/stand1.jpg"
import stand2 from "../../Digital Card Assets/stand2.jpg"
import stand3 from "../../Digital Card Assets/stand3.jpg"
import stand4 from "../../Digital Card Assets/stand4.jpg"
import stand5 from "../../Digital Card Assets/stand5.jpg"

import {
    useMediaQuery,
  } from "@mui/material";


export default function Introducing()
{
    const matches = useMediaQuery("(max-width:900px)");
    const matchesA = useMediaQuery("(max-width:600px)");
    const matchesB = useMediaQuery("(max-width:500px)");
     var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplay: "true",
        slidesToShow: matchesA ?1:3,
        arrows:false,
        cssEase: 'linear',
        pauseOnHover: false,
        autoplaySpeed: 0,
      };


      var data=[stand1,stand2,stand3,stand4,stand5,]
      const showSlider=()=>{
          return data.map((item)=>{
              return(<Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img src={item} style={{width:"95%"}}/>
              </Grid>)
          })
      }

    return(<Grid sx={{width:'100%',marginTop:"8%",marginBottom:'6%'}}>
       {matchesB?<><Grid sx={{fontSize:matchesB?'22px':matchesA?'18px':'2.8vw',fontWeight:700,lineHeight:matchesA?'28px':matches?"36px":'52px',textAlign:'center',color:'#fff',padding:1}}>
            INTRODUCING OUR WIDE RANGE OF CARD DESIGNS.
            </Grid></>:<></>}
    <Grid sx={{width:'100%',display:'flex'}}>
          <Grid sx={{width:'60%',height:'auto',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',}}>
           <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'80%'}}>
            {matchesB?<></>:<><Grid sx={{fontSize:matchesB?'22px':matchesA?'18px':'2.8vw',fontWeight:700,lineHeight:matchesA?'28px':matches?"36px":'52px',textAlign:'center'}}>
            INTRODUCING OUR WIDE RANGE OF CARD DESIGNS.
            </Grid></>}
            <Grid sx={{fontSize:matchesB?'12px':matchesA?'12px':'1.6vw',fontWeight:400,lineHeight:matchesA?'22px':matches?"30px":'46px',textAlign:'center',marginTop:'3%',width:matchesB?'100%':'75%'}}>
            we understand that every individual has unique tastes and preferences when it comes to design. That's why we are thrilled to showcase our diverse collection of card designs to cater to your personal style.
            </Grid>
           </Grid>
          </Grid>
          <Grid sx={{width:'40%',display:'flex',alignItems:'center',justifyContent:'center',zIndex:10}}>
           <Grid sx={{width:'100%'}}>
            <Slider  {...settings}>
              {showSlider()}
            </Slider>
           </Grid>
          </Grid>
    </Grid>
    </Grid>)
}