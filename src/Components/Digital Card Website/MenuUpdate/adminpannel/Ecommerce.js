import {
    Grid,
    Divider,
    InputBase,
    IconButton,
    Button,
    Paper,
    useTheme,
    Typography,
    TextField,
    Tooltip,
  } from "@mui/material";
  import { ExpandLess, ExpandMore } from "@mui/icons-material";
  import { useState } from "react";
  import * as React from "react";
  import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
  import Menu from "@mui/material/Menu";
  import MenuItem from "@mui/material/MenuItem";
  import { Container, useMediaQuery } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { postData, serverURL } from "../../../Services/NodeServices";
  import Avatar from "@mui/material/Avatar";
  import Swal from "sweetalert2";
  import add from "../../Digital Card Assets/add.png";
  import DeleteIcon from "@mui/icons-material/Delete";
  import { Visibility, VisibilityOff } from "@mui/icons-material";
  export default function Ecommerce() {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery("(max-width:1300px)");
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));
    const [productData, setProductData] = useState(Array(4).fill(null));
    const [data, setData] = useState(false);
    const [loadingAnimation, setLoadingAnimation] = useState(true);
    const [temp, setTemp] = useState();
  
    const cardId = window.localStorage.getItem("CardId");
    const userId = window.localStorage.getItem("userId");
    const oldImg = [];
    const fetchCardDetail = async () => {
      setLoadingAnimation(true);
      var formData = new FormData();
      formData.append("customerId", userId);
      var result = await postData("carddetails/getcardDetails", formData, true);
      // console.log(result.data.products);
      if (result != false) {
        if (result.data.ecommerce.length == 0) {
          setProductData(Array(4).fill(null));
        } else {
          setData(true);
          let productData = [...result.data.ecommerce];
  
          if (productData.length < 4) {
            const emptyProduct = {
              productName: "",
              productimage: "",
            };
  
            const emptyProductCount = 4 - productData.length;
            productData = [
              ...productData,
              ...Array(emptyProductCount).fill(emptyProduct),
            ];
          }
  
          setProductData(productData);
          const newData = [...productData];
  
          productData.map((item, index) => {
            if (item != null) {
              oldImg[index] = { productimg: item.productimg };
              setTemp(oldImg);
              newData[index] = {
                ...newData[index],
                productimg: { url: `${serverURL}/images/${item.productimg}` },
              };
  
              setProductData(newData);
            }
          });
        }
      } else {
        navigate("/userdashboard");
      }
      if (result === false || result?.data != undefined) {
        setLoadingAnimation(false);
      }
    };
    React.useEffect(() => {
      fetchCardDetail();
    }, []);
  
    const handleProductNameChange = (index, value) => {
      const newData = [...productData];
      newData[index] = { ...newData[index], productname: value };
      setProductData(newData);
    };
  
    const handleProductDescriptionChange = (index, value) => {
      const newData = [...productData];
      newData[index] = { ...newData[index], productdescription: value };
      setProductData(newData);
    };
  
    const handleProductMrpChange = (index, value) => {
      const newData = [...productData];
      newData[index] = { ...newData[index], price: value };
      setProductData(newData);
    };
    const handleProductOfferChange = (index, value) => {
      const newData = [...productData];
      newData[index] = { ...newData[index], offerprice: value };
      setProductData(newData);
    };
  
    const handleProductImageChange = (index, event) => {
      const newData = [...productData];
      newData[index] = {
        ...newData[index],
        productimg: {
          url: URL.createObjectURL(event.target.files[0]),
          bytes: event.target.files[0],
        },
      };
      setProductData(newData);
    };
  
    const handleSubmit = async () => {
      setLoadingAnimation(true);
      var formData = new FormData();
      formData.append("_id", cardId);
      let productsName = [];
      productData.map((item, index) => {
        if (item != null) {
          productsName[index] = {
            index: index,
            productname: item.productname,
            productdescription: item.productdescription,
            price: item.price,
            offerprice: item.offerprice,
          };
          formData.append(`productImage${index}`, item.productimg.bytes);
        }
      });
      if (temp != undefined) {
        temp.map((item, index) => {
          productsName[index].productimg = item.productimg;
        });
      }
      formData.append("products", JSON.stringify(productsName));
      formData.append("oldimg", JSON.stringify(temp));
      var response = await postData(
        "carddetails/updateecommerce",
        formData,
        true
      );
      if (response.status == true) {
        navigate("/preview");
        setLoadingAnimation(false);
      }
    };
  
    const handleDelete = async (id) => {
      var formData = new FormData();
      formData.append("cardId", cardId);
      formData.append("productId", id);
      var response = await postData(
        "carddetails/deleteecommerceproduct",
        formData,
        true
      );
      if (response.status == true) {
        fetchCardDetail();
      }
    };
  
    const handleAdd = () => {
      const emptyProduct = {
        productName: "",
        productimage: "",
      };
  
      if (
        productData[0] != null &&
        productData[1] != null &&
        productData[2] != null &&
        productData[3] != null
      ) {
        setProductData([...productData, ...Array(1).fill(emptyProduct)]);
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Fill The Empty Columns",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };
  
    const handleShow = async (id, show) => {
      var formData = new FormData();
      formData.append("cardId", cardId);
      formData.append("productId", id);
      formData.append("show", show == "true" ? "false" : "true");
      var response = await postData("carddetails/showUpdate", formData, true);
      if (response.status == true) {
        fetchCardDetail();
        window.location.reload();
      }
    };
    return (
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            width: "82%",
            height: "auto",
            padding: 3,
            background: "#fff",
            color: "#000",
          }}
        >
          <Divider
            style={{
              backgroundColor: "#95a5a6",
              marginTop: "1%",
            }}
          />
  
          <Grid
            sx={{
              fontSize: matches ? "15px" : "22px",
              fontWeight: 500,
              lineHeight: "36px",
              marginTop: "3%",
            }}
          >
            add Products/services
          </Grid>
          <Divider
            style={{
              backgroundColor: "#000",
              marginTop: ".8%",
              width: matches ? "100%" : "30%",
            }}
          />
  
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: matches ? 2 : 9.8,
              marginTop: matches ? "8%" : "4%",
            }}
          >
            {productData.map((item, index) => {
              return (
                <Paper
                  key={index}
                  item
                  xs={mobile ? 12 : tablet ? 5 : 3}
                  md={2.5}
                  sx={{
                    width: matches ? "100%" : "30%",
                    border: "1px solid #000",
                    height: "auto",
                    padding: 2,
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    Product {index + 1}
                  </Grid>
                  <Grid sx={{ display: "flex", marginTop: "6%" }}>
                    <Avatar
                      fullWidth
                      alt="Remy Sharp"
                      variant="square"
                      src={
                        productData[index]?.productimg == null
                          ? ""
                          : productData[index]?.productimg.url
                      }
                      sx={{
                        width: matches ? 50 : "5vw",
                        height: matches ? 50 : "5.3vw",
                      }}
                    />
                    <Grid sx={{ marginLeft: "5%" }}>
                      <Grid sx={{ fontSize: "10px", fontWeight: 600 }}>
                        Upload product Image
                      </Grid>
                      <Grid>
                        <label htmlFor="icon-button-file1">
                          <input
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={(event) =>
                              handleProductImageChange(index, event)
                            }
                            type="file"
                          />
                          <Button
                            aria-label="upload picture"
                            component="span"
                            style={{
                              border: "1px solid #000",
                              borderColor: "#000",
                              marginTop: "3%",
                              height: "25px",
                              width: "120px",
                              lineHeight: "28px",
                              color: "#000",
                              fontSize: "12px",
                              fontWeight: 400,
                              textTransform: "none",
                              borderRadius: "4px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            Upload Image
                          </Button>
                        </label>
                      </Grid>
                      <Grid
                        sx={{
                          fontSize: "10px",
                          fontWeight: 400,
                          marginTop: "3%",
                          lineHeight: "13px",
                          textAlign: "center",
                        }}
                      >
                        ( 50px X 50px ) Image size
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#000",
                      marginTop: "3%",
                    }}
                  />
                  <Grid sx={{ marginTop: "3%" }}>
                    <Grid
                      sx={{
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "36px",
                      }}
                    >
                      Name
                    </Grid>
                    <Grid
                      sx={{
                        border: "1px solid #000",
                        borderRadius: "5px",
                        color: "#000",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        height: "30px",
                        width: "100%",
                        marginTop: "-1%",
                      }}
                    >
                      <InputBase
                        style={{ color: "#000" }}
                        sx={{ ml: 1, flex: 1, fontSize: "12px" }}
                        placeholder="Enter Your Product Name"
                        value={productData[index]?.productname || ""}
                        onChange={(event) =>
                          handleProductNameChange(index, event.target.value)
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid sx={{ marginTop: "2%" }}>
                    <Grid
                      sx={{
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "36px",
                      }}
                    >
                      description
                    </Grid>
                    <Grid
                      sx={{
                        border: "1px solid #000",
                        borderRadius: "5px",
                        color: "#000",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        height: "30px",
                        width: "100%",
                        marginTop: "-1%",
                      }}
                    >
                      <InputBase
                        style={{ color: "#000" }}
                        sx={{ ml: 1, flex: 1, fontSize: "12px" }}
                        placeholder="enter about your product"
                        value={productData[index]?.productdescription || ""}
                        onChange={(event) =>
                          handleProductDescriptionChange(
                            index,
                            event.target.value
                          )
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "2%",
                    }}
                  >
                    <Grid>
                      <Grid
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          lineHeight: "36px",
                          marginTop: ".5%",
                        }}
                      >
                        MRP
                      </Grid>
                      <Grid
                        sx={{
                          border: "1px solid #000",
                          borderRadius: "5px",
                          color: "#000",
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          height: "30px",
                          width: "90%",
                          marginTop: "-1%",
                        }}
                      >
                        <InputBase
                          style={{ color: "#000" }}
                          sx={{ ml: 1, flex: 1, fontSize: "10px" }}
                          placeholder="Enter MRP"
                          value={productData[index]?.price || ""}
                          onChange={(event) =>
                            handleProductMrpChange(index, event.target.value)
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid>
                      <Grid
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          lineHeight: "36px",
                          marginTop: ".5%",
                        }}
                      >
                        Offer Price
                      </Grid>
                      <Grid
                        sx={{
                          border: "1px solid #000",
                          borderRadius: "5px",
                          color: "#fff",
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          height: "30px",
                          width: "90%",
                          marginTop: "-1%",
                        }}
                      >
                        <InputBase
                          style={{ color: "#000" }}
                          sx={{ ml: 1, flex: 1, fontSize: "10px" }}
                          placeholder="Enter Offer Price"
                          value={productData[index]?.offerprice || ""}
                          onChange={(event) =>
                            handleProductOfferChange(index, event.target.value)
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5%",
                      gap: 1,
                    }}
                  >
                    {item == null ? (
                      <></>
                    ) : (
                      <Tooltip
                        title={
                          item.show == "true"
                            ? "Click For show as Gallery"
                            : " Click For show as Buy"
                        }
                        arrow
                      >
                        <Button
                          onClick={() => handleShow(item._id, item.show)}
                          style={{
                            border: "1px solid #fff",
                            borderColor: "#fff",
                            height: "30px",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: 600,
                            textTransform: "none",
                            borderRadius: "6px",
                            display: "flex",
                            background: "#485AFF",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                          }}
                          fullWidth
                        >
                          {item.show == "true" ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}{" "}
                          View
                        </Button>
                      </Tooltip>
                    )}
                    {item == null ? (
                      <></>
                    ) : (
                      <Button
                        onClick={() => handleDelete(item._id)}
                        style={{
                          border: "1px solid #fff",
                          borderColor: "#fff",
                          height: "30px",
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: 600,
                          background: "#FF2626",
                          textTransform: "none",
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 2,
                        }}
                        fullWidth
                      >
                        <DeleteIcon fontSize="small" /> Remove
                      </Button>
                    )}
                  </Grid>
                </Paper>
              );
            })}
  
          </Grid>
  
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid sx={{ width: "50%", marginTop: "5%" }}>
              <Button
                onClick={() => handleAdd()}
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background: "#0D0D0D",
                  height: "38px",
                  color: "#fff",
                  fontSize: matches ? "9px" : "16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "22px",
                  letterSpacing: "-2.2%",
                }}
              >
                Add more Products
                <img
                  src={add}
                  width={matches ? 15 : 18}
                  style={{ marginLeft: "2%" }}
                ></img>
              </Button>
            </Grid>
          </Grid>
  
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3%",
              marginBottom: "5%",
            }}
          >
            <Button
              onClick={() => handleSubmit()}
              style={{
                border: "1px solid #289B00",
                borderColor: "#289B00",
                background: "#289B00",
                width: "50%",
                height: matches ? "32px" : "40px",
                lineHeight: "36px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "-moz-grab",
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  