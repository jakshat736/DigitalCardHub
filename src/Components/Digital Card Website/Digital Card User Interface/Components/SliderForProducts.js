import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import s2 from "../../Digital Card Assets/ss2.jpg"
import s3 from "../../Digital Card Assets/ss3.jpg"
import s4 from "../../Digital Card Assets/ss4.jpg"
import s5 from "../../Digital Card Assets/ss5.jpg"
import s6 from "../../Digital Card Assets/ss6.jpg"
import s7 from "../../Digital Card Assets/ss7.jpg"
import s8 from "../../Digital Card Assets/ss8.jpg"
import { Grid,Button } from '@mui/material';
import "../Components/YourStyles.css"
import { makeStyles } from "@mui/styles";
import arrow from "../../Digital Card Assets/arrowBold.png";

const useStyles = makeStyles({

  dots:{
    '& .slick-dots li.slick-active button::before': {
      color:'#fff',
      opacity:1,
    },

    '& .slick-dots li button::before': {
      color:'#636e72',
      fontSize:'9px',
      opacity:1,
    },
    
    '& .slick-dots li ':{
      margin:'-10px -1px',
    },

    marginBottom:10,
},
});

export default function SliderForProducts()
{
    const matches = useMediaQuery("(max-width:700px)");

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: matches?1:5,
      speed: 500,
      arrows:false,
      autoplay: "true",
      autospeed: 1,
      slidesToScroll: 1,
      dots:true,
    };
  

    var useStyle=useStyles()
   var data=[s7,s8,s6,s5,s4,s3,s2]
   const ShowSlider=()=>{
    return data.map((item)=>{
        return(<Grid style={{width:'100%',display:'flex',flexDirection:'column',background:'red'}}>
          <Grid style={{width:'240px',height:'300px',borderRadius:'24px',display:'flex',justifyContent:'center',flexDirection:'row',textAlign:'center',margin: '15px',borderrRadius: '10px', marginLeft: matches?'-0%':''}}>
          <img src={item} style={{width:'98%',margin:4,borderRadius:10, objectFit: 'cover'}}></img>
          </Grid>
          <Grid sx={{ display: 'flex', flexDirection: 'column', marginLeft: '2%',marginTop:matches?'0%':'2.5%',color:'#fff',justifyContent:'center',alignItems:'center',textAlign:'center',width:'100%' }}>
              <Grid sx={{ fontSize: matches?'16px':'1vw', fontWeight: 700,width:'80%' }}>
               GOOGLE REVIEW CARD
              </Grid>
              <Grid sx={{ fontSize: matches?'11px':'.6vw', fontWeight: 400, marginTop: '1%',width:'80%'}}>
              Amazon Review Card | Heavy duty PVC material | Lifetime validity | NFC enabled
              </Grid>
              <Grid sx={{ display: 'flex',marginTop:'2%'}}>
                <Button
                  style={{
                    borderColor: "#FFB800",
                    width:matches?80: '7vw',
                    height:matches?28: '2vw',
                    background: "#FFB800",
                    color: "#fff",
                    fontSize: matches?'8px':".8vw",
                    fontWeight: 400,
                    textTransform: "none",
                    borderRadius: 8,
                    display:'flex',
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                 
            >
                  Enquiry Now
                </Button>
                  <Grid sx={{ display: 'flex', flexDirection: 'column',marginLeft:'4%' }}>
                    <Grid sx={{ fontSize:matches?'12px': '.9vw', fontWeight: 600, color: '#fff'}}>₹149.00 </Grid><Grid sx={{ fontSize: matches?'10px':'.7vw', fontWeight: 500, color: '#fff'}}><s>₹150.00</s></Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>)
    })
   }

    return(<Grid style={{width:'100%',display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:matches?'12%':'8%'}}>
      <Grid sx={{alignItems:'center',fontSize:matches?'22px':'2.8vw',fontWeight:700,lineHeight:matches?'30px':'52px',color:'#fff',width:matches?'80%':'60%',textAlign:'center'}}>
      UNVEILING THE DIGITAL CARD COLLECTION
      </Grid>
      <Grid sx={{alignItems:'center',fontSize:matches?'12px':'20px',fontWeight:400,lineHeight:matches?'20px':'30px',color:'#fff',width:'60%',textAlign:'center',marginTop:'1.5%'}}>
      Material that elevates the experience
      </Grid>
      <Grid sx={{width:'100%',marginTop:'5%'}} className={useStyle.dots}>
   <Slider {...settings} >
    {ShowSlider()}    
  </Slider>
  </Grid>
  <Grid sx={{fontSize:'10px',fontWeight:400,lineHeight:'30px',color:'#fff',textAlign:'center',marginTop:'1.5%'}}>
     <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Grid>Explore more Manual card designs</Grid><Grid><img src={arrow} width={15} style={{marginTop:'90%'}}></img></Grid>
     </Grid>
  </Grid>
    </Grid>)
}