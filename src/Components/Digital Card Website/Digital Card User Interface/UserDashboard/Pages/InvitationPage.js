import {useMediaQuery, Grid, Button, Divider, Dialog, InputBase } from "@mui/material";
import Navbar from "../UserComponents/Navbar";
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";
import upload from "../../../Digital Card Assets/upload.png"
import right from "../../../Digital Card Assets/right123.png"
import { useNavigate } from "react-router-dom";
export default function InvitationPage()
{
    const matches = useMediaQuery("(max-width:1200px)");
    const matchesA = useMediaQuery("(max-width:700px)");
    const matches2 = useMediaQuery("(max-width:700px)");
    const matches3 = useMediaQuery("(max-width:500px)");
    const [create,setCreate]= useState(false)
    const [create2,setCreate2]= useState(false)

    var navigate= useNavigate()

    const handleBack=()=>{
      navigate('/maindashboard')
    }
    const handleCreate = () => {
        setCreate(true);
      };
      const handleCloseCreate = () => {
        setCreate(false);
      };

      const handleCreate2 = () => {
        setCreate2(true);
      };
      const handleCloseCreate2 = () => {
        setCreate2(false);
      };

    const createDialog = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '22%',
                height: matches ? 'auto' : 620,
                borderRadius: 10,
                background:'#ecf0f1'
              },
            }}
            open={create}
            onClose={handleCloseCreate}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%',color:'#000',background:'#f5f6fa'}}>
            <Grid sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                  <Grid sx={{ fontSize: matches ? '20px' : '24px', fontWeight: 500, lineHeight: '36px', color: '#000', marginLeft: '2%', marginTop: '-.5%' }}>Social Insights</Grid>
                  <Grid onClick={handleCloseCreate}
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
                  <Grid sx={{width:'100%',maxHeight:415,overflow:'scroll',scrollbarWidth:'none'}}>
              <Grid sx={{display:'flex',alignItems:'center',height:400,marginTop:'1%',flexDirection:'column',border:'1px solid #353535',borderRadius:'4px',justifyContent:'center',background:'#f5f6fa'}}>
                <Grid><img src={upload} width={45}></img></Grid>
                <Grid sx={{fontSize:'20px',fontWeight:600,marginTop:'2%'}}>
                Upload Image
                </Grid>
                <Grid sx={{fontSize:'10px',textAlign:'center',width:'50%',fontWeight:400,marginTop:'2%'}}>
                The video format should be less then 5 Mb and 390w by 840h.
                </Grid>
            </Grid> 

            <Grid sx={{display:'flex',alignItems:'center',height:400,marginTop:'2%',flexDirection:'column',marginBottom:'1%',border:'1px solid #353535',borderRadius:'4px',justifyContent:'center',background:'#f5f6fa'}}>
                <Grid><img src={upload} width={45}></img></Grid>
                <Grid sx={{fontSize:'20px',fontWeight:600,marginTop:'2%'}}>
                Upload video
                </Grid>
                <Grid sx={{fontSize:'10px',textAlign:'center',width:'50%',fontWeight:400,marginTop:'2%'}}>
                The video format should be less then 5 Mb and 390w by 840h.
                </Grid>
            </Grid> 

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
                  marginTop:'4%'
                }}
              >
                <InputBase
                  style={{ color: "#000" }}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter Invitation name"
                />
              </Grid>
              <Button fullWidth onClick={handleCreate2}
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches2?'26px':"40px",
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  marginTop:'3%',
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%'
                  }}>
               Create
              </Button>
    </Grid>
    </Grid>
          </Dialog>
        );
      };
   


      
    const Success = () => {
        return (
          <Dialog
            PaperProps={{
              style: {
                width: matches ? "100%" : '22%',
                height: matches ? 'auto' : 620,
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
              <Grid sx={{display:'flex',alignItems:'center',height:500,marginTop:'-4%',flexDirection:'column',border:'1px solid #fff',borderRadius:'4px',justifyContent:'center',background:'#f5f6fa'}}>
                <Grid><img src={right} width={200} ></img></Grid>
                <Grid sx={{marginTop:'2%',fontSize:'20px',fontWeight:500,width:'60%',lineHeight:'22px',textAlign:'center'}}>
                Invitation created Successfully !
                </Grid>
                
        </Grid>          
      </Grid>
    </Grid>
          </Dialog>
        );
      };
   





    return(<Grid sx={{width:'100%',height:'100vh',backgroundImage:"linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
        <Grid>
        <Navbar/>
        </Grid>
        <Grid sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%',height:'auto',marginTop:'2%'}}>
            <Grid sx={{fontSize:matches?'18px':'28px',fontWeight:700,color:'#fff'}}>Invitation Links</Grid>
          <Grid sx={{width:'80%',height:matchesA?'auto':450,border:'1px solid #F3F3F3',background:'#F3F3F3',borderRadius:'10px',marginTop:'1.5%',color:'#000',padding:2}}>
            <Grid sx={{display:'flex',alignItems:'center',}}>
            <Button onClick={handleCreate}
                      style={{
                        border: '1px solid #000',
                        borderColor: '#000',
                        height:matches3?28:40,
                        color: "#fff",
                        fontSize: matches3?'12px':'18px',
                        width:matches?'250px':'150px',
                        fontWeight:400,
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        background: '#000',
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    Create +
                    </Button>
                    <Grid sx={{fontSize:matches3?'8px':matches?'14px':'16px',fontWeight:400,lineHeight:matches3?'14px': matches?'20px':'30px',marginLeft:'3%'}}>
                    you can upload the created video animation on this page and send the direct link to your profile and also share these invitations directly through lnik
                    </Grid>
            </Grid>

<Grid sx={{overflow:"scroll",scrollbarWidth:'none',width:'100%',maxHeight:matchesA?340:360}}> 
    <Grid sx={{display:'flex',alignItems:'center',justifyContent:"space-between",marginTop:'2%',padding:1}}>
    <Grid sx={{fontSize:matches3?'10px':matches2?'13px':'18px',fontWeight:600}}>
    Invitation name
    </Grid>
    <Grid  sx={{fontSize:matches3?'10px':matches2?'13px':'18px',fontWeight:600}}>
    Uploaded on
    </Grid>
    <Grid  sx={{fontSize:matches3?'10px':matches2?'13px':'18px',fontWeight:600}}>
    Actions
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


<Grid sx={{display:'flex',width:'100%',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:1}}>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%'}}>
    Wedding Invitation
    </Grid>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    10:23 Am, 1 june 24
    </Grid>
    <Grid sx={{display:'flex',gap:1,flexDirection:matches3?'column':'row',alignItems:'center',width:'33%'}}>
    <Button
                style={{
                  border: "1px solid #158FFF",
                  borderColor: "#158FFF",
                  background:'#158FFF',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'50px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
                  marginLeft:'auto'
                  
                }}
              >
             <VisibilityIcon sx={{fontSize:'18px',marginLeft:'-3%'}}/>Preview
              </Button>
              <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'80px':'40px',
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
             Edit
              </Button>
              </Grid>
</Grid>
<Divider
              style={{
                background:'#B7B7B7',
                height:'1px',
                marginTop:'1.5%'
              }}
            />





<Grid sx={{display:'flex',width:'100%',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:1}}>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%'}}>
    Wedding Invitation
    </Grid>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    10:23 Am, 1 june 24
    </Grid>
    <Grid sx={{display:'flex',gap:1,flexDirection:matches3?'column':'row',alignItems:'center',width:'33%'}}>
    <Button
                style={{
                  border: "1px solid #158FFF",
                  borderColor: "#158FFF",
                  background:'#158FFF',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'50px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
                  marginLeft:'auto'
                  
                }}
              >
             <VisibilityIcon sx={{fontSize:'18px',marginLeft:'-3%'}}/>Preview
              </Button>
              <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'80px':'40px',
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
             Edit
              </Button>
              </Grid>
</Grid>
<Divider
              style={{
                background:'#B7B7B7',
                height:'1px',
                marginTop:'1.5%'
              }}
            />




<Grid sx={{display:'flex',width:'100%',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:1}}>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%'}}>
    Wedding Invitation
    </Grid>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    10:23 Am, 1 june 24
    </Grid>
    <Grid sx={{display:'flex',gap:1,flexDirection:matches3?'column':'row',alignItems:'center',width:'33%'}}>
    <Button
                style={{
                  border: "1px solid #158FFF",
                  borderColor: "#158FFF",
                  background:'#158FFF',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'50px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
                  marginLeft:'auto'
                  
                }}
              >
             <VisibilityIcon sx={{fontSize:'18px',marginLeft:'-3%'}}/>Preview
              </Button>
              <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'80px':'40px',
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
             Edit
              </Button>
              </Grid>
</Grid>
<Divider
              style={{
                background:'#B7B7B7',
                height:'1px',
                marginTop:'1.5%'
              }}
            />




<Grid sx={{display:'flex',width:'100%',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:1}}>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%'}}>
    Wedding Invitation
    </Grid>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    10:23 Am, 1 june 24
    </Grid>
    <Grid sx={{display:'flex',gap:1,flexDirection:matches3?'column':'row',alignItems:'center',width:'33%'}}>
    <Button
                style={{
                  border: "1px solid #158FFF",
                  borderColor: "#158FFF",
                  background:'#158FFF',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'50px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
                  marginLeft:'auto'
                  
                }}
              >
             <VisibilityIcon sx={{fontSize:'18px',marginLeft:'-3%'}}/>Preview
              </Button>
              <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'80px':'40px',
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
             Edit
              </Button>
              </Grid>
</Grid>
<Divider
              style={{
                background:'#B7B7B7',
                height:'1px',
                marginTop:'1.5%'
              }}
            />






<Grid sx={{display:'flex',width:'100%',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:matches2?.0:1}}>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%'}}>
    Wedding Invitation
    </Grid>
    <Grid sx={{fontSize:matches3?'10px':matches2?'12px':'18px',fontWeight:600,width:'33%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    10:23 Am, 1 june 24
    </Grid>
    <Grid sx={{display:'flex',gap:1,flexDirection:matches3?'column':'row',alignItems:'center',width:'33%'}}>
    <Button
                style={{
                  border: "1px solid #158FFF",
                  borderColor: "#158FFF",
                  background:'#158FFF',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'50px':'100px',
                  color: "#fff",
                  fontSize:matches2?'10px': "14px",
                  fontWeight: 400,
                  textTransform: "none",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight:'22px',
                  letterSpacing:'-2.2%',
                  marginLeft:'auto'
                  
                }}
              >
             <VisibilityIcon sx={{fontSize:'18px',marginLeft:'-3%'}}/>Preview
              </Button>
              <Button
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  background:'#000',
                  height:matches3?'20px':matches2?'26px':"34px",
                  width:matches2?'80px':'40px',
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
             Edit
              </Button>
              </Grid>
</Grid>
<Divider
              style={{
                background:'#B7B7B7',
                height:'1px',
                marginTop:'1.5%'
              }}
            />

           </Grid>
        </Grid>

          </Grid>
            <Grid sx={{fontSize:matchesA?'14px':'18px',fontWeight:400,color:'#fff',marginTop:'3.2%',textAlign:'center'}}>Copyrights © 2024 Powered By IndiaBuzz</Grid>
            <Grid sx={{display:'flex',marginLeft:'auto',width:'100%',marginTop:matches2?'5%':'-1%'}}>
            <Button  onClick={handleBack}
                      style={{
                        border: '1px solid #fff',
                        borderColor: '#fff',
                        height: 40,
                        width:'100px',
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 500,
                        marginLeft:'auto',
                        textTransform: "none",
                        borderRadius: '6px',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }} fullWidth>
                    Close
                    </Button>
                    <Grid sx={{color:'#000'}}>Copyri</Grid>
            </Grid>
            {createDialog()}
            {Success()}
        </Grid>
        
)
}