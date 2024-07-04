import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import List from "@mui/material/List";
import {  postData } from "../../../Services/NodeServices";
import Divider from "@mui/material/Divider";
import menu from "../../Digital Card Assets/menu.png"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logo from "../../Digital Card Assets/New Logo New.png";
import { Collapse, Icon, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import dch from "../../Digital Card Assets/Dch Logo.png"
import { useNavigate } from "react-router-dom";
import close11 from "../../Digital Card Assets/close11.png"
import logo22 from "../../Digital Card Assets/logo22.png"
import LanguageIcon from "@mui/icons-material/Language";
import { AssistWalkerTwoTone } from "@mui/icons-material";
import logo11 from "../../Digital Card Assets/logo11.png"
import mockup11 from "../../Digital Card Assets/mockup11.png"
import or from "../../Digital Card Assets/or.png"

import OtpGenerator from '../ReviewTag/OtpGenerator';
import {  useState ,useEffect} from 'react';
import { useSnackbar } from 'notistack';
import logo1 from '../../Digital Card Assets/dchlogo.png';
import { useLocation } from 'react-router-dom';
import { getData } from "../../../Services/NodeServices";
import { Grid,InputBase ,IconButton,Dialog} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CircleIcon from '@mui/icons-material/Circle';
const pages = [
  { url: "/newhome", name: "Home",Icon:HomeIcon },
  // {url:"",name:"Products"},
  // {url:"",name:"Cart"},
  { url: "/compitable", name: "Compatible Devices" ,Icon:PhoneAndroidIcon},
  { url: "/howtocreate", name: "How To Create" ,Icon:AddBoxIcon},
  { url: "/newallproduct2", name: "All Products" ,Icon:ProductionQuantityLimitsIcon},

];

export default function TemporaryDrawer() {

  const navigate = useNavigate();




  const matches = useMediaQuery("(max-width:1350px)");
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








  const [openss, setOpenss] = React.useState(false);

  const handleClickOpen = () => {
    setOpenss(true);
  };
  
  const handleClosess = () => {
    setOpenss(false);
  };
  
  const loginPage=()=>{
  
    return( <Dialog
      open={openss}
      onClose={handleClosess}
      PaperProps={{
        style: {
          width:'100%',
          height:  400,
          borderRadius: 10,
        },}}
    >
      <Grid sx={{width: '100%', height:400,display:'flex' }}>
        {matchesA?<></>:<Grid sx={{width:'45%', height:400 ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:2,backgroundImage: "linear-gradient(to bottom right, #171717,#171717)",}}>
           <Grid sx={{marginTop:'2%'}}><img src={logo11} width={80}></img></Grid>
           <Grid sx={{fontSize:'18px',fontWeight:600,lineHeight:'28px',letterSpacing:'-2.4%',color:'#fff',marginTop:'4%'}}>
            WELCOME BACK
           </Grid>
           <Grid sx={{marginTop:'5%'}}><img src={mockup11} width={220}></img></Grid>
        </Grid>}
        <Grid sx={{width:matchesA?'100%':'55%', height:400 ,padding:2,display:'flex',flexDirection:'column'}}>
        <Grid  onClick={handleClosess} style={{marginLeft:'auto',cursor:'pointer'}}><img src={close11} width={20} style={{left:100,marginLeft:'auto'}}></img></Grid>
        <Grid sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Grid sx={{fontSize:'26px',fontWeight:700,lineHeight:'28px',letterSpacing:'-2.4%',color:'#000',marginTop:'3%'}}>
        Login Now
        </Grid>
        <Grid  sx={{fontSize:'18px',fontWeight:400,lineHeight:'26px',letterSpacing:'-2.4%',color:'#000',marginTop:'3%'}}>
        Activate your card here !
        </Grid>
  
        <Grid
              sx={{
                      border: "1.8px solid #888888",
                      marginTop:'2%',
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
                  sx={{
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
  
        </Grid></Grid>
      </Grid>
    </Dialog>)
  }
  






  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open1, setOpen1] = React.useState(false);
  const [category, setCategory] = React.useState([]);

  const handleClick = () => {
    setOpen1(!open1)
  };

  const toggleDrawer = (anchor, open) => (event) => {
    // alert(anchor)
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const FetchAllCategory = async () => {
    var data = await getData("category/display_all_category");

    setCategory(data.data);
  };
  const handleNavigate = (item, anchor) => {
    setOpen1(false);
    const closeDrawer = toggleDrawer(anchor, false); // Get the toggleDrawer function
    closeDrawer();
    navigate(`/categoryproducts/${item._id}`, {
      state: { category: item.categoryname },
    });
  };

  React.useEffect(function () {
    FetchAllCategory();
  }, []);

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        backgroundImage: "radial-gradient(#ffff, #bdc3c7)",
        height: 1000,
      }}
      role="presentation"
    >
      <Typography
        sx={{
          fontSize: "1.5em",
          fontWeight: 700,
          color: "#000",
          textAlign: "center",
          mt: 2,
        }}
      >
        <img src={dch} style={{ width: "40%" }} />
      </Typography>
      <List style={{ marginTop: "6%", marginLeft: "8%" }}>
        {pages.map((text) => (
          <ListItem
            key={text.name}
            disablePadding
            style={{ padding: 7, fontSize: 18, fontWeight: 400 }}
          >
            <ListItemButton onClick={() => navigate(text.url)}>
              <ListItemIcon>
               <text.Icon style={{color:'#000',fontSize:'30px'}}/>
              </ListItemIcon>
              <ListItemText
                sx={{
                  color: "#000",
                  textAlign: "left",
                  fontSize: "22px",
                  fontWeight: 500,
                }}
                primary={text.name}
              />
            </ListItemButton>
          </ListItem>
        ))}
         <ListItem key={"Login/SignUp"} disablePadding style={{ padding: 7 }}>
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon>
              <LoginIcon style={{color:'#000',fontSize:'30px'}} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "#000", textAlign: "left", ml: 2 , fontSize: "22px",
                fontWeight: 500,}}
              primary={"Login/SignUp"}
            />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Shop"} disablePadding style={{ padding: 7 }}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ShoppingBagIcon style={{color:'#000',fontSize:'30px'}} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "#000", textAlign: "left", ml: 2 , fontSize: "22px",
                fontWeight: 500,}}
              primary={"Shop"}
            />
          </ListItemButton>
        </ListItem>
        {open1 && (
          <List sx={{ paddingLeft: 2 }}>
            {category.map((item) => (
              <ListItem key={`${item._id}`} disablePadding>
                <ListItemButton onClick={() => handleNavigate(item, anchor)}>
                <ListItemIcon>
                <CircleIcon style={{marginLeft:'26%',fontSize:'15px',color:'#000'}} />
            </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#000", textAlign: "left",fontWeight:400,fontSize:'15px' }}
                    primary={`${item.categoryname}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </List>
    </Box>
  );

  // ... (remaining code)

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={menu} width={28}></img>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              square: false,
              style: {
                height: "87vh",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                // Dialog ko page ke bottom me set karein
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {loginPage()}
    </div>
  );
}
