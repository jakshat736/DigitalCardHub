import { Grid } from '@mui/material';
import lines from "../../Digital Card Assets/line111.png"
import superior from "../../Digital Card Assets/sup.png"
import {
    useMediaQuery,
  } from "@mui/material";

export default function Superior()
{
    const matches = useMediaQuery("(max-width:1100px)");
    const matchesA = useMediaQuery("(max-width:700px)");
    const matchesB = useMediaQuery("(max-width:1300px)");
    return(<Grid sx={{width:'100%',height:'auto',marginTop:matchesA?'25%':'10%',position:'relative'}}>
            
             <Grid sx={{display:'flex'}}>

             <Grid sx={{marginTop:'28%',display:'flex',flexDirection:'column',marginLeft:'2%'}}>
             <Grid sx={{position:'relative',transform:'rotate(14deg)'}}>
               <img src={lines} style={{width:'33vw'}}  ></img>
               <Grid>
               <img src={lines}  style={{position:'absolute',top:matchesA?-25:-55,width:'33vw'}}></img>
               </Grid>
             </Grid>
             </Grid>

             <Grid sx={{display:'flex',flexDirection:'column',marginLeft:matchesB?'25%':matchesA?'23%':'27%'}}>
             <Grid sx={{position:'relative',transform:'rotate(14deg)'}}>
               <img src={lines} style={{width:'33vw'}} ></img>
               <Grid>
               <img src={lines} width={500} style={{position:'absolute',top:matchesA?-25:-55,width:'33vw'}}></img>
               </Grid>
             </Grid>
             </Grid>

             </Grid>

             <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',width:'100%',top:matchesA?'-12vw':matches?'-2vw':1,flexDirection:'column'}}>
                <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:matchesA?'22px':'2.8vw',fontWeight:700,lineHeight:'30px',color:'#fff'}}>
                  WHY WE ARE SUPERIOR ?
                </Grid>
                <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
              <img src={superior}style={{width:matchesA?'81vw':'69vw'}} ></img>
              </Grid>
             </Grid>

          

    </Grid>)
}