import { Delete } from "@mui/icons-material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Divider, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useEffect, useState } from 'react';
import addon from "../assets/addon.png";
import { useLocation, useNavigate } from 'react-router-dom';
import { postData } from "../../../Services/NodeServices";
import img1 from "../assets/dch logooo.png";
import Checkbox from "@mui/material/Checkbox";
import Swal from "sweetalert2";

export default function EditMenu() {
  const location = useLocation()
  const navigate = useNavigate()
  const matches = useMediaQuery("(max-width:600px)");
  const data = JSON.parse(location.state.data)
  const menuId = location.state.menuId
  const [Dish, setDish] = useState(data.dish)
  const [empty, setEmpty] = useState({ title: "", rate: "" });
  const [quantity, setQuantity] = useState(data?.quantities);
  const [AddOn, setAddOn] = useState(data?.addOns);
  const [Price, setPrice] = useState(data.price)
  const [Halfprice, setHalfprice] = useState(data.Halfprice)
  const [rating, setRating] = useState(data.rating)
  const [Sorting, setSorting] = useState(data.sorting)
  const [Stock, setStock] = useState(data.stock)
  const [Description, setDescription] = useState(data.description)
  const [foodType, setFoodType] = useState(data.foodtype);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = React.useState(data?.categoryId);
  //Akshat bhaiya look this comment code one time this helps you

  const fetchAllCategory = async () => {
    var formData = new FormData();
    formData.append('menuId', menuId);
    var response = await postData('menucategories/display_all_category', formData);
    setCategory(response.data);
  };

  useEffect(function () {
    fetchAllCategory();
  }, []);

  const fillAllCategory = () => {
    return category?.map((item) => {
      return <MenuItem value={item._id}>{item.categoryName}</MenuItem>;
    });
  };

  const handleAddLinkQuantity = () => {
    setQuantity([...quantity, ...Array(1).fill(empty)]);
  };

  const handleQuantityDelete = (index) => {

    const updatedQuantity = [...quantity];

    updatedQuantity.splice(index, 1);

    setQuantity(updatedQuantity);
  };

  const handleQuantityTitleChange = (index, event) => {
    const newData = [...quantity];
    newData[index] = { ...newData[index], title: event.target.value };
    setQuantity(newData);
  };

  const handleQuantityRateChange = (index, event) => {
    const newData = [...quantity];
    newData[index] = { ...newData[index], rate: event.target.value };
    setQuantity(newData);
  };

  const handleAddLink = () => {
    setAddOn([...AddOn, ...Array(1).fill(empty)]);
  };

  const handleAddOnDelete = (index) => {
    const updatedAddOn = [...AddOn];

    updatedAddOn.splice(index, 1);

    setAddOn(updatedAddOn);
  };

  const handleAddOnTitleChange = (index, value) => {
    const newData = [...AddOn];
    newData[index] = { ...newData[index], title: value };
    setAddOn(newData);
  };
  const handleAddOnRateChange = (index, value) => {
    const newData = [...AddOn];
    newData[index] = { ...newData[index], rate: value };

    setAddOn(newData);
  };


  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };





  const handleSubmit = async () => {
    const selectedCategory = category?.filter((item) => item?._id === categoryId)[0]
    var formdata = new FormData;
    formdata.append("_id", data._id);
    formdata.append("categoryId", categoryId);
    formdata.append("categoryName", selectedCategory?.categoryName);
    formdata.append("dish", Dish);
    formdata.append("rating", rating);
    formdata.append("sorting", Sorting);
    formdata.append("stock", Stock);
    formdata.append("description", Description);
    formdata.append("foodtype", foodType);
    formdata.append("quantities", JSON.stringify(quantity))
    formdata.append("addOns", JSON.stringify(AddOn))
    const response = await postData("index/editmenu", formdata, true)
    if(response.status){
      Swal.fire({
        text: "Edit Successfully",
        timer: 1000,
        icon: "success",
      });
      navigate('/Allmenu', { state: { menuId: menuId } })
    }else{
      Swal.fire({
        text: "Fail to Edit",
        timer: 1000,
        icon: "error",
      });
    }

  };

  return (
    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Grid container spacing={2} sx={{ width: 400 }}>
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
          <img src={img1} alt="Masala Grill" width={120} />

        </Grid>

        <Grid item xs={6} sx={{}}>
          <Button variant="outlined" sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" }, mt: 2 }}><WhatsAppIcon />Live support</Button>
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
            onClick={() => navigate('/Allmenu', { state: { menuId: menuId } })}
            variant='contained'
            sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }}
          >
            Back
          </Button>

        </Grid>
        {/* {data.map((item) => (
      <React.Fragment key={item.id}> */}
        <Grid
          item
          xs={12}
          sx={{
            mt: matches ? 0 : 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontFamily: "poppins", fontSize: 30, textAlign: "left" }}
          >
            Update Menu Items
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              backgroundColor: "black",
              width: "100%",
              marginTop: matches ? "0" : "1%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={categoryId}
              label="Category"
              onChange={(event) => setCategoryId(event.target.value)}
            >
              {fillAllCategory()}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            onChange={(e) => setDish(e.target.value)}
            value={Dish}
            id="outlined-basic"
            fullWidth
            label="DishName"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            id="outlined-basic"
            label="Ratings"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                color: "#f3b419",
                fontSize: 16,
              }}
            >
              Food Type
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={foodType}
              onChange={handleFoodTypeChange}
            >
              <FormControlLabel value="veg" control={<Radio />} label="veg" />
              <FormControlLabel
                value="nonveg"
                control={<Radio />}
                label="Non-veg"
              />
              <FormControlLabel
                value="Vegan"
                control={<Radio />}
                label="Vegan"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2%",
            flexDirection: "column",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: 600,
              color: "#f3b419",
              fontSize: 16,
            }}
          >
            As your Choice
          </Grid>

          <Grid
            sx={{
              display: "flex",
              gap: matches ? 2 : 0,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1%",
              flexDirection: matches ? "column" : "row"
            }}
          >
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Best Seller"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Chef recommended"
              labelPlacement="end"
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            sx={{
              fontSize: { xs: 14, md: 20 },
              fontWeight: 600,
              color: "#f3b419",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 0.5,
            }}
          >
            <img src={addon} width={26}></img>Quantity
          </Grid>
        </Grid>
        {quantity?.map((item, index) => (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 8,
              gap: 15,
            }}
          >
            <TextField
              value={item?.title || ""}
              onChange={(event) => handleQuantityTitleChange(index, event)}
              label="Quantity"
            />
            <TextField
              value={item?.rate || ""}
              onChange={(event) => handleQuantityRateChange(index, event)}
              label="Rate"
              type='number'
            />
            <IconButton onClick={() => handleQuantityDelete(index)}>
              <Delete />
            </IconButton>
          </Grid>
        ))}

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 8,
            gap: 15,
          }}
        >
          <Button
            sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#ffa502,#f3b419)",
              display: "flex",
              flexDirection: "row",
              color: "#000",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }}
            variant="contained"
            onClick={() => handleAddLinkQuantity()}
          >
            Add More Quantity
          </Button>
        </Grid>






        <Grid item xs={12}>
          <Grid
            sx={{
              fontSize: { xs: 14, md: 20 },
              fontWeight: 600,
              color: "#f3b419",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 0.5,
            }}
          >
            <img src={addon} width={26}></img>AddOn
          </Grid>
        </Grid>
        {AddOn.map((item, index) => (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 8,
              gap: 15,
            }}
          >
            <TextField
              value={item?.title || ""}
              onChange={(event) => handleAddOnTitleChange(index, event.target.value)}
              label="Add On(Optional)"
            />
            <TextField
              value={item?.rate || ""}
              onChange={(event) => handleAddOnRateChange(index, event.target.value)}
              label="Rate"
              number
            />
            <IconButton onClick={() => handleAddOnDelete(index)}>
              <Delete />
            </IconButton>
          </Grid>
        ))}

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 8,
            gap: 15,
          }}
        >
          <Button
            sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#ffa502,#f3b419)",
              display: "flex",
              flexDirection: "row",
              color: "#000",
              justifyContent: "space-evenly",
              paddingX: "30px",
              textAlign: "center",
              alignItems: "center",
            }}
            variant="contained"
            onClick={() => handleAddLink()}
          >
            Add More Add On
          </Button>
        </Grid>




        <Grid item xs={6}>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: 15,
              fontWeight: 400,
              color: "#2c3e50",
            }}
          >
            Sorting Order
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: 10 }}>
            Higher order will be shown first.
          </Typography>
          <TextField
            onChange={(e) => setSorting(e.target.value)}
            value={Sorting}
            id="outlined-basic"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: 15,
              fontWeight: 400,
              color: "#2c3e50",
            }}
          >
            {" "}
            Stock
          </Typography>
          <Typography sx={{ textAlign: "left", fontSize: 10 }}>
            If left 0 will not track.
          </Typography>
          <TextField
            onChange={(e) => setStock(e.target.value)}
            value={Stock}
            id="outlined-basic"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            value={Description}
            multiline
            minRows={4}
            id="outlined-basic"
            label="Descrption"
            variant="outlined"
            fullWidth
          />
        </Grid>


        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

          <Button sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }} onClick={handleSubmit} fullWidth variant="contained" disableElevation>
            Update item
          </Button>

        </Grid>







      </Grid>







    </Grid>
  )
}
