import { Grid, Typography, Button, Divider, TextField, IconButton, handleImage, Avatar } from '@mui/material'
import React, { useState, useEffect } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import img1 from "../assets/dch logooo.png";
import { PhotoCamera } from '@mui/icons-material';
import { getData, postData } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import addon from "../assets/addon.png"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AddMenu() {
  const location = useLocation()
  const navigate = useNavigate()
  const menuId = location.state.menuId
  const matches = useMediaQuery("(max-width:600px)");

  const [rate1, setRate1] = useState('')
  const [rate2, setRate2] = useState('')
  const [rate3, setRate3] = useState('')
  const [rate4, setRate4] = useState('')
  const [rate5, setRate5] = useState('')
  const [rate6, setRate6] = useState('')
  const [rate7, setRate7] = useState('')
  const [rate8, setRate8] = useState('')
  const [rate9, setRate9] = useState('')
  const [rate10, setRate10] = useState('')

  const [addOn1, setAddOn1] = useState('')
  const [addOn2, setAddOn2] = useState('')
  const [add2, setAdd2] = useState('none')
  const [addOn3, setAddOn3] = useState('')
  const [add3, setAdd3] = useState('none')
  const [addOn4, setAddOn4] = useState('')
  const [add4, setAdd4] = useState('none')
  const [addOn5, setAddOn5] = useState('')
  const [add5, setAdd5] = useState('none')
  const [addOn6, setAddOn6] = useState('')
  const [add6, setAdd6] = useState('none')
  const [addOn7, setAddOn7] = useState('')
  const [add7, setAdd7] = useState('none')
  const [addOn8, setAddOn8] = useState('')
  const [add8, setAdd8] = useState('none')
  const [addOn9, setAddOn9] = useState('')
  const [add9, setAdd9] = useState('none')
  const [addOn10, setAddOn10] = useState('')
  const [add10, setAdd10] = useState('none')
  const [count, setCount] = useState(1);

  const [Dish, setDish] = useState("")
  const [Price, setPrice] = useState("")
  const [Halfprice, setHalfprice] = useState("")
  const [rating, setRating] = useState("")
  const [Sorting, setSorting] = useState("")
  const [Stock, setStock] = useState("")
  const [Description, setDescription] = useState("")
  const [foodType, setFoodType] = useState("");
  const [Image, setImage] = useState({
    fileName: "",
    bytes: "",
  });

  const [categoryId, setCategoryId] = React.useState('');
  //Akshat bhaiya look this comment code one time this helps you 
  // const fetchAllCategory = async () => {
  //   var result = await getData("category/all_category");
  //   setcategoryList(result.data);
  // };

  // useEffect(function () {
  //   fetchAllCategory();
  // }, []);

  // const fillAllCategory = () => {
  //   return categoryList.map((item) => {
  //     return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>;
  //   });
  // };



  const handleAdd = (n) => {

    if (n == 1) {
        setAdd2('flex')
        setCount(n + 1)
    }
    if (n == 2) {
      setAdd3('flex')
        setCount(n + 1)
    }
    if (n == 3) {
      setAdd4('flex')
        setCount(n + 1)
    }
    if (n == 4) {
      setAdd5('flex')
        setCount(n + 1)
    }
    if (n == 5) {
      setAdd6('flex')
        setCount(n + 1)
    }
    if (n == 6) {
      setAdd7('flex')
        setCount(n + 1)
    }
    if (n == 7) {
      setAdd8('flex')
        setCount(n + 1)
    }
    if (n == 8) {
      setAdd9('flex')
        setCount(n + 1)
    }
    if (n == 9) {
      setAdd10('flex')
        setCount(n + 1)
    }

}



  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleImage = (event) => {
    setImage({
      fileName: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

  // const fetchData = async () => {
  //   const result = await getData("index/adddata");
  //   setData(result.data); // Update the data state with the fetched data
  // };

  const handleSubmit = async () => {
    var AddMenudata = new FormData;
    if(Dish!="" && Price!="" && Halfprice!="" && rating!="" && Sorting!="" && Stock!="" && Description!="" && foodType!="" && Image.fileName!=""){
    AddMenudata.append("menuId", menuId);
    AddMenudata.append("dish", Dish);
    AddMenudata.append("price", Price);
    AddMenudata.append("Halfprice", Halfprice);

    AddMenudata.append("rating", rating);
    AddMenudata.append("sorting", Sorting);
    AddMenudata.append("stock", Stock);
    AddMenudata.append("description", Description);
    AddMenudata.append("foodtype", foodType);
    AddMenudata.append("image", Image.bytes);
    const response = await postData("index/addmenu", AddMenudata, true);
     console.log(response)

     if(response.status==true){
      Swal.fire({
        text:"Saved Successfully",
        timer:1000,
        icon:"success"
      })
     }

  

    }else{
      Swal.fire({
        text:"Fill All The Details",
        timer:1000,
        icon:"warning"
      })
    }


  };


  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);


  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:2 }}>

      <Grid container spacing={2} sx={{ width: 400 }}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />

        </Grid>

        <Grid item xs={6} sx={{}}>
          <Button variant="outlined" sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"},mt:2}}><WhatsAppIcon />Live support</Button>
        </Grid>
        <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '100%',marginTop:'1%',display:'flex',justifyContent:'center',alignItems:'center' }} />
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
        {/* {data.map((item) => (
        <React.Fragment key={item.id}> */}
        <Grid item xs={12} sx={{ mt:matches?0:2,display:'flex',justifyContent:'center',alignItems:'center' }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: 30, textAlign: 'left' }}>Update Menu Items</Typography>
        </Grid>

        <Grid item xs={12} sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Divider sx={{ backgroundColor: 'black', width: '100%',marginTop:matches?'0':'1%',display:'flex',justifyContent:'center',alignItems:'center' }} />
      </Grid>

        <Grid item xs={12}>
        <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={categoryId}
          label="Category"
          onChange={(event) => setCategoryId(event.target.value)} 
        >
           {/* {fillAllCategory()} */}
          <MenuItem value={8}>South India</MenuItem>
          <MenuItem value={9}>North India</MenuItem>
          <MenuItem value={10}>Chinese</MenuItem>
        </Select>
      </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField onChange={(e) => setDish(e.target.value)} value={Dish} id="outlined-basic" fullWidth label="DishName" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setRating(e.target.value)} value={rating} id="outlined-basic" label="Ratings" variant="outlined" />
        </Grid>

        <Grid item xs={6}>
          <TextField onChange={(e) => setPrice(e.target.value)} value={Price} id="outlined-basic" label="Price" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <TextField onChange={(e) => setHalfprice(e.target.value)} value={Halfprice} id="outlined-basic" label="Halfprice" variant="outlined" />
        </Grid>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'center',marginTop:'2%'}}>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{display:'flex',justifyContent:'center',fontWeight: 600,color:'#f3b419',fontSize:16}}>Food Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={foodType}
              onChange={handleFoodTypeChange}
            >
              <FormControlLabel value="veg" control={<Radio />} label="veg" />
              <FormControlLabel value="nonveg" control={<Radio />} label="Non-veg" />
              <FormControlLabel value="Vegan" control={<Radio />} label="Vegan" />

            </RadioGroup>
          </FormControl>
        </Grid>




        <Grid item xs={12}>
                        <Grid sx={{ fontSize: { xs: 14, md: 20 }, fontWeight: 600,color:'#f3b419',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',gap:.5 }}><img src={addon} width={26}></img>AddOn</Grid>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8,gap:15 }}>
                        <TextField value={addOn1} onChange={(e) => setAddOn1(e.target.value)}  label='Add On 1(Optional)' />
                        <TextField value={rate1} onChange={(e) => setRate1(e.target.value)}  label='Rate 1' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add2, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn2} onChange={(e) => setAddOn2(e.target.value)}  label='Add On 2(Optional)' />
                        <TextField value={rate2} onChange={(e) => setRate2(e.target.value)}  label='Rate 2' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add3, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn3} onChange={(e) => setAddOn3(e.target.value)}  label='Add On 3(Optional)' />
                        <TextField value={rate3} onChange={(e) => setRate3(e.target.value)}  label='Rate 3' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add4, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn4} onChange={(e) => setAddOn4(e.target.value)}  label='Add On 4(Optional)' />
                        <TextField value={rate4} onChange={(e) => setRate4(e.target.value)}  label='Rate 4' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add5, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn5} onChange={(e) => setAddOn5(e.target.value)}  label='Add On 5(Optional)' />
                        <TextField value={rate5} onChange={(e) => setRate5(e.target.value)}  label='Rate 5' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add6, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn6} onChange={(e) => setAddOn6(e.target.value)}  label='Add On 6(Optional)' />
                        <TextField value={rate6} onChange={(e) => setRate6(e.target.value)}  label='Rate 6' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add7, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn7} onChange={(e) => setAddOn7(e.target.value)}  label='Add On 7(Optional)' />
                        <TextField value={rate7} onChange={(e) => setRate7(e.target.value)}  label='Rate 7' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add8, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn8} onChange={(e) => setAddOn8(e.target.value)}  label='Add On 8(Optional)' />
                        <TextField value={rate8} onChange={(e) => setRate8(e.target.value)}  label='Rate 8' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add9, justifyContent: "center", marginBottom: 8 ,gap:15 }}>
                        <TextField value={addOn9} onChange={(e) => setAddOn9(e.target.value)}  label='Add On 9(Optional)' />
                        <TextField value={rate9} onChange={(e) => setRate9(e.target.value)}  label='Rate 9' />
                    </Grid>
                    <Grid item xs={12} style={{ display: add10, justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <TextField value={addOn10} onChange={(e) => setAddOn10(e.target.value)}  label='Add On 10(Optional)' />
                        <TextField value={rate10} onChange={(e) => setRate10(e.target.value)}  label='Rate 10' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8,gap:15  }}>
                        <Button sx={{
                            borderRadius: 10,
                            backgroundImage: "linear-gradient(to top left,#ffa502,#f3b419)",
                            display: "flex",
                            flexDirection: "row",
                            color:'#000',
                            justifyContent: "space-evenly",
                            paddingX: "30px",
                            textAlign: "center",
                            alignItems: "center",
                        }} variant='contained' onClick={() => handleAdd(count)}>Add More Add On</Button>
                    </Grid>



        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'left', fontSize: 15,fontWeight:400,color:'#2c3e50' }}>Sorting Order</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 10 }}>Higher order will be shown first.</Typography>
          <TextField onChange={(e) => setSorting(e.target.value)} value={Sorting} id="outlined-basic"variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'left', fontSize: 15,fontWeight:400,color:'#2c3e50'  }}> Stock</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 10 }}>If left 0 will not track.</Typography>
          <TextField onChange={(e) => setStock(e.target.value)} value={Stock} id="outlined-basic"  variant="outlined" />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

<Avatar
    alt="Remy Sharp"
    variant="rounded"
    src={Image.fileName}
    sx={{ width: matches?50:80, height: matches?50:80, m: 1 }}
/>
<Button

    color="primary"
    aria-label="upload picture"
    component="label"
    variant='contained'
    sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}}
>
    <input
        hidden
        accept="image/*"
        type="file"
        onChange={handleImage}
        
    />
    Upload Image<PhotoCamera />
</Button>


      </Grid>
        <Grid item xs={12}>
          <TextField onChange={(e) => setDescription(e.target.value)} value={Description} multiline minRows={4} id="outlined-basic" label="Descrption" variant="outlined" fullWidth />
        </Grid>

        {/* </React.Fragment>
      ))} */}

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Button  sx={{bgcolor:"#f3b419",color:"black","&:hover":{ bgcolor:"#f3b419",color:"black"}}} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
            Save item
          </Button>
        </Grid>
      </Grid>







    </Grid>
  )
}
