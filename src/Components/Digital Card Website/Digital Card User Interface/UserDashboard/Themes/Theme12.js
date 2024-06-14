import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ShareIcon from "@mui/icons-material/Share";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import {
  Box,
  Button,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,TextField,Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Rating from "@mui/material/Rating";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { enqueueSnackbar } from "notistack";
import * as React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Swal from "sweetalert2";
import { postData, serverURL } from "../../../../Services/NodeServices";
import snapchatnew from "../Themes/ThemeAssets/snapchatnew.png";

import behance from '../../../Digital Card Assets/behance.png';
import logo1 from '../../../Digital Card Assets/dchlogo.png';
import discord from '../../../Digital Card Assets/discord.png';
import gdrive from '../../../Digital Card Assets/drive.png';
import dropbox from '../../../Digital Card Assets/dropbox.png';
import github from '../../../Digital Card Assets/github.png';
import paypal from '../../../Digital Card Assets/paypal.png';
import pinterest from '../../../Digital Card Assets/pinterest.png';
import reddit from '../../../Digital Card Assets/reddit.png';
import skype from '../../../Digital Card Assets/skype.png';
import telegram from '../../../Digital Card Assets/telegram.png';

import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import OtpGenerator from "../../Invite/OtpGenerator";
import call from "../Themes/ThemeAssets/calls.png";
import digital from "../Themes/ThemeAssets/digitallogo.png";
import eye from "../Themes/ThemeAssets/eye.png";
import fb from "../Themes/ThemeAssets/fbs.png";
import gmail from "../Themes/ThemeAssets/gmails.png";
import fram1 from "../Themes/ThemeAssets/frame1.png";
import fram2 from "../Themes/ThemeAssets/frame2.png";
import fram3 from "../Themes/ThemeAssets/frame3.png";
import insta from "../Themes/ThemeAssets/instas.png";
import link from "../Themes/ThemeAssets/linkins.png";
import moreicons from "../Themes/ThemeAssets/moreicon.png";
import msg from "../Themes/ThemeAssets/msg.webp";
import whatapp from "../Themes/ThemeAssets/whatapps.png";
import WhatsApp1 from "../Themes/ThemeAssets/whatsapp1.png";
import SideBar from "../UserComponents/SideBar";

import indiamart from "../Themes/ThemeAssets/indiamart.png"
import justdial from "../Themes/ThemeAssets/indiamart.png"
import amazon from "../Themes/ThemeAssets/indiamart.png"
import pdf from "../Themes/ThemeAssets/indiamart.png"
import location from "../Themes/ThemeAssets/indiamart.png"
import Flipkard from "../Themes/ThemeAssets/flipcard.webp"
import meesho from "../Themes/ThemeAssets/meesho.png"


const actions = [
  { icon: <SimCardDownloadIcon style={{ fontSize: '22px' }} />, name: "Copy" },
  { icon: <SendToMobileIcon style={{ fontSize: '20px' }} />, name: "Shareno" },
  { icon: <PriorityHighIcon style={{ transform:'rotate(180deg)'}}/>, name: "Enquery" },
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
  const navigate = useNavigate()
  const matches = useMediaQuery("(max-width:600px)");
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [href, setHref] = useState("");
  const [smsHref, setSmsHref] = useState("");
  const [name, setName] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [review, setReview] = React.useState("");
  const [reviewsData, setReviewsData] = React.useState([]);
  const [rating, setRating] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const [openB, setOpenB] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [otp, setOtp] = React.useState()
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  // All handleClickFunctions


  const handleHideBox = () => {
    setIsVisible(false);
  };

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
    if(data?.enquiry=='true'){
      handleClickOpenLogin();
    }
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
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
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
    setWork(!work)
    setOpenDrawer(!openDrawer);
    setTimeout(() => {
    if (about === false) {
      var section = document.getElementById("work");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 100);
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

  const [scroll, setScroll] = useState(false)

  setTimeout(() => {
    setScroll(!scroll)
  }, 5000)

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

  const fetchAllReviews = async (customerId) => {
    var formData = new FormData
    formData.append("cardId", customerId)
    const response = await postData('enquiry/displaycardreview', formData, true)
    setReviewsData(response.data)
  }

  React.useEffect(() => {
    if (data != null) {
      fetchAllReviews(data?.customerId)
    }
  }, [])


  const handleReviewSubmit = async (customerId) => {
    let formData = new FormData();
    formData.append("cardId", customerId);
    formData.append("name", name);
    formData.append("review", review);
    formData.append("rating", rating);
    formData.append("submitAt", new Date());
    
    let response = await postData("enquiry/addcardreview", formData, true);

    if (response?.status) {
      setName("");
      setReview("");
      setRating(0);
      enqueueSnackbar("Review Submitted Successfully");
      setOpen(false);
      fetchAllReviews(customerId)
    }
  };

  // Dialog 

  const RatingDialog = () => {
    return (<Dialog
      PaperProps={{
        style: {
          position: "fixed",
          bottom: -32,
          width: "100%",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          // Dialog ko page ke bottom me set karein
        },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', fontSize: '20px', fontWeight: '700', marginTop: '5%' }}>
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
        <Grid sx={{ background: '#fff', padding: 2, maxHeight: 500 }}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{

                    marginTop: "1%",
                    background: "#fff",
                    backgroundColor: '#fff'
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
                  value={rating}
                  onChange={(e, val) => setRating(val)}
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
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  style={{
                    marginTop: "1%",
                    background: "#fff",
                    borderColor: "#000",
                    backgroundColor: '#fff'
                  }}
                />
              </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                onClick={() => handleReviewSubmit(data?.customerId)}
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
          height: '100%',
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
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', fontSize: '20px', fontWeight: '700', marginTop: '5%' }}>
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
        <Grid sx={{ background: '#fff', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1%', flexDirection: 'column' }}><img src={fram1}></img>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Grid sx={{ fontSize: '22px', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                LOGO DESIGN
              </Grid>
              <Grid sx={{ fontSize: '15px', fontWeight: 400, marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                Sorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit adipiscing.
              </Grid>
            </Grid>
          </Grid>



          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '6%', flexDirection: 'column' }}><img src={fram2}></img>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Grid sx={{ fontSize: '22px', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                LOGO DESIGN
              </Grid>
              <Grid sx={{ fontSize: '15px', fontWeight: 400, marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                Sorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit adipiscing.
              </Grid>
            </Grid>
          </Grid>



          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '6%', flexDirection: 'column' }}><img src={fram3}></img>
            <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Grid sx={{ fontSize: '22px', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                LOGO DESIGN
              </Grid>
              <Grid sx={{ fontSize: '15px', fontWeight: 400, marginTop: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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

  const handleLogin = async () => {

    if (phoneNumber !== '') {
      var formData = new FormData()
      formData.append('phone', phoneNumber)
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

  const handleOtp = (value) => {
    if (value.length == 4) {
      if (otp == value) {
        handleLogin()
      } else {
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

    if (phoneNumber != '') {
      var otpval = OtpGenerator()

      setOtp(otpval)

      const apiUrl = `https://soft7.in/api/send?number=91${phoneNumber}&type=text&message=Your Otp For Digital Card Hub - ${otpval}&instance_id=664B22EF6F9A8&access_token=6642f3cf318c6`;
      const response = await postData('otp/api', { url: apiUrl })
      // https://soft7.in/api/send?number=917225051627&type=text&message=test+message&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41
    } else {
      Swal.fire({
        text: "Enter the Number First",
        timer: 1000
      })
    }


  }


  const loginSignup = () => {
    return (<Dialog
      PaperProps={{
        style: {
          position: "fixed",
          bottom: -35,
          width: "100%",height:'40%',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
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
            Login / SignUp
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
              background: "#dfe6e9",
              borderRadius: 6,
              width: '100%'
            }}
          >
            <TextField
              fullWidth
              id="input-with-icon-textfield"
              placeholder="Registered Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    +91
                  </InputAdornment>
                ),
                endAdornment: (
                  <IconButton type="button" aria-label="search" onClick={handleLogin}>
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
                     Login
                    </div>
                  </IconButton>
                )
              }}
            />
          </div>
        </div>

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6%",
          }}
        >
          <div
            style={{
              background: "#dfe6e9",
              borderRadius: 6,
              width: '100%'
            }}
          >
            <TextField label="One Time Password(OTP)" fullWidth onChange={(event) => handleOtp(event.target.value)} inputProps={{ maxLength: 4 }} />
          </div>
        </div> */}
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
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
       
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
      PaperProps={{
        style: {
          width: "86%",
         borderRadius:15
          // Dialog ko page ke bottom me set karein
        },
      }}
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
                    justifyContent: "center"
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
      PaperProps={{
        style: {
          width: "86%",
         borderRadius:15
          // Dialog ko page ke bottom me set karein
        },
      }}
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
                width: "36%",
                background: "#000",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 400,
                textTransform: "none",
                borderRadius: 6,
                display: "flex",
                marginTop: "5%",
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


  var settings = {
    infinite: true,
    speed: 2000,
    dots: false,
    slidesToShow: 3,
    autoplay: "true",
    autospeed: 1,
    slidesToScroll: 3,
    arrows: false,
    vertical: true,
    autoplaySpeed: 7000,
  };

  var settingproduct = {
    infinite: true,
    speed: 1000,
    dots: false,
    slidesToShow: 1,
    autoplay: "true",
    autospeed: 1,
    slidesToScroll: 1,
    arrows:false
   
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


  // var datas=[{id:0,picture:[bannerone],productname:'LOGO DESIGN WORK',price:2000.00,offerprice:1000.00},
  // {id:0,picture:[banner2],productname:'FULL STACK DEVELOPER',price:3300.00,offerprice:2200.00},
  // {id:0,picture:[bannerone],productname:'GRAPHIC DESIGNER LOGO',price:2200.00,offerprice:1000.00}]

  const showSlider = () => {
    return ecommerce?.map((item) => {
      if (item.productimg != '') {
        return (
          <Grid sx={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
         <Grid sx={{ display: "flex", justifyContent: "center", alignItems: 'center',marginLeft: '2%'}}>
          <Grid sx={{width:'100%',height:'100%'}}>
          <img src={`${serverURL}/images/${item.productimg}`}  style={{
        width: '98%',
        height:matches?300:360,
        borderRadius:8,
        }} />
          </Grid>

         </Grid>
     
            
            {/* <Grid sx={{
    position: 'relative',
    paddingBottom: '60%', // 1:1 aspect ratio
    overflow: 'hidden',
    marginLeft: '2%',}}>
  <img src={`${serverURL}/images/${item.productimg}`}  style={{
    position: 'absolute',
    width: '92%',
    height: '100%',
    objectFit: 'cover',
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
      borderRadius:8,
        }} />
            </Grid> */}
            <Grid sx={{ display: 'flex', flexDirection: 'column', marginLeft: '2%',marginTop:'2.5%' }}>
              <Grid sx={{ fontSize: '22px', fontWeight: 700 }}>
                {item.productname}
              </Grid>
              <Grid sx={{ fontSize: '15px', fontWeight: 400, marginTop: '1%' }}>
                {item.productdescription}
              </Grid>
              <Grid sx={{ display: 'flex',marginTop:'2%'}}>
                <Button
                  style={{
                    borderColor: "#000",
                    width: 130,
                    height: 40,
                    background: "#000",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "none",
                    borderRadius: 8,
                    display: item.show == "true" ? "block" : "none",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() =>
                    window.open(
                      `https://wa.me/+91${data?.WhatsappNo}?text=I Want To Buy Your ${item.productname}`
                    )
            }
            >
                  Enquiry Now
                </Button>
                  <Grid sx={{ display: 'flex', flexDirection: 'column',marginLeft:'4%' }}>
                    <Grid sx={{ fontSize: '20px', fontWeight: 600, color: '#FF0000'}}>{item.offerprice?<>₹ </>:<></> } {item.offerprice}  </Grid><Grid sx={{ fontSize: '12px', fontWeight: 500, color: '#4A4A4A'}}>{item.offerprice?<>(Inc. all taxes)</>:<></> }</Grid>
                </Grid>
              </Grid>
            </Grid>

            
          </Grid>)
      }
    })
  }

  const getDuration = (submitAtString) => {
    const submitAt = new Date(submitAtString);
    const currentTime = new Date();
    const durationInMilliseconds = currentTime - submitAt;
    const durationInSeconds = Math.floor(durationInMilliseconds / 1000);

    if (durationInSeconds < 60) {
      return `${durationInSeconds} second${durationInSeconds !== 1 ? 's' : ''} ago`;
    } else if (durationInSeconds < 3600) {
      const minutes = Math.floor(durationInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (durationInSeconds < 86400) {
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(durationInSeconds / 86400);
      const hours = Math.floor((durationInSeconds % 86400) / 3600);
      const minutes = Math.floor(((durationInSeconds % 86400) % 3600) / 60);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  };

  const Reviews = () => {
    return reviewsData?.map((item) => {
      return (
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: .5,
            marginTop: 1,
            maxHeight: 82,
            overflowY:'scroll',
            scrollbarWidth:'none',

          },
        }}
      >
        <Paper elevation={4} sx={{ padding: 1.3 }}>
          <Grid sx={{ display: 'flex' }}>
            <Grid sx={{ fontSize: '18px', fontWeight: 500 }}>{item?.name}</Grid>
          </Grid>
          <Grid sx={{ display: 'flex' }}>
            <Grid>
              <Rating
                size="small"
                color="green"
                name="simple-controlled"
                value={item.rating}
              />
            </Grid>
            <Grid sx={{ color: '#636e72', fontSize: 14, color: '#636e72', marginLeft: '2%', marginTop: '.7%' }}>{getDuration(item?.submitAt)}</Grid>
          </Grid>
          <Grid sx={{ fontSize: 10, color: '#2d3436' }}>
            {item.review}
          </Grid>
        </Paper>
        </Box>
      )
    })
  }

  return (
    <Grid
      style={{
        backgroundColor: "#f5f6fa",
        height: "100%",
        width: "99.9%",
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
              overflow: "hidden",
              boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)', // Ensures the video doesn't overflow the Grid
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
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
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
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
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
              <SideBar />
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
              marginTop: '-3%'
            }}
          >
            <Grid
              style={{
                marginTop: matches ? "8%" : "4%",
                padding: 14,
                display: "flex",
              }}
            >
           <Button 
                onClick={handleAbout}     
                  style={{
                    borderColor: "#000",
                    width: 110,
                    height: 32,
                    backgroundImage: "radial-gradient(#353b48, #000)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 400,
                    textTransform: "none",
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:'row',
                    marginLeft: "auto",
                    marginTop: matches ? '-8%' : '-4%',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                  }}
                >              
                  Work
                  {openDrawer ? (
                  <ExpandLess fontSize="medium" />
                ) : (
                  <ExpandMore fontSize="medium" />
                )}
                </Button>
               
            </Grid>

            <Grid
              style={{
                backgroundImage: data?.companylogo
                  ? `url('${serverURL}/images/${data?.companylogo}')`
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
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                imageRendering: '-webkit-optimize-contrast', // Chrome, Safari
                WebkitImageRendering: 'optimize-contrast', // Ensuring cross-browser compatibility
                imageRendering: 'crisp-edges', // Firefox
              
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              }}
            ></Grid>
          </Grid>
          <Grid style={{ background: "#fff" }}>
          <Grid style={{ display: "flex", flexDirection: "row" }}>
                <Box
                  sx={{
                    height: 50,
                    transform: "translateZ(100px)",
                    flexGrow: 1,
                    position: "relative",
                    marginTop: matches?"-8.7%":'-5%',
                  }}
                >
                  <SpeedDial
                   ariaLabel="SpeedDial basic example"
                   sx={{'& .MuiSpeedDial-fab': { 
                    boxShadow: 'none', // Remove the box shadow
                    backgroundColor: '#fff' // Set background color to #fff
                  },
                  '& .MuiSpeedDial-fab:hover': {
                    boxShadow: 'none', 
                    backgroundColor: '#fff' // Ensure background color remains #fff on hover
                  },
                  '&.MuiSpeedDial-open .MuiSpeedDial-fab': {
                    boxShadow: 'none', 
                    backgroundColor: '#fff' // Ensure background color remains #fff when open/clicked
                  },position: "absolute", right: 6, bottom: 1 }}
                    direction="left"
                    icon={
                     <img src={moreicons} width={40}></img>
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
            <Grid
              style={{ marginLeft: matches ? "4%" : "6%", marginTop:matches?"-2%":'3%' }}
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

            </Grid>
            <Grid
              style={{ marginLeft: matches ? "4%" : "6%", marginTop: "3%" }}
            >
              <Divider
                style={{
                  height: "1px",
                  backgroundColor: "#AAAAAA",
                  width: matches ? "60%" : "35%",
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
                minHeight: "auto",
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
                      fontFamily:'poppins',
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
          <Grid container spacing={3}>
            <Grid
              item
              xs={6}
              md={6}
            >
              <Button
                sx={{
                  borderColor: "#bdc3c7",
                  border: '#bdc3c7',
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
                fullWidth
                onClick={() => {
                  window.open(`tel:${data?.phoneNumber}`);
                }}
              >
                <Grid sx={{ marginTop: '3%', }}>
                  <img src={call} width={25}/>
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 1.9,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                  }}
                >
                  Call
                </Grid>
              </Button>

            </Grid>
            <Grid
              item
              xs={6}
               md={6}
            >
              <Button
                sx={{
                  borderColor: "#bdc3c7",
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
                fullWidth
                onClick={() => handleWhatsappUpdate()}
              >
                <Grid sx={{ marginTop: '5%' }} >
                  <img src={whatapp} width={25}></img>
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 1.7,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                  }}
                >
                  WhatsApp
                </Grid>
              </Button>
            </Grid>

            <Grid
              item
              xs={6}
              md={6}
            >
              <Button
                sx={{
                  borderColor: "#bdc3c7",
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
                fullWidth
                onClick={() => {
                  window.open(
                    `mailto:${data?.Email}?body=Query%20About%20Business`
                  );
                }}
              >
                <Grid sx={{ marginTop: '5%', }}>
                  <img src={gmail}  width={25}></img>
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 1.9,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                  }}
                >
                  Email
                </Grid>
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
            >
              <Button
                sx={{
                  borderColor: "#bdc3c7",
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
                fullWidth
                onClick={() => {
                  window.open(`https://www.linkedin.com/in/${data?.LinkdnLink}`);
                }}
              >
                <Grid sx={{ marginTop: '5%' }} >
                  <img src={link} width={25}></img>
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 1.9,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                  }}
                >
                  LinkedIn
                </Grid>
              </Button>
            </Grid>

            <Grid
              item
              xs={6}
              md={6}
            >

              <Button
                sx={{
                  borderColor: "#bdc3c7",
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
                fullWidth
                onClick={() => handleFbUpdate()}
              >
                <Grid sx={{ marginTop: '6%' }}>
                  <img src={fb} width={25}></img>
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 1.9,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                  }}
                >
                  Facebook
                </Grid>
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
            >
              <Button
                sx={{
                  borderColor: "#bdc3c7",
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
                fullWidth
              >
                <Grid sx={{ marginTop: '6%' }}>
                  <img src={insta} width={25}></img>
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 1.9,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                  }}
                >
                  Instagram
                </Grid>
              </Button>
            </Grid>

            {
              data?.links.map((item) => {
                return (
                  <Grid
                    item
                    xs={6}
                    md={6}>
                    {item.title === "GitHub" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                        fullWidth
                        href={`https://github.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={github} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 500,
                            fontWeight: 400,
                            fontSize: matches ? "15px" : 20,
                            fontFamily:'poppins'
                          }}
                        >
                          GitHub
                        </Grid>
                      </Button>
                      )
                    }
                    {item.title === "Telegram" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://t.me/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={telegram} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                            fontSize: matches ? "15px" : 20,
                            fontFamily:'poppins'
                          }}
                        >
                          Telegram
                        </Grid>
                      </Button>
                    )
                    }
                    {item.title === "Discord" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://discord.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={discord} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Discord
                        </Grid>
                      </Button>

                    )
                    }
                    {item.title === "PayPal" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.paypal.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={paypal} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                            fontSize: matches ? "15px" : 20,
                            fontFamily:'poppins'
                          }}
                        >
                          PayPal
                        </Grid>
                      </Button>

                    )
                    }
                    {item.title === "Snapchat" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.snapchat.com/add/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%',marginLeft:'-2%' }}>
                          <img src={snapchatnew} width={38}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: .7,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Snapchat
                        </Grid>
                      </Button>

                    )
                    }
                    {item.title === "Skype" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.skype.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={skype} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Skype
                        </Grid>
                      </Button>

                    )
                    }
                    {item.title === "Reddit" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.reddit.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={reddit} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                            fontSize: matches ? "15px" : 20,
                            fontFamily:'poppins'
                          }}
                        >
                          Reddit
                        </Grid>
                      </Button>

                    )
                    }
                    {item.title === "Google drive" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://drive.google.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={gdrive} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          G Drive
                        </Grid>
                      </Button>

                    )
                    }
                    {item.title === "Dropbox" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.dropbox.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={dropbox} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Dropbox
                        </Grid>
                      </Button>

                    )
                    }
                    {item.title === "Pinterest" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://in.pinterest.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={pinterest} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Pinterest
                        </Grid>
                      </Button>

                    )
                    }



                    {item.title === "Behance" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.behance.net/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={behance} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Behance
                        </Grid>
                      </Button>

                    )
                    }


                 {item.title === "Indiamart" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.indiamart.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={indiamart} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          IndiaMart
                        </Grid>
                      </Button>
                    )
                    }
                     {item.title === "Justdial" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.justdial.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={justdial} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Justdial
                        </Grid>
                      </Button>

                    )
                    }
                     {item.title === "Amazon" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.amazon.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={amazon} width={100}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Amazon
                        </Grid>
                      </Button>

                    )
                    }

                     {item.title === "Flipkard" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.flipkart.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={Flipkard} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Flipkard
                        </Grid>
                      </Button>
                    )
                    }

                     {item.title === "Meesho" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`https://www.meesho.com/${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={meesho} width={25}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Meesho
                        </Grid>
                      </Button>
                    )
                    }

                     {item.title === "PDF" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={pdf} width={100}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          PDF
                        </Grid>
                      </Button>
                    )
                    }
                     {item.title === "Location" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
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
                          fontSize: "15px",
                          fontWeight: 500,
                          fontFamily:'poppins'
                        }}
                        fullWidth
                        href={`${item.link}`}
                      >
                        <Grid sx={{ marginTop: '6%' }}>
                          <img src={location} width={100}></img>
                        </Grid>
                        <Grid
                          sx={{
                            marginLeft: 1.9,
                            color: "#000",
                            fontWeight: 400,
                    fontSize: matches ? "15px" : 20,
                    fontFamily:'poppins'
                          }}
                        >
                          Location
                        </Grid>
                      </Button>
                    )
                    }


                    {item.title === "Others" && (
                      <Button
                        sx={{
                          borderColor: "#bdc3c7",
                          border: '#bdc3c7',
                          height: 36,
                          backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                          color: "#2c3e50",
                          fontWeight: "bold",
                          textTransform: "none",
                          padding: 2.6,
                          display: data?.phoneNumber == null ? "none" : "flex",
                          justifyContent: "center",
                          borderRadius: 20,
                          marginTop: "3%",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                        fullWidth
                        href={`${item.link}`}
                      >
                        <Grid
                          sx={{
                            color: "#000",
                            fontWeight: 400,
                            fontSize: matches ? "15px" : 20,
                            fontFamily:'poppins'
                          }}
                        >
                          {item.customTitle}
                        </Grid>
                      </Button>
                    )
                    }
                  </Grid>
                )
              })
            }
          </Grid>


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
      
        {work ? (
          <>
            {" "}
           
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
         <div id="work"></div>   
          <Grid
            style={{
              marginTop: "3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid style={{ fontSize: "22px", fontWeight: 700 }}>
              Work / Products
            </Grid>
            <Grid sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
              <Slider
                style={{ width: "95%" }}
                {...settingproduct}
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
                width: "94%",
                marginTop: "10%",
              }}
            />
          </Grid>
        </Grid>
      



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
              display: (data?.YoutubeVideoLink1 != "" ||
                data?.YoutubeVideoLink2 != "" ||
                data?.YoutubeVideoLink3 != "" ||
                data?.YoutubeVideoLink4 != "") ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
              marginTop: '4%',
            }}
          >
            <Typography
              textAlign={"center"}
              sx={{ fontSize: "23px", fontWeight: 700, color: '#000' }}
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
                onClick={() => setShowMore(!showMore)}>
              <Button           
                  style={{
                    borderColor: "#000",
                    width: 130,
                    height: 40,
                    background: "#000",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "none",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection:'row'
                  }}
                >
                   {showMore ? "Show Less" : "Show More"}
                   {showMore ? (
                  <ExpandLess fontSize="medium" />
                ) : (
                  <ExpandMore fontSize="medium" />
                )}
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
                  width: "100%",
                  marginTop: "2%",
                }}
              />
            </Grid>

          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: reviewsData?.length > 0 ? "flex" : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 1,
            background: '#fff',
            flexDirection: 'column',
            height: 'auto'
          }}>
          <Grid sx={{ fontSize: '20px', fontWeight: 700, marginTop: '4%' }}>SEE OUR REVIEW !</Grid>
          <Grid
            style={{
              border: "1px solid #fff",
              display: "flex",
              flexDirection: "column",
              borderRadius: 10,
              marginTop: '5%',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
              scrollSnapAlign: "end"
            }}>
             <Slider {...settings}>
             {Reviews()}    
             </Slider>
           
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
                  background: '#000',
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
            height: 50,
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
              width: matches ? "82px" : "82px",
              height: matches ? "82px" : "82px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "95px ",
              marginBottom: "4%",
              cursor: "pointer",
              borderColor: "#000",
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Grid
              sx={{
                // background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
                width: matches ? "70px" : "70px",
                height: matches ? "70px" : "70px",
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
