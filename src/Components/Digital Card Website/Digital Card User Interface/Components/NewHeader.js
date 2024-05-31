import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../../Digital Card Assets/newdigitalcardhublogo.png";
import bag from "../../Digital Card Assets/bag.png"
import menu from "../../Digital Card Assets/menu.png"
import Toolbar from "@mui/material/Toolbar";
import "animate.css";
import {
  Container,
  useMediaQuery,
} from "@mui/material";
import { Grid } from "@mui/material";
export default function NewHeader()
 {
  const matches = useMediaQuery("(max-width:1000px)");
  return (
    <Grid style={{ width: "100%" }}>
    <Grid style={{ position: "sticky" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: "rgba(30, 50, 80, 0.0)",
            height: 80,
            display: "flex",
            zIndex: 5,
            justifyContent:matches?"space-between":"center",
            padding: 20,
          }}
        >
          <Toolbar style={{display:'flex',justifyContent:matches?"space-between":'none',}} >
          {matches?<><Grid sx={{marginLeft:'1%'}}>
                <img src={menu} width={28}></img>
            </Grid></>:<></>}
            <Grid sx={{marginLeft:matches?'0':'6%'}}>
                <img src={Logo} width={matches?120:140} ></img>
            </Grid>
            {matches?<><Grid >
                <img src={bag} width={20} ></img>
            </Grid></>:<></>}

            {matches?<></>:<Grid sx={{marginLeft:'auto',gap: 7,color: "#fff",fontWeight: 300,fontSize: "15px",display:'flex'}}>
               <Grid>
                Home
               </Grid>
               <Grid>
                Shop
               </Grid>
               <Grid >
                Compitable Device
               </Grid>
               <Grid>
                How to create
               </Grid>
               <Grid>
                All Product
               </Grid>
               <Grid sx={{marginTop:'-1%'}}>
                <img src={bag} width={20} ></img>
            </Grid>
            <Grid sx={{color:'#070707'}}>
               .
               </Grid>
            </Grid>}
           </Toolbar>
        </AppBar>
      </Box>
      </Grid>
      </Grid>
  );
}
