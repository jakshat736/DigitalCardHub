import { Grid, Typography, Button, Divider, TextField,Avatar } from '@mui/material'
import React, { useState} from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img1 from "../assets/dch logooo.png";
import { PhotoCamera } from '@mui/icons-material';
import { getData, postData } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useMediaQuery from "@mui/material/useMediaQuery";


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

    
 const handleDelete=(rowData)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async(result) => {
    if (result.isConfirmed) {
  var result=await postData("")
    if(result.status)
    {
      Swal.fire(
        'Deleted!',
        'category has been deleted.',
        'success'
      )
      fetchAllCategory()
    }
    else
    {
      Swal.fire(
        'Deleted!',
        'category does not deleted',
        'error'
      )
    }
  }
  })
 }

 
 const fetchAllCategory=async()=>{
  var response=await getData('category/display_all_category')
  setCategory(response.data)
 }
 
   useEffect(function(){
       
   fetchAllCategory()

   },[])



    return( <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:2 }}>

    <Grid container spacing={2} sx={{ width: matches?'100%':400 }}>
      <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
        <img src={img1} alt="Masala Grill" width={120} />
      </Grid>

      <Grid item xs={6} >
        <Button variant="outlined" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
      </Grid>
      <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '98%',marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>
      <Grid item xs={12} sx={{display:'flex',gap:3}}>
        <Button
          onClick={() => navigate(`/menudashboard/${menuId}`)}
          variant='contained'
          sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
        >
          Back
        </Button>
    

    
      <Grid>
        <Typography sx={{ fontFamily: 'poppins', fontSize: matches?25:30,fontWeight:400 }}>Fill Category</Typography>
      </Grid>
      </Grid>
      <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '98%',marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>
      <Grid item xs={12} sx={{marginTop:'3%'}}>
        <TextField onChange={(event) => setCategoryName(event.target.value)} value={CategoryName} id="outlined-basic" fullWidth label="Category Name" variant="outlined" />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap:3,marginTop:'3%' }}>
      <Grid item xs={6}>
        <Button  sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
          Submit 
        </Button>
        </Grid>
        <Grid item xs={6}>
            <Button fullWidth variant="contained" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleReset} disableElevation>Reset</Button>
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ mt: matches?1:1 }}>
        <Typography sx={{ fontFamily: 'poppins', fontSize: matches?25:30,fontWeight:400 }}>View Category</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center',marginTop:'-2%'}}>
      <Divider sx={{ backgroundColor: 'black', width: '98%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>

      <MaterialTable style={{marginTop:'1%'}}
            title={<Grid sx={{display:"flex",flexDirection:"row"}}>
            <Grid>
             <img src={categoryimg} width="25"/>
            </Grid>
            </Grid>}
            columns={[
              { title: 'Categoryid', field: 'categoryid' },
              { title: 'Categoryname', field: 'categoryname' },          
            ]}
            data={category}
            actions={[
              {
                icon: 'edit',
                tooltip: 'edit Category',
                onClick: (event, rowData) =>(rowData)
              },
              {
              icon: 'delete',
                tooltip: 'delete Category',
                onClick: (event, rowData) => handleDelete(rowData)
              },
            ]}
          />  
    </Grid>
  </Grid>)
}