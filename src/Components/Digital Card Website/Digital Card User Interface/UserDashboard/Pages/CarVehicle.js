import {  Button, Divider, Grid, Paper } from "@mui/material";
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
export default function CarVehicle() 
{  

    var navigate= useNavigate()

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

    const [table, setTable] = useState(true);
    const [pick, setPick] = useState(false);
    const [delivery, setDelivery] = useState(false);

    const handleButton = () => {
        setButtons(true);
        setButtons1(false);
        setButtons2(false);
        setButtons3(false);
        navigate('/carvehiclecontact')
      };
    
      const handleButton1 = () => {
        setButtons(false);
        setButtons1(true);
        setButtons2(false);
        setButtons3(false);
      };
    
      const handleButton2 = () => {
        setButtons(false);
        setButtons1(false);
        setButtons2(true);
        setButtons3(false);
      };

      const handleButton3 = () => {
        setButtons(false);
        setButtons1(false);
        setButtons2(false);
        setButtons3(true);
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
          background:'#f5f6fa',
          position: "relative",
          fontFamily:'Montserrat',
          color:'#000',
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
                <Grid sx={{width:'100%',borderRadius:'10px',height:'auto',display:'flex',
              alignItems:'center',
              flexDirection:'column',
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

       </Grid>
       </Grid>
       <Grid item xs={12}>
       <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width:'100%',
            
              padding:2,
              background: "radial-gradient( #f5f6fa,#fff)",
            }}
          >
            <Grid sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',width:'100%',
              height: "28px",display:"flex" ,borderRadius:'6px',}}>
            <Button
            onClick={handleTage}
              style={{
                background: table?'#000':"#fff",
                color: table?'#fff':"#000",
                width: "100%",
                height: "28px",
                fontWeight: 500,
                fontSize: "12px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Manage Tage
            </Button>
            <Button
             onClick={handleMore}
              style={{
                background: pick?'#000':"#fff",
                color: pick?'#fff':"#000",
                fontWeight: 500,
                width: "100%",
                height: "28px",
                fontSize: "12px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              More
            </Button>
            <Button
             onClick={handlePro}
              style={{
                background: delivery?'#000':"#fff",
                color: delivery?'#fff':"#000",
                fontWeight: 500,
                width: "100%",
                height: "28px",
                fontSize: "12px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Pro
            </Button>
            </Grid>
          </Grid>
       </Grid>
       <Grid item xs={12}>
          <Grid
            sx={{
              padding: 1.8,
              height: "auto",
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'column',
              marginTop:'2%'
            }}>
      
       <Button 
        onClick={handleButton}
              style={{
                background: Buttons?'#000':"#fff",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                color: Buttons?'#fff':"#000",
                fontWeight: 600,
                width: "100%",
                height: "52px",
                fontSize: "18px",
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
            ><Icon icon="carbon:mobile-view"  style={{fontSize:'28px',color:Buttons?'#fff':'#000',marginLeft:'3%'}} />
              View contact page
            </Button>


            <Button
             onClick={handleButton1}
              style={{
                background: Buttons1?'#000':"#fff",
                color: Buttons1?'#fff':"#000",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                fontWeight: 600,
                width: "100%",
                height: "52px",
                fontSize: "18px",
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
            ><Icon icon="mdi:push-notification-outline"   style={{fontSize:'28px',color:Buttons1?'#fff':'#000',marginLeft:'3%'}} />
             View notification
            </Button>


            <Button
             onClick={handleButton2}
              style={{
                background:Buttons2?'#000':"#fff",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                color: Buttons2?'#fff':"#000",
                fontWeight: 600,
                width: "100%",
                height: "52px",
                fontSize: "18px",
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
            ><Icon icon="fluent-mdl2:connect-contacts"  style={{fontSize:'28px',color:Buttons2?'#fff':'#000',marginLeft:'3%'}} />
              Add secondary contact
            </Button>


            <Button
            onClick={handleButton3}
              style={{
                background: Buttons3?'#000':"#fff",
                color: Buttons3?'#fff':"#000",
                fontWeight: 600,
                width: "100%",
                height: "52px",
                fontSize: "18px",
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
            ><Icon icon="material-symbols:emergency-share-rounded"  style={{fontSize:'28px',color:Buttons3?'#fff':'#000',marginLeft:'3%'}} />
             Add Emergency contact
            </Button>

          
                </Grid>
                </Grid>

             
            
                <Grid item xs={12} sx={{ padding: 1.8,}}>
                <Divider
              style={{
                background:'#000',
              }}
            />
          <Grid
            sx={{
              height: "auto",
              display:'flex',
              flexDirection:'column',
              marginTop:'6%'
            }}>
                
                <Grid sx={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
                   <Grid sx={{fontSize:'20px',fontWeight:500}}>
                   Tag status
                   </Grid>
                   <Grid>
                   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                   </Grid>
                </Grid>

                <Grid sx={{display:'flex',alignItems:'center',justifyContent:"space-between",marginTop:'3%'}}>
                   <Grid sx={{fontSize:'20px',fontWeight:500}}>
                   Call notification
                   </Grid>
                   <Grid>
                   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                   </Grid>
                </Grid>

                <Divider
              style={{
                background:'#000',
                marginTop:'6%'
              }}
            />

<Grid sx={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',padding:2,marginTop:'4%'}}>
                <Grid sx={{fontSize:'18px',fontWeight:600}}>
                   Contact live support !
                   </Grid>
                   <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: '38px',
                        marginTop:'5%',
                        width:'80%',
                        color: "#000",
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
