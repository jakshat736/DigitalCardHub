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

export default function AddMenu() {
  const location = useLocation()
  const navigate = useNavigate()
  const companyId = location.state.companyId
  const [Dish, setDish] = useState("")
  const [Price, setPrice] = useState("")
  const [Halfprice, setHalfprice] = useState("")

  const [rating, setRating] = useState("")
  const [Sorting, setSorting] = useState("")
  const [Stock, setStock] = useState("")
  const [Description, setDescription] = useState("")
  const [foodType, setFoodType] = useState("");
  // const [data, setData] = useState([]);
  const [Image, setImage] = useState({
    fileName: "",
    bytes: "",
  });

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
    AddMenudata.append("companyId", companyId);
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
    // alert(response.data.id)


  };

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);


  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Grid container spacing={2} sx={{ width: 400 }}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />

        </Grid>

        <Grid item xs={6} sx={{}}>
          <Button variant="outlined" sx={{ bgcolor: 'yellow', mt: 2 }}><WhatsAppIcon />Live support</Button>
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
            onClick={() => navigate(`/menudashboard/${companyId}`)}
            variant='contained'

          >
            Back
          </Button>

        </Grid>
        {/* {data.map((item) => (
        <React.Fragment key={item.id}> */}
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography sx={{ fontFamily: 'poppins', fontSize: 30, textAlign: 'left' }}>Update Menu Items</Typography>
        </Grid>

        <Divider sx={{ backgroundColor: 'black', height: '1px', width: '100%', }} />

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
        <Grid item xs={12}>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Food Type</FormLabel>
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
        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}>Sorting Order</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}>Higher order will be shown first.</Typography>
          <TextField onChange={(e) => setSorting(e.target.value)} value={Sorting} id="outlined-basic" label="Price" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}> Stock</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 12 }}>If left 0 will not track.</Typography>
          <TextField onChange={(e) => setStock(e.target.value)} value={Stock} id="outlined-basic" label="Price" variant="outlined" />
        </Grid>
        <Grid item xs={6} >
          <IconButton
            fullWidth
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleImage}
            />
            <PhotoCamera />
          </IconButton>

          <Avatar
            alt="Remy Sharp"
            variant="rounded"
            src={Image.fileName}
            sx={{ width: 56, height: 56 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField onChange={(e) => setDescription(e.target.value)} value={Description} multiline minRows={4} id="outlined-basic" label="Descrption" variant="outlined" fullWidth />
        </Grid>

        {/* </React.Fragment>
      ))} */}


        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

          <Button sx={{ bgcolor: 'yellow' }} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
            Update item
          </Button>

        </Grid>







      </Grid>







    </Grid>
  )
}
