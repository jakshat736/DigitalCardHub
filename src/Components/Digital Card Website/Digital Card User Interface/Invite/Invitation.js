import { Grid } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Theme.css"
import { serverURL } from '../../../Services/NodeServices'
const Invitation = () => {
    const location=useLocation()
    const data=location.state.data
  return (
    <Grid sx={{display:"flex",justifyContent:"center"}}>
      <Grid container spacing={2} sx={{width:{xs:"100%",md:400},height:"100%",overflow:"hidden"}} >
            <Grid item xs={12} className="video-background">
            <video autoPlay loop  style={{width:"100%",height:"100%"}}>
        <source src={`${serverURL}/images/${data.invitationVideo}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
            </Grid>
           

      </Grid>
  </Grid>
  )
}

export default Invitation
