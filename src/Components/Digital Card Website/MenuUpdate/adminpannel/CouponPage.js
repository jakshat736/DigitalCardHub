import { Button, Divider, Grid, InputBase } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import clock from "../assets/watch.png";
import table from "../assets/table.png";
import right from "../assets/righta.png";
import live from "../assets/live2.png";
import load from "../assets/load.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";

export default function CouponPage()
{
  const matches = useMediaQuery("(max-width:1400px)");
  const matchesA = useMediaQuery("(max-width:700px)");

  const [create,setCreate]=useState(true)

   const handleClick=()=>{
    setCreate(!create)
   }

    return(<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid sx={{width:'85%',height:'auto',marginBottom:'4%'}}>
          <Grid sx={{marginTop:'4%',display:'flex',gap:matches?2:6,alignItems:'center',flexDirection:matches?'column':'row'}}>
          <Button onClick={handleClick}
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: matches?'100%':"8vw",
                    height: "35px",
                    color: "#000",
                    background: "#fff",
                    fontSize: "16px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "4px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Add +
                </Button>
                <Grid sx={{fontSize:matchesA?'14px':'17px',fontWeight:400,lineHeight:'22px',color:'#fff',textAlign:'center'}}>
                Add discount coupons for your restaurant to attract your people to take more interest in your busines.
                </Grid>
          </Grid>
          <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: matchesA?"4%":"2%",
              }}
            />
            {create?<></>:<> <Grid sx={{marginTop:matchesA?'4%':'2%',display:'flex',justifyContent:'space-between',flexDirection:matches?'column':'row',gap:matches?2:''}}>
                <Grid>
                <Grid>
                    <Grid sx={{fontSize:matches?'14px':'20px',fontWeight:600,lineHeight:'18px',color:'#fff'}}>Coupon code</Grid>
                </Grid>
                <Grid
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  color: "#fff",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "35px",
                  width: matches?'100%':"300px",
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#fff",fontSize:matches?'10px':'14px' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter Coupon Code"
                />
              </Grid>
              </Grid>



              <Grid>
                <Grid>
                    <Grid sx={{fontSize:matches?'14px':'20px',fontWeight:600,lineHeight:'18px',color:'#fff'}}>Offer (%)</Grid>
                </Grid>
                <Grid
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  color: "#fff",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "35px",
                  width: matches?'100%':"300px",
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#fff",fontSize:'14px' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter discount offer"
                />
              </Grid>
              </Grid>


              <Grid>
                <Grid>
                    <Grid sx={{fontSize:matches?'14px':'20px',fontWeight:600,lineHeight:'18px',color:'#fff'}}>Offer time</Grid>
                </Grid>
                <Grid sx={{display:'flex',alignItems:'center',gap:.8}}>
                <Grid
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  color: "#fff",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "35px",
                  width:matches?'100%': "140px",
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#fff",fontSize:matches?'10px':'14px' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Time (Hr)"
                />
              </Grid>
              <Grid sx={{fontSize:matches?'14px':'16px',fontWeight:600,lineHeight:'18px',color:'#fff'}}>To</Grid>
              <Grid
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  color: "#fff",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "35px",
                  width: matches?'100%':"140px",
                  marginTop:'2%'
                }}
              >
                <InputBase
                  style={{ color: "#fff",fontSize:matches?'10px':'14px' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Time (Hr)"
                />
              </Grid>
              </Grid>
              </Grid>
            </Grid></>}

            {create?<></>:<><Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop:matchesA?"5%":"3%",
              }}
            /></>}

            <Grid sx={{fontSize:'12px',fontWeight:400,lineHeight:'18px',color:'#fff',marginTop:'2%'}}>
            You Should have to change the coupans on daily basis or these coupons will be automatically closed after 24 hours.
            </Grid>
            
            <Grid sx={{fontSize:matches?'18px':'24px',fontWeight:600,lineHeight:'18px',color:'#fff',marginTop:matchesA?"7%":'3.5%'}}>
            Previous Offers
            </Grid>

  <Grid container sx={{display: "flex", justifyContent:matches?'center':"space-between",marginTop:matchesA?'3%':'1%',alignItems:'center',gap:matches?4:6 }} >

<Grid   item  md={matches?5.5:3.5} 
            sx={{
              width: matchesA?"100%":"300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px" }}
                >
                 Discount code
                </Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "16px",color:'#FB9700', }}
                >
                  FLAT60
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
               <DeleteIcon style={{color:'red'}}/>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Start time :</Grid>
                <Grid
                  sx={{
                    fontSize: matchesA?"10px":"12px",
                    fontWeight: 500,
                     color: "#747474"
                  }}
                >
                 10:25 am, 25 June 2024{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                End time   :
                </Grid>
                <Grid
                  sx={{ fontSize: matchesA?"10px":"12px", fontWeight: 500, color: "#747474" }}
                >
              10:00 pm, 25 June 2024{" "}
                </Grid>
              </Grid>
           
<Grid sx={{display:'flex',justifyContent:"space-between",marginTop:'4%'}}>
<Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "8vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 OPEN
                </Button>

                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "8vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 60 %
                </Button>
</Grid>
           

            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',marginBottom:'3%'}}>
           <Button
                  style={{
                    border: "1px solid #0066FF",
                    borderColor: "#0066FF",
                    width: matches?'60%':"14vw",
                    height: "30px",
                    color: "#fff",
                    background: "#0066FF",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
               <div>Re-Activate</div><div style={{marginTop:'2%',marginLeft:'2%'}}><img src={load} width={12} ></img></div>
                </Button>
           </Grid>
          </Grid>



          <Grid item  md={matches?5.5:3.5} 
            sx={{
              width: matchesA?"100%":"300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px" }}
                >
                 Discount code
                </Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "16px",color:'#FB9700', }}
                >
                  FLAT60
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
               <DeleteIcon style={{color:'red'}}/>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Start time :</Grid>
                <Grid
                  sx={{
                    fontSize:matchesA?"10px": "12px",
                    fontWeight: 500,
                     color: "#747474"
                  }}
                >
                 10:25 am, 25 June 2024{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                End time   :
                </Grid>
                <Grid
                  sx={{ fontSize: matchesA?"10px":"12px", fontWeight: 500, color: "#747474" }}
                >
              10:00 pm, 25 June 2024{" "}
                </Grid>
              </Grid>
           
<Grid sx={{display:'flex',justifyContent:"space-between",marginTop:'4%'}}>
<Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "8vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 OPEN
                </Button>

                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "8vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 60 %
                </Button>
</Grid>
           

            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',marginBottom:'3%'}}>
           <Button
                  style={{
                    border: "1px solid #0066FF",
                    borderColor: "#0066FF",
                    width: matches?'60%': "14vw",
                    height: "30px",
                    color: "#fff",
                    background: "#0066FF",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
               <div>Re-Activate</div><div style={{marginTop:'2%',marginLeft:'2%'}}><img src={load} width={12} ></img></div>
                </Button>
           </Grid>
          </Grid>



          <Grid item  md={matches?5.5:3.5} 
            sx={{
              width: matchesA?"100%":"300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px" }}
                >
                 Discount code
                </Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "16px",color:'#FB9700', }}
                >
                  FLAT60
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
               <DeleteIcon style={{color:'red'}}/>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Start time :</Grid>
                <Grid
                  sx={{
                    fontSize:matchesA?"10px": "12px",
                    fontWeight: 500,
                     color: "#747474"
                  }}
                >
                 10:25 am, 25 June 2024{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                End time   :
                </Grid>
                <Grid
                  sx={{ fontSize:matchesA?"10px": "12px", fontWeight: 500, color: "#747474" }}
                >
              10:00 pm, 25 June 2024{" "}
                </Grid>
              </Grid>
           
<Grid sx={{display:'flex',justifyContent:"space-between",marginTop:'4%'}}>
<Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "8vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 OPEN
                </Button>

                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "8vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 60 %
                </Button>
</Grid>
           

            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',marginBottom:'3%'}}>
           <Button
                  style={{
                    border: "1px solid #0066FF",
                    borderColor: "#0066FF",
                    width: matches?'60%': "14vw",
                    height: "30px",
                    color: "#fff",
                    background: "#0066FF",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
               <div>Re-Activate</div><div style={{marginTop:'2%',marginLeft:'2%'}}><img src={load} width={12} ></img></div>
                </Button>
           </Grid>
          </Grid>






<Grid   item  md={matches?5.5:3.5} 
            sx={{
              width: matchesA?"100%":"300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px" }}
                >
                 Discount code
                </Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "16px",color:'#FB9700', }}
                >
                  FLAT60
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
               <DeleteIcon style={{color:'red'}}/>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Start time :</Grid>
                <Grid
                  sx={{
                    fontSize: matchesA?"10px":"12px",
                    fontWeight: 500,
                     color: "#747474"
                  }}
                >
                 10:25 am, 25 June 2024{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                End time   :
                </Grid>
                <Grid
                  sx={{ fontSize: matchesA?"10px":"12px", fontWeight: 500, color: "#747474" }}
                >
              10:00 pm, 25 June 2024{" "}
                </Grid>
              </Grid>
           
<Grid sx={{display:'flex',justifyContent:"space-between",marginTop:'4%'}}>
<Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "8vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 OPEN
                </Button>

                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "8vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 60 %
                </Button>
</Grid>
           

            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',marginBottom:'3%'}}>
           <Button
                  style={{
                    border: "1px solid #0066FF",
                    borderColor: "#0066FF",
                    width: matches?'60%':"14vw",
                    height: "30px",
                    color: "#fff",
                    background: "#0066FF",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
               <div>Re-Activate</div><div style={{marginTop:'2%',marginLeft:'2%'}}><img src={load} width={12} ></img></div>
                </Button>
           </Grid>
          </Grid>



        
<Grid   item  md={matches?5.5:3.5} 
            sx={{
              width: matchesA?"100%":"300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px" }}
                >
                 Discount code
                </Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "16px",color:'#FB9700', }}
                >
                  FLAT60
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
               <DeleteIcon style={{color:'red'}}/>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Start time :</Grid>
                <Grid
                  sx={{
                    fontSize: matchesA?"10px":"12px",
                    fontWeight: 500,
                     color: "#747474"
                  }}
                >
                 10:25 am, 25 June 2024{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                End time   :
                </Grid>
                <Grid
                  sx={{ fontSize: matchesA?"10px":"12px", fontWeight: 500, color: "#747474" }}
                >
              10:00 pm, 25 June 2024{" "}
                </Grid>
              </Grid>
           
<Grid sx={{display:'flex',justifyContent:"space-between",marginTop:'4%'}}>
<Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "8vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 OPEN
                </Button>

                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "8vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 60 %
                </Button>
</Grid>
           

            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',marginBottom:'3%'}}>
           <Button
                  style={{
                    border: "1px solid #0066FF",
                    borderColor: "#0066FF",
                    width: matches?'60%':"14vw",
                    height: "30px",
                    color: "#fff",
                    background: "#0066FF",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
               <div>Re-Activate</div><div style={{marginTop:'2%',marginLeft:'2%'}}><img src={load} width={12} ></img></div>
                </Button>
           </Grid>
          </Grid>


      
<Grid   item  md={matches?5.5:3.5} 
            sx={{
              width: matchesA?"100%":"300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "22px" }}
                >
                 Discount code
                </Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "16px",color:'#FB9700', }}
                >
                  FLAT60
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
               <DeleteIcon style={{color:'red'}}/>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Start time :</Grid>
                <Grid
                  sx={{
                    fontSize: matchesA?"10px":"12px",
                    fontWeight: 500,
                     color: "#747474"
                  }}
                >
                 10:25 am, 25 June 2024{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                End time   :
                </Grid>
                <Grid
                  sx={{ fontSize: matchesA?"10px":"12px", fontWeight: 500, color: "#747474" }}
                >
              10:00 pm, 25 June 2024{" "}
                </Grid>
              </Grid>
           
<Grid sx={{display:'flex',justifyContent:"space-between",marginTop:'4%'}}>
<Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width: "8vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 OPEN
                </Button>

                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width: "8vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "25px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 60 %
                </Button>
</Grid>
           

            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',marginBottom:'3%'}}>
           <Button
                  style={{
                    border: "1px solid #0066FF",
                    borderColor: "#0066FF",
                    width: matches?'60%':"14vw",
                    height: "30px",
                    color: "#fff",
                    background: "#0066FF",
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
               <div>Re-Activate</div><div style={{marginTop:'2%',marginLeft:'2%'}}><img src={load} width={12} ></img></div>
                </Button>
           </Grid>
          </Grid>
          </Grid>


  <Grid container sx={{display: "flex", justifyContent:matches?'center':"space-between",marginTop:matchesA?'15%':'8%',alignItems:'center',gap:4 }} >

<Grid   item  md={matches?5.5:3.5} 
            sx={{
              width:matchesA?"100%": "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Ankit narwariya
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #BDF3FF",
                    borderColor: "#BDF3FF",
                    width:matches?'100%': "7vw",
                    height: "29px",
                    color: "#0047FF",
                    background: "#BDF3FF",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  New Order
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "13px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/-</s>{" "}
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width:matches?'100%': "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize:matchesA?"10px": "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize:matchesA?"12px": "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 656.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid  item  md={matches?5.5:3.5} 
            sx={{
              width:matchesA?"100%": "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Hashit Jain
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches?'100%': "7vw",
                    height: "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Completed
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/- </s>{" "}
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: matches?'100%':"8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: matchesA?"10px":"12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize: matchesA?"12px":"14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 586.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid  item  md={matches?5.5:3.5} 
            sx={{
              width:matchesA?"100%": "300px",
              height: "auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .5)",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                marginTop: "1%",
                width: "100%",
                display: "flex",
                padding: 2,
                alignItems: "center",
              }}
            >
              <Grid>
                <Grid
                  sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "22px" }}
                >
                  Ankit narwariya
                </Grid>
                <Grid
                  sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "18px" }}
                >
                  +91 6376420301
                </Grid>
              </Grid>
              <Grid sx={{ marginLeft: "auto" }}>
                <Button
                  style={{
                    border: "1px solid #FFDDC4",
                    borderColor: "#FFDDC4",
                    width:matches?'100%': "7vw",
                    height: "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  On Cook
                </Button>
              </Grid>
            </Grid>
            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                height: "1px",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Grid>
                  <img src={clock} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  11:51 Am , 21 june 2024
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  marginTop: "2%",
                }}
              >
                <Grid>
                  <img src={table} width={18}></img>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 500, marginTop: "-2%" }}
                >
                  Table 1
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
                marginTop: "-2%",
              }}
            />

            <Grid sx={{ padding: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>3 Items</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "-2%",
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 632/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Paneer Butter Masala.
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 339/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  12 Tawa Roti (butter).
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 109/-{" "}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "12px", fontWeight: 400 }}>
                  2 Special Veg. Raita
                </Grid>
                <Grid
                  sx={{ fontSize: "12px", fontWeight: 500, color: "#747474" }}
                >
                  Rs. 200/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>Tax</Grid>
                <Grid
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "underline",
                    color: "#0066FF",
                  }}
                >
                  Rs. 24.5/-{" "}
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "3.2%",
                }}
              >
                <Grid sx={{ fontSize: "14px", fontWeight: 600 }}>
                  <s>Home delivery</s>
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#9F9F9F" }}
                >
                  <s>Rs. 00.0/- </s>
                </Grid>
              </Grid>
            </Grid>

            <Divider
              style={{
                backgroundColor: "#C2C2C2",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "1%",
                padding: 2,
              }}
            >
              <Grid>
                {" "}
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width:matches?'100%': "8vw",
                    height: "25px",
                    color: "#fff",
                    background: "#000",
                    fontSize: matchesA?"10px":"12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <div>See Details</div>
                  <div>
                    {" "}
                    <img
                      src={right}
                      width={6}
                      style={{ marginLeft: "2%" }}
                    ></img>{" "}
                  </div>
                </Button>{" "}
              </Grid>
              <Grid sx={{ gap: 0.8, display: "flex", alignItems: "center" }}>
                <Grid sx={{ fontSize:matchesA?"12px": "14px", fontWeight: 700, color: "#000" }}>
                  Total
                </Grid>
                <Grid
                  sx={{ fontSize: "14px", fontWeight: 700, color: "#50D200" }}
                >
                  Rs. 656.8/-
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        <Grid sx={{width:'100%',marginLeft:'auto', position: "fixed",zIndex:100,bottom:0,marginBottom:'4%'}}>
  <img src={live} width={200} style={{marginLeft:matches?'':'52%'}}></img></Grid>

        </Grid>
    </Grid>)
}