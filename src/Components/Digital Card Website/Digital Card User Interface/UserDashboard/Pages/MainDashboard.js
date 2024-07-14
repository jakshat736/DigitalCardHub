import {  useMediaQuery, Button, Divider, Grid, Dialog, Paper, InputBase, IconButton } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import eye from "../../../Digital Card Assets/eyes.png"
import g from "../../../Digital Card Assets/google.png"
import personal from "../../../Digital Card Assets/personal.png"
import links from "../../../Digital Card Assets/links.png"
import service from "../../../Digital Card Assets/service.png"
import SearchIcon from "@mui/icons-material/Search";
import social1 from "../../../Digital Card Assets/social1.png"
import social2 from "../../../Digital Card Assets/social2.png"
import crose from "../../../Digital Card Assets/crossss.png"
import social3 from "../../../Digital Card Assets/social3.png"
import a from "../../../Digital Card Assets/a.png"
import Switch from '@mui/material/Switch';
import * as React from 'react';
import { useState } from "react";

export default function MainDashboard()
{
    const [checked, setChecked] = React.useState(true);
    const matches = useMediaQuery("(max-width:1200px)");
    const matchesA = useMediaQuery("(max-width:700px)");
    const matchesB = useMediaQuery("(max-width:600px)");


    const matches1 = useMediaQuery("(max-width:1000px)");
    const matches2 = useMediaQuery("(max-width:700px)");
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [all,setAll]= useState(false)
      const handleAll = () => {
        setAll(true);
      };
      const handleCloseAll = () => {
        setAll(false);
      };
    

    

      
    const Tag = () => {
        return (
          <Dialog
          fullWidth
          maxWidth={false}
            PaperProps={{
              style: {
                width:matches1?'98%':'60%',
                height: 'auto',
                borderRadius: 10,
                backgroundImage: "radial-gradient(#f5f6fa,#fff)",
              },
            }}
            open={all}
            onClose={handleCloseAll}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
            <Grid sx={{display:'flex',justifyContent:"space-between",alignItems:'center',padding:matches1?2:3,background:'#000'}}>
            <Grid sx={{fontSize:matches2?'20px':'24px',fontWeight:600,color:'#fff'}}>
            Tag Activation
            </Grid>
            <Grid>
                <img src={crose} width={matches2?15:20}  onClick={handleCloseAll}  style={{cursor:'pointer'}}></img>
            </Grid>
             </Grid>

             <Divider
              style={{
                background:'#000',
                color:'#000',
                height:matches2?'1px':'2px'
              }}
            />
               <Grid sx={{width:'100%',fontSize:'16px',marginTop:'3%',display:'flex',alignItems:'center',justifyContent:'center',color:'#000'}}>
               Activate your google reviews and social media tags from here.
               </Grid>
             <Grid sx={{padding:matches1?2:3,width:'100%',marginTop:'1%'}}>
            <Grid sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
               <Grid sx={{fontSize:'22px',fontWeight:500}}>
               Tag List
               </Grid>
               <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: matchesA?'100%':300,
                borderRadius: 4,
                height: 38,
                background: "transparent",
                border: "1px solid #000",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#000", fontSize: "14px" }}
                placeholder="Enter search......."
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon style={{ color: "#000" }} />
              </IconButton>
            </Paper>
            </Grid>

<Grid sx={{border:'1px solid #000',width:'100%',height:350,borderRadius:'15px',background:'#fff',marginTop:'3%',padding:matches?1:2,color:'#000',overflow:'scroll',scrollbarWidth:'none'}}>
<Grid sx={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
    <Grid sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
    Tag Id
    </Grid>
    <Grid  sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
    Tag status
    </Grid>
    <Grid  sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
    Action
    </Grid>
</Grid>

    <Divider
              style={{
                background:'#000',
                color:'#000',
                height:'1.4px',
                marginTop:'1.5%'
              }}
            />


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400}}>
    asdf21
    </Grid>
    <Grid>
    <Button
                  style={{
                    border: "1px solid #FFEBDF",
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
                Inactive
                </Button>
    </Grid>
    <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'100px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Change
              </Button>
</Grid>


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400}}>
   hA867
    </Grid>
    <Grid >
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
                Active
                </Button>
    </Grid>
    <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'100px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Change
              </Button>
</Grid>


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400}}>
   HA867
    </Grid>
    <Grid >
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
                Active
                </Button>
    </Grid>
    <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'100px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Change
              </Button>
</Grid>



<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400}}>
    Ankit56
    </Grid>
    <Grid  >
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
                Active
                </Button>
    </Grid>
    <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'100px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Change
              </Button>
</Grid>


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400}}>
    Ankit56
    </Grid>
    <Grid  >
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
                Active
                </Button>
    </Grid>
    <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'100px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Change
              </Button>
</Grid>



<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400}}>
    Ankit56
    </Grid>
    <Grid  >
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
                Active
                </Button>
    </Grid>
    <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'100px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Change
              </Button>
</Grid>



<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400}}>
    Ankit56
    </Grid>
    <Grid  >
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
                Active
                </Button>
    </Grid>
    <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:"34px",
                  width:'100px',
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             Change
              </Button>
</Grid>


</Grid>


             </Grid>
            </Grid>
          </Dialog>
        );
      };
    
    

    return(<Grid sx={{width:'100%',height:'auto',backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
        <Navbar/>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%',height:'auto',marginTop:'2%'}}>
            <Grid sx={{fontSize:matches?'18px':'28px',fontWeight:700,color:'#fff'}}>Business profile dashboard</Grid>
          <Grid sx={{width:'90%',height:'auto',border:'1px solid #fff',borderRadius:'10px',marginTop:'1.5%',color:'#fff'}}>
            <Grid sx={{width:'100%',height:matchesA?'auto':'12vh',padding:2,display:'flex',justifyContent:'space-between',flexDirection:matchesA?'column':'row',alignItems:'center'}}>
              <Grid>
                <Grid sx={{fontSize:matchesA?'20px':matches?'14px':'24px',fontWeight:500,textAlign:matchesA?'center':''}}>
                Company name
                </Grid>
                <Grid sx={{fontSize:matches?'16px':'32px',fontWeight:700,marginTop:'1%',textAlign:matchesA?'center':''}}>
                iBuzz6
                </Grid>
              </Grid>

              <Grid sx={{marginTop:matchesA?'2%':''}}>
                <Grid sx={{fontSize:matchesA?'20px':matches?'14px':'24px',fontWeight:500,textAlign:matchesA?'center':''}}>
                Created on
                </Grid>
                <Grid sx={{fontSize:matches?'16px':'32px',fontWeight:700,marginTop:'1%',textAlign:matchesA?'center':''}}>
                June 24
                </Grid>
              </Grid>

              <Grid sx={{display:'flex',alignItems:'center',gap:matchesA?1:3,marginTop:matchesA?'4%':''}}>
              <Button
                style={{
                  border: "1px solid #fff",
                  borderColor: "#fff",
                  background:'transparent',
                  width:matches?'110px':'212px',
                  height:matches?'35px':"45px",
                  color: "#fff",
                  fontSize: matches?'14px':"16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
            Switch profile
              </Button>

              <Button
                
                style={{
                  border: "1px solid #000",
                  borderColor: "#fff",
                  background:'#fff',
                  height:matches?'35px':"45px",
                  color: "#000",
                  width:matches?'180px':'212px',
                  fontSize:matches?'14px': "16px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={eye} width={18}></img> <div style={{marginLeft:'6%'}}>Preview card</div>
              </Button>

              </Grid>

            </Grid>

            <Divider
            style={{
              backgroundColor: "#fff",
            }}
          />
          
          <Grid sx={{width:'100%',padding:3,height:'auto',display:'flex',flexDirection:matches?'column':'row'}}>
            <Grid sx={{width:matches?'100%':'45%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
          <Grid sx={{fontSize:'24px',fontWeight:500,color:'#fff'}}>
                        Tage
          </Grid>
           <Grid sx={{width:'100%',height:'44vh',marginTop:'2%',border:'1px solid #fff',borderRadius:'10px',padding:matchesA?1:2,overflow:'scroll',scrollbarWidth:'none'}}>
                <Grid  onClick={handleAll} sx={{cursor:'pointer',width:'100%',height:'10vh',border:'1px solid #000',background:'#D9D9D9',borderRadius:'10px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'17px',fontWeight:700,lineHeight:'22px'}}>
                        Review Tags
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'15px'}}>
                        Activate your google review / social media card from here
                        </Grid>
                    </Grid>
                    <Grid sx={{width:'40%'}}>
                    <Button
                 fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matchesA?'35px':"45px",
                  color: "#ffff",
                  fontSize:matchesA?'14px': "20px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={g} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 

                <Grid  sx={{width:'100%',cursor:'pointer',height:'10vh',cursor:'pointer',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'10px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'17px',fontWeight:700,lineHeight:'22px'}}>
                        Vehicle Tags
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'15px'}}>
                        Activate your google review / social media card from here
                        </Grid>
                    </Grid>
                    <Grid sx={{width:'40%'}}>
                    <Button
                 fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matchesA?'35px':"45px",
                  color: "#ffff",
                  fontSize: matchesA?'14px':"20px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={g} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 


                <Grid sx={{width:'100%',height:'10vh',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'10px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'17px',fontWeight:700,lineHeight:'22px'}}>
                        Multi Tags
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'15px'}}>
                        Activate your google review / social media card from here
                        </Grid>
                    </Grid>
                    <Grid sx={{width:'40%'}}>
                    <Button
                 fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matchesA?'35px':"45px",
                  color: "#ffff",
                  fontSize: matchesA?'14px':"20px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={g} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 


                <Grid sx={{width:'100%',height:'10vh',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'10px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'17px',fontWeight:700,lineHeight:'22px'}}>
                        Vehicle Tags
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'12px',fontWeight:400,lineHeight:'15px'}}>
                        Activate your google review / social media card from here
                        </Grid>
                    </Grid>
                    <Grid sx={{width:'40%'}}>
                    <Button
                 fullWidth
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matchesA?'35px':"45px",
                  color: "#ffff",
                  fontSize: matchesA?'14px':"20px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={g} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 

           </Grid>
          </Grid>

            <Grid sx={{width:matches?'100%':'50%',display:'flex',justifyContent:'center',color:'#fff',flexDirection:'column',alignItems:'center',marginLeft:'auto',marginTop:matches?'5%':''}}>
          <Grid sx={{fontSize:'24px',fontWeight:500,color:'#fff'}}>
          Update Profile        
          </Grid>
           <Grid sx={{width:'100%',height:matchesA?"auto":'16vh',marginTop:'2%',border:'1px solid #fff',borderRadius:'10px',padding:3,display:'flex',justifyContent:'space-around',gap:matchesA?4:'',flexDirection:matchesA?'column':'row',alignItems:'center'}}>
            <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Grid>
                  <img src={personal} width={50}></img>
                </Grid>
                <Grid sx={{fontSize:'16px',fontWeight:500,marginTop:'1.5%'}}>
                Personal Details
                </Grid>
            </Grid>
            <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Grid>
                  <img src={links} width={50}></img>
                </Grid>
                <Grid sx={{fontSize:'16px',fontWeight:500,marginTop:'1.5%'}}>
                Social links
                </Grid>
            </Grid>

            <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Grid>
                  <img src={service} width={50}></img>
                </Grid>
                <Grid sx={{fontSize:'16px',fontWeight:500,marginTop:'1.5%'}}>
                Services/Products
                </Grid>
            </Grid>
       </Grid>
       <Grid sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:matchesA?4:'',flexDirection:matchesA?'column':'row',marginTop:matchesA?'12%':'4%'}}>
          <Grid sx={{width:matchesA?'150px':'130px',height:matchesA?'200px':'180px',border:'1px solid #fff',background:'#fff',padding:2,gap:1,borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <Grid>
                <img src={social1} width={60}></img>
            </Grid>
            <Grid sx={{fontSize:'16px',fontWeight:500,color:'#000',textAlign:'center'}}>
            Social Insights
            </Grid>

            <Grid sx={{fontSize:'12px',fontWeight:400,color:'#707070',display:'flex',alignItems:'center'}}>
            see now  <img src={a} width={6} style={{marginTop:'4%'}}></img>
            </Grid>
          </Grid>


          <Grid sx={{width:matchesA?'150px':'130px',height:matchesA?'200px':'180px',border:'1px solid #fff',background:'#fff',padding:2,gap:1,borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <Grid>
                <img src={social2} width={60}></img>
            </Grid>
            <Grid sx={{fontSize:'16px',fontWeight:500,color:'#000',textAlign:'center'}}>
            Enquiries
            </Grid>

            <Grid sx={{fontSize:'12px',fontWeight:400,color:'#707070',display:'flex',alignItems:'center'}}>
            see now  <img src={a} width={6} style={{marginTop:'4%'}}></img>
            </Grid>
          </Grid>

          <Grid sx={{width:matchesA?'150px':'130px',height:matchesA?'200px':'180px',border:'1px solid #fff',background:'#fff',padding:2,gap:1,borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <Grid>
                <img src={social3} width={60}></img>
            </Grid>
            <Grid sx={{fontSize:'16px',fontWeight:500,color:'#000',textAlign:'center'}}>
            Invitations
            </Grid>

            <Grid sx={{fontSize:'12px',fontWeight:400,color:'#707070',display:'flex',alignItems:'center'}}>
            see now  <img src={a} width={6} style={{marginTop:'4%'}}></img>
            </Grid>
          </Grid>

          <Grid sx={{width:matchesA?'150px':'130px',height:matchesA?'200px':'180px',border:'1px solid #fff',background:'#fff',padding:2,gap:1,borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <Grid>
            <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
            </Grid>
            <Grid sx={{fontSize:'16px',fontWeight:500,color:'#000',textAlign:'center'}}>
            Show enquiry form
            </Grid>
          </Grid>

       </Grid>
   </Grid>
</Grid>
          </Grid>
            <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:400,color:'#fff',marginTop:'3.2%',textAlign:'center'}}>Copyrights © 2024 Powered By IndiaBuzz</Grid>
        </Grid>
        {Tag()}
    </Grid>)
}