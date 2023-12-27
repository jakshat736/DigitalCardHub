import { Grid, Button, Divider, Typography, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, IconButton, Avatar } from '@mui/material';
import img1 from "../assets/dch logooo.png";
import React, { useEffect, useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { getData, postData, serverURL } from "../../../Services/NodeServices";

import { useLocation, useNavigate } from "react-router-dom";
import { PhotoCamera } from '@mui/icons-material';
import Swal from 'sweetalert2';



export default function AllMenu() {
  // const [datafood, setData] = useState([]);
    
  var navigate=useNavigate()
  const [datafood, setData] = useState([]);
  const [_id, setId] = useState('');
  const [open, setOpen] = useState(false);
  const [Image, setImage] = useState({
    fileName: "",
    bytes: "",
  });
  const location=useLocation()
  const companyId=location.state.companyId

  

  // const fetchData = async () => {
  //   const result = await getData("index/editdata");
  //   setData(result.data); // Update the data state with the fetched data
  //   console.log("result",result.data)
  // };
    
  //  useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);

  const fetchData = async () => {
    var formData=new FormData
    formData.append('companyId',companyId)
    const result = await postData("index/getDataById",formData,true);
    setData(result.data); // Update the data state with the fetched data
    console.log("result", result.data);
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  const updateImage = (event) => {
    setImage({
      fileName: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

  const handleImage=(item)=>{
    setImage({fileName:`${serverURL}/images/${item.Image}`,bytes:""})
    setId(item._id)
    setOpen(true)

  }

  const handleClose=()=>{
    
    setOpen(false)
    setId('')
    setImage({fileName:"",bytes:""})
  }

  const handleUpdate=async()=>{
    var formData=new FormData
    formData.append('_id',_id)
    formData.append("image", Image.bytes)
    
    const response=await postData("index/editImage",formData,true)
    if(response.status==true){
      Swal.fire({
        text:"Image Updated Successfully",
        icon:"success",
        timer:1000
      })
      setOpen(false)
      setId('')
      setImage({fileName:"",bytes:""})
      fetchData()
    }else{
      Swal.fire({
        text:"Fail to Update! Try Again",
        icon:'error',
        timer:1000
      })
    }
  }

  const ImageUpdate = () => {
    return (
      <Dialog open={open} onClose={handleClose} fullWidth sx={{width:"100%"}}>
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
         Update Image
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} >
        <Grid item xs={12} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}} >
         

        
           <Button
            
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{display:"flex",flexDirection:"column"}}
          >  <Avatar
          alt="Remy Sharp"
          variant="rounded"
          src={Image.fileName}
          sx={{ width: 100, height: 100 }}
        />
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={updateImage}
            />
            Update Image <PhotoCamera />
          </Button>
        </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleUpdate()} variant="contained">
            Save
          </Button>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };


  return (
    <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid container spacing={2} sx={{ width: 400, ml: { xs: 1, md: 0 } }}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
          <img src={img1} alt="Masala Grill" width={120} />
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" sx={{ bgcolor: "yellow", mt: 0.5 }}>
            <WhatsAppIcon />
            Live support
          </Button>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            width: "100%",
            m: 1,
          }}
        />
        <Grid item xs={3}>
          
          
          <Button
            onClick={() => navigate(`/menudashboard/${companyId}`)}
            variant='contained'
           
          >
            Back
          </Button>
        
        </Grid>

        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography sx={{ fontSize: 25, fontFamily: 'poppins', textAlign: 'left' }}>All Menu Items</Typography>
        </Grid>

        {datafood.map((item,index) => (
            <Paper sx={{width:400,m:1}}>
          <Grid container sx={{width:400, cursor:'pointer',padding:1}} >
            
            <Grid item xs={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
              <Typography>{index+1} : {item.dish}</Typography>
              <Typography>{item.description}</Typography>
              <Typography>{item.stock}</Typography>
              <Button variant='contained' sx={{display:'flex',justifyContent:'center',alignItems:'center',ml:2,mb:-3}} onClick={()=>navigate('/editmenu',{state:{data:JSON.stringify(item)}})}>Edit</Button>
                   
        
            </Grid>
            <Grid item xs={5} sx={{ml:2}}>
            <Avatar
          alt="Remy Sharp"
          variant="rounded"
          src={`${serverURL}/images/${item.Image}`}
          sx={{ width: 100, height: 100,ml:2 }}
        />
              <Button variant='contained' onClick={()=>handleImage(item)}>Update Image</Button>
            </Grid>
          
          </Grid>
          </Paper>
        ))}
      </Grid>
      {ImageUpdate()}
    </Grid>
  );
}
