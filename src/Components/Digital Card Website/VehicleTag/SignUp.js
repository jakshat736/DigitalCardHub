import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { postData } from '../../Services/NodeServices';
import logo from "../Digital Card Assets/IndiaBuzz.png";
import bg from "../Digital Card Assets/signup_img.png";
import OtpComponent from '../Digital Card User Interface/ReviewTag/OtpComponent';
import OtpGenerator from '../Digital Card User Interface/ReviewTag/OtpGenerator';
import Navbar from '../Digital Card User Interface/ReviewTag/UserComponents/Navbar';
import './sign.css';
export default function VehicleSignup() {
    const theme = useTheme();
    const location = useLocation();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
    const tagId = location.state.tagId

    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState('');
    const isError = false;
    const [openOtp, setOpenOtp] = useState(false);
    const [otp, setOtp] = useState()
    const [verified, setVerified] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setPassword(inputValue);
    };





    const handleOtp = (value) => {
        if (value.length === 4) {
            if (otp === value) {
                setVerified(true)
            } else {
                setVerified(false)
            }
        }
    }

    const handleSubmit = async () => {
        if (isError === false && verified === true) {

            var formData = new FormData()
            formData.append('name', fullName)
            formData.append('email', emailId.toLowerCase())
            formData.append('phone', phoneNo)
            formData.append('password', password)


            var result = await postData('customerLogin/customerLogin', formData, true)
            if (result.status === 'true') {
                window.localStorage.clear()
                window.localStorage.setItem("userId", result.data._id)
                window.localStorage.setItem("UserNumber", result.data.phone)
                window.localStorage.setItem("UserEmail", emailId.toLowerCase())

                var formData1 = new FormData()
                formData1.append('tagId', tagId)
                formData1.append('name', fullName)
                formData1.append('email', emailId.toLowerCase())
                formData1.append('phone', phoneNo)
                formData1.append('password', password)


                var result1 = await postData('vehicle/customerLogin', formData1, true)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registered Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.localStorage.setItem("User", true)
                window.localStorage.removeItem('data')
                window.localStorage.setItem("data", JSON.stringify(result1.data))
                navigate('/userdashboard')

            }
            else if (result.status === 'exist') {
                Swal.fire({
                    title: 'You already have an Account.Do you want to make a new registration',
                    showDenyButton: true,

                    confirmButtonText: 'Log In',
                    denyButtonText: `Sign Up`,
                    denyButtonColor: `green`,
                    confirmButtonColor: "#001E3C"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/vehiclelogin', { state: { id: tagId } })
                    } else if (result.isDenied) {

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


    const handleopenotpdailog = async () => {

        if (phoneNo !== '') {
            var otpval = OtpGenerator()

            setOtp(otpval)

            const apiUrl = `https://soft7.in/api/send?number=91${phoneNo}&type=text&message=Your Otp For Vehicle Tag By Digital Card Hub - ${otpval}&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41`;
            await postData('otp/api', { url: apiUrl })

        } else {
            Swal.fire({
                text: "Enter the Number First",
                timer: 1000
            })
        }
    }
    const handleotpdailogClose = () => {
        setOpenOtp(false)
    }

    const handlePhoneNoChange = (event) => {
        // Remove non-numeric characters from the input
        const numericValue = event.target.value.replace(/\D/g, '');

        // Limit the input to 10 digits
        const limitedValue = numericValue.slice(0, 10);

        // Update the state with the limited numeric value
        setPhoneNo(limitedValue);
    };

    const ShowOtpDailog = () => {
        return (
            <div >

                <Dialog
                    open={openOtp}
                    keepMounted
                    onClose={handleotpdailogClose}
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle >
                        <div style={{ color: "#d24a61" }}>
                            Confirm your Mail Id
                        </div>
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        <DialogContentText >
                            <div >
                                Enter the code we have sent via Mail to {emailId}
                            </div>
                        </DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <OtpComponent value="" onChange={(value) => { handleSubmit(value) }} />
                                {/* <TextField value={enteredOtp} onChange={(event)=>chkOtp(event)}/> */}
                            </Grid>
                            <Grid item xs={12}>
                                <div >
                                    Haven't recieved a code? More Options
                                </div>
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions>
                        <Button style={{ color: '#d24a61' }} onClick={handleotpdailogClose}>Close</Button>

                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    return (
        <Box sx={{ background: "#001E3C", width: "100vw", height: "100vh", overflowX: "hidden" }}>
            <Navbar />
            <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "5.5%", pt: "3%" }}>
                <Box sx={{ background: "#ffffff", p: 0, width: { xs: "100vw", md: "80vw" }, borderRadius: { xs: "4%", md: "0%" }, mt: { xs: "22%", lg: "0%" } }}>
                    <Grid container spacing={0}>
                        <Grid item lg={7} sx={{ display: { xs: "none", md: "none", lg: "flex" }, flexDirection: "column", background: "#D4E9FF", pr: "2%" }}>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                mt: "2%"
                            }}>
                                <img alt="img" src={logo} width={"20%"} />
                                <Typography sx={{ color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "left" }}>
                                    We've got tips and tools to keep your business
                                </Typography>
                                <Typography sx={{ color: "#696969", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "left" }}>
                                    growing while you're out of the office.
                                </Typography>
                            </Box>
                            <img alt="img" src={bg} width={"70%"} />
                        </Grid>
                        <Grid item xs={12} lg={5} sx={{ p: { xs: "14% 5%", lg: "3% 5%" } }}>
                            <img alt="img" src={logo} width={"20%"} style={{ display: mobile ? "block" : medium ? "block" : "none", margin: "auto" }} />
                            <Typography sx={{
                                fontSize: { xs: "1.5em", md: "2.6em", lg: "2.1em" },
                                fontWeight: 700,
                                fontFamily: "OXANIUM",
                                color: "#000000",
                                letterSpacing: "-0.2px",
                                mb: "2.5vh",
                                textAlign: "center"
                            }}>
                                Sign Up Here
                            </Typography>
                            <Grid container spacing={2} sx={{ p: "8% 5%" }}>
                                <Grid item xs={12}>
                                    <TextField label="Full Name" fullWidth value={fullName} onChange={(event) => setFullName(event.target.value)} />
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                +91
                                            </InputAdornment>
                                        ),
                                    }} label="Whatsapp Number" fullWidth value={phoneNo} onChange={handlePhoneNoChange} />
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
                                    OTP not received ? <div style={{ cursor: 'pointer' }} onClick={handleopenotpdailog}>Resend</div>
                                </Grid>
                                <Grid item xs={12}>
                                    {verified === true ? "Verified" : verified === false ? "Not Verified" : ""}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Email" fullWidth value={emailId} onChange={(event) => setEmailId(event.target.value)} />
                                </Grid>




                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                        InputProps={{ // <-- This is where the toggle button is added.
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
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
                                        onClick={handleSubmit}
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
                                    <Typography onClick={() => navigate("/digitalcardlogin")} sx={{ fontSize: "0.8em", color: "#001E3C", fontFamily: "OXANIUM", fontWeight: 600, textAlign: "center", '&:hover': { color: "red" }, cursor: "pointer" }}>
                                        Log in Now
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            {ShowOtpDailog()}
        </Box>
    )
}
