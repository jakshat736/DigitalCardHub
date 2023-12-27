import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { serverURL } from '../../../Services/NodeServices'
import "./Theme.css"
import { useNavigate } from 'react-router-dom'
const Theme = ({data}) => {
    const navigate=useNavigate()
    console.log("Akshat",data.coverVideo)
    const handleView=()=>{
        navigate('/invitation',{state:{data:data}})
    }
    const handleDownload=()=>{
        const anchor = document.createElement('a');
        anchor.href = `${serverURL}/images/${data.invitationVideo}`;
        anchor.download = data.invitationVideo || 'video.mp4';
        anchor.click();  
    }
  return (
  <Grid sx={{display:"flex",justifyContent:"center"}}>
      <Grid container spacing={2} sx={{width:{xs:"100%",md:400},height:"100vh"}} >
            <Grid item xs={12} className="video-background">
            <video autoPlay loop  style={{width:"100%",height:"100%"}}>
        <source src={`${serverURL}/images/${data.coverVideo}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Grid className="overlay-text">
     <Button  variant='contained' onClick={()=>handleView()} sx={{m:1,fontSize:12}}>
       View Invitation
     </Button>
     <Button  variant='contained' onClick={()=>handleDownload()}  sx={{m:1,fontSize:12}}>
       Download Invitation
     </Button></Grid>
            </Grid>
            <Grid item xs={12}>
           
            </Grid>

      </Grid>
  </Grid>
  )
}

export default Theme
