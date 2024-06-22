import { Grid, Divider, Button, InputBase,IconButton } from "@mui/material";
import logo from "../UserAssets/digitallogo.png";
import Avatar from "@mui/material/Avatar";
import photo from "../Themes/ThemeAssets/ankit1.jpg";
import background from "../UserAssets/background.png";
import icon from "../UserAssets/icon.png";
import { Container, useMediaQuery } from "@mui/material";

export default function NewBussinessProfile() {

    const matches = useMediaQuery("(max-width:1300px)");

  return (
    <Grid sx={{ width: "100%", background: "#000", fontFamily: "Montserrat" }}>
      <Grid
        sx={{
          width: "100%",
          height: 90,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            width: "82%",
            height: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <img src={logo} width={100}></img>
          </Grid>
          <Grid>
            <Grid sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Grid
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "26px",
                  color: "#fff",
                }}
              >
                Hey,User
              </Grid>
              <Grid>
                <Avatar alt="Remy Sharp" src={photo} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        style={{
          backgroundColor: "#95a5a6",
        }}
      />
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "86%",
          marginTop: "1.5%",
          flexDirection: "column",
          color: "#000000",
        }}
      >
        <Grid
          sx={{
            fontSize:matches?'20px':"28px",
            fontWeight: 500,
            lineHeight: "28px",
            letterSpacing: "-2.4%",
            color: "#fff",
          }}
        >
          Profile Setup
        </Grid>

        <Grid
          sx={{
            width: "82%",
            height: 'auto',
            background: "#fff",
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            marginTop: "1.5%",
            padding: 3,
            color: "#000",
          }}
        >
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: matches?"":"space-between",
              flexDirection:matches?"column":'row'
            }}
          >
            <Grid sx={{ width: matches?"100%":"30%" }}>
              <Grid
                sx={{ fontSize: matches?'15px':"22px", fontWeight: 500, lineHeight: "36px" }}
              >
                Profile :
              </Grid>
              <Divider style={{ backgroundColor: "#000", marginTop: ".8%" }} />
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src="/broken-image.jpg"
                  sx={{ width: matches?70:'6vw', height:matches?70:'6vw', marginTop: "2%" }}
                />
                <Grid sx={{ marginLeft: "4%", marginTop:matches?'4%': "2%" }}>
                  <Grid>
                    <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                      />
                      <Button
                        component="span"
                        style={{
                          border: "1px solid #000",
                          borderColor: "#000",
                          height: matches?28:"35px",
                          width: "150px",
                          lineHeight: "36px",
                          color: "#000",
                          fontSize: matches?'12px': "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Upload Logo
                      </Button>
                    </label>
                  </Grid>
                  <Grid
                    sx={{
                      fontSize:matches?'12px':  "14px",
                      fontWeight: 400,
                      marginTop: "2%",
                      lineHeight: "20px",
                    }}
                  >
                    Upload Your Profile Photo For your business profile
                  </Grid>
                </Grid>


              </Grid>
            </Grid>
            <Grid sx={{ width:matches?'100%':"60%" }}>
              <Grid
                sx={{ fontSize: matches?'15px':"22px", fontWeight: 500, lineHeight: "36px" }}
              >
                profile banner :
              </Grid>
              <Divider style={{ backgroundColor: "#000", marginTop: ".8%" }} />
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  variant="square"
                  src="/broken-image.jpg"
                  sx={{ width: matches?120:'25vw', height: matches?70:'6vw', marginTop: "2%" }}
                />
                <Grid sx={{ marginLeft: "4%", marginTop:matches?'5%':  "2%" }}>
                  <Grid>
                    <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                      />
                      <Button
                        component="span"
                        style={{
                          border: "1px solid #000",
                          borderColor: "#000",
                          height: matches?28: "35px",
                          width:matches?'115px':  "150px",
                          lineHeight: "36px",
                          color: "#000",
                          fontSize: matches?'12px': "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Upload Logo
                      </Button>
                    </label>
                  </Grid>
                  <Grid
                    sx={{
                      fontSize:matches?'12px': "14px",
                      fontWeight: 400,
                      marginTop: "2%",
                      lineHeight: "20px",
                    }}
                  >
                    Upload Your Profile Banner For your business profile
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider
            style={{
              backgroundColor: "#95a5a6",
              marginTop: "3%",
            }}
          />

          <Grid sx={{ width: "100%", marginTop: "3%" }}>
            <Grid
              sx={{ fontSize:matches?'15px': "22px", fontWeight: 500, lineHeight: "36px" }}
            >
              personal details :
            </Grid>
            <Divider
              style={{
                backgroundColor: "#000",
                marginTop: ".8%",
                width: matches?'100%':"30%",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1%",
                flexDirection:matches?"column":'row'
              }}
            >
              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                  first name*
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Name"
        
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                 Designation
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#fff",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Position"
           
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                 Email
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your email"
   
                  />
                </Grid>
              </Grid>
            </Grid>




            <Grid sx={{marginTop:'1.5%'}}>
            <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                  }}
                >
                  Bio
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Tell other about yourself and about your work/business"
                  />
                </Grid>
            </Grid>


            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.5%",
                flexDirection:matches?"column":'row'
              }}
            >
              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                 Mobile Number
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width:matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Mobile Number"
        
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
               WhatsApp Number
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#fff",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width:matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your WhatsApp Number"
           
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >Address 
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width:matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Address"
   
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: "1.5%",
                  }} >unique card id*
                </Grid>
                <Grid sx={{display:'flex',alignItems:"center"}}>
                <Grid
                  sx={{
                    border: "1.8px solid #289B00",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "36px",
                    width:matches?'100%': "500px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Address"
                  />
                   <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <div
                    style={{
                      border: "1px solid #000",
                      background: "#000",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 500,
                      width:matches?70: 100,
                      borderRadius: "5px",
                      height:25,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Save
                  </div>
                </IconButton>
                </Grid>
                <Grid sx={{marginLeft:'1%'}}>
                    <img src={icon} width={32} style={{marginTop:'1%'}} ></img>
                </Grid>
</Grid>

<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:matches?'5%':'3%'}}>
                        <Button
                           style={{
                            border:'1px solid #289B00',
                            borderColor:'#289B00',
                            background:'#289B00',
                            width:'50%',
                            height:matches?'32px':'40px',
                            lineHeight:'36px',       
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: '10px',
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor:'-moz-grab'
                          }}>
                        Save
                        </Button> 
</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
