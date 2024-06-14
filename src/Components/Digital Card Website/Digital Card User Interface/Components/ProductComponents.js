import { Grid, Divider, Button, Radio,Rating } from "@mui/material";
import NewHeader from "./NewHeader";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import card4 from "../../Digital Card Assets/card4.png";
import card11 from "../../Digital Card Assets/card3.png";
import card22 from "../../Digital Card Assets/card4.png";
import card33 from "../../Digital Card Assets/card5.png";
import card44 from "../../Digital Card Assets/card6.png";
import card55 from "../../Digital Card Assets/card7.png";
import heart from "../../Digital Card Assets/heart.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import upload from "../../Digital Card Assets/plussign.png";
import { useStyles2 } from "../../Digital Card User Interface/Components//AllProductSlider";
import use1 from "../../Digital Card Assets/use1.png"
import use2 from "../../Digital Card Assets/use2.png"
import use3 from "../../Digital Card Assets/use3.png"
import use4 from "../../Digital Card Assets/use4.png"
import photo3 from "../../Digital Card Assets/photo2.jpg"
import photo2 from "../../Digital Card Assets/photo3.jpg"
import blur11 from "../../Digital Card Assets/white.png"
import photo4 from "../../Digital Card Assets/photo4.jpg"
import photo from "../../Digital Card Assets/photo.jpg"
import r1 from "../../Digital Card Assets/rr1.png"
import r2 from "../../Digital Card Assets/rr2.png"
import r3 from "../../Digital Card Assets/rr3.png"
import r4 from "../../Digital Card Assets/rr4.png"
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newfooter from "./NewFooter";
export default function ProductComponents() {
  const matchesB = useMediaQuery("(max-width:500px)");
  const matches = useMediaQuery("(max-width:900px)");
  const matchesA = useMediaQuery("(max-width:1400px)");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawer2, setOpenDrawer2] = useState(false);

  const classes2 = useStyles2()

  var settings3 = {               
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: "true",
    slidesToShow: matches ?2:4,
    arrows:false,
    cssEase: 'linear',
    pauseOnHover: false,
    autoplaySpeed: 0,
   };
  
  var settings2 = {               
    infinite: true,
    speed: 1000,
    dots: false,
    slidesToShow:matches?1: 4,
    autospeed: 1,
    slidesToScroll: 4,
    arrows:false
   };

  var setting1 = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: "true",
    slidesToShow: matches ?2:3,
    arrows:false,
    cssEase: 'linear',
    pauseOnHover: false,
    autoplaySpeed: 0,
  };

  var data1=[{picture:r1,name:'Ankit Narwariya'},
    {picture:r2,name:'Chinmay Sharma'},
    {picture:r3,name:'Juned Solanki'},
    {picture:r4,name:'Harshit Jain'},
    {picture:r1,name:'Akshat Jain'},
    {picture:r2,name:'Ankit Narwariya'},
    {picture:r3,name:'Satyveer Pal'},
  ]
  const showReview=()=>{
   return data1.map((item)=>{
       return(<Grid sx={{width:'100%'}}>
       <Grid sx={{width:320,padding:1.5,display:'flex',justifyContent:'center',alignItems:'center',color:'#000',flexDirection:'column',background:'#fff',borderRadius:'10px'}}>
           <Grid>
            <img src={item.picture} ></img>
           </Grid>
           <Grid sx={{fontSize:'24px',fontWeight:700,lineHeight:'30px',marginTop:'2%'}}>
              {item.name}
           </Grid>
           <Grid><Rating style={{marginLeft:'auto',marginTop:'2%',display:'flex'}}
                    size="small"
                    color="green"
                    name="simple-controlled"
                    value={5}
                    /></Grid>
                 <Grid sx={{fontSize:'14px',fontWeight:400,lineHeight:'26px',marginTop:'2%',color:'#353535'}}>
                 2 min ago
           </Grid>
           <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'26px',marginTop:'2%',textAlign:'center'}}>
           Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.-
            </Grid>  
       </Grid>
       </Grid>)
   })
  }



  var data=[photo2,photo3,photo4,photo2,photo3,photo4]
  const showProducts=()=>{
      return data.map((item)=>{
          return( <Grid sx={{display:'flex',flexDirection:'column'}}>
            <Grid sx={{width:matchesB?'320px':'357px',height:matchesB?'245px':'260px',display:'flex',alignItems:'center',border:'1px solid #fff',borderRadius:'10px',background:'#fff',padding:2,flexDirection:'column'}}>
                   <Grid  sx={{marginLeft:'auto'}}><img src={heart} width={25}></img></Grid>
                   <Grid sx={{width:'100%',marginTop:-6,marginLeft:8}}>
                     <img src={item} width={250}></img>
                  </Grid>
               </Grid>
               <Grid sx={{width:matchesB?'320px':'357px',height:matchesB?'120px':'110px',marginTop:'1%'}}>
                  <Grid sx={{display:'flex',width:'100%'}}>
                   <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',width:'60%'}}>Royal Black : DCH Google Review Card</Grid>
                   <Grid sx={{width:'40%'}}>
                   <Rating style={{marginLeft:'auto',marginTop:'2%',display:'flex'}}
               size="small"
               color="green"
               name="simple-controlled"
               value={5}
               />
                   </Grid>
                  </Grid>
                  <Grid sx={{display:'flex',marginTop:'1%',alignItems:'center'}}>
                  <Grid sx={{display:'flex',flexDirection:'column'}}>
                   <Grid sx={{fontSize:'22px',fontWeight:700,lineHeight:'26px',color:'#19B300'}}>₹ 599</Grid>
                   <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',color:'#A39C00',marginTop:'-4%'}}><s>₹ 1499</s></Grid>
               </Grid>
               <Grid sx={{marginLeft:'auto'}}>
               <Button
              style={{
               border:'1px solid #fff',
               borderColor:'#fff',
               width:matchesB?'250px': '271px',
               height: '34px',
               lineHeight:'36px',       
               color: "#fff",
               marginLeft:'2%',
               fontSize: "16px",
               fontWeight: 500,
               textTransform: "none",
               borderRadius: '10px',
               display:"flex",
               alignItems: "center",
               justifyContent: "center",
             }}>
            Add to cart
           </Button> 
               </Grid>
               </Grid>
               </Grid>
              </Grid>
)
      })
  }


  const handleClick = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleClickDiscription = () => {
    setOpenDrawer2(!openDrawer2);
  };
  var data = [card11, card22, card33, card44, card55];
  const showSlider = () => {
    return data.map((item) => {
      return (
        <div style={{ cursor: "pointer" }}>
          <img
            src={item}
            style={{
              border: "2px solid #fff",
              width: 85,
              background: "#fff",
              borderRadius: "10px",
            }}
          ></img>
        </div>
      );
    });
  };
  return (
    <Grid
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
      }}
    >
      <Grid>
        <NewHeader />
      </Grid>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Montserrat",
          color: "#fff",
          flexDirection:"column"
        }}
      >
        <Grid
          sx={{
            width: "94%",
            height: "auto",
            marginTop: "5%",
            display: "flex",
          }}
        >
          <Grid
            sx={{
              position:'sticky',zIndex:'2',top:100,
              width: "55%",
              height: 600,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid
              sx={{
                width: 550,
                border: "1px solid #fff",
                borderRadius: "10px",
                height: 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff",
              }}
            >
              <img src={card4} style={{ width: "80%" }}></img>
            </Grid>
            <Grid>
              <Divider
                style={{
                  backgroundColor: "#bdc3c7",
                  width: 550,
                  marginTop: "4%",
                }}
              />
            </Grid>
            <Grid sx={{ marginTop: "3%", display: "flex", gap: 2 }}>
              {showSlider()}
            </Grid>
            <Grid>
              <Divider
                style={{
                  height: "1px",
                  backgroundColor: "#bdc3c7",
                  width: 550,
                  marginTop: "4%",
                }}
              />
            </Grid>
          </Grid>

          <Grid
            sx={{
              width: "45%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid
              sx={{
                fontSize: "26px",
                fontWeight: 700,
                lineHeight: "40px",
                width: "70%",
              }}
            >
              Sky White : DCH Instago Review Card
            </Grid>
            <Grid sx={{ display: "flex", gap: 1, marginTop: "2%" }}>
              <Grid
                sx={{
                  fontSize: "22px",
                  fontWeight: 700,
                  lineHeight: "26px",
                  color: "#19B300",
                }}
              >
                ₹ 599
              </Grid>
              <Grid
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "26px",
                  color: "#A39C00",
                }}
              >
                <s>₹ 1499</s>
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", marginTop: "3%" }}>
              <Button
                style={{
                  border: "1px solid #fff",
                  borderColor: "#fff",
                  width: matchesB ? 80 : "13vw",
                  height: matchesB ? 25 : "2.5vw",
                  color: "#000",
                  fontSize: matchesB ? "12px" : "1vw",
                  fontWeight: 500,
                  marginLeft: "2%",
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 40,
                  background: "#fff",
                }}
              >
                <div style={{ fontSize: "24px", fontWeight: 500 }}>-</div>{" "}
                <div>1</div>{" "}
                <div style={{ fontSize: "18px", fontWeight: 500 }}>+</div>
              </Button>
              <Button
                style={{
                  border: "1px solid #fff",
                  borderColor: "#fff",
                  width: matchesB ? 80 : "13vw",
                  height: matchesB ? 25 : "2.5vw",
                  color: "#fff",
                  fontSize: matchesB ? "12px" : ".9vw",
                  fontWeight: 500,
                  marginLeft: "2%",
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Add To Card
              </Button>
            </Grid>

            <Grid
              sx={{
                marginTop: "5%",
                border: "1px solid #fff",
                borderRadius: "10px",
                width: "100%",
                height: "auto",
                padding: 2,
              }}
            >
              <Grid
                sx={{
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                >
                  Customize Your Card Now
                </Grid>
              </Grid>
              <Grid sx={{ marginTop: "1%" }}>
                <Grid
                  sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                >
                  Name
                </Grid>
                <Grid sx={{ marginTop: "-1%" }}>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      border: "1px solid #fff",
                      borderColor: "#fff",
                      borderRadius: "10px",
                      width: "100%",
                      fontSize: "16px",
                      background: "transparent",
                      color: "#fff",
                    }}
                    placeholder="Enter the name to be printed on your card"
                  ></input>
                </Grid>
              </Grid>
              <Grid sx={{ marginTop: "2%" }}>
                <Grid
                  sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                >
                  Designation
                </Grid>
                <Grid sx={{ marginTop: "-1%" }}>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      border: "1px solid #fff",
                      borderColor: "#fff",
                      borderRadius: "10px",
                      width: "100%",
                      fontSize: "16px",
                      background: "transparent",
                      color: "#fff",
                    }}
                    placeholder="Enter your designation to be printed on your card"
                  ></input>
                </Grid>
              </Grid>
              <Grid sx={{ marginTop: "2%", marginBottom: "5%" }}>
                <Grid
                  sx={{ fontSize: "18px", fontWeight: 600, lineHeight: "26px" }}
                >
                  Mobile Number
                </Grid>
                <Grid sx={{ marginTop: "-1%" }}>
                  <input
                    type="text"
                    style={{
                      height: 40,
                      border: "1px solid #fff",
                      borderColor: "#fff",
                      borderRadius: "10px",
                      width: "100%",
                      fontSize: "16px",
                      background: "transparent",
                      color: "#fff",
                    }}
                    placeholder="Enter Your number"
                  ></input>
                </Grid>
              </Grid>
              <Grid sx={{ display: "flex", marginTop: "3%" }}>
                <Grid>
                  <Grid
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "26px",
                    }}
                  >
                    Colour
                  </Grid>
                  <Grid
                    sx={{
                      marginTop: "-1%",
                      display: "flex",
                      marginLeft: "-2.5%",
                    }}
                  >
                    <Radio
                      value="a"
                      size="large"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{ marginLeft: "1%" }}
                      style={{ color: "green" }}
                    />
                    <Radio
                      value="a"
                      size="large"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{ marginLeft: "1%" }}
                      style={{ color: "red" }}
                    />
                    <Radio
                      value="a"
                      size="large"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{ marginLeft: "1%" }}
                      style={{ color: "#22a6b3" }}
                    />
                    <Radio
                      value="a"
                      size="large"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{ marginLeft: "1%" }}
                      style={{ color: "#4834d4" }}
                    />
                    <Radio
                      value="a"
                      size="large"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      sx={{ marginLeft: "1%" }}
                      style={{ color: "#fff" }}
                    />
                  </Grid>
                </Grid>
                <Grid sx={{ marginLeft: "auto" }}>
                  <Grid>
                    <Grid
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: "26px",
                      }}
                    >
                      Upload Logo
                    </Grid>
                    <Button
                      style={{
                        border: "1px solid #fff",
                        borderColor: "#fff",
                        width: matchesB ? 80 : "10vw",
                        height: matchesB ? 25 : "2.3vw",
                        color: "#fff",
                        fontSize: matchesB ? "12px" : "1vw",
                        fontWeight: 500,
                        marginLeft: "2%",
                        textTransform: "none",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        marginTop: "6%",
                      }}
                    >
                      <div>
                        <img
                          src={upload}
                          width={18}
                          style={{ marginTop: "20%" }}
                        ></img>
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 400 }}>
                        Choose file
                      </div>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid sx={{ marginTop: "2%" }}>
              <Button
                sx={{
                  borderColor: "#ffff",
                  height: 40,
                  color: "#000",
                  background: "#fff",
                  justifyContent: "center",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: 2.6,
                  display: "flex",
                  borderRadius: 2,
                  marginTop: "3%",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
                fullWidth
              >
                Buy Now
              </Button>
            </Grid>
            <Grid
              sx={{
                width: "100%",
                height: 40,
                marginTop: "3%",
                border: "1px solid #fff",
                borderRadius: "10px",
                padding: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "26px",
                }}
              >
                Checkout For Bulk Orders
              </div>
              <div
                style={{
                  border: "1px solid #fff",
                  background: "#fff",
                  color: "#000",
                  fontSize: "15px",
                  fontWeight: 600,
                  width: 110,
                  borderRadius: "5px",
                  height: 28,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Contact Us
              </div>
            </Grid>

            <Grid>
              <Divider
                style={{
                  height: "1px",
                  backgroundColor: "#bdc3c7",
                  width: "100%",
                  marginTop: "6%",
                }}
              />
            </Grid>

            <Grid sx={{ marginTop: "4%", width: "100%" }}>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid
                  sx={{ fontSize: "26px", fontWeight: 700, lineHeight: "26px" }}
                >
                  Features :
                </Grid>
                <Grid
                  onClick={handleClick}
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    background: "#fff",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {openDrawer ? (
                    <ExpandLess
                      color="#000"
                      style={{ color: "#000" }}
                      fontSize="medium"
                    />
                  ) : (
                    <ExpandMore
                      color="#000"
                      style={{ color: "#000" }}
                      fontSize="medium"
                    />
                  )}
                </Grid>
              </Grid>
              <Grid sx={{ width: "100%", display: "flex", marginTop: "4%" }}>
                <Grid
                  sx={{
                    width: "50%",
                    height: "auto",
                    marginTop: "5%",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 60,
                      background: "#353535",
                    }}
                  ></Grid>
                  <Grid
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "40px",
                      textAlign: "center",
                      marginTop: "3%",
                    }}
                  >
                    Boost the number of reviews.
                  </Grid>

                  <Grid
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 60,
                      background: "#353535",
                      marginTop: "12%",
                    }}
                  ></Grid>
                  <Grid
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "40px",
                      textAlign: "center",
                      marginTop: "3%",
                    }}
                  >
                    Boost the number of reviews.
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    width: "50%",
                    height: "auto",
                    marginTop: "5%",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "40px",
                      textAlign: "center",
                    }}
                  >
                    Boost the number of reviews.
                  </Grid>
                  <Grid
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 60,
                      background: "#353535",
                      marginTop: "3%",
                    }}
                  ></Grid>

                  <Grid
                    sx={{
                      fontSize: "22px",
                      fontWeight: 700,
                      lineHeight: "40px",
                      textAlign: "center",
                      marginTop: "12%",
                    }}
                  >
                    Boost the number of reviews.
                  </Grid>
                  <Grid
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 60,
                      background: "#353535",
                    }}
                  ></Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              <Divider
                style={{
                  backgroundColor: "#bdc3c7",
                  width: "100%",
                  marginTop: "3%",
                }}
              />
            </Grid>

            <Grid sx={{ marginTop: "6%", width: "100%" }}>
              <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid
                  sx={{ fontSize: "26px", fontWeight: 700, lineHeight: "26px" }}
                >
                  Description
                </Grid>
                <Grid
                  onClick={handleClickDiscription}
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    background: "#fff",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {openDrawer2 ? (
                    <ExpandLess
                      color="#000"
                      style={{ color: "#000" }}
                      fontSize="medium"
                    />
                  ) : (
                    <ExpandMore
                      color="#000"
                      style={{ color: "#000" }}
                      fontSize="medium"
                    />
                  )}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  marginTop: "4%",
                  width: "100%",
                  height: "auto",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  padding: 3,
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  letterSpacing: "-2%",
                }}
              >
                DISCOVER OUR TAG FOR GOOGLE REVIEWS. Today, customer
                decision-making is based on Google reviews. With our smart
                Gooogle Review Card you will get more and better reviews of your
                business or company easily and quickly. How does it work?
                1.Customers scan the Card or use NFC (NFC works like mobile
                payments). 2.The link will take them directly to the content
                you've linked in the settings. -How to set up? OOnly 2 minutes
                SetUp Process 1.Scan the QR or use NFC. 2.Enter your email
                address and tap "OK". 3.You will receive a message/maiil to
                validate your account. 4.You will access our website, where you
                will see your tag. Tap "Setup". 5.Enter the link to your
                content. Remember that you can change it as many times as you
                want from the DCH | DIGITAL CARD HUB platform. Do not stick on
                metal surfaces. NFC chip does not work. We do not ask for bank
                details to activate it. Or you can buy a new one and enjoy
                another year of free service from our platform. It is
                contactless, secure and direct.
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            width: "94%",
            height: 'auto',
            marginTop: "10%",
            display: "flex",
            alignItems:'center',
            flexDirection:'column',
          }}>
            <Grid sx={{fontSize:'52px',fontWeight:700,lineHeight:'26px'}}>How to use me ?</Grid>
         <Grid sx={{display:'flex', justifyContent:"space-between",marginTop:'6%'}}>
         <Grid sx={{width:'25%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <Grid>
            <img src={use1} width={350}></img>
         </Grid>
         <Grid sx={{fontSize:'32px',fontWeight:700,lineHeight:'26px',marginTop:'4%'}}>
         Step 1
         </Grid>
         <Grid sx={{fontSize:'22px',fontWeight:400,lineHeight:'26px',marginTop:'3%',textAlign:'center',width:'80%'}}>
         Norem ipsum dolor sit amet, consectetur adipiscing elit.
         </Grid>
         </Grid>
         <Grid sx={{width:'25%',height:500,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <Grid>
            <img src={use2} width={100}></img>
         </Grid>
         <Grid sx={{fontSize:'32px',fontWeight:700,lineHeight:'26px',marginTop:'4%'}}>
         Step 2
         </Grid>
         <Grid sx={{fontSize:'22px',fontWeight:400,lineHeight:'26px',marginTop:'3%',textAlign:'center',width:'80%'}}>
         Norem ipsum dolor sit amet, consectetur adipiscing elit.
         </Grid>
         </Grid>
         <Grid sx={{width:'25%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <Grid sx={{marginTop:'10%'}}>
            <img src={use3} width={200}></img>
         </Grid>
         <Grid sx={{fontSize:'32px',fontWeight:700,lineHeight:'26px',marginTop:'25%'}}>
         Step 3
         </Grid>
         <Grid sx={{fontSize:'22px',fontWeight:400,lineHeight:'26px',marginTop:'3%',textAlign:'center',width:'80%'}}>
         Norem ipsum dolor sit amet, consectetur adipiscing elit.
         </Grid>
         </Grid>
         <Grid sx={{width:'25%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
         <Grid>
            <img src={use4} width={160}></img>
         </Grid>
         <Grid sx={{fontSize:'32px',fontWeight:700,lineHeight:'26px',marginTop:'4%'}}>
         Step 4
         </Grid>
         <Grid sx={{fontSize:'22px',fontWeight:400,lineHeight:'26px',marginTop:'3%',textAlign:'center',width:'80%'}}>
         Norem ipsum dolor sit amet, consectetur adipiscing elit.
         </Grid>
        </Grid>
</Grid>
        </Grid>
      </Grid>
      <Grid     
          sx={{
            width: "99%",
            height: 'auto',
            marginTop: "10%",
            display: "flex",
            alignItems:'center',
            flexDirection:'column',
            color:'#fff'
          }}>
            <Grid sx={{fontSize:'52px',fontWeight:700,lineHeight:'66px',width:'70%',textAlign:'center'}}>Bundle up your purchase And get great offers</Grid>
           <Grid sx={{width:'100%',marginTop:'5%'}}>
           <Slider {...setting1}>
          {showProducts()}
        </Slider>
           </Grid>
            </Grid>


  
            <Grid sx={{width:'100%',height:800,display:'flex',alignItems:'center',flexDirection:"column",color:'#fff',marginTop:matchesA?'8%':'7%',justifyContent:'center'}}>
                <Grid sx={{fontSize:matches?'24px':'52px',fontWeight:600,lineHeight:matches?'30px':'52px',letterSpacing:'-2.4%',textAlign:matches?'center':'',width:matchesB?'80%':'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                OUR TOP PROFESSIONALS
                </Grid>
                <Grid sx={{fontSize:matches?'18px':'22px',fontWeight:400,lineHeight:matches?'24px':'46px',letterSpacing:'2%',marginTop:'1%',textAlign:matches?'center':'',width:matchesB?'85%':'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                They are our reviews with happy user
                </Grid>
                <Grid sx={{marginTop:'5%',display:'flex',width:'100%',justifyContent:'space-between'}}>
               <Grid style={{width:'100%'}}>
               <Slider {...settings2}>
        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo4} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid>
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Chinmay Sharma
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Ui/Ux designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>

        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo2} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Sonam Gupta
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         HR at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>


        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo3} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Ankit Narwariya
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Front-end Developer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>


        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo4} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Junaid Solanki
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Graphic designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>


         <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Chinmay Sharma
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Ui/Ux designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>

        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Chinmay Sharma
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Ui/Ux designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>
      </Slider>
            </Grid>
                </Grid>
            </Grid>         


            <Grid sx={{width:'100%',height:'auto',display:'flex',alignItems:'center',flexDirection:"column",color:'#fff',justifyContent:'center',marginTop:'6%'}}>
            <Grid sx={{fontSize:matches?'24px':'52px',fontWeight:600,lineHeight:matches?'30px':'52px',letterSpacing:'-2.4%',textAlign:matches?'center':'',width:matchesB?'80%':'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            Customer Reviews
                </Grid>
                <Grid sx={{width:'100%',marginTop:'6%'}}>
                <Slider {...settings3}>
                 {showReview()}
                 </Slider>
                </Grid>
              </Grid>

<Grid sx={{marginTop:'14%'}}>
  <Newfooter/>
</Grid>

    </Grid>
  );
}
