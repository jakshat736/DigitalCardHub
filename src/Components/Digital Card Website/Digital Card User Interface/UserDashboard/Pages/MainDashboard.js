import {  useMediaQuery, Button, Divider, Grid, Dialog, Paper, InputBase, IconButton, RadioGroup, FormControlLabel } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import eye from "../../../Digital Card Assets/eyes.png"
import g from "../../../Digital Card Assets/google.png"
import ankit from "../../../Digital Card Assets/ankit.jpg"
import eyem from "../../../Digital Card Assets/eyem.png"
import personal from "../../../Digital Card Assets/personal.png"
import right from "../../../Digital Card Assets/right123.png"
import contact from "../../../Digital Card Assets/contact.png"
import links from "../../../Digital Card Assets/links.png"
import Avatar from '@mui/material/Avatar';
import ringm from "../../../Digital Card Assets/ringm.png"
import Radio from '@mui/material/Radio';
import service from "../../../Digital Card Assets/service.png"
import close from "../../../Digital Card Assets/cross.png"
import gg from "../../../Digital Card Assets/g.png"
import h from "../../../Digital Card Assets/h.png"
import edit from "../../../Digital Card Assets/edit.png"
import Checkbox from '@mui/material/Checkbox';
import count2 from "../../../Digital Card Assets/count2.png"
import vehical from "../../../Digital Card Assets/vehical.png"
import restaurantdetailsnew from "../../../Digital Card Assets/restaurantnew.png"
import invite from "../../../Digital Card Assets/invite.png"
import multinew from "../../../Digital Card Assets/multi.png"
import door from "../../../Digital Card Assets/door.png"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import social1 from "../../../Digital Card Assets/social1.png"
import social2 from "../../../Digital Card Assets/social2.png"
import CloseIcon from '@mui/icons-material/Close';
import crose from "../../../Digital Card Assets/crossss.png"
import social3 from "../../../Digital Card Assets/appoint.png"
import link2 from "../../../Digital Card Assets/link2.png"
import a from "../../../Digital Card Assets/a.png"
import i from "../../../Digital Card Assets/enquaryss.png"
import deletes from "../../../Digital Card Assets/delete.png"
import Switch from '@mui/material/Switch';
import * as React from 'react';
import { useState } from "react";
import images1 from "../../../Digital Card Assets/pic.png"
import images2 from "../../../Digital Card Assets/pic2.png"
import images3 from "../../../Digital Card Assets/pic3.png"

import green from "../../../Digital Card Assets/grren.png"
import red from "../../../Digital Card Assets/red.png"


export default function MainDashboard()
{     
    const [checked, setChecked] = React.useState(true);
    const matches = useMediaQuery("(max-width:1200px)");
    const matchesA = useMediaQuery("(max-width:700px)");
    const matchesB = useMediaQuery("(max-width:600px)");


    const matches1 = useMediaQuery("(max-width:1000px)");
    const matches2 = useMediaQuery("(max-width:700px)");

    var navigate= useNavigate()

    const handleInvitation=()=>{
      navigate('/invitationpage')
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleMenu=()=>{
      navigate('/newmenudashboard')
    }

    const handleVehical=()=>{
      navigate('/vehicle')
    }

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [tage,setTage]= useState(false)
    const [multiTage,setMultiTage]= useState(false)
    const [multiaddlink,setMultiaddlink]= useState(false)
    const [AddNewLink,setAddNewLink]= useState(false)
    const [addLink,setAddLink]= useState(false)
    const [switchs,setSwitches]= useState(false)
    const [links,setLinks]= useState(false)
    const [social,setSocial]= useState(false)
    const [count,setCount]= useState(false)
    const [countm,setCountm]= useState(false)
    const [create2,setCreate2]= useState(false)
    const [appoint,setAppoint]= useState(false)
    const [createAppoint,setCreateAppoint]= useState(false)
    const [updateProfile,setUpdateProfile]= useState(false)
    const [enquary,setEnquary]= useState(false)

    const handleCreate2 = () => {
      setCreate2(true);
    };
    const handleCloseCreate2 = () => {
      setCreate2(false);
    };

    const handleEnquary = () => {
      setEnquary(true);
    };
    const handleCloseEnquary = () => {
      setEnquary(false);
    };

    const handleUpdateProfileDetail = () => {
      setUpdateProfile(true);
    };
    const handleCloseUpdateProfileDetail = () => {
      setUpdateProfile(false);
    };
    
    const handleCreateAppointment = () => {
      setCreateAppoint(true);
    };
    const handleCloseCreateAppointment = () => {
      setCreateAppoint(false);
    };
    

    const handleAppointment = () => {
      setAppoint(true);
    };
    const handleCloseAppointment = () => {
      setAppoint(false);
    };
    

      const handleTage = () => {
        setTage(true);
      };
      const handleCloseTage = () => {
        setTage(false);
      };

      const handleSocial = () => {
        setSocial(true);
      };
      const handleCloseSocial = () => {
        setSocial(false);
      };

      const handleAddNewLinks = () => {
        setAddNewLink(true);
      };
      const handleCloseAddNewLinks = () => {
        setAddNewLink(false);
      };

      const handleCount = () => {
        setCount(true);
      };
      const handleCloseCount = () => {
        setCount(false);
      };

      const handleCountm = () => {
        setCountm(true);
      };
      const handleCloseCountm = () => {
        setCountm(false);
      };

      
      const handleMultiTage = () => {
        setMultiTage(true);
      };
      const handleCloseMultiTage = () => {
        setMultiTage(false);
      };
    
      const handleLinks = () => {
        setLinks(true);
      };
      const handleCloseLinks = () => {
        setLinks(false);
      };

      const handleMultiAddLink = () => {
        setMultiaddlink(true);
      };
      const handleCloseMultiAddLink  = () => {
        setMultiaddlink(false);
      };
    
      const handleAddLink = () => {
        setAddLink(true);
      };
      const handleCloseAddLinks = () => {
        setAddLink(false);
      };
    
      const handleSwitch = () => {
        setSwitches(true);
      };
      const handleCloseSwitch = () => {
        setSwitches(false);
      };



          
    const Success = () => {
      return (
        <Dialog
          PaperProps={{
            style: {
              width: matches ? "100%" : '60%',
              height: matches ? 'auto' : 340,
              borderRadius: 10,
              background:'#ecf0f1'
            },
          }}
          open={create2}
          onClose={handleCloseCreate2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Grid sx={{ width: '100%',color:'#000',background:'#f5f6fa'}}>
          <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                <Grid onClick={handleCloseCreate2}
                  aria-label="close"
                  sx={{
                    position: "absolute",
                    right: 10,
                    top: 16,
                    color: "inherit",
                    cursor: 'pointer'
                  }}>
                 <CloseIcon fontSize="medium" sx={{color:'#000'}}/>
                </Grid>
              </Grid>
              <Grid sx={{padding:2}}>
            <Grid sx={{display:'flex',marginTop:'-5%',alignItems:'center',flexDirection:'column',border:'1px solid #fff',borderRadius:'4px',justifyContent:'center',background:'#f5f6fa'}}>
              <Grid><img src={right} width={200} ></img></Grid>
              <Grid sx={{fontSize:'20px',fontWeight:500,width:'60%',lineHeight:'22px',textAlign:'center'}}>
              Link added Successfully
              </Grid>
              
      </Grid>          
    </Grid>
  </Grid>
        </Dialog>
      );
    };
 


      const SwitchProfile = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '30%',
                height: matches ? 550 : 600,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={switchs}
            onClose={handleCloseSwitch}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%',color:'#000'}}>
              <Grid sx={{width:'100%',height:60,display:'flex',justifyContent:'center',alignItems:'center',background:'#2d3436',color:'#fff'}}>
                <Grid sx={{fontSize:'18px',fontWeight:500,}}>Switch to another profile</Grid>
              </Grid>
              <Grid sx={{padding:3,display:'flex',alignItems:'center',marginTop:'1%',justifyContent:'space-between'}}>
                  <Grid sx={{fontSize:'24px',fontWeight:600}}>Profile</Grid>
                  <Grid>
                  <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: 35,
                        width:'150px',
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 500,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    Create new +
                    </Button>
                  </Grid>
              </Grid>
              <Divider
              style={{
                background:'#b2bec3',
                height:'2px'
              }}
            />
            <Grid sx={{padding:3,display:'flex',alignItems:'center'}}>
             <Grid><img src={images1} width={38}></img></Grid>
             <Grid sx={{marginLeft:'4%'}}>
              <Grid sx={{fontSize:'22px',fontWeight:600}}>Eat Healthy</Grid>
              <Grid sx={{fontSize:'12px',fontWeight:400,marginTop:'1%',color:"#565656"}}>Restaurant Profile</Grid>
             </Grid>

            </Grid>
            <Divider
              style={{
                background:'#b2bec3',
                height:'2px'
              }}
            />
               <Grid sx={{padding:3,display:'flex',alignItems:'center'}}>
             <Grid><img src={images2} width={38}></img></Grid>
             <Grid sx={{marginLeft:'4%'}}>
              <Grid sx={{fontSize:'22px',fontWeight:600}}>Ibuzz Tech</Grid>
              <Grid sx={{fontSize:'12px',fontWeight:400,marginTop:'1%',color:"#565656"}}>YouTube Channel</Grid>
             </Grid>

            </Grid>
            <Divider
              style={{
                background:'#b2bec3',
                height:'2px'
              }}
            />
               <Grid sx={{padding:3,display:'flex',alignItems:'center'}}>
             <Grid><img src={images3} width={38}></img></Grid>
             <Grid sx={{marginLeft:'4%'}}>
              <Grid sx={{fontSize:'22px',fontWeight:600}}>Kaledico creation</Grid>
              <Grid sx={{fontSize:'12px',fontWeight:400,marginTop:'1%',color:"#565656"}}>Business Profile</Grid>
             </Grid>

            </Grid>
            <Divider
              style={{
                background:'#b2bec3',
                height:'2px'
              }}
            />
<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20%'}}>
                 <Button  onClick={handleCloseSwitch}
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: 50,
                        width:'100px',
                        color: "#000",
                        fontSize: "20px",
                        fontWeight: 500,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    Close
                    </Button>
                    </Grid>
            </Grid>
    
          </Dialog>
        );
      };
   





      const SocialInsight = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '26%',
                height: matches ? 550 : 650,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={social}
            onClose={handleCloseSwitch}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%',color:'#000'}}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#2d3436' }}>
                  <Grid sx={{ fontSize: matches ? '20px' : '24px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Social Insights</Grid>
                  <Grid onClick={handleCloseSocial}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="medium" sx={{color:'#fff'}}/>
                  </Grid>
                </Grid>
                <Grid sx={{display:'flex',justifyContent:'space-around',width:'100%',marginTop:'8%'}}>
                  <Grid sx={{display:'flex',textAlign:'center',flexDirection:'column'}}>
                   <Grid sx={{fontSize:matches2?'20px':'24px',fontWeight:500}}>
                   whatsapp
                   </Grid>
                   <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2.5%',color:'#767676',textAlign:'center'}}>
                   <Grid sx={{fontSize:matches2?'30px':'38px',fontWeight:700}}>
                   72
                   </Grid>
                   <Grid>
                    <img src={green} width={matches2?30:40}></img>
                   </Grid>
                   </Grid>
                   <Grid sx={{marginTop:'2.5%',fontSize:'20px',fontWeight:500,color:'#353535'}}>
                   No. of clicks.
                    </Grid>
                   <Grid sx={{marginTop:'3.2%'}}>
                   <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height:matches2?'30px':38,
                        color: "#fff",
                        fontSize: matches2?'12px':'14px',
                        width:matches2?'120px':'150px',
                        fontWeight: 400,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    See analytics <ArrowRightIcon fontSize="medium"/>
                    </Button>
                   </Grid>
                   </Grid>



                   <Grid sx={{display:'flex',textAlign:'center',flexDirection:'column'}}>
                   <Grid sx={{fontSize:matches2?'20px':'24px',fontWeight:500}}>
                   Instagram
                   </Grid>
                   <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2.5%',color:'#767676',textAlign:'center'}}>
                   <Grid sx={{fontSize:matches2?'30px':'38px',fontWeight:700}}>
                   56
                   </Grid>
                   <Grid>
                    <img src={green} width={matches2?'30px':40}></img>
                   </Grid>
                   </Grid>
                   <Grid sx={{marginTop:'2.5%',fontSize:'20px',fontWeight:500,color:'#353535'}}>
                   No. of clicks.
                    </Grid>
                   <Grid sx={{marginTop:'3.2%'}}>
                   <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height:matches2?'30px':38,
                        color: "#fff",
                        fontSize:matches2?'12px': '14px',
                        width:matches2?'120px':'150px',
                        fontWeight: 400,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    See analytics <ArrowRightIcon fontSize="medium"/>
                    </Button>
                   </Grid>
                   </Grid>
                </Grid>



             
                <Grid sx={{display:'flex',justifyContent:'space-around',width:'100%',marginTop:'8%'}}>
                  <Grid sx={{display:'flex',textAlign:'center',flexDirection:'column'}}>
                   <Grid sx={{fontSize:matches2?'20px':'24px',fontWeight:500}}>
                   LinkedIn
                   </Grid>
                   <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2.5%',color:'#767676',textAlign:'center'}}>
                   <Grid sx={{fontSize:matches2?'30px':'38px',fontWeight:700}}>
                   22
                   </Grid>
                   <Grid>
                    <img src={red} width={matches2?30:40}></img>
                   </Grid>
                   </Grid>
                   <Grid sx={{marginTop:'2.5%',fontSize:'20px',fontWeight:500,color:'#353535'}}>
                   No. of clicks.
                    </Grid>
                   <Grid sx={{marginTop:'3.2%'}}>
                   <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height:matches2?'30px':38,
                        color: "#fff",
                        fontSize:matches2?'12px': '14px',
                        width:matches2?'120px':'150px',
                        fontWeight: 400,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    See analytics <ArrowRightIcon fontSize="medium"/>
                    </Button>
                   </Grid>
                   </Grid>



                   <Grid sx={{display:'flex',textAlign:'center',flexDirection:'column'}}>
                   <Grid sx={{fontSize:matches2?'20px':'24px',fontWeight:500}}>
                   FaceBook
                   </Grid>
                   <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2.5%',color:'#767676',textAlign:'center'}}>
                   <Grid sx={{fontSize:matches2?'30px':'38px',fontWeight:700}}>
                   28
                   </Grid>
                   <Grid>
                    <img src={red} width={matches2?30:40}></img>
                   </Grid>
                   </Grid>
                   <Grid sx={{marginTop:'2.5%',fontSize:'20px',fontWeight:500,color:'#353535'}}>
                   No. of clicks.
                    </Grid>
                   <Grid sx={{marginTop:'3.2%'}}>
                   <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height:matches2?'30px':38,
                        color: "#fff",
                        fontSize:matches2?'12px': '14px',
                        width:matches2?'120px':'150px',
                        fontWeight: 400,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    See analytics <ArrowRightIcon fontSize="medium"/>
                    </Button>
                   </Grid>
                   </Grid>
                </Grid>

                <Grid sx={{display:'flex',justifyContent:'space-around',width:'100%',marginTop:'8%'}}>
                <Grid sx={{display:'flex',textAlign:'center',flexDirection:'column'}}>
                   <Grid sx={{fontSize:matches2?'20px':'24px',fontWeight:500}}>
                   Contact Download
                   </Grid>
                   <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2.5%',color:'#767676',textAlign:'center'}}>
                   <Grid sx={{fontSize:matches2?'30px':'38px',fontWeight:700}}>
                   182
                   </Grid>
                   <Grid>
                    <img src={green} width={matches2?30:40}></img>
                   </Grid>
                   </Grid>
                   <Grid sx={{marginTop:'2.5%',fontSize:'20px',fontWeight:500,color:'#353535'}}>
                   No. of clicks.
                    </Grid>
                   <Grid sx={{marginTop:'3.2%'}}>
                   <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height:matches2?'30px':38,
                        color: "#fff",
                        fontSize: matches2?'12px':'14px',
                        width:matches2?'120px':'150px',
                        fontWeight: 400,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    See analytics <ArrowRightIcon fontSize="medium"/>
                    </Button>
                   </Grid>
                   </Grid>
</Grid>



           </Grid>
          </Dialog>
        );
      };



      

      const CreateAppointment = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '30%',
                height: matches ? 400 : 420,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={createAppoint}
            onClose={handleCloseCreateAppointment}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%',color:'#000'}}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#2d3436' }}>
                  <Grid sx={{ fontSize: matches ? '20px' : '24px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Tag Count / Tap</Grid>
                  <Grid onClick={handleCloseCreateAppointment}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="medium" sx={{color:'#fff'}}/>
                  </Grid>
                </Grid>
                <Grid sx={{display: 'flex',padding:3, marginTop:'2%',flexDirection:'column'}}>
                <Grid sx={{fontSize:'14px',fontWeight:500,lineHeight:'26px'}}>
                  Name
                </Grid>
             
               <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: matches2?'30px':"40px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000",fontSize:'12px' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your Name"
                />
              </Grid>

              <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
              <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: matches2?'30px': "40px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000",fontSize:'12px' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your Name"
                />
                 <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                >
                <img src={gg} width={15}></img>
                </IconButton>
              </Grid>

              <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height:  matches2?'30px':"40px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000",fontSize:'12px' }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your Name"
                />
                 <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                >
                <img src={h} width={15}></img>
                </IconButton>
              </Grid>
              </Grid>

              <Grid sx={{display:'flex',padding:1,justifyContent:matches1?'center':'space-between',flexDirection:matches1?'column':'row',width:'100%',height:matches1?'auto':60,background:'#D6D6D6',borderRadius:'15px',marginTop:'5%'}}>
             <Grid sx={{display:'flex',alignItems:'center',width:matches1?'100%':'50%'}}><Grid><img src={ringm} width={25} style={{marginTop:'14%'}}></img></Grid><Grid sx={{fontSize:'15px',marginLeft:'3%',fontWeight:500}}>mobile notifiation :</Grid> </Grid><Grid>
             <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
             </Grid>
              </Grid>
              <Button
                      style={{
                        marginTop:'5%',
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: matchesB ? 35 : '40px',
                        color: "#fff",
                        fontSize: matchesB ? '14px' : "1.3vw",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    Create
                    </Button>
               <Grid sx={{fontSize:'14px',fontWeight:300,color:'#000',textAlign:'center',lineHeight:'18px',marginTop:'2%'}}>
               create a new appointment by filling necessary information into it.
               </Grid>
              </Grid>
               </Grid>
          </Dialog>
        );
      };
  
   




      const Count = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '26%',
                height: matches ? 280 : 300,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={count}
            onClose={handleCloseCount}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%',color:'#000'}}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#2d3436' }}>
                  <Grid sx={{ fontSize: matches ? '20px' : '24px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Tag Count / Tap</Grid>
                  <Grid onClick={handleCloseCount}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="medium" sx={{color:'#fff'}}/>
                  </Grid>
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'center', marginTop:'2%', alignItems: 'center',flexDirection:'column'}}>
               <Grid sx={{fontSize:'110px',fontWeight:700,color:'#000'}}>
                    0
               </Grid>
               <Grid sx={{fontSize:'20px',fontWeight:400,color:'#000',textAlign:'center',marginTop:'1.5%',width:'40%'}}>
               no. of tap on your tag this week.
               </Grid>
               </Grid>
               
               </Grid>
          </Dialog>
        );
      };
   


      const CountForMulti = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '26%',
                height: matches ? 280 : 300,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={countm}
            onClose={handleCloseCountm}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%',color:'#000'}}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#2d3436' }}>
                  <Grid sx={{ fontSize: matches ? '20px' : '24px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Tag Count / Tap</Grid>
                  <Grid onClick={handleCloseCountm}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="medium" sx={{color:'#fff'}}/>
                  </Grid>
                </Grid>
                <Grid sx={{display: 'flex', justifyContent: 'center', marginTop:'2%',alignItems: 'center',flexDirection:'column'}}>
               <Grid sx={{fontSize:'110px',fontWeight:700,color:'#000'}}>
                    0
               </Grid>
               <Grid sx={{fontSize:'20px',fontWeight:400,color:'#000',textAlign:'center',marginTop:'1.5%',width:'40%'}}>
               no. of tap on your tag this week.
               </Grid>
               </Grid>
               
               </Grid>
          </Dialog>
        );
      };
   













      const TageLinks = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '28%',
                height: matches ? 'auto' : 270,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={links}
            onClose={handleCloseLinks}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: matches ? 'auto' : 260 }}>
              <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#ecf0f1' }}>
                <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fff', background: '#ecf0f1' }}>
                  <Grid sx={{ fontSize: matches ? '20px' : '26px', fontWeight: 600, lineHeight: '36px', color: '#000', marginLeft: '2%', marginTop: '-.5%' }}>Edit Tag</Grid>
                  <Grid onClick={handleCloseLinks}
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
                <Grid sx={{ marginTop:matches2?'':'1%', }}>
                    <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                    Tag link
                    </Grid>
                    <Grid sx={{ display: 'flex', alignItems: "center",marginTop:'2%' }}>
              <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "45px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your tag link here"
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                >
                <img src={i} width={25}></img>
                </IconButton>
              </Grid>
                   
               
                </Grid>
    </Grid>
    
    
                  <Grid sx={{ display: 'flex', marginTop: '5%' }}>
                    <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: matchesB ? 45 : '2.7vw',
                        color: "#fff",
                        fontSize: matchesB ? '12px' : "1.3vw",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                     Save tag
                    </Button>
    
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
    
          </Dialog>
        );
      };
   
      


      const MultiTageLinks = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '60%',
                height: matches ? 'auto' : 340,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={multiaddlink}
            onClose={handleCloseMultiAddLink}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: matches ? 'auto' : 340 }}>
              <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#ecf0f1' }}>
                <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fff', background: '#ecf0f1' }}>
                  <Grid sx={{ fontSize: matches ? '20px' : '22px', fontWeight: 600, lineHeight: '36px', color: '#000', marginLeft: '2%', marginTop: '-.5%' }}>Edit Link</Grid>
                  <Grid onClick={handleCloseMultiAddLink}
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
                <Grid sx={{ width: '100%',padding: 1.8 }}>
                <Grid >
                    <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                    Title
                    </Grid>
              <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "45px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your tag link here"
                />
              </Grid>
                   
               
    </Grid>


    <Grid sx={{ marginTop: '3%', }}>
                    <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                    Tag Link
                    </Grid>
              <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "45px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your tag link here"
                />
              </Grid>
                   
               
    </Grid>
    
    
                  <Grid sx={{ display: 'flex', marginTop: '4%' }}>
                    <Button
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: matchesB ? 45 : '3vw',
                        color: "#fff",
                        fontSize: matchesB ? '12px' : "1.3vw",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                  Save edit
                    </Button>
    
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
    
          </Dialog>
        );
      };
   

  

      

      const handleNewLinks = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '60%',
                height: matches ? 'auto' : 340,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={AddNewLink}
            onClose={handleCloseAddLinks}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: matches ? 'auto' : 340 }}>
              <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#ecf0f1' }}>
                <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #fff', background: '#ecf0f1' }}>
                  <Grid sx={{ fontSize: matches ? '20px' : '22px', fontWeight: 600, lineHeight: '36px', color: '#000', marginLeft: '2%', marginTop: '-.5%' }}>Add Link</Grid>
                  <Grid onClick={handleCloseAddNewLinks}
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
                <Grid sx={{ width: '100%',padding: 1.8 }}>
                <Grid >
                    <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                    Title
                    </Grid>
              <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "45px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your tag link here"
                />
              </Grid>
                   
               
    </Grid>


    <Grid sx={{ marginTop: '3%', }}>
                    <Grid sx={{fontSize:'18px',fontWeight:500,lineHeight:'30px'}}>
                    Tag Link
                    </Grid>
              <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: "45px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your tag link here"
                />
              </Grid>
                   
               
    </Grid>
    
    
                  <Grid sx={{ display: 'flex', marginTop: '4%' }}>
                    <Button onClick={handleCreate2}
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height: matchesB ? 45 : '3vw',
                        color: "#fff",
                        fontSize: matchesB ? '12px' : "1.3vw",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                     Save Link
                    </Button>
    
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
    
          </Dialog>
        );
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
                background:'#f5f6fa',
              },
            }}
            open={tage}
            onClose={handleCloseTage}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
            <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',padding:matches1?2:3,background:'#2d3436'}}>
            <Grid sx={{ fontSize: matches ? '20px' : '25px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Tage Activation</Grid>
                  <Grid onClick={handleCloseTage}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="large" sx={{color:'#fff'}}/>
                  </Grid>
             </Grid>

             <Divider
              style={{
                background:'#2d3436',
                color:'#000',
                height:matches2?'1px':'2px'
              }}
            />
               <Grid sx={{width:'100%',fontSize:'16px',marginTop:'3%',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',color:'#000'}}>
               Activate your google reviews and social media tags from here.
               </Grid>
             <Grid sx={{padding:matches1?2:3,width:'100%',marginTop:'1%'}}>
            <Grid sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
               <Grid sx={{fontSize:matches2?'16px':'22px',fontWeight:500}}>
               Tag List
               </Grid>
               <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: matches2?'70%':300,
                borderRadius: '6px',
                height:matches2?30:38,
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

<Grid sx={{border:'1px solid #000',width:'100%',height:350,borderRadius:'15px',background:'#f5f6fa',marginTop:'3%',padding:matches?1:2,color:'#000',overflow:'scroll',scrollbarWidth:'none'}}>
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


<Grid sx={{display:'flex',width:'100%',background:'#f5f6fa',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
    <Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'33%'}}>
    asdf
    </Grid>
    <Grid sx={{width:'33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Button
                  style={{
                    border: "1px solid #FFEBDF",
                    borderColor: "#FFDDC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px': "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize: matches2?'10px':"14px",
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


<Grid sx={{display:'flex',alignItems:'center',gap:2.2,cursor:'pointer',width:'33%'}}>
<Grid  onClick={handleLinks} sx={{marginLeft:'auto'}}>
<img src={edit} width={24}></img>
</Grid>
<Grid onClick={handleCount}>
<img src={count2} width={24}></img>
</Grid>
</Grid>


    {/* <Button onClick={handleLinks}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches2?'26px':"34px",
                  width:matches2?'50px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
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
              </Button> */}
</Grid>


<Grid sx={{display:'flex',width:'100%',background:'#f5f6fa',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   hA867
    </Grid>
    <Grid style={{width:'33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px':"14px",
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
  <Grid sx={{display:'flex',alignItems:'center',gap:2,width:'33%'}}>
<Grid style={{marginLeft:'auto'}}>
<img src={edit} width={24}></img>
</Grid>
<Grid>
<img src={count2} width={24}></img>
</Grid>
</Grid>
</Grid>


<Grid sx={{display:'flex',width:'100%',background:'#f5f6fa',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   hA867
    </Grid>
    <Grid style={{width:'33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px':"14px",
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
  <Grid sx={{display:'flex',alignItems:'center',gap:2,width:'33%'}}>
<Grid style={{marginLeft:'auto'}}>
<img src={edit} width={24}></img>
</Grid>
<Grid>
<img src={count2} width={24}></img>
</Grid>
</Grid>
</Grid>


<Grid sx={{display:'flex',width:'100%',background:'#f5f6fa',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   hA867
    </Grid>
    <Grid style={{width:'33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px':"14px",
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
  <Grid sx={{display:'flex',alignItems:'center',gap:2,width:'33%'}}>
<Grid style={{marginLeft:'auto'}}>
<img src={edit} width={24}></img>
</Grid>
<Grid>
<img src={count2} width={24}></img>
</Grid>
</Grid>
</Grid>



<Grid sx={{display:'flex',width:'100%',background:'#f5f6fa',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   hA867
    </Grid>
    <Grid style={{width:'33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px':"14px",
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
  <Grid sx={{display:'flex',alignItems:'center',gap:2,width:'33%'}}>
<Grid style={{marginLeft:'auto'}}>
<img src={edit} width={24}></img>
</Grid>
<Grid>
<img src={count2} width={24}></img>
</Grid>
</Grid>
</Grid>


<Grid sx={{display:'flex',width:'100%',background:'#f5f6fa',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   hA867
    </Grid>
    <Grid style={{width:'33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px':"14px",
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
  <Grid sx={{display:'flex',alignItems:'center',gap:2,width:'33%'}}>
<Grid style={{marginLeft:'auto'}}>
<img src={edit} width={24}></img>
</Grid>
<Grid>
<img src={count2} width={24}></img>
</Grid>
</Grid>
</Grid>



<Grid sx={{display:'flex',width:'100%',background:'#f5f6fa',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   hA867
    </Grid>
    <Grid style={{width:'33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px':"14px",
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
  <Grid sx={{display:'flex',alignItems:'center',gap:2,width:'33%'}}>
<Grid style={{marginLeft:'auto'}}>
<img src={edit} width={24}></img>
</Grid>
<Grid>
<img src={count2} width={24}></img>
</Grid>
</Grid>
</Grid>




</Grid>


             </Grid>
            </Grid>
          </Dialog>
        );
      };
    






    
    const EnquiriesDialog = () => {
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
          open={enquary}
          onClose={handleCloseEnquary}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
          <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',padding:matches1?2:3,background:'#2d3436'}}>
          <Grid sx={{ fontSize: matches ? '20px' : '25px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Enquiries Page</Grid>
                <Grid onClick={handleCloseEnquary}
                  aria-label="close"
                  sx={{
                    position: "absolute",
                    right: 10,
                    top: 16,
                    color: "inherit",
                    cursor: 'pointer'
                  }}>
                 <CloseIcon fontSize="large" sx={{color:'#fff'}}/>
                </Grid>
           </Grid>

           <Divider
            style={{
              background:'#2d3436',
              color:'#000',
              height:matches2?'1px':'2px'
            }}
          />
           <Grid sx={{padding:matches1?2:3,width:'100%',marginTop:'1%'}}>
          <Grid sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
             <Grid sx={{fontSize:matches2?'16px':'22px',fontWeight:500}}>
             Enquiries List
             </Grid>
             <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: matches2?'70%':300,
              borderRadius: '6px',
              height:matches2?30:38,
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
  Name
  </Grid>
  <Grid  sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
 Number
  </Grid>
  <Grid  sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
  Message
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


<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%'}}>
  Ankit
  </Grid>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
 +91 9179109464
  </Grid>
<Grid sx={{width:'33%',display:'flex'}}>
 <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,marginLeft:'auto'}}>
 I Want to Buy Your Card
 </Grid>
</Grid>
</Grid>



<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%'}}>
  Ankit
  </Grid>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
 +91 9179109464
  </Grid>
<Grid sx={{width:'33%',display:'flex'}}>
 <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,marginLeft:'auto'}}>
 I Want to Buy Your Card
 </Grid>
</Grid>
</Grid>



<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%'}}>
  Ankit
  </Grid>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
 +91 9179109464
  </Grid>
<Grid sx={{width:'33%',display:'flex'}}>
 <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,marginLeft:'auto'}}>
 I Want to Buy Your Card
 </Grid>
</Grid>
</Grid>



<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%'}}>
  Ankit
  </Grid>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
 +91 9179109464
  </Grid>
<Grid sx={{width:'33%',display:'flex'}}>
 <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,marginLeft:'auto'}}>
 I Want to Buy Your Card
 </Grid>
</Grid>
</Grid>


<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%'}}>
  Ankit
  </Grid>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
 +91 9179109464
  </Grid>
<Grid sx={{width:'33%',display:'flex'}}>
 <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,marginLeft:'auto'}}>
 I Want to Buy Your Card
 </Grid>
</Grid>
</Grid>



<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%'}}>
  Ankit
  </Grid>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
 +91 9179109464
  </Grid>
<Grid sx={{width:'33%',display:'flex'}}>
 <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,marginLeft:'auto'}}>
 I Want to Buy Your Card
 </Grid>
</Grid>
</Grid>




<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:2}}>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%'}}>
  Ankit
  </Grid>
  <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
 +91 9179109464
  </Grid>
<Grid sx={{width:'33%',display:'flex'}}>
 <Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:400,marginLeft:'auto'}}>
 I Want to Buy Your Card
 </Grid>
</Grid>
</Grid>



</Grid>


           </Grid>
          </Grid>
        </Dialog>
      );
    };

    



      
    const AppointmentsDialog = () => {
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
          open={appoint}
          onClose={handleCloseAppointment}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
          <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',padding:matches1?2:3,background:'#2d3436'}}>
          <Grid sx={{ fontSize: matches ? '20px' : '28px', fontWeight: 600, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Appointments</Grid>
                  <Grid onClick={handleCloseAppointment}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                    <CloseIcon fontSize="medium" style={{color:'#fff'}}/>
                  </Grid>
           </Grid>

           <Divider
            style={{
              background:'#2d3436',
              color:'#000',
              height:matches2?'1px':'2px'
            }}
          />
             <Grid sx={{width:'100%',fontSize:'16px',marginTop:'3%',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',color:'#000'}}>
             You can see who want to make a appointment with you and whaen.
             </Grid>
           <Grid sx={{padding:matches1?2:3,width:'100%'}}>
          <Grid sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
             <Grid sx={{fontSize:matches2?'16px':'22px',fontWeight:500}}>
             Appointments
             </Grid>
            <Grid>
            <Button onClick={handleCreateAppointment}
              style={{
                border: "1px solid #000",
                borderColor: "#000",
                background:'#000',
                height:matches2?'26px':"40px",
                width:matches2?'100%':'240px',
                color: "#fff",
                fontSize:matches2?'10px': "15px",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight:'22px',
                letterSpacing:'-2.2%'
                
              }}
            >
             Create Apponitment
            </Button> 
            </Grid>
          </Grid>

<Grid sx={{border:'1px solid #000',width:'100%',height:350,borderRadius:'15px',background:'#fff',marginTop:'1%',padding:matches?1:2,color:'#000',overflow:'scroll',scrollbarWidth:'none'}}>
<Grid sx={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
  <Grid sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
 Mark
  </Grid>
  <Grid  sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
 Name
  </Grid>
  <Grid  sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
 Time
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


<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%'}}>
  <Grid sx={{width:'25%'}}>
   <Checkbox {...label} size="medium" />
  </Grid>
  
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
Juned Khanna
</Grid> 
<Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:300,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
5:30 pm , 18 july
</Grid> 
<Grid sx={{cursor:'pointer',width:'25%',display:'flex'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={edit} width={matches2?15:24}></img>
</Grid>
</Grid>
</Grid>

<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%'}}>
  <Grid sx={{width:'25%'}}>
   <Checkbox {...label} size="medium" />
  </Grid>
  
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
Ankit Sharma
</Grid> 
<Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:300,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
5:30 pm , 18 july
</Grid> 
<Grid sx={{cursor:'pointer',width:'25%',display:'flex'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={edit} width={matches2?15:24}></img>
</Grid>
</Grid>
</Grid>


<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%'}}>
  <Grid sx={{width:'25%'}}>
   <Checkbox {...label} size="medium" />
  </Grid>
  
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
Ankit Khanna
</Grid> 
<Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:300,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
5:30 pm , 18 july
</Grid> 
<Grid sx={{cursor:'pointer',width:'25%',display:'flex'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={edit} width={matches2?15:24}></img>
</Grid>
</Grid>
</Grid>

<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%'}}>
  <Grid sx={{width:'25%'}}>
   <Checkbox {...label} size="medium" />
  </Grid>
  
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
Harshit Jain
</Grid> 
<Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:300,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
5:30 pm , 18 july
</Grid> 
<Grid sx={{cursor:'pointer',width:'25%',display:'flex'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={edit} width={matches2?15:24}></img>
</Grid>
</Grid>
</Grid>

<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%'}}>
  <Grid sx={{width:'25%'}}>
   <Checkbox {...label} size="medium" />
  </Grid>
  
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
Juned Khanna
</Grid> 
<Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:300,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
5:30 pm , 18 july
</Grid> 
<Grid sx={{cursor:'pointer',width:'25%',display:'flex'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={edit} width={matches2?15:24}></img>
</Grid>
</Grid>
</Grid>

<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%'}}>
  <Grid sx={{width:'25%'}}>
   <Checkbox {...label} size="medium" />
  </Grid>
  
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
Juned Khanna
</Grid> 
<Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:300,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
5:30 pm , 18 july
</Grid> 
<Grid sx={{cursor:'pointer',width:'25%',display:'flex'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={edit} width={matches2?15:24}></img>
</Grid>
</Grid>
</Grid>

<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%'}}>
  <Grid sx={{width:'25%'}}>
   <Checkbox {...label} size="medium" />
  </Grid>
  
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
Juned Khanna
</Grid> 
<Grid sx={{fontSize:matches2?'12px':'16px',fontWeight:300,width:'25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
5:30 pm , 18 july
</Grid> 
<Grid sx={{cursor:'pointer',width:'25%',display:'flex'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={edit} width={matches2?15:24}></img>
</Grid>
</Grid>
</Grid>


</Grid>


           </Grid>
          </Grid>
        </Dialog>
      );
    };






      const MultiTage = () => {
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
            open={multiTage}
            onClose={handleCloseMultiTage}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
            <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',padding:matches1?2:3,background:'#2d3436'}}>
            <Grid sx={{ fontSize: matches ? '20px' : '28px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Multi Profile Activation</Grid>
                  <Grid onClick={handleCloseMultiTage}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="large" sx={{color:'#fff'}}/>
                  </Grid>
             </Grid>

             <Divider
              style={{
                background:'#2d3436',
                color:'#000',
                height:matches2?'1px':'2px'
              }}
            />
               <Grid sx={{width:'100%',textAlign:'center',fontSize:'16px',marginTop:'3%',display:'flex',alignItems:'center',justifyContent:'center',color:'#000'}}>
               Activate your google reviews and social media tags from here.
               </Grid>
             <Grid sx={{padding:matches1?2:3,width:'100%',marginTop:'1%'}}>
            <Grid sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
               <Grid sx={{fontSize:matches2?'16px':'22px',fontWeight:500}}>
               Multi Tag List
               </Grid>
               <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: matchesA?'60%':300,
                borderRadius: '6px',
                height:matches2?25: 38,
                background: "transparent",
                border: "1px solid #636e72",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#000", fontSize: "14px" }}
                placeholder="Search......."
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon style={{ color: "#000",fontSize:'20px' }} />
              </IconButton>
            </Paper>
            </Grid>

<Grid sx={{border:'1px solid #000',width:'100%',height:350,borderRadius:'15px',background:'#fff',marginTop:'3%',padding:matches?1:2,color:'#000',overflow:'scroll',scrollbarWidth:'none'}}>
<Grid sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
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


<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400,width:'33%'}}>
    1
    </Grid>
    <Grid sx={{display:'flex',width:'33%',alignItems:'center',justifyContent:"center"}}>
    <Button
                  style={{
                    border: "1px solid #FFEBDF",
                    borderColor: "#FFDDC4",
                    width:matches2?'40px': "8vw",
                    height:matches2?'25px':  "29px",
                    color: "#FF6B00",
                    background: "#FFDDC4",
                    fontSize:matches2?'10px': "14px",
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
    
<Grid sx={{display:'flex',alignItems:'center',gap:matches2?1:3,width:'33%',cursor:'pointer'}}>
<Grid sx={{marginLeft:'auto'}}>
<img src={eyem} width={matches2?16:24}></img>
</Grid>
<Grid onClick={handleAddLink}>
<img src={edit}  width={matches2?16:24}></img>
</Grid>
<Grid onClick={handleCountm}>
<img src={count2}  width={matches2?16:24}></img>
</Grid>
</Grid>

    {/* <Button onClick={handleAddLink}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches2?'26px': "34px",
                  width:matches2?'50px': '100px',
                  color: "#fff",
                  fontSize:matches2?'10px':  "14px",
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
             Add link
              </Button> */}
</Grid>


<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   2
    </Grid>
    <Grid sx={{display:'flex',width:'33%',alignItems:'center',justifyContent:"center"}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px':  "8vw",
                    height: matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px': "14px",
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
    <Grid sx={{display:'flex',alignItems:'center',gap:matches2?1:3,cursor:'pointer',width:'33%'}}>
    <Grid sx={{marginLeft:'auto'}}>
<img src={eyem}  width={matches2?16:24}></img>
</Grid>
    <Grid   onClick={handleAddLink}>
<img src={edit}  width={matches2?16:24}></img>
</Grid>
    <Grid onClick={handleCount}>
<img src={count2}  width={matches2?16:24}></img>
</Grid>
</Grid>
</Grid>



<Grid sx={{display:'flex',width:'100%',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matches2?'13px':'20px',fontWeight:400,width:'33%'}}>
   3
    </Grid>
    <Grid sx={{display:'flex',width:'33%',alignItems:'center',justifyContent:"center"}}>
    <Button
                  style={{
                    border: "1px solid #E5FFC4",
                    borderColor: "#E5FFC4",
                    width:matches2?'40px':  "8vw",
                    height: matches2?'25px': "29px",
                    color: "#64B300",
                    background: "#E5FFC4",
                    fontSize: matches2?'10px': "14px",
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
    <Grid sx={{display:'flex',alignItems:'center',gap:matches2?1:3,cursor:'pointer',width:'33%'}}>
    <Grid sx={{marginLeft:'auto'}}>
<img src={eyem}  width={matches2?16:24}></img>
</Grid>
    <Grid   onClick={handleAddLink}>
<img src={edit}  width={matches2?16:24}></img>
</Grid>
    <Grid onClick={handleCount}>
<img src={count2}  width={matches2?16:24}></img>
</Grid>
</Grid>
</Grid>

</Grid>
             </Grid>
            </Grid>
          </Dialog>
        );
      };
    
    



      const UpdateProfileDetail = () => {
        return (
          <Dialog
          fullWidth
          maxWidth={false}
            PaperProps={{
              style: {
                width:matches1?'98%':'30%',
                height: 'auto',
                overflow:'scroll',
                scrollbarWidth:'none',
                borderRadius: 10,
                backgroundImage: "radial-gradient(#f5f6fa,#fff)",
              },
            }}
            open={updateProfile}
            onClose={handleCloseUpdateProfileDetail}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
            <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',padding:1.6,background:'#2d3436'}}>
            <Grid sx={{ fontSize: matches ? '20px' : '25px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Personal details</Grid>
                  <Grid onClick={handleCloseUpdateProfileDetail}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="medium" sx={{color:'#fff'}}/>
                  </Grid>
             </Grid>
             <Grid>
           <Grid sx={{padding:.8,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
              <Grid>
                <img src={contact} width={matches2?40:50}></img>
              </Grid>
              <Grid sx={{fontSize:matches2?'18px':'22px',fontWeight:600,lineHeight:'26px'}}>
              Update Profile details
              </Grid>
           </Grid>
           </Grid>
           <Divider
              style={{
                background:'#2d3436',
              }}
            />

            <Grid sx={{padding:2}}>
             <Grid sx={{fontSize:matches2?'15px':'22px',fontWeight:500}}>
              Profile:
             </Grid>
             <Grid sx={{ display: "flex", alignItems: "center",border:'1px solid #000',borderRadius:'10px',padding:1 ,marginTop:'2%'}}>
                <Avatar
                  fullWidth
                  alt="Remy Sharp"
                  sx={{ width: matches ? 70 : '5vw', height: matches ? 70 : '5vw', marginTop: "2%" }}
                />

                <Grid sx={{ marginLeft: "4%", marginTop: matches ? '4%' : "2%" }}>
                  <Grid>
                    <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                      />
                      <Button
                        aria-label="upload picture"
                        component="span"
                        style={{
                          border: "1px solid #000",
                          borderColor: "#000",
                          height: matches ? 28 : "35px",
                          width: matches ? '120px' : "150px",
                          lineHeight: "36px",
                          color: "#000",
                          fontSize: matches ? '12px' : "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Upload Logo
                      </Button>
                    </label>
                  </Grid>
                  <Grid
                    sx={{
                      fontSize: matches ? '12px' : "12px",
                      fontWeight: 400,
                      marginTop: "1.5%",
                      lineHeight: "18px",
                    }}
                  ><div>
                      (250*250px)
                    </div>
                    Upload Your Profile Photo For your business profile
                  </Grid>
                </Grid>
              </Grid>
              
            <Grid sx={{fontSize:matches2?'14px':'18px',fontWeight:500,marginTop:'3%'}}>
            Full Name*
             </Grid>
             <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  marginTop:'.8%',
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: matches2?'30px':"40px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your Name"
                />
              </Grid> 


              <Grid sx={{fontSize:matches2?'14px':'18px',fontWeight:500,marginTop:'3%'}}>
              Designation*
             </Grid>
             <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  marginTop:'.8%',
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: matches2?'30px': "40px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your designation"
                />
              </Grid> 


              <Grid sx={{fontSize:matches2?'14px':'18px',fontWeight:500,marginTop:'3%'}}>
              Number*
             </Grid>
             <Grid
                sx={{
                  border: "1.8px solid #636e72",
                  borderRadius: "10px",
                  marginTop:'.8%',
                  color: "#000",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  height: matches2?'30px': "40px",
                  width:'100%' ,
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Paste your number"
                />
              </Grid> 
              <Button
                  style={{
                    border: "1px solid #0000",
                    marginTop:'3%',
                    borderColor: "#0000",
                    width:"100%",
                    height: matches2?'40px': "45px",
                    color: "#fff",
                    background: "#000",
                    fontSize: matches2?'12px': "18px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "8px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                save changes
                </Button>
            </Grid>
         </Grid>

          </Dialog>
        );
      };
    
    



      


      const AddLink = () => {
        return (
          <Dialog
          fullWidth
          maxWidth={false}
            PaperProps={{
              style: {
                width:matches1?'88%':'50%',
                height: 'auto',
                borderRadius: 10,
                backgroundImage: "radial-gradient(#f5f6fa,#fff)",
              },
            }}
            open={addLink}
            onClose={handleCloseAddLinks}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
            <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center',padding:matches1?2:3,background:'#2d3436'}}>
            <Grid sx={{ fontSize: matches ? '20px' : '28px', fontWeight: 500, lineHeight: '36px', color: '#fff', marginLeft: '2%', marginTop: '-.5%' }}>Add Multi Tage</Grid>
                  <Grid onClick={handleCloseAddLinks}
                    aria-label="close"
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: 16,
                      color: "inherit",
                      cursor: 'pointer'
                    }}>
                   <CloseIcon fontSize="large" sx={{color:'#fff'}}/>
                  </Grid>
             </Grid>

             <Divider
              style={{
                background:'#2d3436',
                color:'#000',
                height:matches2?'1px':'2px'
              }}
            />
               <Grid sx={{width:'100%',height:95,textAlign:'center',marginTop:'1%',display:'flex',padding:2,background:'#E9E9E9',color:'#000'}}>
               <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
               <Grid >
        <Avatar
        alt="Remy Sharp"
        src={ankit}
        sx={{ width: 80, height: 80 }}
      />
               </Grid>
               <Grid sx={{marginLeft:'3%'}}>
               <Grid sx={{fontSize:'20px',fontWeight:600,textAlign:'left'}}>
                Harshit Jain
               </Grid>
               <Grid sx={{fontSize:'14px',fontWeight:300,marginTop:'1.4%'}}>
               Manager at Ibuzz Tech
               </Grid>
               </Grid>
               </Grid>
               </Grid>

               <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
                 
               <Button onClick={handleUpdateProfileDetail}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#fff',
                  height:matches2?'35px':"42px",
                  width:matches2?'80%':'40%',
                  color: "#000",
                  fontSize:matches2?'10px': "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
                  gap:10

                }}
              >
            <img src={contact} width={25}></img>  Update Profile details
              </Button>

               </Grid>
  <Grid sx={{padding:matches1?2:3,width:'100%'}}>
<Grid sx={{border:'1px solid #000',width:'100%',height:300,borderRadius:'15px',background:'#fff',padding:matches?1:2,color:'#000',overflow:'scroll',scrollbarWidth:'none'}}>
<Grid sx={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
    <Grid sx={{fontSize:matches2?'13px':'22px',fontWeight:500}}>
    Title
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


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
    <Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400}}>
    Mehak kushawah
    </Grid>

    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
    <Button onClick={handleMultiAddLink}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches2?'25px':"34px",
                  width:matches2?'45px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
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
          Edit link
              </Button>
              <Grid sx={{cursor:'pointer'}}><img src={deletes} width={matches2?25:35}></img></Grid>
              </Grid>

</Grid>


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400}}>
    Mehak kushawah
    </Grid>

    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
    <Button onClick={handleMultiAddLink}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches2?'25px':"34px",
                  width:matches2?'45px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
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
          Edit link
              </Button>
              <Grid sx={{cursor:'pointer'}}><img src={deletes} width={matches2?25:35}></img></Grid>
              </Grid>
              </Grid>


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400}}>
    Mehak kushawah
    </Grid>

    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
    <Button onClick={handleMultiAddLink}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches2?'25px':"34px",
                  width:matches2?'45px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
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
          Edit link
              </Button>
              <Grid sx={{cursor:'pointer'}}><img src={deletes} width={matches2?25:35}></img></Grid>
              </Grid>
              </Grid>






              <Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?'':2}}>
<Grid sx={{fontSize:matches2?'12px':'20px',fontWeight:400}}>
    Mehak kushawah
    </Grid>

    <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
    <Button onClick={handleMultiAddLink}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches2?'25px':"34px",
                  width:matches2?'45px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
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
          Edit link
              </Button>
              <Grid sx={{cursor:'pointer'}}><img src={deletes} width={matches2?25:35}></img></Grid>
              </Grid>
              </Grid>

</Grid>

<Grid sx={{display:'flex',alignItems:'center',marginTop:'3%',justifyContent:'center'}}>
              <Button  onClick={handleAddNewLinks}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  width:'50%',
                  height:matches?'40px':"4p2x",
                  color: "#fff",
                  fontSize: matches?'14px':"20px",
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
          Add New Link +
              </Button>
</Grid>

             </Grid>
            </Grid>
          </Dialog>
        );
      };
  








    return(<Grid sx={{width:'100%',height:matches?'auto':'100vh',backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Muli, sans-serif'}}>
        <Grid>
        <Navbar/>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%',height:'auto',marginTop:matches2?'3%':'1.5%'}}>
            <Grid sx={{fontSize:matches?'20px':'30px',fontWeight:700,color:'#fff',fontFamily:'Montserrat'}}>Business profile dashboard</Grid>
          <Grid sx={{width:'90%',height:'auto',border:'1px solid #fff',borderRadius:'10px',marginTop:matches2?'5%':'2%',color:'#fff'}}>
            <Grid sx={{width:'100%',height:matchesA?'auto':'12vh',padding:2,display:'flex',justifyContent:'space-between',flexDirection:matchesA?'column':'row',alignItems:'center'}}>
             
              <Grid>
                <Grid sx={{fontSize:matchesA?'14px':matches?'14px':'20px',fontWeight:400,textAlign:matchesA?'center':''}}>
                Company name
                </Grid>
                <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,marginTop:'1%',textAlign:matchesA?'center':''}}>
                iBuzz6
                </Grid>
              </Grid>

              <Grid sx={{marginTop:matchesA?'2%':''}}>
                <Grid sx={{fontSize:matchesA?'14px':matches?'14px':'20px',fontWeight:400,textAlign:matchesA?'center':''}}>
                Created on
                </Grid>
                <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,marginTop:'1%',textAlign:matchesA?'center':''}}>
                June 24
                </Grid>
              </Grid>

              <Grid sx={{display:'flex',alignItems:'center',gap:matchesA?1:3,marginTop:matchesA?'4%':''}}>
              <Button onClick={handleSwitch}
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
          Other Profiles
          </Grid>
           <Grid sx={{width:'100%',height:'44vh',marginTop:'2%',border:'1px solid #fff',borderRadius:'10px',padding:matchesA?1:2,overflow:'scroll',scrollbarWidth:'none'}}>
                <Grid  onClick={handleTage} sx={{cursor:'pointer',width:'100%',height:'10vh',border:'1px solid #000',background:'#D9D9D9',borderRadius:'6px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:700,lineHeight:'22px'}}>
                        Review Profile
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'13px',fontWeight:400,lineHeight:'15px'}}>
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
                  borderRadius: "6px",
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


                <Grid onClick={handleMultiTage} sx={{width:'100%',height:'10vh',cursor:'pointer',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'6px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:700,lineHeight:'22px'}}>
                        Multi Profile
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'13px',fontWeight:400,lineHeight:'15px'}}>
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
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={multinew} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 


                <Grid onClick={handleMenu}  sx={{width:'100%',cursor:'pointer',height:'10vh',cursor:'pointer',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'6px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:700,lineHeight:'22px'}}>
                        Restaurants Profile
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'13px',fontWeight:400,lineHeight:'15px'}}>
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
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={restaurantdetailsnew} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 




                <Grid onClick={handleInvitation} sx={{width:'100%',cursor:'pointer',height:'10vh',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'6px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:700,lineHeight:'22px'}}>
                         Invitation Profile
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'13px',fontWeight:400,lineHeight:'15px'}}>
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
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={invite} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 


                <Grid onClick={handleVehical} sx={{width:'100%',height:'10vh',cursor:'pointer',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'6px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:700,lineHeight:'22px'}}>
                        Vehicle Profile
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'13px',fontWeight:400,lineHeight:'15px'}}>
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
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={vehical} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 


                <Grid sx={{width:'100%',height:'10vh',cursor:'pointer',marginTop:'6%',border:'1px solid #000',background:'#D9D9D9',borderRadius:'6px',padding:1.4,color:'#000',display:'flex',alignItems:'center'}}>
                    <Grid sx={{width:'60%'}}>
                        <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:700,lineHeight:'22px'}}>
                        DoorBell Profile
                        </Grid>
                        <Grid sx={{fontSize:matchesA?'10px':'13px',fontWeight:400,lineHeight:'15px'}}>
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
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  
                }}
              >
             <img src={door} width={matchesA?15:20}></img> <div style={{marginLeft:'5%'}}>Activate</div>
              </Button>
                    </Grid>
                </Grid> 

          

           </Grid>
          </Grid>
            <Grid sx={{width:matches?'100%':'50%',display:'flex',justifyContent:'center',color:'#fff',flexDirection:'column',alignItems:'center',marginLeft:'auto',marginTop:matches?'5%':''}}>
          <Grid sx={{fontSize:'24px',fontWeight:500,color:'#fff'}}>
           Edit Your Profile   
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
                  <img src={link2} width={50}></img>
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
          <Grid onClick={handleSocial} sx={{width:matchesA?'150px':'130px',cursor:'pointer',height:matchesA?'200px':'180px',border:'1px solid #fff',background:'#fff',padding:2,gap:1,borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
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


          <Grid onClick={handleEnquary} sx={{width:matchesA?'150px':'130px',cursor:'pointer',height:matchesA?'200px':'180px',border:'1px solid #fff',background:'#fff',padding:2,gap:1,borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
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

          <Grid onClick={handleAppointment} sx={{width:matchesA?'150px':'130px',cursor:'pointer',height:matchesA?'200px':'180px',border:'1px solid #fff',background:'#fff',padding:2,gap:1,borderRadius:'10px',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
            <Grid>
                <img src={social3} width={54}></img>
            </Grid>
            <Grid sx={{fontSize:'16px',fontWeight:500,color:'#000',textAlign:'center'}}>
            Appointments
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
            <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:400,color:'#fff',marginTop:'2.5%',textAlign:'center'}}>Copyrights © 2024 Powered By IndiaBuzz</Grid>
        </Grid>
        {Tag()}
        {TageLinks()}
        {MultiTage()}
        {AddLink()}
        {MultiTageLinks()}
        {SwitchProfile()}
        {SocialInsight()}
        {Count()}
        {CountForMulti()}
        {handleNewLinks()}
        {Success()}
        {AppointmentsDialog()}
        {CreateAppointment()}
        {UpdateProfileDetail()}
        {EnquiriesDialog()}
    </Grid>)
}