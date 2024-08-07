import { Box, Grid } from '@mui/material';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from 'react';
import  Homenew  from "../Themes/ThemeAssets/homenew.png";
import  box  from "../Themes/ThemeAssets/box.png";
import  create  from "../Themes/ThemeAssets/create.png";
import  feedback  from "../Themes/ThemeAssets/feedback.png";
import  shop  from "../Themes/ThemeAssets/shop.png";
import  login from "../Themes/ThemeAssets/loginnew.png";
import { useNavigate } from 'react-router-dom';
import menubarbold from "../Themes/ThemeAssets/menubarbold.png";
import { Feed } from '@mui/icons-material';

const SideBar = () => {
    const navigate = useNavigate()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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
                backgroundImage: "radial-gradient(#ffff, #bdc3c7)",
                height: "100%",
            }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List style={{ marginTop: "15%", marginLeft: "4%" }}>
                <ListItem disablePadding onClick={() => navigate('/')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <img src={Homenew}></img>
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

                <ListItem disablePadding style={{ marginTop: "5%" }} onClick={() => navigate('/compatible-devices')}>
                    <ListItemButton>
                        <ListItemIcon>
                        <img src={box}></img>
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

                <ListItem disablePadding style={{ marginTop: "5%" }} onClick={() => navigate('/how_to_create')}>
                    <ListItemButton>
                        <ListItemIcon>
                        <img src={create}></img>
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

                <ListItem disablePadding style={{ marginTop: "5%" }} >
                    <ListItemButton>
                        <ListItemIcon>
                        <img src={feedback}></img>
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

                <ListItem disablePadding style={{ marginTop: "5%" }} onClick={() => navigate('/digitalcardlogin')}>
                    <ListItemButton>
                        <ListItemIcon>
                        <img src={login}></img>
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

                <ListItem disablePadding style={{ marginTop: "5%" }} onClick={() => navigate('/allproducts')}>
                    <ListItemButton>
                        <ListItemIcon>
                        <img src={shop}></img>
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


    return (
        <Grid key={"left"} style={{ cursor: "pointer" }}>
            <img
                src={menubarbold}
                onClick={toggleDrawer("left", true)}
                style={{ color: "#fff", width: '18%' }}
            ></img>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                PaperProps={{
                    square: false,
                    style: {
                        height: '90vh',
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        marginTop:15
                        // Dialog ko page ke bottom me set karein
                    },
                }}
            >
                {list("left")}
            </Drawer>
        </Grid>
    )
}

export default SideBar
