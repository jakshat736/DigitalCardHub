import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postData, getData } from '../../../Services/NodeServices';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Digital Card Assets/newlogo.png'
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
import InviteEdgeDrawer from './LoginDrawer';
const InviteActivationPage = () => {

  const { inviteId } = useParams();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const [result, setResult] = useState('')
  const [display, setDisplay] = useState('none')
  const navigate = useNavigate();

  const checkInviteId = async () => {

    const formData = new FormData;
    formData.append("inviteId", inviteId)
    const response = await postData('invite/chkInviteId', formData, true)
    setResult(response.status)
    console.log(response.status)
    if (response.status == 'false') {
      setDisplay('block')
    }
    else {

      navigate(`/invites/${inviteId}`)
    }

  }

  useEffect(() => {
    checkInviteId()
  }, [])




  return (
    <Grid sx={{ display: "flex", justifyContent: 'center' }}>
      <Grid container spacing={2} sx={{ display: display, width: 450 }}>
        <Grid item xs={12} sx={{ backgroundColor: '#F3B419', borderBottomLeftRadius: '50%', borderBottomRightRadius: "50%", paddingBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ height: 180, width: 180, }} src={logo} />

          </div>
        </Grid>
        <Grid item xs={12} class='welcome' sx={{ display: "flex", justifyContent: 'center', fontSize: 60, marginBottom: 3, color: '#000' }}>
          Welcome
        </Grid>
        <Grid item xs={12} class={tablet ? 'activate' : 'activate1'} sx={{ display: "flex", justifyContent: 'center', textAlign: "center", backgroundColor: '#F3B419', borderRadius: 2, paddingBottom: "16px", color: 'black', fontSize: { xs: 55, md: 34 } }}>
          Activate your Invitation Card here !
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center' }} >
          <InviteEdgeDrawer tagId={inviteId} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InviteActivationPage
