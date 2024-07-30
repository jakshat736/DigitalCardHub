import { Button,useMediaQuery, Dialog, Divider, Grid, Paper } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import Box from "../../../MenuUpdate/administrator/Box";
import car from "../../../Digital Card Assets/cardd.png"
import bike from "../../../Digital Card Assets/biked.png"
import whatapp from "../../../Digital Card Assets/whatsappm.png"
import arrow from "../../../Digital Card Assets/arrowd.png"
import ankit from "../../../Digital Card Assets/ankit111.png"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NewBussinessDashboard1() 
{  



    const [openDrawer, setOpenDrawer] = useState(false);
    const [hide, setHide] = useState(false);

    const handleClick = () => {
        setOpenDrawer(!openDrawer);
        setHide(!hide)
    }

    var navigate= useNavigate()

    const handleDashboard=()=>{
      navigate('/newbussinessdashboard2')
    }



    



  return (
    <Grid
      style={{
        backgroundColor: "#000",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column'
      }}
    >
      <Grid
        container
        sx={{
          width: { xs: "100vw", sm: "70%", md: "37%" },
          height: "100%",
          background:'#E6E6E6',
          position: "relative",
          fontFamily:'Montserrat',
          color:'#000',
        }}
      >
         <Navbar/>
        <Grid item xs={12}>
          <Grid
            sx={{
              padding: 1.8,
              height: "auto",
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'column'
            }}>
             <Grid sx={{fontSize:'24px',fontWeight:700,marginTop:'2.5%'}}>
             Business profiles
             </Grid>
             <Grid sx={{fontSize:'16px',fontWeight:400,marginTop:'2.5%',textAlign:'center'}}>
             Manage all business profiles from one place.
             </Grid>
          </Grid>
          <Divider
              style={{
                background:'#b2bec3',
                height:'2px'
              }}
            />
             <Grid
            sx={{
              padding: 2.2,
              height: "auto",
              marginTop:'3%'
            }}>
                <Grid sx={{fontSize:'16px',fontWeight:500}}>
                Active profiles
                </Grid>
                <Grid sx={{marginTop:'2%'}}>
              <Paper onClick={handleDashboard} elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center'}}>
                 <Grid>
                    <img src={ankit} width={50}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   Ankit narwariya
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Unique id : Ogdf6gdrg6arf
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto',textAlign:'center'}}>
                 <Grid sx={{fontSize:'12px',fontWeight:400,textAlign:'center'}}>
                   View
                   </Grid>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   7776
                   </Grid>
                 </Grid>
              </Paper>

              <Paper  elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center',marginTop:'3%'}}>
                 <Grid>
                    <img src={ankit} width={50}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   Harshit Jain
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Unique id : Chgvhgdrg6arf
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto',textAlign:'center'}}>
                 <Grid sx={{fontSize:'12px',fontWeight:400,textAlign:'center'}}>
                   View
                   </Grid>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   4768
                   </Grid>
                 </Grid>
              </Paper>


              <Paper  elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center',marginTop:'3%'}}>
                 <Grid>
                    <img src={ankit} width={50}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   Juned Solaki
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Unique id : jbgugh6gdrg6arf
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto',textAlign:'center'}}>
                 <Grid sx={{fontSize:'12px',fontWeight:400,textAlign:'center'}}>
                   View
                   </Grid>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   8798
                   </Grid>
                 </Grid>
              </Paper>


                </Grid>

                <Divider
              style={{
                background:'#b2bec3',
                height:'1px',
                marginTop:'8%'
              }}
            />

                <Grid sx={{marginTop:'4%',display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:500}}>
                   Inactive Tags
                   </Grid>
                   <Grid onClick={handleClick} >
                   {openDrawer ? (
                    <ExpandMore fontSize="medium" />
                ) : (
                    <ExpandLess fontSize="medium" />
                )}
                   </Grid>
                </Grid>

                {hide?<></>:<><Grid sx={{marginTop:'3%'}}>
                <Paper  elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center'}}>
                 <Grid>
                    <img src={ankit} width={50}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   Chinmay Sharma
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Unique id : tghdf6gdrg6arf
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto',textAlign:'center'}}>
                 <Grid sx={{fontSize:'12px',fontWeight:400,textAlign:'center'}}>
                   View
                   </Grid>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   4368
                   </Grid>
                 </Grid>
              </Paper>
             

              <Paper  elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center',marginTop:'3%'}}>
                 <Grid>
                    <img src={ankit} width={50}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   Ankit narwariya
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Unique id : Ogdf6gdrg6arf
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto',textAlign:'center'}}>
                 <Grid sx={{fontSize:'12px',fontWeight:400,textAlign:'center'}}>
                   View
                   </Grid>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                  8766
                   </Grid>
                 </Grid>
              </Paper>
                </Grid></>}

                <Grid sx={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',padding:2,marginTop:'4%'}}>
                <Grid sx={{fontSize:'18px',fontWeight:600}}>
                   Contact live support !
                   </Grid>
                   <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: '38px',
                        marginTop:'5%',
                        width:'80%',
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: 500,
                        textTransform: "none",
                        borderRadius: '10px',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap:10
                      }} >
               <img src={whatapp} width={24}></img>    Live Support
                    </Button>
                    <Grid sx={{fontSize:'14px',fontWeight:600,marginTop:'4%'}}>
                    Copyrights © 2024 Powered By IndiaBuzz
                   </Grid>
                </Grid>
            </Grid>
        </Grid>

          </Grid>
        </Grid>
  );
}
