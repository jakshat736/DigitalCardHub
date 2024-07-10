import CloseIcon from "@mui/icons-material/Close";
import { Grid, IconButton, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import deliver from "../assets/deliver.png";
import logo from "../assets/logo.png";
import more from "../assets/moress.png";
import pending from "../assets/pending.png";
import rightarrow from "../assets/rightarrow.png";
import thankyous from "../assets/thankyouss.png";
import vegmain from "../assets/vegmain.png";
import waiter from "../assets/waiter.png";
export default function MenuTheme3() {
  
    const [thankyou, setThankYou] = useState(false);
  var navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  const handleNavigate = () => {
    navigate("/menu2");
  };

  const handleNavigate2 = () => {
    navigate("/menutheme");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const handleCloseThankYou = () => {
    setThankYou(false);
  };
  const handleClickThankYou = () => {
    setThankYou(true);
  };

  

  const ThankyouDialog = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            width: matches?"85%":'20%',
            borderRadius: 10,
            backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
          },
        }}
        open={thankyou}
        onClose={handleNavigate2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
        <Grid sx={{ fontSize: 20,fontWeight:600,color:'#2d3436' }}>Order Complete</Grid>
          <IconButton
            onClick={handleNavigate2}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "inherit",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Grid sx={{ display: "flex",justifyContent:'center',alignItems:'center', flexDirection: "column", padding: 3 }}>
          <Grid>
            <img src={thankyous} style={{width:'100%'}}></img>
          </Grid>
          <Grid style={{fontSize:'10px',fontWeight:500,color:'#000',padding:3}}>
         Order Completed Your Order is completed. please do let us know for any issues. <b style={{textDecoration:'underline',color:'#2ecc71'}}>Contact us</b> Thank you so much.
         </Grid>
          </Grid>
        
      </Dialog>
    );
  };




  return (
    <Grid
      style={{
        backgroundColor: "#27ae60",
        height: "auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: { xs: "100vw", sm: "70%", md: "37%" },
          height: "100%",
          backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
          position: "relative",
        }}
      >
        <Grid item xs={12}>
          <Grid
            sx={{
              padding: 2,
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
              marginTop: "1%",
            }}
          >
            <Grid onClick={handleNavigate}>
              <img src={rightarrow} width={25}></img>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "-8%",
              }}
            >
              <img src={logo} width={80}></img>
            </Grid>
            <Grid style={{ marginTop: "7%" }}>
              <Divider
                style={{
                  height: "1px",
                  backgroundColor: "#AAAAAA",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            sx={{
              padding: 1.2,
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column',
              }}
            >
                <Grid>
              <img src={thankyou} width={100}></img>
              </Grid>
              <Grid sx={{fontSize:'20px',fontWeight:500,color:'#000',textAlign:'center',marginTop:'1%'}}>
              Your Order Details !
              </Grid>
              <Grid sx={{fontSize:'10px',fontWeight:200,color:'#000',textAlign:'center',marginTop:'2%'}}>
              We have sent the order to Restaurant, if needed you can mention the below order ID to them.
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              <Paper elevation={2}>
                <Grid
                  sx={{
                    height: 45,
                    display: "flex",
                    alignItems: "center",
                    padding: 1,
                    color:'#000',
                    marginTop:'1%'
                  }}
                >
                  <Grid sx={{ display: "flex", width: matches ? 80 : 120 }}>
                   <Grid sx={{fontSize:'16px',fontWeight:700,color:'#636e72'}}>
                   Order Id:
                   </Grid>
                  </Grid>
                 
                  <Grid sx={{ display: "flex", marginLeft: "auto" }}>
                    <Grid sx={{fontSize:'16px',fontWeight:600,color:'#636e72'}}>
                  665fff2fd0b8b5cfbeb2b9af
                  </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>




          <Grid
            item
            sx={{
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
            }}
          >
            <Grid >
              <Grid sx={{ fontSize: "12px", fontWeight: 800, padding: 2 }}>
                Bill Order
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  padding: 1,
                  marginTop: "-3%",
                  "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    height: "auto",
                    mt:'-2%'
                  },
                }}
              >
                <Paper elevation={2}>
                  <Grid
                    sx={{
                      height: 45,
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <Grid
                      sx={{
                        marginLeft: "auto",
                        display: "flex",
                        gap: matches ? 2 : 17,
                        fontSize:'14px',
                        fontWeight:600
                      }}
                    >
                      <Grid
                        sx={{
                          padding: 1,
                          borderRadius: 1,
                          display: "flex",
                          gap: 1,
                          height: 28,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Order{" "}
                      </Grid>
                      <Grid sx={{ display: "flex", alignItems: "center" }}>
                        price{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#AAAAAA",
                      width: "100%",
                    }}
                  />
                  <Grid
                    sx={{
                      height: 45,
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <Grid sx={{ display: "flex", width: matches ? 220 : 300 }}>
                      <img
                        src={vegmain}
                        style={{
                          width: "10%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      ></img>
                      <Grid
                        sx={{
                          fontSize: "12px",
                          fontWeight: 800,
                          marginLeft: "2%",
                        }}
                      >
                        Pizza
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        padding: 1,
                        borderRadius: 1,
                        display: "flex",
                        gap: 1,
                        height: 28,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Grid sx={{ fontSize: 14, fontWeight: 700 }}>x1</Grid>
                    </Grid>
                    <Grid sx={{ display: "flex", marginLeft: "auto" }}>
                      <Grid
                        sx={{
                          fontSize: 16,
                          fontWeight: 800,
                          color: "#1BC100",
                          fontFamily: "poppins",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        ₹ 249{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#AAAAAA",
                      width: "100%",
                    }}
                  />
                  <Grid
                    sx={{
                      height: 45,
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <Grid sx={{ display: "flex", width: matches ? 220 : 300 }}>
                      <img
                        src={vegmain}
                        style={{
                          width: "10%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      ></img>
                      <Grid
                        sx={{
                          fontSize: "12px",
                          fontWeight: 800,
                          marginLeft: "2%",
                        }}
                      >
                        Masala Dosa
                      </Grid>
                    </Grid>{" "}
                    <Grid
                      sx={{
                        padding: 1,
                        borderRadius: 1,
                        display: "flex",
                        gap: 1,
                        height: 28,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Grid sx={{ fontSize: 14, fontWeight: 700 }}>x2</Grid>
                    </Grid>
                    <Grid sx={{ marginLeft: "auto", display: "flex" }}>
                      <Grid
                        sx={{
                          fontSize: 16,
                          fontWeight: 800,
                          color: "#1BC100",
                          fontFamily: "poppins",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        ₹ 198{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#AAAAAA",
                      width: "100%",
                    }}
                  />
                  <Grid
                    sx={{
                      height: 45,
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <Grid sx={{ display: "flex", width: matches ? 220 : 300 }}>
                      <img
                        src={vegmain}
                        style={{
                          width: "10%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      ></img>
                      <Grid
                        sx={{
                          fontSize: "12px",
                          fontWeight: 800,
                          marginLeft: "2%",
                        }}
                      >
                       Special Thali
                      </Grid>
                    </Grid>{" "}
                    <Grid
                      sx={{
                        padding: 1,
                        borderRadius: 1,
                        display: "flex",
                        gap: 1,
                        height: 28,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Grid sx={{ fontSize: 14, fontWeight: 700 }}>x4</Grid>
                    </Grid>
                    <Grid sx={{ marginLeft: "auto", display: "flex" }}>
                      <Grid
                        sx={{
                          fontSize: 16,
                          fontWeight: 800,
                          color: "#1BC100",
                          fontFamily: "poppins",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        ₹ 800{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>



          <Grid item xs={12}>
          <Grid
            sx={{
              padding: 1.2,
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              <Paper elevation={2}>
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: 1,
                    color:'#2d3436',
                    justifyContent:'center',fontSize:'14px',
                    fontWeight:600,
                    gap:1,
                    flexDirection:'column'
                  }}
                >
                    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
                        <Grid>Total Rs:</Grid>
                        <Grid sx={{color:'red'}}>11312 </Grid> 
                    </Grid>
                    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
                        <Grid>SGST: </Grid>
                        <Grid sx={{color:'red'}}> ₹ 282.8 </Grid> 
                    </Grid>
                    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
                        <Grid>CGST:</Grid>
                        <Grid sx={{color:'red'}}>₹ 282.8 </Grid> 
                    </Grid>
                    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
                        <Grid>Grand Total: </Grid>
                        <Grid sx={{color:'red'}}> ₹ 11877.6 </Grid> 
                    </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
</Grid>

    
          <Grid
            sx={{
              padding: 2,
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
              marginTop: "-4%",
            }}
          >
            <Grid
              sx={{
                fontSize: "12px",
                color: "#353b48",
               
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  border: "red",
                  width: matches ? 160 : 240,
                  height: 25,
                  backgroundImage: "radial-gradient(#fff,#b2bec3 )",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 1.9,
                  display: "flex",
                  justifyContent: "flex-start",
                  borderRadius: 10,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                <Grid sx={{ marginTop: "3%" }}>
                  <img src={waiter} />
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 0.8,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "12px",
                    fontFamily: "poppins",
                  }}
                >
                  Call the waiter
                </Grid>
              </Button>
              <Button
                sx={{
                  borderColor: "#bdc3c7",
                  border: "#bdc3c7",
                  width: matches ? 160 : 240,
                  height: 25,
                  backgroundImage: "radial-gradient(#fff,#b2bec3 )",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 1.9,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems:'center',
                  borderRadius: 10,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                <Grid sx={{ marginTop: "3%" }}>
                  <img src={more} width={20}/>
                </Grid>
                <Grid
                  sx={{
                    marginLeft: 0.8,
                    color: "#000",
                    fontWeight: 400,
                    fontSize: "12px",
                    fontFamily: "poppins",
                  }}
                >
                  Add More Item
                </Grid>
              </Button>
            </Grid>
            <Grid sx={{marginTop:'7%'}}>
            <Button
                sx={{
                  borderColor: "#bdc3c7",
                  height: 30,
                  backgroundImage: "radial-gradient(#000,#000 )",
                  color: "#2c3e50",
                  justifyContent: "center",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2,
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
                  PENDING
                </Grid>
                <Grid sx={{ marginTop: "2.4%" }}>
                  <img src={pending} width={22}></img>
                </Grid>
              </Button>
            </Grid>
          </Grid>

        


          <Grid
            item
            sx={{
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
              marginTop: "-2%",
              padding: 2,
            }}
          >
            <Grid>
             <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <Grid sx={{fontWeight:500,fontSize:'16px'}}>Please call <b style={{color:'green',textDecoration:'underline'}}>9179109464</b> for any assistance.</Grid>
             </Grid>

             <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:'4%',color:'#2d3436'}}>
                <Grid sx={{fontWeight:400,fontSize:'14px'}}>if your order is delivered, you can mark it as delivered to clear the order data from your session.</Grid>
             </Grid>

              <Button
              onClick={handleClickThankYou}
                sx={{
                  borderColor: "#bdc3c7",
                  height: 36,
                  backgroundImage: "radial-gradient(#000,#000 )",
                  color: "#2c3e50",
                  justifyContent: "center",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  display: "flex",
                  borderRadius: 2,
                  marginTop: "6%",
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
                  ORDER DELIVERED
                </Grid>
                <Grid sx={{ marginTop: "2%",marginLeft:'2%' }}>
                  <img src={deliver} width={20}></img>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {ThankyouDialog()}
    </Grid>
  );
}
