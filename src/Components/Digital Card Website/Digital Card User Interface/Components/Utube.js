import { Grid,Button} from "@mui/material";
import ReactPlayer from "react-player";
import {
    useMediaQuery,
  } from "@mui/material";
export default function Utube()
{
    const matches = useMediaQuery("(max-width:600px)");
    return(<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'4%'}}>
         <Grid sx={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center',gap:matches?3:7,marginBottom:'4%'}}>
           <Grid sx={{fontSize:matches?'22px':'2.8vw',lineHeight:matches?'30px':'3.3vw',fontWeight:700,width:matches?'80%':'50%',textAlign:'center',color:'#fff',gap:4}}>
           MAKE YOUR BUSINESS DIGITAL WITH US.
           </Grid>
           <Grid
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: '15px', overflow: 'hidden'
                }}
              >
                <ReactPlayer height={matches?"45vw":"31vw"} width="80vw" url="https://youtu.be/cQeT2IZ2Vws?si=7sy5uk8kZkSf0pvh" />
              </Grid>
         </Grid>
    </Grid>)
}