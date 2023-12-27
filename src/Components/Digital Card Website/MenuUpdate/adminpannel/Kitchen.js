import { Grid ,Typography,Button,Divider,TextField,IconButton,handleImage,Avatar} from '@mui/material'
import img1 from "../assets/dch logooo.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useState,  } from "react";
import { getData, postData, serverURL } from "../../../Services/NodeServices";

import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Kitchen() {
  const location =useLocation()
  const companyId=location.state.companyId
  const fullData=JSON.parse(location.state.data)
   
  
  const [Name,setName]  = useState("")
  const [Phone,setPhone]  = useState("")
  const [Chief,setChief]  = useState("")
  const [Table,setTable]  = useState("")
  const [Number,setNumber]  = useState("")

  const expandedData = fullData.reduce((acc, item) => {
    if (item.full && item.full > 0) {
      acc.push({ ...item, quantity: item.full, totalprice: item.fullPrice,type:"full" });
    }
    if (item.half && item.half > 0) {
      acc.push({ ...item, quantity: item.half, totalprice: item.halfPrice,type:"half" });
    }
    return acc;
  }, []);

  const totalPrice = expandedData.reduce((total, item) => {
    return total + item.totalprice * item.quantity;
  }, 0);


  
  const handleSubmit = async () => {
    var menuorderdata = new FormData;
    menuorderdata.append("companyId",companyId)
    menuorderdata.append("name",Name)
    menuorderdata.append("phone",Phone)
    menuorderdata.append("message",Chief)
    menuorderdata.append("table",Table)
    menuorderdata.append("Number",Number)
    menuorderdata.append("totalPrice",totalPrice)
    menuorderdata.append("dishes",JSON.stringify(expandedData))
const response = await postData("index/menuorder", menuorderdata, true);
if(response.status==true){
  Swal.fire({
    text:"Order Sent to kitchen",
    icon:"success",
    timer:1000
  })
  
}else{
  Swal.fire({
    text:"failed to send",
    icon:"error",
    timer:1000
  })
}
   





  }

  return (
    <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      
        <Grid container spacing={2} sx={{width:450}}>
        <Grid item xs={6} sx={{display:'flex',flexDirection:'row',}}>
     <img src={img1} alt="Masala Grill" width={120} />
       
</Grid>

<Grid item xs={6} sx={{}}>
<Button variant="outlined" sx={{bgcolor:'yellow',mt:2}}><WhatsAppIcon/>Live support</Button>
</Grid>
<Divider
          sx={{
            backgroundColor: 'black',
            height: '1px',
            width: '100%',
            mt:1
          }}
        />
    <Grid item xs={12} sx={{display:'flex',flexDirection:'row'}}>
        <Typography><FavoriteIcon sx={{width:20,}}/></Typography>
        <Typography sx={{fontSize:20,fontFamily:'poppins',ml:1}}>Thank You!</Typography>
     
        </Grid>    
        <Grid item xs={12} sx={{}}>
        <Typography sx={{textAlign:'left'}}>Please check your cart and you can pay after adding your </Typography>
        <Typography sx={{textAlign:'left'}}>shipping details</Typography>
        </Grid>

        <Grid item xs={6} sx={{display:'flex'}}>
         <Typography>Dish Name</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography>dish price</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography> total price</Typography>
        </Grid>

        {expandedData.map((item) => (
        <>
          <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>
        {item.type=="full" ? "Full" : item.type=="half" ? "Half" : ""}
      </Typography>
            <Typography>-{item.name} X {item.quantity}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {item.type=="full" ? `Rs:${item.fullPrice}` :item.type=="half" ? `Rs:${item.halfPrice}` : ""}
            </Typography>
            
          </Grid>
          <Grid item xs={3}>
            <Typography>
              {item.type=="full" ? `Rs:${item.fullPrice*item.quantity}` :item.type=="half" ? `Rs:${item.halfPrice * item.quantity}` : ""}
            </Typography>
            
            
          </Grid>
          
        </>
      ))}
      <Grid item xs={12}>
      <Typography sx={{ mt: 5 }}>Total: ₹ {totalPrice}</Typography>
      <Typography>SGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>CGST: ₹ {(totalPrice * 2.5)/100}</Typography>
      <Typography>Grand Total: ₹ {((totalPrice * 5)/100)+totalPrice}</Typography>
{/* <Typography>CGST: ₹ {(data.dish1price + data.dish2price)*data.cgst}</Typography> */}
      </Grid>

        <Grid item xs={6}>
        <TextField onChange={(e)=>setName(e.target.value)} value={Name} id="outlined-basic" label="Name" variant="outlined" />

        </Grid>
        <Grid item xs={6}>
        <TextField onChange={(e)=>setPhone(e.target.value)} value={Phone} id="outlined-basic" label="Phone*" variant="outlined" />

        </Grid>
        <Grid item xs={12}>

        <TextField onChange={(e)=>setChief(e.target.value)} value={Chief} fullWidth label="Any message for the chef?" id="fullWidth" />
        </Grid>
        <Grid item xs={12}>

        <TextField onChange={(e)=>setTable(e.target.value)} value={Table} fullWidth label="Serve on Table" id="fullWidth" />
        </Grid>
        <Grid item xs={12}>

<TextField onChange={(e)=>setNumber(e.target.value)} value={Number} fullWidth label="Table Number" id="fullWidth" />
</Grid>
<Grid item xs={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
 
 <Button sx={{bgcolor:'black'}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
  <Typography sx={{color:'yellow'}}>Send to Kitchen</Typography>
</Button>

</Grid>
 
        </Grid>
       
    </Grid>
  )
}
