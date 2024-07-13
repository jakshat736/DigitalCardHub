import {  IconButton, InputBase } from "@mui/material";
import  logo from "../../../Digital Card Assets/logocardhome.png"
import  mockupcard from "../../../Digital Card Assets/cardhomegif.gif"
import  mockupcard1 from "../../../Digital Card Assets/cardhome1.png"
import  mockupcard2 from "../../../Digital Card Assets/cardhome2.png"
import  mockupcard3 from "../../../Digital Card Assets/cardhome3.png"
import CloseIcon from "@mui/icons-material/Close";
import { Global } from '@emotion/react';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { postData } from '../../../../Services/NodeServices';
import logo1 from '../../../Digital Card Assets/dchlogo.png';
import OtpGenerator from '../../ReviewTag/OtpGenerator';
import useMediaQuery from "@mui/material/useMediaQuery";
const drawerBleeding = 150;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));


const styles = {
    '@keyframes slideLeft': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-100%)' }
    },
    '@keyframes slideRight': {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(100%)' }
    },
    mockup1: {
      animation: 'slideLeft 1s forwards',
      animationDelay: '1s',
    },
    mockup2: {
      zIndex: 10,
    },
    mockup3: {
      animation: 'slideRight 1s forwards',
      animationDelay: '1s',
    }
  };


export default function NewCardHome2(props)
{

    const { windows } = props;
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    let goahead = (location?.state?.goahead !== undefined && location?.state?.goahead !== null) ? location.state.goahead : true;

    const [open, setOpen] = React.useState(false);
    const [phoneNo, setPhoneNo] = React.useState("");
    const [verified, setVerified] = React.useState()
    const [otp, setOtp] = React.useState()


    const handleNewcard=()=>{
        navigate('/newcardhome')
    }
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleSubmit = async () => {
        if (phoneNo !== '') {
            var formData = new FormData()
            formData.append('phone', phoneNo)
            // formData.append('password', password)
            var result = await postData('customerLogin/chkLogin', formData, true)
            if (result.status) {

                window.localStorage.setItem("userId", result.data._id)
                window.localStorage.setItem("UserNumber", result?.data?.phone)
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

    // This is used only for the example
    const container = windows !== undefined ? () => window().document.body : undefined;
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
    const matches = useMediaQuery("(max-width:600px)");


    return(   <Grid sx={{ display: "flex", justifyContent: 'center',background:'#2d3436' }}>
        <Grid container spacing={2} sx={{ display: 'flex', width: 450 , backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",height:'100vh',marginLeft:matches?'-.1%':''}}>
         <Grid item style={{padding:2,width:'100%'}}>
          <Grid sx={{marginTop:'10%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <img src={logo} style={{width:'40%'}}></img>
          </Grid>
          <Grid sx={{marginTop:'8%',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
              <img src={mockupcard1} style={{...styles.mockup1,width:'28%',marginLeft:'-38%',position:'absolute',zIndex:5, animation: 'slideLeft 1s forwards',}} ></img>
              <img src={mockupcard2} style={{...styles.mockup2,width:'28%',marginLeft:'3%',zIndex:10}}></img>
              <img src={mockupcard3} style={{...styles.mockup3,width:'28%',marginLeft:'45%',position:'absolute',zIndex:5,  animation: 'slideRight 1s forwards',}}></img>
          </Grid>
            
          <Grid sx={{marginTop:'5%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',color:'#fff',fontFamily:'Montserrat'}}>
           <Grid sx={{fontSize:'22px',fontWeight:600,marginTop:matches?'10%':''}}>
           WELCOME !
           </Grid>
           <Grid sx={{border:'1px solid #fff',color:'#000',width:'100%', borderTopRightRadius: 18,flexDirection:'column',borderTopLeftRadius: 18,height:matches?'40vh':'37vh',background:'#fff',marginTop:matches?'22%':'2%',display:'flex',justifyContent:'center',alignItems:'center',padding:3}}>
           <Grid
           onClick={handleNewcard}
          aria-label="close"
          sx={{
            marginLeft:'auto',
            color: "inherit",
            cursor:'pointer',
            marginTop:matches?'-4%':''
            
          }}
        >
          <CloseIcon />
        </Grid>
           <Grid sx={{fontSize:'20px',fontWeight:600}}>
           Create Account
           </Grid>
           <Grid sx={{fontSize:'12px',fontWeight:400,marginTop:'1%'}}>
            Activate your card here !
           </Grid>
           <Grid
            sx={{
                    border: "1.8px solid #888888",
                    marginTop:'3%',
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
                      width:100,
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
                    width:"100%",
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

           </Grid>
          </Grid>

          </Grid>
          </Grid>
          </Grid>)
}