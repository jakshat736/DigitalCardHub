import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import digitallogo from "../Themes/ThemeAssets/digitalss.png"
import clickhere from "../Themes/ThemeAssets/click.png"
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AnchorTemporaryDrawer from './LoginDrawer';
import  logo from "../../../Digital Card Assets/logocardhome.png"
import  mockupcard from "../../../Digital Card Assets/mockupcard.png"

   export default function NewCardHome()
   {
   var navigate=useNavigate()
   const handleNavigate=()=>{
    navigate('/newcardhome2')
   }
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Grid sx={{ display: "flex", justifyContent: 'center',background:'#2d3436' }}>
      <Grid container spacing={2} sx={{ display: 'flex', width: 450 ,marginLeft:matches?'.0%':'',backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",height:'100vh'}}>
       <Grid item style={{padding:2,width:'100%'}}>
        <Grid sx={{marginTop:'15%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <img src={logo} style={{width:'50%'}}></img>
        </Grid>
        <Grid sx={{marginTop:'20%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <img src={mockupcard} style={{width:'30%',marginLeft:'3%'}}></img>
        </Grid>
        <Grid sx={{marginTop:'10%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <Button onClick={handleNavigate}
            style={{
              border: "1px solid #fff",
              borderColor: "#fff",
              background: "#fff",
              width:"70%",
              height : "40px",
              lineHeight: "36px",
              color: "#000",
              fontSize: "16px",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "-moz-grab",
            }}
          >
          Begin Activation
          </Button>
          <Grid sx={{width:'70%',textAlign:'center' ,lineHeight: "20px",color:'#fff',fontWeight:400,fontSize: "18px",marginTop:'3%',fontFamily: 'Aoboshi One,serif'}}>
          Tap here to start the activation for your new business card.
          </Grid>
         </Grid>
       </Grid>
      </Grid>
    </Grid>
  )
}


