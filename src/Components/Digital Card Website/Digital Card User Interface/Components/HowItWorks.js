import { Box, Typography, useMediaQuery,useTheme } from '@mui/material'
import React, { useEffect } from 'react';
import Rocket from "../../Digital Card Assets/rocket.png";
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function HowItWorks() {
        const theme = useTheme();
        const mobile = useMediaQuery(theme.breakpoints.down("sm"));
        const medium = useMediaQuery(theme.breakpoints.down(1100));
        useEffect(()=>{
                Aos.init()
        },[])
        return (
                <Box
                        sx={{
                                background: "transparent",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",

                        }}>
                        <Typography
                                sx={{
                                        fontSize:"3.8em",
                                        fontWeight: 700,
                                        fontFamily: "OXANIUM",
                                        color: "#FFFFFF",
                                        letterSpacing: "-0.2px",
                                        mt: { xs: 0, md: "3%" },
                                        textAlign: "left",
                                        ml: "12%",
                                        display:mobile?"none":medium?"none":"flex"
                                }}
                                >
                                How It Works?
                        </Typography>
                        <Typography
                                sx={{
                                        display:mobile?"block":medium?"block":"none",
                                        fontSize: medium?"3em":"2.5em",
                                        fontWeight: 700,
                                        fontFamily: "OXANIUM",
                                        color: "#FFFFFF",
                                        letterSpacing: "-0.2px",
                                        mt: { xs: 0, md: "3%" },
                                        textAlign: "left",
                                        ml: "12%",
                                        m:"auto",
                                        mb:"7vh"
                                }}
                        >
                                How It Works?
                        </Typography>
                        <Box sx={{display:mobile?"none":medium?"none":"flex",justifyContent:"center",alignItems:"center"}}  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                                <img src={Rocket} />
                        </Box>
                        <Box sx={{display:mobile?"block":medium?"block":"none",mb:"6.9vh"}}  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                                <img src={Rocket} width={medium?"90%":"100%"} />
                        </Box>
                </Box>
        )
}
