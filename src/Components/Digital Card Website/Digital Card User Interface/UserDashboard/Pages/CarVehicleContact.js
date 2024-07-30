import {  Button, Divider, FormControlLabel, Grid, Paper, Radio } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import Box from "../../../MenuUpdate/administrator/Box";
import car from "../../../Digital Card Assets/animation1.gif"
import * as React from 'react';
import Switch from '@mui/material/Switch';
import bike from "../../../Digital Card Assets/biked.png"
import whatapp from "../../../Digital Card Assets/whatsappm.png"
import arrow from "../../../Digital Card Assets/arrowd.png"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
export default function CarVehicleContact() 
{  

    const [openDrawer, setOpenDrawer] = useState(false);
    const [hide, setHide] = useState(false);

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [Buttons, setButtons] = useState(true);
    const [Buttons1, setButtons1] = useState(false);
    const [Buttons2, setButtons2] = useState(false);
    const [Buttons3, setButtons3] = useState(false);
    const [Buttons4, setButtons4] = useState(false);

    const [Buttons5, setButtons5] = useState(true);
    const [Buttons6, setButtons6] = useState(false);

    const [table, setTable] = useState(true);
    const [pick, setPick] = useState(false);
    const [delivery, setDelivery] = useState(false);

    const handleButton = () => {
        setButtons(true);
        setButtons1(false);
        setButtons2(false);
        setButtons3(false);
        setButtons4(false);
      };
    
      const handleButton1 = () => {
        setButtons(false);
        setButtons1(true);
        setButtons2(false);
        setButtons3(false);
        setButtons4(false);
      };
    
      const handleButton2 = () => {
        setButtons(false);
        setButtons1(false);
        setButtons2(true);
        setButtons3(false)
        setButtons4(false);;
      };

      const handleButton3 = () => {
        setButtons(false);
        setButtons1(false);
        setButtons2(false);
        setButtons3(true);
        setButtons4(false);
      };

      const handleButton4 = () => {
        setButtons(false);
        setButtons1(false);
        setButtons2(false);
        setButtons3(false);
        setButtons4(true);
      };


      const handleButton5 = () => {
        setButtons5(true);
        setButtons6(false);
      };


      const handleButton6 = () => {
        setButtons5(false);
        setButtons6(true);
      };

    const handleTage = () => {
        setTable(true);
        setPick(false);
        setDelivery(false);
      };
    
      const handleMore = () => {
        setTable(false);
        setPick(true);
        setDelivery(false);
      };
    
      const handlePro = () => {
        setTable(false);
        setPick(false);
        setDelivery(true);
      };

      const handleClick = () => {
        setOpenDrawer(!openDrawer);
        setHide(!hide)
    }

  return (
    <Grid
      style={{
        backgroundColor: "#2d3436",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column'
      }}
    >
        <Navbar/>
      <Grid
        container
        sx={{
          width: { xs: "100vw", sm: "70%", md: "37%" },
          height: "100%",
          background:'#000',
          position: "relative",
          fontFamily:'Montserrat',
          color:'#fff',
        }}
      >
        <Grid item xs={12}>
          <Grid
            sx={{
              padding: 1.8,
              height: "auto",
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'column',
             
            }}>
                <Grid sx={{fontSize:'22px',fontWeight:600,marginTop:'2.5%'}}>Contact Vehicle owner</Grid>
                <Grid sx={{width:'100%',borderRadius:'10px',height:'auto',display:'flex',
              alignItems:'center',
              flexDirection:'column',
              marginTop:'1%',
              color:'#000',
              justifyContent:'center',padding:1.4,background:'#E6E6E6'}}>
                <Grid sx={{fontSize:'24px',fontWeight:700}}>Manage Tag</Grid>
                <Grid>
                <img src={car} width={120}></img>
                </Grid>
                <Grid sx={{fontSize:'24px',fontWeight:600,marginTop:'1.5%'}}>Suzuki alto-800</Grid>
                <Grid sx={{fontSize:'20px',fontWeight:700,marginTop:'1%'}}>
                   <span>#MP07CH</span><span style={{color:'#e67e22'}}>6617</span>
                   </Grid>
                </Grid>
                <Grid sx={{fontSize:'14px',fontWeight:400,marginTop:'1.5%'}}>Please select the reason why do you want to connect to owner.</Grid>
       </Grid>
       </Grid>
       <Grid item xs={12} sx={{ padding: 1.8,width:'100%'}}>
       <Divider
              style={{
                background:'#fff',
                marginTop:'-2%'
              }}
            />
          <Grid
            sx={{
              height: "auto",
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'column',
              marginTop:'6%'
            }}>
       <Button
        onClick={handleButton}
              style={{
                background: Buttons?'#fff':"#000",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                color: Buttons?'#000':"#fff",
                fontWeight: 400,
                width: "100%",
                height: "52px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                borderRadius:'10px',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "flex-start",
                gap:10
              }}
            ><Icon icon="mdi:car-parking-lights"  style={{fontSize:'22px',color:Buttons?'#000':'#fff',marginLeft:'3%'}} />
             The lights of this car is on.
             <FormControlLabel value="female"  control={<Radio  defaultValue="female"  style={{color:Buttons?'#FF4040':'#fff'}}/>} style={{marginLeft:'auto'}} />
            </Button>


            <Button
             onClick={handleButton1}
              style={{
                background: Buttons1?'#fff':"#000",
                color: Buttons1?'#000':"#fff",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                fontWeight: 400,
                width: "100%",
                height: "52px",
                fontSize: "16px",
                marginTop:'2%',
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                borderRadius:'10px',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "flex-start",
                gap:10
              }}
            ><Icon icon="bi:sign-no-parking"  style={{fontSize:'22px',color:Buttons1?'#000':'#fff',marginLeft:'3%'}} />
            There is a baby or pet in car.
             <FormControlLabel value="female" control={<Radio  style={{color:Buttons1?'#FF4040':'#fff'}}/>} style={{marginLeft:'auto'}} />
            </Button>


            <Button
             onClick={handleButton2}
              style={{
                background:Buttons2?'#fff':"#000",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                color: Buttons2?'#000':"#fff",
                fontWeight: 400,
                width: "100%",
                height: "52px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                borderRadius:'10px',
                marginTop:'2%',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "flex-start",
                gap:10
              }}
            ><Icon icon="heroicons:key-solid"  style={{fontSize:'22px',color:Buttons2?'#000':'#fff',marginLeft:'3%'}} />
             The window or car is open.
              <FormControlLabel value="female" control={<Radio style={{color:Buttons2?'#FF4040':'#fff'}}/>} style={{marginLeft:'auto'}} />
            </Button>


            <Button
            onClick={handleButton3}
              style={{
                background: Buttons3?'#fff':"#000",
                color: Buttons3?'#000':"#fff",
                fontWeight: 400,
                width: "100%",
                height: "52px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                display: "flex",
                marginTop:'2%',
                borderRadius:'10px',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "flex-start",
                gap:10
              }}
            ><Icon icon="mdi:tow-truck"  style={{fontSize:'22px',color:Buttons3?'#000':'#fff',marginLeft:'3%'}} />
              Something wrong with car.
             <FormControlLabel value="female" control={<Radio  style={{color:Buttons3?'#FF4040':'#fff'}}/>} style={{marginLeft:'auto'}} />
            </Button>

            <Button
            onClick={handleButton4}
              style={{
                background: Buttons4?'#fff':"#000",
                color: Buttons4?'#000':"#fff",
                fontWeight: 400,
                width: "100%",
                height: "52px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                display: "flex",
                marginTop:'2%',
                borderRadius:'10px',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "flex-start",
                gap:10
              }}
            ><Icon  icon="material-symbols:emergency-home-rounded" style={{fontSize:'22px',color:Buttons4?'#000':'#fff',marginLeft:'3%'}} />
              Something wrong with car.
             <FormControlLabel value="female" control={<Radio  style={{color:Buttons4?'#FF4040':'#fff'}}/>} style={{marginLeft:'auto'}} />
            </Button>

                </Grid>
                </Grid>
                <Grid item xs={12} sx={{ padding: 1.8,}}>
          <Grid
            sx={{
              height: "auto",
              display:'flex',
              flexDirection:'column',
              marginTop:'1%'
            }}>
                
              <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:2}}>
              <Button
            onClick={handleButton5}
              style={{
                border:Buttons5?'1px solid #000':"1px solid #fff",
                background: Buttons5?'#fff':"#000",
                color: Buttons5?'#000':"#fff",
                fontWeight: 400,
                width: "100%",
                height: "40px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                display: "flex",
                marginTop:'2%',
                borderRadius:'6px',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
                gap:10
              }}
            >
             Message
            </Button>

            <Button
            onClick={handleButton6}
              style={{
                border:Buttons6?'1px solid #000':"1px solid #fff",
                background: Buttons6?'#fff':"#000",
                color: Buttons6?'#000':"#fff",
                fontWeight: 400,
                width: "100%",
                height: "40px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                display: "flex",
                marginTop:'2%',
                borderRadius:'4px',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
                gap:10
              }}>
              Safe call
            </Button>
              </Grid>  
              <Divider
              style={{
                background:'#fff',
                marginTop:'6%'
              }}
            />
              <Grid sx={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',padding:2}}>
                <Grid sx={{fontSize:'18px',fontWeight:600}}>
                   Contact live support !
                   </Grid>
                   <Button
                      style={{
                        border: '1px solid #fff',
                        borderColor: '#000',
                        height: '38px',
                        marginTop:'5%',
                        width:'80%',
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        borderRadius: '10px',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap:10
                      }} >
               <img src={whatapp} width={24}></img>    Live Support
                    </Button>
                    <Grid sx={{fontSize:'14px',fontWeight:600,marginTop:'5%'}}>
                    Copyrights © 2024 Powered By IndiaBuzz
                   </Grid>
                </Grid>
      
      </Grid>
      </Grid>

          </Grid>
        </Grid>
  );
}
