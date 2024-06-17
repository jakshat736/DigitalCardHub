import { Grid, Divider,Button } from "@mui/material";
import NewHeader from "./NewHeader";
import line from "../../Digital Card Assets/lineforcheckout.png";
import card from "../../Digital Card Assets/cardimage1.png";
import card2 from "../../Digital Card Assets/checkoutcard.png"
import pay from "../../../Digital Card Website/MenuUpdate/assets/pay.png";
import leftarrow from "../../../Digital Card Website/MenuUpdate/assets/leftarrow.png";
import Chip from '@mui/material/Chip';
export default function NewCheckOut3() {
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
                fontSize: "36px",
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
                gap: 2,
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <Grid
                sx={{
                  fontSize: "17px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Address
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <img src={line} style={{ width: "100%", height: "1px" }}></img>
              </Grid>
              <Grid
                sx={{
                  fontSize: "17px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Shipping
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <img src={line} style={{ width: "100%", height: "1px" }}></img>
              </Grid>
              <Grid
                sx={{
                  fontSize: "17px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Payment
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Divider
              style={{
                height: "2px",
                backgroundColor: "#bdc3c7",
                width: "100%",
                marginTop: "2%",
              }}
            />
          </Grid>
          <Grid sx={{ display: "flex", width: "100%", }}>
            <Grid sx={{ width: "55%", marginTop: "4%",gap:3 }}>
            
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
                  <Grid sx={{ width: "19%" }}>
                    <img src={card} style={{ width: "100%" }}></img>
                  </Grid>
                  <Grid sx={{ width: "85.8%" }}>
                    <Grid
                      sx={{
                        fontSize: "22px",
                        fontWeight: 600,
                        lineHeight: "30px",
                        letterSpacing: "-1.4%",
                      }}
                    >
                      Royal Black : DCH Digital instago Google fastest Review
                      Card
                    </Grid>
                    <Grid
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-1.4%",
                        marginTop: "2%",
                      }}
                    >
                      Size: 80mm x 90mm
                    </Grid>
                    <Grid
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-1.4%",
                        marginTop: "2%",
                      }}
                    >
                      Quantity: 1
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "2%",
                      }}
                    >
                      <Grid
                        sx={{
                          fontSize: "22px",
                          fontWeight: 700,
                          lineHeight: "26px",
                          color: "#19B300",
                        }}
                      >
                        ₹ 599
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "26px",
                          color: "#A39C00",
                          marginLeft: "1%",
                        }}
                      >
                        <s>₹ 1499</s>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "26px",
                          textDecoration: "underline",
                          marginLeft: "auto",
                        }}
                      >
                        Remove
                      </Grid>
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
                  <Grid sx={{ width: "20%" }}>
                    <img src={card2} style={{ width: "100%" }}></img>
                  </Grid>
                  <Grid sx={{ width: "85.8%" }}>
                    <Grid
                      sx={{
                        fontSize: "22px",
                        fontWeight: 600,
                        lineHeight: "30px",
                        letterSpacing: "-1.4%",
                      }}
                    >
                      Royal Black : DCH Digital instago Google fastest Review
                      Card
                    </Grid>
                    <Grid
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-1.4%",
                        marginTop: "2%",
                      }}
                    >
                      Size: 80mm x 90mm
                    </Grid>
                    <Grid
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-1.4%",
                        marginTop: "2%",
                      }}
                    >
                      Quantity: 1
                    </Grid>
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "2%",
                      }}
                    >
                      <Grid
                        sx={{
                          fontSize: "22px",
                          fontWeight: 700,
                          lineHeight: "26px",
                          color: "#19B300",
                        }}
                      >
                        ₹ 599
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: "26px",
                          color: "#A39C00",
                          marginLeft: "1%",
                        }}
                      >
                        <s>₹ 1499</s>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "26px",
                          textDecoration: "underline",
                          marginLeft: "auto",
                        }}
                      >
                        Remove
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>


            </Grid>
            <Grid sx={{ width: "45%", marginTop: "2.5%", display: "flex" ,flexDirection:'column'}}>
                <Grid sx={{marginLeft:'auto',width:'80%',marginTop:'4%'}}>
            <Grid
                      sx={{
                        height: 40,
                        border: "1px solid #bdc3c7",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: '10px',
                        padding: 0.8,
                        width: "100%",
                      }}
                    >
                      <img src={pay}></img>
                      <Grid sx={{ marginLeft: "4%",color:'#bdc3c7' }}>Payment Method</Grid>
                      <img src={leftarrow} style={{ marginLeft: "auto" }}></img>
                    </Grid>
                    <Divider style={{marginTop:'2%',color:'red',height:'1px',borderColor:'#fff'}}>
                      <Chip style={{color:'#fff'}} label="Or" size="small" />
                    </Divider>
                    <Grid sx={{ marginTop: "5%", gap: 2, display: "flex" }}>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="Cardholder Name"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "2%", gap: 2, display: "flex" }}>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="card Number"
                  ></input>
                </Grid>
               
                <Grid sx={{ marginTop: "4%", gap: 2, display: "flex" }}>
                  <Grid>
                    <select
                      style={{
                        height: 40,
                        border: "1px solid #bdc3c7",
                        fontSize: "14px",
                        display: "flex",
                        borderRadius: 8,
                        padding: 0.6,
                        background:'transparent',
                        width:'10vw',
                        color:'#bdc3c7'
                      }}>
                      <option value="Month">Month</option>
                      <option value="India">India</option>
                    </select>
                  </Grid>
                  <Grid>
                    <select
                      style={{
                        height: 40,
                        border: "1px solid #bdc3c7",
                        fontSize: "14px",
                        display: "flex",
                        borderRadius: 8,
                        padding: 0.6,
                         background:'transparent',
                        width:'10vw',
                           color:'#bdc3c7'
                      }}
                    >
                      <option value="Year">Year</option>
                      <option value="MP">Gwalior</option>
                    </select>
                  </Grid>
                  <Grid sx={{marginTop: "-1.8%"}}>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                      width:'7vw',
                    }}
                    placeholder="CVC"
                  ></input>
                </Grid>
                  </Grid>
                  <Grid sx={{fontSize:'14px',fontWeight:400,lineHeight:'26px',marginTop:'3%',color:'#bdc3c7'}}>
                    Save card data for future payments
                    </Grid>
                    <Grid>
                    <Button
                fullWidth
                style={{
                  border: "1px solid #bdc3c7",
                  borderColor: "#bdc3c7",
                  background:'#0D0D0D',
                  height: "3vw",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 500,
                 marginTop:'3%',
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Pay With Card
              </Button>
                    </Grid>
                    </Grid>
                  
            </Grid>
          </Grid>

        </Grid>
        <Grid sx={{fontSize:'20px',fontWeight:500 ,lineHeight:'26px',letterSpacing:'-2.4%',marginTop:'5%',marginBottom:'2%'}}>
        Copyrights © 2024 Powered By IndiaBuzz
        </Grid>
      </Grid>
    </Grid>
  );
}
