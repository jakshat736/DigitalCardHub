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
const CardHome = () => {


  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const matches = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  return (
    <Grid sx={{ display: "flex", justifyContent: 'center',background:'#f5f6fa' }}>
      <Grid container spacing={2} sx={{ display: 'block', width: 450 ,background: "radial-gradient( #414141,#171717)",height:'100vh'}}>
        <Grid item xs={12} sx={{ borderBottomLeftRadius: '10%', borderBottomRightRadius: "10%",background: "radial-gradient( #414141,#171717)" , display: 'flex', alignItems: 'center', justifyContent: 'center',height:200}}>
          <div >
            <img  src={digitallogo} width={150}/>
          </div>
        </Grid>
        <Grid item xs={12} class='welcome' sx={{ display: "flex", justifyContent: 'center', fontSize:50, color: '#fff',fontFamily: 'Aoboshi One,serif',marginTop:'4%' }}>
          Welcome !
        </Grid>
        <Grid item xs={12} sx={{ display: "flex",justifyContent:'center',marginLeft:matches?"0%":'-2%'}}>
          <Grid  sx={{display: "flex", justifyContent: 'center',alignItems:'center', border:'1px solid #171717',textAlign: "center", backgroundColor: '#171717', borderRadius: 1, color: '#fff',padding:2,fontFamily: 'Aoboshi One,serif',fontSize:25,marginTop:'2%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',width:'90%'}}>
          Activate Your NFC Profile Here !
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center',marginTop:'10%' ,fontSize:16,fontWeight:500,fontFamily: 'Aoboshi One,serif',color:'#fff'}} >
            Click Here
            <Grid sx={{marginTop:'1%',marginLeft:'1%'}}>
            <img src={clickhere} width={22} style={{ transform:'rotate(180deg)'}}></img>
            </Grid>
          </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center',marginTop:'-3%' }} >
          <AnchorTemporaryDrawer />
          {/* <Button variant='contained' onClick={() => navigate('/digitalcardlogin', { state: { goahead: false } })} sx={{ fontSize: 25, backgroundColor: '#F3B419', marginTop: 3, color: "black", "&:hover": { backgroundColor: '#F3B419' } }}><Typography class='font'>Log In</Typography></Button> */}
        </Grid>
        {/* <Grid item xs={12} class='font1' sx={{ display: "flex", justifyContent: 'center', fontSize: 32, marginBottom: 2, marginTop: 2, color: '#000' }}>
          Don't have an account ?
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }}>
          <Button variant='contained' onClick={() => navigate('/digitalcardsignup')} sx={{ fontSize: 20, backgroundColor: '#F3B419', color: "black", "&:hover": { backgroundColor: '#F3B419' } }}><Typography class='font'>Create Now</Typography></Button>
        </Grid> */}

      </Grid>
    </Grid>
  )
}

export default CardHome
