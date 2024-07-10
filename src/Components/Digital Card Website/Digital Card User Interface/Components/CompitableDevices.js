import {Typography,  Grid,Paper,IconButton} from "@mui/material";
import NewHeader from "./NewHeader";
import iphn from "../../Digital Card Assets/iphn.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import { useStyles } from "../../Digital Card User Interface/Components/HoveredCss";
import React, { useEffect, useState } from "react";
import Newfooter from "./NewFooter";

    const IosDevices = [
      {
        heading: "Apple",
        models: [
          {
            name: "iPhone 7",
          },
          {
            name: "iPhone 7 Plus",
          },
          {
            name: "iPhone 8",
          },
          {
            name: "iPhone 8 Plus",
          },
          {
            name: "iPhone X",
          },
          {
            name: "iPhone XS",
          },
          {
            name: "iPhone XS Max",
          },
          {
            name: "iPhone XR",
          },
          {
            name: "iPhone SE (2020)",
          },
          {
            name: "iPhone 11",
          },
          {
            name: "iPhone 11 Pro",
          },
          {
            name: "iPhone 12",
          },
          {
            name: "iPhone 12 Mini",
          },
          {
            name: "iPhone 12 Pro",
          },
          {
            name: "iPhone 12 Pro Max",
          },
          {
            name: "iPhone 13",
          },
          {
            name: "iPhone 13 Mini",
          },
          {
            name: "iPhone 13 Pro",
          },
          {
            name: "iPhone 13 Pro Max",
          },
          {
            name: "iPhone 14",
          },
          {
            name: "iPhone 14 Plus",
          },
          {
            name: "iPhone 14 Pro",
          },
          {
            name: "iPhone 14 Pro Max",
          },
        ],
      },
    ];
    const AndroidDevices = [
      {
        heading: "Samsung",
        models: [
          {
            name: "Galaxy SIII",
          },
    
          {
            name: "Galaxy S4",
          },
          {
            name: "Galaxy S5",
          },
          {
            name: "Galaxy S6",
          },
          {
            name: "Galaxy S6 Edge",
          },
          {
            name: "Galaxy S6 Edge+",
          },
          {
            name: "Galaxy S7",
          },
          {
            name: "Galaxy S7 Edge",
          },
          {
            name: "Galaxy S8",
          },
          {
            name: "Galaxy S8+",
          },
          {
            name: "Galaxy S9",
          },
          {
            name: "Galaxy S9+",
          },
          {
            name: "Galaxy S9 Plus",
          },
          {
            name: "Galaxy S10",
          },
          {
            name: "Galaxy S10 Plus",
          },
          {
            name: "Galaxy S21 Plus",
          },
          {
            name: "Galaxy S20 Plus",
          },
          {
            name: "Galaxy S20 Ultra",
          },
          {
            name: "Galaxy S21 Ultra",
          },
          {
            name: "Galaxy S20 FE",
          },
          {
            name: "Galaxy Note 3",
          },
          {
            name: "Galaxy Note 3 NEO",
          },
          {
            name: "Note 5",
          },
          {
            name: "Galaxy Note 5",
          },
          {
            name: "Galaxy Note 10 Lite",
          },
          {
            name: "Galaxy Note 10 Plus",
          },
          {
            name: "Galaxy Alpha",
          },
          {
            name: "Galaxy A32",
          },
          {
            name: "Galaxy A30s",
          },
          {
            name: "Galaxy A5",
          },
          {
            name: "Galaxy A50s",
          },
          {
            name: "Galaxy A51",
          },
          {
            name: "Galaxy A52s",
          },
          {
            name: "Galaxy A52",
          },
          {
            name: "Galaxy A70",
          },
          {
            name: "Galaxy A70s",
          },
          {
            name: "Galaxy A72",
          },
          {
            name: "Galaxy A80",
          },
          {
            name: "Galaxy M32",
          },
          {
            name: "Galaxy M40",
          },
          {
            name: "Galaxy M42",
          },
          {
            name: "Galaxy A50s 6GB RAM",
          },
          {
            name: "Galaxy M51",
          },
          {
            name: "Galaxy F62",
          },
          {
            name: "Galaxy On8",
          },
          {
            name: "Galaxy S3 Neo",
          },
          {
            name: "Galaxy Z Flip 3",
          },
          {
            name: "Galaxy S22+",
          },
          {
            name: "Galaxy Z Fold 4",
          },
          {
            name: "Galaxy S23",
          },
          {
            name: "Galaxy S23+",
          },
          {
            name: "Galaxy S23 Ultra",
          },
        ],
      },
      {
        heading: "One Plus",
        models: [
          {
            name: "OnePlus 3",
          },
          {
            name: "OnePlus 3T",
          },
          {
            name: "OnePlus 5",
          },
          {
            name: "OnePlus 5T",
          },
          {
            name: "OnePlus 6",
          },
          {
            name: "OnePlus 7",
          },
          {
            name: "OnePlus 7T",
          },
          {
            name: "OnePlus 7 Pro",
          },
          {
            name: "7T Pro McLaren Edition",
          },
          {
            name: "OnePlus 8 Pro",
          },
          {
            name: "OnePlus 8",
          },
          {
            name: "OnePlus Nord",
          },
          {
            name: "OnePlus 8T",
          },
          {
            name: "OnePlus 6T",
          },
          {
            name: "OnePlus 9",
          },
          {
            name: "OnePlus 9 Pro",
          },
          {
            name: "OnePlus 9 R",
          },
          {
            name: "OnePlus 10T 5G",
          },
          {
            name: "OnePlus 10R 5G",
          },
          {
            name: "OnePlus 10R Pro 5G",
          },
          {
            name: "OnePlus 9RT 5G",
          },
          {
            name: "OnePlus Nord CE 5G",
          },
          {
            name: "OnePlus Nord 2 5G",
          },
          {
            name: "OnePlus Nord CE 2 5G",
          },
          {
            name: "OnePlus Nord CE 2 Lite 5G",
          },
          {
            name: "OnePlus Nord 2T 5G",
          },
        ],
      },
      {
        heading: "Nokia",
        models: [
          {
            name: "Nokia 3",
          },
          {
            name: "Nokia 3.1",
          },
          {
            name: "Nokia 4.2",
          },
          {
            name: "Nokia 5",
          },
          {
            name: "Nokia 5.1",
          },
          {
            name: "Nokia 6",
          },
          {
            name: "Nokia 6.1",
          },
          {
            name: "Nokia 7",
          },
          {
            name: "Nokia 7 Plus",
          },
          {
            name: "Nokia 8 Sirocco",
          },
          {
            name: "Nokia 8",
          },
          {
            name: "Nokia 8.1",
          },
          {
            name: "Nokia 9",
          },
          {
            name: "Nokia Lumia 920",
          },
          {
            name: "Nokia Lumia 930",
          },
        ],
      },
      {
        heading: "Motorola",
        models: [
          {
            name: "Motorola One",
          },
          {
            name: "Motorola One Vision",
          },
          {
            name: "Motorola One Action",
          },
          {
            name: "Motorola One Vision Plus",
          },
          {
            name: "Moto Z3 Play",
          },
          {
            name: "Moto E4 Plus",
          },
          {
            name: "Moto X4",
          },
          {
            name: "Moto E5/Plus",
          },
          {
            name: "Moto E5 Play/Go",
          },
          {
            name: "Moto G5/G5S Plus",
          },
          {
            name: "Moto G6/Plus/Play",
          },
          {
            name: "Motorola Razr",
          },
          {
            name: "Motorola Moto Turbo",
          },
          {
            name: "Motorola Moto X Force",
          },
          {
            name: "Motorola Moto X Play",
          },
          {
            name: "Motorola Edge S",
          },
          {
            name: "Motorola Edge 20",
          },
          {
            name: "Motorola Edge 20 Fusion",
          },
          {
            name: "Motorola Edge S Pro",
          },
          {
            name: "Motorola Edge 20 Pro",
          },
          {
            name: "Motorola Edge 20 Lite",
          },
          {
            name: "Motorola Edge Plus",
          },
          {
            name: "Motorola Edge",
          },
          {
            name: "Motorola Defy",
          },
          {
            name: "Motorola Moto X",
          },
        ],
      },
      {
        heading: "Nothing",
        models: [
          {
            name: "Nothing Phone(1)",
          },
        ],
      },
      {
        heading: "LG",
        models: [
          {
            name: "LG G3",
          },
          {
            name: "LG G4",
          },
          {
            name: "LG G5",
          },
          {
            name: "LG Nexus 5X",
          },
          {
            name: "LG V10",
          },
          {
            name: "LG V20",
          },
          {
            name: "LG V30",
          },
          {
            name: "LG V30 ThinQ",
          },
          {
            name: "LG V35 ThinQ",
          },
          {
            name: "LG V40 ThinQ",
          },
          {
            name: "LG G6",
          },
          {
            name: "LG Q6",
          },
          {
            name: "LG Q6 Plus",
          },
          {
            name: "LG Q Styus",
          },
          {
            name: "LG Q Stylus 4",
          },
          {
            name: "LG Q7",
          },
          {
            name: "LG G7 ThinQ",
          },
          {
            name: "LG Q8",
          },
          {
            name: "LG G8 ThinQ",
          },
          {
            name: "LG Q92",
          },
          {
            name: "LG K10",
          },
          {
            name: "LG K62",
          },
          {
            name: "LG K92",
          },
          {
            name: "LG V35 ThinQ",
          },
          {
            name: "LG Wing",
          },
          {
            name: "LG G7 Plus ThinQ",
          },
          {
            name: "LG G4 Dual",
          },
          {
            name: "LG G2",
          },
          {
            name: "LG Stylus 2 Plus",
          },
          {
            name: "LG F70",
          },
          {
            name: "LG G Pro 2",
          },
          {
            name: "LG Q7 Plus",
          },
        ],
      },
      {
        heading: "Google",
        models: [
          {
            name: "Google Pixel",
          },
          {
            name: "Google Pixel XL",
          },
          {
            name: "Google Pixel 2",
          },
          {
            name: "Google Pixel 2XL",
          },
          {
            name: "Google Pixel 3XL",
          },
          {
            name: "Google Pixel 3",
          },
          {
            name: "Google Pixel 3A",
          },
          {
            name: "Google Nexus 4",
          },
          {
            name: "Google Pixel 4A",
          },
          {
            name: "Google LG Nexus 5",
          },
          {
            name: "Google Nexus 5X",
          },
          {
            name: "Google Nexus 6P",
          },
          {
            name: "Google Pixel 6a",
          },
          {
            name: "Google Pixel 6",
          },
          {
            name: "Google Pixel Pro",
          },
          {
            name: "Google Pixel 7",
          },
          {
            name: "Google Pixel 7a",
          },
          {
            name: "Google PPixel 7 Pro",
          },
        ],
      },
      {
        heading: "Sony",
        models: [
          {
            name: "XA1/Ultra/Plus",
          },
          {
            name: "XA2/Ultra/Plus",
          },
          {
            name: "XZ1/Compact",
          },
          
          {
            name: "Sony Xperia 10",
          },
          {
            name: "Sony Xperia 10 Lite",
          },
          {
            name: "Sony Xperia 8 Lite",
          },
          {
            name: "Sony Xperia XA1",
          },
          {
            name: "Sony Xperia Z1",
          },
          {
            name: "Sony Xperia C5",
          },
          {
            name: "Sony Xperia XZ1",
          },
          {
            name: "Sony Xperia XA1 Dual",
          },
          {
            name: "Sony Xperia XA1 Ultra",
          },
          {
            name: "Sony Xperia XZ",
          },
          {
            name: "Sony Xperia T3",
          },
          {
            name: "Sony Xperia XA",
          },
          {
            name: "Sony Xperia ZR",
          },
          {
            name: "Sony Xperia Z3+",
          },
          {
            name: "Sony Xperia SP",
          },
          {
            name: "Sony Xperia XA1 Plus",
          },
          {
            name: "Sony Xperia Z2",
          },
          {
            name: "Sony Xperia Z5",
          },
          {
            name: "Sony Xperia T2",
          },
          {
            name: "Sony Xperia E3",
          },
          {
            name: "Sony Xperia Z3",
          },
          {
            name: "Sony Xperia L2",
          },
          {
            name: "Sony Xperia M2",
          },
        ],
      },
      {
        heading: "Asus",
        models: [
          {
            name: "Asus ROG phone",
          },
        ],
      },
      {
        heading: "Honor",
        models: [
          {
            name: "Honor 8",
          },
          {
            name: "Honor View 20",
          },
          {
            name: "Honor V10",
          },
          {
            name: "Honor 8 Pro",
          },
        ],
      },
      {
        heading: "HTC",
        models: [
          {
            name: "HTC One A9",
          },
          {
            name: "HTC Desire 20 Plus",
          },
          {
            name: "HTC U Ultra",
          },
          {
            name: "HTC 10 Evo",
          },
          {
            name: "HTC U11 Plus",
          },
          {
            name: "HTC Desire 10 Pro",
          },
          {
            name: "HTC One E8",
          },
          {
            name: "HTC Desire Eye",
          },
          {
            name: "HTC 10 Lifestyle",
          },
          {
            name: "HTC One ME",
          },
          {
            name: "HTC One E9+",
          },
          {
            name: "HTC One M9 Plus",
          },
        ],
      },
      {
        heading: "Essential",
        models: [
          {
            name: "Essential PH-1",
          },
        ],
      },
      {
        heading: "Poco",
        models: [
          {
            name: "Poco F2 Pro",
          },
          {
            name: "Poco F3",
          },
          {
            name: "Poco X3 GT",
          },
        ],
      },
    ];
     
      
    

       export default function CompitableDevices()
   {  
         const classes = useStyles(); 
         const theme = useTheme();
          const matches = useMediaQuery(theme.breakpoints.down('md'));
          const matchesA = useMediaQuery("(max-width:700px)");
      
      const [iosDevices, setIosDevices] = useState(IosDevices);
      const [androidDevices, setAndroidDevices] = useState(AndroidDevices);
    
      useEffect(()=>{
        window.scroll({
            top: 0,
            left: 0,
            behavior:'instant',
          });
      },[])
    
      const IosComponent = () => {
        return iosDevices.map((heading) => {
          return (


            <Paper
            elevation={6}
            sx={{
              display: "flex",
              flexDirection:"column",
              padding:2.2,
              width: "100%"
              ,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",
              color:'#fff'
            }}
          >
            <Grid item xs={12}>
              <Grid sx={{ margin: 1,fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px' }}>{heading.heading}</Grid>
            </Grid>
            <Grid sx={{display:'flex',flexWrap:'wrap',margin:1.5,width:'100%',justifyContent:"space-between",textAlign:"left"}}>
            {
              heading.models.map((model)=>{
                  return(
                      <Grid  className={classes.button5} sx={{width:{xs:'40%',sm:'30%',md:'20%'},margin:1,cursor:'pointer'}}>{model.name}</Grid>
                  )
              })
            }
            </Grid>
          </Paper>


          );
        });
      };
    
      
      const AndroidComponent = () => {
        return androidDevices.map((heading) => {
          return (
            <Paper
            elevation={6}
            sx={{
              display: "flex",
              flexDirection:"column",
              padding:2.2,
              width: "100%"
              ,borderRadius:'10px',border:'1px solid #636e72',background: "radial-gradient(#636e72,#414141 )",
              color:'#fff',
              marginBottom:'3%'
            }}
          >
            <Grid item xs={12}>
              <Grid sx={{ margin: 1,fontSize:matchesA?'22px':'28px',fontWeight:700,lineHeight:'30px' }}>{heading.heading}</Grid>
            </Grid>
            <Grid sx={{display:'flex',flexWrap:'wrap',margin:1.5,width:'100%',justifyContent:"space-between",textAlign:"left"}}>
            {
              heading.models.map((model)=>{
                  return(
                      <Grid  className={classes.button5} sx={{width:{xs:'40%',sm:'30%',md:'20%'},margin:1,cursor:'pointer'}}>{model.name}</Grid>
                  )
              })
            }
            </Grid>
          </Paper>

          );
        });
      };
    
    


    

    return( <Grid>
      <Grid>
        <Grid sx={{position:'sticky',top:'0',zIndex:50}}>
            <NewHeader/>
            </Grid>
    <Grid sx={{width:'100%',height:'auto',backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
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
    <Grid>
    <IosComponent/>
      <Grid/>


       <Grid sx={{fontSize:matchesA?'20px':'26px',fontWeight:600,marginTop:'4%'}}>
        Android Devices
       </Grid>
       <Grid>
       <AndroidComponent/>
       </Grid>
    </Grid>
   </Grid>
    </Grid>
    </Grid>
    
      </Grid>
      <Newfooter/>
        </Grid>)
}