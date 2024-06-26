import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../../Digital Card Assets/newdigitalcardhublogo.png";
import bag from "../../Digital Card Assets/bag.png"
import Menu from "@mui/material/Menu";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import { getData, postData } from "../../../Services/NodeServices";
import { useEffect } from "react";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { useContext } from "react";
import {
  ArrowDownwardRounded,
  ArrowDropDown,
  ShoppingBag,
} from "@mui/icons-material";
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
  useTheme,
  Button,  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Downarrow from "../../Digital Card Assets/downarrow.png"
import { Grid } from "@mui/material";
import { download } from "export-to-csv";
export default function NewHeader()
 {
  var navigate=useNavigate()
  const handleNagivate=()=>{
      navigate('/compitable')
  }
  const handleNagivateHome=()=>{
    navigate('/newhome')
}
const handleNagivateCooperate=()=>{
  navigate('/cooperate')
}

const handleNagivateShop=()=>{
  navigate('/newallproduct')
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

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [category, setCategory] = React.useState([]);
  const { cart, setCart } = useContext(SessionContext);
  const Token = window.localStorage.getItem("Token");
  const User = window.localStorage.getItem("UserNumber");

  const func = async () => {
    var formdata = new FormData();
    formdata.append("mobile", User);
    var response = await postData("cart/getAllProducts", formdata, true);
    if (response) {
      console.log(response.products);
      setCart(response.products);
    } else {
    }
  };
  useEffect(() => {
    if (User != null) {
      func();
    }
  }, []);
  const FetchAllCategory = async () => {
    var data = await getData("category/display_all_category");

    setCategory(data.data);
  };

  React.useEffect(function () {
    FetchAllCategory();
  }, []);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const medium = useMediaQuery(theme.breakpoints.down(900));
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }


  const handleCart = () => {
    if (cart.length > 0) {
      navigate("/cart");
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

               <Button
               onClick={handleNagivateShop}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
                sx={{
                      height:19,
                      color: "#fff",
                      fontWeight: 400,
                      fontSize: "15px",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                }}
              >
                Shop
                <Grid>
                  <ArrowDropDown style={{marginTop:'40%'}} />
                </Grid>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom"
                  transition
                  disablePortal
                  sx={{ zIndex: 40,marginLeft:'40%',marginTop:'4%'}}
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper sx={{ marginRight: 10,color:'#fff',backgroundImage: "linear-gradient(to bottom right, #171717,#171717)", }}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                          style={{ fontWeight: "bold", width: 250 }}
                        >
                          <List component="div">
                            {category.map((item) => (
                              <ListItemButton
                                onClick={() =>
                                  navigate(`/categoryproducts/${item._id}`, {
                                    state: { category: item.categoryname },
                                  })
                                }
                              >
                                <ListItemText
                                  primary={`${item.categoryname}`}
                                  sx={{ color: "#fff", fontWeight: 700 }}
                                />
                              </ListItemButton>
                            ))}
                          </List>
                        </MenuList>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Button>
               {/* <Grid    sx={{cursor:'pointer',display:'flex',alignItems:'center',marginTop:'-1%'}}>
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
                         Instagram
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
                         Google
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
                        FaceBook
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
                         PVC cards
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
                          Review Tage & Cards
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
                         Bundle
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
                         Display Stands
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
                         Invitation Wallet Cards
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
                        Menu Standee
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
                    </Menu> */}




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
