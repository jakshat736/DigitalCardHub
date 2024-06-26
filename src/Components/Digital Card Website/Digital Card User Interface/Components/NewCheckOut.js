import { Grid, Divider,Button } from "@mui/material";
import NewHeader from "./NewHeader";
import line from "../../Digital Card Assets/lineforcheckout.png";
import card from "../../Digital Card Assets/cardimage1.png";
import InputBase from "@mui/material/InputBase";
import { useLocation } from 'react-router';
import IconButton from "@mui/material/IconButton";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {  serverURL } from "../../../Services/NodeServices";
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { useTheme } from "@mui/material/styles";
import { postData } from '../../../Services/NodeServices';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function NewCheckOut() {
  const matches = useMediaQuery("(max-width:1000px)");
  const matchesA = useMediaQuery("(max-width:600px)");

  var navigate=useNavigate()
  const handleNagivate=()=>{
    navigate('/newcheckout3')
}





const location = useLocation();

var p=location.state.product
  console.log('Product : ',p)
const User=window.localStorage.getItem("UserNumber")==null?'': window.localStorage.getItem("UserNumber")
// const UserEmail=window.localStorage.getItem("UserEmail")==null?'': window.localStorage.getItem("UserEmail")
const theme = useTheme();
const matches1 = useMediaQuery(theme.breakpoints.down(480));
const [name,setName]=useState('')
const [UserEmail,setUserEmail]=useState('')
const [address,setAddress]=useState('')
const [pincode,setPincode]=useState('')
const [city,setCity]=useState('')
const [district,setDistrict]=useState('')
const [state,setState]=useState('')
const [number,setNumber]=useState(User)
const [cartProducts, setCartProducts] = useState([])

const func = async (User) => {
  var formdata = new FormData();
  formdata.append("mobile", User);
  var response = await postData("cart/getAllProducts", formdata, true);
  if(response){
  setCartProducts(response.products)
  console.log(response.products)
  }

}


React.useEffect(() => {
  func(User)
}, [])

function generateRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  // Function to generate a random 8-character alphanumeric string
  function generateRandomString() {
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += generateRandomCharacter();
    }
    return randomString;
  }
  
  // Generate a random string
 


  const handlePay= async(price) => {
    if(name!="" && address!="" && pincode!="")
    {
        const newDate = new Date();
             const date=format(newDate, 'dd-MM-yyyy')
             
        var formData=new FormData
        formData.append("name",name)
        formData.append("email",UserEmail)
        formData.append("phone",number)
        formData.append("date",date)
        formData.append("fullAddress",address+" "+pincode)
      
        formData.append("products",JSON.stringify(cartProducts))
        const result=await postData('orders/addOrderDetails',formData,true)
        console.log("hdj",result.data._id)
        
    var amount=price*100
    let randomString = generateRandomString();

    const requestBody ={
        "merchantId": "DIGITALCARDONLINE",
        "merchantTransactionId": `${result.data._id}`,
        "merchantUserId": "MUID123",
        "amount": `${amount}`,
        "redirectUrl": `https://digitalcardhub.in/#/orderComplete/${result.data._id}`,
        "redirectMode": "POST",
        "callbackUrl": `https://digitalcardhub.in/#/orderComplete/${result.data._id}`,
        "mobileNumber": "8889430333",
        "paymentInstrument": {
          "type": "PAY_PAGE"
        }
      }
   const response=await postData('api/proxy',requestBody)
   console.log("bodyyyyyy",response)
   
   window.open(`${response.data.instrumentResponse.redirectInfo.url}`)
   }else{
    Swal.fire({
        title:"First fill all the fields"
    })
   }
  
  };
const item = {
    id: "43287ghy32te7234",
    productname: "Silver Diamond Necklace",
    price: "84000",
    offerprice: "72000",
    picture: "diamondnecklace1.png",
    quantity: 1
}



const handleProduct = (item) => {
  return p?.map((item) => {
    console.log("errorss",location.state.products)
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
                        <Grid sx={{fontSize:matchesA?'16px':'22px',fontWeight:700,lineHeight:'26px',color:'#19B300'}}>₹{item?.offerprice}</Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'16px',fontWeight:500,lineHeight:'26px',color:'#A39C00',marginLeft:'1%'}}><s>₹&nbsp;{item?.price}</s></Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'26px',textDecoration:'underline',marginLeft:'auto',cursor:'pointer'}}>Remove</Grid>
                </Grid>
                </Grid>
              </Grid>
    );
  });
};






  return (
    <Grid
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
        fontFamily: "Montserrat",
      }}
    >
      <Grid>
        <NewHeader />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "auto",
          marginTop: "4%",
          color: "#FFFFFF",
          flexDirection:'column'
        }}
      >
        <Grid sx={{ width: "82%", height: 'auto' }}>

          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Grid
              sx={{
                fontSize:matchesA?'18px':"36px",
                fontWeight: 600,
                lineHeight: "44px",
                letterSpacing: "-1.4%",
              }}
            >
              Checkout
            </Grid>
            <Grid
              sx={{
                display: "flex",
                gap:matchesA?1: 2,
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              <Grid
                sx={{
                  fontSize:matchesA?'10px':"17px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Address
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <img src={line} style={{ width:matchesA?'12px': "100%", height: "1px" }}></img>
              </Grid>
              <Grid
                sx={{
                  fontSize:matchesA?'10px': "17px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Shipping
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <img src={line} style={{ width:matchesA?'12px': "100%", height: "1px" }}></img>
              </Grid>
              <Grid
                sx={{
                  fontSize: matchesA?'10px':"17px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                  cursor:'pointer'
                }}
              >
                Payment
              </Grid>
            </Grid>
          </Grid>
          
          <Grid>
            <Divider
              style={{
                height:matchesA?'1px': "2px",
                backgroundColor: "#bdc3c7",
                width: "100%",
                marginTop: "2%",
              }}
            />
          </Grid>
          <Grid sx={{ display: "flex", width: "100%",flexDirection:matches?'column':'row',justifyContent:matches?'center':"normal",alignItems:matches?'center':"normal" }}>
            <Grid sx={{ width: matchesA?'100%':"55%", marginTop: "2%" }}>
              <Grid
                sx={{
                  fontSize:matchesA?'16px': "22px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  letterSpacing: "-.6%",
                }}
              >
                Your cart
              </Grid>
              <Grid sx={{ marginTop: "2%" }}>
                <Grid
                  sx={{
                    display: "flex",
                    width: "100%",
                    gap: 2,
                    marginTop: "2%",
                    height: "auto",flexDirection:'column'
                  }}
                >
                 
{handleProduct()}

                </Grid>
              </Grid>
              <Divider
                style={{
                  backgroundColor: "#bdc3c7",
                  width: "100%",
                  marginTop: "3%",
                }}
              />

              <Grid
                sx={{
                  marginTop: "3%",
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  color: "#fff",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <InputBase
                  style={{ color: "#fff" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter coupon code here"
                  inputProps={{ "aria-label": "Enter coupon code here" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <div
                    style={{
                      border: "1px solid #fff",
                      background: "#fff",
                      color: "#000",
                      fontSize:matchesA?'12px': "15px",
                      fontWeight: 600,
                      width:matchesA?80: 110,
                      borderRadius: "5px",
                      height: matchesA?27:28,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Apply
                  </div>
                </IconButton>
              </Grid>

              <Grid sx={{ display: "flex", marginTop: "5%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Subtotal
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                 ₹{location.state.subTotal}
                </Grid>
              </Grid>

              <Grid sx={{ display: "flex", marginTop: "2%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Discount
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                   -₹{location.state.discount}
                </Grid>
              </Grid>


              <Grid sx={{ display: "flex", marginTop: "2%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Delivery Charge
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                 FREE
                </Grid>
              </Grid>


              <Grid sx={{ display: "flex", marginTop: "2%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Estimated Tax
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                 ₹{Math.ceil(((location.state.subTotal - location.state.discount)*18)/100)}{" "}
                </Grid>
              </Grid>
              <Grid sx={{ display: "flex", marginTop: "2%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Shipping
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                  Calculated at the next step
                </Grid>
              </Grid>
              <Grid>
                <Divider
                  style={{
                    height: "1px",
                    backgroundColor: "#bdc3c7",
                    width: "100%",
                    marginTop: "3%",
                  }}
                />
              </Grid>
              <Grid sx={{ display: "flex", marginTop: "3%" }}>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                  }}
                >
                  Total
                </Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "-2.5%",
                    marginLeft: "auto",
                  }}
                >
                 ₹{Math.ceil((location.state.subTotal - location.state.discount)+(((location.state.subTotal - location.state.discount)*18)/100))}.00
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ width:matchesA?'100%': "45%", marginTop: "2.5%", display: "flex",marginTop:matches?'5%':'3%' }}>
              <Grid sx={{ width:matchesA?'100%': "90%", marginLeft: "auto" }}>
                <Grid
                  sx={{
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    letterSpacing: "-.6%",
                  }}
                >
                  Shipping Information
                </Grid>
                <Grid sx={{ marginTop: "2%", gap: 2, display: "flex" }}>
                  <input
                     value={name} onChange={(e)=>setName(e.target.value)}
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="First Name"
                  ></input>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="last Name"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "1%", gap: 2, display: "flex" }}>
                  <input
                   value={address} onChange={(e)=>setAddress(e.target.value)}
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="Address"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "1%", gap: 2, display: "flex",color:'#fff' }}>
                  <input
                    value={number} onChange={(e)=>setNumber(e.target.value)}
                    type="text"
                    style={{
                      height: 40,
                      color:'#fff',
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="Mobile Number"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "1%", gap: 2, display: "flex" }}>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="City"
                  ></input>
                </Grid>
                <Grid sx={{ marginTop: "2%", gap: 2, display: "flex" }}>
                  <Grid>
                    <select
                      style={{
                        height: 40,
                        border: "1px solid #bdc3c7",
                        fontSize: "14px",
                        display: "flex",
                        borderRadius: 8,
                        padding: 0.6,
                        background:'transparent',
                        width:matchesA?'20vw':'10vw',
                        color:'#bdc3c7'
                      }}>
                      <option value="Country">County</option>
                      <option value="India">India</option>
                    </select>
                  </Grid>
                  <Grid>
                    <select
                      style={{
                        height: 40,
                        border: "1px solid #bdc3c7",
                        fontSize: "14px",
                        display: "flex",
                        borderRadius: 8,
                        padding: 0.6,
                         background:'transparent',
                         width:matchesA?'20vw':'10vw',
                           color:'#bdc3c7'
                      }}
                    >
                      <option value="City">City</option>
                      <option value="City">Gwalior</option>
                    </select>
                  </Grid>
                  <Grid>
                    <input
                     value={pincode} onChange={(e)=>setPincode(e.target.value)}
                      type="text"
                      style={{
                        height: 40,
                           width:'8vw',
                        borderColor: "#bdc3c7",
                        border: "1px solid #bdc3c7",
                        borderRadius: "10px",
                        width: "100%",
                        background: "transparent",
                        marginTop:'-1.5%'
                      }}
                      placeholder="Zipcode"
                    ></input>
                  </Grid>
                </Grid>
                <Grid sx={{marginTop:'1%'}}>
                <input
                    type="text"
                    style={{
                      height: 40,
                      borderColor: "#bdc3c7",
                      border: "1px solid #bdc3c7",
                      borderRadius: "10px",
                      width: "100%",
                      background: "transparent",
                    }}
                    placeholder="note"
                  ></input>
                </Grid>
                <Grid>
                <Button
                  onClick={handleNagivate}
                fullWidth
                style={{
                  border: "1px solid #bdc3c7",
                  borderColor: "#bdc3c7",
                  background:'#fff',
                  height: matchesA?38: "3vw",
                  color: "#000",
                  fontSize: matchesA?'14px':"1.1vw",
                  fontWeight: 500,
                 marginTop:'3%',
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              Continue to Payment
              </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid sx={{fontSize:matches?'14px':'20px',fontWeight:500 ,lineHeight:'26px',letterSpacing:'-2.4%',marginTop:'5%',marginBottom:'2%'}}>
        Copyrights © 2024 Powered By IndiaBuzz
        </Grid>
      </Grid>
    </Grid>
  );
}
