import HelpIcon from "@mui/icons-material/Help";
import {
  Box,
  Button,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import fram1 from "../Themes/ThemeAssets/frame1.png"
import fram2 from "../Themes/ThemeAssets/frame2.png"
import MoreIcon from '@mui/icons-material/MoreVert';
import fram3 from "../Themes/ThemeAssets/frame3.png"
import menubarbold from "../Themes/ThemeAssets/menubarbold.png"
import { IoIosContact } from "react-icons/io";
import InputBase from "@mui/material/InputBase";
import groups from "../Themes/ThemeAssets/group.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import * as React from "react";
import { IoIosCreate } from "react-icons/io";
import WhatsApp1 from "../Themes/ThemeAssets/whatsapp1.png";
import { MdFeedback } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import call from "../Themes/ThemeAssets/call.png";
import msg from "../Themes/ThemeAssets/msg.webp"
import digital from "../Themes/ThemeAssets/digitallogo.png";
import Emaillogo from "../Themes/ThemeAssets/email1234.png";
import eye from "../Themes/ThemeAssets/eye.png";
import key from "../Themes/ThemeAssets/key.png";
import menubar from "../Themes/ThemeAssets/menu bar.png";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import ShareIcon from "@mui/icons-material/Share";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AiFillHome } from "react-icons/ai";
import { PiDeviceMobileFill, PiGreaterThanThin } from "react-icons/pi";
import { TbLogin2 } from "react-icons/tb";
import fb from "../Themes/ThemeAssets/fb.png";
import insta from "../Themes/ThemeAssets/insta.png";
import link from "../Themes/ThemeAssets/link.png";
import gmail from "../Themes/ThemeAssets/mail.png";
import whatapp from "../Themes/ThemeAssets/whatapp.png";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import { enqueueSnackbar } from "notistack";
import { RiUserSharedFill } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { postData, serverURL } from "../../../../Services/NodeServices";
import bannerone from "../Themes/ThemeAssets/banner1.png";
import banner2 from "../Themes/ThemeAssets/banner2.png";
import ReactPlayer from "react-player";
import { FaShare } from "react-icons/fa";



const actions = [
  { icon: <IoIosContact style={{ fontSize: '26px' }}/>, name: "Copy" },
  { icon: <FaShare style={{ fontSize: '20px' }} />, name: "Shareno" },
  { icon: <HelpIcon />, name: "Enquery" },
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


export default function Theme12({ data, products, gallery, ecommerce }) {

  // All states

  const matches = useMediaQuery("(max-width:600px)");
  const [about, setAbout] = useState(false);
  const [href, setHref] = useState("");
  const [smsHref, setSmsHref] = useState("");
  const [name, setName] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [openB, setOpenB] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  console.log(data);

  // All handleClickFunctions

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSeeMore = () => {
    setOpenMore(true);
  };

  const handleCloseSeeMore = () => {
    setOpenMore(false);
  };
  const handleClickOpenButton = () => {
    setOpenB(true);
  };

  const handleCloseButton = () => {
    setOpenB(false);
  };

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  const handleClickIcon = (name) => {
    if (name == "Share") {
      handleClick();
    } else if (name == "Enquery") {
      handleClickOpenContact();
    } else if (name == "Copy") {
      handleSave();
    } else {
      handleClickOpenButton();
    }
  };

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  React.useEffect(() => {
    handleClickOpenLogin();
  }, []);
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleClickSignup = () => {
    setOpenSignup(true);
  };
  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  const handleWhatsappUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("whatsappClickCount", data?.whatsappClickCount + 1);
    var result = await postData(
      "carddetails/updateWhatsappClickCount",
      formData,
      true
    );
    window.open(`https://wa.me/+91${data?.phoneNumber}?text=`);
  };

  const handleFbUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("fbClickCount", data?.fbClickCount + 1);
    var result = await postData(
      "carddetails/updateFbClickCount",
      formData,
      true
    );
    window.open(`https://www.facebook.com/${data?.fbLink}`);
  };

  const handleInstaUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("instaClickCount", data?.whatsappClickCount + 1);
    var result = await postData(
      "carddetails/updateInstaClickCount",
      formData,
      true
    );
    window.open(`https://www.instagram.com/${data?.igLink}`);
  };

  const handleAbout = () => {
    setAbout(!about);
    setOpenDrawer(!openDrawer);
    if (about === false) {
      var section = document.getElementById("work");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleClick = async (title, url) => {
    try {
      await navigator.share({
        title,
        url,
        text: "Check out this link!",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleContactUpdate = async () => {
    var formData = new FormData();
    formData.append("_id", data?._id);
    formData.append("contactDownloadCount", data?.contactDownloadCount + 1);
    var result = await postData(
      "carddetails/updateContactDownloadCount",
      formData,
      true
    );
  };
const [scroll,setScroll]=useState(false)

setTimeout(()=>{
  setScroll(!scroll)
},5000)

  const handleSave = () => {
    var vCardData =
      "BEGIN:VCARD\r\n" +
      "VERSION:3.0\r\n" +
      "FN:" +
      data?.fullname +
      "\r\n" +
      "N:" +
      data?.fullname +
      ";;;\r\n" +
      "EMAIL;TYPE=INTERNET:" +
      data?.Email +
      "\r\n" +
      "TEL;TYPE=CELL:" +
      data?.phoneNumber +
      "\r\n" +
      "END:VCARD";
    var blob = new Blob([vCardData], { type: "text/vcard" });
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "contact.vcf";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    handleContactUpdate();
  };


  const handleMessage = (e) => {
    setHref(
      `https://api.whatsapp.com/send?phone=+91${e.target.value}&text=https://digitalcardhub.in/%23/${data?.companyId}`
      // `https://wa.me/+91${e.target.value}?text=https://digitalcardhub.in/#/${data?.companyId}`
    );
    setSmsHref(
      `sms:+91${e.target.value}?body=https://digitalcardhub.in/%23/${data?.companyId}`
    );
  };

  const handleSubmit = async (customerId) => {
    let formData = new FormData();
    formData.append("cardId", customerId);
    formData.append("name", name);
    formData.append("number", phoneNo);
    formData.append("query", query);

    let response = await postData("enquiry/addcardenquiry", formData, true);

    if (response?.status) {
      setName("");
      setPhoneNo("");
      setQuery("");
      enqueueSnackbar("Enquiry Send Successfully");
      setOpenContact(false);
      setOpenLogin(false);
    }
  };

  // Dialog 

  const RatingDialog = () => {
    return (<Dialog
      PaperProps={{
        style: {
          position: "fixed",
          bottom:-32,
          width: "100%",
          // Dialog ko page ke bottom me set karein
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',color:'#000',fontSize:'20px',fontWeight:'700',marginTop:'5%'}}>
          GIVE REVIEW !
          </Grid>
         <IconButton
        onClick={handleClose}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "inherit",
        }}
      >
          <CloseIcon />
        </IconButton></DialogTitle>
        <Grid item xs={12}>
        <Grid sx={{background:'#fff',padding:2,maxHeight:500}}>
        <Grid>
        <Grid
          style={{
            border: "1px solid #95a5a6",
            width: "100%",
            height: 'auto',
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
                fontWeight: 500,
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
              fullWidth
              size="small"
              style={{
               
                marginTop: "1%",
                background: "#fff",
             backgroundColor:'#fff'
              }}
            />
          </Grid>
          <Grid style={{ marginTop: "6%" }}>
            <Grid
              style={{
                fontSize: 14,
                color: "#000",
                fontWeight: 500,
              }}
            >
              Rate Us
            </Grid>
            <Rating
              size="large"
              style={{ fontSize: 30 }}
              color="green"
              name="simple-controlled"
              value={0}
            />
          </Grid>
          <Grid style={{ marginTop: "4%" }}>
            <Grid
              style={{
                fontSize: 16,
                color: "#000",
                fontWeight: 500,
              }}
            >
              Review
            </Grid>
            <TextField
              placeholder="Help Us To Review"
              size="small"
              fullWidth
              style={{
              
                marginTop: "1%",
                background: "#fff",
                borderColor: "#000",
                backgroundColor:'#fff'
              }}
            />
          </Grid>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Button
          style={{
            borderColor: "#7ed6df",
            width: "90%",
            background: "#7ed6df",
            color: "#000",
            fontSize: "16px",
            fontWeight: 500,
            textTransform: "none",
            borderRadius: 8,
            display: "flex",
            marginTop: "6%",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          Submit
        </Button>
        </Grid> 
          </Grid>   
          </Grid>
          </Grid>

      {/* <DialogActions
      style={{ backgroundImage: "radial-gradient(#ecf0f1, #ecf0f1)" }}
    >
      <Button onClick={handleClose}>Close</Button>
    </DialogActions> */}
    </Dialog>)
  }


  const SeeMoreDialog = () => {
    return (<Dialog
      PaperProps={{
        style: {
          position: "fixed",
          height:'100%',
          width: "100%",
          // Dialog ko page ke bottom me set karein
        },
      }}
      open={openMore}
      onClose={handleCloseSeeMore}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',color:'#000',fontSize:'20px',fontWeight:'700',marginTop:'5%'}}>
          More
          </Grid>
         <IconButton
        onClick={handleCloseSeeMore}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "inherit",
        }}
      >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <Grid item xs={10}>
        <Grid sx={{background:'#fff',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1%',flexDirection:'column'}}><img src={fram1}></img>
       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <Grid sx={{fontSize:'22px',fontWeight:700,display:'flex',justifyContent:'center',alignItems:'center'}}>
        LOGO DESIGN
         </Grid>
         <Grid sx={{fontSize:'15px',fontWeight:400,marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
         Sorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit adipiscing.
         </Grid>
       </Grid>
       </Grid>



       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'6%',flexDirection:'column'}}><img src={fram2}></img>
       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <Grid sx={{fontSize:'22px',fontWeight:700,display:'flex',justifyContent:'center',alignItems:'center'}}>
        LOGO DESIGN
         </Grid>
         <Grid sx={{fontSize:'15px',fontWeight:400,marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
         Sorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit adipiscing.
         </Grid>
       </Grid>
       </Grid>



       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'6%',flexDirection:'column'}}><img src={fram3}></img>
       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <Grid sx={{fontSize:'22px',fontWeight:700,display:'flex',justifyContent:'center',alignItems:'center'}}>
        LOGO DESIGN
         </Grid>
         <Grid sx={{fontSize:'15px',fontWeight:400,marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
         Sorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit adipiscing.
         </Grid>
       </Grid>
       </Grid>



         
          </Grid>
          </Grid>

      {/* <DialogActions
      style={{ backgroundImage: "radial-gradient(#ecf0f1, #ecf0f1)" }}
    >
      <Button onClick={handleClose}>Close</Button>
    </DialogActions> */}
    </Dialog>)
  }


  const loginSignup = () => {
    return (<Dialog
      PaperProps={{
        style: {
          position: "fixed",
          bottom: -38,
          width: "100%",
          // Dialog ko page ke bottom me set karein
        },
      }}
      open={openSignup}
      onClose={handleCloseSignup}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ background: "#ecf0f1" }} id="alert-dialog-title">
        <IconButton
          onClick={handleCloseSignup}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "inherit",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ background: "#ecf0f1" }}>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#000",
              marginTop: "5%",
            }}
          >
            Login/SignUp
          </Grid>
          <Grid sx={{ fontSize: 16, color: "#636e72", marginTop: "2%" }}>
            Activate your Profile here !
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6%",
          }}
        >
          <div
            style={{
              border: "1px solid #b2bec3",
              background: "#dfe6e9",
              borderRadius: 6,
              width: "90%",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <img src={Emaillogo} width={20}></img>
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Email Address or number"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6%",
          }}
        >
          <div
            style={{
              border: "1px solid #b2bec3",
              background: "#dfe6e9",
              borderRadius: 6,
              width: "90%",
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <img src={key} width={20}></img>
            </IconButton>
            <InputBase
              sx={{ width: "52%" }}
              placeholder="Enter OTP"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" aria-label="search">
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
                  fontSize: 10,
                  borderRadius: 8,
                }}
              >
                Get OTP
              </div>
            </IconButton>
          </div>
        </div>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "7%",
          }}
        >
          <Grid
            sx={{
              border: "1px solid #000",
              width: "90%",
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
    </Dialog>)
  }



  const loginBussiness = () => {
    return (<Dialog
      PaperProps={{
        style: {
          position: "fixed",
          bottom: -38,
          width: "100%",
          // Dialog ko page ke bottom me set karein
        },
      }}
      open={openLogin}
      onClose={handleCloseLogin}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        style={{ fontSize: 16, background: "#ecf0f1" }}
        id="alert-dialog-title"
      >
        {"Greetings"}
        <IconButton
          onClick={handleCloseLogin}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "inherit",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ background: "#ecf0f1" }}>
        <DialogContentText id="alert-dialog-description">
          <DialogContentText>
            <TextField
              required
              margin="dense"
              label="Your Name"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            />
          </DialogContentText>
          <TextField
            required
            margin="dense"
            fullWidth
            label="Enter Mobile Number"
            type="email"
            variant="standard"
            onChange={(e) => setPhoneNo(e.target.value)}
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
            onClick={() => handleSubmit(data?.customerId)}
          >
            Submit
          </Button>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    )
  }


  const enquiryDialog = () => {
    return (
      <Dialog
        sx={{ borderRadius: 10 }}
        open={openB}
        onClose={handleCloseButton}
      >
        <DialogTitle style={{ background: "#ecf0f1" }}>ENQUIRY NOW
          <IconButton
            onClick={handleCloseButton}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "inherit",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ background: "#ecf0f1" }}>
          <Stack>
            <TextField
              required
              margin="dense"
              label="Enter Number"
              style={{ width: matches ? "66vw" : "20vw" }}
              variant="standard"
              onChange={(e) => handleMessage(e)}
            />
            <Stack direction="row" spacing={2}>
              {/* <Button sx={{ color: "green" }} href={href}>
                Send on WhatsApp
              </Button>
              <Button sx={{ color: "blue" }} href={smsHref}>
                Send on Sms
              </Button> */}
              <Button
                href={href}
                style={{
                  borderColor: "#D0D0D0 ",
                  width: "18%",
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#ffff",
                  fontSize: "13px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: 50,
                  display: "flex",
                  marginTop: "4%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="outlined"
              >
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleSubmit(data?.customerId)}
                >

                  <img src={WhatsApp1} style={{ width: '120%' }}></img>

                </Grid>
              </Button>
              <Button
                href={smsHref}
                style={{
                  borderColor: "#D0D0D0 ",
                  width: "18%",
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: 50,
                  display: "flex",
                  marginTop: "4%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                variant="outlined"
              >
                <Grid sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                  onClick={() => handleSubmit(data?.customerId)}
                >
                  <img src={msg} style={{ width: '120%' }}></img>
                </Grid>
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    );
  };

  const EnquiryFormDialog = () => {
    return (
      <Dialog
        style={{ borderRadius: 40 }}
        open={openContact}
        onClose={handleCloseContact}
      >
        <DialogTitle style={{ background: "#ecf0f1" }}>Connect
          <IconButton
            onClick={handleCloseContact}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "inherit",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ background: "#ecf0f1" }}>
          <DialogContentText>
            Share Your Query With {data?.fullname}
          </DialogContentText>
          <DialogContentText>
            <TextField
              required
              margin="dense"
              label="Your Name"
              type="email"
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </DialogContentText>
          <TextField
            required
            margin="dense"
            fullWidth
            label="Your Mobile Number"
            type="email"
            variant="standard"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            fullWidth
            label="Query"
            type="email"
            variant="standard"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
                borderColor: "#000",
                width: "28%",
                background: "#000",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 400,
                textTransform: "none",
                borderRadius: 6,
                display: "flex",
                marginTop: "4%",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="outlined"
            >
              <Grid
                style={{ marginLeft: "4%" }}
                onClick={() => handleSubmit(data?.customerId)}
              >
                Submit
              </Grid>
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  // Menuslider
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

  // Sliders

  var data1 = [
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
    return data1.map((item) => {
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


  // makesStyle


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


  console.log(ecommerce)
  
  // var datas=[{id:0,picture:[bannerone],productname:'LOGO DESIGN WORK',price:2000.00,offerprice:1000.00},
  // {id:0,picture:[banner2],productname:'FULL STACK DEVELOPER',price:3300.00,offerprice:2200.00},
  // {id:0,picture:[bannerone],productname:'GRAPHIC DESIGNER LOGO',price:2200.00,offerprice:1000.00}]

  const showSlider = () => {
    return ecommerce.map((item) => {
         if (item != null) {
      return(<Grid item xs={12} sx={{display:'flex'}}>

         <Grid sx={{width: '100%',marginLeft:'6%'}}>
         <img src={`${serverURL}/images/${item.productimg}`} style={{ width: matches?300:470, height:matches?220:300,
    paddingBottom: '8%', 
    position: 'relative',}}/>
         </Grid>
         <Grid sx={{display:'flex',marginTop:'-5%',flexDirection:'column',marginLeft:'6%'}}>
         <Grid sx={{fontSize:'22px',fontWeight:700}}>
         {item.productname}
         </Grid>
         <Grid sx={{fontSize:'15px',fontWeight:400,marginTop:'1%'}}>
         Sorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit adipiscing.
         </Grid>
         <Grid sx={{alignItems:'center',marginTop:'-3%',display:'flex',width:'100%'}}>
        <Button
          style={{
            borderColor: "#000",
            width:130,
            height:40,
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 8,
            display:item.show=="true"?"block":"none",
            marginTop: "6%",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="outlined"
          onClick={() =>
            window.open(
              `https://wa.me/+91${data?.WhatsappNo}?text=I Want To Buy Your ${item.productname}`
            )
          }
        >
          Enquery Now
        </Button>
        <Grid>
        <Grid sx={{display:'flex',flexDirection:'column',marginLeft:'10%',marginTop:'7%',width:'300%'}}>
       <Grid sx={{fontSize:'20px',fontWeight:600,color:'#FF0000',marginTop:'7%',marginLeft:'3%'}}>₹ {item.offerprice}  </Grid><Grid sx={{fontSize:'12px',fontWeight:500,color:'#4A4A4A',marginLeft:'3%'}}>(Inc. all taxes)</Grid>
          </Grid> 
        </Grid>
        </Grid>
        <Grid sx={{marginTop:'3%',marginLeft:'1%'}}>
        <Grid onClick={handleClickSeeMore} sx={{display:'flex',flexDirection:'row',color:'#4A4A4A',cursor:'pointer'}}>
       <Grid sx={{fontSize:13}}>See More</Grid><Grid sx={{fontSize:"15px",marginTop:'.2%'}}><MdKeyboardArrowRight /></Grid>
          </Grid>
          </Grid>
         </Grid>
      </Grid>)
    }})
  }



  return (
    <Grid
      style={{
        backgroundColor: "#f5f6fa",
        height: "100%",
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
          marginTop: 0,
          marginLeft: 0.3,
          position: "relative",
        }}
      >
        {data?.coverVideo != "" ? (
          <Grid
            id="hero"
            xs={12}
            sx={{
              display: "flex",
              color: "#fff",
              width: { xs: "100vw", sm: "70%", md: "40%" },
              minHeight: { xs: 200 },
              paddingLeft: -5,
              overflow: "hidden", // Ensures the video doesn't overflow the Grid
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                objectFit: "cover",
                width: "100%",
                height: 250,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}
            >
              <source
                src={`${serverURL}/images/${data?.coverVideo}`}
                type="video/mp4"
              />
            </video>
          </Grid>
        ) : (
          <Grid
            id="hero"
            item
            xs={12}
            md={12}
            sx={{
              color: "#fff",
              backgroundImage: data?.companyCoverImage
                ? `url('data:image/png;base64,${arrayBufferToBase64(
                  data?.companyCoverImage.data?.data
                )}')`
                : "radial-gradient(#353b48, #000) ",
              backgroundSize: "cover",
              width: "100%",
              minHeight: { xs: 260 },
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          >
            {" "}
          </Grid>
        )}
        <Grid
          sx={{
            width: "100%",
            height: matches ? 250 : 270,
            position: "absolute",
            zIndex: 1,
          }}
        >
          {/*for cover photo */}
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Grid sx={{ marginLeft: "2%" }}>
              <Grid key={"left"} style={{ cursor: "pointer" }}>
                <img
                  src={menubarbold}
                  onClick={toggleDrawer("left", true)}
                  style={{ color: "#fff",width:'18%' }}
                ></img>
                <Drawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                  
                >
                  {list("left")}
                </Drawer>
              </Grid>
            </Grid>
            
            <Paper
              elevation={25}
              sx={{
                border: "1px solid #7f8c8d",
                width: 100,
                height: 30,
                background: 'rgba(142, 142, 142, 0.5)',
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
                {data?.cardViewCount}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            background: '#fff',
            height: "auto",
            flexDirection: "column",
          }}
        >
          <Grid
            style={{
              width: "100%",
              height: 95,
              position: "relative",
              background: "#fff",
              borderRadius: "15px 15px 0px  0px",
              marginTop:'-3%'
            }}
          >
            <Grid
              style={{
                marginTop: matches ? "8%" : "4%",
                padding: 14,
                display: "flex",
              }}
            >
              <Grid
                onClick={handleAbout}
                sx={{
                  border: "1px solid #000",
                  width: 110,
                  height:36,
                  backgroundImage: "radial-gradient(#353b48, #000)",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 1,
                  color: "#fff",
                  marginLeft: "auto",
                  cursor:'pointer',
                  marginTop:matches?'-8%':'-4%',

                }}
              >
                <Grid
                  sx={{ fontsize: "10px", fontWeight: 600, marginLeft: "4%" }}
                >
                  Work
                </Grid>
                {openDrawer ? (
                  <ExpandLess fontSize="medium" />
                ) : (
                  <ExpandMore fontSize="medium" />
                )}
              </Grid>
            </Grid>

            <Grid
              style={{
                backgroundImage: data?.companylogo
                  ? `url('data:image/jpeg;base64,${arrayBufferToBase64(
                    data?.companylogo.data?.data
                  )}')`
                  : "radial-gradient(#dcdde1,#95a5a6)",
                marginLeft: "5%",
                position: "absolute",
                top: matches ? -93 : -100,
                width: matches ? "160px" : "180px",
                height: matches ? "160px" : "180px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "95px",
                backgroundSize: "cover",
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
                {data?.fullname}
              </Grid>
              <Grid
                style={{
                  fontsize: "18px",
                  fontWeight: 400,
                  lineHeight: "19.5px",
                  marginTop: "1%",
                }}
              >
                {data?.position}
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


        {about ? (
          <>
            {" "}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                backgroundColor: "#fff",
                minHeight:"auto",
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
                    maxHeight: 260,
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
                    {data?.AboutUs}
                  </Grid>
                </Grid>

                <Grid style={{ marginTop: "10%" }}>
                  <Divider
                    style={{
                      height: "1px",
                      backgroundColor: "#AAAAAA",
                      width: "94%",
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
            flexDirection: "column",
            padding: 1.7,
          }}
        >
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent:'center',
              gap: matches?18:35,
              marginTop: "2%",
            }}
          >



            <Button
              sx={{
                borderColor: "#bdc3c7",
                border: '#bdc3c7',
                width: 230,
                height: 36,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                color: "#2c3e50",
                fontWeight: "bold",
                textTransform: "none",
                padding: 2.6,
                display: data?.phoneNumber == null ? "none" : "flex",
                justifyContent: "flex-start",
                borderRadius: 20,
                marginTop: "3%",
                fontSize: "16px",
                fontWeight: 400,
              }}


              onClick={() => {
                window.open(`tel:${data?.phoneNumber}`);
              }}
            >
              <Grid sx={{ marginTop: '3%', }}>
                <img src={call} />
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Call
              </Grid>
            </Button>




            <Button
              sx={{
                borderColor: "#bdc3c7",
                width: 230,
                height: 36,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                color: "#2c3e50",
                justifyContent: "flex-start",
                fontWeight: "bold",
                textTransform: "none",
                padding: 2.6,
                display: "flex",
                borderRadius: 20,
                marginTop: "3%",
                fontSize: "16px",
                fontWeight: 400,
              }}


              onClick={() => handleWhatsappUpdate()}
            >
              <Grid sx={{ marginTop: '5%' }} >
                <img src={whatapp}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.7,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Whatsapp
              </Grid>
            </Button>
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: matches?18:35,
              marginTop: "3%",
            }}>
            <Button
              sx={{
                borderColor: "#bdc3c7",
                width: 230,
                height: 36,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                color: "#2c3e50",
                fontWeight: "bold",
                textTransform: "none",
                padding: 2.6,
                justifyContent: "flex-start",
                display: data?.Email == null ? "none" : "flex",
                borderRadius: 20,
                marginTop: "3%",
                fontSize: "16px",
                fontWeight: 400,
              }}


              onClick={() => {
                window.open(
                  `mailto:${data?.Email}?body=Query%20About%20Business`
                );
              }}
            >
              <Grid sx={{ marginTop: '5%', }}>
                <img src={gmail}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Email
              </Grid>
            </Button>



            <Button
              sx={{
                borderColor: "#bdc3c7",
                width: 230,
                height: 36,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                color: "#2c3e50",
                fontWeight: "bold",
                textTransform: "none",
                padding: 2.6,
                justifyContent: "flex-start",
                display: data?.LinkdnLink == null ? "none" : "flex",
                borderRadius: 20,
                marginTop: "3%",
                fontSize: "16px",
                fontWeight: 400,
              }}


              onClick={() => {
                window.open(`https://www.linkedin.com/in/${data?.LinkdnLink}`);
              }}
            >
              <Grid sx={{ marginTop: '5%' }} >
                <img src={link}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Linkin
              </Grid>
            </Button>
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: matches?18:35,
              marginTop: "3%",
            }}
          >

            <Button
              sx={{
                borderColor: "#bdc3c7",
                width: 230,
                height: 36,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                color: "#2c3e50",
                fontWeight: "bold",
                justifyContent: "flex-start",
                textTransform: "none",
                padding: 2.6,
                display: data?.fbLink == null ? "none" : "flex",
                borderRadius: 20,
                marginTop: "3%",
                fontSize: "16px",
                fontWeight: 400,
              }}


              onClick={() => handleFbUpdate()}
            >
              <Grid sx={{ marginTop: '6%' }}>
                <img src={fb}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Facebook
              </Grid>
            </Button>



            <Button
              sx={{
                borderColor: "#bdc3c7",
                width: 230,
                height: 36,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                color: "#2c3e50",
                fontWeight: "bold",
                textTransform: "none",
                padding: 2.6,
                justifyContent: "flex-start",
                display: data?.igLink == null ? "none" : "flex",
                borderRadius: 20,
                marginTop: "3%",
                fontSize: "16px",
                fontWeight: 400,
              }}


              onClick={() => handleInstaUpdate()}
            >
              <Grid sx={{ marginTop: '6%' }}>
                <img src={insta}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Instagram
              </Grid>
            </Button>
          </Grid>
          {
                data?.links.map((item)=>{
                  return(
                    <Grid
                    item
                    xs={12}
                    md={11}
                   
                   
                  >
                     {item.title === "GitHub" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Githubgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Telegram" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Telegramgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Discord" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Discordgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "PayPal" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Paypalgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Snapchat" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Snapchatgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Skype" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Skypegif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Reddit" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Redditgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Google drive" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Drivegif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Dropbox" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Dropboxgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Pinterest" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                      >
                        {/* <img src={Pinterestgif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Behance" &&(
                        <IconButton
                        href={`${item.link}`}
                        // onClick={() => handleLinkdinUpdate()}
                        
                      >
                        {/* <img src={Behancegif} style={{width:70,}}/> */}
                      </IconButton>
                       
                     )
                    }
                     {item.title === "Others" &&(
                          <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems:'center',
                            gap: matches?18:35,
                            marginTop: "3%",
                          }}>
                          <Button
                            sx={{
                              borderColor: "#bdc3c7",
                              width: 230,
                              height: 36,
                              backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                              color: "#2c3e50",
                              fontWeight: "bold",
                              textTransform: "none",
                              padding: 2.6,
                              justifyContent: "center",
                              display: data?.phoneNumber == null ? "none" : "flex",
                              borderRadius: 20,
                              marginTop: "3%",
                              fontSize: "16px",
                              fontWeight: 400,
                            }}
              
                            href={`${item.link}`}
                          >
                            <Grid
                              sx={{
                               
                                color: "#000",
                                fontWeight: 400,
                                fontSize: matches ? 14 : 20,
                              }}
                            >
                              {item.customTitle}
                            </Grid>
                          </Button>
              
              
              
                          <Button
                            sx={{
                              borderColor: "#bdc3c7",
                              width: 230,
                              height: 36,
                              backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                              color: "#2c3e50",
                              fontWeight: "bold",
                              textTransform: "none",
                              padding: 2.6,
                              justifyContent: "center",
                              alignItems:'center',
                              display: data?.phoneNumber == null ? "none" : "flex",
                              borderRadius: 20,
                              marginTop: "3%",
                              fontSize: "16px",
                              fontWeight: 400,
                            }}
              
                          >
                          
                            <Grid
                              sx={{
                               
                                color: "#000",
                                fontWeight: 400,
                                fontSize: matches ? 14 : 20,
                              }}
                            >
                              Dynamic Button
                            </Grid>
                          </Button>
                        </Grid>
                     )
                    }
                  </Grid>
                  )
                })
              }


          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider
              style={{
               
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
            height:'auto',
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
            <Grid sx={{ width: "100%", display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%' }}>
              <Slider
                style={{ width: "100%" }}
                {...settings}
              >
                {showSlider()}
              </Slider>
            </Grid>
           

          </Grid>
          <Grid
             item
             xs={12}
             md={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider
              style={{
                height: "1px",
                backgroundColor: "#bdc3c7",
                width:"94%",
                marginTop: "5%",
              }}
            />
          </Grid>

        </Grid>
       
        <div id="work"></div>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display:
              (data?.YoutubeVideoLink1 != "" ||
                data?.YoutubeVideoLink2 != "" ||
                data?.YoutubeVideoLink3 != "" ||
                data?.YoutubeVideoLink4 != "" ||
                data?.YoutubeVideoLink5 != "")
                ? "block"
                : "none",
            color: "#fff",
            backgroundColor: "#fff",
            width: "100%",
            minHeight: { xs: "auto", sm: "auto", md: "auto" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: '4%',
            }}
          >
            <Typography
              textAlign={"center"}
              sx={{ fontSize: "23px", fontWeight: 700,color:'#000' }}
            >
              See Our Videos
        
            </Typography>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink1 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink1} />
              </Grid>
            </Grid>

            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink2 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink2} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink3 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink3} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink4 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink4} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: (data?.YoutubeVideoLink5 == "" || showMore === false) ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink5} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: (data?.YoutubeVideoLink6 == "" || showMore === false) ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink6} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: (data?.YoutubeVideoLink7 == "" || showMore === false) ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink7} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: (data?.YoutubeVideoLink8 == "" || showMore === false) ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink8} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: (data?.YoutubeVideoLink9 == "" || showMore === false) ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink9} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: (data?.YoutubeVideoLink10 == "" || showMore === false) ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height="210px" url={data?.YoutubeVideoLink10} />
              </Grid>
            </Grid>

            <Grid
              item
              xs={11}
              md={11}
              style={{
                margin: 10,
                display: data?.YoutubeVideoLink4 == "" ? "none" : "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => setShowMore(!showMore)}
              >
                <Button variant='contained'>
                  {showMore ? "Show Less" : "Show More"}
                </Button>
              </Grid>
            </Grid>

            <Grid
             item
             xs={11}
             md={11}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider
              style={{
                height: "1px",
                backgroundColor: "#bdc3c7",
                width:"100%",
                marginTop: "6%",
              }}
            />
          </Grid>

          </Grid>
        </Grid>

   <Grid
         item
          xs={12}
          sx={{
            display: "flex",
            justifyContent:'center',
            alignItems:'center',
            padding: 1,
            background:'#fff',
            flexDirection:'column',
            height:'auto'
            }}>
              <Grid sx={{fontSize:'20px',fontWeight:700,marginTop:'4%'}}>SEE OUR REVIEW !</Grid>
           <Grid
          //  className="marquee-container"
             style={{
              border: "1px solid #fff",
              width: "100%",
              maxHeight: 330,
              display: "flex",
              flexDirection: "column",
              borderRadius: 10,
              marginTop:'2%',
              overflowY:'scroll',
              scrollbarWidth:'none',
              // scrollMarginBlockEnd:scroll?""
              scrollSnapAlign:"end"
 }}>
              <Box
              // className="marquee"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          marginTop:2,
          width: matches?400:520,
          height: 82,
         
        },
      }}
    >
      <Paper elevation={3} sx={{padding:1.3}}>
      <Grid sx={{display:'flex'}}>
      <Grid sx={{fontSize:'18px',fontWeight:500}}>Ankit Narwariya</Grid>
      <Grid sx={{marginLeft:'auto'}}>
      <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="#000"
            sx={{color:"#000"}}
          >
            <MoreIcon />
          </IconButton>
      </Grid>
      </Grid>
      <Grid sx={{marginTop:matches?'-4%':'-3%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                    <Grid sx={{color:'#636e72',fontSize:14,color:'#636e72',marginLeft:'2%',marginTop:'.7%'}}>3 min ago</Grid>
             </Grid>
             <Grid sx={{fontSize:10,color:'#2d3436'}}>
             Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
             </Grid>
      </Paper>
      
      <Paper elevation={3} sx={{padding:1.3}}>
      <Grid sx={{display:'flex'}}>
      <Grid sx={{fontSize:'18px',fontWeight:500}}>Ankit Narwariya</Grid>
      <Grid sx={{marginLeft:'auto'}}>
      <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="#000"
            sx={{color:"#000"}}
          >
            <MoreIcon />
          </IconButton>
      </Grid>
      </Grid>
      <Grid sx={{marginTop:matches?'-4%':'-3%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                    <Grid sx={{color:'#636e72',fontSize:14,color:'#636e72',marginLeft:'2%',marginTop:'.7%'}}>3 min ago</Grid>
             </Grid>
             <Grid sx={{fontSize:10,color:'#2d3436'}}>
             Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
             </Grid>
      </Paper>

      <Paper elevation={3} sx={{padding:1.3}}>
      <Grid sx={{display:'flex'}}>
      <Grid sx={{fontSize:'18px',fontWeight:500}}>Ankit Narwariya</Grid>
      <Grid sx={{marginLeft:'auto'}}>
      <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="#000"
            sx={{color:"#000"}}
          >
            <MoreIcon />
          </IconButton>
      </Grid>
      </Grid>
      <Grid sx={{ marginTop:matches?'-4%':'-3%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                    <Grid sx={{color:'#636e72',fontSize:14,color:'#636e72',marginLeft:'2%',marginTop:'.7%'}}>3 min ago</Grid>
             </Grid>
             <Grid sx={{fontSize:10,color:'#2d3436'}}>
             Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
             </Grid>
      </Paper>

       <Paper elevation={3} sx={{padding:1.3}}>
      <Grid sx={{display:'flex'}}>
      <Grid sx={{fontSize:'18px',fontWeight:500}}>Ankit Narwariya</Grid>
      <Grid sx={{marginLeft:'auto'}}>
      <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="#000"
            sx={{color:"#000"}}
          >
            <MoreIcon />
          </IconButton>
      </Grid>
      </Grid>
      <Grid sx={{ marginTop:matches?'-4%':'-3%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                    <Grid sx={{color:'#636e72',fontSize:14,color:'#636e72',marginLeft:'2%',marginTop:'.7%'}}>3 min ago</Grid>
             </Grid>
             <Grid sx={{fontSize:10,color:'#2d3436'}}>
             Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
             </Grid>
      </Paper>

       <Paper elevation={3} sx={{padding:1.3}}>
      <Grid sx={{display:'flex'}}>
      <Grid sx={{fontSize:'18px',fontWeight:500}}>Ankit Narwariya</Grid>
      <Grid sx={{marginLeft:'auto'}}>
      <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="#000"
            sx={{color:"#000"}}
          >
            <MoreIcon />
          </IconButton>
      </Grid>
      </Grid>
      <Grid sx={{ marginTop:matches?'-4%':'-3%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                    <Grid sx={{color:'#636e72',fontSize:14,color:'#636e72',marginLeft:'2%',marginTop:'.7%'}}>3 min ago</Grid>
             </Grid>
             <Grid sx={{fontSize:10,color:'#2d3436'}}>
             Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
             </Grid>
      </Paper>

       <Paper elevation={3} sx={{padding:1.3}}>
      <Grid sx={{display:'flex'}}>
      <Grid sx={{fontSize:'18px',fontWeight:500}}>Ankit Narwariya</Grid>
      <Grid sx={{marginLeft:'auto'}}>
      <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="#000"
            sx={{color:"#000"}}
          >
            <MoreIcon />
          </IconButton>
      </Grid>
      </Grid>
      <Grid sx={{ marginTop:matches?'-4%':'-3%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                    <Grid sx={{color:'#636e72',fontSize:14,color:'#636e72',marginLeft:'2%',marginTop:'.7%'}}>3 min ago</Grid>
             </Grid>
             <Grid sx={{fontSize:10,color:'#2d3436'}}>
             Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
             </Grid>
      </Paper>

       <Paper elevation={3} sx={{padding:1.3}}>
      <Grid sx={{display:'flex'}}>
      <Grid sx={{fontSize:'18px',fontWeight:500}}>Ankit Narwariya</Grid>
      <Grid sx={{marginLeft:'auto'}}>
      <IconButton
            size="small"
            aria-label="display more actions"
            edge="end"
            color="#000"
            sx={{color:"#000"}}
          >
            <MoreIcon />
          </IconButton>
      </Grid>
      </Grid>
      <Grid sx={{marginTop:matches?'-4%':'-3%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                    <Grid sx={{color:'#636e72',fontSize:14,color:'#636e72',marginLeft:'2%',marginTop:'.7%'}}>3 min ago</Grid>
             </Grid>
             <Grid sx={{fontSize:10,color:'#2d3436'}}>
             Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
             </Grid>
      </Paper> 
    </Box>
           </Grid>
        </Grid>


        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            backgroundColor: "#fff",
            height: 'auto',
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
                  borderColor: "#000",
                  width: matches ? "94%" : "100%",
                  background:'#000',
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 5,
                  borderRadius: 8,
                  marginTop: "1%",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
                variant="outlined"
              >
                Write Your Review
              </Button>
            </React.Fragment>
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
              marginLeft: matches ? "66%" : "20%",
              position: "fixed",
              bottom: matches ? 0 : 0,
              width: matches ? "90px" : "90px",
              height: matches ? "90px" : "90px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "95px ",
              marginBottom: "4%",
              cursor: "pointer",
              borderColor: "#000",
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
                cursor: "pointer",
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
              }}
            >
              <Grid
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#000",
                }}
              >
                Create<br></br> Your
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {enquiryDialog()}
      {EnquiryFormDialog()}
      {loginBussiness()}
      {loginSignup()}
      {RatingDialog()}
     {SeeMoreDialog()}
    </Grid>
  );
}
