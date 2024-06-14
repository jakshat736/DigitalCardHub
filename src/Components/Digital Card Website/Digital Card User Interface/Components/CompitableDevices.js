import { Grid,Paper,IconButton} from "@mui/material";
import NewHeader from "./NewHeader";
import iphn from "../../Digital Card Assets/iphn.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import { useStyles } from "../../Digital Card User Interface/Components/HoveredCss";
export default function CompitableDevices()
{   
   const classes = useStyles(); 
   const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesA = useMediaQuery("(max-width:700px)");
    return( <Grid>
        <Grid sx={{position:'sticky',top:'0',zIndex:50}}>
            <NewHeader/>
            </Grid>
    <Grid sx={{width:'100%',height:'100%',backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
   <Grid sx={{width:matchesA?'90%':'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
    <Grid sx={{marginTop:'5%',fontSize:matchesA?'24px':'40px',fontWeight:700,lineHeight:'36px',color:'#fff',textAlign:'center'}}>
    IS YOUR PHONE DCH COMPITABLE ?
    </Grid>
    <Grid sx={{marginTop:'1%',fontSize:matchesA?'14px':'20px',fontWeight:400,lineHeight:matchesA?'28px':'36px',color:'#fff',textAlign:'center',width:matchesA?'70%':'100%'}}>
    Here’s a list of smartphones that are compatible with DCH feature.
    </Grid>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: matches?280:500,borderRadius:1.5,height:matches?38:45,marginTop:'2%',backgroundImage: "radial-gradient(,#636e72,#636e72)",border:'1px solid #b2bec3' }}>
     <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter device name to search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    
    <Grid sx={{width:'82%'}}>
    <Grid sx={{display:'flex',marginTop:'6%',alignItems:'center'}}>
    <Grid sx={{fontSize:matchesA?'24px':'36px',fontWeight:700,lineHeight:'30px',color:'#fff'}}>Updated List</Grid>
    <Grid>
        <img src={iphn} width={matchesA?50:100} ></img>
    </Grid>
    </Grid>
    <Grid sx={{fontSize:matchesA?'18px':'26px',fontWeight:600,marginTop:'1%'}}>
    IOS Devices
    </Grid>
        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'2%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Apple</Grid>
         <Grid item xs={12}   sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 14</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 14 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 14 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 14 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 12</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 12 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 12 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 12 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 12</Grid>
            </Grid> 
         </Grid>
        </Grid>


        <Grid sx={{fontSize:matchesA?'20px':'26px',fontWeight:600,marginTop:'4%'}}>
        Android Devices
       </Grid>
        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'2%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Google</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel 6</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixiel 6 pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 </Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel 7</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel 7</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel 7 pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel 7s</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >pixel 7</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel fold</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel 8 pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>pixel 7 pro</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            </Grid> 
         </Grid>
        </Grid>
        


        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'4%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Samsung</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Sumsung 12</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Sumsung s22</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy </Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Samsung </Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy S23 FE</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>NEW. Galaxy S24 Ultra.</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>NEW. Galaxy S24 | S24+</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Galaxy Z Flip5</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Galaxy Z Fold5</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Galaxy Z Fold5</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Galaxy Z Fold5</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Galaxy Fit3</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Galaxy Fit3</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Galaxy Fit3</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Galaxy Fit3</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Samsung Galaxy S23 FE</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy S23 FE</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy S23 FE</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy S23 FE</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Samsung Galaxy Z Flip 5</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy M34 5G</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy S23 Ultra</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy S23 Ultra</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy F04</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy F04</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy F04</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Samsung Galaxy F04</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
          <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid item xs={matches?6:3} >IPhone 13</Grid>
            </Grid> 
         </Grid>
        </Grid>


        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'4%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Asus</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Asus</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>ROG Phone 15</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 </Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}}  item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            </Grid> 
         </Grid>
        </Grid>

        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'4%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Motorola</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >Sumsung 12</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>Sumsung s22</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 </Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}}  item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
          <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            </Grid> 
         </Grid>
        </Grid>
        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'2%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Nokia</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}}  item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            </Grid> 
         </Grid>
        </Grid>

        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'2%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Sony</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro Max</Grid>
            </Grid> 
         </Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            </Grid> 
         </Grid>
        </Grid>

        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'2%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>HTC</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            </Grid> 
         </Grid>
        </Grid>

        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'2%',gap:2.2}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Cat</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Pro</Grid>
            </Grid> 
         </Grid>
        </Grid>

        <Grid container sx={{background:'',width:'100%',height:'auto',padding:2.5,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",marginTop:'2%',gap:2.2,marginBottom:'3%'}}>
         <Grid item xs={12} sx={{fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px'}}>Fair Phone</Grid>
         <Grid item xs={12}  sx={{fontSize:matchesA?'16px':'24px',fontWeight:400,display:'flex',justifyContent:'space-between'}}>
            <Grid container spacing={2}>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3} >IPhone 13</Grid>
            <Grid className={classes.button5} sx={{cursor:'pointer'}} item xs={matches?6:3}>IPhone 13 Mini</Grid>
            </Grid> 
         </Grid>
    
        </Grid>


    </Grid>
   </Grid>
    </Grid></Grid>)
}