import { Grid,Button} from "@mui/material";
import images from "../../Digital Card Assets/backgroundnew.png";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import arror from "../../Digital Card Assets/arrownew.png"
import {
    useMediaQuery,
  } from "@mui/material";
import images2 from "../../Digital Card Assets/backgroundnew2.png"
import arrow2 from "../../Digital Card Assets/arrow2new.png"
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ConnectNow()
{
    
    const matches = useMediaQuery("(max-width:900px)");

    return(<Grid sx={{width:'100%',height:'auto',}}>
      <Grid sx={{width:'100%',position:'relative',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:matches?"column":'row'}}>
      <img src={matches?images2:images} style={{width:matches?'100%':'100%'}}></img>
      <Grid sx={{color:'#fff',position:'absolute'}}>
        <Grid sx={{display:'flex',gap:2,flexDirection:matches?"column":'row'}}>
       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:matches?1.8:4}}>
       <Grid sx={{fontSize:matches?'20px':'2vw',fontWeight:700}}>
       CONNECT NOW
       </Grid>
       <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: matches?280:350,borderRadius:4,height:matches?38:44 }}>
      {/* <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      /> */}
    <InputBase
        sx={{ ml: 1, flex: 1,color:'#000',fontSize:'18px' }}
        placeholder="Enter number or email.."
       
      />
    </Paper>
    <Grid>
    <Button
            sx={{
                 border:'3px solid #fff',
                  height: matches?30:48,
                  width:matches?150:'14vw',
                  background:'transparent',
                  color: "#fff",
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: matches?2:2.6,
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: matches?'14px':"20px",
                  fontWeight: 700,
                  alignItems:'center',
                  fontFamily:'Montserrat',
                
                }}
              >
              Send
              </Button>
       </Grid>
       </Grid>

       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:matches?'-8%':'20%',marginLeft:matches?'70%':'0%'}} >
       <LazyLoadImage
           src={matches?arrow2:arror} width={matches?40:120}
           effect="blur" // this will add a blur effect until the image loads
          />
       </Grid>
       <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:matches?16:'2vw',fontWeight:600,lineHeight:matches?'24px':'3vw',textAlign:'center',flexDirection:'column',marginTop:'-5%'}} >
      CUSTOMISE WITH OUR
      <Grid>
      DESIGNER NOW !
      </Grid>
       </Grid>
</Grid>

      </Grid>
      </Grid>
    </Grid>)
}