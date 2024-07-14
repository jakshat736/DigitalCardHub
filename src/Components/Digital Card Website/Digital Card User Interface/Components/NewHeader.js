import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../../Digital Card Assets/newdigitalcardhublogo.png";
import bag from "../../Digital Card Assets/bag1.png"
import Menu from "@mui/material/Menu";
import close11 from "../../Digital Card Assets/close11.png"
import logo22 from "../../Digital Card Assets/logo22.png"
import Grow from "@mui/material/Grow";

import Paper from "@mui/material/Paper";
import { getData, postData } from "../../../Services/NodeServices";
import { useEffect } from "react";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { useContext } from "react";
import {
  ArrowDownwardRounded,
  ArrowDropDown,
  ShoppingBag,
} from "@mui/icons-material";

import { SessionContext } from "../../../Services/SessionContext";
import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";
import menu from "../../Digital Card Assets/menu.png"
import Toolbar from "@mui/material/Toolbar";
import { useStyles } from "../../Digital Card User Interface/Components/HoveredCss";
import { useNavigate } from "react-router-dom";
import newLogin from "../../Digital Card Assets/loginnew.png"
import "animate.css";
import {
  Container,
  useMediaQuery,
  useTheme,
  Button, List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Downarrow from "../../Digital Card Assets/downarrow.png"
import { Grid, InputBase, IconButton } from "@mui/material";
import { download } from "export-to-csv";
import SideBar from "./SideBar";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import logo11 from "../../Digital Card Assets/logo11.png"
import mockup11 from "../../Digital Card Assets/mockup11.png"
import or from "../../Digital Card Assets/or.png"

import OtpGenerator from '../ReviewTag/OtpGenerator';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import logo1 from '../../Digital Card Assets/dchlogo.png';
import { useLocation } from 'react-router-dom';

export default function NewHeader() {
  var navigate = useNavigate()
  const handleNagivate = () => {
    navigate('/compitable')
  }
  const handleNagivateHome = () => {
    navigate('/newhome')
  }
  const handleNagivateCooperate = () => {
    navigate('/cooperate')
  }

  const handleNagivateShop = () => {
    navigate('/newallproduct')
  }

  const handleNagivaCreate = () => {
    navigate('/newhowtocreate')
  }

  const handleNagivateProductComponents = () => {
    navigate('/newallproduct')
  }

  const handleNagivateAllProducts = () => {
    navigate('/newallproduct2')
  }

  const handleCategory = () => {
    navigate('/categoryproducts')
  }

  const matches = useMediaQuery("(max-width:1350px)");
  const matchesC = useMediaQuery("(max-width:1400px)");
  const matchesA = useMediaQuery("(max-width:600px)");
  const matchesB = useMediaQuery("(max-width:780px)");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [category, setCategory] = React.useState([]);
  const { cart, setCart } = useContext(SessionContext);
  const Token = window.localStorage.getItem("Token");
  const User = window.localStorage.getItem("UserNumber");

  const func = async () => {
    var formdata = new FormData();
    formdata.append("mobile", User);
    var response = await postData("cart/getAllProducts", formdata, true);
    if (response) {
      console.log(response.products);
      setCart(response.products);
    } else {
    }
  };
  useEffect(() => {
    if (User != null) {
      func();
    }
  }, []);
  const FetchAllCategory = async () => {
    var data = await getData("category/display_all_category");

    setCategory(data.data);
  };

  React.useEffect(function () {
    FetchAllCategory();
  }, []);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const medium = useMediaQuery(theme.breakpoints.down(900));
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }


  const handleCart = () => {
    if (cart.length > 0) {
      navigate("/newcart");
    } else {
      Swal.fire({
        title: "Cart Is Empty Add Some Product First",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        icon: "warning",
      });
    }
  };




  ///////////////////////////////////////////
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  let goahead = (location?.state?.goahead !== undefined && location?.state?.goahead !== null) ? location.state.goahead : true;

  // const [emailId, setEmailId] = useState("");
  // const [password, setPassword] = useState("");
  // const [open, setOpen] = useState(false);
  // const [open1, setOpen1] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [enterOpt, setEnterOtp] = useState("");
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

  const handleOtp = () => {
    if (enterOpt?.length == 4) {
      if (otp == enterOpt) {
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

  const loginPage = () => {

    return (<Dialog
      open={openss}
      onClose={handleClosess}
      PaperProps={{
        style: {
          width: '100%',
          height: 400,
          borderRadius: 10,
        },
      }}
    >
      <Grid sx={{ width: '100%', height: 400, display: 'flex' }}>
        {matchesA ? <></> : <Grid sx={{ width: '45%', height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2, backgroundImage: "linear-gradient(to bottom right, #171717,#171717)", }}>
          <Grid sx={{ marginTop: '2%' }}><img src={logo11} width={80}></img></Grid>
          <Grid sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '28px', letterSpacing: '-2.4%', color: '#fff', marginTop: '4%' }}>
            WELCOME BACK
          </Grid>
          <Grid sx={{ marginTop: '5%' }}><img src={mockup11} width={220}></img></Grid>
        </Grid>}
        <Grid sx={{ width: matchesA ? '100%' : '55%', height: 400, padding: 2, display: 'flex', flexDirection: 'column' }}>
          <Grid onClick={handleClosess} style={{ marginLeft: 'auto', cursor: 'pointer' }}><img src={close11} width={20} style={{ left: 100, marginLeft: 'auto' }}></img></Grid>
          <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Grid sx={{ fontSize: '26px', fontWeight: 700, lineHeight: '28px', letterSpacing: '-2.4%', color: '#000', marginTop: '3%' }}>
              Login Now
            </Grid>
            <Grid sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '26px', letterSpacing: '-2.4%', color: '#000', marginTop: '3%' }}>
              Activate your card here !
            </Grid>

            <Grid
              sx={{
                border: "1.8px solid #888888",
                marginTop: '2%',
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "40px",
                width: '100%',
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Whatsapp Number"
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
                    width: matches ? 70 : 100,
                    borderRadius: "5px",
                    height: 25,
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
                marginTop: '5%',
                borderRadius: "10px",
                color: "#000",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width: matches ? '100%' : "300px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter OTP"
                onChange={(event) => setEnterOtp(event.target.value)}
              />
            </Grid>


            <Button
              fullWidth
              sx={{
                border: "1px solid #000",
                borderColor: "#000",
                background: '#0D0D0D',
                height: "40px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 500,
                marginTop: '6%',
                textTransform: "none",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: '22px',
                letterSpacing: '-2.2%',
                "&:hover":{
                  color: "#000",
                }
              }}
              onClick={() => handleOtp()}
            >
              LOGIN
            </Button>

            <Grid style={{ marginTop: '6%', display: 'flex', gap: 3 }}>
              <div style={{ fontSize: '13px', fontWeight: 400, }}>OTP not received?</div><div onClick={handleopenotpdailog} style={{ fontSize: '13px', fontWeight: 500, color: '#0377FF', cursor: 'pointer' }}>Resend OTP</div>
            </Grid>
            <Grid style={{ marginTop: '4%' }}>
              <img src={or} style={{ width: '100%' }}></img>
            </Grid>
            <Grid style={{ marginTop: '2%', display: 'flex' }}>
              <img src={logo22} width={60}></img>
            </Grid>

          </Grid></Grid>
      </Grid>
    </Dialog>)
  }

  return (
    <Grid style={{ width: "100%", fontFamily: 'Muli, sans-serif' }}>
      <Grid style={{ position: "sticky" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            style={{
              backgroundImage: "linear-gradient(to bottom right, #171717,#171717)",
              height: 80,
              display: "flex",
              zIndex: 5,
              justifyContent: matches ? "space-between" : "center",
              padding: matchesA ? 5 : 20,
            }}
          >
            <Toolbar style={{ display: 'flex', justifyContent: matches ? "space-between" : 'none', }} >
              {matches ? <><Grid sx={{ marginLeft: matchesA ? '-2%' : '1%' }}>
                <SideBar />
                {/* <img src={menu} width={28}></img> */}
              </Grid></> : <></>}
              <Grid onClick={handleNagivateHome} sx={{ marginLeft: matches ? '0' : '6%', cursor: 'pointer' }}>
                <img src={Logo} width={matches ? 120 : 140} ></img>
              </Grid>
              {matches ? <><Grid>
                <img src={bag} width={20} ></img>
              </Grid></> : <></>}

              {matches ? <></> : <Grid sx={{ marginLeft: 'auto', gap: 7, color: "#fff", fontWeight: 300, fontSize: "15px", display: 'flex' }}>
                <Grid onClick={handleNagivateHome} sx={{ cursor: 'pointer' }}>
                  Home
                </Grid>

                <Button
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handleToggle}
                  onMouseLeave={handleToggle}
                  sx={{
                    height: 19,
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: "15px",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                  }}
                >
                  <Grid onClick={handleNagivateShop}> Shop</Grid>
                  <Grid>
                    <ArrowDropDown style={{ marginTop: '40%' }} />
                  </Grid>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom"
                    transition
                    disablePortal
                    sx={{ zIndex: 300, marginLeft: matchesC ? '24%' : '50%', marginTop: '4%' }}
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper sx={{ marginRight: 10, color: '#fff', backgroundImage: "linear-gradient(to bottom right, #171717,#171717)", }}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                            style={{ fontWeight: "bold", width: 250 }}
                          >
                            <List component="div">
                              {category.map((item) => (
                                <ListItemButton
                                  onClick={() =>
                                    navigate(`/categoryproducts/${item._id}`, {
                                      state: { category: item.categoryname },
                                    })
                                  }
                                >
                                  <ListItemText
                                    primary={`${item.categoryname}`}
                                    sx={{ color: "#fff", fontWeight: 700 }}
                                  />
                                </ListItemButton>
                              ))}
                            </List>
                          </MenuList>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </Button>


                <Grid onClick={handleNagivaCreate} sx={{ cursor: 'pointer' }}>
                  How to create
                </Grid>
                <Grid onClick={handleNagivateCooperate} sx={{ cursor: 'pointer' }}>
                  Cooperate Enquiries
                </Grid>
                {/* <Grid onClick={handleNagivateAllProducts} sx={{cursor:'pointer'}}>
               All Products
               </Grid> */}
                <Grid onClick={handleClickOpen} sx={{ cursor: 'pointer' }} >
                  <img src={newLogin} width={22} ></img>
                </Grid>
                <Grid sx={{ cursor: 'pointer' }} onClick={() => handleCart()} >
                  <img src={bag} width={16} ></img>
                  {cart.length}
                </Grid>
                <Grid sx={{ color: '#070707' }}>
                  .
                </Grid>
              </Grid>}
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      {loginPage()}
    </Grid>
  );
}
