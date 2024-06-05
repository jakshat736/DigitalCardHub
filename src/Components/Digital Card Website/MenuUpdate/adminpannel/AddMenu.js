import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  IconButton,
  handleImage,
  Avatar,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import img1 from "../assets/dch logooo.png";
import { PhotoCamera } from "@mui/icons-material";
import { getData, postData } from "../../../Services/NodeServices";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import addon from "../assets/addon.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Delete } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

export default function AddMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const menuId = location.state.menuId;
  const matches = useMediaQuery("(max-width:600px)");


  const [empty2, setEmpty2] = useState({ title2: "", rate2: "" });

  const [quantity, setQuantity] = useState(Array(1).fill(empty2));



  const [empty, setEmpty] = useState({ title: "", rate: "" });

  const [AddOn, setAddOn] = useState(Array(1).fill(empty));

  const [Dish, setDish] = useState("");
  const [Price, setPrice] = useState("");
  const [Halfprice, setHalfprice] = useState("");
  const [rating, setRating] = useState("");
  const [Sorting, setSorting] = useState("");
  const [Stock, setStock] = useState("");
  const [Description, setDescription] = useState("");
  const [foodType, setFoodType] = useState("");
  const [Image, setImage] = useState({
    fileName: "",
    bytes: "",
  });

  const [categoryId, setCategoryId] = React.useState("");
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



  
  const handleAddLinkQuantity = () => {
    setQuantity([...quantity, ...Array(1).fill(empty2)]);
  };

  const handleQuantityDelete = (index) => { 
    
    const updatedQuantity = [...quantity];

    updatedQuantity.splice(index, 1);

    setQuantity(updatedQuantity);
  };

  const handleQuantityChange = (index, value) => {
    const newData = [...quantity];
    console.log(newData[index])
    newData[index] = { ...newData[index], title: value };
    console.log(newData)
    setQuantity(newData);
  };

  const handleAddLink = () => {
    // const emptyLink = {
    //     title: '',
    //     link: '',
    // };
    setAddOn([...AddOn, ...Array(1).fill(empty)]);
  };

  const handleAddOnDelete = (index) => {
    const updatedAddOn = [...AddOn];

    updatedAddOn.splice(index, 1);

    setAddOn(updatedAddOn);
  };

  const handleAddOnChange = (index, value) => {
    const newData = [...AddOn];
    newData[index] = { ...newData[index], title: value };

    setAddOn(newData);
  };

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
    var AddMenudata = new FormData();
    if (
      Dish != "" &&
      Price != "" &&
      Halfprice != "" &&
      rating != "" &&
      Sorting != "" &&
      Stock != "" &&
      Description != "" &&
      foodType != "" &&
      Image.fileName != ""
    ) {
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
      console.log(response);

      if (response.status == true) {
        Swal.fire({
          text: "Saved Successfully",
          timer: 1000,
          icon: "success",
        });
      }
    } else {
      Swal.fire({
        text: "Fill All The Details",
        timer: 1000,
        icon: "warning",
      });
    }
  };

  // useEffect(() => {
  //   fetchData(); // Fetch data when the component mounts
  // }, []);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid container spacing={2} sx={{ width: 400 }}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "row" }}>
          <img src={img1} alt="Masala Grill" width={120} />
        </Grid>

        <Grid item xs={6} sx={{}}>
          <Button
            variant="outlined"
            sx={{
              bgcolor: "#f3b419",
              color: "black",
              "&:hover": { bgcolor: "#f3b419", color: "black" },
              mt: 2,
            }}
          >
            <WhatsAppIcon />
            Live support
          </Button>
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
              marginTop: "1%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => navigate(`/menudashboard/${menuId}`)}
            variant="contained"
            sx={{
              bgcolor: "#f3b419",
              color: "black",
              "&:hover": { bgcolor: "#f3b419", color: "black" },
            }}
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
              {/* {fillAllCategory()} */}
              <MenuItem value={8}>South India</MenuItem>
              <MenuItem value={9}>North India</MenuItem>
              <MenuItem value={10}>Chinese</MenuItem>
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

        <Grid item xs={6}>
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            value={Price}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => setHalfprice(e.target.value)}
            value={Halfprice}
            id="outlined-basic"
            label="Halfprice"
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
              gap: matches?2:0,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1%",
              flexDirection:matches?"column":"row"
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
              label="Safe recommended"
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
              value={item[index]?.title || ""}
              onChange={(event) => handleQuantityChange(index, event.target.value)}
              label="Quantity"
            />
            <TextField
              value={item[index]?.rate || ""}
              onChange={(event) => handleQuantityChange(index, event.target.value)}
              label="Rate"
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
              value={item[index]?.title || ""}
              onChange={(event) => handleAddOnChange(index, event.target.value)}
              label="Add On(Optional)"
            />
            <TextField
              value={item[index]?.rate || ""}
              onChange={(event) => handleAddOnChange(index, event.target.value)}
              label="Rate"
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
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            variant="rounded"
            src={Image.fileName}
            sx={{ width: matches ? 50 : 80, height: matches ? 50 : 80, m: 1 }}
          />
          <Button
            color="primary"
            aria-label="upload picture"
            component="label"
            variant="contained"
            sx={{
              bgcolor: "#f3b419",
              color: "black",
              "&:hover": { bgcolor: "#f3b419", color: "black" },
            }}
          >
            <input hidden accept="image/*" type="file" onChange={handleImage} />
            Upload Image
            <PhotoCamera />
          </Button>
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

        {/* </React.Fragment>
      ))} */}

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              bgcolor: "#f3b419",
              color: "black",
              "&:hover": { bgcolor: "#f3b419", color: "black" },
            }}
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            disableElevation
          >
            Save item
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
