import { Grid,Button,TextField,IconButton,InputBase,  InputAdornment, } from "@mui/material";
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
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import l from "../../Digital Card Assets/l.png"
import slider5 from "../../Digital Card Assets/amazon.jpg";
import close11 from "../../Digital Card Assets/close11.png"
import slider11 from "../../Digital Card Assets/bussinesscard1.png";
import slider22 from "../../Digital Card Assets/bussinesscard4.png";
import slider33 from "../../Digital Card Assets/bussinesscard3.png";
import { useNavigate } from "react-router-dom";
import slider111 from "../../Digital Card Assets/oyo.jpg";
import slider222 from "../../Digital Card Assets/flipkard.jpg";
import slider333 from "../../Digital Card Assets/playstore.jpg";
import slider444 from "../../Digital Card Assets/swiggy.jpg";
import shop from "../../Digital Card Assets/shop.png"
import slider555 from "../../Digital Card Assets/go.jpg";
import {
  useMediaQuery,
} from "@mui/material";
import { Gif } from "@mui/icons-material";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import logo11 from "../../Digital Card Assets/logo11.png"
import mockup11 from "../../Digital Card Assets/mockup11.png"
import or from "../../Digital Card Assets/or.png"
import logo1 from '../../Digital Card Assets/dchlogo.png';
import OtpGenerator from '../ReviewTag/OtpGenerator';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import logo22 from "../../Digital Card Assets/logo22.png"
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { postData } from '../../../Services/NodeServices';
export default function NewContainer()
{   
    const matches = useMediaQuery("(max-width:1000px)");
    const matchesA = useMediaQuery("(max-width:600px)");

///////////////////////////////////////////
const { enqueueSnackbar } = useSnackbar();
const location = useLocation();
let goahead = (location?.state?.goahead !== undefined && location?.state?.goahead !== null) ? location.state.goahead : true;

// const [emailId, setEmailId] = useState("");
// const [password, setPassword] = useState("");
// const [open, setOpen] = useState(false);
// const [open1, setOpen1] = useState(false);
const [phoneNo, setPhoneNo] = useState("");
// const [number, setNumber] = useState();
// const [message, setMessage] = useState("");
// const [changeMessage, setChangeMessage] = useState("");
// const [newPassword, setNewPassword] = useState("")
const [showPassword, setShowPassword] = useState(false);
const [otp, setOtp] = useState();

const [verified, setVerified] = useState()
// const handleClickShowPassword = () => setShowPassword(!showPassword);
// const handleMouseDownPassword = () => setShowPassword(!showPassword);
const handleSubmit = async () => {
    if (phoneNo !== '') {
        var formData = new FormData()
        formData.append('phone', phoneNo)
        var result = await postData('customerLogin/chkLogin', formData, true)
        if (result.status) {

            window.localStorage.setItem("userId", result.data._id)
            window.localStorage.setItem("UserNumber", result?.data?.phone)
            window.localStorage.setItem("UserEmail", result?.data?.email)


            Swal.fire({
                title: 'Successfully Logged In!',
                imageUrl: logo1,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                background: '#001e3c',
                timer: 1500,
                width: 500,
                padding: 15,
                color: '#fff',
                showConfirmButton: false,

            })
            navigate('/userdashboard')
            window.localStorage.setItem("User", true)
            window.localStorage.removeItem('data')
            window.localStorage.setItem("data", JSON.stringify(result.data))

        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Fail to Login',
                showConfirmButton: false,
                timer: 1500
            })

        }
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Enter Number First',
            showConfirmButton: false,
            timer: 1500
        })
    }

}

// useEffect(() => {
//   if (localStorage.getItem("User") && goahead) {
//       navigate('/userdashboard')
//   }
// }, [])



const handleOtp = (value) => {
  if (value.length == 4) {
      if (otp == value) {
          // setMessage("")
          setVerified(true)
          handleSubmit()
      } else {
          setVerified(false)
          Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Wrong Otp',
              showConfirmButton: false,
              timer: 1500
          })
      }
  }
}

const handleopenotpdailog = async () => {

  if (phoneNo != '') {
      var otpval = OtpGenerator()

      setOtp(otpval)

      const apiUrl = `https://cloud.bulkpromo.in/api/send?number=91${phoneNo}&type=text&message=Your Otp For Digital Card Hub - ${otpval}&instance_id=6676AB42323B3&access_token=666ff52aa9a38`;
      const response = await postData('otp/api', { url: apiUrl })
  } else {
      Swal.fire({
          text: "Enter the Number First",
          timer: 1000
      })
  }
}





///////////////////////////////////////////








    var navigate=useNavigate()
  const handleNagivate=()=>{
    navigate('/newallproduct2')
}

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const loginPage=()=>{

  return( <Dialog
    open={open}
    onClose={handleClose}
    PaperProps={{
      style: {
        width:'100%',
        height:  400,
        borderRadius: 10
        }}}>
    <Grid sx={{width: '100%', height:400,display:'flex' }}>
      {matchesA?<></>:<Grid sx={{width:'45%', height:400 ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:2,backgroundImage: "linear-gradient(to bottom right, #171717,#171717)",}}>
         <Grid sx={{marginTop:'2%'}}><img src={logo11} width={80}></img></Grid>
         <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'28px',letterSpacing:'-2.4%',color:'#fff',marginTop:'4%'}}>
          WELCOME BACK
         </Grid>
         <Grid sx={{marginTop:'5%'}}><img src={mockup11} width={220}></img></Grid>
      </Grid>}
      <Grid sx={{width:matchesA?'100%':'55%', height:400 ,padding:2,display:'flex',flexDirection:'column'}}>
        <Grid  onClick={handleClose} style={{marginLeft:'auto',cursor:'pointer'}}><img src={close11} width={20} style={{left:100,marginLeft:'auto'}}></img></Grid>
        <Grid sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Grid sx={{fontSize:'26px',fontWeight:700,lineHeight:'28px',letterSpacing:'-2.4%',color:'#000'}}>
       Login Now
      </Grid>
      <Grid  sx={{fontSize:'18px',fontWeight:400,lineHeight:'26px',letterSpacing:'-2.4%',color:'#000',marginTop:'3%'}}>
      Activate your Profile here !
      </Grid>

      <Grid
            sx={{
                    border: "1.8px solid #888888",
                    marginTop:'5%',
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "40px",
                    width:'100%',
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Email Address or number"
                    value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)}
                    
                  />

                   <IconButton
                  type="button"
                  sx={{ p: "10px" }}  
                  onClick={handleopenotpdailog}
                >
                  <div
                    style={{
                      border: "1px solid #000",
                      background: "#000",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 500,
                      width:matches?70: 100,
                      borderRadius: "5px",
                      height:25,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Get OTP
                  </div>
                </IconButton>
                </Grid>

                <Grid
                  sx={{
                    border: "2px solid #888888",
                    marginTop:'5%',
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width:matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter OTP"
                    onChange={(event) => handleOtp(event.target.value)} 
                  />
                </Grid>

       
                <Button
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#0D0D0D',
                  height:"40px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 500,
                  marginTop:'6%',
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             LOGIN
              </Button>

              <Grid style={{marginTop:'6%',display:'flex',gap:3}}>
               <div style={{fontSize:'13px',fontWeight:400,}}>OTP not received?</div><div  onClick={handleopenotpdailog} style={{fontSize:'13px',fontWeight:500,color:'#0377FF',cursor:'pointer'}}>Resend OTP</div>
              </Grid>
              <Grid style={{marginTop:'4%'}}>
                <img src={or} style={{width:'100%'}}></img>
              </Grid>
              <Grid style={{marginTop:'2%',display:'flex'}}>
              <img src={logo22} width={60}></img>
              </Grid>

      </Grid>
      </Grid>
    </Grid>
  </Dialog>)
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
                    <Grid sx={{fontSize:matchesA ? '22px' : matches ? '30px' : '2.8vw',fontWeight:700,lineHeight:matches?'30px':'48px',fontFamily:'Montserrat',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",textAlign:matches?'center':"normal"}}>
                     MAKE YOUR  BUSSINES DIGITAL WITH US.
                    </Grid>
                    <Grid sx={{fontSize:matchesA ? '14px':matches?20:'1.6vw',fontWeight:400,lineHeight:matchesA ? '22px':'32px',fontFamily:'Montserrat',marginTop:'1%',display:matches?'flex':'',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal",textAlign:matches?'center':"normal"}}>
                    digital business card platform makes convienient and reliaeble
                    </Grid>
                    {matches?<></>:<><Grid sx={{display:'flex',gap:4,alignItems:'center',justifyContent:matches?'center':'normal',alignContent:matches?'center':"normal"}}>
                    <Grid>
                    <Button onClick={handleClickOpen}
                sx={{
                 border:'3.2px solid #fff',
                  height: 42,
                  width:matches?170:'16.5vw',
                  background:'transparent',
                  color: "#fff",
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 2.6,
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "14px",
                  lineHeight:'22px',
                  fontWeight: 700,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
             Create Now
              </Button>
              </Grid>
              <Grid onClick={handleNagivate}  sx={{marginTop:'1%',cursor:'pointer'}}>
                <img src={shop} width={100}></img>
              </Grid>
              {/* <Grid sx={{marginTop:'2%',marginLeft:'1%'}}>
              <Grid
                 onClick={handleClickOpen}
                sx={{
                  color: "#fff",
                  display: "flex",
                  borderRadius: 20,
                  fontSize: "18px",
                  fontWeight: 600,
                  alignItems:'center',
                  fontFamily:'Montserrat',
                  textDecoration:'underline',
                  cursor:'pointer'
                
                }}
              >
               Create Now <KeyboardArrowRightIcon style={{color:'#ffff',marginLeft:'-.8%',marginTop:'.5%'}}/>
              </Grid>
              </Grid> */}
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

{matches?<><Grid sx={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:matchesA ? '7%':'6%' }}>
<Button
   onClick={handleNagivate}
                sx={{ 
                 border:'3.2px solid #fff',
                  height: matches?26:35,
                  width:matches?170:'17vw',
                  background:'transparent',
                  color: "#fff",
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 2.6,
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight:'20px',
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
              Shop Now
              </Button>
</Grid></>:<></>}
           
         </Grid>
         {loginPage()}
    </Grid>)
}