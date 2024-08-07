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

function SwipeableEdgeDrawer(props) {
    
    const { windows } = props;
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const location = useLocation();
    let goahead = (location?.state?.goahead !== undefined && location?.state?.goahead !== null) ? location.state.goahead : true;

    const [open, setOpen] = React.useState(false);
    const [phoneNo, setPhoneNo] = React.useState("");
    const [verified, setVerified] = React.useState()
    const [otp, setOtp] = React.useState()

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
    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                    },
                }}
            />

            <Button onClick={toggleDrawer(true)} sx={{
                fontSize: 25, borderColor: '#171717', borderRadius: 0, borderColor: "#000",
                width: 200,
                height: 50,
                color: "#fff",
                fontSize: "22px",
                fontWeight: 500,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: '#171717', fontFamily: 'poppins', color: "#fff", "&:hover": { backgroundColor: '#171717' }
            }}><Typography class='font'>Get Started</Typography></Button>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={0}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{ borderRadius: 4, }}
            >
                <StyledBox
                    sx={{
                        position: "fixed",
                        bottom: -35,
                        width: "100%",
                        height: "40%",

                        right: 0,
                        left: 0,
                        background: "radial-gradient( #414141,#171717)"
                    }}
                >
                    <Grid container spacing={2} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Grid item xs={12} >
                            <Typography sx={{
                                fontSize: { xs: "1.3em", md: "2.6em", lg: "2.4em" },
                                fontWeight: 700,
                                fontFamily: "OXANIUM",
                                color: "#fff",
                                letterSpacing: "-0.2px",
                                mb: "2.5vh",
                                textAlign: "center",
                                marginTop: '2%'

                            }}>
                                Login / Signup
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField label="Whatsapp Number" type='tel' fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
                        </Grid>
                        <Grid item xs={3} sx={{ display: "flex" }}>
                            <Button
                                fullWidth
                                onClick={handleopenotpdailog}
                                sx={{ fontSize: 25, backgroundColor: '#F3B419', color: "black", "&:hover": { backgroundColor: '#F3B419' } }}>
                                <Typography class='font'>
                                    Get Otp
                                </Typography>
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
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}


SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    windows: PropTypes.func,
};


export default SwipeableEdgeDrawer;