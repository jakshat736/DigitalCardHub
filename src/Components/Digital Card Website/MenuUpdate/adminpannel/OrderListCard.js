import { Button, Divider, Grid, Paper } from "@mui/material";
import Box from "../administrator/Box";
import clock from "../assets/watch.png";
import table from "../assets/table.png";
import right from "../assets/righta.png";
import live from "../assets/live2.png";
export default function OrderListCard() {
  return (
    <Grid
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid sx={{ width: "85%",marginBottom:'3%' }}>
        <Grid sx={{ display: "flex", marginTop: "3%",marginBottom:'3%'}}>
          <Button
            style={{
              border: "1px solid #fff",
              borderColor: "#fff",
              width: "5vw",
              height: "2.7vw",
              color: "#fff",
              fontSize: "1.1vw",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "10px",
              display: "flex",
              lineHeight: "36px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            All
          </Button>
          <Button
            style={{
              border: "1px solid #fff",
              borderColor: "#fff",
              width: "13vw",
              height: "2.7vw",
              color: "#fff",
              fontSize: "1.1vw",
              fontWeight: 500,
              textTransform: "none",
              borderRadius: "10px",
              display: "flex",
              lineHeight: "36px",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "2%",
            }}
          >
            Completed
          </Button>

          <Button
            style={{
              border: "1px solid #fff",
              borderColor: "#fff",
              width: "13vw",
              height: "2.7vw",
              color: "#fff",
              fontSize: "1.1vw",
              fontWeight: 500,
              marginLeft: "2%",
              textTransform: "none",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            On Cook
          </Button>
          <Button
            style={{
              border: "1px solid #fff",
              borderColor: "#fff",
              width: "13vw",
              height: "2.7vw",
              color: "#fff",
              fontSize: "1.1vw",
              fontWeight: 500,
              marginLeft: "2%",
              textTransform: "none",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Order Placed
          </Button>
        </Grid>




        <Grid
          sx={{
            marginTop: "4%",
            display: "flex",
            justifyContent: "space-between",
            background:'#000'
          }}
        >
          <Grid
            sx={{
              width: "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Ankit narwariya
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #BDF3FF",
                    borderColor: "#BDF3FF",
                    width: "7vw",
                    height: "29px",
                    color: "#0047FF",
                    background: "#BDF3FF",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  New Order
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "13px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/-</s>{" "}
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 656.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              width: "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Hashit Jain
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "7vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Completed
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/- </s>{" "}
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 586.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              width: "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Ankit narwariya
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "7vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  On Cook
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/- </s>
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 656.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>











        </Grid>











        <Grid
          sx={{
            marginTop: "6%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid
            sx={{
              width: "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Ankit narwariya
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #BDF3FF",
                    borderColor: "#BDF3FF",
                    width: "7vw",
                    height: "29px",
                    color: "#0047FF",
                    background: "#BDF3FF",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  New Order
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "13px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/-</s>{" "}
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 656.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              width: "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Hashit Jain
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "7vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Completed
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/- </s>{" "}
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 586.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              width: "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Ankit narwariya
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "7vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  On Cook
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/- </s>
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize: "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 656.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

<Grid sx={{width:'100%',marginLeft:'auto', position: "fixed",zIndex:100,bottom:0,marginBottom:'4%'}}>
  <img src={live} width={200} style={{marginLeft:'52%'}}></img></Grid>
      </Grid>
    </Grid>
  );
}
