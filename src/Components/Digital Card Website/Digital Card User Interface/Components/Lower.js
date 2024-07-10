import { Grid, Paper, IconButton, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import HelpIcon from '@mui/icons-material/Help';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bag from "../../Digital Card Assets/newbag.png"
import sale from "../../Digital Card Assets/salenew.png"
import news from "../../Digital Card Assets/newnew.png"
import i from "../../Digital Card Assets/inew.png"
export default function Lower(props) {
  const navigate=useNavigate()
  const handleButtonClick = () => {
    // Call the parent function passed as a prop
    // if (props.callParentFunction) {
    //   props.callParentFunction();
    // }

    navigate('/newallproduct2')

    // Other logic in the Lower component
  };
  return (
    <Grid>
      <Paper sx={{ borderTopLeftRadius:'20px', borderTopRightRadius:'20px',width:{xs:"100vw"},height:55,zIndex:100,backgroundColor:'#ecf0f1',display:'flex',alignItems:'center',justifyContent:'center' }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ display: { md: 'none', xs: 'flex' },color:'#000', justifyContent:'space-around',alignItems:'center'}}
          >
            <IconButton sx={{display:"flex",flexDirection:'column'}} onClick={()=>navigate('/newallproduct2')}>
              <img src={bag} width={32}></img>
            </IconButton >
            <IconButton sx={{display:"flex",flexDirection:'column'}} onClick={handleButtonClick}>
            <img src={sale} width={32}></img>
            </IconButton >
            <IconButton sx={{display:"flex",flexDirection:'column'}} onClick={handleButtonClick}>
            <img src={news} width={32}></img>
            </IconButton>
            <IconButton sx={{display:"flex",flexDirection:'column'}} href='https://youtu.be/dfj0V7aHbCM?si=ED7JFPvgDEAJ4kYX'>
            <img src={i} width={32}></img>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
