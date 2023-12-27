import React from 'react'
import { Grid,Typography,Button,Divider } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import PhotoSizeSelectLargeIcon from '@mui/icons-material/PhotoSizeSelectLarge';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import img1 from "../assets/dch logooo.png";

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { useNavigate, useParams } from "react-router-dom";
export default function MenuDashBoard() {
  var navigate=useNavigate()
  const {companyId}=useParams()
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };
      
  return (
    <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:360,}}>
     
     <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Grid item xs={6} sx={{display:'flex',flexDirection:'row',}}>
     <img src={img1} alt="Masala Grill" width={120} />
        
    
</Grid>

<Grid item xs={6} sx={{}}>
<Button variant="outlined" sx={{bgcolor:'yellow',}}><WhatsAppIcon/>Live support</Button>
</Grid>
<Divider
          sx={{
            backgroundColor: 'black',
            height: '1px',
            width: '100%',
            
          }}
        />
     <Grid item xs={12}>
        <Typography sx={{fontFamily:'poppins',fontSize:25,display:'flex',flexDirection:'row',}}>Your tags, Your control !</Typography>
     </Grid>
     <Grid item xs={12}>
     <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button sx={{bgcolor:'yellow'}}>
        <ListItemText onClick={()=>navigate('/ViewOrder',{state:{companyId:companyId}})} primary="View Orders" />
        <NotificationsIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText  onClick={()=>navigate('/AddMenu',{state:{companyId:companyId}})} primary="Add Menu Items" />
        <SoupKitchenIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <ListItem button>
        <ListItemText onClick={()=>navigate('/Allmenu',{state:{companyId:companyId}})} primary="Edit Menu Items" />
        <EditNoteIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText onClick={()=>navigate(`/Menu/${companyId}`)} primary="View menu" />
        <MenuOpenIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Edit Details" />
        <BlurCircularIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText onClick={()=>navigate('/UploadMenuCsv')} primary="Upload Menu CSV." />
        <PhotoSizeSelectLargeIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem onClick={()=>navigate('/UploadYourLogo')} button>
        <ListItemText primary="Upload Your logo." />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Disabble Calls." />
        <PhoneDisabledIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Enable order from home" />
        <PlayArrowIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Pause The Menu" />
        <PauseIcon sx={{mr:{xs:5,md:0}}}/>
      </ListItem>
      <Divider />
      <ListItem button>
  <ListItemText
    primary={
      <div>
        <span style={{ fontSize: '14px' }}>Add more QRs</span>
        <br />
        <span style={{ fontSize: '10px' }}>Scan the QR you want to attach to the </span>
        <br />
        <span style={{ fontSize: '10px' }}>Menu.</span>
      </div>
    }
  />
  <DashboardCustomizeIcon sx={{mr:{xs:5,md:0}}}/>
</ListItem>
      <Divider />
    </List>
     </Grid>
     <Grid item xs={12}>
     <Button variant="contained" disableElevation>
     <WhatsAppIcon sx={{mr:{xs:5,md:0}}}/> Share Business on WhatsApp
    </Button>
     </Grid>
      











     </Grid>












    </Grid>
  )
}
