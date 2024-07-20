import {useMediaQuery, Grid, InputBase, IconButton, Button } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import car from "../../../Digital Card Assets/carnew.png"
import bike from "../../../Digital Card Assets/bike.png"
import line from "../../../Digital Card Assets/linev.png"
import { useNavigate } from "react-router-dom";
import whatapp from "../../../Digital Card Assets/whatsappm.png"

export default function VehicleProfile()
{
    const matchesA = useMediaQuery("(max-width:1000px)");
    const matches = useMediaQuery("(max-width: 1400px)");
    const matchesB = useMediaQuery("(max-width: 600px)");

    var navigate= useNavigate()

    const handleSuccess=()=>{
      navigate('/vehiclesuccess')
    }


    return(<Grid sx={{width:'100%',height:'100vh',backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
        <Navbar/>
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
            <Grid sx={{fontSize:matchesB?'18px':'28px',fontWeight:matchesB?600:700,lineHeight:'26px',color:'#fff',marginTop:matchesB?'14px':'1.5%',textAlign:'center'}}>Vehicle Tag Information</Grid>
            <Grid sx={{width:'80%',height:matches?'auto':550,border:'1px solid #BEAB00',background:'#E8E8E8',borderRadius:'10px',marginTop:matchesB?'12px':'1.5%',color:'#000'}}>
                <Grid sx={{height:matchesB?55:60,background:'#BEAB00',padding:matchesB?1:1.2,display:'flex',justifyContent:"center",alignItems:'center',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
                <Grid sx={{color:'#fff',fontSize:matchesA?'14px':'18px',fontWeight:600,textAlign:'center'}}>Please enter your complete Vehicle number plate like 'MP07MC7277'</Grid>
                </Grid>
                <Grid sx={{width:'100%',display:'flex'}}>
                 <Grid sx={{width:matchesB?'1%':matchesA?'20%':'35%'}}>

                 </Grid>
                 <Grid sx={{width:matchesB?'98%':matchesA?'60%':'30%',padding:2,flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'center',color:'#000'}}>
                    <Grid sx={{fontSize:matchesB?'20px':'24px',fontWeight:600,textAlign:'center'}}>Select vehicle Type :</Grid>
                    <Grid sx={{display:'flex',alignItems:'center',width:'100%',marginTop:'4%',justifyContent:"space-between"}}>
                        <Grid sx={{textAlign:'center'}}>
                          <Grid>
                          <img src={bike} width={matchesB?40:50}></img>
                          </Grid>
                          <Grid sx={{marginTop:'1.5%',fontSize:matchesB?'14px':'16px',fontWeight:500,textAlign:"center"}}>
                          Two Wheeler
                          </Grid>
                        </Grid>
                        <Grid sx={{textAlign:'center'}}>
                          <Grid>
                          <img src={car} width={matchesB?40:50}></img>
                          </Grid>
                          <Grid sx={{marginTop:'1.5%',fontSize:matchesB?'14px':'16px',fontWeight:500,textAlign:"center"}}>
                          Four Wheeler
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{marginTop:'3%'}}>
                     <img src={line} style={{width:'100%'}}></img>
                    </Grid>
                    <Grid sx={{marginTop:'4%'}}>
                   <Grid sx={{fontSize:matchesB?'14px':'16px',fontWeight:500,textAlign:'left'}}>
                   Your Name
                   </Grid>
                   </Grid>
                    <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  width:'100%' ,
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#000",fontSize:'14px'}}
                  sx={{ ml: 1, flex: 1 }}
                />
              </Grid>
              <Grid sx={{marginTop:'4%',display:'flex',justifyContent:'space-between',gap:1.5,width:'100%'}}>
              <Grid>
              <Grid sx={{fontSize:matchesB?'14px':'16px',fontWeight:500,textAlign:"start"}}>
                  Vehicle name
                    </Grid>
                    <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  width:'100%' ,
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#000",fontSize:'14px'}}
                  sx={{ ml: 1, flex: 1 }}
                />
              </Grid>
              </Grid>

              <Grid>
              <Grid sx={{fontSize:matchesB?'14px':'16px',fontWeight:500,textAlign:"start"}}>
                 Vehicle no.
                    </Grid>
                    <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  width:'100%' ,
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#000",fontSize:'14px'}}
                  sx={{ ml: 1, flex: 1 }}
                />
              </Grid>
              </Grid>

              </Grid>
               

              <Grid sx={{marginTop:'4%'}}>
                   <Grid sx={{fontSize:matchesB?'14px':'16px',fontWeight:500,textAlign:'left'}}>
                   Whatsapp
                   </Grid>
                   </Grid>
                    <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  width:'100%' ,
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#000",fontSize:'14px'}}
                  sx={{ ml: 1, flex: 1 }}
                />
                  <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                >
                <div style={{border:'1px solid #000',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'14px',fontWeight:500,width:100,height:26,color:'#fff',background:'#000',borderRadius:'6px'}}>
                Get OTP
                </div>
                </IconButton>
              </Grid>

              <Grid sx={{marginTop:'1%',display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
              <Grid sx={{color:'#3B3B3B',fontWeight:500,fontSize:'12px'}}>OTP not Received ?</Grid>
              <Grid sx={{color:'blue',fontWeight:500,fontSize:'12px'}}>Resend</Grid>
              </Grid>
              <Grid sx={{ marginTop:'4%',width:'100%'}}>
              <Button onClick={handleSuccess}
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: '40px',
                        color: "#fff",
                        fontSize: matchesA ? '14px' : "16px",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '5px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    Verify
                    </Button>
              </Grid>
              {matchesB?<><Grid sx={{marginTop:matchesB?'4%':'2%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: '38px',
                        width:matchesB?'80%':'30%',
                        color: "#000",
                        fontSize: matchesA ? '14px' : "16px",
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
                </Grid></>:<></>}
                 </Grid>
                 <Grid sx={{width:matchesB?'1%':matchesA?'20%':'35%'}}>
                
                </Grid>
                </Grid>
            </Grid>
            <Grid sx={{marginTop:matchesB?'6%':'1%',fontSize:'16px',fontWeight:300,color:'#fff'}}>
            Copyrights © 2024 Powered By IndiaBuzz
            </Grid>
        </Grid>
        </Grid>)
}