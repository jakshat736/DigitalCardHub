import { Grid } from "@mui/material";
import { tr } from "date-fns/locale";
import React from 'react'
import ReactPlayer from 'react-player'
import { IconButton } from "@mui/material";
import { Close, Tune } from "@mui/icons-material";
import  { useState } from 'react';
import closess from "../../Digital Card Assets/close.png"
import useMediaQuery from '@mui/material/useMediaQuery';
export default function MiniYouTube()
{
    const matches = useMediaQuery("(max-width:900px)");
    const [showPlayer, setShowPlayer] = useState(true);

    const handleClose = () => {
        setShowPlayer(false);
    };

    return(<Grid sx={{width:'100%',padding:2,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'auto',marginTop:matches?'-40%':''}}>
          <Grid sx={{width:'100%'}}>
          {showPlayer && (
                    <Grid container sx={{ position: 'relative', justifyContent: 'center' }}>
                
                         <video 
                            style={{ marginLeft: 'auto' }} 
                            width={160} 
                            height={240} 
                            src="/amitesh.mp4" 
                            muted
                            controls 
                            autoPlay 
                            loop 
                        
                        />
                        <IconButton 
                            onClick={handleClose} 
                            sx={{ position: 'absolute', top: -20, right: -2 }}
                        >
                           <img src={closess} width={20}></img>
                        </IconButton>
                    </Grid>
                )}
          </Grid>
    </Grid>)
}