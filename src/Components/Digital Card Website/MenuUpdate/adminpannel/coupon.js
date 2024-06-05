import { Grid, Typography, Button, Divider, TextField,Avatar , IconButton, } from '@mui/material'
import React, { useState} from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img1 from "../assets/dch logooo.png";
import { PhotoCamera } from '@mui/icons-material';
import { getData, postData } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Delete } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import MaterialTable from "@material-table/core";
import { useEffect } from "react";
import categoryimg from "../assets/category.png"
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function Categorys()
{  
     const matches = useMediaQuery("(max-width:600px)");
     const location = useLocation()
     const menuId = location.state.menuId
     const navigate = useNavigate()
     const [category,setCategory]=useState([])
     const [CategoryName,setCategoryName]=useState('')
     const [Image, setImage] = useState({
        fileName: "",
        bytes: "",
      });
const [empty, setEmpty] = useState({ title: "", rate: "" });
const [coupon, setCoupon] = useState(Array(1).fill(empty));
    
      
  const handleAddLink = () => {
    setCoupon([...coupon, ...Array(1).fill(empty)]);
  };

  const handleCouponDelete = (index) => {
    const updatedCoupon = [...coupon];

    updatedCoupon.splice(index, 1);

    setCoupon(updatedCoupon);
  };

  const handleCouponChange = (index, value) => {
    const newData = [...coupon];
    newData[index] = { ...newData[index], title: value };

    setCoupon(newData);
  };





    
   const handleReset=()=>{
   
   }

    const handleSubmit=async()=>{
     var formData= new FormData()
     formData.append()
     formData.append()
     var response= await postData()
    if(response.status)
    {
      Swal.fire({
        icon: 'success',
        title: 'Category',
        text: response.message,
        toast:true
      })
    }
    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        toast:true
      })
    }
    }

  
 
 


    return( <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:2 }}>

    <Grid container spacing={2} sx={{ width: 400 }}>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
        <img src={img1} alt="Masala Grill" width={120} />
      </Grid>

      <Grid item xs={6} >
        <Button variant="outlined" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
      </Grid>
      <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '98%',marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>
      <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Button
          onClick={() => navigate(`/menudashboard/${menuId}`)}
          variant='contained'
          sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
        >
          Back
        </Button>
        <Grid>
        <Typography sx={{ fontFamily: 'poppins', fontSize: matches?25:30,fontWeight:400 }}>Coupons</Typography>
      </Grid>
    
      <Typography><AddIcon   onClick={() => handleAddLink()}/></Typography>
      
      </Grid> 

       <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '98%',marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>   

    {coupon.map((item, index) => (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
             alignItems:'center',
              justifyContent: "center",
              marginBottom: 8,
              gap: 15,
            }}
          >
            <Grid sx={{display:'flex',flexDirection:'column',gap:3}}>
            <TextField
              value={item[index]?.Coupon || ""}
              onChange={(event) => handleCouponChange(index, event.target.value)}
              label="Enter Coupon Code"
            />
            <TextField
              value={item[index]?.rate || ""}
              onChange={(event) => handleCouponChange(index, event.target.value)}
              label="Offer %"
            /></Grid>
            <IconButton onClick={() => handleCouponDelete(index)}>
              <Delete />
            </IconButton>
          </Grid>
        ))}
     <Grid item xs={12}>
        <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:4}}>
            <Grid sx={{fontSize:'20px',fontWeight:500}}>
                Time
            </Grid>
        <TextField
              label="00"
              style={{width:'6ch'}}
            />
            <Grid sx={{fontSize:'20px',fontWeight:500}}>
                To
            </Grid>
            <TextField
              label="00"
              style={{width:'6ch'}}
            />
        </Grid>
     </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap:3,marginTop:'3%' }}>
      <Grid item xs={6}>
        <Button  sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
          Submit 
        </Button>
        </Grid>
        <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleReset} disableElevation>Close Coupon</Button>
        </Grid>
      </Grid>
</Grid>
  </Grid>)
}