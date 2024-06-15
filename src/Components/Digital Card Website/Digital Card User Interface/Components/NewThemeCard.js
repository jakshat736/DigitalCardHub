import { Grid,Divider,Button } from "@mui/material";
import NewHeader from "./NewHeader";
import card from "../../Digital Card Assets/cardimage1.png"
import sub from "../../Digital Card Assets/sub.png"
import add from "../../Digital Card Assets/add.png"
import cardphn from "../../Digital Card Assets/cardphn.png"
export default function NewThemeCard()
{
    return(<Grid sx={{width:'100%',backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
            <NewHeader/>
        </Grid>
        <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'4%',color:'#FFFFFF'}}>
           <Grid sx={{width:'82%',height:2000,display:'flex',flexDirection:'column'}}>
            <Grid sx={{width:'100%',display:'flex'}}>
            <Grid sx={{width:'60%',height:2000}}>
              <Grid sx={{fontSize:'36px',fontWeight:600,lineHeight:'44px',letterSpacing:'-1.4%'}}>
               Your cart
              </Grid>
              <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-1.4%',marginTop:'2%'}}>
              Not ready to checkout? Continue Shopping
              </Grid>
              <Grid sx={{display:'flex',width:'100%',gap:2,marginTop:'2%',height:160}}>
                <Grid sx={{width:'14.2%'}}>
                    <img src={card}  style={{width:'100%'}}></img>
                </Grid>
                <Grid sx={{width:'85.8%'}}>
                  <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'30px',letterSpacing:'-1.4%'}}>
                  Royal Black : DCH Digital instago  Google fastest 
                  Review Card
                  </Grid>
                  <Grid sx={{fontSize:'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:'2%'}}>
                  Size: 80mm x 90mm
                  </Grid>
                  <Grid sx={{fontSize:'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:'2%'}}>
                  Quantity: 1
                  </Grid>
                  <Grid sx={{display:'flex',flexDirection:'row',marginTop:'2%'}}>
                        <Grid sx={{fontSize:'22px',fontWeight:700,lineHeight:'26px',color:'#19B300'}}>₹ 599</Grid>
                        <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',color:'#A39C00',marginLeft:'1%'}}><s>₹ 1499</s></Grid>
                        <Grid sx={{fontSize:'12px',fontWeight:400,lineHeight:'26px',textDecoration:'underline',marginLeft:'auto'}}>Remove</Grid>
                </Grid>
                </Grid>
              </Grid>
              <Grid>
              <Divider
                style={{
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid>
            <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    width:'100%',
                    height:'2.7vw',
                    color: "#fff",
                    fontSize: ".8vw",
                    marginTop:'4%',
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                 Add more Items to cart +
                </Button>
            </Grid>
            
            <Grid sx={{marginTop:'10%'}}>
                <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%'}}>
                Order Information
                </Grid>
                <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid sx={{display:'flex',alignItems:'center'}}>
            <Grid sx={{fontSize:'16px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%',marginTop:'3%'}}>
            Return Policy
            </Grid>
            <Grid sx={{marginLeft:'auto'}}>
            <img src={sub} width={15}style={{marginTop:'180%'}}></img>
            </Grid>
            </Grid>
            <Grid sx={{fontSize:'16px',fontWeight:400,lineHeight:'26px',marginTop:'3%'}}>
            This is our example return policy which is everything you need to know about our returns.
            </Grid>
            <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid sx={{display:'flex',alignItems:'center'}}>
            <Grid sx={{fontSize:'16px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%',marginTop:'3%'}}>
            Shipping Options
            </Grid>
            <Grid sx={{marginLeft:'auto'}}>
            <img src={sub} width={15}style={{marginTop:'180%'}}></img>
            </Grid>
            </Grid>
            <Grid sx={{fontSize:'16px',fontWeight:400,lineHeight:'26px',marginTop:'3%'}}>
            This is our example return policy which is everything you need to know which is everything about our returns.
            </Grid>
            <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid sx={{display:'flex',alignItems:'center'}}>
            <Grid sx={{fontSize:'16px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%',marginTop:'3%'}}>
            Shipping Options
            </Grid>
            <Grid sx={{marginLeft:'auto'}}>
            <img src={add} width={15}style={{marginTop:'180%'}} ></img>
            </Grid>
            </Grid>
            <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>

            </Grid>
            </Grid>

     <Grid sx={{width:'40%',display:'flex'}}>
        <Grid sx={{display:'flex',width:'80%',marginLeft:'auto',flexDirection:'column',marginTop:'5%'}}>
      <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'44px',letterSpacing:'-2.5%'}}>
      Order Summary
      </Grid>
      <Grid sx={{marginTop:'3%'}}>
      <input type="text" style={{height:40,borderColor:'#ffff',border:'1px solid #ffff',borderRadius:'10px',width:'100%',background:'transparent'}} placeholder="Enter coupon code here"></input>
      </Grid>
      <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Subtotal
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       $200
       </Grid>

      </Grid>
      <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Shipping
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       Calculated at the next step
       </Grid>

      </Grid>
      <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Total
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       $200
       </Grid>

      </Grid>

       <Grid>
            <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    width:'100%',
                    height:'2.7vw',
                    color: "#fff",
                    fontSize: ".8vw",
                    marginTop:'5%',
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                Continue to checkout
                </Button>
            </Grid> 

            <Grid sx={{marginTop:'5%'}}>
              <img src={cardphn} width={450}></img>
            </Grid>
       </Grid>
      </Grid>
            </Grid>
           </Grid>
        </Grid>
    </Grid>)
}