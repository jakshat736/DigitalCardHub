import { Button, Divider, Grid, InputBase } from "@mui/material";
import NewHeader from "./NewHeader";
import bulletPoint from "../../Digital Card Assets/bulletpoint.png"
import bulletPoint2 from "../../Digital Card Assets/bullet2.png"
import term from "../../Digital Card Assets/mockupterm.png"
import Newfooter from "./NewFooter";
import { useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
export default function PrivacyPolicy()
{ 
    const matches = useMediaQuery("(max-width:1200px)");
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(<Grid   sx={{
        width: "100%",
        height:'auto',
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
        fontFamily: "Montserrat",
        marginBottom:'3%'
      }}>
        <Grid>
            <NewHeader/>
        </Grid>
        <Grid sx={{marginTop:'3%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'100%',color:'#fff'}}>
          <Grid sx={{width:'82%'}}>
           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Grid sx={{fontSize:matches?'28px':'50px',fontWeight:700,textDecoration:'underline'}}>
            Privacy Policy - Digital Card Hub
            </Grid>
           </Grid>
           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'7%'}}>
           Introduction
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Welcome to Digital Card Hub. Your privacy is important to us. This Privacy Policy outlines the types of information we collect from you through your use of our website, how we use that information, and the measures we take to protect it. By using Digital Card Hub, you consent to the practices described in this policy.
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Information We Collect
           </Grid>
           <Grid sx={{display:'flex',gap:2,flexDirection:"column"}}>
           <Grid sx={{fontSize:matches?'18px':'20px',fontWeight:500,lineHeight:'40px',marginTop:'1%'}}>
           1. Personal Information
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>We collect personal information that you voluntarily provide to us when you register on the Site, make a purchase, sign up for our newsletter, respond to a survey, fill out a form, or enter information on our Site. This information may include your name, email address, mailing address, phone number, credit card information, and other details necessary to provide you with our services. 
           </Grid>
           </Grid>
       

           <Grid sx={{display:'flex',gap:2,flexDirection:"column",marginTop:'3%'}}>
           <Grid sx={{fontSize:matches?'18px':'20px',fontWeight:500,lineHeight:'40px',marginTop:'1%'}}>
           2. Non-Personal Information
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>   We also collect non-personal information about you. This may include your browser type, operating system, IP address, and browsing behavior. This information helps us to improve our website and your user experience.
           </Grid>
           </Grid>
          


           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Q. How We Use Your Information ?
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:'54px'}}>
           We may use the information we collect from you in the following ways:
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'2%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint2} width={17}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.

           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'2%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint2} width={17}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           To improve our website in order to better serve you.

           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'2%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint2} width={17}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           To process your transactions quickly.

           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'2%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint2} width={17}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           To send periodic emails regarding your order or other products and services.

           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'2%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint2} width={17}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           To follow up with them after correspondence (live chat, email, or phone inquiries).
               Information Protection

           </Grid>
           </Grid>




          </Grid>
        </Grid>
        <Divider
              style={{
                height:'1px',
                backgroundColor: "#fff",
                width: "100%",
                marginTop: "3%",
                marginBottom:'2%'
              }}
            />

            <Grid sx={{display:'flex',marginTop:'3%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',color:'#fff'}}>
                <Grid sx={{fontSize:matches?'30px':'40px',fontWeight:600,lineHeight:'40px',textDecoration:'underline'}}>
                Contact Us !
                </Grid>
               <Grid sx={{width:matches?'90%':'450px',padding:2,border:'1px solid #fff',borderRadius:'10px',height:'auto',marginTop:'2%'}}>
                <Grid sx={{fontSize:matches?'16px':'20px',fontWeight:500,lineHeight:'22px'}}>
                Name
                </Grid>
                <Grid
              sx={{
                border: "1px solid #fff",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: "100%",
                marginTop:'1%'
              }}
            >
              <InputBase
              placeholder="Enter your Full Name"
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>

            <Grid sx={{fontSize:matches?'16px':'20px',fontWeight:500,lineHeight:'22px',marginTop:'3%'}}>
            Email or Number
                </Grid>
                <Grid
              sx={{
                border: "1px solid #fff",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: "100%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter your Full Name"
              />
            </Grid>


            <Grid sx={{fontSize:matches?'16px':'20px',fontWeight:500,lineHeight:'22px',marginTop:'3%'}}>
            Message
                </Grid>
                <Grid sx={{marginTop:'1%'}}>
             <Grid><textarea style={{height:160,borderColor:'#ffff',border:'1px solid #ffff',borderRadius:'10px',width:'100%',background:'transparent',marginTop:'1%'}} placeholder="Fell Free To Enquire anything here."></textarea></Grid>
            </Grid>
               </Grid>
               <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'40px',
                    color: "#000",
                    fontSize:"14px",
                    marginTop:'1%',
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    lineHeight:'36px',
                    alignItems: "center",
                    justifyContent: "center",
                    background:'#fff',
                    width:matches?'90%':'450px',
                    marginBottom:'4%'
                  }} >
                  Submit
                </Button>
            </Grid>
<Grid>
    <Newfooter/>
</Grid>
    
    </Grid>)
}