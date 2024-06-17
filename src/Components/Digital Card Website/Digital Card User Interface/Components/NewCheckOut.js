import { Grid, Divider,Button } from "@mui/material";
import NewHeader from "./NewHeader";
import line from "../../Digital Card Assets/lineforcheckout.png";
import card from "../../Digital Card Assets/cardimage1.png";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
export default function NewCheckOut() {
  var navigate=useNavigate()
  const handleNagivate=()=>{
    navigate('/newcheckout2')
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
                  fontWeight: 700,
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
                  fontWeight: 400,
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
              onClick={handleNagivate}
                sx={{
                  fontSize: "17px",
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
                height: "2px",
                backgroundColor: "#bdc3c7",
                width: "100%",
                marginTop: "2%",
              }}
            />
          </Grid>
          <Grid sx={{ display: "flex", width: "100%" }}>
            <Grid sx={{ width: "55%", marginTop: "2%" }}>
              <Grid
                sx={{
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Your cart
              </Grid>
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
                  <Grid sx={{ width: "14.2%" }}>
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


              
              <Divider
                style={{
                  backgroundColor: "#bdc3c7",
                  width: "100%",
                  marginTop: "3%",
                }}
              />

              <Grid
                sx={{
                  marginTop: "3%",
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  color: "#fff",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  style={{ color: "#fff" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Google Maps"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <div
                    style={{
                      border: "1px solid #fff",
                      background: "#fff",
                      color: "#000",
                      fontSize: "15px",
                      fontWeight: 600,
                      width: 110,
                      borderRadius: "5px",
                      height: 28,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Apply
                  </div>
                </IconButton>
              </Grid>

              <Grid sx={{ display: "flex", marginTop: "5%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Subtotal
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                  $200
                </Grid>
              </Grid>
              <Grid sx={{ display: "flex", marginTop: "3%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Shipping
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                  Calculated at the next step
                </Grid>
              </Grid>
              <Grid>
                <Divider
                  style={{
                    height: "1px",
                    backgroundColor: "#bdc3c7",
                    width: "100%",
                    marginTop: "3%",
                  }}
                />
              </Grid>
              <Grid sx={{ display: "flex", marginTop: "3%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Total
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                  $200
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ width: "45%", marginTop: "2.5%", display: "flex" }}>
              <Grid sx={{ width: "90%", marginLeft: "auto" }}>
                <Grid
                  sx={{
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "-.6%",
                  }}
                >
                  Shipping Information
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
                    placeholder="First Name"
                  ></input>
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
                    placeholder="First Name"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "1%", gap: 2, display: "flex" }}>
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
                    placeholder="Address"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "1%", gap: 2, display: "flex" }}>
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
                    placeholder="Apartment, suite, etc (optional)"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "1%", gap: 2, display: "flex" }}>
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
                    placeholder="City"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "2%", gap: 2, display: "flex" }}>
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
                      <option value="Country">County</option>
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
                      <option value="City">gwalior</option>
                      <option value="MP">Gwalior</option>
                    </select>
                  </Grid>
                  <Grid>
                    <input
                      type="text"
                      style={{
                        height: 40,
                           width:'8vw',
                        borderColor: "#bdc3c7",
                        border: "1px solid #bdc3c7",
                        borderRadius: "10px",
                        width: "100%",
                        background: "transparent",
                        marginTop:'-1.5%'
                      }}
                      placeholder="Zipcode"
                    ></input>
                  </Grid>
                </Grid>
                <Grid sx={{marginTop:'1%'}}>
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
                    placeholder="note"
                  ></input>
                </Grid>
                <Grid>
                <Button
                fullWidth
                style={{
                  border: "1px solid #bdc3c7",
                  borderColor: "#bdc3c7",
                  background:'#fff',
                  height: "3vw",
                  color: "#000",
                  fontSize: "1.1vw",
                  fontWeight: 500,
                 marginTop:'3%',
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              Continue to shipping
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
