import { Grid, Typography, Button, Divider, TextField,Avatar } from '@mui/material'
import React, { useState} from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img1 from "../assets/dch logooo.png";
import { PhotoCamera } from '@mui/icons-material';
import { getData, postData } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Categorys()
{  
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

     
    return( <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

    <Grid container spacing={2} sx={{ width: 400 }}>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
        <img src={img1} alt="Masala Grill" width={120} />
      </Grid>

      <Grid item xs={6} sx={{}}>
        <Button variant="outlined" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
      </Grid>
      <Divider
        sx={{
          backgroundColor: 'black',
          height: '1px',
          width: '100%',
          mt: 1
        }}
      />
      <Grid item xs={3}>
        <Button
          onClick={() => navigate(`/menudashboard/${menuId}`)}
          variant='contained'
          sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography sx={{ fontFamily: 'poppins', fontSize: 30 }}>Fill Category</Typography>
      </Grid>

      <Divider sx={{ backgroundColor: 'black', height: '1px', width: '100%',marginTop:'2%' }} />

      <Grid item xs={12} sx={{marginTop:'2%'}}>
        <TextField onChange={(event) => setCategoryName(event.target.value)} value={CategoryName} id="outlined-basic" fullWidth label="Category Name" variant="outlined" />
      </Grid>

  <Grid item xs={12} sx={{ display: "flex",  flexDirection: "row", alignItems: "center" }}>
  <Avatar
  alt="Remy Sharp"
  variant="circular"
  src={Image.fileName}
  sx={{ width: 70, height: 70, m: 1 ,marginLeft:'10%'}}
  />
<Button
  color="primary"
  aria-label="upload picture"
  component="label"
  variant='contained'
  sx={{bgcolor:"#f3b419",marginLeft:'auto',width:'46%',color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
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
          Submit category
        </Button>
        </Grid>
        <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleReset} disableElevation>Reset</Button>
        </Grid>

      </Grid>







    </Grid>







  </Grid>)
}