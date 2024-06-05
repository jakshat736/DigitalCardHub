import { Grid } from "@mui/material";
import blurground from "../../Digital Card Assets/blurBackground.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../Digital Card Assets/banner1.png"
import banner2 from "../../Digital Card Assets/banner2.png";
import blur from "../../Digital Card Assets/blur.png"
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
        speed: 1000,
        autoplay: "true",
        slidesToShow: matchesA ?1:3,
        slidesToScroll: 1,
        arrows:false,
        cssEase: 'linear',
        pauseOnHover: false,
        autoplaySpeed: 0,
      };


      var data=[banner1,banner2,banner1,banner2,banner1,banner2]
      const showSlider=()=>{
          return data.map((item)=>{
              return(<Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <img src={item} style={{width:"100%"}}/>
              </Grid>)
          })
      }


    return(<Grid sx={{width:'100%',marginTop:"8%",marginBottom:'6%'}}>
       {matchesB?<><Grid sx={{fontSize:matchesB?'22px':matchesA?'18px':'2.8vw',fontWeight:700,lineHeight:matchesA?'28px':matches?"36px":'52px',textAlign:'center',color:'#fff'}}>
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
          <Grid sx={{width:'2%',zIndex:20}}>
            <img src={blur} style={{width:matchesB?30:50,height:matchesB?265:370,marginTop:'30%',marginLeft:matchesB?-10:matchesA?-20:matches?'-50%':''}}></img>
          </Grid>
          <Grid sx={{width:'38%',display:'flex',alignItems:'center',justifyContent:'center',zIndex:10}}>
           <Grid sx={{width:'100%'}}>
            <Slider  {...settings}>
              {showSlider()}
            </Slider>
           </Grid>
          </Grid>
    </Grid>
    </Grid>)
}