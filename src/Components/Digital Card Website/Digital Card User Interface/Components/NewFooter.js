import { Divider, Grid,Button } from "@mui/material";
import Footerlogo from "../../Digital Card Assets/Footerlogo.png"
import blur from "../../Digital Card Assets/blurphn.png"
import blur2 from "../../Digital Card Assets/blurphn2.png"
import i1 from "../../Digital Card Assets/i1.png"
import i2 from "../../Digital Card Assets/i2.png"
import i3 from "../../Digital Card Assets/i3.png"
import i4 from "../../Digital Card Assets/i4.png"
import i5 from "../../Digital Card Assets/i5.png"
import i6 from "../../Digital Card Assets/i6.png"
import threephn from "../../Digital Card Assets/threephn.png"
import {useMediaQuery} from "@mui/material";
export default function Newfooter()
{

  const matchesA = useMediaQuery("(max-width:800px)");

    return(<Grid sx={{width:'100%',height:'auto',background:'#fff',display:'flex',justifyContent:'center',alignItems:'center',borderTopRightRadius: 10,
        borderTopLeftRadius: 10, boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, 1)",flexDirection:'column'}}>
        <Grid sx={{width:'82%',height:'500px',marginTop:'3%',position:'relative'}}>
        <Grid sx={{width:'100%',display:'flex',flexDirection:matchesA?"column":'row',justifyContent:matchesA?"center":"normal",alignItems:matchesA?"center":"normal",gap:matchesA?4:0}}>
        <Grid sx={{width:matchesA?'100%':'25%',position:'relative',display:'flex',alignItems:matchesA?'center':'normal',flexDirection:'column'}}>
        <Grid>
         <img src={Footerlogo} width={140}></img>
        </Grid>
        <Grid sx={{marginTop:'2%'}}>
            <Divider style={{height:'1px',width:'70%'}}/>
        </Grid>
        <Grid sx={{marginTop:'4%'}}>
          <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10,textAlign:matchesA?'center':''}}>18/2, Lotus Lane, Sector 56, Gurgaon, Haryana, India</Grid>
        </Grid>
        <Grid sx={{marginLeft:20,marginTop:'-15%',position:'absolute',zIndex:2}}>
        <img src={blur} width={100} style={{marginLeft:'auto'}}></img>
         </Grid>
          <Grid style={{marginTop:'14%'}}>
            <Grid sx={{fontSize:'20px',fontWeight:700,lineHeight:'30px'}}>
            CONTACT US !
            </Grid>
            </Grid>
            <Grid sx={{marginTop:'2%'}}>
          <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>+918889430333</Grid>
        </Grid>
        <Grid sx={{marginTop:'1%'}}>
          <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>ibuzz@indiabuzz.co.in</Grid>
        </Grid>
            </Grid>
            
            {matchesA?<></>:<><Grid sx={{width:'25%',marginLeft:matchesA?'':'9%'}}>
            <Grid sx={{fontSize:'20px',fontWeight:700,lineHeight:'30px'}}>
            QUICK LINKS
            </Grid>
            <Grid sx={{marginTop:'4%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>Contact us</Grid>
            </Grid>
            <Grid sx={{marginTop:'1%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>Terms and Conditions</Grid>
            </Grid>
            <Grid sx={{marginTop:'1%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>Privacy and Policy</Grid>
            </Grid>
            <Grid sx={{marginTop:'1%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>Refund Policy</Grid>
            </Grid>
            <Grid sx={{marginTop:'1%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>Shipping Policy</Grid>
            </Grid>
            </Grid></>}

            {matchesA?<></>:<><Grid sx={{width:'25%',marginLeft:matchesA?'':'6%'}}>
            <Grid sx={{fontSize:'20px',fontWeight:700,lineHeight:'30px'}}>
            MORE LINKS
            </Grid>
            <Grid sx={{marginTop:'4%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>Products</Grid>
            </Grid>
            <Grid sx={{marginTop:'1%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>How it Works ?</Grid>
            </Grid>
            <Grid sx={{marginTop:'1%'}}>
            <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-2%',zIndex:10}}>Compitable Devices</Grid>
            </Grid>
            </Grid></>}

            <Grid sx={{width:matchesA?'100%':'25%',display:'flex',alignItems:'center',flexDirection:'column'}}>
            <Grid sx={{fontSize:'20px',fontWeight:700,lineHeight:'30px'}}>
            ASK US ANYTHING ?
            </Grid>
            <Grid sx={{marginTop:'1%'}}>
            <input type="text" style={{height:40,borderColor:'#b2bec3',border:'1px solid #b2bec3',borderRadius:'10px',width:300}} placeholder="Enter Your Name"></input>
            </Grid>
            <Grid>
            <input type="text" style={{height:40,borderColor:'#b2bec3',border:'1px solid #b2bec3',borderRadius:'10px',width:300}} placeholder="Enter Your Email Or Number"></input>
            </Grid>
            <Grid>
            <input type="text" style={{height:60,borderColor:'#b2bec3',border:'1px solid #b2bec3',borderRadius:'10px',width:300}} placeholder="Feel Free To Ask AnyThink"></input>
            </Grid>
            <Grid>
            <Button
                sx={{
                  borderColor: "#bdc3c7",
                  height: 30,
                  width:250,
                  backgroundImage: "radial-gradient(#000,#000 )",
                  color: "#2c3e50",
                  justifyContent: "center",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  display: "flex",
                  borderRadius: 2,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
                fullWidth
              >
                <Grid
                  sx={{
                    marginLeft: 1.7,
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "12px",
                    fontFamily: "poppins",
                  }}
                >
                  Submit
                </Grid>
              </Button>
            </Grid>
            <Grid sx={{marginTop:'15%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Grid sx={{fontSize:'24px',fontWeight:700,lineHeight:'30px'}}>
            Social Media Links
            </Grid>
            <Grid sx={{display:'flex',width:'100%',justifyContent:"space-between",marginTop:'6%'}}>
            <Grid><img src={i1} width={22}></img></Grid>
            <Grid><img src={i2}  width={22}></img></Grid>
            <Grid><img src={i3}  width={22}></img></Grid>
            <Grid><img src={i4}  width={22}></img></Grid>
            <Grid><img src={i5}  width={22}></img></Grid>
            <Grid><img src={i6}  width={22}></img></Grid>
            </Grid>
            <Grid>
                <img src={blur2} width={100}></img>
            </Grid>
            </Grid>
            </Grid>
            {matchesA?<><Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',fontSize:'16px',fontWeight:400,letterSpacing:'-2%',lineHeight:'16px',marginTop:'-8%',textAlign:'center'}}>
        Copyrights © 2024 Powered By IndiaBuzz
        </Grid></>:<></>}  
        </Grid>
        {matchesA?<></>:<Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',position:'absolute',bottom:'-36%'}}>
          <img src={threephn} width={500}></img>
        </Grid>}
        </Grid>
        {matchesA?<></>:<Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',fontSize:'20px',fontWeight:400,letterSpacing:'-2%',lineHeight:'16px',marginTop:'10%'}}>
        Copyrights © 2024 Powered By IndiaBuzz
        </Grid>}
    </Grid>)
}