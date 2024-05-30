import { Grid,Button } from "@mui/material";
import backgroundimg from "../../Digital Card Assets/backgroundimg.png"
import learnmore from "../../Digital Card Assets/learnmore.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../Digital Card Assets/slider1.jpg";
import slider2 from "../../Digital Card Assets/slider2.jpg";
import slider3 from "../../Digital Card Assets/slider3.jpg";

import slider11 from "../../Digital Card Assets/slider11.jpg";
import slider22 from "../../Digital Card Assets/slider22.jpg";
import slider33 from "../../Digital Card Assets/slider33.jpg";

import slider111 from "../../Digital Card Assets/slider21.jpg";
import slider222 from "../../Digital Card Assets/slider32.jpg";
import slider333 from "../../Digital Card Assets/slider34.jpg";

import {
    useMediaQuery,
  } from "@mui/material";

export default function NewContainer()
{   
    const matches = useMediaQuery("(max-width:1000px)");
    const matchesA = useMediaQuery("(max-width:600px)");
    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: "true",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        cssEase: 'linear',
        pauseOnHover: false,
        autoplaySpeed: 0,
      };


      var data=[slider1,slider2,slider3,slider1,slider2,slider3]
      const showSlider=()=>{
          return data.map((item)=>{
              return(<Grid>
                  <img src={item} style={{width:"95%"}}/>
              </Grid>)
          })
      }

      var data2=[slider11,slider22,slider33,slider11,slider22,slider33]
      const showSlider2=()=>{
          return data2.map((item)=>{
              return(<Grid>
                  <img src={item} style={{width:"95%"}}/>
              </Grid>)
          })
      }

      var data3=[slider111,slider222,slider333,slider111,slider222,slider333]
      const showSlider3=()=>{
          return data3.map((item)=>{
              return(<Grid>
                  <img src={item} style={{width:"95%"}}/>
              </Grid>)
          })
      }

    return(<Grid sx={{padding:2,color:'#fff',background:'#070707',height:'100vh'}}>
         <Grid sx={{marginLeft:matches?"0%":'5.5%',width:matches?'100%':'94%',display:'flex',flexDirection:matches?"column":'row',justifyContent:matches?'center':'none',alignItems:matches?'center':'none'}}>
            <Grid sx={{marginLeft:matches?'0%':'3%',position:'relative',width:matches?"99%":'40%',marginTop:'-2%'}}>
              {matches?<></>:<> <img src={backgroundimg} style={{width:'70%'}}></img></>}
               {matches?<><Grid sx={{display:matches?'flex':'none',justifyContent:matches?'center':'normal',alignItems:matches?'center':"normal"}}>
                <img src={backgroundimg} style={{width:'70%'}}></img>
                </Grid></>:<></>}
                <Grid sx={{marginTop:"-62%",zIndex:40,width:'100%',display:matches?'flex':'',justifyContent:matches?'center':'normal',flexDirection:'column',alignContent:matches?'center':"normal"}}>
                    <Grid sx={{fontSize:matchesA ? '24px' : matches ? '30px' : '2.8vw',fontWeight:700,lineHeight:matches?'34px':'52px',fontFamily:'Montserrat',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",textAlign:matches?'center':"normal"}}>
                     MAKE YOUR  BUSSINES DIGITAL WITH US.
                    </Grid>
                    <Grid sx={{fontSize:matches?20:'1.6vw',fontWeight:400,lineHeight:'36px',fontFamily:'Montserrat',marginTop:'1%',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",textAlign:matches?'center':"normal"}}>
                    digital business card platform makes convienient and reliaeble
                    </Grid>
                    {matches?<><Grid sx={{marginTop:'4%',display:'flex',gap:4,alignItems:'center',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",flexDirection:matches?'column':'row'}}>
                  <img src={learnmore} width={70}></img>
                  </Grid></>:<></>}
                    {matches?<></>:<><Grid sx={{display:'flex',gap:4,alignItems:'center',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",flexDirection:matches?'column':'row'}}>
                    <Button
                sx={{
                 border:'3.2px solid #fff',
                  height: 42,
                  width:matches?170:'16vw',
                  background:'#070707',
                  color: "#fff",
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 2.6,
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "14px",
                  fontWeight: 700,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
              Shop Now
              </Button>
              <Grid sx={{marginTop:'4%'}}>
              <img src={learnmore} width={100}></img>
              </Grid>
                    </Grid></>}
                </Grid>
            </Grid>
           <Grid sx={{marginTop:matches?'10%':'6%',width:matches?'100%':'57%'}}>
           <Grid sx={{ transform:'rotate(-13deg)',width:'70%'}}>
        <Slider {...settings}>
          {showSlider()}
        </Slider>
    </Grid>
    <Grid sx={{ transform:'rotate(-13deg)',width:'70%',marginLeft:'auto',marginTop:'-6%'}}>
        <Slider {...settings}>
          {showSlider2()}
        </Slider>
    </Grid>
    <Grid sx={{ transform:'rotate(-13deg)',width:'70%',marginTop:'8%'}}>
        <Slider {...settings}>
          {showSlider3()}
        </Slider>
    </Grid>
           </Grid>

{matches?<><Grid sx={{display:'flex',justifyContent:'center',alignContent:'center'}}>
<Button
                sx={{
                 border:'3.2px solid #fff',
                  height: matches?30:42,
                  width:matches?170:'16vw',
                  background:'#070707',
                  color: "#fff",
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 2.6,
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "14px",
                  fontWeight: 700,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
              Shop Now
              </Button>
</Grid></>:<></>}
           
         </Grid>
    </Grid>)
}