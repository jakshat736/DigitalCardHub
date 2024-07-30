import { Button,useMediaQuery, Dialog, Divider, Grid, Paper } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import Box from "../../../MenuUpdate/administrator/Box";
import car from "../../../Digital Card Assets/cardd.png"
import bike from "../../../Digital Card Assets/biked.png"
import whatapp from "../../../Digital Card Assets/whatsappm.png"
import arrow from "../../../Digital Card Assets/arrowd.png"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function VehicleDashboard() 
{  



    const [openDrawer, setOpenDrawer] = useState(false);
    const [hide, setHide] = useState(false);

    const handleClick = () => {
        setOpenDrawer(!openDrawer);
        setHide(!hide)
    }

    var navigate= useNavigate()

    const handleCar=()=>{
      navigate('/carvehicle')
    }

    const handleBike=()=>{
        navigate('/bikevehicle')
      }


    



  return (
    <Grid
      style={{
        backgroundColor: "#2d3436",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column'
      }}
    >
        <Navbar/>
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
             Tag dashboard
             </Grid>
             <Grid sx={{fontSize:'16px',fontWeight:400,marginTop:'2.5%',textAlign:'center'}}>
             Manage all your vehicle tags from here.
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
                Active Tags
                </Grid>
                <Grid sx={{marginTop:'2%'}}>
              <Paper onClick={handleBike} elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center'}}>
                 <Grid>
                    <img src={bike} width={30}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   <span>#MP07MS</span><span style={{color:'#e67e22'}}>9291</span>
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                    Yamaha RX100
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto'}}>
                 <img src={arrow} width={20}></img>
                 </Grid>
              </Paper>

              <Paper elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center',marginTop:'3%'}}>
                 <Grid>
                    <img src={bike} width={30}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   <span>#MP07MS</span><span style={{color:'#e67e22'}}>8813</span>
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Activa 5G
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto'}}>
                 <img src={arrow} width={20}></img>
                 </Grid>
              </Paper>


              <Paper onClick={handleCar} elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center',marginTop:'3%'}}>
                 <Grid>
                    <img src={car} width={30}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   <span>#MP07CH</span><span style={{color:'#e67e22'}}>6617</span>
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Alto 800
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto'}}>
                 <img src={arrow} width={20}></img>
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
              <Paper elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center'}}>
                 <Grid>
                    <img src={bike} width={30}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   <span>#MP07MS</span><span style={{color:'#e67e22'}}>9291</span>
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                    Yamaha RX100
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto'}}>
                 <img src={arrow} width={20}></img>
                 </Grid>
              </Paper>

             

              <Paper elevation={3} sx={{width:'100%',height:60,padding:2,borderRadius:'8px',display:'flex',alignItems:'center',marginTop:'3%'}}>
                 <Grid>
                    <img src={car} width={30}></img>
                 </Grid>
                 <Grid sx={{marginLeft:'4%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:700}}>
                   <span>#MP07CH</span><span style={{color:'#e67e22'}}>6617</span>
                   </Grid>
                   <Grid sx={{fontSize:'12px',fontWeight:400}}>
                   Alto 800
                   </Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto'}}>
                 <img src={arrow} width={20}></img>
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
