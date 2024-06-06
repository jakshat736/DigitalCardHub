import { Grid } from "@mui/material";
import image1 from "../../Digital Card Assets/blurnew2.png"
import images2 from "../../Digital Card Assets/blurnew.png"
import symbol from "../../Digital Card Assets/symbol.png"
import {useMediaQuery} from "@mui/material";
export default function Trusted()
{
    const matches = useMediaQuery("(max-width:700px)");
    const matchesA = useMediaQuery("(max-width:500px)");
    return(<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',color:'#fff',marginBottom:'10%',height:matches?'50vw':'30vw',marginTop:matchesA?'-15%':'0%'}}>
 <Grid sx={{display:'flex',justifyContent:"space-between",alignItems:'center',width:matches?'90%':'60%',position:'relative'}}>
      <Grid>
        <img src={image1} width={matches?70:150} style={{zIndex:2}}></img>
      </Grid>
      <Grid>
            <img src={images2} width={matches?70:150} style={{zIndex:2}}></img>
      </Grid>
</Grid>
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",width:matches?'95%':'52%',zIndex:10,position:'absolute'}}>
        <Grid>
            <img src={symbol} width={matches?30:70}></img>
        </Grid>
        <Grid sx={{fontSize:matches?'17px':'2.8vw',fontWeight:500,display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-.5%',marginBottom:'1%'}}>
        TRUSTED BY
        </Grid>
        <Grid sx={{fontSize:matches?'12px':'1.5vw',fontWeight:400,lineHeight:matches?'18px':'35px',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
        Trusted by over 100+ businesses, our NFC cards offer seamless and secure solutions for diverse applications .
        </Grid>
      </Grid>

    </Grid>)
}