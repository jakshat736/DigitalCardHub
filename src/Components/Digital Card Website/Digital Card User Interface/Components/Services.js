import { Grid } from "@mui/material";
import service from "../../Digital Card Assets/service1.png"
import service2 from "../../Digital Card Assets/service2.png"
import React from "react";
import Slider from "react-slick";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Services()
{
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows:false,
        autoplay: "true",
      };
      const matches = useMediaQuery("(max-width:600px)");

    return(<Grid sx={{width:'100%',display:'flex',justifyContent:"center",alignItems:'center',flexDirection:'column'}}>
        <Grid sx={{alignItems:'center',fontSize:matches?'22px':'2.8vw',fontWeight:700,lineHeight:'30px',color:'#fff'}}>
            SERVICE WE OFFER
        </Grid>
        <div className="slider-container">
      <Slider {...settings}>
        <Grid sx={{marginTop:'5%'}}>
        <img src={matches?service:service} style={{width:'100%'}}></img>
        </Grid>
        <Grid>
        <img src={matches?service2:service2} style={{width:'100%'}}></img>
        </Grid>
      </Slider>
    </div>


            {/* <Grid sx={{width:'84%',marginTop:'4%'}}>
                <img src={service} style={{width:'100%'}}></img>
            </Grid> */}
    </Grid>)
}