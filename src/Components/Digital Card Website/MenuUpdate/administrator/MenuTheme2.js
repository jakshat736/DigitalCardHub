import {  Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {  Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { useState, useEffect } from "react";
import vegmain from "../assets/vegmain.png";
import rightarrow from "../assets/rightarrow.png";
import logo from "../assets/logo.png";
import plus from "../assets/plus.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import waiter from "../assets/waiter.png";
import { useNavigate } from "react-router-dom";
import live from "../assets/live.png";
import pay from "../assets/pay.png";
import leftarrow from "../assets/leftarrow.png";
import thankyou from "../assets/thankyou.png";
import hand from "../assets/hand.png";
import coupon from "../assets/coupon.png"

export default function MenuTheme2() {
  
  var navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  const handleNavigate = () => {
    navigate("/menutheme");
  };

  const handleNavigate2 = () => {
    navigate("/menu3");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              }}
            >
              <img src={thankyou} width={100}></img>
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
                  }}
                >
                  <Grid sx={{ display: "flex", width: matches ? 190 : 250 }}>
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
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Paneer Butter Masala
                    </Grid>
                  </Grid>
                  <Grid
                    sx={{
                      border: "1px solid #000",
                      padding: 1,
                      borderRadius: 1,
                      display: "flex",
                      gap: 1,
                      height: 28,
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f5f6fa",
                    }}
                  >
                    <Grid sx={{ fontSize: 14, fontWeight: 700 }}>-</Grid>
                    <Grid sx={{ fontSize: 14, fontWeight: 700 }}>1</Grid>
                    <Grid sx={{ fontSize: 14, fontWeight: 700 }}>+</Grid>{" "}
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
                      ₹ 179{" "}
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
                  <Grid sx={{ display: "flex", width: matches ? 190 : 250 }}>
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
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Butter Tawa Roti
                    </Grid>
                  </Grid>
                  <Grid
                    sx={{
                      border: "1px solid #000",
                      padding: 1,
                      borderRadius: 1,
                      display: "flex",
                      gap: 1,
                      height: 28,
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f5f6fa",
                    }}
                  >
                    <Grid sx={{ fontSize: 14, fontWeight: 700 }}>-</Grid>
                    <Grid sx={{ fontSize: 14, fontWeight: 700 }}>1</Grid>
                    <Grid sx={{ fontSize: 14, fontWeight: 700 }}>+</Grid>{" "}
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
                      ₹ 179{" "}
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
                  <img src={plus}></img>
                  <Grid
                    sx={{ fontSize: "14px", fontWeight: 400, marginLeft: "3%" }}
                  >
                    Add a note for restaurant
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
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    padding: 1,
                  }}
                >
                  <img src={plus}></img>
                  <Grid
                    sx={{ fontSize: "14px", fontWeight: 400, marginLeft: "3%" }}
                  >
                    Add a note for restaurant
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>

          <Grid
            sx={{
              padding: 2,
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
              marginTop: "1%",
            }}
          >
            <Grid sx={{ fontSize: "12px", color: "#353b48", marginTop: "-2%" }}>
              Please check your cart and you can pay after adding your shipping
              details
            </Grid>
          </Grid>

          <Grid
            sx={{
              padding: 2,
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
              marginTop: "-2%",
            }}
          >
            <Grid
              sx={{
                fontSize: "12px",
                color: "#353b48",
                marginTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                sx={{
                  border: "red",
                  width: matches ? 160 : 240,
                  height: 20,
                  backgroundImage: "radial-gradient(#fff,#dfe6e9 )",
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
                  height: 20,
                  backgroundImage: "radial-gradient(#fff,#dfe6e9 )",
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
                  <img src={live} />
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
                  Live Support
                </Grid>
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
            }}
          >
            <Grid>
              <Grid sx={{ fontSize: "12px", fontWeight: 800, padding: 2 }}>
                Add Your Details
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginTop: "-3%",
                  padding: 2,
                  "& > :not(style)": {
                    width: "100%",
                    height: 230,
                  },
                }}
              >
                <Paper elevation={2}>
                  <Grid
                    sx={{
                      height: 65,
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid sx={{ display: "flex", flexDirection: "column" }}>
                      <Grid>Name</Grid>
                      <Grid
                        sx={{
                          width: matches ? 150 : 240,
                          height: 35,
                          border: "1px solid #000",
                          fontSize: "14px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          borderRadius: 2,
                          padding: 0.6,
                        }}
                      >
                        {" "}
                        Ankit Singh
                      </Grid>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "column" }}>
                      <Grid>Phone Number</Grid>
                      <Grid
                        sx={{
                          width: matches ? 150 : 240,
                          height: 35,
                          border: "1px solid #000",
                          fontSize: "14px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          borderRadius: 2,
                          padding: 0.6,
                        }}
                      >
                        +91 9987986756
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    sx={{
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <select
                      style={{
                        width: matches ? 150 : 240,
                        height: 35,
                        border: "1px solid #000",
                        fontSize: "14px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        borderRadius: 8,
                        padding: 0.6,
                      }}
                    >
                      <option value="serve on table">Serve on Table</option>
                      <option value="home delivery">Home Delivery</option>
                    </select>
                    <select
                      style={{
                        width: matches ? 150 : 240,
                        height: 35,
                        border: "1px solid #000",
                        fontSize: "14px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        borderRadius: 8,
                        padding: 0.6,
                      }}
                    >
                      <option value="table number">Table Number</option>
                      <option value="one">One</option>
                      <option value="two">Two</option>
                      <option value="three">Three</option>
                    </select>
                  </Grid>
                  <Grid
                    sx={{
                      height: 60,
                      display: "flex",
                      flexDirection:'column',
                      alignItems: "center",
                      padding: 1,
                      gap:2
                    }}
                  >
                    <Grid
                      sx={{
                        height: 35,
                        border: "1px solid #000",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 2,
                        padding: 0.8,
                        width: "100%",
                      }}
                    >
                      <img src={pay}></img>
                      <Grid sx={{ marginLeft: "4%" }}>Payment Method</Grid>
                      <img src={leftarrow} style={{ marginLeft: "auto" }}></img>
                    </Grid>
                  
                    <Grid
                      sx={{
                        height: 35,
                        border: "1px solid #000",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 2,
                        padding: 0.8,
                        width: "100%",
                      }}>
                      <img src={coupon} width={30}></img>
                      <Grid sx={{ marginLeft: "4%" }}>
                        <input type="text" style={{height:matches?34:25,borderColor:'#fff',border:'1px solid #fff'}} placeholder="Apply Coupon Code"></input>
                      </Grid>
                      <img src={leftarrow} style={{ marginLeft: "auto" }}></img>
                    </Grid>


                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{
              backgroundImage: "radial-gradient(#ffff,#f5f6fa)",
              height: "auto",
            }}
          >
            <Grid>
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
                        Paneer Butter Masala
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
                        ₹ 179{" "}
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
                        Butter Tawa Roti
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
                      <Grid sx={{ fontSize: 14, fontWeight: 700 }}>x8</Grid>
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
                        ₹ 179{" "}
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
                    <Grid sx={{ display: "flex", width: matches ? 202 : 280 }}>
                      <Grid sx={{ fontSize: "12px", fontWeight: 800 }}>
                        CGST :
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
                      <Grid sx={{ fontSize: 14, fontWeight: 700 }}>₹4.25</Grid>
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
                        ₹ 279{" "}
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
                    <Grid sx={{ display: "flex", width: matches ? 202 : 280 }}>
                      <Grid sx={{ fontSize: "12px", fontWeight: 800 }}>
                        CGST :
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
                      <Grid sx={{ fontSize: 14, fontWeight: 700 }}>₹4.25</Grid>
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
                        ₹279{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
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
              <Grid sx={{ fontSize: "16px", fontWeight: 800, display: "flex" }}>
                Grand Total
                <Grid
                  sx={{
                    marginLeft: "auto",
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "red",
                  }}
                >
                  ₹ 1279
                </Grid>
              </Grid>
              <Divider
                style={{
                  backgroundColor: "#AAAAAA",
                  width: "100%",
                  marginTop: "2%",
                }}
              />

              <Button
              onClick={handleNavigate2}
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
                  Send To the Kitchen
                </Grid>
                <Grid sx={{ marginTop: "2.4%" }}>
                  <img src={hand}></img>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
