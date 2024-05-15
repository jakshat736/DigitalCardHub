import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { postData } from "../../../Services/NodeServices";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const matches = useMediaQuery("(max-width:1200px)");
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("number", phoneNo);
    formData.append("query", query);
    formData.append("email", emailId);
    let response = await postData("enquiry/addenquiry", formData, true);
    // alert("Successful");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: matches ? "column" : "row",
            gap: matches ? 6 : 22,
            justifyContent: "center",
            alignItems: matches ? "center" : "normal",
            marginTop: "2%",
          }}
        >
          <Grid sx={{ display: "flex", flexDirection: "column" }}>
            <Grid
              sx={{
                fontSize: { xs: "1.6em", lg: "2.4em" },
                fontWeight: 700,
                fontFamily: "OXANIUM",
                color: "#001E3C",
                letterSpacing: "-0.2px",
                mt: { xs: 0, md: "0%" },
                textAlign: "left",
              }}
            >
              digitalcardhub.in
            </Grid>

            <Grid
              sx={{
                fontSize: "1.1em",
                fontWeight: 500,
                fontFamily: "OXANIUM",
                color: "#001E3C",
                letterSpacing: "-0.2px",
                // mt: { xs: 0, md: "4%" },
                textAlign: "left",
              }}
            >
              +918889430333
            </Grid>

            <Grid
              sx={{
                fontSize: "1.1em",
                fontWeight: 500,
                fontFamily: "OXANIUM",
                color: "#001E3C",
                letterSpacing: "-0.2px",
                textAlign: "left",
              }}
            >
              ibuzz@indiabuzz.co.in
            </Grid>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: matches ? "column" : "row",
              gap: matches ? 6 : 22,
            }}
          >
            <Grid>
              <Grid>
                <Grid>
                  <Grid
                    sx={{
                      fontSize: "1.5rem",
                      fontFamily: "OXANIUM",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    Quick Links
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "1vh",
                  }}
                >
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                    }}
                  >
                    Contact Us
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                    }}
                  >
                    Terms and conditions
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                    }}
                  >
                    Privacy Policy
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                    }}
                  >
                    Refund Policy
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                    }}
                  >
                    Shipping Policy
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <Grid>
                  <Grid
                    sx={{
                      fontSize: "1.5rem",
                      fontFamily: "OXANIUM",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    More Links
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "1vh",
                  }}
                >
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                    }}
                  >
                    Products
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                    }}
                  >
                    How It Works
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: "0.9rem",
                      fontFamily: "OXANIUM",
                      color: "#001E3C",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/compatible-devices")}
                  >
                    Compatibility Devices
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <Grid>
                  <Grid
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      textDecoration: "underline",
                      fontFamily: "OXANIUM",
                    }}
                  >
                    Social Links
                  </Grid>
                </Grid>
                <Grid sx={{ mt: "1vh", display: "flex", flexDirection: "row" }}>
                  <IconButton href="https://www.facebook.com/digitalcardhub.in">
                    <Facebook sx={{ color: "#001E3C", fontSize: "2rem" }} />
                  </IconButton>
                  <IconButton href="https://www.instagram.com/digitalcardhub.in/">
                    <Instagram sx={{ color: "#001E3C", fontSize: "2rem" }} />
                  </IconButton>
                  <IconButton href={`https://wa.me/+918889430333?text=`}>
                    <WhatsApp sx={{ color: "#001E3C", fontSize: "2rem" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
          }}
        >
          <Grid
            sx={{
              fontSize: { xs: "1.6em", lg: "2.4em" },
              fontWeight: 700,
              fontFamily: "OXANIUM",
              color: "#001E3C",
              letterSpacing: "-0.2px",
              mb: "2.5vh",
              textAlign: "center",
            }}
          >
            CONTACT US
          </Grid>
          <Grid sx={{ width: { xs: "80%", lg: "40%" } }}>
            <Grid>
              <TextField
                variant="outlined"
                label="Enter your name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid sx={{ marginTop: "2%" }}>
              <TextField
                variant="outlined"
                label="Enter your Phone Number"
                fullWidth
                value={phoneNo}
                onChange={(event) => setPhoneNo(event.target.value)}
              />
            </Grid>
            <Grid sx={{ marginTop: "2%" }}>
              <TextField
                variant="outlined"
                label="Enter your email"
                fullWidth
                value={emailId}
                onChange={(event) => setEmailId(event.target.value)}
              />
            </Grid>
            <Grid sx={{ marginTop: "2%" }}>
              <TextField
                variant="outlined"
                label="Enter your query"
                fullWidth
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </Grid>
            <Grid sx={{ marginBottom: matches ? "10%" : "3%" }}>
              <Button
                onClick={handleSubmit}
                fullWidth
                sx={{
                  borderRadius: 2,
                  background: "#001E3C",
                  color: "#ffffff",
                  p: "2% 30%",
                  fontSize: "1.2em",
                  fontWeight: 600,
                  mt: "2vh",
                  "&:hover": {
                    background: "#9cbccb",
                    color: "#001E3C",
                  },
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Typography
          onClick={() => window.open("https://indiabuzz.co.in/", "_blank")}
          sx={{
            fontSize: "1.5em",
            fontWeight: 500,
            fontFamily: "OXANIUM",
            color: "#001E3C",
            letterSpacing: "-0.2px",
            textAlign: "center",
            mt: "2vh",
            cursor: "pointer",
          }}
        >
          Copyrights © 2024 Powered By IndiaBuzz
        </Typography>
      </Grid>
    </Grid>
  );
}
