import { Grid,Button } from "@mui/material"
import NewHeader from "./NewHeader"
import mobile from "../../Digital Card Assets/mobileimage.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../../Digital Card Assets/bb1.jpg"
import b2 from "../../Digital Card Assets/bb2.jpg"
import b3 from "../../Digital Card Assets/bb3.jpg"
import b4 from "../../Digital Card Assets/bb4.jpg"
import b5 from "../../Digital Card Assets/bb5.jpg"
import b6 from "../../Digital Card Assets/bb6.jpg"
import b7 from "../../Digital Card Assets/bb7.jpg"
import b8 from "../../Digital Card Assets/bb8.jpg"
import Newfooter from "./NewFooter";
export default function CooperateEnquiries()
{

    const matches = useMediaQuery("(max-width:900px)");
    const matchesA = useMediaQuery("(max-width:1400px)");
    const matchesB = useMediaQuery("(max-width:500px)");

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
            <img src={item} style={{width:'100%',margin:0}}></img>
            </div>
          </div>)
      })
     }
    return(<Grid sx={{backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
            <NewHeader/>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'#fff'}}>
          <Grid sx={{width:matchesA?'90%':'70%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Grid sx={{fontSize:matchesA?'22px':'52px',fontWeight:700,lineHeight:'50px',marginTop:'3%'}}>
            Cooperate Enquiries
            </Grid>
            <Grid sx={{display:'flex',width:'100%',height:'auto',marginTop:'5%',justifyContent:'space-between'}}>
                <Grid sx={{width:'100%'}}>
              <Grid sx={{width:matchesA?'100%':'460px',height:matchesB?'420px':matchesA?'450px':'430px',borderRadius:'10px',border:'1px solid #fff',padding:3}}>
               <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2.4%'}}>Name</Grid>
               <Grid><input type="text" style={{height:40,borderColor:'#ffff',border:'1px solid #ffff',borderRadius:'10px',width:'100%',background:'transparent'}} placeholder="Enter your Full Name"></input></Grid>
               <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2.4%',marginTop:'1.6%'}}>Email or Number</Grid>
               <Grid><input type="text" style={{height:40,borderColor:'#ffff',border:'1px solid #ffff',borderRadius:'10px',width:'100%',background:'transparent'}} placeholder="enter number or mail"></input></Grid>
               <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2.4%',marginTop:'1.6%'}}>Message</Grid>
              <Grid><textarea style={{height:160,borderColor:'#ffff',border:'1px solid #ffff',borderRadius:'10px',width:'100%',background:'transparent',marginTop:'1%'}} placeholder="Fell Free To Enquire anything here."></textarea></Grid>
              </Grid>
              <Grid sx={{marginTop:'4%'}}>
              <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:matchesB?35:matchesA?35 :'2.7vw',
                    color: "#000",
                    fontSize:matchesB?'15px': matchesA?'16px':"1.3vw",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    lineHeight:'36px',
                    alignItems: "center",
                    justifyContent: "center",
                    background:'#fff',
                    width:matchesA?'100%':'460px',
                  }} >
                  Submit
                </Button>
              </Grid>
              </Grid>
              {matchesA?<></>:<Grid>
                <img src={mobile} width={500} style={{marginTop:'-10%'}}></img>
            </Grid>}
            </Grid>
            <Grid sx={{fontSize:matchesB?'16px':'26px',fontWeight:300,lineHeight:matchesB?'30px':'36px',color:'#fff',marginTop:matchesB?'10%':'2%',textAlign:'center'}}>
             DCH’s Corporate is the best solution for SME's & Corporates to manage their full fleet of Digital Business Cards. Reach out to us for pricing & setup details.
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',color:'#fff'}}>
        <Grid sx={{fontSize:matchesA?'22px':'44px',fontWeight:700,lineHeight:matchesA?'28px':'50px',marginTop:matchesB?'8%':'5%',width:matchesB?'90%':'50%',textAlign:'center'}}>
        Some of our cooperate customers
            </Grid>
            </Grid>
        <div style={{width:'100%',marginTop:'3%'}}>
   <Slider {...settings}>
    {showSlider()}    
  </Slider>
    </div>
  <Grid sx={{marginTop:"6%"}}>
    <Newfooter />
</Grid>
    </Grid>)
}