import {  Button, useMediaQuery,Dialog, Divider, Grid, Paper, InputBase, Avatar } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import Box from "../../../MenuUpdate/administrator/Box";
import back from "../../../Digital Card Assets/backfordash.png"
import * as React from 'react';
import Switch from '@mui/material/Switch';
import l1 from "../../../Digital Card Assets/l1.png"
import l2 from "../../../Digital Card Assets/l2.png"
import l3 from "../../../Digital Card Assets/l3.png"
import CloseIcon from '@mui/icons-material/Close';
import bike from "../../../Digital Card Assets/biked.png"
import whatapp from "../../../Digital Card Assets/whatsappm.png"
import arrow from "../../../Digital Card Assets/arrowd.png"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
export default function NewBussinessDashboard2() 

{

  const matches1 = useMediaQuery("(max-width:1000px)");
  const matches2 = useMediaQuery("(max-width:700px)");
  const matches = useMediaQuery("(max-width:1200px)");

    var navigate= useNavigate()

    const [openDrawer, setOpenDrawer] = useState(false);
    const [hide, setHide] = useState(false);

    const [checked, setChecked] = React.useState(true);


    const [messages,setMessages]= useState(false)

    const handleCloseMessage = () => {
      setMessages(false);
    };

    const [messages2,setMessages2]= useState(false)

    const handleCloseMessage2 = () => {
      setMessages2(false);
    };
  

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [Buttons, setButtons] = useState(true);
    const [Buttons1, setButtons1] = useState(false);
    const [Buttons2, setButtons2] = useState(false);
    const [Buttons3, setButtons3] = useState(false);

    const [profile, setProfile] = useState(true);
    const [analatics, setAnalatics] = useState(false);

    const handleButton = () => {
        setButtons(true);
        setButtons1(false);
        setButtons2(false);
        setButtons3(false);
      };
    
      const handleButton1 = () => {
        setButtons(false);
        setButtons1(true);
        setButtons2(false);
        setButtons3(false);
      };
    
      const handleButton2 = () => {
        setMessages(true);
        setButtons(false);
        setButtons1(false);
        setButtons2(true);
        setButtons3(false);
      };

      const handleButton3 = () => {
        setMessages2(true)
        setButtons(false);
        setButtons1(false);
        setButtons2(false);
        setButtons3(true);
      };


    const handleProfile = () => {
        setProfile(true);
        setAnalatics(false);
      };
    
      const handleAnalatics = () => {
        setProfile(false);
        setAnalatics(true);
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
      }}>
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
         <Navbar/>
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
              justifyContent:'center',background:'#E6E6E6',position:'relative',color:'#fff'}}>
                <img  src={back} style={{width:'100%'}}></img>
                <Grid sx={{position:'absolute',display:'flex',
              alignItems:'center',
              flexDirection:'column',}}>
                <Grid sx={{fontSize:matches2?'20px':'24px',fontWeight:700,textAlign:'center'}}>Business profile dashboard</Grid>
                <Grid>
                <Avatar
                  fullWidth
                  alt="Remy Sharp"
                  sx={{ width:matches2?70: 100, height:matches2?70:  100, marginTop: "6%" }}
                />
                </Grid>
                <Grid sx={{fontSize:matches2?'18px': '22px',fontWeight:600,marginTop:'1.5%'}}>Chinmay Sharma</Grid>
                <Grid sx={{fontSize:matches2?'16px':'18px',fontWeight:500,marginTop:'1%'}}>
                      UX/UI Designer
                   </Grid>
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
            onClick={handleProfile}
              style={{
                background: profile?'#000':"#fff",
                color: profile?'#fff':"#000",
                width: "100%",
                height: "35px",
                fontWeight: 500,
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Manage profile
            </Button>
            <Button
             onClick={handleAnalatics}
              style={{
                background: analatics?'#000':"#fff",
                color: analatics?'#fff':"#000",
                fontWeight: 500,
                width: "100%",
                height: "35px",
                fontSize: "16px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
             Analytics
            </Button>
           
            </Grid>
          </Grid>
       </Grid>


       {profile ? (
              <>
       
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
                fontWeight: 500,
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
            ><Icon icon="carbon:mobile-view"   style={{fontSize:'28px',color:Buttons?'#fff':'#000',marginLeft:'3%'}} />
             Personal Details
            </Button>


            <Button
             onClick={handleButton1}
              style={{
                background: Buttons1?'#000':"#fff",
                color: Buttons1?'#fff':"#000",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                fontWeight: 500,
                width: "100%",
                height: "52px",
                fontSize: "18px",
                marginTop:'3%',
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
            ><Icon icon="mdi:push-notification-outline"  style={{fontSize:'28px',color:Buttons1?'#fff':'#000',marginLeft:'3%'}} />
            Edit Social links
            </Button>


            <Button
             onClick={handleButton2}
              style={{
                background:Buttons2?'#000':"#fff",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                color: Buttons2?'#fff':"#000",
                fontWeight: 500,
                width: "100%",
                height: "52px",
                fontSize: "18px",
                textTransform: "none",
                borderRadius: 0,
                display: "flex",
                borderRadius:'10px',
                marginTop:'3%',
                padding:3,
                lineHeight: "36px",
                alignItems: "center",
                justifyContent: "flex-start",
                gap:10
              }}
            ><Icon icon="fluent-mdl2:connect-contacts"  style={{fontSize:'28px',color:Buttons2?'#fff':'#000',marginLeft:'3%'}} />
             Services / Products gallery
            </Button>
                </Grid>
                </Grid>
                </>
            ) : analatics ? (
              <>
             

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

            <Grid sx={{width:'100%',borderRadius:'10px',height:150, display:'flex',
              alignItems:'center',
              justifyContent:'center',border:'1.5px solid #000',padding:2,color:'#000',flexDirection:'column'}}>
               <Grid>
                <img src={l1} width={60}></img>
               </Grid>
               <Grid sx={{fontWeight:600,fontSize:'18px'}}>
               Social Insights
               </Grid>
               <Grid sx={{fontWeight:400,fontSize:'13px',marginTop:'1%',display:'flex',alignItems:'center'}}>
               see now <img src={arrow} width={10} style={{marginTop:matches2?'4%':'2%'}}></img>
               </Grid>
            </Grid>


            <Grid sx={{width:'100%',borderRadius:'10px',height:150, display:'flex',
              alignItems:'center',
              justifyContent:'center',border:'1.5px solid #000',padding:2,color:'#000',flexDirection:'column',marginTop:'4%'}}>
               <Grid>
                <img src={l2} width={60}></img>
               </Grid>
               <Grid sx={{fontWeight:600,fontSize:'18px'}}>
               Manage Enquieries
               </Grid>
               <Grid sx={{fontWeight:400,fontSize:'13px',marginTop:'1%',display:'flex',alignItems:'center'}}>
               see now <img src={arrow} width={10} style={{marginTop:matches2?'4%':'2%'}}></img>
               </Grid>
            </Grid>


            <Grid sx={{width:'100%',borderRadius:'10px',height:150, display:'flex',
              alignItems:'center',
              justifyContent:'center',border:'1.5px solid #000',padding:2,color:'#000',flexDirection:'column',marginTop:'4%'}}>
               <Grid>
                <img src={l3} width={60}></img>
               </Grid>
               <Grid sx={{fontWeight:600,fontSize:'18px'}}>
               Manage Appointments
               </Grid>
               <Grid sx={{fontWeight:400,fontSize:'13px',marginTop:'1%',display:'flex',alignItems:'center'}}>
               see now <img src={arrow} width={10} style={{marginTop:matches2?'4%':'2%'}}></img>
               </Grid>
            </Grid>

                </Grid>
                </Grid>

                </>
            ) : (
              <></>
            )}
            
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
                   Show Enquiry form
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
                   Show appointment
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
