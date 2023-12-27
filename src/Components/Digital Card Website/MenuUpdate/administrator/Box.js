import React from "react";
import { Grid, Typography ,TextField,InputAdornment} from "@mui/material";
import img1 from '../assets/a1.jpg';
import PhoneIcon from "@mui/icons-material/Phone";
import Company from "./Company";
import '../administrator/box.css'

export default function Box(props) {
  return (
    <>
    <Company />
    <div className="container" style={{ border: '2px solid #ffde00', padding: '9px', }}>
      <Grid container spacing={1}>
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={img1} alt="Masala Grill" width={100} />
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ fontSize: '20px', color: 'black' }}>Masala Grill</Typography>
          <Typography sx={{ fontSize: '10px' }}>At Masala Grill, we are passionate about serving the finest Indian</Typography>
          <Typography sx={{ fontSize: '10px' }}> cuisine. Our flavors...</Typography>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="center">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </div>
  </>
  
  
  

  );
}
