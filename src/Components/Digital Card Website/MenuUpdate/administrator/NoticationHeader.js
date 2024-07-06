import { Grade } from "@mui/icons-material";
import { Grid, Divider, Paper, InputBase, IconButton } from "@mui/material";
import live from "../assets/livesupport.png";
import SearchIcon from "@mui/icons-material/Search";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
export default function NotificationHeader() {
  return (
    <Grid sx={{ width: "100%" }}>
      <Grid
        sx={{
          width: "100%",
          height: 86,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Grid
          sx={{
            width: "85%",
            height: 86,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <Grid
              sx={{ fontSize: "30px", fontWeight: 700, lineHeight: "30px" }}
            >
        Notification settings
            </Grid>
          </Grid>
          <Grid>
          <FormControlLabel 
          style={{color:'#fff'}}
          value="start"
          control={<Switch style={{color:'#fff'}} />}
          label="Enable notification"
          labelPlacement="start"
        />
          </Grid>
        </Grid>
      </Grid>
      <Divider
        style={{
          backgroundColor: "#95a5a6",
        }}
      />
    </Grid>
  );
}
