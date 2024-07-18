import { Grid } from "@mui/material";
import card from "../../Digital Card Assets/card.png"
import card1 from "../../Digital Card Assets/card1.png"
import card2 from "../../Digital Card Assets/card2.png"
import card3 from "../../Digital Card Assets/card3.png"
import card4 from "../../Digital Card Assets/card4.png"
import card5 from "../../Digital Card Assets/card5.png"
import card6 from "../../Digital Card Assets/card6.png"
import card7 from "../../Digital Card Assets/card7.png"
import { useStyles } from "../../Digital Card User Interface/Components/ImageRotateCss";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NewCategories()
{  const classes = useStyles()
    const matches = useMediaQuery("(max-width:1200px)");
    const matchesA = useMediaQuery("(max-width:800px)");

    return(<Grid sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'8%'}}>
         <Grid sx={{alignItems:'center',fontSize:matches?'22px':'2.8vw',fontWeight:700,lineHeight:matches?'30px':'52px',color:'#fff',width:matches?'80%':'60%',textAlign:'center'}}>
         CATEGORIES WE WORK WITH
      </Grid>
      <Grid sx={{alignItems:'center',fontSize:matches?'12px':'20px',fontWeight:400,lineHeight:matches?'20px':'30px',color:'#fff',width:'75%',textAlign:'center',marginTop:'1.5%'}}>
      We have wide range categories to grow your business digitally and with review systems
      </Grid>
       {matchesA?<></>:<><Grid sx={{width:matches?'90%':'68%',height:500,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:10,marginBottom:'5%',marginTop:'1.4%'}}>
        <Grid sx={{display:'flex',justifyContent:"space-between",alignItems:'center',width:'100%'}}>
         <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
             Event
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card1} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Education
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card2} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Restaurant
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card3} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Courier
             </Grid>
             </Grid>
         </Grid>

         <Grid sx={{display:'flex',justifyContent:"space-between",alignItems:'center',width:'100%'}}>
         <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card4} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Instagram
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card5} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Digital
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card6} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Gym
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card7} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Review
             </Grid>
             </Grid>
         </Grid>
       </Grid></>}
{/* for mobile Phone */}

{matchesA?<><Grid sx={{width:'90%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:10,marginBottom:'5%',marginTop:'6%'}}>
        <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',width:'100%',gap:4}}>
         <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
             Event
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card1} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Education
             </Grid>
             </Grid>
             </Grid>
             <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',width:'100%',gap:4}}>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card2} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Restaurant
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card3} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Courier
             </Grid>
             </Grid>
         </Grid>

         <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',width:'100%',gap:4}}>
         <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card4} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Instagram
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card5} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Digital
             </Grid>
             </Grid>
             </Grid>
             
           <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',width:'100%',gap:4}}>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card6} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Gym
             </Grid>
             </Grid>
             <Grid className={classes.imageContainer} sx={{display:'flex',flexDirection:'column'}} >
            <Grid>
                <img className={classes.animatedImage} src={card7} width={100}  style={{background: 'transparent' 
                }}></img>
            </Grid>
             <Grid  sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'-14%'}}>
              Review
             </Grid>
             </Grid>
         </Grid>
       </Grid></>:<></>}

    </Grid>)
}