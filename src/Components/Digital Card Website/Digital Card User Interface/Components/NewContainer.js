import { Grid,Button } from "@mui/material";
import backgroundimg from "../../Digital Card Assets/new-mockup1.png"
import learnmore from "../../Digital Card Assets/learnmore.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "../../Digital Card Assets/Greview.jpg";
import slider1 from "../../Digital Card Assets/whatapp.jpg";
import slider2 from "../../Digital Card Assets/insta.jpg";
import slider3 from "../../Digital Card Assets/fb.jpg";
import slider4 from "../../Digital Card Assets/in.jpg";
import slider5 from "../../Digital Card Assets/amazon.jpg";

import slider11 from "../../Digital Card Assets/bussinesscard1.png";
import slider22 from "../../Digital Card Assets/bussinesscard4.png";
import slider33 from "../../Digital Card Assets/bussinesscard3.png";
import { useNavigate } from "react-router-dom";
import slider111 from "../../Digital Card Assets/oyo.jpg";
import slider222 from "../../Digital Card Assets/flipkard.jpg";
import slider333 from "../../Digital Card Assets/playstore.jpg";
import slider444 from "../../Digital Card Assets/swiggy.jpg";
import slider555 from "../../Digital Card Assets/go.jpg";

import {
    useMediaQuery,
  } from "@mui/material";

export default function NewContainer()
{   
    const matches = useMediaQuery("(max-width:1000px)");
    const matchesA = useMediaQuery("(max-width:600px)");
    var navigate=useNavigate()
  const handleNagivate=()=>{
    navigate('/newallproduct2')
}
    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: "true",
        slidesToShow:  matchesA?2:3,
        slidesToScroll: 1,
        arrows:false,
        cssEase: 'linear',
        pauseOnHover: false,
        autoplaySpeed: 0,
      };

      var setting2 = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: "true",
        slidesToShow: matchesA?3:5,
        slidesToScroll: 1,
        arrows:false,
        cssEase: 'linear',
        pauseOnHover: false,
        autoplaySpeed: 0,
        rtl:true
      };


      var data=[slider,slider1,slider2,slider3,slider4,slider5]
      const showSlider=()=>{
          return data.map((item)=>{
              return(<Grid>
                  <img src={item} style={{width:"95%",borderRadius:2}}/>
              </Grid>)
          })
      }

      var data2=[slider11,slider22,slider33,slider11,slider22,slider33]
      const showSlider2=()=>{
          return data2.map((item)=>{
              return(<Grid>
                  <img src={item} style={{width:"85%",borderRadius:2}}/>
              </Grid>)
          })
      }

      var data3=[slider111,slider222,slider333,slider444,slider555,slider333]
      const showSlider3=()=>{
          return data3.map((item)=>{
              return(<Grid sx={{zIndex:100}}>
                  <img src={item} style={{width:"95%",borderRadius:2}}/>
              </Grid>)
          })
      }

    return(<Grid sx={{padding:2,color:'#fff',height:matches?'auto':530}}>
         <Grid sx={{marginLeft:matches?"0%":'5.5%',width:matches?'100%':'94%',display:'flex',flexDirection:matches?"column":'row',justifyContent:matches?'center':'none',alignItems:matches?'center':'none'}}>
            <Grid sx={{marginLeft:matches?'0%':'3%',position:'relative',width:matches?"99%":'40%',marginTop:'-2%'}}>
              {matches?<></>:<> <img src={backgroundimg} style={{width:'90%'}}></img></>}
               {matches?<><Grid sx={{display:matches?'flex':'none',justifyContent:matches?'center':'normal',alignItems:matches?'center':"normal"}}>
                <img src={backgroundimg} style={{width:matchesA ? '100%':'70%',marginTop:matchesA ? '-12%':'0%' }}></img>
                </Grid></>:<></>}
                <Grid sx={{marginTop:matchesA ? '-82%':"-66%",zIndex:40,width:'100%',display:matches?'flex':'',justifyContent:matches?'center':'normal',flexDirection:'column',alignContent:matches?'center':"normal"}}>
                    <Grid sx={{fontSize:matchesA ? '22px' : matches ? '30px' : '2.8vw',fontWeight:700,lineHeight:matches?'30px':'52px',fontFamily:'Montserrat',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",textAlign:matches?'center':"normal"}}>
                     MAKE YOUR  BUSSINES DIGITAL WITH US.
                    </Grid>
                    <Grid sx={{fontSize:matchesA ? '14px':matches?20:'1.6vw',fontWeight:400,lineHeight:matchesA ? '22px':'36px',fontFamily:'Montserrat',marginTop:'1%',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",textAlign:matches?'center':"normal"}}>
                    digital business card platform makes convienient and reliaeble
                    </Grid>
                    {matches?<><Grid sx={{marginTop:'4%',display:'flex',gap:4,alignItems:'center',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",flexDirection:matches?'column':'row'}}>
                  <img src={learnmore} width={80}></img>
                  </Grid></>:<></>}
                    {matches?<></>:<><Grid sx={{display:'flex',gap:4,alignItems:'center',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",flexDirection:matches?'column':'row'}}>
                    <Button
                onClick={handleNagivate}
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
              <Grid sx={{marginTop:'4%',marginLeft:'1%'}}>
              <Button
                sx={{
                 border:'2px solid #fff',
                  height:matches?25: 42,
                  width:matches?170:'12vw',
                  background:'#070707',
                  color: "#fff",
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 1,
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "14px",
                  fontWeight: 500,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
             Create Now
              </Button>
              </Grid>
                    </Grid></>}
                </Grid>
            </Grid>
           <Grid sx={{marginTop:matchesA ? '8%' :matches?'10%':'6%',width:matches?'100%':'57%'}}>
           <Grid sx={{ transform:'rotate(-13deg)',width:matchesA ? '80%' :'70%'}}>
        <Slider {...settings}>
          {showSlider()}
        </Slider>
    </Grid>
    <Grid sx={{ transform:'rotate(-13deg)',width:matchesA ? '80%' :'70%',marginTop:matchesA ? '-1%' :'-5%',marginLeft:'auto'}}>
        <Slider {...setting2}>
          {showSlider2()}
        </Slider>
    </Grid>
    <Grid sx={{ transform:'rotate(-13deg)',width:matchesA ? '80%' :'70%',marginTop:matchesA ? '8%':'8.8%',zIndex:100}}>
        <Slider {...settings}>
          {showSlider3()}
        </Slider>
    </Grid>
           </Grid>

{matches?<><Grid sx={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:matchesA ? '4%':'0%' }}>
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