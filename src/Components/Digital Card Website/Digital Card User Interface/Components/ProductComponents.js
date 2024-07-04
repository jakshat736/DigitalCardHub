import { Avatar, Rating, Divider, Radio, Box, Button, Grid, DialogActions, DialogContent, IconButton, Paper, Stack, TextField, Typography, } from '@mui/material';
import NewHeader from "./NewHeader";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import card4 from "../../Digital Card Assets/card4.png";
import card11 from "../../Digital Card Assets/card3.png";
import card22 from "../../Digital Card Assets/card4.png";
import card33 from "../../Digital Card Assets/card5.png";
import card44 from "../../Digital Card Assets/card6.png";
import card55 from "../../Digital Card Assets/card7.png";
import Swal from 'sweetalert2';
import logo1 from '../../Digital Card Assets/dchlogo.png';
import { useParams } from 'react-router-dom';
import heart from "../../Digital Card Assets/heart.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import howtouseimage from "../../Digital Card Assets/howtouse.png"
import upload from "../../Digital Card Assets/plussign.png";
import { useStyles2 } from "../../Digital Card User Interface/Components//AllProductSlider";
import use1 from "../../Digital Card Assets/use1.png"
import use2 from "../../Digital Card Assets/use2.png"
import use3 from "../../Digital Card Assets/use3.png"
import use4 from "../../Digital Card Assets/use4.png"
import photo3 from "../../Digital Card Assets/photo2.jpg"
import popupcard from "../../Digital Card Assets/popupcard.png"
import photo2 from "../../Digital Card Assets/photo3.jpg"
import blur11 from "../../Digital Card Assets/white.png"
import photo4 from "../../Digital Card Assets/photo4.jpg"
import photo from "../../Digital Card Assets/photo.jpg"
import r1 from "../../Digital Card Assets/rr1.png"
import r2 from "../../Digital Card Assets/rr2.png"
import r3 from "../../Digital Card Assets/rr3.png"
import r4 from "../../Digital Card Assets/rr4.png"
import close from "../../Digital Card Assets/cross.png"
import right from "../../Digital Card Assets/righticonpopup.png"
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newfooter from "./NewFooter";
import { useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from 'react';
import { postData, serverURL } from '../../../Services/NodeServices';
import { SessionContext } from '../../../Services/SessionContext';
import React, { useContext } from 'react';
import OtpGenerator from '../ReviewTag/OtpGenerator';
import Preloader from './Preloader'

export default function ProductComponents() {

  const matches = useMediaQuery("(max-width:600px)");
  const matchesA = useMediaQuery("(max-width:1400px)");
  const matchesB = useMediaQuery("(max-width:500px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);
  const [view, setView] = useState(false);

  /////////////////////////////////////////////

  const { cart, setCart } = useContext(SessionContext);
  const Token = window.localStorage.getItem("Token");
  const User = window.localStorage.getItem("UserNumber")



  const [value, setValue] = useState(1)
  const [data, setData] = useState([])
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [size, setSize] = useState("70mm")
  const [Icon, setIcon] = React.useState({ url: "", bytes: "" });
  const [show, setShow] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescrition] = useState('');

  const [expanded, setExpanded] = React.useState('panel1');



  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [changeMessage, setChangeMessage] = useState("");
  const [newPassword, setNewPassword] = useState("")

  const [isMoving, setIsMoving] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [isError, setIsError] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [otp, setOtp] = useState()
  const [verified, setVerified] = useState()
  const [loading, setLoading] = useState(true)
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    validatePassword(inputValue);
  };

  const validatePassword = (value) => {
    // Define the regular expressions to check for lowercase, uppercase, number, and special character.
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/;

    // Check if the password meets all the requirements.
    const isValid =
      value.length >= 8 &&
      lowercaseRegex.test(value) &&
      uppercaseRegex.test(value) &&
      numberRegex.test(value) &&
      specialCharacterRegex.test(value);

    setIsError(!isValid);
  };


  const handleCheck = async () => {

    var formData = new FormData()

    formData.append('email', email)



    var result = await postData('customerLogin/chkUser', formData, true)

    if (result?.status == "exist") {

      setOpen3(true)
      setMessage("")
    } else {
      setOpen3(false)
      setMessage("User Not Found")
    }
  }


  const handleSignIn = async () => {

    if (isError == false && verified == true) {

      var formData = new FormData()
      formData.append('name', fullName)
      formData.append('email', emailId.toLowerCase())
      formData.append('phone', phoneNo)
      formData.append('password', password)


      var result = await postData('customerLogin/customerLogin', formData, true)
      console.log(result)
      if (result?.status == 'true') {
        setOpen1(!open1)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registered Succesfully',
          showConfirmButton: false,
          timer: 1500
        })
        setOpen(!open)

      }
      else if (result?.status == 'exist') {
        setOpen1(!open1)
        Swal.fire({
          title: 'You already have an Account.Do you want to make a new registration',
          showDenyButton: true,

          confirmButtonText: 'Log In',
          denyButtonText: `Sign Up`,
          denyButtonColor: `green`,
          confirmButtonColor: "#001E3C"
        }).then((result) => {
          if (result?.isConfirmed) {
            setOpen(true)
            setOpen1(false)
          } else if (result?.isDenied) {

          }
        })
        //navigate('/digitalcardsignup')
      }
      else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Fail to Register',
          showConfirmButton: false,
          timer: 1500
        })

      }

    }
  }





  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { _id } = useParams()
  const fetchProduct = async () => {
    setLoading(true)
    var formData = new FormData
    formData.append('_id', _id)
    const response = await postData('products/getProductById', formData, true)
    console.log(response.data?.images)
    setData(response.data)
    
    if (response?.data != undefined) {
      setLoading(false)
      setShow(true)
    }

  }

  const handleSubmit = async () => {
    if (phoneNo !== "") {
      var formData = new FormData()
      formData.append('phone', phoneNo)
      // formData.append('password', password)
      var result = await postData('customerLogin/chkLogin', formData, true)
      if (result.status) {
        window.localStorage.setItem("userId", result?.data?._id)
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
        
        window.localStorage.setItem("Token", true)
        window.localStorage.setItem("User", true)
        window.localStorage.removeItem('data')
        window.localStorage.setItem("data", JSON.stringify(result?.data))
        handleClick(true, result?.data?.phone)

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

  const handleClose = () => {
    setOpen(false)
    setOpen1(false)
  }

  const handleChangePassword = async () => {
    var formData = new FormData()

    formData.append('email', email)
    formData.append('password', newPassword)


    var result = await postData('customerLogin/updatePassword', formData, true)
    console.log(result)
    if (result?.status) {
      setChangeMessage("Password Changed Successfully")
    }
    else {
      setChangeMessage("Fail to Change")
    }
  }

  const handleClose2 = () => {
    setOpen2(false)
  }



  const ChangePasswordComponent = () => {
    return (
      <Dialog open={open2} onClose={handleClose2} >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Change Password
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",

              overflow: "hidden"
            }}
          >

            <Grid item xs={10} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <TextField label="Your Registered Mail Id" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ fontSize: 20, textAlign: "center", color: "red" }}>{message}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant='contained' onClick={() => handleCheck()}>Verify</Button>
            </Grid>

            <Grid item xs={10} sx={{ display: open3 ? "flex" : "none", justifyContent: "center", mt: 2 }}>
              <TextField label="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} fullWidth />
            </Grid>

            <Grid item xs={12} sx={{ display: open3 ? "flex" : "none", justifyContent: "center" }}>
              <Button variant='contained' onClick={() => handleChangePassword()}>Change Password</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 20, textAlign: "center", color: "green" }}>{changeMessage}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };


  const handleIcon = (event) => {
    setIcon({
      url: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

  const func = async () => {
    var formdata = new FormData();
    formdata.append("mobile", User);
    var response = await postData("cart/getAllProducts", formdata, true);
    if (response) {
      setCart(response.products.length);
    } else {

    }
  };

  const handleSignup = () => {
    setOpen(!open)
    setOpen1(!open1)
  }


  const LoginComponent = () => {
    return (
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Log In / SignUp
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ p: "8% 5%" }}>
              <Grid item xs={9}>
                <TextField label="Whatsapp Number" type='tel' fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
              </Grid>
              <Grid item xs={3} sx={{ display: "flex" }}>
                <Button
                  fullWidth
                  onClick={handleopenotpdailog}
                  sx={{
                    background: "#001E3C",
                    color: "#ffffff",
                    p: "2% 10%",
                    fontSize: { xs: "0.6em", md: "0.9em", lg: "0.9em" },
                    fontWeight: 600,
                    "&:hover": {
                      background: "#023569",
                      color: "#ffffff",
                    }
                  }}>
                  Get Otp
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField label="One Time Password(OTP)" fullWidth onChange={(event) => handleOtp(event.target.value)} inputProps={{ maxLength: 4 }} />

              </Grid>
              <Grid item xs={12}>
                OTP not received ? <a style={{ cursor: 'pointer' }} onClick={handleopenotpdailog}>Resend</a>
              </Grid>
              <Grid item xs={12}>
                {verified == true ? "Verified" : verified == false ? "Not Verified" : ""}
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

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

  const SignUpComponent = () => {
    return (
      <Dialog open={open1} onClose={handleClose} >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Sign Up
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ p: "8% 5%" }}>
            <Grid item xs={12}>
              <TextField label="Full Name" fullWidth value={fullName} onChange={(event) => setFullName(event.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Phone Number" fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
            </Grid>
            <Grid item xs={9}>
              <TextField label="Email" fullWidth value={emailId} onChange={(event) => setEmailId(event.target.value)} />
            </Grid>
            <Grid item xs={3} sx={{ display: "flex" }}>
              <Button
                fullWidth
                onClick={handleopenotpdailog}
                sx={{
                  background: "#001E3C",
                  color: "#ffffff",
                  p: "2% 10%",
                  fontSize: { xs: "0.6em", md: "0.9em", lg: "0.9em" },
                  fontWeight: 600,
                  "&:hover": {
                    background: "#023569",
                    color: "#ffffff",
                  }
                }}
              >
                Get Otp
              </Button></Grid>
            <Grid item xs={12}>
              <TextField label="One Time Password(OTP)" fullWidth onChange={(event) => handleOtp(event.target.value)} inputProps={{ maxLength: 4 }} />

            </Grid>
            <Grid item xs={12}>
              OTP not received ? <a style={{ cursor: 'pointer' }} onClick={handleopenotpdailog}>Resend</a>
            </Grid>
            <Grid item xs={12}>
              {verified == true ? "Verified" : verified == false ? "Not Verified" : ""}
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={handleChange}
                error={isError}
                helperText={
                  isError
                    ? 'Password must be at least 8 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.'
                    : ''
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                onClick={handleSignIn}
                sx={{
                  background: "#001E3C",
                  color: "#ffffff",
                  p: "2% 10%",
                  fontSize: { xs: "0.8em", md: "1.1em", lg: "1.2em" },
                  fontWeight: 600,
                  "&:hover": {
                    background: "#023569",
                    color: "#ffffff",
                  }
                }}
              >
                Sign up
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center", mt: "1%" }}>
              <Typography sx={{ fontSize: "0.8em", color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center" }}>
                already have an account
              </Typography>
              &nbsp;&nbsp;
              <Typography onClick={() => handleSignup()} sx={{ fontSize: "0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                Log in Now
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }


  const handleClick = async (Token1, phone) => {

    if (Token1) {
      var formdata = new FormData();
      formdata.append("mobile", User || phone);
      formdata.append("productId", data?._id);
      formdata.append("productName", data?.productName);
      formdata.append("count", value);
      formdata.append("companyName", companyName);
      formdata.append("Logo", Icon.bytes);
      formdata.append("Link", link);
      formdata.append("Description", description);
      var response = await postData("cart/add", formdata, true);
      if (response.result == true) {
        navigate('/newcart')
        func();
      }
    } else {
      setOpen(true)
    }
  };

  useEffect(() => {
    func();
  }, []);


  useEffect(() => {
    fetchProduct()
  }, [_id])


  const handleRemove = () => {
    if (value != 1) {
      setValue(value - 1)
    }
  }
  const handleAdd = () => {

    setValue(value + 1)

  }

  const descriptionStyle = {
    fontSize: 18,
    color: "#fff",
    textAlign: 'justify',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '100%', // Set the maximum width as needed
  };

  const sliceTo200Characters = (text) => {
    if (text.length <= 200) {
      return text;
    } else {
      return text.slice(0, 200) + "...";
    }
  }


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [_id])



  /////////////////////////////////////////////


  var navigate = useNavigate()
  const handleNagivate = () => {
    navigate('/newthemecard')
  }

  const classes2 = useStyles2()

  var settings3 = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: "true",
    slidesToShow: matches ? 1:matchesA?2 : 4,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: false,
    autoplaySpeed: 0,
  };

  var settings2 = {
    infinite: true,
    speed: 1000,
    dots: false,
    slidesToShow: matches ? 1: matchesA?2: 4,
    autospeed: 1,
    slidesToScroll: 4,
    arrows: false
  };

  var setting1 = {
    infinite: true,
    speed: 1000,
    dots: false,
    slidesToShow: matches ? 1 :matchesA?2: 3,
    slidesToScroll: matches ? 1 : 3,
    autoplay: "true",
    autospeed: 1,
    arrows: false,
  };

  var data11 = [{ picture: r1, name: 'Ankit Narwariya' },
  { picture: r2, name: 'Chinmay Sharma' },
  { picture: r3, name: 'Juned Solanki' },
  { picture: r4, name: 'Harshit Jain' },
  { picture: r1, name: 'Akshat Jain' },
  { picture: r2, name: 'Ankit Narwariya' },
  { picture: r3, name: 'Satyveer Pal' },
  ]
  const showReview = () => {
    return data11.map((item) => {
      return (<Grid sx={{ width: '100%' }}>
        <Grid sx={{ width: 320, padding: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000', flexDirection: 'column', background: '#fff', borderRadius: '10px' }}>
          <Grid>
            <img src={item.picture} ></img>
          </Grid>
          <Grid sx={{ fontSize: '24px', fontWeight: 700, lineHeight: '30px', marginTop: '2%' }}>
            {item.name}
          </Grid>
          <Grid><Rating style={{ marginLeft: 'auto', marginTop: '2%', display: 'flex' }}
            size="small"
            color="green"
            name="simple-controlled"
            value={5}
          /></Grid>
          <Grid sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '26px', marginTop: '2%', color: '#353535' }}>
            2 min ago
          </Grid>
          <Grid sx={{ fontSize: '18px', fontWeight: 500, lineHeight: '26px', marginTop: '2%', textAlign: 'center' }}>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
          </Grid>
        </Grid>
      </Grid>)
    })
  }



  var data12 = [card11,card22, card33,card44,card55,card33]
  const showProducts = () => {
    return data12.map((item) => {
      return (<Grid sx={{ display: 'flex', flexDirection: 'column', marginLeft: matches ? '6%' : '14%' }}>
        <Grid sx={{ width: matchesB ? '320px' : '357px', height: matchesB ? '245px' : '260px', display: 'flex', alignItems: 'center', border: '1px solid #fff', borderRadius: '10px', background: '#fff', padding: 2, flexDirection: 'column' }}>
          <Grid sx={{ marginLeft: 'auto' }}><img src={heart} width={25}></img></Grid>
          <Grid sx={{ width: '100%', marginTop: -6, marginLeft: 8 }}>
            <img src={item} width={250}></img>
          </Grid>
        </Grid>
        <Grid sx={{ width: matchesB ? '320px' : '357px', height: matchesB ? '120px' : '110px', marginTop: '1%' }}>
          <Grid sx={{ display: 'flex', width: '100%' }}>
            <Grid sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '26px', width: '60%' }}>Royal Black : DCH Google Review Card</Grid>
            <Grid sx={{ width: '40%' }}>
              <Rating style={{ marginLeft: 'auto', marginTop: '2%', display: 'flex' }}
                size="small"
                color="green"
                name="simple-controlled"
                value={5}
              />
            </Grid>
          </Grid>
          <Grid sx={{ display: 'flex', marginTop: '1%', alignItems: 'center' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
              <Grid sx={{ fontSize: '22px', fontWeight: 700, lineHeight: '26px', color: '#19B300' }}>₹ 599</Grid>
              <Grid sx={{ fontSize: '16px', fontWeight: 500, lineHeight: '26px', color: '#A39C00', marginTop: '-4%' }}><s>₹ 1499</s></Grid>
            </Grid>
            <Grid sx={{ marginLeft: 'auto' }}>
              <Button
                style={{
                  border: '1px solid #fff',
                  borderColor: '#fff',
                  width: matchesB ? '250px' : '271px',
                  height: '34px',
                  lineHeight: '36px',
                  color: "#fff",
                  marginLeft: '2%',
                  fontSize: "16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: '10px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      )
    })
  }


  const handleClickss = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleClickDiscription = () => {
    setOpenDrawer2(!openDrawer2);
  };
  var data2 = [card11, card22, card33, card44, card55];
  const showSlider = () => {
    return data2.map((item) => {
      return (
        <div style={{ cursor: "pointer" }}>
          <img
            src={item}
            style={{
              border: "2px solid #fff",
              width: matches ? 55 : 85,
              background: "#fff",
              borderRadius: "10px",
            }}
          ></img>
        </div>
      );
    });
  };


  const handleViewCard = () => {
    setView(true);
  };
  const handleCloseViewCard = () => {
    setView(false);
  };

  const ViewCard = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            width: matches ? "100%" : '80%',
            height: matches ? 'auto' : 270,
            borderRadius: 10,
            backgroundImage: "radial-gradient(#f5f6fa,#dfe6e9)",
          },
        }}
        open={view}
        onClose={handleCloseViewCard}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid sx={{ width: '100%', height: matches ? 'auto' : 260 }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#dfe6e9' }}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fff', background: '#f5f6fa' }}>
              <Grid> <img src={right} width={matches ? 20 : 30}></img></Grid>
              <Grid sx={{ fontSize: matches ? '15px' : '20px', fontWeight: 600, lineHeight: '36px', color: '#72B344', marginLeft: '2%', marginTop: '-.5%' }}>Added to your successfully</Grid>
              <Grid onClick={handleCloseViewCard}
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 16,
                  color: "inherit",
                  cursor: 'pointer'
                }}>
                <img src={close} width={matches ? 12 : 20}></img>
              </Grid>
            </Grid>
            <Grid sx={{ width: '100%', height: matches ? 'auto' : 210, padding: 1.8 }}>
              <Grid sx={{ display: 'flex' }}>
               
                <Grid sx={{ width: 200, height: matches ? 'auto' : 136 }}>
                  <Grid><img src={`${serverURL}/images/${data.images?.[0]}`} style={{ width: '70%' }}></img></Grid>
                </Grid>
                <Grid>
                  <Grid sx={{ fontSize: matches ? '15px' : '18px', fontWeight: 600, lineHeight: matches ? '18px' : '26px', letterSpacing: '-2.4%' }}>
                  {data?.productName}
                  </Grid>
                  <Grid sx={{ fontSize: matches ? '14px' : '18px', fontWeight: 600, lineHeight: matches ? '15px' : '36px', letterSpacing: '-2.4%' }}>
                    Qty: x{value}
                  </Grid>
                  <Grid sx={{ fontSize: matches ? '14px' : '18px', fontWeight: 600, lineHeight: matches ? '15px' : '36px', letterSpacing: '-2.4%', color: '#23F900' }}>
                  ₹ {data?.offerprice}
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ display: 'flex', marginTop: '1%', gap: 1 }}>
                <Button
                  style={{
                    border: '1px solid #000',
                    borderColor: '#dfe6e9',
                    height: matchesB ? 25 : '2.7vw',
                    color: "#fff",
                    fontSize: matchesB ? '12px' : "1.3vw",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '6px',
                    display: "flex",
                    background: '#485AFF',
                    alignItems: "center",
                    justifyContent: "center",
                  }} fullWidth>
                  Add More +
                </Button>

                 <Button
                 onClick={() => handleClick(Token)}
                    style={{
                    border: '1px solid #000',
                    borderColor: '#dfe6e9',
                    height: matchesB ? 25 : '2.7vw',
                    color: "#fff",
                    fontSize: matchesB ? '12px' : "1.3vw",
                    fontWeight: 600,
                    background: '#FF2626',
                    textTransform: "none",
                    borderRadius: '6px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }} fullWidth>
                  View Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Dialog>
    );
  };




  console.log('error')
  return (
    <Grid
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
      }}
    >
      <Grid>
        <NewHeader />
      </Grid>

      {loading ?
        <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center', py: 100, bgcolor: "white" }} >
          <Preloader />
        </Grid>
        :
        (show &&
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Montserrat",
              color: "#fff",
              flexDirection: "column",
              zIndex:50
            }}
          >
            <Grid
              sx={{
                width: "85%",
                height: "auto",
                marginTop: matchesA ? '1%' : "5%",
                display: "flex",
                flexDirection: matchesA ? 'column' : 'row',
              }}
            >
              <Grid
                sx={{
                  position: matchesA ? "-moz-initial" : "sticky", zIndex: '2', top: 100,
                  width: matchesA ? '100%' : "45%",
                  height:matchesA?'auto':550,
                  display:'flex',alignItems:'center',flexDirection:'column'
                }}
              >
              
                <Grid
                  sx={{
                    width: matches ? '90vw' : 550,
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    height: matches ? '70vw' : 360,
                    background: "#fff",
                    ml: 0,
                  }}
                >
                  <Slider asNavFor={nav2} arrows={false} ref={(slider1) => setNav1(slider1)}>

                    {data?.images?.map((item) => (

                      <Grid item xs={12} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                       marginLeft:'23%',
                       marginTop:'7%',
                       zIndex:50
                      }}>
                        <img src={`${serverURL}/images/${item}`} width={"50%"} />
                      </Grid>
                    ))}
                  </Slider>
                </Grid>
                <Grid>
                  <Divider
                    style={{
                      backgroundColor: "#bdc3c7",
                      width: matches ? '90vw' : 550,
                      marginTop: "4%",
                    }}
                  />
                </Grid>
                <Grid sx={{ marginTop: "4%", width:'70%',marginLeft:'3%' }}>
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={data?.images?.length == 2 ? 2 : data?.images?.length > 2 ? 3 : 1}
                    swipeToSlide={true}
                    arrows={false}
                    focusOnSelect={true}>
                    {data?.images?.map((item) => (
                      <Grid item xs={12} >
                        <img src={`${serverURL}/images/${item}`} width={"80%"} />
                      </Grid>
                    ))}
                  </Slider>
                </Grid>
                <Grid>
                  <Divider
                    style={{
                      height: "1px",
                      backgroundColor: "#bdc3c7",
                      width: matches ? '90vw' : 550,
                      marginTop: "4%",
                    }}
                  />
                </Grid>
              </Grid>

              <Grid
                sx={{
                  width: matchesA ? '100%' : "55%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: matchesA ? 'center' : 'normal',
                  alignItems: matchesA ? 'center' : 'normal'
                }}
              >
                <Grid
                  sx={{
                    fontSize:matches ? '20px' :"26px",
                    fontWeight: 700,
                    lineHeight: matches?'30px':"34px",
                    marginTop: matches ? '2%':matchesA?'5%' : '-1.5%'
                  }}
                >
                {data?.productName}
                </Grid>
                <Grid sx={{ display: "flex", gap: 1, marginTop: "2%", marginLeft: matchesB ? '-60%' : matches ? '-70%' : '' }}>
                  <Grid
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "26px",
                      color: "#19B300",
                    }}
                  >
                  ₹ {data?.offerprice}
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "26px",
                      color: "#A39C00",
                    }}
                  >
                    <s>₹ {data?.price}</s>
                  </Grid>
                </Grid>
                <Grid sx={{ display: "flex", marginTop: "3%",marginLeft:'-2%' }}>
                  <Grid
                    // onClick={handleNagivate}
                    style={{
                      border: "1px solid #fff",
                      borderColor: "#fff",
                      width: matches ? 155 : "13vw",
                      height: matches ? 35 : "2.5vw",
                      color: "#000",
                      fontSize: matchesB ? "12px" : "1vw",
                      fontWeight: 500,
                      marginLeft: "2%",
                      textTransform: "none",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 40,
                      background: "#fff",
                      
                    }}
                  >
                    <div onClick={() => handleRemove()} style={{ fontSize: matchesB ? "20px" : "22px", fontWeight: 600,cursor: 'pointer', }}>-</div>{" "}
                    <div style={{fontSize: matchesB ? "20px" : "16px", fontWeight: 600,}}>{value}</div>{" "}
                    <div onClick={() => handleAdd()} style={{fontSize: matchesB ? "20px" : "20px", fontWeight: 600,cursor: 'pointer' }}>+</div>
                  </Grid>
                  <Button
                    onClick={handleViewCard}
                    style={{
                      border: "1px solid #fff",
                      borderColor: "#fff",
                      width: matches ? 155 : "13vw",
                      height: matches ? 35 : "2.5vw",
                      color: "#fff",
                      fontSize: matchesB ? "12px" : "14px",
                      fontWeight: 500,
                      marginLeft: "2%",
                      textTransform: "none",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Add To Card
                  </Button>
                </Grid>

                <Grid
                  sx={{
                    marginTop: "5%",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    width: "100%",
                    height: "auto",
                    padding: 2,
                  }}
                >
                  <Grid
                    sx={{
                      height: 50,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                    >
                      Customize Your Card Now
                    </Grid>
                  </Grid>
                  <Grid sx={{ marginTop: "1%" }}>
                    <Grid 
                      sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                    >
                      Name
                    </Grid>
                    <Grid sx={{ marginTop: "-1%" }}>
                      <input
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                        type="text"
                        style={{
                          height: 40,
                          border: "1px solid #fff",
                          borderColor: "#fff",
                          borderRadius: "10px",
                          width: "100%",
                          fontSize: "16px",
                          background: "transparent",
                          color: "#fff",
                        }}
                        placeholder="Enter the name to be printed on your card"
                      ></input>
                    </Grid>
                  </Grid>
                  <Grid sx={{ marginTop: "2%" }}>
                    <Grid
                      sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                    >
                      Designation
                    </Grid>
                    <Grid sx={{ marginTop: "-1%" }}>
                      <input
                        value={description}
                        onChange={(e) => setDescrition(e.target.value)}
                        type="text"
                        style={{
                          height: 40,
                          border: "1px solid #fff",
                          borderColor: "#fff",
                          borderRadius: "10px",
                          width: "100%",
                          fontSize: "16px",
                          background: "transparent",
                          color: "#fff",
                        }}
                        placeholder="Enter your designation to be printed on your card"
                      ></input>
                    </Grid>
                  </Grid>
                  <Grid sx={{ marginTop: "2%", marginBottom: "5%" }}>
                    <Grid
                      sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                    >
                      Mobile Number
                    </Grid>
                    <Grid sx={{ marginTop: "-1%" }}>
                      <input
                        type="text"
                        style={{
                          height: 40,
                          border: "1px solid #fff",
                          borderColor: "#fff",
                          borderRadius: "10px",
                          width: "100%",
                          fontSize: "16px",
                          background: "transparent",
                          color: "#fff",
                        }}
                        placeholder="Enter Your number"
                      ></input>
                    </Grid>
                  </Grid>
                  <Grid sx={{ display: "flex", marginTop: "3%", flexDirection: matchesB ? 'column' : "row" }}>
                    <Grid>
                      <Grid
                        sx={{
                          fontSize: "18px",
                          fontWeight: 600,
                          lineHeight: "26px",
                        }}
                      >
                        Colour
                      </Grid>
                      <Grid
                        sx={{
                          marginTop: "-1%",
                          display: "flex",
                          marginLeft: "-2.5%",
                        }}
                      >
                        <Radio
                          value="a"
                          size="large"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                          sx={{ marginLeft: "1%" }}
                          style={{ color: "green" }}
                        />
                        <Radio
                          value="a"
                          size="large"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                          sx={{ marginLeft: "1%" }}
                          style={{ color: "red" }}
                        />
                        <Radio
                          value="a"
                          size="large"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                          sx={{ marginLeft: "1%" }}
                          style={{ color: "#22a6b3" }}
                        />
                        <Radio
                          value="a"
                          size="large"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                          sx={{ marginLeft: "1%" }}
                          style={{ color: "#4834d4" }}
                        />
                        <Radio
                          value="a"
                          size="large"
                          name="radio-buttons"
                          inputProps={{ "aria-label": "A" }}
                          sx={{ marginLeft: "1%" }}
                          style={{ color: "#fff" }}
                        />
                      </Grid>
                    </Grid>
                    <Grid sx={{ marginLeft: matches?'':"auto" }}>
                      <Grid>
                        <Grid
                          sx={{
                            fontSize: matches ? '10px' : "18px",
                            fontWeight: 600,
                            lineHeight: "26px",
                          }}
                        >
                          Upload Logo
                        </Grid>

                        <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                        onChange={handleIcon}
                      />
                      <Button
                         component="span"
                          style={{
                            border: "1px solid #fff",
                            borderColor: "#fff",
                            width: matches ? 100 : "10vw",
                            height: matches ? 30 : "2.3vw",
                            color: "#fff",
                            fontSize: matchesB ? "12px" : "1vw",
                            fontWeight: 500,
                            marginLeft: "2%",
                            textTransform: "none",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 10,
                            marginTop: "6%",
                          }}
                        >
                          <div>
                            <img
                              src={upload}
                              width={18}
                              style={{ marginTop: "20%" }}
                            ></img>
                          </div>
                          <div style={{ fontSize: matches ? '8px' : "12px", fontWeight: 400 }}>
                            Choose file
                          </div>
                        </Button>
                    </label>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid sx={{ marginTop: "2%" }}>
                  <Button
                    fullWidth
                    style={{
                      border: "1px solid #bdc3c7",
                      borderColor: "#bdc3c7",
                      background: '#fff',
                      height:matches?30: "2.7vw",
                      color: "#000",
                      fontSize:matches?'12px':"1.1vw",
                      width:matches?150:'',
                      fontWeight: 500,
                      marginTop: '3%',
                      textTransform: "none",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Buy Now
                  </Button>
                </Grid>
                <Grid
                  sx={{
                    width: "100%",
                    height: 40,
                    marginTop: "3%",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    padding: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: matches ? '12px' : "20px",
                      fontWeight: 500,
                      lineHeight: "26px",
                    }}
                  >
                    Checkout For Bulk Orders
                  </div>
                  <div
                    style={{
                      border: "1px solid #fff",
                      background: "#fff",
                      color: "#000",
                      fontSize: "15px",
                      fontWeight: 600,
                      width: 110,
                      borderRadius: "5px",
                      height: 28,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Contact Us
                  </div>
                </Grid>

                <Grid>
                  <Divider
                    style={{
                      height: "1px",
                      backgroundColor: "#bdc3c7",
                      width: "100%",
                      marginTop: "6%",
                    }}
                  />
                </Grid>

                <Grid sx={{ marginTop: "4%", width: "100%" }}>
                  <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid
                      sx={{ fontSize: matches ? '22px':"26px", fontWeight: 700, lineHeight: "26px" }}
                    >
                      Features :
                    </Grid>
                    <Grid
                      onClick={handleClickss}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        background: "#fff",
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {openDrawer ? (
                        <ExpandLess
                          color="#000"
                          style={{ color: "#000" }}
                          fontSize="medium"
                        />
                      ) : (
                        <ExpandMore
                          color="#000"
                          style={{ color: "#000" }}
                          fontSize="medium"
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid sx={{ width: "100%", display: "flex", marginTop: "4%" }}>
                    <Grid
                      sx={{
                        width: "50%",
                        height: "auto",
                        marginTop: "5%",
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Grid
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: 60,
                          background: "#353535",
                        }}
                      ></Grid>
                      <Grid
                        sx={{
                          fontSize:  matches ? '18px' :"22px",
                          fontWeight: 700,
                          lineHeight: matches ? '30px' : "40px",
                          textAlign: "center",
                          marginTop: "3%",
                        }}
                      >
                        Boost the number of reviews.
                      </Grid>

                      <Grid
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: 60,
                          background: "#353535",
                          marginTop: "12%",
                        }}
                      ></Grid>
                      <Grid
                        sx={{
                          fontSize:  matches ? '18px' :"22px",
                          fontWeight: 700,
                          lineHeight: matches ? '30px' : "40px",
                          textAlign: "center",
                          marginTop: "3%",
                        }}
                      >
                        Boost the number of reviews.
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        width: "50%",
                        height: "auto",
                        marginTop: "5%",
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Grid
                        sx={{
                          fontSize:  matches ? '18px' :"22px",
                          fontWeight: 700,
                          lineHeight: matches ? '30px' : "40px",
                          textAlign: "center",
                        }}
                      >
                        Boost the number of reviews.
                      </Grid>
                      <Grid
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: 60,
                          background: "#353535",
                          marginTop: "3%",
                        }}
                      ></Grid>

                      <Grid
                        sx={{
                          fontSize:  matches ? '18px' :"22px",
                          fontWeight: 700,
                          lineHeight: matches ? '30px' : "40px",
                          textAlign: "center",
                          marginTop: "12%",
                        }}
                      >
                        Boost the number of reviews.
                      </Grid>
                      <Grid
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: 60,
                          background: "#353535",
                        }}
                      ></Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Divider
                    style={{
                      backgroundColor: "#bdc3c7",
                      width: "100%",
                      marginTop: "3%",
                    }}
                  />
                </Grid>

                <Grid sx={{ marginTop: "6%", width: "100%" }}>
                  <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid
                      sx={{ fontSize: "26px", fontWeight: 700, lineHeight: "26px" }}
                    >
                      Description
                    </Grid>
                    <Grid
                      onClick={handleClickDiscription}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        background: "#fff",
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {openDrawer2 ? (
                        <ExpandLess
                          color="#000"
                          style={{ color: "#000" }}
                          fontSize="medium"
                        />
                      ) : (
                        <ExpandMore
                          color="#000"
                          style={{ color: "#000" }}
                          fontSize="medium"
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    sx={{
                      marginTop: "4%",
                      width: "100%",
                      maxHeight: matches ? '300px' : '450px',
                      border: "1px solid #fff",
                      borderRadius: "10px",
                      padding: 3,
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "30px",
                      letterSpacing: "-2%",
                      overflowY: 'scroll',
                      scrollbarWidth: 'none'
                    }}
                  >
                    DISCOVER OUR TAG FOR GOOGLE REVIEWS. Today, customer
                    decision-making is based on Google reviews. With our smart
                    Gooogle Review Card you will get more and better reviews of your
                    business or company easily and quickly. How does it work?
                    1.Customers scan the Card or use NFC (NFC works like mobile
                    payments). 2.The link will take them directly to the content
                    you've linked in the settings. -How to set up? OOnly 2 minutes
                    SetUp Process 1.Scan the QR or use NFC. 2.Enter your email
                    address and tap "OK". 3.You will receive a message/maiil to
                    validate your account. 4.You will access our website, where you
                    will see your tag. Tap "Setup". 5.Enter the link to your
                    content. Remember that you can change it as many times as you
                    want from the DCH | DIGITAL CARD HUB platform. Do not stick on
                    metal surfaces. NFC chip does not work. We do not ask for bank
                    details to activate it. Or you can buy a new one and enjoy
                    another year of free service from our platform. It is
                    contactless, secure and direct.
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              sx={{
                width: "94%",
                height: 'auto',
                marginTop: "10%",
                display: "flex",
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Grid sx={{ fontSize: matchesB ? '24px' : '52px', fontWeight: 700, lineHeight: matchesB ? '30px' : '26px' }}>How to use me ?</Grid>
             <Grid sx={{width:'100%',marginTop:'3%'}}>
                <img src={howtouseimage} style={{width:'100%',marginLeft:'-4%'}}></img>
              </Grid>
            </Grid>
          </Grid>)}



      <Grid
        sx={{
          width: "99%",
          height: 'auto',
          marginTop: "5%",
          display: "flex",
          alignItems: 'center',
          flexDirection: 'column',
          color: '#fff'
        }}>
        <Grid sx={{ fontSize: matches ? '24px' : '52px', fontWeight: 700, lineHeight: matches ? '35px' : '66px', width: matches ? '80%' : '70%', textAlign: 'center' }}>Bundle up your purchase And get great offers</Grid>
        <Grid sx={{ width: '100%', marginTop: '5%' }}>
          <Slider {...setting1}>
            {showProducts()}
          </Slider>
        </Grid>
      </Grid>



      <Grid sx={{ width: '100%', height: matches ? 'auto' : 800, display: 'flex', alignItems: 'center', flexDirection: "column", color: '#fff', marginTop: matches ? '5%' : '7%', justifyContent: 'center' }}>
        <Grid sx={{ fontSize: matches ? '24px' : '52px', fontWeight: 600, lineHeight: matches ? '30px' : '52px', letterSpacing: '-2.4%', textAlign: matches ? 'center' : '', width: matchesB ? '80%' : '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          OUR TOP PROFESSIONALS
        </Grid>
        <Grid sx={{ fontSize: matches ? '16px' : '22px', fontWeight: 400, lineHeight: matches ? '24px' : '46px', letterSpacing: '2%', marginTop: '1%', textAlign: matches ? 'center' : '', width: matchesB ? '85%' : '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          They are our reviews with happy user
        </Grid>
        <Grid sx={{ marginTop: '5%', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <Grid style={{ width: '100%' }}>
            <Slider {...settings2}>
              <Grid className={classes2.imageContainer} sx={{ position: 'relative', cursor: 'pointer', marginLeft: matchesB ? '2.5%' : '' }}>
                <img src={photo4} className={classes2.animatedImage} style={{ zIndex: 10 }}></img>
                <Grid>
                  <img src={blur11} className={classes2.animatedImage4} style={{ zIndex: 50, marginTop: '-20%' }}></img>
                  <Grid className={classes2.animatedImage2} sx={{ color: '#0054B6', fontSize: '24px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-16%', marginLeft: '1%' }}>
                    Chinmay Sharma
                  </Grid>
                  <Grid className={classes2.animatedImage3} sx={{ color: '#022D60', fontSize: '14px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-1.4%', marginLeft: '1%' }}>
                    Ui/Ux designer at IBuzz Tech
                  </Grid>
                </Grid>
              </Grid>

              <Grid className={classes2.imageContainer} sx={{ position: 'relative', cursor: 'pointer', marginLeft: matchesB ? '2.5%' : '' }}>
                <img src={photo2} className={classes2.animatedImage} style={{ zIndex: 10 }}></img>
                <Grid>
                  <img src={blur11} className={classes2.animatedImage4} style={{ zIndex: 50, marginTop: '-20%' }}></img>
                  <Grid className={classes2.animatedImage2} sx={{ color: '#0054B6', fontSize: '24px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-16%', marginLeft: '1%' }}>
                    Sonam Gupta
                  </Grid>
                  <Grid className={classes2.animatedImage3} sx={{ color: '#022D60', fontSize: '14px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-1.4%', marginLeft: '1%' }}>
                    HR at IBuzz Tech
                  </Grid>
                </Grid>
              </Grid>


              <Grid className={classes2.imageContainer} sx={{ position: 'relative', cursor: 'pointer', marginLeft: matchesB ? '2.5%' : '' }}>
                <img src={photo3} className={classes2.animatedImage} style={{ zIndex: 10 }}></img>
                <Grid>
                  <img src={blur11} className={classes2.animatedImage4} style={{ zIndex: 50, marginTop: '-20%' }}></img>
                  <Grid className={classes2.animatedImage2} sx={{ color: '#0054B6', fontSize: '24px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-16%', marginLeft: '1%' }}>
                    Ankit Narwariya
                  </Grid>
                  <Grid className={classes2.animatedImage3} sx={{ color: '#022D60', fontSize: '14px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-1.4%', marginLeft: '1%' }}>
                    Front-end Developer at IBuzz Tech
                  </Grid>
                </Grid>
              </Grid>


              <Grid className={classes2.imageContainer} sx={{ position: 'relative', cursor: 'pointer', marginLeft: matchesB ? '2.5%' : '' }}>
                <img src={photo4} className={classes2.animatedImage} style={{ zIndex: 10 }}></img>
                <Grid>
                  <img src={blur11} className={classes2.animatedImage4} style={{ zIndex: 50, marginTop: '-20%' }}></img>
                  <Grid className={classes2.animatedImage2} sx={{ color: '#0054B6', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-16%', marginLeft: '1%' }}>
                    Junaid Solanki
                  </Grid>
                  <Grid className={classes2.animatedImage3} sx={{ color: '#022D60', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-1.4%', marginLeft: '1%' }}>
                    Graphic designer at IBuzz Tech
                  </Grid>
                </Grid>
              </Grid>


              <Grid className={classes2.imageContainer} sx={{ position: 'relative', cursor: 'pointer', marginLeft: matchesB ? '2.5%' : '' }}>
                <img src={photo} className={classes2.animatedImage} style={{ zIndex: 10 }}></img>
                <Grid>
                  <img src={blur11} className={classes2.animatedImage4} style={{ zIndex: 50, marginTop: '-20%' }}></img>
                  <Grid className={classes2.animatedImage2} sx={{ color: '#0054B6', fontSize: '24px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-16%', marginLeft: '1%' }}>
                    Chinmay Sharma
                  </Grid>
                  <Grid className={classes2.animatedImage3} sx={{ color: '#022D60', fontSize: '14px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-1.4%', marginLeft: '1%' }}>
                    Ui/Ux designer at IBuzz Tech
                  </Grid>
                </Grid>
              </Grid>

              <Grid className={classes2.imageContainer} sx={{ position: 'relative', cursor: 'pointer', marginLeft: matchesB ? '2.5%' : '' }}>
                <img src={photo} className={classes2.animatedImage} style={{ zIndex: 10 }}></img>
                <Grid>
                  <img src={blur11} className={classes2.animatedImage4} style={{ zIndex: 50, marginTop: '-20%' }}></img>
                  <Grid className={classes2.animatedImage2} sx={{ color: '#0054B6', fontSize: '24px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-16%', marginLeft: '1%' }}>
                    Chinmay Sharma
                  </Grid>
                  <Grid className={classes2.animatedImage3} sx={{ color: '#022D60', fontSize: '14px', fontWeight: 700, lineHeight: '28px', zIndex: 60, marginTop: '-1.4%', marginLeft: '1%' }}>
                    Ui/Ux designer at IBuzz Tech
                  </Grid>
                </Grid>
              </Grid>
            </Slider>
          </Grid>
        </Grid>
      </Grid>


      <Grid sx={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'center', flexDirection: "column", color: '#fff', justifyContent: 'center', marginTop: matches ? '8%' : '6%' }}>
        <Grid sx={{ fontSize: matches ? '24px' : '52px', fontWeight: 600, lineHeight: matches ? '30px' : '52px', letterSpacing: '-2.4%', textAlign: matches ? 'center' : '', width: matchesB ? '80%' : '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Customer Reviews
        </Grid>
        <Grid sx={{ width: '100%', marginTop: '6%' }}>
          <Slider {...settings3}>
            {showReview()}
          </Slider>
        </Grid>
      </Grid>

      <Grid sx={{ marginTop: '14%' }}>
        <Newfooter />
      </Grid>
      {ViewCard()}
      {LoginComponent()}
      {SignUpComponent()}
      {ChangePasswordComponent()}
    </Grid>
  );
}
