import {useMediaQuery, Grid, InputBase, IconButton, Button } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import logo from "../../../Digital Card Assets/logov.png"
import whatapp from "../../../Digital Card Assets/whatsappm.png"
import line from "../../../Digital Card Assets/linev.png"
export default function VehicalSuccess()
{
    const matchesA = useMediaQuery("(max-width:1000px)");
    const matches = useMediaQuery("(max-width: 1400px)");
    const matchesB = useMediaQuery("(max-width: 600px)");
    return(<Grid sx={{width:'100%',height:'100vh',backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
        <Navbar/>
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
            <Grid sx={{width:'80%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:matches?'auto':550,border:'1px solid #BEAB00',background:'#E8E8E8',borderRadius:'10px',marginTop:matchesB?'12px':'2.5%',color:'#000',padding:2}}>
                <Grid>
                  <img src={logo} width={matchesB?100:120}></img>
                </Grid>
                <Grid sx={{fontSize:matches?'18px':"24px",fontWeight:700,color:'#DAAA00',marginTop:matchesB?'6%':'2%'}}>
                Congratulation ! Your Vehicle has vehicle tag now.
                </Grid>

                <Grid sx={{fontSize:matches?'14px':"18px",fontWeight:500,color:'#000',marginTop:matchesB?'6%':'2%'}}>
                We have enabled the calling feature on your tag, you can go to dashboard and manage your tag.
                </Grid>

                <Grid sx={{marginTop:matchesB?'6%':'2%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: '40px',
                        width:matchesB?'100%':'50%',
                        color: "#fff",
                        fontSize: matchesA ? '14px' : "16px",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '10px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} >
                    Verify
                    </Button>
                </Grid>

                <Grid sx={{marginTop:matchesB?'7%':'2%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={line} style={{width:matchesB?'100%':'50%'}}></img>
                </Grid>
 
                <Grid sx={{fontSize:matches?'18px':"22px",fontWeight:700,color:'#DAAA00',marginTop:matchesB?'7%':'2%'}}>
                Share ! 
                </Grid>

                <Grid sx={{fontSize:matches?'14px':"18px",fontWeight:500,color:'#000',marginTop:matchesB?'6%':'2%'}}>
                Let your friends know that you have a wonderful feature on your vehicle and also let them try it also.
                </Grid>

                <Grid sx={{marginTop:matchesB?'6%':'2%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: '40px',
                        width:matchesB?'100%':'50%',
                        color: "#fff",
                        fontSize: matchesA ? '14px' : "16px",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '10px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} >
                   Share Now
                    </Button>
                </Grid>

                <Grid sx={{fontSize:"18px",fontWeight:700,color:'#000',marginTop:matchesB?'5%':'3%'}}>
                Contact live support !
                </Grid>

                <Grid sx={{marginTop:matchesB?'4%':'2%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: '40px',
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
                </Grid>

            </Grid>
            <Grid sx={{marginTop:matchesB?'6%':'1%',fontSize:'16px',fontWeight:300,color:'#fff'}}>
            Copyrights © 2024 Powered By IndiaBuzz
            </Grid>
        </Grid>
        </Grid>)
}