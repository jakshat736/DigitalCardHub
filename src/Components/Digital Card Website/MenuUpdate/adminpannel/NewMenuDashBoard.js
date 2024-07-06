import { Grid, Divider, Button, ListItemButton } from "@mui/material";
import menu from "../assets/menubar.png";
import self from "../assets/self.png";
import self2 from "../assets/self2.png";
import view from "../assets/view.png";
import view2 from "../assets/view2.png";
import ring from "../../Digital Card Assets/ring.png"
import coup from "../assets/coup.png";
import coup2 from "../assets/coup2.png";
import edit from "../assets/edit.png";
import editdd from "../assets/editdd.png";
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
import Notification from "../administrator/Notification";

export default function NewMenuDashBoard() {
  var navigate = useNavigate()
  const [checked, setChecked] = React.useState(true);
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
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
              <img src={self2} width={20}></img>{" "}
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
              <img src={view2} width={20}></img>{" "}
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
              <img src={coup2} width={20}></img>{" "}
            </div>
            <div>Coupons</div>
          </Grid>

          <Grid
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
              <img src={self2} width={20}></img>{" "}
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
              <img src={ring} width={20}></img>{" "}
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
              <img src={editdd} width={20}></img>{" "}
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
          <Route element={<Notification/>} path="/notification"/>
        </Routes>
      </Grid>
    </Grid>
  );
}
