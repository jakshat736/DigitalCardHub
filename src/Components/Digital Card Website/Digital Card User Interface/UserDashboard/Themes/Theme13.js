// import { Grid } from "@mui/material";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import { MdFeedback } from "react-icons/md";
// import { FaShopify } from "react-icons/fa";
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import menubar from "../Themes/ThemeAssets/menu bar.png";
// import eye from "../Themes/ThemeAssets/eye.png";
// import { IoMdStar } from "react-icons/io";
// import { useState } from "react";
// import { AiFillHome } from "react-icons/ai";
// import { TbLogin2 } from "react-icons/tb";
// import { PiDeviceMobileFill } from "react-icons/pi";
// import {
//     ExpandLess,
//     ExpandMore,
//     Inbox,
//     Mail,
//     StarBorder,
//   } from "@mui/icons-material";
// import { IoIosCreate } from "react-icons/io";

// export default function Theme13()
// {
 
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const [openDrawer, setOpenDrawer] = useState(false);

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{
//         width: anchor === "top" || anchor === "bottom" ? "auto" : 330,
//         backgroundImage: "radial-gradient(#ecf0f1, #dcdde1)",
//         height: "100%",
//       }}
//       role="presentation"
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List style={{ marginTop: "15%", marginLeft: "4%" }}>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <AiFillHome style={{ fontSize: "25px", color: "#000" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 fontSize: "18px",
//                 color: "#000",
//                 fontWeight: 400,
//               }}
//               primary="Home"
//             />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding style={{ marginTop: "5%" }}>
//           <ListItemButton>
//             <ListItemIcon>
//               <PiDeviceMobileFill style={{ fontSize: "25px", color: "#000" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 fontSize: "18px",
//                 color: "#000",
//                 fontWeight: 400,
//               }}
//               primary="Compatible devices"
//             />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding style={{ marginTop: "5%" }}>
//           <ListItemButton>
//             <ListItemIcon>
//               <IoIosCreate style={{ fontSize: "25px", color: "#000" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 fontSize: "18px",
//                 color: "#000",
//                 fontWeight: 400,
//               }}
//               primary="How to create"
//             />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding style={{ marginTop: "5%" }}>
//           <ListItemButton>
//             <ListItemIcon>
//               <MdFeedback style={{ fontSize: "25px", color: "#000" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 fontSize: "18px",
//                 color: "#000",
//                 fontWeight: 400,
//               }}
//               primary="Feedback"
//             />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding style={{ marginTop: "5%" }}>
//           <ListItemButton>
//             <ListItemIcon>
//               <TbLogin2 style={{ fontSize: "25px", color: "#000" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 fontSize: "18px",
//                 color: "#000",
//                 fontWeight: 400,
//               }}
//               primary="Login/Signup"
//             />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding style={{ marginTop: "5%" }}>
//           <ListItemButton>
//             <ListItemIcon>
//               <FaShopify style={{ fontSize: "25px", color: "#000" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 fontSize: "18px",
//                 color: "#000",
//                 fontWeight: 400,
//               }}
//               primary="Shop"
//             />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding style={{ marginTop: "10%" }}>
//           All Copyright @ reserved by IndiaBuzz
//         </ListItem>
//       </List>
//     </Box>
//   );


//     return(<Grid
//         style={{
//           backgroundColor: "#27ae60",
//           height: "auto",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Grid
//           container
//           sx={{
//             width: { xs:"100vw", sm:"70%", md:"37%" },
//             height: "100%",
//             background: "#fff",
//             position: "relative",
//           }}
//         >
//           <Grid item xs={12} sx={{backgroundImage: "radial-gradient(#353b48, #000)"}}>
//             <Grid sx={{height:250,backgroundImage: "radial-gradient(#353b48, #000)",width:'100%',position:"relative"}}>
//               <Grid sx={{padding:2,display:'flex'}}> 
//               <Grid key={"left"} style={{ cursor: "pointer" }}>
//                   <img
//                     src={menubar}
//                     onClick={toggleDrawer("left", true)}
//                     sx={{ colors: "#fff" }}
//                   ></img>
//                   <Drawer
//                     anchor={"left"}
//                     open={state["left"]}
//                     onClose={toggleDrawer("left", false)}
//                     sx={{ backgroundColor: "transparent" }}
//                   >
//                     {list("left")}
//                   </Drawer>
//                 </Grid>
                
//                 <Grid
//                 style={{
//                   border: "1px solid #d2dae2",
//                   width: 100,
//                   height:30,
//                   backgroundColor: "#4b4b4b",
//                   marginLeft: "auto",
//                   borderRadius: 20,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginTop:'2%',
//                 }}
//               >
//                 <Grid style={{ marginTop: "2%" }}>
//                   <img src={eye}></img>
//                 </Grid>
//                 <Grid style={{ marginLeft: "10%", color: "#fff", fontsize: 14 }}>
//                   68842
//                 </Grid>
//               </Grid>

//               </Grid>  
//             </Grid>
            
//             <Grid sx={{position:"relative",height:'auto',background:'#fff',padding:2,borderRadius:'15px 15px 0px 0px'}}>
//             <Grid
//               style={{
//                 backgroundImage: "radial-gradient(#dcdde1,#95a5a6)",
//                 position: "absolute",
//                 top:-80 ,
//                 width: "148px",
//                 height: "148px",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: "95px",
//               }}
//             >
//             </Grid>
            
//             <Grid
//                 // onClick={handleAbout}
//               sx={{
//                 border: "1px solid #000",
//                 width: 110,
//                 height:36,
//                 backgroundImage: "radial-gradient(#353b48, #000)",
//                 borderRadius: 8,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: 1,
//                 color: "#fff",
//                 marginLeft: "auto",
//                 marginTop:'1%'
//               }}
//             >
//               <Grid sx={{ fontsize: "10px", fontWeight: 600,marginLeft:'4%' }}>Menu</Grid>
             
                
//                   {openDrawer ? (
//                     <ExpandLess fontSize="medium" />
//                   ) : (
//                     <ExpandMore fontSize="medium" />
//                   )}
//             </Grid>
//             </Grid>
//          </Grid>

//          <Grid item xs={12} >
//             <Grid sx={{background:'#fff',display:'flex',height:90}}>
//                 <Grid sx={{marginTop:'4%',marginLeft:'4%'}}>
//              <Grid sx={{ fontSize: "26px",fontWeight: 700,lineHeight: "21.94px"}}>
//                 Eat Healthy
//              </Grid>
//              <Grid sx={{ fontSize:12,color:'#2c3e50',marginTop:'5%'}}>
//                 Healthy Food ,South India
//              </Grid>
//              <Grid sx={{ fontSize:12,color:'#2c3e50',marginTop:'2%'}}>
//                 Kokapally , Hydrabad
//              </Grid>
//              </Grid>
         
//              <Grid
//                  style={{
//                           color: "#fff",
//                           border: "1px solid #4AB425",
//                           marginTop: "6%",
//                           background:'#4AB425',
//                           display: "flex",
//                           padding: 1,
//                           justifyContent: "center",
//                           alignItems: "center",
//                           flexDirection:"column",
//                           borderRadius: "5px 0px 0px 5px",
//                           width:68,
//                           height:40,
//                           marginLeft:'auto', 
//                         }}
//                       ><Grid style={{display:'flex'}}>
//                         <span style={{color:'#fff',fontSize:13}}>4.2</span><span style={{marginLeft:'4%'}}><IoMdStar color="#fff"/></span><br></br>
//                         </Grid> 
//                         <Grid sx={{fontSize:8}}>
//                           DELIVERY
//                         </Grid>
//                       </Grid> 
        
//             </Grid>
//          </Grid>

//          </Grid>
//          </Grid>

//    )
// }