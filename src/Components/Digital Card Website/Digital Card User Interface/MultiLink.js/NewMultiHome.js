import {  Button, Grid } from "@mui/material";
import menu from "../../Digital Card Assets/menut.png"
import share from "../../Digital Card Assets/sharem.png"
import profile from "../../Digital Card Assets/profile.jpg"
import contact from "../../Digital Card Assets/contct.png"
import call from "../../Digital Card Assets/calm.png"
import circle from "../../Digital Card Assets/circle.png"
import whatsapp from "../../Digital Card Assets/whatsappm.png"
import insta from "../../Digital Card Assets/instam.png"
import fb from "../../Digital Card Assets/fb.jpg"
import google from "../../Digital Card Assets/googlem.png"
import logo from "../../Digital Card Assets/logom.png"
import line from "../../Digital Card Assets/linem.png"
import m from "../../Digital Card Assets/m.png"
import arrow from "../../Digital Card Assets/arrowm.png"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function NewMultiHome() {
  
  return (
    <Grid
      style={{
        backgroundColor: "#2d3436",
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
          background:'#131313',
          position: "relative",
          fontFamily:'Montserrat'
        }}
      >
        <Grid item xs={12}>
          <Grid
            sx={{
              padding: 1.8,
              height: "auto",
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between',
            }}
          >
            <Grid>
              <img src={menu} width={38}></img>
            </Grid>
            <Grid>
              <img src={share} width={25}></img>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            sx={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
              marginTop:'1%',
              marginBottom:'5%'
            }}>

          <Grid
              style={{
                color: "#fff",
                border: "1px solid #fff",
                display: "flex",
                padding: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "0px 8px 8px 0px",
                width: 65,
                height: 65,
              }}
            >
              <Grid><img src={contact} width={30}></img></Grid>
            </Grid>

<Grid sx={{position:'relative'}}>
    <Grid>
          <Avatar
        alt="Remy Sharp"
        src={profile}
        sx={{ width: '163px', height: '163px',zIndex:20 }}
      />
      </Grid>
      <Grid sx={{position:"absolute",bottom:-14,marginLeft:'-5.5%',zIndex:10}} >
      <img src={circle} width={180}></img>
      </Grid>
</Grid>

<Grid
              style={{
                color: "#fff",
                border: "1px solid #fff",
                display: "flex",
                padding: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "8px 0px 0px 8px",
                width: 65,
                height: 65,
              }}
            >
              <Grid><img src={call} width={30}></img></Grid>
            </Grid>

        
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              marginTop:'7%',
              flexDirection:'column',
              color:'#fff'

            }}>
                <Grid sx={{fontSize:'28px',fontWeight:700,lineHeight:'20px',letterSpacing:'2%',textAlign:'center'}}>ANKIT RAJPOOT</Grid>
                <Grid sx={{fontSize:'14px',fontWeight:500,lineHeight:'20px',letterSpacing:'2%',textAlign:'center',marginTop:'1.2%'}}> Manager at Ibuzz tech</Grid>
                <Grid sx={{marginTop:'.8%'}}><img src={line} style={{width:'100%'}} ></img></Grid>
                </Grid>
                </Grid>



                <Grid item xs={12}>
          <Grid
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              marginTop:'1%',
              padding:1.8,
              flexDirection:'column',
              color:'#fff',
              zIndex:10
            
            }}>

                <div style={{overflow:'scroll',padding:4,scrollbarWidth:'none',maxHeight:250,width:'100%',zIndex:20}}>

                  <Button
                           fullWidth
                            style={{
                              borderColor: "#000",
                              height: '63px',
                              background: "#1C1D1F",
                              border:'1px solid #1C1D1F',
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius:'8px',
                              padding:12,
                              display: "flex",
                              alignItems: "center",
                              justifyContent:"flex-start",
                               fontFamily: 'poppins',
                               boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .2)",
                            }}
                          >
                         <Grid sx={{marginTop:'2%'}}><img src={insta} width={30}></img></Grid>
                         <Grid sx={{marginLeft:'5%',  display: "flex",
                         flexDirection:'column',textAlign:"left",
                              justifyContent:"flex-start",}}>
                            <Grid style={{fontSize:'20px',fontWeight:500,lineHeight:'24px'}}>Instagram</Grid>
                            <Grid style={{fontSize:'12px',fontWeight:300,lineHeight:'17px'}}>Follow me on instagram now !</Grid>
                         </Grid>
                         <Grid sx={{marginLeft:'auto',marginTop:'2%'}}>
                          <img src={arrow} width={18}></img>
                         </Grid>
                          </Button>



                          <Button
                           fullWidth
                            style={{
                              borderColor: "#000",
                              height: '63px',
                              background: "#1C1D1F",
                              border:'1px solid #1C1D1F',
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius:'8px',
                              padding:12,
                              marginTop:'8%',
                              display: "flex",
                              alignItems: "center",
                              justifyContent:"flex-start",
                               fontFamily: 'poppins',
                               boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .2)",
                            }}
                          >
                         <Grid sx={{marginTop:'2%'}}><img src={google} width={30}></img></Grid>
                         <Grid sx={{marginLeft:'5%',  display: "flex",
                         flexDirection:'column',textAlign:"left",
                              justifyContent:"flex-start",}}>
                            <Grid style={{fontSize:'20px',fontWeight:500,lineHeight:'24px'}}>Google Rating</Grid>
                            <Grid style={{fontSize:'12px',fontWeight:300,lineHeight:'17px'}}>Rate and review me on google !</Grid>
                         </Grid>
                         <Grid sx={{marginLeft:'auto',marginTop:'2%'}}>
                          <img src={arrow} width={18}></img>
                         </Grid>
                          </Button>




                          <Button
                           fullWidth
                            style={{
                              borderColor: "#000",
                              height: '63px',
                              background: "#1C1D1F",
                              border:'1px solid #1C1D1F',
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius:'8px',
                              padding:12,
                              marginTop:'8%',
                              display: "flex",
                              alignItems: "center",
                              justifyContent:"flex-start",
                               fontFamily: 'poppins',
                               boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .2)",
                            }}
                          >
                         <Grid sx={{marginTop:'2%'}}><img src={whatsapp} width={30}></img></Grid>
                         <Grid sx={{marginLeft:'5%',  display: "flex",
                         flexDirection:'column',textAlign:"left",
                              justifyContent:"flex-start",}}>
                            <Grid style={{fontSize:'20px',fontWeight:500,lineHeight:'24px'}}>Whatsapp</Grid>
                            <Grid style={{fontSize:'12px',fontWeight:300,lineHeight:'17px'}}>Connect to whatsapp now !</Grid>
                         </Grid>
                         <Grid sx={{marginLeft:'auto',marginTop:'2%'}}>
                          <img src={arrow} width={18}></img>
                         </Grid>
                          </Button>


                          <Button
                           fullWidth
                            style={{
                              borderColor: "#000",
                              height: '63px',
                              background: "#1C1D1F",
                              border:'1px solid #1C1D1F',
                              color: "#fff",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius:'8px',
                              padding:12,
                              marginTop:'8%',
                              display: "flex",
                              alignItems: "center",
                              justifyContent:"flex-start",
                               fontFamily: 'poppins',
                               boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .2)",
                            }}
                          >
                         <Grid sx={{marginTop:'2%'}}><img src={fb} width={30}></img></Grid>
                         <Grid sx={{marginLeft:'5%',  display: "flex",
                         flexDirection:'column',textAlign:"left",
                              justifyContent:"flex-start",}}>
                            <Grid style={{fontSize:'20px',fontWeight:500,lineHeight:'24px'}}>Facebook</Grid>
                            <Grid style={{fontSize:'12px',fontWeight:300,lineHeight:'17px'}}>Connect to whatsapp now !</Grid>
                         </Grid>
                         <Grid sx={{marginLeft:'auto',marginTop:'2%'}}>
                          <img src={arrow} width={18}></img>
                         </Grid>
                          </Button>

</div>

<Grid sx={{marginTop:'4%'}}><img src={line} width={350} height={1}></img></Grid>


                </Grid>
                  </Grid>   



                  <Grid item xs={12}>
          <Grid
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column',
              color:'#fff',
              
            }}>

           <Button 
                style={{
                    width:'110px',
                  border: "1px solid #fff",
                  borderColor: "#fff",
                  background:'#fff',
                  height:"35px",
                  color: "#000",
                  fontSize: "13px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  }}>
               <img src={m} width={15}></img> Support
              </Button>
              <Grid >
              <img src={logo} width={100}></img>
              </Grid>
                </Grid>
                </Grid>


          </Grid>
        </Grid>
  );
}
