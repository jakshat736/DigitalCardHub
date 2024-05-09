import { Grid } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import digital from "../assets/digitallogo.png";
import ListItemIcon from '@mui/material/ListItemIcon';
import food from "../assets/food.png"
import groups from "../assets/group.png"
import { IoMdAdd } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import menubar from "../assets/menu bar.png";
import eye from "../assets/eye.png";
import { TextField,InputAdornment, withTheme } from "@mui/material";
import Search from '@mui/icons-material/Search';
import { IoMdStar } from "react-icons/io";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TbLogin2 } from "react-icons/tb";
import { PiDeviceMobileFill } from "react-icons/pi";
import {
    ExpandLess,
    ExpandMore,
  } from "@mui/icons-material";
import { IoIosCreate } from "react-icons/io";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import gmail from "../assets/mail.png";
import call from "../assets/call.png"
import whatapp from "../assets/whatapp.png";
import fb from "../assets/whatapp.png";
import insta from "../assets/insta.png";
import link from "../assets/link.png";;



export default function MenuTheme()
{
  const matches = useMediaQuery("(max-width:600px)");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 330,
        backgroundImage: "radial-gradient(#ecf0f1, #dcdde1)",
        height: "100%",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ marginTop: "15%", marginLeft: "4%" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AiFillHome style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Home"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <PiDeviceMobileFill style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Compatible devices"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <IoIosCreate style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="How to create"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <MdFeedback style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Feedback"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <TbLogin2 style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Login/Signup"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "5%" }}>
          <ListItemButton>
            <ListItemIcon>
              <FaShopify style={{ fontSize: "25px", color: "#000" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "18px",
                color: "#000",
                fontWeight: 400,
              }}
              primary="Shop"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding style={{ marginTop: "10%" }}>
          All Copyright @ reserved by IndiaBuzz
        </ListItem>
      </List>
    </Box>
  );


    return(<Grid
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
            width: { xs:"100vw", sm:"70%", md:"37%" },
            height: "100%",
            background: "#fff",
            position: "relative",
          }}
        >
          <Grid item xs={12} sx={{backgroundImage: "radial-gradient(#353b48, #000)"}}>
            <Grid sx={{height:250,backgroundImage: "radial-gradient(#353b48, #000)",width:'100%',position:"relative"}}>
              <Grid sx={{padding:2,display:'flex'}}> 
              <Grid key={"left"} style={{ cursor: "pointer" }}>
                  <img
                    src={menubar}
                    onClick={toggleDrawer("left", true)}
                    sx={{ colors: "#fff" }}
                  ></img>
                  <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    {list("left")}
                  </Drawer>
                </Grid>
                
                <Grid
                style={{
                  border: "1px solid #d2dae2",
                  width: 100,
                  height:30,
                  backgroundColor: "#4b4b4b",
                  marginLeft: "auto",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop:'2%',
                }}
              >
                <Grid style={{ marginTop: "2%" }}>
                  <img src={eye}></img>
                </Grid>
                <Grid style={{ marginLeft: "10%", color: "#fff", fontsize: 14 }}>
                  68842
                </Grid>
              </Grid>

              </Grid>  
            </Grid>
            
            <Grid sx={{position:"relative",height:'auto',background:'#fff',padding:2,borderRadius:'15px 15px 0px 0px'}}>
            <Grid
              style={{
                backgroundImage: "radial-gradient(#dcdde1,#95a5a6)",
                position: "absolute",
                top:-80 ,
                width: "148px",
                height: "148px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "95px",
              }}
            >
            </Grid>
            
            <Grid
                // onClick={handleAbout}
              sx={{
                border: "1px solid #000",
                width: 110,
                height:36,
                backgroundImage: "radial-gradient(#353b48, #000)",
                borderRadius: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
                color: "#fff",
                marginLeft: "auto",
                marginTop:'1%'
              }}
            >
              <Grid sx={{ fontsize: "10px", fontWeight: 600,marginLeft:'4%' }}>Menu</Grid>
             
                
                  {openDrawer ? (
                    <ExpandLess fontSize="medium" />
                  ) : (
                    <ExpandMore fontSize="medium" />
                  )}
            </Grid>
            </Grid>
         </Grid>

         <Grid item xs={12} >
            <Grid sx={{background:'#fff',display:'flex',height:92}}>
                <Grid sx={{marginTop:'4%',marginLeft:'4%'}}>
             <Grid sx={{ fontSize: "26px",fontWeight: 700,lineHeight: "21.94px"}}>
                Eat Healthy
             </Grid>
             <Grid sx={{ fontSize:12,color:'#2c3e50',marginTop:'5%'}}>
                Healthy Food ,South India
             </Grid>
             <Grid sx={{ fontSize:12,color:'#2c3e50',marginTop:'2%'}}>
                Kokapally , Hydrabad
             </Grid>
             </Grid>
         
             <Grid
                 style={{
                          color: "#fff",
                          border: "1px solid #4AB425",
                          marginTop: "6%",
                          background:'#4AB425',
                          display: "flex",
                          padding: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection:"column",
                          borderRadius: "5px 0px 0px 5px",
                          width:68,
                          height:40,
                          marginLeft:'auto', 
                        }}
                      ><Grid style={{display:'flex'}}>
                        <span style={{color:'#fff',fontSize:13}}>4.2</span><span style={{marginLeft:'4%'}}><IoMdStar color="#fff"/></span><br></br>
                        </Grid> 
                        <Grid sx={{fontSize:8}}>
                          DELIVERY
                        </Grid>
                      </Grid> 
            </Grid>
         </Grid>

         <Grid item xs={12}>
                    <Grid sx={{padding:2,background:'#fff',height:310}}>
                    <Grid sx={{fontSize:'20px',fontWeight:700}}>
                        Social Links
                    </Grid>
                    <Grid style={{ marginTop: "2%" }}>
                   <Divider
                  style={{
                  height: "1px",
                  backgroundColor: "#AAAAAA",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              gap: 18,
              marginTop: "2%",
            }}
          >

          <Button
                sx={{
                  borderColor: "#bdc3c7",
                  border:'#bdc3c7',
                  width: 230,
                  height:36,
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  display:  "flex",
                  justifyContent:"flex-start",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
                

              >
                <Grid sx={{marginTop:'3%',}}>
                <img src={call} />
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Call
              </Grid>
              </Button>

          

              <Button
                sx={{
                  borderColor: "#bdc3c7",
                  width: 230,
                  height:36,
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#2c3e50",
                  justifyContent:"flex-start",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  display:"flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
               

             
              >
                <Grid sx={{marginTop:'5%'}} >
                <img src={whatapp}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.7,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
              Whatsapp
              </Grid>
              </Button>
          </Grid> 

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 18,
              marginTop: "3%",
            }}>
         <Button
          sx={{
                  borderColor: "#bdc3c7",
                  width: 230,
                  height:36,
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  justifyContent:"flex-start",
                  display:  "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
               

              >
                <Grid sx={{marginTop:'5%',}}>
                <img src={gmail}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Email
              </Grid>
              </Button>

          

              <Button
                sx={{
                  borderColor: "#bdc3c7",
                  width: 230,
                  height:36,
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  justifyContent:"flex-start",
                  display:  "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
               

            
              >
                <Grid sx={{marginTop:'5%'}} >
                <img src={link}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
              Linkin
              </Grid>
              </Button>
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 18,
              marginTop: "3%",
            }}
          >

         <Button
          sx={{
                  borderColor: "#bdc3c7",
                  width: 230,
                  height:36,
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  justifyContent:"flex-start",
                  textTransform: "none",
                  padding: 2.6,
                  display:  "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
               

               
              >
                <Grid sx={{marginTop:'6%'}}>
                <img src={fb}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
                Facebook
              </Grid>
              </Button>

          

              <Button
                sx={{
                  borderColor: "#bdc3c7",
                  width: 230,
                  height:36,
                  backgroundImage: "radial-gradient(#fff,#D0D0D0 )",
                  color: "#2c3e50",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  justifyContent:"flex-start",
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
               

              >
                <Grid sx={{marginTop:'6%'}} >
                <img src={insta}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: 1.9,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
              Instagram
              </Grid>
              </Button>
            </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "4%",
            }}
          >
             <Button
                sx={{
                  borderColor: "#bdc3c7",
                  width: 200,
                  height:36,
                  backgroundImage: "radial-gradient(#f5f6fa,#b2bec3 )",
                  color: "#2c3e50",
                  justifyContent:"flex-start",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  display:"flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
               
              >
                <Grid sx={{marginTop:'5%'}} >
                <img src={groups}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: .6,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: matches ? 17 : 20,
                }}
              >
              Add To Contact
              </Grid>
              </Button>
          
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
         <Grid sx={{background:'#fff',padding:2,maxHeight:800}}>
         <Grid sx={{fontSize:'22px',fontWeight:700}}>
                        Menu
                    </Grid>
                    <Grid style={{ marginTop: "1%" }}>
                   <Divider
                  style={{
                  height: "1px",
                  backgroundColor: "#AAAAAA",
                  width: "100%",
                }}
              />
            </Grid>
            <Grid sx={{marginTop:'5%'}}>
            <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  variant="filled"
  placeholder="What you are looking for?"
  size="small"
  fullWidth
  InputProps={{
    disableUnderline:true,
    endAdornment: (
      <InputAdornment position="end" >
        <Search  style={{cursor:'pointer'}}/>
      </InputAdornment>
    ),
  }}
/>
</Grid>


<Grid sx={{marginTop:'7%'}}>
<Grid sx={{background:'#fff',display:'flex',height:120,width:'100%'}}>
                <Grid sx={{marginTop:'4%',width:'60%'}}>
             <Grid sx={{ fontSize: "18px",fontWeight: 500,lineHeight: "21.94px"}}>
                Plant Protien Bowl
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
             ₹ 220 
             </Grid>
             <Grid sx={{ marginTop:'2%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                        <Grid sx={{color:'#636e72',fontSize:11,marginTop:'2%'}}>11</Grid>
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
              <span>[veg Preparation] Spring mix plant based organic </span><span style={{fontSize:14,fontWeight:400,color:'#34495e'}}>...read more</span>
             </Grid>
             </Grid>
         <Grid sx={{width:'40%',marginTop:'5%'}}>
            <Grid sx={{position:'relative'}}>
            <img src={food} style={{marginLeft:"30%"}}></img>
            </Grid>
            <Grid sx={{position:'absolute'}}>
            <Grid
                style={{
                  border: "1px solid #000",
                  width: 60,
                  height:30,
                  marginTop:'-32%',
                  backgroundColor: "#000",
                  marginLeft: "92%",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <Grid style={{ marginLeft: "10%", color: "#fff", fontsize: 18 }}>
                  ADD
                </Grid>
                <Grid style={{ marginTop: "-2%" }}>
                <IoMdAdd style={{fontSize:'12px',color:'#fff'}}/>  
                </Grid>
              </Grid>
            </Grid>
            </Grid>
       </Grid>
</Grid>



<Grid sx={{marginTop:'3%'}}>
<Grid sx={{background:'#fff',display:'flex',height:120,width:'100%'}}>
                <Grid sx={{marginTop:'4%',width:'60%'}}>
             <Grid sx={{ fontSize: "18px",fontWeight: 500,lineHeight: "21.94px"}}>
                Plant Protien Bowl
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
             ₹ 220 
             </Grid>
             <Grid sx={{ marginTop:'2%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                        <Grid sx={{color:'#636e72',fontSize:11,marginTop:'2%'}}>11</Grid>
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
              <span>[veg Preparation] Spring mix plant based organic </span><span style={{fontSize:14,fontWeight:400,color:'#34495e'}}>...read more</span>
             </Grid>
             </Grid>
         <Grid sx={{width:'40%',marginTop:'5%'}}>
            <Grid sx={{position:'relative'}}>
            <img src={food} style={{marginLeft:"30%"}}></img>
            </Grid>
            <Grid sx={{position:'absolute'}}>
            <Grid
                style={{
                  border: "1px solid #000",
                  width: 60,
                  height:30,
                  marginTop:'-32%',
                  backgroundColor: "#000",
                  marginLeft: "92%",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <Grid style={{ marginLeft: "10%", color: "#fff", fontsize: 18 }}>
                  ADD
                </Grid>
                <Grid style={{ marginTop: "-2%" }}>
                <IoMdAdd style={{fontSize:'12px',color:'#fff'}}/>  
                </Grid>
              </Grid>
            </Grid>
            </Grid>
            </Grid>
</Grid>



<Grid sx={{marginTop:'3%'}}>
<Grid sx={{background:'#fff',display:'flex',height:120,width:'100%'}}>
                <Grid sx={{marginTop:'4%',width:'60%'}}>
             <Grid sx={{ fontSize: "18px",fontWeight: 500,lineHeight: "21.94px"}}>
                Plant Protien Bowl
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
             ₹ 220 
             </Grid>
             <Grid sx={{ marginTop:'2%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                        <Grid sx={{color:'#636e72',fontSize:11,marginTop:'2%'}}>11</Grid>
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
              <span>[veg Preparation] Spring mix plant based organic </span><span style={{fontSize:14,fontWeight:400,color:'#34495e'}}>...read more</span>
             </Grid>
             </Grid>
         <Grid sx={{width:'40%',marginTop:'5%'}}>
            <Grid sx={{position:'relative'}}>
            <img src={food} style={{marginLeft:"30%"}}></img>
            </Grid>
            <Grid sx={{position:'absolute'}}>
            <Grid
                style={{
                  border: "1px solid #000",
                  width: 60,
                  height:30,
                  marginTop:'-32%',
                  backgroundColor: "#000",
                  marginLeft: "92%",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <Grid style={{ marginLeft: "10%", color: "#fff", fontsize: 18 }}>
                  ADD
                </Grid>
                <Grid style={{ marginTop: "-2%" }}>
                <IoMdAdd style={{fontSize:'12px',color:'#fff'}}/>  
                </Grid>
              </Grid>
            </Grid>
            </Grid>
            </Grid>
</Grid>



<Grid sx={{marginTop:'3%'}}>
<Grid sx={{background:'#fff',display:'flex',height:120,width:'100%'}}>
                <Grid sx={{marginTop:'4%',width:'60%'}}>
             <Grid sx={{ fontSize: "18px",fontWeight: 500,lineHeight: "21.94px"}}>
                Plant Protien Bowl
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
             ₹ 220 
             </Grid>
             <Grid sx={{ marginTop:'2%',display:'flex'}}>
             <Grid><Rating
                          size="small"
                          color="green"
                          name="simple-controlled"
                          value={4} 
                        /></Grid>
                        <Grid sx={{color:'#636e72',fontSize:11,marginTop:'2%'}}>11</Grid>
             </Grid>
             <Grid sx={{ fontSize:12,color:'#95a5a6',marginTop:'2%'}}>
              <span>[veg Preparation] Spring mix plant based organic </span><span style={{fontSize:14,fontWeight:400,color:'#34495e'}}>...read more</span>
             </Grid>
             </Grid>
         <Grid sx={{width:'40%',marginTop:'5%'}}>
            <Grid sx={{position:'relative'}}>
            <img src={food} style={{marginLeft:"30%"}}></img>
            </Grid>
            <Grid sx={{position:'absolute'}}>
            <Grid
                style={{
                  border: "1px solid #000",
                  width: 60,
                  height:30,
                  marginTop:'-32%',
                  backgroundColor: "#000",
                  marginLeft: "92%",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <Grid style={{ marginLeft: "10%", color: "#fff", fontsize: 18 }}>
                  ADD
                </Grid>
                <Grid style={{ marginTop: "-2%" }}>
                <IoMdAdd style={{fontSize:'12px',color:'#fff'}}/>  
                </Grid>
              </Grid>
            </Grid>
            </Grid>
            </Grid>
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
        <Grid sx={{background:'#fff',padding:2,maxHeight:500}}>
          <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',color:'#000',fontSize:'20px',fontWeight:'700',marginTop:'5%'}}>
          GIVE REVIEW !
          </Grid>
        <Grid>
        <Grid
          style={{
            border: "1px solid #95a5a6",
            width: "100%",
            marginTop: "3%",
            height: 260,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            borderRadius: 5,
          }}
        >
          <Grid style={{ marginTop: "1%" }}>
            <Grid
              style={{
                fontSize: 14,
                color: "#000",
                fontWeight: 500,
              }}
            >
              Name
            </Grid>
            <TextField
              id="standard-password-input"
              type="Name"
              autoComplete="Enter Your Name"
              placeholder="Enter Your Name"
              variant="standard"
              fullWidth
              size="small"
              style={{
               
                marginTop: "1%",
                background: "#fff",
             backgroundColor:'#fff'
              }}
            />
          </Grid>
          <Grid style={{ marginTop: "6%" }}>
            <Grid
              style={{
                fontSize: 14,
                color: "#000",
                fontWeight: 500,
              }}
            >
              Rate Us
            </Grid>
            <Rating
              size="large"
              style={{ fontSize: 30 }}
              color="green"
              name="simple-controlled"
              value={0}
            />
          </Grid>
          <Grid style={{ marginTop: "4%" }}>
            <Grid
              style={{
                fontSize: 16,
                color: "#000",
                fontWeight: 500,
              }}
            >
              Review
            </Grid>
            <TextField
              placeholder="Help Us To Review"
              size="small"
              fullWidth
              style={{
              
                marginTop: "1%",
                background: "#fff",
                borderColor: "#000",
                backgroundColor:'#fff'
              }}
            />
          </Grid>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Button
          style={{
            borderColor: "#7ed6df",
            width: "90%",
            background: "#7ed6df",
            color: "#000",
            fontSize: "16px",
            fontWeight: 500,
            textTransform: "none",
            borderRadius: 8,
            display: "flex",
            marginTop: "6%",
            alignItems: "center",
            justifyContent: "center",
          }}
          variant="outlined"
        >
          Submit
        </Button>
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
          </Grid>

          <Grid item xs={12}>
        <Grid sx={{background:'#fff',padding:2,maxHeight:450}}>
          <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',flexDirection:'column'}}>
          <img src={digital} style={{ width: "15%" }}></img>
          <Grid style={{ fontSize: 12, color: "#2d3436", marginTop: "2%" }}>
            Powered By IndiaBuzz
          </Grid>
          </Grid>
          </Grid>
          </Grid>



         </Grid>
         </Grid>

   )
}