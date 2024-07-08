import { Grid, Divider, Button, ListItemButton } from "@mui/material";
import menu from "../assets/menubar.png";
import { useStyles } from "./HoveredCss";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import logo from "../assets/logoss.png";
import * as React from "react";
import DashboardHome from "../../Digital Card User Interface/UserDashboard/Pages/NewDashboard/DashboardHome";
import NewUserDashBoard from "./NewUserDashBoard";
import { Route, Routes } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import OrderList from "./OrderList";
import Coupons from "./Coupons";
import SelfOrder from "./NewSelfOrder";
import NewSelfOrder from "./NewSelfOrder";
import Notification from "./Notification";
import EditMenuItem from "./EditMenuItem";
import { Icon } from '@iconify/react';
import { useState } from "react";

export default function NewMenuDashBoard() {
  var navigate = useNavigate()
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const [self, setSelf] = useState(true);
  const [vieworder, setViewOrder] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [edit, setEdit] = useState(false);
  const [notification, setNotification] = useState(false);
  const [detial, setDetail] = useState(false);


  
  const handleSelf = () => {
    setSelf(true);
    vieworder(false);
    coupon(false);
    edit(false);
    notification(false);
    detial(false);
  };

  const handleViewOrder = () => {
    setSelf(false);
    vieworder(true);
    coupon(false);
    edit(false);
    notification(false);
    detial(false);
  };

  const handleCoupon = () => {
    setSelf(false);
    vieworder(false);
    coupon(true);
    edit(false);
    notification(false);
    detial(false);
  };

  const handleEdit = () => {
    setSelf(false);
    vieworder(false);
    coupon(false);
    edit(true);
    notification(false);
    detial(false);
  };

  const handleNotication = () => {
    setSelf(false);
    vieworder(false);
    coupon(false);
    edit(false);
    notification(true);
    detial(false);
  };

  const handleDetail = () => {
    setSelf(false);
    vieworder(false);
    coupon(false);
    edit(false);
    notification(false);
    detial(true);
  };




  const classes = useStyles();
  return (
    <Grid
      container
      sx={{
        display: "flex",
        background: "#000",
        color: "#000000",
        fontFamily: "Montserrat",
      }}
    >
      <Grid
        item
        xs={2.5}
        sx={{
          width: "100%",
          background: "#fff",
          height: "100vh",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 10,
          position: "sticky",
          zIndex: "2",
          top: 0,
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 2.2,
            marginTop: "4%",
          }}
        >
          <Grid
            sx={{
              color: "#000000",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "22px",
              width: "70%",
            }}
          >
            Restaurent Name
          </Grid>
          <Grid sx={{ marginLeft: "auto" }}>
            <img src={menu} width={40}></img>
          </Grid>
        </Grid>
        <Divider
          style={{
            backgroundColor: "#95a5a6",
            height: "2px",
            marginTop: "-2%",
          }}
        />

        <Grid sx={{ marginTop: "15%", width: "100%", padding: 1 }}>
          <Grid
             onClick={()=>navigate('/newmenudashboard/newselforder')}
            className={classes.buttonss}
            fullWidth
            style={{
              height: "60px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
              textTransform: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              letterSpacing: "-2.2%",
              gap: 23,
              cursor: "pointer",
            }}
          >
            <div style={{ marginTop: "1%", marginLeft: "8%" }}>
              {" "}
              <Icon icon="mdi:cookie-edit"  style={{fontSize:'24px'}} />
            </div>
            <div>Self order</div>
          </Grid>

          <Grid
            onClick={()=>navigate('/newmenudashboard/orderlist')}
            fullWidth
            className={classes.buttonss}
            style={{
              height: "60px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
              textTransform: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              letterSpacing: "-2.2%",
              gap: 23,
              cursor: "pointer",
            }}
          >
            <div style={{ marginTop: "1%", marginLeft: "8%" }}>
              {" "}
              <Icon icon="solar:documents-bold" style={{fontSize:'24px'}}/>
            </div>
            <div>View order</div>
          </Grid>

          <Grid
           onClick={()=>navigate('/newmenudashboard/coupons')}
            className={classes.buttonss}
            fullWidth
            style={{
              height: "60px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
              textTransform: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              letterSpacing: "-2.2%",
              gap: 23,
              cursor: "pointer",
            }}
          >
            <div style={{ marginTop: "1%", marginLeft: "8%" }}>
              {" "}
              <Icon icon="ri:discount-percent-fill"  style={{fontSize:'22px'}} />
            </div>
            <div>Coupons</div>
          </Grid>

          <Grid
            onClick={()=>navigate('/newmenudashboard/editmenuitem')}
            className={classes.buttonss}
            fullWidth
            style={{
              height: "60px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
              textTransform: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              letterSpacing: "-2.2%",
              gap: 23,
              cursor: "pointer",
            }}
          >
            <div style={{ marginTop: "1%", marginLeft: "8%" }}>
              {" "}
              <Icon icon="tdesign:map-edit"  style={{fontSize:'22px'}} />
            </div>
            <div>Edit menu items</div>
          </Grid>


          <Grid
           onClick={()=>navigate('/newmenudashboard/notification')}
            className={classes.buttonss}
            fullWidth
            style={{
              height: "60px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
              textTransform: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              letterSpacing: "-2.2%",
              gap: 23,
              cursor: "pointer",
            }}
          >
            <div style={{ marginTop: "1%", marginLeft: "8%" }}>
              {" "}
              <Icon icon="material-symbols:wifi-notification-rounded"  style={{fontSize:'22px'}}/>
            </div>
            <div>Notification setting</div>
          </Grid>


          <Grid
           onClick={()=>navigate('/newmenudashboard/newuserdashboard')}
            className={classes.buttonss}
            fullWidth
            style={{
              height: "60px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "22px",
              textTransform: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              letterSpacing: "-2.2%",
              gap: 23,
              cursor: "pointer",
            }}
          >
            <div style={{ marginTop: "1%", marginLeft: "8%" }}>
              {" "}
              <Icon icon="tabler:list-details"  style={{fontSize:'22px'}} />
            </div>
            <div>Edit restaurent details</div>
          </Grid>

          <Grid
            sx={{
              marginTop: "20%",
              border: "1px solid #828282",
              padding: 2,
              width: "100%",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 40,
            }}
          >
            <div
              style={{ fontSize: "20px", fontWeight: 500, lineHeight: "22px" }}
            >
              Calls
            </div>
            <div style={{ marginLeft: "6%" }}>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
          </Grid>
          <Grid sx={{ fontSize: "10px", marginTop: "2%", marginLeft: "2%" }}>
            Enable or Disable your call options from here.
          </Grid>
          <Grid
            sx={{
              marginTop: "18%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logo} width={100}></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9.5} sx={{ width: "100%" }}>
        {/* <NewUserDashBoard/> */}
        <Routes>
          <Route element={<NewUserDashBoard />} path="/newuserdashboard" />
          <Route element={<OrderList/>} path="/orderlist" />
          <Route element={<Coupons/>} path="/coupons" />
          <Route element={<NewSelfOrder/>} path="/newselforder" />
          <Route element={<Notification/>} path="/notification"/>4
          <Route element={<EditMenuItem/>} path="/editmenuitem"/>
        </Routes>
      </Grid>
    </Grid>
  );
}
