import { Grid, Divider,Button } from "@mui/material";
import NewHeader from "./NewHeader";
import line from "../../Digital Card Assets/lineforcheckout.png";
import card from "../../Digital Card Assets/cardimage1.png";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import card2 from "../../Digital Card Assets/checkoutcard.png"
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
export default function NewCheckOut2() {
  const matches = useMediaQuery("(max-width:1000px)");
  const matchesA = useMediaQuery("(max-width:600px)");
    var navigate=useNavigate()
    const handleNagivate=()=>{
      navigate('/newcheckout3')
  }
  return (
    <Grid
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
        fontFamily: "Montserrat",
      }}
    >
      <Grid>
        <NewHeader />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "auto",
          marginTop: "4%",
          color: "#FFFFFF",
          flexDirection:'column'
        }}
      >
        <Grid sx={{ width: "82%", height: 'auto' }}>

        <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Grid
              sx={{
                fontSize:matchesA?'18px':"36px",
                fontWeight: 600,
                lineHeight: "44px",
                letterSpacing: "-1.4%",
              }}
            >
              Checkout
            </Grid>
            <Grid
              sx={{
                display: "flex",
                gap:matchesA?1: 2,
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <Grid
                sx={{
                  fontSize:matchesA?'10px':"17px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Address
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <img src={line} style={{ width:matchesA?'12px': "100%", height: "1px" }}></img>
              </Grid>
              <Grid
                sx={{
                  fontSize:matchesA?'10px': "17px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Shipping
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <img src={line} style={{ width:matchesA?'12px': "100%", height: "1px" }}></img>
              </Grid>
              <Grid
              onClick={handleNagivate}
                sx={{
                  fontSize: matchesA?'10px':"17px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                  cursor:'pointer'
                }}
              >
                Payment
              </Grid>
            </Grid>
          </Grid>

          <Grid>
            <Divider
              style={{
                height: matchesA?'1px':"2px",
                backgroundColor: "#bdc3c7",
                width: "100%",
                marginTop: "2%",
              }}
            />
          </Grid>
          <Grid sx={{ display: "flex", width: "100%",flexDirection:matches?'column':'row',justifyContent:matches?'center':"normal",alignItems:matches?'center':"normal" }}>
            <Grid sx={{ width: matches?'100%':"55%", marginTop: "4%",gap:3 }}>
             <Grid sx={{width:matchesA?'100%':'80%',height:100,borderRadius:'10px',border:'1px solid #fff',background:'#fff',color:'#000'}}>
            <Grid sx={{display:'flex',padding:2}}>
            <Grid> <Checkbox  defaultChecked color="default"  /></Grid>
            <Grid>
            <Grid sx={{fontSize:'17px',fontWeight:700,lineHeight:'26px',letterSpacing:'-2.5%',marginTop:'4%'}}>UPS/USPS Surepost</Grid>
            <Grid sx={{fontSize:'17px',fontWeight:400,lineHeight:'26px',letterSpacing:'-2.5%',marginTop:'2%'}}>
            4-7 Business Days
            </Grid>
            </Grid>
            </Grid>
             </Grid>

             <Grid sx={{width:matchesA?'100%':'80%',height:100,borderRadius:'10px',border:'1px solid #fff',background:'#fff',color:'#000',marginTop:'5%'}}>
            <Grid sx={{display:'flex',padding:2}}>
            <Grid> <Checkbox  color="default"  /></Grid>
            <Grid>
            <Grid sx={{fontSize:'17px',fontWeight:700,lineHeight:'26px',letterSpacing:'-2.5%',marginTop:'4%'}}>UPS Ground Shipping</Grid>
            <Grid sx={{fontSize:'17px',fontWeight:400,lineHeight:'26px',letterSpacing:'-2.5%',marginTop:'2%'}}>
            3-5 Business Days
            </Grid>
            </Grid>
            </Grid>
             </Grid>

             <Grid sx={{width:matchesA?'100%':'80%',marginTop:'6%'}}>
             <Button
                fullWidth
                style={{
                  border: "1px solid #bdc3c7",
                  borderColor: "#bdc3c7",
                  background:'transparent',
                  height:matchesA?35: "3.3vw",
                  color: "#fff",
                  fontSize:matchesA?'14px':"1.2vw",
                  fontWeight: 400,
                  marginTop:'3%',
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
             Continue to payment
              </Button>
             </Grid>
            </Grid>
            <Grid sx={{ width:matches?'100%':"45%", marginTop: "2.5%", display: "flex" ,flexDirection:'column'}}>
            <Grid sx={{ marginTop: "2%" }}>
                <Grid
                  sx={{
                    display: "flex",
                    width: "100%",
                    gap: 2,
                    marginTop: "2%",
                    height: "auto",
                    
                  }}
                >
                  <Grid sx={{ width:matchesA?'20%':"19%" }}>
                    <img src={card} style={{ width: "100%" }}></img>
                  </Grid>
                  <Grid sx={{width:'85.8%'}}>
                  <Grid sx={{fontSize:matchesA?'16px':'22px',fontWeight:600,lineHeight:matchesA?'23px':'30px',letterSpacing:'-1.4%'}}>
                  Royal Black : DCH Digital instago  Google fastest 
                  Review Card
                  </Grid>
                  <Grid sx={{fontSize:matchesA?'10px':'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:'2%'}}>
                  Size: 80mm x 90mm
                  </Grid>
                  <Grid sx={{fontSize:matchesA?'10px':'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:matchesA?'0%':'2%'}}>
                  Quantity: 1
                  </Grid>
                  <Grid sx={{display:'flex',flexDirection:'row',marginTop:matchesA?'0%':'2%'}}>
                        <Grid sx={{fontSize:matchesA?'16px':'22px',fontWeight:700,lineHeight:'26px',color:'#19B300'}}>₹ 599</Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'16px',fontWeight:500,lineHeight:'26px',color:'#A39C00',marginLeft:'1%'}}><s>₹ 1499</s></Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'26px',textDecoration:'underline',marginLeft:'auto'}}>Remove</Grid>
                </Grid>
                </Grid>




                </Grid>
              </Grid>
              <Grid sx={{ marginTop: "6%" }}>
                <Grid
                  sx={{
                    display: "flex",
                    width: "100%",
                    gap: 2,
                    marginTop: "2%",
                    height: "auto",
                  }}
                >
                  <Grid sx={{ width:matchesA?'20%':"19%" }}>
                    <img src={card2} style={{ width: "100%" }}></img>
                  </Grid>
                  <Grid sx={{width:'85.8%'}}>
                  <Grid sx={{fontSize:matchesA?'16px':'22px',fontWeight:600,lineHeight:matchesA?'23px':'30px',letterSpacing:'-1.4%'}}>
                  Royal Black : DCH Digital instago  Google fastest 
                  Review Card
                  </Grid>
                  <Grid sx={{fontSize:matchesA?'10px':'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:'2%'}}>
                  Size: 80mm x 90mm
                  </Grid>
                  <Grid sx={{fontSize:matchesA?'10px':'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:matchesA?'0%':'2%'}}>
                  Quantity: 1
                  </Grid>
                  <Grid sx={{display:'flex',flexDirection:'row',marginTop:matchesA?'0%':'2%'}}>
                        <Grid sx={{fontSize:matchesA?'16px':'22px',fontWeight:700,lineHeight:'26px',color:'#19B300'}}>₹ 599</Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'16px',fontWeight:500,lineHeight:'26px',color:'#A39C00',marginLeft:'1%'}}><s>₹ 1499</s></Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'26px',textDecoration:'underline',marginLeft:'auto'}}>Remove</Grid>
                </Grid>
                </Grid>



                </Grid>
              </Grid>

            </Grid>
          </Grid>

        </Grid>
        <Grid sx={{fontSize:matchesA?'14px':'20px',fontWeight:500 ,lineHeight:'26px',letterSpacing:'-2.4%',marginTop:'5%',marginBottom:'2%'}}>
        Copyrights © 2024 Powered By IndiaBuzz
        </Grid>
      </Grid>
    </Grid>
  );
}
