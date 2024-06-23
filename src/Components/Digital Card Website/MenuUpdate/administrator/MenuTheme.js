import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import RemoveIcon from "@mui/icons-material/Remove";
import Search from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import StarIcon from "@mui/icons-material/Star";
import { FormGroup, Grid, IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import Rating from "@mui/material/Rating";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { enqueueSnackbar } from "notistack";
import * as React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { postData } from "../../../Services/NodeServices";
import SideBar from "../../Digital Card User Interface/UserDashboard/UserComponents/SideBar";
import arrow from "../assets/arrow.png";
import call from "../assets/call.png";
import crosses from "../assets/crosses.png";
import digital from "../assets/digitallogo.png";
import fb from "../assets/fb.png";
import food from "../assets/food.png";
import insta from "../assets/insta.png";
import link from "../assets/link.png";
import gmail from "../assets/mail.png";
import menulogo from "../assets/menulogo.png";
import menuveg from "../assets/menuveg.png";
import moreicon from "../assets/moreicon.png";
import shopping from "../assets/shopping.png";
import vegmain from "../assets/vegmain.png";
import vegone from "../assets/vegone.png";
import vegss from "../assets/vegss.png";
import { default as whatapp } from "../assets/whatapp.png";

const actions = [
  { icon: <SimCardDownloadIcon style={{ fontSize: "22px" }} />, name: "Copy" },
  {
    icon: <PriorityHighIcon style={{ transform: "rotate(180deg)" }} />,
    name: "Enquery",
  },
  { icon: <ShareIcon />, name: "Share" },
];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 92,
  height: 34,
  padding: 7,
  marginLeft: "auto",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    marginLeft: "auto",
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(54px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${vegss})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#44bd32" : "#44bd32",
      },
    },
  },

  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    width: 32,
    height: 32,
    marginLeft: "auto",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      marginLeft: "auto",
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${vegss})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const MaterialUISwitch2 = styled(Switch)(({ theme }) => ({
  width: 92,
  height: 34,
  padding: 7,
  marginLeft: "auto",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    marginLeft: "auto",
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(54px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${vegone})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#FF0000" : "#FF0000",
      },
    },
  },

  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#fff",
    width: 32,
    height: 32,
    marginLeft: "auto",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      marginLeft: "auto",
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${vegone})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export default function MenuTheme({ data }) {
  const { menuId } = useParams()
  const [checked, setChecked] = React.useState(true);
  const [reviewsData, setReviewsData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [review, setReview] = React.useState("");
  const [menu, setMenu] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [customer2, setCustomer2] = useState(false);
  const [menuList, setMenuList] = useState(false);
  const [about, setAbout] = useState(false);
  const [rating, setRating] = React.useState(0);
  const [name, setName] = React.useState("");
  const [showMore, setShowMore] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [restaurantDetails, setRestaurantDetails] = useState(null)
  const [add, setAdd] = useState(false);

  const [count, setCount] = useState(0);


  const fetchData = async () => {
    var formData = new FormData
    formData.append('menuId', menuId)
    const result = await postData("index/getDataById", formData, true);
    // setData(result.data); // Update the data state with the fetched data
    // console.log("result", result.data);
  };

  const fetchRestaurantData = async () => {
    var formData = new FormData
    formData.append("menuId", menuId)
    const response = await postData('index/getRestaurantDetails', formData, true)

      if(response.status==true){
        setRestaurantDetails(response?.data)
    }    
  }

  React.useEffect(() => {
    fetchRestaurantData()
    fetchData(); // Fetch data when the component mounts
  }, []);

  const handleClickAdd = () => {
    setAdd(true);
    var c = count + 1;
    setCount(c);
  };

  const handleMinus = () => {
    var c = count - 1;
    if (c >= 0) {
      setCount(c);
    }
  };

  const matches = useMediaQuery("(max-width:600px)");
  var navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/menu2");
  };

  const handleClickBill = () => {
    navigate("/menu2");
  };

  const handleClickMenu = () => {
    setMenuList(true);
  };
  const handleCloseMenu = () => {
    setMenuList(false);
  };

  // const handleAdd = () => {
  //   setAdd(true);
  // };

  const handleCloseCategory = () => {
    setCategory(false);
  };

  const handleCloseCustomer = () => {
    setCustomer(false);
  };
  const handleClickCustomer = () => {
    setCustomer(true);
  };

  const handleCloseCustomer2 = () => {
    setCustomer2(false);
  };
  const handleClickCustomer2 = () => {
    setCustomer2(true);
  };

  React.useEffect(() => {
    setCategory(true);
  }, []);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const handleMenu = () => {
    setMenu(!menu);
    setCategoryOpen(!categoryOpen);
    handleCloseCategory(false)
    setOpenDrawer2(!openDrawer2);
    setTimeout(() => {
      if (menu === false) {
        var section = document.getElementById("menu");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", position: "fixed" });
        }
      }
    }, 100);
  }


  const handleAbout = () => {
    setAbout(!about);
    setOpenDrawer(!openDrawer);
  };


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
      fetchAllReviews(customerId);
    }
  };

  React.useEffect(() => {
    if (data != null) {
      fetchAllReviews(data?.customerId);
    }
    fetchAllReviews(data?.customerId);
  }, []);

  const fetchAllReviews = async (customerId) => {
    var formData = new FormData();
    formData.append("cardId", customerId);

    const response = await postData(
      "enquiry/displaycardreview",
      formData,
      true
    );
    console.log(response);
    setReviewsData(response.data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const getDuration = (submitAtString) => {
    const submitAt = new Date(submitAtString);
    const currentTime = new Date();
    const durationInMilliseconds = currentTime - submitAt;
    const durationInSeconds = Math.floor(durationInMilliseconds / 1000);

    if (durationInSeconds < 60) {
      return `${durationInSeconds} second${durationInSeconds !== 1 ? "s" : ""
        } ago`;
    } else if (durationInSeconds < 3600) {
      const minutes = Math.floor(durationInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (durationInSeconds < 86400) {
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(durationInSeconds / 86400);
      const hours = Math.floor((durationInSeconds % 86400) / 3600);
      const minutes = Math.floor(((durationInSeconds % 86400) % 3600) / 60);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };

  ////////////////Review Slider///////////////////////

  const Reviews = () => {
    return reviewsData?.map((item) => {
      return (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 0.5,
              marginTop: 1,
              maxHeight: 82,
              overflowY: "scroll",
              scrollbarWidth: "none",
            },
          }}
        >
          <Paper elevation={4} sx={{ padding: 1.3 }}>
            <Grid sx={{ display: "flex" }}>
              <Grid sx={{ fontSize: "18px", fontWeight: 500 }}>
                {item?.name}
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex" }}>
              <Grid>
                <Rating
                  size="small"
                  color="green"
                  name="simple-controlled"
                  value={item.rating}
                />
              </Grid>
              <Grid
                sx={{
                  color: "#636e72",
                  fontSize: 14,
                  color: "#636e72",
                  marginLeft: "2%",
                  marginTop: ".7%",
                }}
              >
                {getDuration(item?.submitAt)}
              </Grid>
            </Grid>
            <Grid sx={{ fontSize: 10, color: "#2d3436" }}>{item.review}</Grid>
          </Paper>
        </Box>
      );
    });
  };
  //////////////////////////////////////////////////////////////////////////

  ////////////Dialogs/////////////////////////////////////////////////////

  const categoryDialog = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            width: matches ? "85%" : '20%',
            borderRadius: 10,
            backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
          },
        }}
        open={category}
        onClose={handleCloseCategory}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <IconButton
            onClick={handleCloseCategory}
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
        <Grid sx={{ display: "flex", flexDirection: "column", padding: 3 }}>
          <Grid sx={{ fontSize: 14 }}>Welcome to Masal Grili</Grid>
          <Grid
            sx={{
              fontSize: 22,
              fontWeight: 500,
              color: "#000",
              marginTop: "1%",
            }}
          >
            Select Your Category
          </Grid>
          <Grid sx={{ fontSize: 14, marginTop: "3%" }}>
            What would you like to order today ?
          </Grid>
          <Grid sx={{ fontSize: 15, marginTop: "4%", fontWeight: 300 }}>
            All
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1%",
            }}
          >
            <Grid onClick={handleMenu}
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Burger
            </Grid>
            <Grid onClick={handleMenu}
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Category name
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3%",
            }}
          >
            <Grid onClick={handleMenu}
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Chiken
            </Grid>
            <Grid onClick={handleMenu}
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Maggi
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3%",
            }}
          >
            <Grid onClick={handleMenu}
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Mojita
            </Grid>
            <Grid onClick={handleMenu}
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Quick bites
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3%",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Sandwish
            </Grid>
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Dosa
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3%",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Smoothie
            </Grid>
            <Grid
              sx={{
                border: "1px solid #bdc3c7",
                fontSize: 15,
                width: 118,
                padding: 0.3,
                borderRadius: 1,
              }}
            >
              Biryani
            </Grid>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4%",
            }}
          >
            <Button
              style={{
                borderColor: "#000",
                width: "100%",
                backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
                color: "#000",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: 4,
                display: "flex",
                marginTop: "6%",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="outlined"
              onClick={handleCloseCategory}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    );
  };

  const CustomerAsPerTast = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            position: "fixed",
            bottom: -35,
            width: "100%",
            height: "40%",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundImage: "radial-gradient(#ffff, #f5f6fa)",
          },
        }}
        open={customer}
        onClose={handleCloseCustomer}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleCloseCustomer}
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
        <Grid sx={{ display: "flex", flexDirection: "column", padding: 3 }}>
          <Grid sx={{ fontSize: 14 }}>Panner Pizza</Grid>
          <Grid
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#000",
              marginTop: "3%",
            }}
          >
            Customise as per your taste.
          </Grid>
          <Divider
            style={{
              backgroundColor: "#AAAAAA",
              width: "100%",
              marginTop: "3%",
            }}
          />
          <Grid
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#000",
              marginTop: "3%",
            }}
          >
            Quantity
          </Grid>
          <Grid
            sx={{
              marginTop: "1%",
              border: "1px solid #353535",
              background: "#fff",
              width: "100%",
              height: 100,
              borderRadius: 5,
            }}
          >
            <Grid
              sx={{
                height: 50,
                display: "flex",
                alignItems: "center",
                padding: 1.4,
              }}
            >
              <Grid sx={{ display: "flex", width: 240, alignItems: "center" }}>
                <img
                  src={vegmain}
                  style={{
                    width: "10%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></img>
                <Grid sx={{ marginLeft: "4%" }}>
                  Medium [ 8 inches , 4 slice ]
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <Radio
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  style={{ color: "green" }}
                />
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#AAAAAA",
                width: "100%",
              }}
            />{" "}
            <Grid
              sx={{
                height: 50,
                display: "flex",
                alignItems: "center",
                padding: 1.4,
              }}
            >
              <Grid sx={{ display: "flex", width: 240, alignItems: "center" }}>
                <img
                  src={vegmain}
                  style={{
                    width: "10%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></img>
                <Grid sx={{ marginLeft: "4%" }}>
                  Jumbo [ 12 inches , 8 slice ]
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <Radio
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  style={{ color: "green" }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={{ marginTop: "6%", display: "flex" }}>
            <Grid sx={{ fontSize: "18px", fontWeight: 700, marginTop: "3%" }}>
              Step 1/2
            </Grid>
            <Button
              onClick={handleClickCustomer2}
              style={{
                borderColor: "#000",
                width: 150,
                height: 35,
                background: "#000",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "none",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
              }}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    );
  };

  const CustomerAsPerTast2 = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            position: "fixed",
            bottom: -35,
            width: "100%",
            height: "42%",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
          },
        }}
        open={customer2}
        onClose={handleCloseCustomer2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          onClick={handleCloseCustomer2}
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
        <Grid sx={{ display: "flex", flexDirection: "column", padding: 3 }}>
          <Grid sx={{ fontSize: 14 }}>Panner Pizza</Grid>
          <Grid
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#000",
              marginTop: "3%",
            }}
          >
            Customise as per your taste.
          </Grid>
          <Divider
            style={{
              backgroundColor: "#AAAAAA",
              width: "100%",
              marginTop: "3%",
            }}
          />
          <Grid
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#000",
              marginTop: "3%",
            }}
          >
            Add Topping
          </Grid>
          <Grid
            sx={{
              marginTop: "1%",
              background: "#fff",
              width: "100%",
              maxHeight: 120,
              borderRadius: 3,
              overflow: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <Grid
              sx={{
                height: 30,
                display: "flex",
                alignItems: "center",
                padding: 1.4,
              }}
            >
              <Grid sx={{ display: "flex", width: 240, alignItems: "center" }}>
                <img
                  src={vegmain}
                  style={{
                    width: "8%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></img>
                <Grid sx={{ marginLeft: "4%", fontSize: 12 }}>
                  Extra cheese
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <Grid
                  sx={{
                    fontSize: "12px",
                    fontWeight: 200,
                    color: "#636e72",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ₹28
                </Grid>
                <Radio
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{ marginLeft: "1%" }}
                  style={{ color: "green" }}
                />
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#AAAAAA",
                width: "100%",
              }}
            />
            <Grid
              sx={{
                height: 30,
                display: "flex",
                alignItems: "center",
                padding: 1.4,
              }}
            >
              <Grid sx={{ display: "flex", width: 240, alignItems: "center" }}>
                <img
                  src={vegmain}
                  style={{
                    width: "8%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></img>
                <Grid sx={{ marginLeft: "4%", fontSize: 12 }}>
                  Extra cheese
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <Grid
                  sx={{
                    fontSize: "12px",
                    fontWeight: 200,
                    color: "#636e72",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ₹28
                </Grid>
                <Radio
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{ marginLeft: "1%" }}
                  style={{ color: "green" }}
                />
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#AAAAAA",
                width: "100%",
              }}
            />{" "}
            <Grid
              sx={{
                height: 30,
                display: "flex",
                alignItems: "center",
                padding: 1.4,
              }}
            >
              <Grid sx={{ display: "flex", width: 240, alignItems: "center" }}>
                <img
                  src={vegmain}
                  style={{
                    width: "8%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></img>
                <Grid sx={{ marginLeft: "4%", fontSize: 12 }}>
                  Extra cheese
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <Grid
                  sx={{
                    fontSize: "12px",
                    fontWeight: 200,
                    color: "#636e72",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ₹28
                </Grid>
                <Radio
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{ marginLeft: "1%" }}
                  style={{ color: "green" }}
                />
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#AAAAAA",
                width: "100%",
              }}
            />{" "}
            <Grid
              sx={{
                height: 30,
                display: "flex",
                alignItems: "center",
                padding: 1.4,
              }}
            >
              <Grid sx={{ display: "flex", width: 240, alignItems: "center" }}>
                <img
                  src={vegmain}
                  style={{
                    width: "8%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></img>
                <Grid sx={{ marginLeft: "4%", fontSize: 12 }}>
                  Extra cheese
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <Grid
                  sx={{
                    fontSize: "12px",
                    fontWeight: 200,
                    color: "#636e72",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ₹28
                </Grid>
                <Radio
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{ marginLeft: "1%" }}
                  style={{ color: "green" }}
                />
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#AAAAAA",
                width: "100%",
              }}
            />
          </Grid>

          <Grid sx={{ marginTop: "6%", display: "flex" }}>
            <Grid sx={{ fontSize: "18px", fontWeight: 700, marginTop: "3%" }}>
              Step 2/2
            </Grid>
            <Button
              onClick={handleClickBill}
              style={{
                borderColor: "#000",
                width: 150,
                height: 35,
                background: "#000",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "none",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
              }}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    );
  };

  const MenuDialog = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            position: "fixed",
            bottom: 92,
            width: "75%",
            height: "45%",
            borderRadius: 10,
            background: "#000",
            overflow: "scroll",
            scrollbarWidth: "none",
            // Dialog ko page ke bottom me set karein
          },
        }}
        open={menuList}
        onClose={handleCloseMenu}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",

            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
            marginTop: "3%",
          }}
          variant="outlined"
        >
          <Grid>Item at 139</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 6</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>South Idian</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 10</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Chowmin</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 4</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Maggi</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 1</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Item of north</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 13</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Simga puri Chowmin</Grid>
          <Grid sx={{ marginLeft: "auto" }}>10</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Burger</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 70</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Pizza</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 16</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Cold Drink</Grid>
          <Grid sx={{ marginLeft: "auto" }}> 26</Grid>
        </Button>
        <Button
          style={{
            borderColor: "#000",
            width: "100%",
            background: "#000",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: 4,
            display: "flex",
            flexDirection: "row",
          }}
          variant="outlined"
        >
          <Grid>Samosa</Grid>
          <Grid sx={{ marginLeft: "auto" }}>5</Grid>
        </Button>
      </Dialog>
    );
  };

  const RatingDialog = () => {
    return (
      <Dialog
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
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "5%",
            }}
          >
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
          </IconButton>
        </DialogTitle>
        <Grid item xs={12}>
          <Grid sx={{ background: "#fff", padding: 2, maxHeight: 500 }}>
            <Grid>
              <Grid
                style={{
                  border: "1px solid #95a5a6",
                  width: "100%",
                  height: "auto",
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
                      backgroundColor: "#fff",
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
                      backgroundColor: "#fff",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
      </Dialog>
    );
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////

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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
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
              {/* <AiFillHome style={{ fontSize: "25px", color: "#000" }} /> */}
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
              {/* <PiDeviceMobileFill style={{ fontSize: "25px", color: "#000" }} /> */}
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
              {/* <IoIosCreate style={{ fontSize: "25px", color: "#000" }} /> */}
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
              {/* <MdFeedback style={{ fontSize: "25px", color: "#000" }} /> */}
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
              {/* <TbLogin2 style={{ fontSize: "25px", color: "#000" }} /> */}
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
              {/* <FaShopify style={{ fontSize: "25px", color: "#000" }} /> */}
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



  return (
    <Grid
      style={{
        backgroundColor: "#27ae60",
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
          sx={{ background: "radial-gradient( #414141,#171717)" }}
        >
          <Grid
            sx={{
              height: 250,
              background: "radial-gradient( #414141,#171717)",
              width: "100%",
              position: "relative",
            }}
          >
            <Grid sx={{ padding: 2, display: "flex" }}>
              <Grid sx={{ cursor: "pointer" }}>
                <SideBar />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              position: "relative",
              height: "auto",
              background: "#fff",
              padding: 2,
              borderRadius: "15px 15px 0px 0px",
            }}
          >
            <Grid
              style={{
                backgroundImage: "radial-gradient(#dcdde1,#95a5a6)",
                position: "absolute",
                top: -80,
                width: "148px",
                height: "148px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "95px",
              }}
            ></Grid>

            <Button
              onClick={handleMenu}
              style={{
                borderColor: "#000",
                width: 100,
                height: 32,
                background: "radial-gradient( #414141,#171717)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 400,
                textTransform: "none",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginLeft: "auto",
                cursor: "pointer",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              Menu
              {openDrawer2 ? (
                <ExpandLess fontSize="medium" />
              ) : (
                <ExpandMore fontSize="medium" />
              )}
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid sx={{ background: "#fff", display: "flex", height: "auto" }}>
            <Grid sx={{ marginTop: "4%", marginLeft: "4%" }}>
              <Grid
                sx={{
                  fontSize: "26px",
                  fontWeight: 700,
                  lineHeight: "21.94px",
                }}
              >
                Eat Healthy
              </Grid>
              <Grid sx={{ fontSize: 12, color: "#2c3e50", marginTop: "5%" }}>
                Healthy Food ,South India
              </Grid>
              <Grid sx={{ fontSize: 12, color: "#2c3e50", marginTop: "2%" }}>
                Kokapally , Hydrabad
              </Grid>
            </Grid>

            <Grid
              style={{
                color: "#fff",
                border: "1px solid #4AB425",
                marginTop: "6%",
                background: "#4AB425",
                display: "flex",
                padding: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "5px 0px 0px 5px",
                width: 68,
                height: 40,
                marginLeft: "auto",
              }}
            >
              <Grid style={{ display: "flex" }}>
                <span style={{ color: "#fff", fontSize: 13 }}>4.2</span>
                <span style={{ marginLeft: "4%" }}>
                  <StarIcon color="#fff" style={{ fontSize: "10px" }} />
                </span>
                <br></br>
              </Grid>
              <Grid sx={{ fontSize: 8 }}>DELIVERY</Grid>
            </Grid>
          </Grid>
          <Grid
            style={{
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Divider
              style={{
                height: "1px",
                backgroundColor: "#AAAAAA",
                width: "92%",
              }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            sx={{
              background: "#fff",
              display: "flex",
              height: "auto",
              marginTop: "0%",
              padding: 2,
            }}
          >
            <Grid
              sx={{
                display: "flex",
                backgroundColor: "#fff",
                minHeight: "auto",
                flexDirection: "column",
              }}
            >
              <Grid sx={{ display: "flex", flexDirection: "row" }}>
                <Button
                  onClick={handleAbout}
                  style={{
                    borderColor: "#000",
                    width: 110,
                    height: 32,
                    background: "radial-gradient( #414141,#171717)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 400,
                    textTransform: "none",
                    borderRadius: 14,
                    cursor: "pointer",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    marginTop: "3%",
                  }}
                >
                  About
                  {openDrawer ? (
                    <ExpandLess fontSize="medium" />
                  ) : (
                    <ExpandMore fontSize="medium" />
                  )}
                </Button>
                <Box
                  sx={{
                    height: 35,
                    transform: "translateZ(100px)",
                    flexGrow: 1,
                    position: "relative",
                    marginTop: "12%",
                  }}
                >
                  <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{
                      "& .MuiSpeedDial-fab": {
                        boxShadow: "none", // Remove the box shadow
                        backgroundColor: "#fff", // Set background color to #fff
                      },
                      "& .MuiSpeedDial-fab:hover": {
                        boxShadow: "none",
                        backgroundColor: "#fff", // Ensure background color remains #fff on hover
                      },
                      "&.MuiSpeedDial-open .MuiSpeedDial-fab": {
                        boxShadow: "none",
                        backgroundColor: "#fff", // Ensure background color remains #fff when open/clicked
                      },
                      position: "absolute",
                      left: matches ? -12 : 165,
                      bottom: 1,
                    }}
                    direction="left"
                    icon={<img src={moreicon} width={40}></img>}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                      />
                    ))}
                  </SpeedDial>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {about ? <></> : <><Grid
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-2%",
            }}
          >
            <Divider
              style={{
                backgroundColor: "#AAAAAA",
                width: "92%",
              }}
            />
          </Grid></>}
        </Grid>
        {about ? (
          <>
            {" "}
            <Grid item xs={12}>
              <Grid
                sx={{
                  background: "#fff",
                  display: "flex",
                  height: "auto",
                  marginTop: matches ? "-8%" : "-4%",
                  padding: 2,
                }}
              >
                <Grid
                  style={{
                    border: "1px solid #000",
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
                      fontFamily: "poppins",
                      overflowY: "scroll",
                      padding: 8,
                    }}>
                    CHAT AI GPT- Free Unlimited Chat GPT The AI-powered
                    chatbot, Chat AI GPT, employs an intricate system of
                    artificial intelligence and neural networks to produce
                    responses that are strikingly resemblant of human
                    conversation during a simulated dialogue. It employs an
                    advanced technology known as conversational ChatGPT Free
                    to interpret and respond to human language naturally. Chat
                    AI GPT Free is constantly refining its abilities and
                    broadening its knowledge base, aiming to deliver the
                    utmost assistance to its users. Here you can Chat GPT free
                    and unlimited.
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2%",
                }}
              >
                <Divider
                  style={{
                    height: "1px",
                    backgroundColor: "#AAAAAA",
                    width: "92%",
                  }}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}



        <Grid item xs={12}>
          <Grid
            sx={{
              padding: 2,
              background: "#fff",
              height: "auto",
              marginTop: "1%",
            }}
          >
            <Grid sx={{ fontSize: "20px", fontWeight: 700 }}>Social Links</Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "7%",
                zIndex: 10,
              }}
            >
              <Fab
                style={{
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  zIndex: 10,
                }}
              >
                <img src={call} />
              </Fab>

              <Fab
                style={{
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  zIndex: 10,
                }}
              >
                <img src={whatapp} />
              </Fab>
              <Fab
                style={{
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  zIndex: 10,
                }}
              >
                <img src={gmail} />
              </Fab>
            </Grid>

            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "8%",
              }}
            >
              <Fab
                style={{
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  zIndex: 10,
                }}
              >
                <img src={fb} />
              </Fab>

              <Fab
                style={{
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  zIndex: 10,
                }}
              >
                <img src={insta} />
              </Fab>
              <Fab
                style={{
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  zIndex: 10,
                }}
              >
                <img src={link} />
              </Fab>
            </Grid>
            <Grid style={{ marginTop: "10%" }}>
              <Divider
                style={{
                  height: "1px",
                  backgroundColor: "#AAAAAA",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        {menu ? (
          <>
            <Grid item xs={12}>
              <div id="menu"></div>
              <Grid
                sx={{
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  background: '#000',
                  alignItems: "center", fontFamily: 'poppins', position: 'sticky', top: '0', zIndex: '5'
                }}>
                <Grid sx={{
                  fontSize: "16px",
                  fontWeight: 500, color: '#fff', display: "flex",
                  justifyContent: "center"
                }}>
                  Flat 10% Off on Entire Now
                </Grid>
              </Grid>

              <Grid sx={{ background: "#fff", padding: 2, height: "auto" }}>
                <Grid
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    gap: 0.8,
                  }}
                >
                  <img src={menulogo}></img>{" "}
                  <Grid sx={{ marginTop: "2%", fontFamily: 'Okra, Helvetica, sans-serif', fontFamily: 'poppins' }}>Menu</Grid>
                  <img src={menulogo}></img>
                </Grid>
                <Grid sx={{ marginTop: "5%" }}>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder="What you are looking for?"
                    size="small"
                    fullWidth
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="end">
                          <Search
                            style={{ cursor: "pointer", marginLeft: "-40%" }}
                          />
                          <Divider
                            sx={{ height: 30, m: 0.5, color: "#fff" }}
                            orientation="vertical"
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <KeyboardVoiceIcon style={{ cursor: "pointer" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid sx={{ marginTop: "5%", display: "flex" }}>
                  <Grid>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
                        }
                      />
                    </FormGroup>
                  </Grid>
                  <Grid sx={{ marginLeft: "2%" }}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <MaterialUISwitch2 sx={{ m: 1 }} defaultChecked />
                        }
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
                <Grid sx={{ fontFamily: 'Okra, Helvetica, sans-serif', fontWeight: 600, fontSize: '1.4rem', marginTop: '3%' }}>
                  Best in Pizza
                </Grid>
                <Grid sx={{ marginTop: "2%" }}>
                  <Grid
                    sx={{
                      background: "#fff",
                      display: "flex",
                      height: matches ? 170 : 210,
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid sx={{ marginTop: "4%" }}>
                      <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <img src={menuveg} width={25}></img>

                        <Grid
                          sx={{
                            border: "1px solid #FFA030",
                            background: "#FFA030",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 1,
                            fontSize: 12,
                            fontWeight: 400,
                            width: 80,
                            marginLeft: "4%",
                            height: 22,
                          }}
                        >
                          Bestseller
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21.94px",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        Masala Dosa
                      </Grid>
                      <Grid sx={{ marginTop: "2%", display: "flex" }}>
                        <Grid
                          sx={{
                            border: "1px solid #eccc68",
                            padding: 0.2,
                            borderRadius: 1,
                            height: 20,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                          }}
                        >
                          <Rating

                            size="small"
                            color="green"
                            name="simple-controlled"
                            value={4}
                          />
                        </Grid>
                        <Grid
                          sx={{
                            color: "#636e72",
                            fontSize: 12,
                            marginTop: "2%",
                            marginLeft: "2%",
                            fontWeight: 300,
                          }}
                        >
                          48 rating
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#000",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        ₹ 179
                      </Grid>

                      <Grid
                        sx={{
                          fontSize: 12,
                          color: "#34495e",
                          marginTop: "1%",
                          width: "80%",
                        }}
                      >
                        [veg Preparation] Spring mix plant based organic spaicy.
                      </Grid>
                    </Grid>

                    <Grid sx={{ marginTop: "8%" }}>
                      <Grid sx={{ position: "relative" }}>
                        <img src={food}></img>

                        {count == 0 ? (
                          <Button
                            onClick={handleClickAdd}
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {" "}
                              ADD
                              <AddIcon
                                style={{ marginLeft: "2%", fontSize: "14px" }}
                              />
                            </Grid>
                          </Button>
                        ) : (
                          <Button
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{ gap: 1, display: "flex", marginTop: "5%" }}
                            >
                              <Grid
                                onClick={handleMinus}
                                sx={{ marginTop: "4%" }}
                              >
                                <RemoveIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                              <Grid style={{ fontSize: 12, color: "#fff" }}>
                                {count}
                              </Grid>
                              <Grid
                                onClick={handleClickAdd}
                                sx={{ marginTop: "5%" }}
                              >
                                <AddIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                            </Grid>
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid sx={{ marginTop: "7%" }}>
                  <Grid
                    sx={{
                      background: "#fff",
                      display: "flex",
                      height: matches ? 170 : 210,
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid sx={{ marginTop: "4%" }}>
                      <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <img src={menuveg} width={25}></img>

                        <Grid
                          sx={{
                            border: "1px solid #FFA030",
                            background: "#FFA030",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 1,
                            fontSize: 12,
                            fontWeight: 400,
                            width: 80,
                            marginLeft: "4%",
                            height: 22,
                          }}
                        >
                          Bestseller
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21.94px",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        Plant Protien Bowl
                      </Grid>
                      <Grid sx={{ marginTop: "2%", display: "flex" }}>
                        <Grid
                          sx={{
                            border: "1px solid  #eccc68",
                            padding: 0.2,
                            borderRadius: 1,
                            height: 20,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                          }}
                        >
                          <Rating
                            size="small"
                            color="green"
                            name="simple-controlled"
                            value={4}
                          />
                        </Grid>
                        <Grid
                          sx={{
                            color: "#636e72",
                            fontSize: 12,
                            marginTop: "2%",
                            marginLeft: "2%",
                            fontWeight: 300,
                          }}
                        >
                          48 rating
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#000",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        ₹ 179
                      </Grid>

                      <Grid
                        sx={{
                          fontSize: 12,
                          color: "#34495e",
                          marginTop: "1%",
                          width: "80%",
                        }}
                      >
                        [veg Preparation] Spring mix plant based organic spaicy.
                      </Grid>
                    </Grid>

                    <Grid sx={{ marginTop: "8%" }}>
                      <Grid sx={{ position: "relative" }}>
                        <img src={food}></img>

                        <Button
                          onClick={handleClickCustomer}
                          style={{
                            borderColor: "#000",
                            width: 70,
                            height: 28,
                            background: "#000",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: 400,
                            textTransform: "none",
                            borderRadius: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: 76,
                            marginLeft: "10%",
                          }}
                        >
                          ADD{" "}
                          <AddIcon
                            style={{ marginLeft: "1%", fontSize: "14px" }}
                          />
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid sx={{ marginTop: "7%" }}>
                  <Grid
                    sx={{
                      background: "#fff",
                      display: "flex",
                      height: matches ? 170 : 210,
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid sx={{ marginTop: "4%" }}>
                      <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <img src={menuveg} width={25}></img>

                        <Grid
                          sx={{
                            border: "1px solid #FFA030",
                            background: "#FFA030",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 1,
                            fontSize: 12,
                            fontWeight: 400,
                            width: 80,
                            marginLeft: "4%",
                            height: 22,
                          }}
                        >
                          Bestseller
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21.94px",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        Singapuri Chawmin
                      </Grid>
                      <Grid sx={{ marginTop: "2%", display: "flex" }}>
                        <Grid
                          sx={{
                            border: "1px solid #eccc68",
                            padding: 0.2,
                            borderRadius: 1,
                            height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'
                          }}
                        >
                          <Rating

                            size="small"
                            color="green"
                            name="simple-controlled"
                            value={4}
                          />
                        </Grid>
                        <Grid
                          sx={{
                            color: "#636e72",
                            fontSize: 12,
                            marginTop: "2%",
                            marginLeft: "2%",
                            fontWeight: 300,
                          }}
                        >
                          48 rating
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#000",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        ₹ 179
                      </Grid>

                      <Grid
                        sx={{
                          fontSize: 12,
                          color: "#34495e",
                          marginTop: "1%",
                          width: "80%",
                        }}
                      >
                        [veg Preparation] Spring mix plant based organic spaicy.
                      </Grid>
                    </Grid>

                    <Grid sx={{ marginTop: "8%" }}>
                      <Grid sx={{ position: "relative" }}>
                        <img src={food}></img>

                        {count == 0 ? (
                          <Button
                            onClick={handleClickAdd}
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {" "}
                              ADD
                              <AddIcon
                                style={{ marginLeft: "2%", fontSize: "14px" }}
                              />
                            </Grid>
                          </Button>
                        ) : (
                          <Button
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{ gap: 1, display: "flex", marginTop: "5%" }}
                            >
                              <Grid
                                onClick={handleMinus}
                                sx={{ marginTop: "4%" }}
                              >
                                <RemoveIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                              <Grid style={{ fontSize: 12, color: "#fff" }}>
                                {count}
                              </Grid>
                              <Grid
                                onClick={handleClickAdd}
                                sx={{ marginTop: "5%" }}
                              >
                                <AddIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                            </Grid>
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid sx={{ marginTop: "7%" }}>
                  <Grid
                    sx={{
                      background: "#fff",
                      display: "flex",
                      height: matches ? 170 : 210,
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid sx={{ marginTop: "4%" }}>
                      <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <img src={menuveg} width={25}></img>
                        <Grid
                          sx={{
                            border: "1px solid #FFA030",
                            background: "#FFA030",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 1,
                            fontSize: 12,
                            fontWeight: 400,
                            width: 80,
                            marginLeft: "4%",
                            height: 22,
                          }}
                        >
                          Bestseller
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21.94px",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        Plant Protien
                      </Grid>
                      <Grid sx={{ marginTop: "2%", display: "flex" }}>
                        <Grid
                          sx={{
                            border: "1px solid #eccc68",
                            padding: 0.2,
                            borderRadius: 1,
                            height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'
                          }}
                        >
                          <Rating

                            size="small"
                            color="green"
                            name="simple-controlled"
                            value={4}
                          />
                        </Grid>
                        <Grid
                          sx={{
                            color: "#636e72",
                            fontSize: 12,
                            marginTop: "2%",
                            marginLeft: "2%",
                            fontWeight: 300,
                          }}
                        >
                          48 rating
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#000",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        ₹ 179
                      </Grid>

                      <Grid
                        sx={{
                          fontSize: 12,
                          color: "#34495e",
                          marginTop: "1%",
                          width: "80%",
                        }}
                      >
                        [veg Preparation] Spring mix plant based organic spaicy.
                      </Grid>
                    </Grid>

                    <Grid sx={{ marginTop: "8%" }}>
                      <Grid sx={{ position: "relative" }}>
                        <img src={food}></img>

                        {count == 0 ? (
                          <Button
                            onClick={handleClickAdd}
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {" "}
                              ADD
                              <AddIcon
                                style={{ marginLeft: "2%", fontSize: "14px" }}
                              />
                            </Grid>
                          </Button>
                        ) : (
                          <Button
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{ gap: 1, display: "flex", marginTop: "5%" }}
                            >
                              <Grid
                                onClick={handleMinus}
                                sx={{ marginTop: "4%" }}
                              >
                                <RemoveIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                              <Grid style={{ fontSize: 12, color: "#fff" }}>
                                {count}
                              </Grid>
                              <Grid
                                onClick={handleClickAdd}
                                sx={{ marginTop: "5%" }}
                              >
                                <AddIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                            </Grid>
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid sx={{ marginTop: "7%" }}>
                  <Grid
                    sx={{
                      background: "#fff",
                      display: "flex",
                      height: matches ? 170 : 210,
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid sx={{ marginTop: "4%" }}>
                      <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <img src={menuveg} width={25}></img>

                        <Grid
                          sx={{
                            border: "1px solid #FFA030",
                            background: "#FFA030",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 1,
                            fontSize: 12,
                            fontWeight: 400,
                            width: 80,
                            marginLeft: "4%",
                            height: 22,
                          }}
                        >
                          Bestseller
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "21.94px",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        Plane Dosa
                      </Grid>
                      <Grid sx={{ marginTop: "2%", display: "flex" }}>
                        <Grid
                          sx={{
                            border: "1px solid #eccc68",
                            padding: 0.2,
                            borderRadius: 1,
                            height: 20, display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Rating

                            size="small"
                            color="green"
                            name="simple-controlled"
                            value={4}
                          />
                        </Grid>
                        <Grid
                          sx={{
                            color: "#636e72",
                            fontSize: 12,
                            marginTop: "2%",
                            marginLeft: "2%",
                            fontWeight: 300,
                          }}
                        >
                          48 rating
                        </Grid>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#000",
                          marginTop: "3%",
                          fontFamily: "poppins",
                        }}
                      >
                        ₹ 179
                      </Grid>

                      <Grid
                        sx={{
                          fontSize: 12,
                          color: "#34495e",
                          marginTop: "1%",
                          width: "80%",
                        }}
                      >
                        [veg Preparation] Spring mix plant based organic spaicy.
                      </Grid>
                    </Grid>

                    <Grid sx={{ marginTop: "8%" }}>
                      <Grid sx={{ position: "relative" }}>
                        <img src={food}></img>

                        {count == 0 ? (
                          <Button
                            onClick={handleClickAdd}
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {" "}
                              ADD
                              <AddIcon
                                style={{ marginLeft: "2%", fontSize: "14px" }}
                              />
                            </Grid>
                          </Button>
                        ) : (
                          <Button
                            style={{
                              borderColor: "#000",
                              width: 70,
                              height: 28,
                              background: "#000",
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: 4,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              position: "absolute",
                              top: 76,
                              marginLeft: "10%",
                            }}
                          >
                            <Grid
                              sx={{ gap: 1, display: "flex", marginTop: "5%" }}
                            >
                              <Grid
                                onClick={handleMinus}
                                sx={{ marginTop: "4%" }}
                              >
                                <RemoveIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                              <Grid style={{ fontSize: 12, color: "#fff" }}>
                                {count}
                              </Grid>
                              <Grid
                                onClick={handleClickAdd}
                                sx={{ marginTop: "5%" }}
                              >
                                <AddIcon
                                  style={{ color: "#fff", fontSize: 14 }}
                                />
                              </Grid>
                            </Grid>
                          </Button>
                        )}
                        {/* {count==0?
      <div style={{display:'flex',width:"100%"}}>
      <Button onClick={handleAdd} style={{borderColor:'#fff',width:"30%",background:"#353535",color:'#ffff',fontWeight:'bold',textTransform:'none',padding:"6px 40px00",borderRadius:10}} variant="outlined">Add to Cart</Button>
      <Button onClick={handleAdd} style={{borderColor:'#12DAA8',width:"30%",background:"#12DAA8",marginLeft:'5%',color:'#000',fontWeight:'bold',textTransform:'none',padding:"6px 40px00",borderRadius:10}} variant="outlined">Buy Now</Button>
      </div>:
      <div style={{gap:2}}>
      <Grid onClick={handleMinus} size="small" >
        <RemoveIcon fontSize="small"/>
      </Grid>
      <Grid onClick={handleAdd} size="small">
        <AddIcon fontSize="small" />
      </Grid>
      </div>}
      {props.screen=='cart'?<></>:
      <Button onClick={handleContinue} style={{borderColor:'#fff',height:40,width:"35%",marginLeft:'4%',background:"#353535",color:'#ffff',fontWeight:'bold',textTransform:'none',borderRadius:10}} variant="outlined">Continue Shopping</Button>}
      </div>} */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid style={{ marginTop: "5%" }}>
                  <Button
                    style={{
                      borderColor: "#fff",
                      width: 130,
                      height: 40,
                      background: "#fff",
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: 400,
                      textTransform: "none",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
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
                <Grid style={{ marginTop: "6%" }}>
                  <Divider
                    style={{
                      height: "1px",
                      backgroundColor: "#AAAAAA",
                      width: "100%",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}

        <Grid item xs={12}>
          <Grid sx={{ background: "#fff", padding: 2, maxHeight: 500 }}>
            <Grid
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                marginTop: "4%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              SEE OUR REVIEW !
            </Grid>
            <Grid
              style={{
                border: "1px solid #fff",
                display: "flex",
                flexDirection: "column",
                borderRadius: 10,
                marginTop: "5%",
                overflowY: "scroll",
                scrollbarWidth: "none",
                scrollSnapAlign: "end",
              }}
            >
              <Slider {...settings}>{Reviews()}</Slider>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                backgroundColor: "#fff",
                height: "auto",
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
                      background: "#000",
                      color: "#fff",
                      fontWeight: "bold",
                      textTransform: "none",
                      padding: 5,
                      borderRadius: 8,
                      marginTop: "5%",
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

            <Grid style={{ marginTop: "7%" }}>
              <Divider
                style={{
                  height: "1px",
                  backgroundColor: "#AAAAAA",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid sx={{ background: "#fff", padding: 2, maxHeight: 450 }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3%",
                flexDirection: "column",
              }}
            >
              <img src={digital} style={{ width: "15%" }}></img>
              <Grid style={{ fontSize: 12, color: "#2d3436", marginTop: "2%" }}>
                Powered By IndiaBuzz
              </Grid>

              {menu ? (
                <>
                  <Grid
                    sx={{
                      marginLeft: matches ? "70%" : "30%",
                      position: "fixed",
                      bottom: 90,
                      zIndex: 40,
                    }}
                  >
                    <Fab
                      onClick={handleClickMenu}
                      style={{
                        background: "#000000",
                        width: 70,
                        height: 70,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Grid>
                        <img src={crosses} width={20} />
                        <br></br>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: 14,
                          fontWeight: 400,
                          color: "#fff",
                          marginTop: "-10%",
                        }}
                      >
                        Menu
                      </Grid>
                    </Fab>
                  </Grid>
                </>
              ) : (
                <></>
              )}

              {count == 0 ? (
                <></>
              ) : (
                <Grid
                  sx={{
                    position: "fixed",
                    bottom: -2,
                    zIndex: 40,
                  }}
                >
                  <Grid
                    sx={{
                      width: 330,
                      height: 60,
                      background: '#000',
                      borderRadius: 3,
                    }}
                  >
                    <Grid
                      sx={{
                        width: "100%",
                        height: 17,
                        background: "#2d3436",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 3,
                        fontSize: 11,
                        color: "#fff",
                      }}
                    >
                      Welcome to Eat Healthy , Save upto 30% on every Meal
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 35,
                        gap: 1,
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid
                          sx={{
                            fontSize: "15px",
                            fontWeight: 400,
                            color: "#fff",
                            fontFamily: "poppins",
                          }}
                        >
                          1 item Added
                        </Grid>
                        <img
                          src={arrow}
                          style={{ width: "13%", marginLeft: "5%" }}
                        ></img>
                      </Grid>
                      <Grid sx={{ color: "#fff", marginLeft: "3%" }}>|</Grid>
                      <Grid
                        onClick={handleNavigate}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid
                          sx={{
                            fontSize: "15px",
                            fontWeight: 400,
                            color: "#fff",
                            fontFamily: "poppins",
                          }}
                        >
                          View Cart
                        </Grid>
                        <img
                          src={shopping}
                          style={{ width: "13%", marginLeft: "5%" }}
                        ></img>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {RatingDialog()}
      {categoryDialog()}
      {MenuDialog()}
      {CustomerAsPerTast()}
      {CustomerAsPerTast2()}
    </Grid>
  );
}
