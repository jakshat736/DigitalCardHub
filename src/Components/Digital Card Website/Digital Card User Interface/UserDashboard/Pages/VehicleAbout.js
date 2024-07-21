import {useMediaQuery, Grid, InputBase, IconButton, Button } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import logo from "../../../Digital Card Assets/logov.png"
import whatapp from "../../../Digital Card Assets/whatsappm.png"
import line from "../../../Digital Card Assets/lineaa.png"
import Utube from "../../Components/Utube";
import ReactPlayer from "react-player";

export default function VehicleAbout()
{
    const matchesA = useMediaQuery("(max-width:1000px)");
    const matches = useMediaQuery("(max-width: 1400px)");
    const matchesB = useMediaQuery("(max-width: 700px)");

    return(<Grid sx={{width:'100%',height:'100%',backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
        <Navbar/>
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
          
                <Grid sx={{fontSize:matches?'18px':"36px",width:matchesB?'80%':'40%',fontWeight:700,color:'#fff',marginTop:matchesB?'6%':'2%',textAlign:'center',lineHeight:matchesB?'28px':'38px'}}>
                You Are About to activate your Vehicle Tag.
                </Grid>

                <Grid sx={{fontSize:matches?'14px':"16px",fontWeight:400,width:matchesB?'80%':'50%',color:'#fff',marginTop:matchesB?'4%':'2%',textAlign:'center',lineHeight:'24px'}}>
                Please do input all necessary information asked in activation process and if you still need help then you can contact live support to help you out.
                </Grid>

                <Grid sx={{marginTop:matchesB?'6%':'2%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button
                      style={{
                        border: '1px solid #fff',
                        borderColor: '#fff',
                        height: '40px',
                        width:matchesB?'80%':'30%',
                        color: "#000",
                        fontSize: matchesA ? '14px' : "18px",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '10px',
                        display: "flex",
                        background: '#fff',
                        alignItems: "center",
                        justifyContent: "center",
                      }} >
                   Activate
                    </Button>
                </Grid>

                <Grid sx={{marginTop:matchesB?'7%':'4%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={line} style={{width:matchesB?'80%':'50%'}}></img>
                </Grid>
 
                <Grid sx={{fontSize:matches?'18px':"28px",width:'50%',fontWeight:700,color:'#fff',marginTop:matchesB?'6%':'3%',textAlign:'center'}}>
                How to Activate ?
                </Grid>

                <Grid sx={{marginTop:matchesB?'6%':'2%'}}>
                <Grid
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      borderRadius: '15px', overflow: 'hidden'
                    }}
                  >
                    <ReactPlayer height="210px" width={matchesB?'350px':'600px'} url="https://youtu.be/cQeT2IZ2Vws?si=7sy5uk8kZkSf0pvh" />
                  </Grid>
                </Grid>

                <Grid sx={{marginTop:matchesB?'7%':'4%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={line} style={{width:matchesB?'80%':'50%'}}></img>
                </Grid>

             
                <Grid sx={{fontSize:"18px",fontWeight:700,color:'#fff',marginTop:matchesB?'5%':'3%'}}>
                Contact live support !
                </Grid>

                <Grid sx={{marginTop:matchesB?'4%':'2%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button
                      style={{
                        border: '1px solid #fff',
                        borderColor: '#fff',
                        height: '40px',
                        width:matchesB?'80%':'30%',
                        color: "#fff",
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
                </Grid>
                <Grid sx={{marginTop:matchesB?'6%':'1%',fontSize:'16px',fontWeight:300,color:'#fff',marginBottom:'3%'}}>
            Copyrights © 2024 Powered By IndiaBuzz
            </Grid>
            </Grid>
        </Grid>
        )
}