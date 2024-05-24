import { Grid, Typography, Button, Divider, TextField,Avatar } from '@mui/material'
import React, { useState} from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img1 from "../assets/dch logooo.png";
import { PhotoCamera } from '@mui/icons-material';
import { getData, postData } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Categorys()
{  
     const matches = useMediaQuery("(max-width:600px)");
     const location = useLocation()
     const navigate = useNavigate()

    const [CategoryName,setCategoryName]=useState('')
    const [Image, setImage] = useState({
        fileName: "",
        bytes: "",
      });
    
    const menuId = location.state.menuId
    const handleCategoryImage = (event) => {
        setImage({
          fileName: URL.createObjectURL(event.target.files[0]),
          bytes: event.target.files[0],
        });
    };
    
   const handleReset=()=>{
    setCategoryName('')
    setImage({bytes:'',fileName:''})
   }

    const handleSubmit=async()=>{
     var formData= new FormData()
     formData.append('categoryname',CategoryName)
     formData.append('image',Image.bytes)
     var response= await postData('category/submit_category',formData)
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

     
    return( <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:matches?2:0 }}>

    <Grid container spacing={2} sx={{ width: 400 }}>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
        <img src={img1} alt="Masala Grill" width={120} />
      </Grid>

      <Grid item xs={6} >
        <Button variant="outlined" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
      </Grid>
      <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '98%',marginTop:'2%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>
      <Grid item xs={3}>
        <Button
          onClick={() => navigate(`/menudashboard/${menuId}`)}
          variant='contained'
          sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ mt: matches?0:1 }}>
        <Typography sx={{ fontFamily: 'poppins', fontSize: matches?25:30,fontWeight:400 }}>Fill Category</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '98%',marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>
      <Grid item xs={12} sx={{marginTop:'3%'}}>
        <TextField onChange={(event) => setCategoryName(event.target.value)} value={CategoryName} id="outlined-basic" fullWidth label="Category Name" variant="outlined" />
      </Grid>

  <Grid item xs={12} sx={{ display: "flex",  flexDirection: "row", alignItems: "center" }}>
  <Avatar
  alt="Remy Sharp"
  variant="circular"
  src={Image.fileName}
  sx={{ width: matches?50:70, height: matches?50:70, m: 1 ,marginLeft:'10%'}}
  />
<Button
  color="primary"
  aria-label="upload picture"
  component="label"
  variant='contained'
  sx={{bgcolor:"#f3b419",marginLeft:'auto',width:matches?'55%':'46%',color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
>
  <input
      hidden
      accept="image/*"
      type="file"
      onChange={handleCategoryImage}   
  />
  Upload Image<PhotoCamera />
</Button>


</Grid>
   
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap:3 }}>
      <Grid item xs={6}>
        <Button  sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
          Submit 
        </Button>
        </Grid>
        <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleReset} disableElevation>Reset</Button>
        </Grid>

      </Grid>







    </Grid>







  </Grid>)
}