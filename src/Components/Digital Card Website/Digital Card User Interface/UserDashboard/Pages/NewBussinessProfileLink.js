import { Grid, Divider, InputBase, IconButton, Button } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Container, useMediaQuery } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import add from "../UserAssets/add.png"
export default function NewBussinessProfileLink() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const matches = useMediaQuery("(max-width:1000px)");
  const matchesA = useMediaQuery("(max-width:1300px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickss = (event) => {
    setOpenDrawer(!openDrawer);
    setAnchorEl(event.currentTarget);
  };
  return (
    <Grid
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          width: "82%",
          height: 'auto',
          padding: 3,
          background: "#fff",
          color: "#000",
        }}
      >
        <Divider
          style={{
            backgroundColor: "#95a5a6",
            marginTop: "1%",
          }}
        />
        <Grid
          sx={{
            fontSize:matchesA?'15px': "22px",
            fontWeight: 500,
            lineHeight: "36px",
            marginTop: "3%",
          }}
        >
          Social Links :
        </Grid>
        <Divider
          style={{
            backgroundColor: "#000",
            marginTop: ".8%",
            width:matchesA?'100%':"30%",
          }}
        />
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1%",
            flexDirection:matchesA?"column": 'row'
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Instagram
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your instagram profile link"
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Facebook
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your Facebook profile link"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection:matchesA?"column": 'row'
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              LinkedIn
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your linkedIn profile link"
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Twitter (X)
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your twitter (X) profile link"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
             flexDirection:matchesA?"column": 'row'
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Website
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your website link Here"
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              YouTube
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your YouTube link Here"
              />
            </Grid>
          </Grid>
        </Grid>







        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection:matchesA?"column": 'row'
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              PDF
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your Menu link"
              />
               <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
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
                    Upload
                  </div>
      </IconButton>
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              Location
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your location link Here"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2.5%",
            flexDirection:'column'
          }}
        >
          <Grid sx={{ width:matchesA?'100%': "50%", display: "flex", alignItems: "center",justifyContent:'space-between',gap:matchesA?1:0}}>
            <Grid>
              <Grid
                sx={{
                    fontSize:matchesA?'14px': "16px",
                  fontWeight: 500,
                  lineHeight: "36px",
                  marginTop: ".5%",
                }}
              >
                Title
              </Grid>
              <Button
                onClick={handleClickss}
                style={{
                  borderColor: "#000",
                  border: "1px solid #000",
                  width: matchesA?110:180,
                  height: "35px",
                  color: "#000",
                  fontSize: "15px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                Choose
                {openDrawer ? (
                  <ExpandLess fontSize="medium" />
                ) : (
                  <ExpandMore fontSize="medium" />
                )}
              </Button>

              <Menu
                PaperProps={{
                  style: {
                    width: 200,
                    backgroundImage:
                      "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
                    color: "#000",
                    border: "1 solid #000",
                    background: "#fff",
                  },
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onMouseLeave={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                style={{ marginTop: "1%", marginLeft: "-1%" }}
              >
                <div onMouseLeave={handleClose}>
                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    PVC Cards
                  </MenuItem>

                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",
                      fontWeight: 500,
                    }}
                    onClick={handleClose}
                  >
                    Metal Business Cards
                  </MenuItem>

                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",
                      fontWeight: 500,
                    }}
                    onClick={handleClose}
                  >
                    Wooden Card
                  </MenuItem>

                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",
                      fontWeight: 500,
                    }}
                    onClick={handleClose}
                  >
                    Standess
                  </MenuItem>
                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",
                      fontWeight: 500,
                    }}
                    onClick={handleClose}
                  >
                    Review Stickers
                  </MenuItem>
                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",

                      fontWeight: 500,
                    }}
                    onClick={handleClose}
                  >
                    Google Products
                  </MenuItem>
                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",
                      fontWeight: 500,
                    }}
                    onClick={handleClose}
                  >
                    Combos /Bundles
                  </MenuItem>
                  <MenuItem
                    style={{
                      marginBottom: "3px",
                      fontFamily: "Muli, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    All Product
                  </MenuItem>
                </div>
              </Menu>
            </Grid>
            <Grid>
            <Grid
                sx={{
                  fontSize: matchesA?'14px':"16px",
                  fontWeight: 500,
                  lineHeight: "36px",
                }}
              >
                Links
              </Grid> 
              <Grid>
              <Grid
              sx={{
                border: "1px solid #000",
                borderRadius: "10px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "35px",
                width:matchesA?'100%':"405px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your location link Here"
              />
             </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ width: "50%", marginTop:'3%'}}>
          <Button
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#0D0D0D',
                  height:"38px",
                  color: "#fff",
                  fontSize: matchesA?'12px':"16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'  
                }}
              >
           Add more links
           <img src={add} width={matchesA?15:18} style={{marginLeft:'2%'}}></img>
              </Button>
        </Grid>
        </Grid>


<Grid sx={{width:'100%'}}>
<Grid
          sx={{
            fontSize:matchesA?'15px': "22px",
            fontWeight: 500,
            lineHeight: "36px",
            marginTop: "3%",
          }}
        >
         Youtube videos :
        </Grid>
        <Divider
          style={{
            backgroundColor: "#000",
            marginTop: ".8%",
            width: matchesA?'100%':"30%",
          }}
        />
     </Grid>
      <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5%",
            flexDirection:matchesA?"column":'row'
          }}
        >
          <Grid>
            <Grid
              sx={{
                fontSize: matchesA?'14px':"16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your Menu link"
              />
            </Grid>
          </Grid>

          <Grid>
            <Grid
              sx={{
                fontSize: matchesA?'14px':"16px",
                fontWeight: 500,
                lineHeight: "36px",
                marginTop: ".5%",
              }}
            >
              videos
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
                width:matchesA?'100%': "550px",
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="paste your location link Here"
              />
            </Grid>
          </Grid>
        </Grid>


        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            flexDirection:'column'
          }}
        >
          <Grid sx={{ width: "50%"}}>
          <Button
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#0D0D0D',
                  height:"38px",
                  color: "#fff",
                  fontSize: matches?'11px':"16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'  
                }}
              >
           Add more Vedios
           <img src={add} width={matchesA?14:18} style={{marginLeft:'2%'}}></img>
              </Button>
        </Grid>
</Grid>


<Grid
          sx={{
            fontSize:matchesA?'15px': "22px",
            fontWeight: 500,
            lineHeight: "36px",
            marginTop: "3%",
          }}
        >
        Add team members :
        </Grid>
        <Divider
          style={{
            backgroundColor: "#000",
            marginTop: ".8%",
            width:matchesA?'100%':"30%",
          }}
        />
        <Grid
          sx={{
            marginTop: "1%",
            width:'100%',
            display:'flex',
          }}
        >
          <Grid sx={{width:'50%'}}>
            <Grid
              sx={{
                fontSize:matchesA?'14px': "16px",
                fontWeight: 500,
                lineHeight: matchesA?'23px':"36px",
                marginTop: ".5%",
              }}
            >
             company Name
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
                placeholder="Enter your company name"
              />
            </Grid>
            <Grid
              sx={{
                fontSize:matchesA?'10px': "12px",
                fontWeight: 400,
                lineHeight: matchesA?'16px':"36px",
                marginTop: ".5%",
              }}
            >
              Describing Your Company and team will help you to grow your user insights exponantially.
            </Grid>
          </Grid>

        <Grid sx={{width:matchesA?'45%':'40%',marginLeft:'auto'}}>
        <Grid
              sx={{
                fontSize:matchesA?'13px': "16px",
                fontWeight: 500,
                lineHeight:matchesA?'20px': "36px",
              }}
            >
            Team Members :
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
                placeholder="Enter His/her unique id"
              />
               <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DeleteIcon fontSize="small" color="#000" style={{color:'#000'}} />
      </IconButton>
            </Grid>
            <Button
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#0D0D0D',
                  height:matchesA?'30px':"36px",
                  color: "#fff",
                  fontSize: matchesA?'9px':"16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'  ,
                  marginTop:'4%'
                }}
              >
           Add more Vedios
           <img src={add} width={matchesA?15:18} style={{marginLeft:'2%'}}></img>
              </Button>
        </Grid>

        </Grid>


        <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',}}>
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
  );
}
