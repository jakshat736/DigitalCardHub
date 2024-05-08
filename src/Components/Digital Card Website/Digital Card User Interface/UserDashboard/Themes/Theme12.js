import { Email, GridView, Margin, Padding } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  colors,
  useTheme,
} from "@mui/material";
import menubar from "../Themes/ThemeAssets/menu bar.png";
import digital from "../Themes/ThemeAssets/digitallogo.png";
import eye from "../Themes/ThemeAssets/eye.png";
import HelpIcon from '@mui/icons-material/Help';
import { PiSquaresFour } from "react-icons/pi";
import InputBase from '@mui/material/InputBase';
import { RxCrossCircled } from "react-icons/rx";
import {
  ExpandLess,
  ExpandMore,
  Inbox,
  Mail,
  StarBorder,
} from "@mui/icons-material";
import { IoIosArrowUp } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import send from "../Themes/ThemeAssets/send.png";
import { IoIosContact } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import inquery from "../Themes/ThemeAssets/inquery.png";
import inquery100 from "../Themes/ThemeAssets/enquery100.png";
import call from "../Themes/ThemeAssets/call.png";
import * as React from "react";
import { MdFeedback } from "react-icons/md";
import Emaillogo from "../Themes/ThemeAssets/email1234.png"
import key from "../Themes/ThemeAssets/key.png"


import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import { PiGreaterThanThin } from "react-icons/pi";
import whatapp from "../Themes/ThemeAssets/whatapp.png";
import fb from "../Themes/ThemeAssets/fb.png";
import Rating from "@mui/material/Rating";
import enquery11 from "../Themes/ThemeAssets/enquery11.webp";
import { FcRatings } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { TbLogin2 } from "react-icons/tb";
import gmail from "../Themes/ThemeAssets/mail.png";
import insta from "../Themes/ThemeAssets/insta.png";
import link from "../Themes/ThemeAssets/link.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IoIosArrowDown } from "react-icons/io";
import { PiDeviceMobileFill } from "react-icons/pi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaShopify } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import bannerone from "../Themes/ThemeAssets/banner1.png";
import banner2 from "../Themes/ThemeAssets/banner2.png";
import { makeStyles } from "@mui/styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaShareNodes } from "react-icons/fa6";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <CloudDownloadIcon />, name: "Save" },
  { icon: <HelpIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const useStyles = makeStyles({
  dots: {
    "& .slick-dots li.slick-active button::before": {
      color: "#fffff",
      opacity: 1,
    },
    "& .slick-dots li button::before": {
      color: "#636e72",
      fontSize: "9px",
      opacity: 0.4,
      marginTop: "-4%",
    },
    "& .slick-dots li ": {
      margin: "40px -1px",
    },
    marginBottom: -10,
    marginTop: "-3%",
  },
});

export default function Theme12() {
  const matches = useMediaQuery("(max-width:600px)");
  // const [homePage, setHomePage] = useState(true)
  const [about, setAbout] = useState(false);

  const handleAbout = () => {
    setAbout(!about);
    setOpenDrawer(!openDrawer);
    if(about === false){
      var section = document.getElementById("work");
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  var useStyle = useStyles();
  var settings = {
    infinite: true,
    speed: 500,
    dots: matches ? false : true,
    slidesToShow: 1,
    autoplay: "true",
    autospeed: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var settingsreview = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: "true",
    autospeed: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  var datas = [bannerone, banner2, bannerone];
  const showSlider = () => {
    return datas.map((items) => {
      return (
        <div>
          <img src={items} style={{ width: "100%" }} />
        </div>
      );
    });
  };

  var data = [
    {
      id: 0,
      name: "Ankit Singh",
      Comments:
        "Supporting staff n well house keeping infotech solution give best software and website service in gwalior",
      rating: 5,
    },
    {
      id: 0,
      name: "Harshit jain",
      Comments:
        "Supporting staff n well house keeping solution give best software",
      rating: 5,
    },
    {
      id: 0,
      name: "Satyveer Singh",
      Comments: "Supporting staff n well house keeping",
      rating: 5,
    },
  ];
  const showReview = () => {
    return data.map((item) => {
      return (
        <div
          style={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            style={{
              border: "1px solid #c8d6e5",
              width: "100%",
              marginTop: "3%",
              height: 200,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              borderRadius: 5,
            }}
          >
            <Grid style={{ marginTop: "1%" }}>
              <Grid
                style={{
                  marginTop: "2%",
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: 400,
                }}
              >
                {item.name}
              </Grid>
            </Grid>
            <Grid style={{ marginTop: "5%" }}>
              <Rating
                size="large"
                style={{ fontSize: 30 }}
                color="green"
                name="simple-controlled"
                value={4.5}
              />
            </Grid>
            <Grid style={{ marginTop: "4%" }}>
              <Grid
                style={{
                  marginTop: "2%",
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                {item.Comments}
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    });
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 330,
        backgroundImage: "radial-gradient(#ecf0f1, #dcdde1)",
        height: "100%",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ marginTop: "15%", marginLeft: "4%" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AiFillHome style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Home"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <PiDeviceMobileFill style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Compatible devices"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <IoIosCreate style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="How to create"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <MdFeedback style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Feedback"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <TbLogin2 style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Login/Signup"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <FaShopify style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Shop"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "10%" }}>
          All Copyright @ reserved by IndiaBuzz
        </ListItem>
      </List>
    </Box>
  );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openB, setOpenB] = React.useState(false);

  const handleClickOpenButton = () => {
    setOpenB(true);
  };

  const handleCloseButton = () => {
    setOpenB(false);
  };

  const [openContact, setOpenContact] = React.useState(false);

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  const handleClickIcon = (name) => {
    if (name == "Share") {
      handleClickOpenButton();
    } else if (name == "Print") {
      handleClickOpenContact();
    }
  };




const [openLogin, setOpenLogin] = useState(false);

const handleClickOpenLogin = () => {
  setOpenLogin(true);
};
const handleCloseLogin = () => {
  setOpenLogin(false);
};


const [openSignup, setOpenSignup] = useState(false);

const handleClickSignup = () => {
  setOpenSignup(true);
};
const handleCloseSignup = () => {
  setOpenSignup(false);
};
  return (
    <Grid
      style={{
        backgroundColor: "#bdc3c7",
        height: "auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: { xs: "100vw", sm: "70%", md: "37%" },
          height: "100%",
          background: "#fff",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundImage: "radial-gradient(#353b48, #000)",
            height: "auto",
            flexDirection: "column",
          }}
        >
          {/* for cover photo */}
          <Grid style={{ width: "100%", height: matches ? 250 : 270 }}>
          {/*for cover photo */}
            <Grid
              sx={{
                height: 80,
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Grid sx={{ marginLeft: "2%" }}>
                <Grid key={"left"} style={{ cursor: "pointer" }}>
                  <img
                    src={menubar}
                    onClick={toggleDrawer("left", true)}
                    sx={{ colors: "#fff" }}
                  ></img>
                  <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    {list("left")}
                  </Drawer>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  border: "1px solid #d2dae2",
                  width: 100,
                  height:30,
                  backgroundColor: "#4b4b4b",
                  marginLeft: "auto",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0.2,
                }}
              >
                <Grid sx={{ marginTop: "2%" }}>
                  <img src={eye}></img>
                </Grid>
                <Grid sx={{ marginLeft: "10%", color: "#fff", fontsize: 14 }}>
                  68842
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            style={{
              width: "100%",
              height: 95,
              position: "relative",
              background: "#fff",
              borderRadius: "15px 15px 0px  0px",
            }}
          >
            <Grid
              style={{
                marginTop: matches ? "8%" : "4%",
                padding: 14,
                display: "flex",
                marginLeft: "auto",
              }}
            >
              <React.Fragment style={{ borderRadius: 40 }}>
                {/* <Grid
                  onClick={handleClickOpenButton}
                  style={{
                    width: "15%",
                    border: "1px solid #bdc3c7",
                    borderRadius: 20,
                    marginLeft: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    backgroundImage: "radial-gradient(#fff,#f5f6fa )",
                    cursor: "pointer",
                  }}
                >
                  <FaShareNodes
                    style={{ fontSize: "25px", color: "#0abde3" }}
                  />
                </Grid> */}
                <Dialog
                  style={{ borderRadius: 40 }}
                  open={openB}
                  onClose={handleCloseButton}
                >
                  <DialogTitle
                 style={{background:"#ecf0f1"}}
                  >
                    ENQUIRY NOW
                  </DialogTitle>
                  <DialogContent
                  style={{background:"#ecf0f1"}}
                  >
                    <TextField
                      required
                      margin="dense"
                      label="Enter Number"
                      type="email"
                      style={{ width: matches ? "60vw" : "20vw" }}
                      variant="standard"
                    />
                    <Grid
                sx={{
                border: "1px solid #39FF14",
                width: 80,
                backgroundColor: "#39FF14",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
                color: "#fff",
                marginTop: "3%",
                
              }}
            >
              <Grid sx={{ color:'#2c3e50' }}>Send</Grid>
            </Grid>
                    <DialogContentText style={{ display: "flex" }}>
                      <div
                        style={{
                          color: "#000",
                          border: "1px solid #000",
                          marginTop: "6%",
                          width: "24%",
                          display: "flex",
                          padding: 0,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 5,
                        }}
                      >
                        <b style={{ padding: 2 }}>OR</b>
                      </div>{" "}
                      <span
                        style={{
                          color: "#000",
                          marginLeft: "4%",
                          marginTop: "6%",
                        }}
                      >
                        By Other Link{" "}
                        <span style={{ color: "#0652DD" }}>
                          http://localhost
                        </span>
                      </span>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions
                    style={{background:"#ecf0f1"}}
                    >
                      <Button onClick={handleCloseButton}>
                        <RxCrossCircled
                          style={{ fontSize: "24px", color: "#000" }}
                        />
                      </Button>
                    </DialogActions>

                  {/* <DialogActions
                 style={{background:"#ecf0f1"}}
                  >
                    <Button onClick={handleCloseButton}>Cancel</Button>
                  </DialogActions> */}
                </Dialog>
              </React.Fragment>


              <Grid
                onClick={handleAbout}
              sx={{
                border: "1px solid #000",
                width: 110,
                backgroundImage: "radial-gradient(#353b48, #000)",
                borderRadius: 7,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
                color: "#fff",
                marginLeft: "auto",
              }}
            >
              <Grid sx={{ fontsize: "10px", fontWeight: 600,marginLeft:'4%' }}>Work</Grid>
                  {openDrawer ? (
                    <ExpandLess fontSize="medium" />
                  ) : (
                    <ExpandMore fontSize="medium" />
                  )}
            </Grid>
              {/* <Button
                onClick={handleAbout}
                style={{
                  borderColor: "#000",
                  width: "35%",
                  backgroundImage: "radial-gradient(#353b48, #000)",
                  color: "#ffff",
                  fontSize: "15px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: 20,
                  marginLeft: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="outlined"
              >
                WORK
                <Grid
                  style={{
                    marginTop: matches ? "10%" : "6%",
                    color: "#fff",
                    marginLeft: "5%",
                  }}
                >
                  {openDrawer ? (
                    <ExpandLess style={{ fontSize: "20px", color: "#fff" }} />
                  ) : (
                    <ExpandMore style={{ fontSize: "20px", color: "#fff" }} />
                  )}
                </Grid>
              </Button> */}
              {/* <Button
         variant="outlined"
         onClick={handleAbout}
             sx={{
                border: "1px solid #000",
                  width: 100,
                  backgroundColor: "#000",
                  marginLeft: "auto",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: .6
                  ,marginLeft:'auto',
                  cursor:'pointer',
                  textTransform:'none'

                }}
              >
                <Grid sx={{ marginTop: "2%",color:'#fff',fontSize:12,fontWeight:500 }}   expandIcon={<ExpandMoreIcon style={{color:'#fff'}} />}>
                   WORK
                </Grid>
                <Grid style={{marginTop:'3%',color:'#fff',marginLeft:'4%'}}>
                <IoIosArrowUp style={{fontSize:16}}/>
                </Grid>
              </Button> */}
            </Grid>

            <Grid
            onClick={handleClickOpenLogin}
              style={{
                backgroundImage: "radial-gradient(#dcdde1,#95a5a6)",
                marginLeft: "5%",
                position: "absolute",
                top: matches ? -93 : -100,
                width: matches ? "160px" : "180px",
                height: matches ? "160px" : "180px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "95px",
                page: "5",
              }}
            ></Grid>
          </Grid>
          <Grid style={{ background: "#fff" }}>
            <Grid
              style={{ marginLeft: matches ? "4%" : "6%", marginTop: "2%" }}
            >
              <Grid
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "21.94px",
                }}
              >
                Chinmay Sharma
              </Grid>
              <Grid
                style={{
                  fontsize: "18px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  marginTop: "1%",
                }}
              >
                Freelance Graphic Designer
              </Grid>
              <Grid style={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    height: 50,
                    transform: "translateZ(100px)",
                    flexGrow: 1,
                    position: "relative",
                    marginTop: "-10%",
                  }}
                >
                  <SpeedDial
                    FabProps={{
                      // FabProps ka istemal button ke rang ko badalne ke liye
                      style: {
                        backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                      }, // Button ka rang red karne ke liye
                    }}
                    direction="left"
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: "absolute", right: 16, bottom: 1 }}
                    icon={
                      <PiSquaresFour
                        style={{ fontSize: "30px", color: "#2f3640" }}
                      />
                    }
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => handleClickIcon(action.name)}
                      />
                    ))}
                  </SpeedDial>
                </Box>

                {/* <Grid style={{marginTop:'6%',color:'#3d3d3d',marginLeft:'5%'}}>
              <IoIosContact  style={{fontSize:25,}}/>
           </Grid> */}

                <React.Fragment style={{ borderRadius: 40 }}>
                  {/* <Grid
                    onClick={handleClickOpenContact}
                    sx={{
                      border: "1px solid #bdc3c7",
                      width: matches?130:190,
                      backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                      borderRadius: 25,
                      display: "flex",
                      cursor: "pointer",
                    
                      padding: matches?0.5:0.8,
                      marginTop: "3%",
                    
                      flexDirection: "row",
                      marginLeft: matches?"60%":'57%',
                      marginTop: "-7%",
                    
                    }}
                  >
                    <Grid
                      sx={{
                        color: "#000",
                        fontWeight: 400,
                        fontSize:matches?16:20,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                      }}
                    >
                      <Grid style={{marginLeft:'20%',fontWeight:400,fontSize:17}}> Enquiry </Grid>
                      <Grid style={{ marginLeft: "4%" }}>
                        {" "}
                       <img src={inquery100} style={{width:'35%'}}></img>
                      </Grid>
                    </Grid>
                  </Grid> */}

                  <Dialog
                    style={{ borderRadius: 40 }}
                    open={openContact}
                    onClose={handleCloseContact}
                  >
                    <DialogTitle
                   style={{background:"#ecf0f1"}}
                    >
                      Connect
                    </DialogTitle>
                    <DialogContent
                   style={{background:"#ecf0f1"}}
                    >
                      <DialogContentText>
                        Share Your detail with Ankit
                      </DialogContentText>
                      <DialogContentText>
                        <TextField
                          required
                          margin="dense"
                          label="Your Name"
                          type="email"
                          fullWidth
                          variant="standard"
                        />
                      </DialogContentText>
                      <TextField
                        required
                        margin="dense"
                        fullWidth
                        label="Your Email"
                        type="email"
                        variant="standard"
                      />

                      <TextField
                        required
                        margin="dense"
                        fullWidth
                        label="Your Mobile Number"
                        type="email"
                        variant="standard"
                      />
                      <TextField
                        required
                        margin="dense"
                        fullWidth
                        label="Aditional info"
                        type="email"
                        variant="standard"
                      />
                      <DialogContentText
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          style={{
                            borderColor: "#39FF14",
                            width: "28%",
                            background: "#39FF14",
                            color: "#000",
                            fontSize: "13px",
                            fontWeight: 400,
                            textTransform: "none",
                            borderRadius: 20,
                            display: "flex",
                            marginTop: "4%",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          variant="outlined"
                        >
                          <Grid style={{ marginLeft: "4%" }}>Submit</Grid>
                        </Button>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions
                    style={{background:"#ecf0f1"}}
                    >
                      <Button onClick={handleCloseContact}>
                        <RxCrossCircled
                          style={{ fontSize: "24px", color: "#000" }}
                        />
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              </Grid>
            </Grid>
            <Grid
              style={{ marginLeft: matches ? "4%" : "6%", marginTop: "1%" }}
            >
              <Divider
                style={{
                  height: "1px",
                  backgroundColor: "#AAAAAA",
                  width: matches ? "52%" : "35%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>


        <Dialog
        PaperProps={{
        style: {
          position: 'fixed',
          bottom: -38,
          width:'100%',
           // Dialog ko page ke bottom me set karein
        },
      }}
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle  style={{fontSize:16,background:"#ecf0f1"}} id="alert-dialog-title">
          {"Login to Find the Bussiness Profile"}
          <IconButton
          onClick={handleCloseLogin}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'inherit',
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent style={{background:"#ecf0f1"}}>
          <DialogContentText id="alert-dialog-description">
          <DialogContentText>
                        <TextField
                          required
                          margin="dense"
                          label="Your Name"
                          type="email"
                          fullWidth
                          variant="standard"
                        />
                      </DialogContentText>
                      <TextField
                        required
                        margin="dense"
                        fullWidth
                        label="Enter Mobile No./Email"
                        type="email"
                        variant="standard"
                      />
          </DialogContentText>
          <DialogContentText
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          style={{
                            borderColor: "#7ed6df",
                            width: "28%",
                            background: "#7ed6df",
                            color: "#000",
                            fontSize: "13px",
                            fontWeight: 400,
                            textTransform: "none",
                            borderRadius: 20,
                            display: "flex",
                            marginTop: "6%",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          variant="outlined"
                        >
                          <Grid style={{ marginLeft: "4%" }}>Submit</Grid>
                        </Button>
                      </DialogContentText>
        </DialogContent>
       
      </Dialog>




      <Dialog
        PaperProps={{
        style: {
          position: 'fixed',
          bottom: -38,
          width:'100%',
           // Dialog ko page ke bottom me set karein
        },
      }}
        open={openSignup}
        onClose={handleCloseSignup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{background:"#ecf0f1"}}  id="alert-dialog-title">
          <IconButton
          onClick={handleCloseSignup}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'inherit',
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent sx={{background:'#ecf0f1'}}>
        
        
        <Grid style={{display:'flex',justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
        <Grid sx={{fontSize:'28px',fontWeight:700,color:'#000',marginTop:'5%'}}>
          Login/SignUp
        </Grid>
        <Grid sx={{fontSize:16,color:'#636e72',marginTop:'2%'}}>
        Activate your Profile here !
        </Grid>
        </Grid>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'6%'}}>
        <div style={{border:'1px solid #b2bec3',background:'#dfe6e9',borderRadius:6,width:'90%'}}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
       <img src={Emaillogo} width={20}></img>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Email Address or number"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
   </div>   
</div>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'6%'}}>
        <div style={{border:'1px solid #b2bec3',background:'#dfe6e9',borderRadius:6,width:'90%'}}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
       <img src={key} width={20}></img>
      </IconButton>
      <InputBase
        sx={{ width:'52%' }}
        placeholder="Enter OTP"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
       <IconButton type="button"  aria-label="search">
       <div
              style={{
                border: "1px solid #000",
                width: 70,
                backgroundColor: "#000",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 7,
                color: "#fff",
                fontSize:10,
                borderRadius:8,
                marginLeft:'auto'
              
              }}
            >
             Get OTP
            </div>
      </IconButton>
   </div>   
</div>
<Grid style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop: "7%",}}>
<Grid
       sx={{
                border: "1px solid #000",
                width: '90%',
                backgroundColor: "#000",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1.3,
                color: "#fff",
                
               
              }}
            >
              <Grid sx={{ fontsize: "10px", fontWeight: 700 }}>LOGIN</Grid>
            </Grid>
            </Grid>


        </DialogContent>
       
      </Dialog>


        {about ? (
          <>
            {" "}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                backgroundColor: "#fff",
                height: 335,
                flexDirection: "column",
                padding: 0,
              }}
            >
              <Grid style={{ marginLeft: matches ? "5%" : "6%" }}>
                <Grid
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    justifyContent: "start",
                    display: "center",
                    marginTop: "4%",
                  }}
                >
                  About
                </Grid>

                <Grid
                  style={{
                    border: "1px solid #000",
                    width: "94%",
                    height: 260,
                    padding: 6,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 10,
                  }}
                >
                  <Grid
                    style={{
                      fontSize: 12,
                      color: "#636e72",
                      overflowY: "scroll",
                      padding: 8,
                    }}
                  >
                    <div>
                      Passionate student and graphic designer with a strong
                      creative flair and a keen eye for detail. Currently
                      pursuing B.Tech(Information Technology) at Govt.
                      Engineering College, Ajmer [BTU affliated] .  Proficient
                      in Adobe Creative Suite (Photoshop, Illustrator, xd,after
                      effects) and experienced in creating visually appealing
                      designs across various
                    </div>
                    <br></br>
                    <div>
                      {" "}
                      platforms.  As a designer, I strive to bring ideas to life
                      through innovative and captivating visuals. I am skilled
                      in creating stunning logo , brochures, social media
                      graphics, and other marketing materials. With a focus on
                      user-centered design, I aim to deliver impactful
                      experiences that engage and inspire.  Simultaneously, I am
                      a skilled coder, proficient in C,C++,Java and algo. I
                      enjoy building intuitive and functional
                      projects/applications that combine aesthetics with
                      seamless user experiences.  If you are looking for a
                      dedicated graphic designer who combines creativity with a
                      strong work ethic, let's connect and explore how we can
                      bring you0r design projects to life!. C,C++,Java and algo.
                      I enjoy building intuitive and functional
                      projects/applications that combine aesthetics with
                      seamless user experiences.  If you are looking for a
                      dedicated graphic designer who combines creativity with a
                      strong work ethic, let's connect and explore how we can
                      bring you0r design projects to life!. C,C++,Java and algo.
                      I enjoy building intuitive and functional
                      projects/applications that combine aesthetics with
                      seamless user experiences.  If you are looking for a
                      dedicated graphic designer who combines creativity with a
                      strong work ethic, let's connect and explore how we can
                      bring you0r design projects to life!.
                    </div>
                  </Grid>
                </Grid>

                <Grid style={{ marginTop: "20%" }}>
                  <Divider
                    style={{
                      height: "2px",
                      backgroundColor: "#AAAAAA",
                      width: "94%",
                      marginTop: "20%",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundColor: "#fff",
            height: matches ? 290 : 340,
            flexDirection: "column",
            padding: 1.7,
          }}
        >
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 22,
              marginTop: "2%",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                marginTop: "3%",
                justifyContent: "center",
                padding: 0.2,
              }}
            >
              <Grid sx={{ marginTop: "2%" }}>
                <img src={call}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: matches ? "10%" : "18%",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Call
              </Grid>
            </Grid>

            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3%",
                padding: 0.2,
              }}
            >
              <Grid
                sx={{ marginTop: "2%", marginLeft: matches ? "5%" : "10%" }}
              >
                <img src={whatapp}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: matches ? "9%" : "18%",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Whatsapp
              </Grid>
            </Grid>
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 22,
              marginTop: "3%",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                padding: 0.3,
                marginTop: "3%",
                justifyContent: "center",
              }}
            >
              <Grid sx={{ marginTop: "2%" }}>
                <img src={gmail}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: matches ? "10%" : "18%",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Email
              </Grid>
            </Grid>

            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",

                marginTop: "3%",
                justifyContent: "center",
              }}
            >
              <Grid sx={{ marginTop: "2%" }}>
                <img src={link}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: matches ? "10%" : "18%",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                linkIn
              </Grid>
            </Grid>
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 22,
              marginTop: "3%",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                padding: 0.8,
                marginTop: "3%",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{ marginTop: "2%", marginLeft: matches ? "5%" : "10%" }}
              >
                <img src={fb}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: matches ? "9%" : "18%",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Facebook
              </Grid>
            </Grid>

            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",

                marginTop: "3%",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{ marginTop: "2%", marginLeft: matches ? "5%" : "10%" }}
              >
                <img src={insta}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: matches ? "9%" : "18%",
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Instagram
              </Grid>
            </Grid>
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 22,
              marginTop: "4%",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#7f8c8d )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0.8,
                marginTop: "3%",
              }}
            >
              <Grid
                sx={{
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Add To Contacts
              </Grid>
            </Grid>

            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#7f8c8d  )",
                borderRadius: 25,
                display: "flex",
                alignItems: "center",
                padding: 0.8,
                marginTop: "3%",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Add to Contacts
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Divider
              style={{
                height: "1px",
                backgroundColor: "#bdc3c7",
                width: matches ? "97%" : "100%",
                marginTop: "10%",
              }}
            />
          </Grid>
        </Grid>

       <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundColor: "#fff",
            height: matches ? 280 : 400,
            flexDirection: "column",
            padding: 1,
          }}
        >
          <Grid
            style={{
              marginTop: "4%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
           
            <Grid style={{ fontSize: "22px", fontWeight: 700 }}>
              Work / Products
            </Grid>
            <Grid style={{ width: "100%" }}>
              <Slider
                style={{ width: "100%" }}
                {...settings}
                className={useStyle.dots}
              >
                {showSlider()}
              </Slider>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundColor: "#fff",
            height: matches ? 170 : 220,
            flexDirection: "column",
            padding: 1,
          }}
        >
          
          <Grid style={{ marginLeft: "7%" }}>
            <Grid style={{ fontSize: "20px", fontWeight: 600 }}>
              LOGO DESIGN WORK
            </Grid>
            
            <Grid
              style={{ fontSize: "14px", color: "#2d3436", marginTop: "2%" }}
            >
              We have different variety of Design in logo of different companies
            </Grid>
           
          </Grid>
          <div id='work'></div>
          <Grid style={{ display: "flex" }}>
            <Grid
              sx={{
                border: "1px solid #000",
                width: 120,
                backgroundColor: "#000",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
                color: "#fff",
                marginTop: "3%",
                marginLeft: "6%",
              }}
            >
              <Grid sx={{ fontsize: "10px", fontWeight: 500 }}>Enquiry Now</Grid>
            </Grid>
            <Grid
              style={{
                marginLeft: "3%",
                marginTop: "3%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid style={{ fontSize: 14, marginTop: "-2%" }}>See more </Grid>
              <Grid style={{ marginTop: "4%" }}>
                <PiGreaterThanThin style={{ fontsize: 10 }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Divider
              style={{
                height: "1px",
                backgroundColor: "#bdc3c7",
                width: matches ? "96%" : "100%",
                marginTop: "10%",
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundColor: "#fff",
            height: "auto",
            flexDirection: "column",
            padding: 3,
          }}
        >
          <Grid style={{ fontSize: "20px", fontWeight: 600 }}>
            SEE OUR VEDIOS
          </Grid>
          <Grid style={{ marginTop: "5%" }}>
            <video
              autoplay
              controls
              style={{ borderRadius: "4%", width: "100%" }}
            >
              <source src="https://www.youtube.com/live/f12GSyMjesw?si=BXfTXjRkrAa9Fv23" />
            </video>
          </Grid>
          <Grid style={{ marginTop: "5%" }}>
            <video
              autoplay
              controls
              style={{ borderRadius: "4%", width: "100%" }}
            >
              <source src="https://www.youtube.com/live/f12GSyMjesw?si=BXfTXjRkrAa9Fv23" />
            </video>
          </Grid>
          <Grid style={{ marginTop: "5%" }}>
            <video
              autoplay
              controls
              style={{ borderRadius: "4%", width: "100%" }}
            >
              <source src="https://www.youtube.com/live/f12GSyMjesw?si=BXfTXjRkrAa9Fv23" />
            </video>
          </Grid>
          <Grid style={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Divider
              style={{
                height: "1px",
                backgroundColor: "#bdc3c7",
                width: matches ? "104%" : "94%",
                marginTop: "10%",
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundColor: "#fff",
            height: matches ? 300 : 380,
            flexDirection: "column",
            padding: 1,
          }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <React.Fragment>
              <Button
                onClick={handleClickOpen}
                style={{
                  borderColor: "#39FF14",
                  width: matches ? "50%" : "35%",
                  backgroundImage: "radial-gradient(#39FF14, #39FF14)",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 5,
                  borderRadius: 20,
                  marginTop: "3%",fontSize: "16px", fontWeight: 400 
                }}
                variant="outlined"
              >
              
              
                  Give Us Review
               
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent
                  style={{ backgroundImage: "radial-gradient(#ecf0f1, #ecf0f1)" }}
                >
                  <DialogContentText id="alert-dialog-description">
                    <Grid
                      style={{
                        border: "1px solid #95a5a6",
                        width: "100%",
                        marginTop: "3%",
                        height: 260,
                        padding: 20,
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 5,
                      }}
                    >
                      <Grid style={{ marginTop: "1%" }}>
                        <Grid
                          style={{
                            fontSize: 14,
                            color: "#000",
                            fontWeight: 400,
                          }}
                        >
                          Name
                        </Grid>
                        <TextField
                          id="standard-password-input"
                          type="Name"
                          autoComplete="Enter Your Name"
                          placeholder="Enter Your Name"
                          variant="standard"
                          size="small"
                          style={{
                            width: matches ? "60vw" : "25vw",
                            marginTop: "1%",
                            background: "#fff",
                            backgroundImage:
                              "radial-gradient(#ecf0f1, #ecf0f1)",
                          }}
                        />
                      </Grid>
                      <Grid style={{ marginTop: "6%" }}>
                        <Grid
                          style={{
                            fontSize: 14,
                            color: "#000",
                            fontWeight: 400,
                          }}
                        >
                          Rate Us
                        </Grid>
                        <Rating
                          size="large"
                          style={{ fontSize: 30 }}
                          color="green"
                          name="simple-controlled"
                          value={5}
                        />
                      </Grid>
                      <Grid style={{ marginTop: "6%" }}>
                        <Grid
                          style={{
                            fontSize: 14,
                            color: "#000",
                            fontWeight: 400,
                          }}
                        >
                          Review
                        </Grid>
                        <TextField
                          placeholder="Help Us To Review"
                          size="small"
                          style={{
                            width: matches ? "60vw" : "25vw",
                            marginTop: "1%",
                            background: "#fff",
                            borderColor: "#000",
                            backgroundImage:
                              "radial-gradient(#ecf0f1, #ecf0f1)",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </DialogContentText>
                </DialogContent>
                <DialogActions
                    style={{background:"#ecf0f1"}}
                    >
                      <Button onClick={handleClose}>
                        <RxCrossCircled
                          style={{ fontSize: "24px", color: "#000" }}
                        />
                      </Button>
                    </DialogActions>
                {/* <DialogActions
                  style={{ backgroundImage: "radial-gradient(#ecf0f1, #ecf0f1)" }}
                >
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions> */}
              </Dialog>
            </React.Fragment>
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
            }}
          >
            <Slider style={{ width: "90%" }} {...settingsreview}>
              {showReview()}
            </Slider>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundColor: "#fff",
            height: 70,
            flexDirection: "column",
            padding: 6,
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={digital} style={{ width: "15%" }}></img>
          <Grid style={{ fontSize: 12, color: "#2d3436", marginTop: "2%" }}>
            Powered By IndiaBuzz
          </Grid>
          
          <Grid
          onClick={handleClickSignup}
            sx={{
              background: `linear-gradient(to bottom, #FD0000 0%, #F5C92B 20%, #2FF52B 40%, #2BE9F5 60%, #2B3FF5 80%, #D92BF5 100%)`,
              //  background:"#fff",
              marginLeft: matches?"66%":"20%",
              position:'fixed',
              bottom: matches ? 0 : 0,
              width: matches ? "90px" : "90px",
              height: matches ? "90px" : "90px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "95px",
              marginBottom:'4%',
              cursor:'pointer',
              borderColor:'#000'
          
              

            }}
          >

<Grid
      sx={{
            // background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
              width: matches ? "77px" : "77px",
              height: matches ? "77px" : "77px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "95px",
              cursor:'pointer',
              backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
          
              

            }}
          > 
             <Grid sx={{fontSize:"16px",fontWeight:600,textAlign:'center',color:'#000'}}>Create<br></br> Your</Grid>
            
            </Grid>
        </Grid>


        </Grid>
      </Grid>
    </Grid>
  );
}
