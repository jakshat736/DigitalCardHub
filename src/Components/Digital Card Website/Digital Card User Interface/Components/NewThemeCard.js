import { Grid,Divider,Button } from "@mui/material";
import NewHeader from "./NewHeader";
import card from "../../Digital Card Assets/cardimage1.png"
import sub from "../../Digital Card Assets/sub.png"
import add from "../../Digital Card Assets/add.png"
import cardphn from "../../Digital Card Assets/cardphn.png"
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { postData, serverURL } from "../../../Services/NodeServices";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
export default function NewThemeCard()
{
  var navigate=useNavigate()
  const handleNagivate=()=>{
    navigate('/newcheckout')
}
const handleAllProduct2=()=>{
  navigate('/newallproduct2')
}
const [about, setAbout] = useState(false);
const [about2, setAbout2] = useState(false);

const handleAbout = () => {
  setAbout(!about);
};

const handleAbout2 = () => {
  setAbout2(!about2);
};

const matches = useMediaQuery("(max-width:1000px)");
const matchesA = useMediaQuery("(max-width:600px)");

const [cartProducts, setCartProducts] = useState([]);

const [subTotal, setSubTotal] = useState(0);
const [discountPrice, setDiscountPrice] = useState(0);
const [products, setProducts] = useState([]);
const User =
  window?.localStorage?.getItem("UserNumber") == null
    ? window?.localStorage?.getItem("UserMail")
    : window?.localStorage?.getItem("UserNumber");
const func = async (User) => {
  var formdata = new FormData();
  formdata?.append("mobile", User);
  var response = await postData("cart/getAllProducts", formdata, true);
  if (response) {
    setCartProducts(response?.products);
    console?.log(response);
  }
};

React?.useEffect(() => {
  func(User);
}, []);

const fetchProductById = async (item) => {
  const formData = new FormData();
  formData?.append("_id", item);
  const response = await postData("products/getproductbyid", formData, true);
  return response?.data;
};
React.useEffect(() => {
  if (cartProducts?.length > 0) {
    const fetchProducts = async () => {
      const productData = await Promise?.all(
        cartProducts?.map((item) => fetchProductById(item?.productId))
      );

      var price = 0;
      var discount = 0;
      cartProducts?.forEach((cartItem) => {
        const product = productData?.find(
          (item) => item?._id === cartItem?.productId
        );

        if (product) {
          if (product?.customizable) {
            if (cartItem?.count > 1 && cartItem?.count < 5) {
              product.offerprice = 499;
            }
            if (cartItem?.count > 4 && cartItem?.count < 10) {
              product.offerprice = 449;
            }
            if (cartItem?.count > 9) {
              product.offerprice = 333;
            }
          }
          const subTotal = product?.price * cartItem?.count;
          const discountPrice =
            (product?.price - product?.offerprice) * cartItem?.count;
          price += subTotal;
          discount += discountPrice;
        }
      });
      console?.log(productData);
      setProducts(productData);
      setSubTotal(price);
      setDiscountPrice(discount);
    };
    fetchProducts();
  }
}, [cartProducts]);
useEffect(() => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []);

const handleDelete = async (id) => {
  const formData = new FormData();
  formData?.append("mobile", User);
  formData?.append("productId", id);
  const response = await postData("cart/remove", formData, true);
  window?.location?.reload();
};

const handleAdd = async (item) => {
  var count;
  cartProducts?.map((items) => {
    if (item?._id == items?.productId) {
      count = items?.count + 1;
    }
  });

  const formData = new FormData();
  formData?.append("mobile", User);
  formData?.append("productId", item?._id);
  formData?.append("count", count);
  const response = await postData("cart/update-count", formData, true);
  window?.location?.reload();
};
const handleRemove = async (item) => {
  var count;
  cartProducts?.map((items) => {
    if (item?._id == items?.productId) {
      count = items?.count - 1;
    }
  });

  if (count >= 1) {
    const formData = new FormData();
    formData?.append("mobile", User);
    formData?.append("productId", item?._id);
    formData?.append("count", count);
    const response = await postData("cart/update-count", formData, true);
    window?.location?.reload();
  } else {
    handleDelete(item?._id);
  }
};



const handleProduct = (item) => {
  return products?.map((item) => {
    return (
      <Grid sx={{display:'flex',width:'100%',gap:2,marginTop:'5%',height:'auto'}}>
                <Grid sx={{width:matchesA?'36%':'18.5%'}}>
                    <img src={`${serverURL}/images/${item?.images?.[0]}`} style={{width:'100%'}}></img>
                </Grid>
                <Grid sx={{width:'85.8%'}}>
                  <Grid sx={{fontSize:matchesA?'16px':'22px',fontWeight:600,lineHeight:matchesA?'23px':'30px',letterSpacing:'-1.4%'}}>
                  {item?.productName}
                  </Grid>
                  <Grid sx={{fontSize:matchesA?'10px':'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:'2%'}}>
                  Size: 80mm x 90mm
                  </Grid>
                  <Grid sx={{fontSize:matchesA?'10px':'14px',fontWeight:400,lineHeight:'20px',letterSpacing:'-1.4%',marginTop:matchesA?'0%':'2%'}}>
                  Quantity: {cartProducts?.map((items) => {
                        if (item?._id == items?.productId) {
                          return items?.count;
                        }
                      })}
                  </Grid>
                  <Grid sx={{display:'flex',flexDirection:'row',marginTop:matchesA?'0%':'2%'}}>
                        <Grid sx={{fontSize:matchesA?'16px':'22px',fontWeight:700,lineHeight:'26px',color:'#19B300'}}>₹&nbsp;{item?.offerprice}{" "}</Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'16px',fontWeight:500,lineHeight:'26px',color:'#A39C00',marginLeft:'1%'}}><s>₹&nbsp;{item?.price}</s></Grid>
                        <Grid  onClick={() => {
                      handleDelete(item?._id);
                    }} sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'26px',textDecoration:'underline',marginLeft:'auto',cursor:'pointer'}}>Remove</Grid>
                </Grid>
                </Grid>
              </Grid>
    );
  });
};








    return(<Grid sx={{width:'100%',backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
            <NewHeader/>
        </Grid>
        <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'4%',color:'#FFFFFF'}}>
           <Grid sx={{width:'82%',height:'auto',display:'flex',flexDirection:'column'}}>
            <Grid sx={{width:'100%',display:'flex',flexDirection:matches?'column':'row'}}>
            <Grid sx={{width:matches?'100%':'60%',height:'auto'}}>
              <Grid sx={{fontSize:matchesA?'26px':'36px',fontWeight:600,lineHeight:'44px',letterSpacing:'-1.4%'}}>
               Your cart
              </Grid>
              <Grid sx={{fontSize:matchesA?'12px':'16px',fontWeight:500,lineHeight:'26px',letterSpacing:'-1.4%',marginTop:'2%'}}>
              Not ready to checkout? Continue Shopping
              </Grid>
              
             <Grid sx={{marginTop:'-1.5%'}}>
               {handleProduct()}
              </Grid> 
              <Grid>
              <Divider
                style={{
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid>
            <Button 
            onClick={handleAllProduct2}
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    width:'100%',
                    height:matchesA?35:'2.7vw',
                    color: "#fff",
                    fontSize: matchesA?'12px':".8vw",
                    marginTop:'4%',
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                 Add more Items to cart +
                </Button>
            </Grid>
            
            <Grid sx={{marginTop:'10%'}}>
                <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%'}}>
                Order Information
                </Grid>
                <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid sx={{display:'flex',alignItems:'center'}}>
            <Grid sx={{fontSize:'16px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%',marginTop:'3%'}}>
            Return Policy
            </Grid>
            <Grid onClick={handleAbout} sx={{marginLeft:'auto',cursor:'pointer'}}>
            <img src={sub} width={15}style={{marginTop:matchesA?'60%':'180%'}}></img>
            </Grid>
            </Grid>
           {about?<></>:<Grid sx={{fontSize:matchesA?'10px':'16px',fontWeight:400,lineHeight:matchesA?'18px':'26px',marginTop:matchesA?'1%':'3%'}}>
            This is our example return policy which is everything you need to know about our returns.
            </Grid>}
            <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid sx={{display:'flex',alignItems:'center'}}>
            <Grid sx={{fontSize:'16px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%',marginTop:'3%'}}>
            Shipping Options
            </Grid>
            <Grid onClick={handleAbout2} sx={{marginLeft:'auto',cursor:'pointer'}}>
            <img src={sub} width={15}style={{marginTop:matchesA?'60%':'180%'}}></img>
            </Grid>
            </Grid>
            {about2?<></>:<Grid sx={{fontSize:matchesA?'10px':'16px',fontWeight:400,lineHeight:matchesA?'18px':'26px',marginTop:matchesA?'1%':'3%'}}>
            This is our example return policy which is everything you need to know which is everything about our returns.
            </Grid>}
            <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>
            <Grid sx={{display:'flex',alignItems:'center'}}>
            <Grid sx={{fontSize:'16px',fontWeight:600,lineHeight:'26px',letterSpacing:'-2%',marginTop:'3%'}}>
            Shipping Options
            </Grid>
            <Grid sx={{marginLeft:'auto'}}>
            <img src={add} width={15}style={{marginTop:'180%'}} ></img>
            </Grid>
            </Grid>
            <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}
              />
            </Grid>

            </Grid>
            </Grid>

     <Grid sx={{width:matches?'100%':'40%',display:'flex'}}>
        <Grid sx={{display:'flex',width:matches?'100%':'80%',marginLeft:'auto',flexDirection:'column',marginTop:'5%'}}>
      <Grid sx={{fontSize:'22px',fontWeight:600,lineHeight:'44px',letterSpacing:'-2.5%'}}>
      Order Summary
      </Grid>
      <Grid sx={{marginTop:'3%'}}>
      <input type="text" style={{height:40,borderColor:'#ffff',border:'1px solid #ffff',borderRadius:'10px',width:'100%',background:'transparent'}} placeholder="Enter coupon code here"></input>
      </Grid>
      <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Subtotal
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       ₹{subTotal}
       </Grid>
      </Grid>
      <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Discount
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       -₹{discountPrice}
       </Grid>
      </Grid>
      <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
      Delivery Charges
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       FREE
       </Grid>
      </Grid>
      <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Estimated Tax
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       ₹{((subTotal - discountPrice) * 18) / 100}{" "}
       </Grid>
      </Grid>
      <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Shipping
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
       Calculated at the next step
       </Grid>

      </Grid>
      <Grid>
              <Divider
                style={{
                    height:'1px',
                  backgroundColor: "#bdc3c7",
                  width: '100%',
                  marginTop: "3%",
                }}/>
                
            </Grid>
            <Grid sx={{display:'flex',marginTop:'3%'}}>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%'}}>
       Total
       </Grid>
       <Grid sx={{fontSize:'14px',fontWeight:400,letterSpacing:'-2.5%',marginLeft:'auto'}}>
  
       ₹{subTotal -
        discountPrice +
        ((subTotal - discountPrice) * 18) / 100}{" "}
       </Grid>

      </Grid>



       <Grid>
            <Button
           onClick={() =>
                  navigate("/newcheckout", {
                    state: {
                      product:products,
                      products: cartProducts,
                      discount: discountPrice,
                      subTotal: subTotal,
                      totalPrice:
                        subTotal -
                        discountPrice +
                        ((subTotal - discountPrice) * 18) / 100,
                    },
                  })
                }
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    width:'100%',
                    height:matchesA?38:'2.7vw',
                    color: "#fff",
                    fontSize:matchesA?'14px':".8vw",
                    marginTop:'5%',
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                Continue to checkout
                </Button>
            </Grid> 

            <Grid sx={{marginTop:'5%'}}>
              <img src={cardphn} width={matchesA?300:450}></img>
            </Grid>
       </Grid>
      </Grid>
            </Grid>
           </Grid>
        </Grid>
    </Grid>)
}