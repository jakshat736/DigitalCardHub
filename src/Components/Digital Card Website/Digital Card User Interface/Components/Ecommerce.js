import { Grid } from "@mui/material";
import {useMediaQuery} from "@mui/material";
import blurbackgroundEcommerce from "../../Digital Card Assets/background11.png"
import blurbackgroundEcommerce2 from "../../Digital Card Assets/background22.png"
import right from "../../Digital Card Assets/righticon.png"
import mobiles from '../../Digital Card Assets/teenphn.png'
import mobile11 from "../../Digital Card Assets/singlephn.png"
export default function Ecommerce()
{
    const matches = useMediaQuery("(max-width:1050px)");
    const matchesA = useMediaQuery("(max-width:800px)");
    const matchesB = useMediaQuery("(max-width:600px)");

    return(<Grid>
    <Grid sx={{width:'100%',height:'auto'}}>
    <Grid sx={{width:'100%',position:'relative',display:'flex'}}>
    <img src={matchesA?blurbackgroundEcommerce2:blurbackgroundEcommerce} style={{width:matches?'100%':'100%',height:'auto'}}></img>
    <Grid sx={{color:'#fff',position:'absolute',width:'100%'}}>
     <Grid sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Grid sx={{color:'#fff',fontSize:matchesB?'22px':'2.5vw',fontWeight:700,lineHeight:matchesB?'30px':'3.3vw',marginTop:'6%',textAlign:'center'}}>
        DIGITAL CARD WITH ECOMMERCE
        </Grid>
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'row',width:'100%',height:'auto',alignItems:'center',marginTop:'7%'}}>
        <Grid sx={{display:'flex',flexDirection:'column',marginLeft:matchesB?'2%':'9%',width:matchesB?'60%':'48%',gap:matchesB?2:matches?2:4}}>
            <Grid sx={{display:'flex',color:'#fff',alignItems:'center'}}>
                <Grid><img src={right} width={matches?15:25}></img></Grid>
                <Grid sx={{fontSize:matches?'12px':'1.9vw',fontWeight:500,lineHeight:matchesB?'16px':'30px',marginLeft:'1%',marginTop:'-.3%'}}>Share cards unlimited times.</Grid>
            </Grid>
            <Grid sx={{display:'flex',color:'#fff',alignItems:'center'}}>
                <Grid><img src={right} width={matches?15:25}></img></Grid>
                <Grid sx={{fontSize:matches?'12px':'1.9vw',fontWeight:500,lineHeight:matchesB?'16px':'30px',marginLeft:'1%',marginTop:'-.3%'}}>Update cards unlimited times.</Grid>
            </Grid>
            <Grid sx={{display:'flex',color:'#fff',alignItems:'center'}}>
                <Grid><img src={right} width={matches?15:25}></img></Grid>
                <Grid sx={{fontSize:matches?'12px':'1.9vw',fontWeight:500,lineHeight:matchesB?'16px':'30px',marginLeft:'1%',marginTop:'-.3%'}}>Select designs from available templates.</Grid>
            </Grid>
            <Grid sx={{display:'flex',color:'#fff',alignItems:'center'}}>
                <Grid><img src={right} width={matches?15:25}></img></Grid>
                <Grid sx={{fontSize:matches?'12px':'1.9vw',fontWeight:500,lineHeight:matchesB?'16px':'30px',marginLeft:'1%',marginTop:'-.3%'}}>10+ Products in ecommerce store.</Grid>
            </Grid>
            <Grid sx={{display:'flex',color:'#fff',alignItems:'center'}}>
                <Grid><img src={right} width={matches?15:25}></img></Grid>
                <Grid sx={{fontSize:matches?'12px':'1.9vw',fontWeight:500,lineHeight:matchesB?'16px':'30px',marginLeft:'1%',marginTop:'-.3%'}}>Profile photo and social media links.</Grid>
            </Grid>
            <Grid sx={{display:'flex',color:'#fff',alignItems:'center'}}>
                <Grid><img src={right} width={matches?15:25}></img></Grid>
                <Grid sx={{fontSize:matches?'12px':'1.9vw',fontWeight:500,lineHeight:matchesB?'16px':'30px',marginLeft:'1%',marginTop:'-.3%'}}>Payment section and contact form included.</Grid>
            </Grid>
            <Grid sx={{display:'flex',color:'#fff',alignItems:'center'}}>
                <Grid><img src={right} width={matches?15:25}></img></Grid>
                <Grid sx={{fontSize:matches?'12px':'1.9vw',fontWeight:500,lineHeight:matchesB?'16px':'30px',marginLeft:'1%',marginTop:'-.3%'}}>10 Products in photo gallery.</Grid>
            </Grid>
        </Grid>
        {matchesB?<></>:<><Grid>
         <img src={mobiles} width={matches?300:500}></img>
        </Grid></>}
        {matchesB?<><Grid > 
         <img src={mobile11} width={148} ></img>
        </Grid></>:<></>}

        </Grid>
   
    </Grid>
    </Grid>
  </Grid>
{matchesB?<><Grid sx={{height:160}}>

</Grid></>:<></>}
</Grid>)
}