import { Button, Divider, Grid, IconButton, InputBase } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import upload from "../../Digital Card Assets/plussign.png";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import burgur from "../../Digital Card Assets/burgur.png"
import burgur3 from "../../Digital Card Assets/burgur3.png"
import useMediaQuery from "@mui/material/useMediaQuery";
import burgur2 from "../../Digital Card Assets/burgur2.png"
import dark from "../../Digital Card Assets/rightdark.png"
import { useState } from "react";
import close from "../../Digital Card Assets/cross.png"
import right from "../../Digital Card Assets/righticonpopup.png"
import Dialog from "@mui/material/Dialog";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
export default function EditMenuItemPage()
{

    const matches = useMediaQuery("(max-width:600px)");
    const matchesA = useMediaQuery("(max-width:1400px)");
    const matchesB = useMediaQuery("(max-width:500px)");
    const [view, setView] = useState(false);
    const [view2, setView2] = useState(false);
    const [food, setFood] = useState(false);
    const [openDrawer2, setOpenDrawer2] = useState(false);


const handleFood = () => {
  setFood(!food);
  setOpenDrawer2(!openDrawer2);
};



const handleViewCard = () => {
    setView(true);
  };
  const handleCloseViewCard = () => {
    setView(false);
  };


  const handleViewCard2 = () => {
    setView2(true);
  };
  const handleCloseViewCard2 = () => {
    setView2(false);
  };


  const ViewQuantity = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            width: matches ? "100%" : '80%',
            height: matches ? 'auto' : 270,
            borderRadius: 10,
            backgroundImage: "radial-gradient(#f5f6fa,#dfe6e9)",
          },
        }}
        open={view}
        onClose={handleCloseViewCard}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid sx={{ width: '100%', height: matches ? 'auto' : 260 }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#dfe6e9' }}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fff', background: '#f5f6fa' }}>
              <Grid sx={{ fontSize: matches ? '15px' : '22px', fontWeight: 600, lineHeight: '36px', color: '#000', marginLeft: '2%', marginTop: '-.5%' }}>Add More Quantity</Grid>
              <Grid onClick={handleCloseViewCard}
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 16,
                  color: "inherit",
                  cursor: 'pointer'
                }}>
                <img src={close} width={20}></img>
              </Grid>
            </Grid>
            <Grid sx={{ width: '100%', height: matches ? 'auto' : 210, padding: 1.8 }}>
            <Grid sx={{ display: 'flex', marginTop: '1%', gap: 2,justifyContent:"space-between" }}>
            <Grid sx={{width:'100%'}}>
                <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                Quantity
                </Grid>
                <Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "45px",
                    width:"100%",
                  }}
                >
                  <InputBase
                  fullWidth
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Full"
                  />
                </Grid>   
                </Grid>
            </Grid>

            <Grid  sx={{width:'100%'}}>
                <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                Price
                </Grid>
                <Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "45px",
                    width:"100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="₹"
                  />
                </Grid>   
                </Grid>
            </Grid>
            </Grid>



              <Grid sx={{ display: 'flex', marginTop: '4%', gap: 2 }}>
                <Button
                  style={{
                    border: '1px solid #00a8ff',
                    borderColor: '#00a8ff',
                    height: matchesB ? 25 : '2.7vw',
                    color: "#fff",
                    fontSize: matchesB ? '12px' : "1.3vw",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '6px',
                    display: "flex",
                    background: '#00a8ff',
                    alignItems: "center",
                    justifyContent: "center",
                  }} fullWidth>
                  Add 
                </Button>

                 <Button
                    style={{
                    border: '1px solid red',
                    borderColor: 'red',
                    height: matchesB ? 25 : '2.7vw',
                    color: "#fff",
                    fontSize: matchesB ? '12px' : "1.3vw",
                    fontWeight: 600,
                    background: 'red',
                    textTransform: "none",
                    borderRadius: '6px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }} fullWidth>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Dialog>
    );
  };





  
  const ViewAddOn = () => {
    return (
      <Dialog
        PaperProps={{
          style: {
            width: matches ? "100%" : '80%',
            height: matches ? 'auto' : 270,
            borderRadius: 10,
            backgroundImage: "radial-gradient(#f5f6fa,#dfe6e9)",
          },
        }}
        open={view2}
        onClose={handleCloseViewCard2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid sx={{ width: '100%', height: matches ? 'auto' : 260 }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#dfe6e9' }}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fff', background: '#f5f6fa' }}>
              <Grid sx={{ fontSize: matches ? '15px' : '22px', fontWeight: 600, lineHeight: '36px', color: '#000', marginLeft: '2%', marginTop: '-.5%' }}>Add On</Grid>
              <Grid onClick={handleCloseViewCard2}
                aria-label="close"
                sx={{
                  position: "absolute",
                  right: 10,
                  top: 16,
                  color: "inherit",
                  cursor: 'pointer'
                }}>
                <img src={close} width={20}></img>
              </Grid>
            </Grid>
            <Grid sx={{ width: '100%', height: matches ? 'auto' : 210, padding: 1.8 }}>
            <Grid sx={{ display: 'flex', marginTop: '1%', gap: 2,justifyContent:"space-between" }}>
            <Grid sx={{width:'100%'}}>
                <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                Add On
                </Grid>
                <Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "45px",
                    width:"100%",
                  }}
                >
                  <InputBase
                  fullWidth
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Name"
                  />
                </Grid>   
                </Grid>
            </Grid>

            <Grid  sx={{width:'100%'}}>
                <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                Price
                </Grid>
                <Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "45px",
                    width:"100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="₹"
                  />
                </Grid>   
                </Grid>
            </Grid>
            </Grid>



              <Grid sx={{ display: 'flex', marginTop: '4%', gap: 2 }}>
                <Button
                  style={{
                    border: '1px solid #00a8ff',
                    borderColor: '#00a8ff',
                    height: matchesB ? 25 : '2.7vw',
                    color: "#fff",
                    fontSize: matchesB ? '12px' : "1.3vw",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '6px',
                    display: "flex",
                    background: '#00a8ff',
                    alignItems: "center",
                    justifyContent: "center",
                  }} fullWidth>
                  Add 
                </Button>

                 <Button
                    style={{
                    border: '1px solid red',
                    borderColor: 'red',
                    height: matchesB ? 25 : '2.7vw',
                    color: "#fff",
                    fontSize: matchesB ? '12px' : "1.3vw",
                    fontWeight: 600,
                    background: 'red',
                    textTransform: "none",
                    borderRadius: '6px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }} fullWidth>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Dialog>
    );
  };






    return(<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Grid sx={{width:'85%',marginTop:'3%',color:'#000'}}>
        <Grid sx={{width:'100%',height:'auto',display:'flex'}}>
          <Grid sx={{width:'50%'}}>
            <Grid sx={{fontSize:'26px',fontWeight:600,color:'#fff',marginLeft:'6%'}}>Edit categories</Grid>
            <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'2%'}}>
            <Grid sx={{width:'90%',height:'280px',border:'1px solid #E9E9E9',background:'#E9E9E9',borderRadius:'10px',padding:2.5,color:'#000',display:'flex',flexDirection:"column"}}>
             <Grid sx={{fontSize:'20px',fontWeight:600,display:'flex',justifyContent:'center',alignItems:'center'}}>Add new category</Grid>
             <Grid sx={{marginTop:'4%'}}>
                <Grid sx={{fontSize:'16px',fontWeight:500,color:'#000'}}>Category name *</Grid>
             <Grid
                sx={{
                  border: "1px solid #000",
                  borderRadius: "4px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "52px",
                  width: "100%",
                  marginTop:'1%'
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter a food category name"
                />
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <DeleteIcon
                    fontSize="medium"
                    color="red"
                    style={{ color: "red" }}
                  />
                </IconButton>
              </Grid>
             </Grid>
   
             <Button
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"52px",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginTop:'6%',
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
              Save
              </Button>
           </Grid>
          </Grid>




          <Grid sx={{fontSize:'26px',fontWeight:600,color:'#fff',marginLeft:'6%',marginTop:'8%'}}>Add menu items</Grid>
            <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'2%'}}>
            <Grid sx={{width:'90%',height:'auto',border:'1px solid #E9E9E9',background:'#E9E9E9',borderRadius:'10px',padding:2.5,color:'#000',display:'flex',flexDirection:"column"}}>
            <Grid sx={{width:'100%',display:'flex',gap:3}}>
           <Grid>
            <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000',lineHeight:'18px'}}>Name <b style={{color:'red'}}>*</b></Grid>
            <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "45px",
                    width:"100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Name"
                  />
                </Grid>
                </Grid>
                <Grid>
                <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000',lineHeight:'18px'}}>Price <b style={{color:'red'}}>*</b></Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "45px",
                    width:"100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="₹"
                  />
                </Grid>
                </Grid>
            </Grid>
            

            <Grid>
                <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000',lineHeight:'18px',marginTop:'4%'}}>Select category </Grid>
                <select
                      style={{
                        border: "1px solid #000",
                        borderRadius: "4px",
                        color: "#636e72",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        fontSize:'16px',
                        background:'transparent',
                        height: "45px",
                        width:'100%',
                        marginTop:'1%',
                      }}>
                      <option   value="Enter a food category name">Enter a food category name</option>
                      <option value="India">1-3 Year</option>
                      <option   value="India">3-5 Year</option>
                      <option  value="India">5 Plus</option>
                    </select>
                </Grid>


                <Grid>
                <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000',lineHeight:'18px',marginTop:'4%'}}>Item description </Grid>
                <Grid><textarea  style={{
                        border: "1px solid #000",
                        borderRadius: "4px",
                        color: "",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        background:'transparent',
                        height:160,
                        padding:2,
                        width: "100%",
                        marginTop:'1%'}}  placeholder="Enter a food category name."></textarea></Grid>
                </Grid>


            <Grid sx={{width:'100%',display:'flex',justifyContent:'space-between',marginTop:'3%'}}>
                <Grid>
                        <Grid
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "18px",
                          }}>
                          Upload Logo
                        </Grid>

                        <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                      />
                      <Button
                         component="span"
                          style={{
                            border: "1px solid #000",
                            borderColor: "#000",
                            width: 200,
                            height:"45px",
                            color: "#fff",
                            background:'#000',
                            fontSize:"1vw",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 10,
                            marginTop: "4%",
                          }}
                        >
                          <div>
                            <img
                              src={upload}
                              width={18}
                              style={{ marginTop: "20%" }}
                            ></img>
                          </div>
                          <div style={{ fontSize:"12px", fontWeight: 300 }}>
                          Choose file
                          </div>
                        </Button>
                    </label>
                      </Grid>


                    <Grid>
                <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000',lineHeight:'18px'}}>Sort order <b style={{color:'red'}}>*</b></Grid>
               
                <select
                      style={{
                        border: "1px solid #000",
                        borderRadius: "4px",
                        color: "#636e72",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        fontSize:'16px',
                        background:'transparent',
                        height: "45px",
                        width:200,
                        marginTop:'4%',
                      }}>
                      <option   value="No.">No.</option>
                      <option value="India">1-3 Year</option>
                      <option   value="India">3-5 Year</option>
                      <option  value="India">5 Plus</option>
                    </select>
                </Grid>
            </Grid>



<Grid sx={{width:'100%',height:'90px',borderRadius:'10px',background:'#D6D6D6',display:'flex',padding:2,marginTop:'3%',flexDirection:'column'}}>
<Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'20px'}}>
Food type *
</Grid>

<RadioGroup style={{justifyContent:"space-between",fontSize:'18px'}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel style={{fontSize:'18px'}} value="Veg" control={<Radio style={{color:'#A5A5A5'}}/>} label="Veg" />
        <FormControlLabel  style={{fontSize:'18px'}}  value="Non-Veg" control={<Radio style={{color:'#A5A5A5'}}/>} label="Non-Veg" />
        <FormControlLabel  style={{fontSize:'18px'}}  value="Vegan" control={<Radio style={{color:'#A5A5A5'}}/>} label="Vegan" />
      </RadioGroup>
</Grid>


<Grid sx={{width:'100%',height:'auto',borderRadius:'10px',border:'1px solid #000',display:'flex',padding:2,marginTop:'5%',flexDirection:'column'}}>
    <Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:'4%'}}>
     <Grid sx={{fontSize:'20px',fontWeight:500,lineHeight:'20px'}}>
     Qty.
     </Grid>
     <Grid sx={{fontSize:'20px',fontWeight:600,lineHeight:'20px',textDecoration:'underline'}}>
    Item Quantity
     </Grid>
     <Grid sx={{fontSize:'20px',fontWeight:500,lineHeight:'20px'}}>
    Price
     </Grid>
    </Grid>

    <Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      marginTop: "4%",
                    }}
                  />

                  <Grid sx={{fontSize:'22px',marginTop:'4%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  No Data Available
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      marginTop: "4%",
                    }}
                  />
                    <Button
                    onClick={handleViewCard}
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"52px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginTop:'6%',
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
              Add more quantity
              </Button>
          </Grid>





<Grid sx={{width:'100%',height:'auto',borderRadius:'10px',border:'1px solid #000',display:'flex',padding:2,marginTop:'4%',flexDirection:'column'}}>
<Grid sx={{fontSize:'20px',fontWeight:600,marginTop:'4%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'4%',textDecoration:'underline'}}>
Add on options
                  </Grid>
    <Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:'4%'}}>
     <Grid sx={{fontSize:'20px',fontWeight:500,lineHeight:'20px'}}>
   Add On
     </Grid>
     <Grid sx={{fontSize:'20px',fontWeight:500,lineHeight:'20px'}}>
    Price
     </Grid>
    </Grid>

    <Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      marginTop: "4%",
                    }}
                  />
  <Grid sx={{fontSize:'22px',marginTop:'4%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  No Data Available
                  </Grid>
                  <Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      marginTop: "4%",
                    }}
                  />
                    <Button
                   onClick={handleViewCard2}
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"52px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginTop:'6%',
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
              Add on more
              </Button>
</Grid>


<Grid>
<FormGroup style={{fontSize:'20px',marginTop:'4%'}} >
      <FormControlLabel style={{fontSize:'26px'}} control={<Checkbox  defaultChecked size="medium" />} label="Best Seller" />
      <FormControlLabel style={{fontSize:'26px'}}  control={<Checkbox size="medium" />} label="Chef recommened" />
    </FormGroup>
</Grid>


       <Button
                fullWidth
                style={{
                  border: "1px solid #4cd137",
                  borderColor: "#4cd137",
                  background:'#4cd137',
                  height:"52px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginTop:'4%',
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
              Save item
              </Button>

              <Button
                fullWidth
                style={{
                  border: "1px solid red",
                  borderColor: "red",
                  background:'red',
                  height:"52px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 700,
                  marginTop:'4%',
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
              Reset
              </Button>

           </Grid>
          </Grid>      
         </Grid>



         <Grid sx={{width:'50%'}}>
         <Grid sx={{fontSize:'26px',fontWeight:600,color:'#fff',marginLeft:'6%'}}>Menu Items</Grid>
            <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'2%'}}>
            <Grid sx={{width:'90%',height:'auto',border:'1px solid #E9E9E9',background:'#E9E9E9',borderRadius:'10px',color:'#000',display:'flex',flexDirection:"column"}}>
                <Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:2.5}}>
                   <Grid sx={{fontSize:'20px',fontWeight:600}}>category name</Grid>
                   <Grid sx={{fontSize:'20px',fontWeight:600}}>items</Grid>
                </Grid>
                <Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1.2px'
                    }}
                  />

<Grid sx={{padding:2.6}}>
<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'2%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid>
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid onClick={handleFood} sx={{fontSize:'26px',fontWeight:500,cursor:'pointer'}}>
{openDrawer2 ? (
                <AddIcon fontSize="small" />
              ) : (
                <RemoveIcon fontSize="small" />
              )}
</Grid>
</Grid>

{food?<></>:<Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Grid sx={{marginTop:'3.5%',width:'90%',maxHeight:'250px',overflow:'scroll',scrollbarWidth:'none'}}>
<Grid sx={{display:'flex',alignItems:'center'}}>
<Grid><Avatar alt="Remy Sharp" src={burgur} /></Grid>
<Grid sx={{marginLeft:'10%',fontSize:'16px',fontWeight:500}}>Ham Burger</Grid>
<Grid sx={{marginLeft:'auto',gap:6,display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600,color:'#00B412'}}>89/-</Grid>
<Grid><img src={dark} width={10}></img></Grid>
</Grid>
</Grid>
<Divider
                    style={{
                      backgroundColor: "#B4B4B4",
                      width:"100%",
                      height:'1px',
                      marginTop:'3%'
                    }}
                  />
        <Grid sx={{display:'flex',alignItems:'center',marginTop:'3%'}}>
<Grid><Avatar alt="Remy Sharp" src={burgur2} /></Grid>
<Grid sx={{marginLeft:'10%',fontSize:'16px',fontWeight:500}}>Cheese Burger</Grid>
<Grid sx={{marginLeft:'auto',gap:6,display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600,color:'#00B412'}}>102/-</Grid>
<Grid><img src={dark} width={10}></img></Grid>
</Grid>
</Grid>

<Divider
                    style={{
                      backgroundColor: "#B4B4B4",
                      width:"100%",
                      height:'1px',
                      marginTop:'3%'
                    }}
                  />
        <Grid sx={{display:'flex',alignItems:'center',marginTop:'3%'}}>
<Grid><Avatar alt="Remy Sharp" src={burgur3} /></Grid>
<Grid sx={{marginLeft:'10%',fontSize:'16px',fontWeight:500}}>Paneer Burger</Grid>
<Grid sx={{marginLeft:'auto',gap:6,display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600,color:'#00B412'}}>100/-</Grid>
<Grid><img src={dark} width={10}></img></Grid>
</Grid>
</Grid>


<Divider
                    style={{
                      backgroundColor: "#B4B4B4",
                      width:"100%",
                      height:'1px',
                      marginTop:'3%'
                    }}
                  />
        <Grid sx={{display:'flex',alignItems:'center',marginTop:'3%'}}>
<Grid><Avatar alt="Remy Sharp" src={burgur} /></Grid>
<Grid sx={{marginLeft:'10%',fontSize:'16px',fontWeight:500}}>Chicken Burger</Grid>
<Grid sx={{marginLeft:'auto',gap:6,display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600,color:'#00B412'}}>100/-</Grid>
<Grid><img src={dark} width={10}></img></Grid>
</Grid>
</Grid>

<Divider
                    style={{
                      backgroundColor: "#B4B4B4",
                      width:"100%",
                      height:'1px',
                      marginTop:'3%'
                    }}
                  />
        <Grid sx={{display:'flex',alignItems:'center',marginTop:'3%'}}>
<Grid><Avatar alt="Remy Sharp" src={burgur} /></Grid>
<Grid sx={{marginLeft:'10%',fontSize:'16px',fontWeight:500}}>Chicken Burger</Grid>
<Grid sx={{marginLeft:'auto',gap:6,display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600,color:'#00B412'}}>100/-</Grid>
<Grid><img src={dark} width={10}></img></Grid>
</Grid>
</Grid>


<Divider
                    style={{
                      backgroundColor: "#B4B4B4",
                      width:"100%",
                      height:'1px',
                      marginTop:'3%'
                    }}
                  />
        <Grid sx={{display:'flex',alignItems:'center',marginTop:'3%'}}>
<Grid><Avatar alt="Remy Sharp" src={burgur} /></Grid>
<Grid sx={{marginLeft:'10%',fontSize:'16px',fontWeight:500}}>Chicken Burger</Grid>
<Grid sx={{marginLeft:'auto',gap:6,display:'flex',alignItems:'center'}}>
<Grid sx={{fontSize:'18px',fontWeight:600,color:'#00B412'}}>100/-</Grid>
<Grid><img src={dark} width={10}></img></Grid>
</Grid>
</Grid>

</Grid>
</Grid>

                }

<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            





<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            




<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            





<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            






<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            






<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            





<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            






<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            





<Divider
                    style={{
                      backgroundColor: "#000",
                      width:"100%",
                      height:'1px',
                      marginTop:'5%'
                    }}
                  />

<Grid sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'5%'}}>
<Grid sx={{fontSize:'18px',fontWeight:500}}>
Burgers
</Grid>
<Grid >
<Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'54px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
              
                  
                }}
              >
             Edit
              </Button>
</Grid>
<Grid sx={{fontSize:'26px',fontWeight:500}}>
<AddIcon fontSize="small" />
</Grid>
</Grid>            

</Grid>
          </Grid>
          </Grid>
         </Grid>
        </Grid>     
    </Grid>
    {ViewQuantity()}
    {ViewAddOn()}
    </Grid>)
}