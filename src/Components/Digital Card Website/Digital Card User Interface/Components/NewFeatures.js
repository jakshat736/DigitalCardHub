import { Grid } from "@mui/material";
import call from "../../Digital Card Assets/call.png"
import mail from "../../Digital Card Assets/mail.png"
import whatapp from "../../Digital Card Assets/whatsappp.png"
import share from "../../Digital Card Assets/share.png"
import gallery from "../../Digital Card Assets/gallery.png"
import pencil from "../../Digital Card Assets/pencil.png"
import rupai from "../../Digital Card Assets/paise.png"
import star from "../../Digital Card Assets/star.png"
import location from "../../Digital Card Assets/location.png"
import fb from "../../Digital Card Assets/fbnew.png"
import utube from "../../Digital Card Assets/youtube.png"
import enquery from "../../Digital Card Assets/enquery.png"
import store from "../../Digital Card Assets/store.png"
import location2 from "../../Digital Card Assets/location2.png"
import { useStyles } from "../../Digital Card User Interface/Components/HoveredCss";
import useMediaQuery from '@mui/material/useMediaQuery';
export default function NewFeatures()
{
    const matches = useMediaQuery("(max-width:1200px)");
    const matchesA = useMediaQuery("(max-width:650px)");
    const classes = useStyles()

    return(<Grid sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',marginTop:matchesA?'10%':'3%',flexDirection:'column'}}>
         <Grid sx={{alignItems:'center',fontSize:matches?'22px':'2.8vw',fontWeight:700,lineHeight:matches?'30px':'52px',color:'#fff',width:matches?'80%':'60%',textAlign:'center'}}>
      FEATURES
      </Grid>
      <Grid sx={{alignItems:'center',fontSize:matches?'12px':'20px',fontWeight:400,lineHeight:matches?'20px':'30px',color:'#fff',width:'60%',textAlign:'center',marginTop:'1.5%'}}>
       One business card , endless possibilities.
      </Grid>
        {matchesA?<></>:<><Grid sx={{width:matches?'96%':'82%',height:450,display:'flex',flexDirection:'column',gap:8,justifyContent:'center',marginBottom:'5%',marginTop:'3%'}}>
            <Grid sx={{display:'flex',justifyContent:'space-between'}}>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={call} width={30}></img>
                </Grid>
                <Grid  sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                One Click Call
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={mail} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                One Click Mail
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={share} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,cursor:'pointer',letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Share Unlimited
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={whatapp} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Easy Message
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={gallery} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Photo Gallery
                </Grid>
            </Grid>
        </Grid>



        <Grid sx={{display:'flex',justifyContent:'space-between'}}>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={pencil} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Easy to update
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={rupai} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
               Payment Section
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={star} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Get Custom FeedBack
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={location} width={28}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Easy Navigation
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={fb} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Upload Social Link
                </Grid>
            </Grid>
        </Grid>


        <Grid sx={{display:'flex',justifyContent:'space-between'}}>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid >
                <img src={utube} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Vedio Gallery
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={enquery} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                 Enquery Form
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={store} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Online Store
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={call} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                One Click Call
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={location2} width={28}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Add to Contact
                </Grid>
            </Grid>
        </Grid>
        </Grid></>}

    {/* For Mobile view */}


        {matchesA?<><Grid sx={{width:matches?'90%':'82%',height:'auto',display:'flex',flexDirection:'column',gap:8,justifyContent:'center',marginBottom:'10%',marginTop:'4%'}}>
            <Grid sx={{display:'flex',justifyContent:'space-between'}}>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={call} width={30}></img>
                </Grid>
                <Grid  sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                One Click Call
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={mail} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                One Click Mail
                </Grid>
            </Grid>
           
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={share} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,cursor:'pointer',letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Share Unlimited
                </Grid>
            </Grid>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:'space-between'}}>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={whatapp} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Easy Message
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={gallery} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Photo Gallery
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={pencil} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Easy to update
                </Grid>
            </Grid>
           
        </Grid>



        <Grid sx={{display:'flex',justifyContent:'space-between'}}>
       
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={star} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Get Custom FeedBack
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={location} width={28}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Easy Navigation
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={fb} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Upload Social Link
                </Grid>
            </Grid>
        </Grid>


        <Grid sx={{display:'flex',justifyContent:'space-between'}}>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid >
                <img src={utube} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Vedio Gallery
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={enquery} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                 Enquery Form
                </Grid>
            </Grid>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={store} width={30}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Online Store
                </Grid>
            </Grid>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:'center'}}>
            <Grid className={classes.button} sx={{border:'1px solid #fff',cursor:'pointer',borderRadius:'10px',width:matches?'100px':'173px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:1,background:'#fff',color:'#000',textAlign:'center'}}>
                <Grid>
                <img src={location2} width={28}></img>
                </Grid>
                <Grid sx={{fontSize:'12px',fontWeight:600,letterSpacing:'-2%',fontFamily:'Montserrat'}}>
                Add to Contact
                </Grid>
            </Grid>
        </Grid>
        </Grid></>:<></>}


    </Grid>)
}