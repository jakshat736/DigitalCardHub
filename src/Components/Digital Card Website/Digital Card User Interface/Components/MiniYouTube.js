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
                
                         {/* <video 
                            style={{ marginLeft: 'auto' }} 
                            width={160} 
                            height={240} 
                            src="https://youtube.com/shorts/8HwufXUV5nY?si=3SikrmvE7irEJlv1" 
                            muted
                            controls 
                            autoPlay 
                            loop 
                        
                        /> */}
               <iframe
        width="160"
        height="240"
        src="https://www.youtube.com/embed/8HwufXUV5nY?autoplay=1&mute=1&loop=1&playlist=8HwufXUV5nY"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ marginLeft: 'auto' }}
                      ></iframe>

                        <IconButton 
                            onClick={handleClose} 
                            sx={{ position: 'absolute', top: -20, right:matches?-9: -2 }}
                        >
                           <img src={closess} width={20}></img>
                        </IconButton>
                    </Grid>
                )}
          </Grid>
    </Grid>)
}