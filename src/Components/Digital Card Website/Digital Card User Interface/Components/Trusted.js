import { Grid } from "@mui/material";
import image1 from "../../Digital Card Assets/moble1.png"
import images2 from "../../Digital Card Assets/mobile22.png"
import symbol from "../../Digital Card Assets/symbol.png"
import {useMediaQuery} from "@mui/material";
export default function Trusted()
{
    const matches = useMediaQuery("(max-width:700px)");
    const matchesA = useMediaQuery("(max-width:500px)");
    return(<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',color:'#fff',marginBottom:'10%',height:matches?'25vh':'40vh',marginTop:matchesA?'-8%':matches?'-28%':'0%'}}>
{matches?<></>:<>   
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src={image1} width={150} style={{marginRight:matches?'-50%':'-140%',zIndex:2}}></img>
      </Grid></>}
      {matches?<></>:<><Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",width:matches?'100vw':'52%',zIndex:10}}>
        <Grid>
            <img src={symbol} width={matches?40:70}></img>
        </Grid>
        <Grid sx={{fontSize:matches?'25px':'2.8vw',fontWeight:500,display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-.5%',marginBottom:'1%'}}>
        TRUSTED BY
        </Grid>
        <Grid sx={{fontSize:matches?'14px':'1.5vw',fontWeight:400,lineHeight:matches?'22px':'35px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
        Trusted by over 100+ businesses, our NFC cards offer seamless and secure solutions for diverse applications.
        </Grid>
      </Grid></>}
      {matches?<></>:<><Grid>
            <img src={images2} width={150} style={{marginLeft:matches?'-30%':'-70%',zIndex:2}}></img>
        </Grid></>}


{matches?<><>
        <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',position:'absolute'}}>
        <img src={image1} width={60} style={{zIndex:2,marginLeft:'-450%'}}></img>
      </Grid>
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",width:'98%',zIndex:10,position:'relative'}}>
        <Grid>
            <img src={symbol} width={matches?40:70}></img>
        </Grid>
        <Grid sx={{fontSize:'20px',fontWeight:500,display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-.5%',marginBottom:'1%'}}>
        TRUSTED BY
        </Grid>
        <Grid sx={{fontSize:'12px',fontWeight:400,lineHeight:matches?'22px':'35px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
        Trusted by over 100+ businesses, our NFC cards offer seamless and secure solutions for diverse applications.
        </Grid>
      </Grid>
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',position:'absolute'}}>
            <img src={images2} width={60} style={{zIndex:2,marginLeft:'450%'}}></img>
        </Grid>
</></>:<></>}

    </Grid>)
}