import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../../Digital Card Assets/newdigitalcardhublogo.png";
import bag from "../../Digital Card Assets/bag.png"
import Menu from "@mui/material/Menu";
import { useContext } from "react";
import { SessionContext } from "../../../Services/SessionContext";
import Swal from "sweetalert2";
import MenuItem from "@mui/material/MenuItem";
import menu from "../../Digital Card Assets/menu.png"
import Toolbar from "@mui/material/Toolbar";
import { useStyles } from "../../Digital Card User Interface/Components/HoveredCss";
import { useNavigate } from "react-router-dom";
import newLogin from "../../Digital Card Assets/loginnew.png"
import "animate.css";
import {
  Container,
  useMediaQuery,
} from "@mui/material";
import Downarrow from "../../Digital Card Assets/downarrow.png"
import { Grid } from "@mui/material";
import { download } from "export-to-csv";
export default function NewHeader()
 {
  var navigate=useNavigate()
  const { cart, setCart } = useContext(SessionContext);
  const handleNagivate=()=>{
      navigate('/compitable')
  }
  const handleNagivateHome=()=>{
    navigate('/newhome')
}
const handleNagivateCooperate=()=>{
  navigate('/cooperate')
}

const handleNagivateProductComponents=()=>{
  navigate('/newallproduct')
}

const handleProduct=()=>{
  navigate('/newallproduct2')
}

const handleCategory=()=>{
  navigate('/categoryproducts')
}



  const matches = useMediaQuery("(max-width:1000px)");

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCart = () => {
    if (cart.length > 0) {
      navigate("/newthemecard");
    } else {
      Swal.fire({
        title: "Cart Is Empty Add Some Product First",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        icon: "warning",
      });
    }
  };

  return (
    <Grid style={{ width: "100%",fontFamily:'Muli, sans-serif' }}>
    <Grid style={{ position: "sticky" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            backgroundImage: "linear-gradient(to bottom right, #171717,#171717)",
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
            <Grid onClick={handleNagivateHome} sx={{marginLeft:matches?'0':'6%',cursor:'pointer'}}>
                <img src={Logo} width={matches?120:140} ></img>
            </Grid>
            {matches?<><Grid >
                <img src={bag} width={20} ></img>
            </Grid></>:<></>}

            {matches?<></>:<Grid sx={{marginLeft:'auto',gap: 7,color: "#fff",fontWeight: 300,fontSize: "15px",display:'flex'}}>
               <Grid onClick={handleNagivateHome}  sx={{cursor:'pointer'}}>
                Home
               </Grid>
               <Grid    sx={{cursor:'pointer',display:'flex',alignItems:'center',marginTop:'-1%'}}>
                <div onClick={handleNagivateProductComponents} > Shop </div>
                <img onMouseEnter={handleClick} src={Downarrow} width={20} style={{marginTop:'-10%'}}></img>
               </Grid>
               <Menu
                PaperProps={{
                  style: {
                  width:200,
                  backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
                  color:'#fff',
                  marginLeft:'-2%'
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
                        onClick={handleCategory}
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",                          
                            fontWeight: 500,
                          }}
                        >
                          PVC Cards
                        </MenuItem>

                        <MenuItem
                          className={classes.button1}
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
                          className={classes.button1}
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
                          className={classes.button1}
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
                          className={classes.button1}
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
                          className={classes.button1}
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
                          className={classes.button1}
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
                        
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",
                            fontWeight: 500,
                          }}
                          onClick={handleProduct}
                        >
                        All Product
                        </MenuItem>
                      </div>
                    </Menu>




               <Grid onClick={handleNagivate} sx={{cursor:'pointer'}}>
                Compitable Device
               </Grid>
               <Grid   sx={{cursor:'pointer'}}>
                How to create
               </Grid>
               <Grid onClick={handleNagivateCooperate} sx={{cursor:'pointer'}}>
               Cooperate Enquiries
               </Grid>
               <Grid >
                <img src={newLogin} width={22} ></img>
            </Grid>
               <Grid onClick={() => handleCart()} >
                <img src={bag} width={18} ></img>
                {cart.length}
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
