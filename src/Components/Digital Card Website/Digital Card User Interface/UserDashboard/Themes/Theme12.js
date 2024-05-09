import HelpIcon from "@mui/icons-material/Help";
import {
  Box,
  Button,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import { IoIosCreate } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import call from "../Themes/ThemeAssets/call.png";
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
import { FaShopify } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { postData, serverURL } from "../../../../Services/NodeServices";
import bannerone from "../Themes/ThemeAssets/banner1.png";
import banner2 from "../Themes/ThemeAssets/banner2.png";

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

export default function Theme12({ data, products, gallery, ecommerce }) {
  const matches = useMediaQuery("(max-width:600px)");
  // const [homePage, setHomePage] = useState(true)
  const [about, setAbout] = useState(false);
  const [href, setHref] = useState("");
  const [smsHref, setSmsHref] = useState("");
  const [name, setName] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [query, setQuery] = React.useState("");

  console.log(data);

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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [openDrawer, setOpenDrawer] = useState(false);

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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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

  const enquiryDialog = () => {
    return (
      <Dialog
        sx={{ borderRadius: 10 }}
        open={openB}
        onClose={handleCloseButton}
      >
        <DialogTitle style={{ background: "#ecf0f1" }}>ENQUIRY NOW</DialogTitle>
        <DialogContent style={{ background: "#ecf0f1" }}>
          <Stack>
            <TextField
              required
              margin="dense"
              label="Enter Number"
              style={{ width: matches ? "60vw" : "20vw" }}
              variant="standard"
              onChange={(e) => handleMessage(e)}
            />
            <Stack direction="row" spacing={2}>
              <Button sx={{ color: "green" }} href={href}>
                Send on WhatsApp
              </Button>
              <Button sx={{ color: "blue" }} href={smsHref}>
                Send on Sms
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
        <DialogTitle style={{ background: "#ecf0f1" }}>Connect</DialogTitle>
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
              <Grid
                style={{ marginLeft: "4%" }}
                onClick={() => handleSubmit(data?.customerId)}
              >
                Submit
              </Grid>
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ background: "#ecf0f1" }}>
          <Button onClick={handleCloseContact}>
            <RxCrossCircled style={{ fontSize: "24px", color: "#000" }} />
          </Button>
        </DialogActions>
      </Dialog>
    );
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
      handleClick();
    } else if (name == "Print") {
      handleClickOpenContact();
    } else if (name == "Copy") {
      handleSave();
    } else {
      handleClickOpenButton();
    }
  };

  const [openLogin, setOpenLogin] = useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  React.useEffect(() => {
    handleClickOpenLogin();
  }, []);
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

  return (
    <Grid
      style={{
        backgroundColor: "wheat",
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
                  src={menubar}
                  onClick={toggleDrawer("left", true)}
                  sx={{ color: "#fff" }}
                ></img>
                <Drawer
                  anchor={"left"}
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                  sx={{ backgroundColor: "black" }}
                >
                  {list("left")}
                </Drawer>
              </Grid>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #d2dae2",
                width: 100,
                height: 30,
                backgroundColor: "#4b4b4b",
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
            </Grid>
          </Grid>
        </Grid>

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
              }}
            >
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

        <Dialog
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
            {"Login to Find the Bussiness Profile"}
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

        <Dialog
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
                display: data?.phoneNumber == null ? "none" : "flex",
                alignItems: "center",
                marginTop: "3%",
                justifyContent: "center",
                padding: 0.2,
                cursor: "pointer",
              }}
              onClick={() => {
                window.open(`tel:${data?.phoneNumber}`);
              }}
            >
              <Grid sx={{ marginTop: "2%" }}>
                <img src={call} />
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
                cursor: "pointer",
              }}
              onClick={() => handleWhatsappUpdate()}
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
                display: data?.Email == "" ? "none" : "flex",
                alignItems: "center",
                padding: 0.3,
                marginTop: "3%",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open(
                  `mailto:${data?.Email}?body=Query%20About%20Business`
                );
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
                display: data?.LinkdnLink == "" ? "none" : "flex",
                alignItems: "center",

                marginTop: "3%",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open(`https://www.linkedin.com/in/${data?.LinkdnLink}`);
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
                Linkedin
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
                display: data?.fbLink == "" ? "none" : "flex",
                alignItems: "center",
                padding: 0.8,
                marginTop: "3%",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => handleFbUpdate()}
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
                display: data?.igLink == "" ? "none" : "flex",
                alignItems: "center",
                marginTop: "3%",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => handleInstaUpdate()}
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
              marginTop: "3%",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                width: 230,
                backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                borderRadius: 25,
                display: data?.fbLink == "" ? "none" : "flex",
                alignItems: "center",
                padding: 0.8,
                marginTop: "3%",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => handleFbUpdate()}
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
                display: data?.igLink == "" ? "none" : "flex",
                alignItems: "center",
                marginTop: "3%",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => handleInstaUpdate()}
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

          <Grid
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
          <div id="work"></div>
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
              <Grid sx={{ fontsize: "10px", fontWeight: 500 }}>
                Enquiry Now
              </Grid>
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
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
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
                  style={{
                    backgroundImage: "radial-gradient(#ecf0f1, #ecf0f1)",
                  }}
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
                <DialogActions style={{ background: "#ecf0f1" }}>
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
    </Grid>
  );
}
