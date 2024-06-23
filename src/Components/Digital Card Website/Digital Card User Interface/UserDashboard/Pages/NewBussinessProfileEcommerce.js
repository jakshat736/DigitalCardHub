import { Grid, Divider, InputBase, IconButton, Button, Paper } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Container, useMediaQuery } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import add from "../UserAssets/add.png"
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function NewBussinessProfileEcommerce() {

    const matches = useMediaQuery("(max-width:1300px)");

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
          height: 'auto',
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
            fontSize:matches?'15px':"22px",
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
            width: matches?'100%':"30%",
          }}
        />
        <Grid
          sx={{
            marginTop: matches?'10%':"2%",
            width:'100%',
            display:'flex',
            justifyContent:'space-between',
            flexDirection:matches?"column":'row',
            alignItems:matches?'center':'normal',
            gap:matches?5:0

          }}>
         
         <Paper elevation={8}  sx={{width:matches?'100%':'20%',border:'1px solid #000',height:'auto',padding:2.4}}>
           <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize: "20px",fontWeight: 600,}}>
           Product 1
           </Grid>
           <Grid sx={{ display: "flex",marginTop:'6%'}}>
                <Avatar
                   variant="square"
                  src="/broken-image.jpg"
                  sx={{ width: matches?50:'5vw', height:matches?50:'5.3vw'}}
                />
                <Grid sx={{marginLeft:'5%'}}>
                    <Grid sx={{fontSize:'10px',fontWeight:600}}>
                    Upload product Image
                    </Grid>
                  <Grid>
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
                          marginTop:'3%',
                          borderColor: "#000",
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
                      textAlign:'center',
                    
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

<Grid sx={{marginTop:'3%'}}>
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
                      marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="Enter Your Product Name"
                  />
                </Grid>
            </Grid>






            <Grid sx={{marginTop:'2%'}}>
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
                    marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="enter about your product"
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
                marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1,fontSize:'10px'}}
                placeholder="Enter MRP"
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
                 marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 ,fontSize:'10px'}}
                placeholder="Enter Offer Price"
              />
            </Grid>
          </Grid>
        </Grid>



        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
            gap:1
          }}
        >
         
         <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    background:'#485AFF',
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <VisibilityIcon fontSize="small"/> View
                </Button>

                <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    background:'#FF2626',
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <DeleteIcon fontSize="small"/>  Remove
                </Button>
        </Grid>
         </Paper>

         <Paper elevation={8}  sx={{width:matches?'100%':'20%',border:'1px solid #000',height:'auto',padding:2.4}}>
           <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize: "20px",fontWeight: 600,}}>
           Product 1
           </Grid>
           <Grid sx={{ display: "flex",marginTop:'6%'}}>
                <Avatar
                   variant="square"
                  src="/broken-image.jpg"
                  sx={{ width: matches?50:'5vw', height:matches?50:'5.3vw'}}
                />
                <Grid sx={{marginLeft:'5%'}}>
                    <Grid sx={{fontSize:'10px',fontWeight:600}}>
                    Upload product Image
                    </Grid>
                  <Grid>
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
                          marginTop:'3%',
                          borderColor: "#000",
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
                      textAlign:'center',
                    
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

<Grid sx={{marginTop:'3%'}}>
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
                      marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="Enter Your Product Name"
                  />
                </Grid>
            </Grid>






            <Grid sx={{marginTop:'2%'}}>
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
                    marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="enter about your product"
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
                marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1,fontSize:'10px'}}
                placeholder="Enter MRP"
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
                 marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 ,fontSize:'10px'}}
                placeholder="Enter Offer Price"
              />
            </Grid>
          </Grid>
        </Grid>



        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
            gap:1
          }}
        >
         
         <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    background:'#485AFF',
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <VisibilityIcon fontSize="small"/> View
                </Button>

                <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    background:'#FF2626',
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <DeleteIcon fontSize="small"/>  Remove
                </Button>
        </Grid>
         </Paper>

         <Paper elevation={8}  sx={{width:matches?'100%':'20%',border:'1px solid #000',height:'auto',padding:2.4}}>
           <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize: "20px",fontWeight: 600,}}>
           Product 1
           </Grid>
           <Grid sx={{ display: "flex",marginTop:'6%'}}>
                <Avatar
                   variant="square"
                  src="/broken-image.jpg"
                  sx={{ width: matches?50:'5vw', height:matches?50:'5.3vw'}}
                />
                <Grid sx={{marginLeft:'5%'}}>
                    <Grid sx={{fontSize:'10px',fontWeight:600}}>
                    Upload product Image
                    </Grid>
                  <Grid>
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
                          marginTop:'3%',
                          borderColor: "#000",
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
                      textAlign:'center',
                    
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

<Grid sx={{marginTop:'3%'}}>
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
                      marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="Enter Your Product Name"
                  />
                </Grid>
            </Grid>






            <Grid sx={{marginTop:'2%'}}>
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
                    marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="enter about your product"
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
                marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1,fontSize:'10px'}}
                placeholder="Enter MRP"
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
                 marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 ,fontSize:'10px'}}
                placeholder="Enter Offer Price"
              />
            </Grid>
          </Grid>
        </Grid>



        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
            gap:1
          }}
        >
         
         <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    background:'#485AFF',
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <VisibilityIcon fontSize="small"/> View
                </Button>

                <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    background:'#FF2626',
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <DeleteIcon fontSize="small"/>  Remove
                </Button>
        </Grid>
         </Paper>

         <Paper elevation={8}  sx={{width:matches?'100%':'20%',border:'1px solid #000',height:'auto',padding:2.4}}>
           <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize: "20px",fontWeight: 600,}}>
           Product 1
           </Grid>
           <Grid sx={{ display: "flex",marginTop:'6%'}}>
                <Avatar
                   variant="square"
                  src="/broken-image.jpg"
                  sx={{ width: matches?50:'5vw', height:matches?50:'5.3vw'}}
                />
                <Grid sx={{marginLeft:'5%'}}>
                    <Grid sx={{fontSize:'10px',fontWeight:600}}>
                    Upload product Image
                    </Grid>
                  <Grid>
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
                          marginTop:'3%',
                          borderColor: "#000",
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
                      textAlign:'center',
                    
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

<Grid sx={{marginTop:'3%'}}>
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
                      marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="Enter Your Product Name"
                  />
                </Grid>
            </Grid>






            <Grid sx={{marginTop:'2%'}}>
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
                    marginTop:'-1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1,fontSize:'12px' }}
                    placeholder="enter about your product"
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
                marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1,fontSize:'10px'}}
                placeholder="Enter MRP"
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
                 marginTop:'-1%'
              }}
            >
              <InputBase
                style={{ color: "#000" }}
                sx={{ ml: 1, flex: 1 ,fontSize:'10px'}}
                placeholder="Enter Offer Price"
              />
            </Grid>
          </Grid>
        </Grid>



        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
            gap:1
          }}
        >
         
         <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    background:'#485AFF',
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <VisibilityIcon fontSize="small"/> View
                </Button>

                <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'30px',
                    color: "#fff",
                    fontSize:"12px",
                    fontWeight: 600,
                    background:'#FF2626',
                    textTransform: "none",
                    borderRadius: '6px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap:2
                  }}   fullWidth>
                <DeleteIcon fontSize="small"/>  Remove
                </Button>
        </Grid>
         </Paper>
        </Grid>

        <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid sx={{ width: "50%", marginTop:'5%'}}>
          <Button
                fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#0D0D0D',
                  height:"38px",
                  color: "#fff",
                  fontSize:matches?'9px':"16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'  
                }}
              >
           Add more Products
           <img src={add} width={matches?15:18} style={{marginLeft:'2%'}}></img>
              </Button>
        </Grid>
        </Grid>


        <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3%',marginBottom:'5%'}}>
                        <Button
                           style={{
                            border:'1px solid #289B00',
                            borderColor:'#289B00',
                            background:'#289B00',
                            width:'50%',
                            height:matches?'32px':'40px',
                            lineHeight:'36px',       
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: '10px',
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor:'-moz-grab'
                          }}>
                        Save
                        </Button> 
</Grid>

      </Grid>
    </Grid>
  );
}
