import {  Grid } from "@mui/material";
import Logindigitallogo from "../Themes/ThemeAssets/logindigitallogo.png"
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Emaillogo from "../Themes/ThemeAssets/email1234.png"
import key from "../Themes/ThemeAssets/key.png"
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import google from "../Themes/ThemeAssets/googlelogin.png"
import fb from "../Themes/ThemeAssets/fb.png";
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
export default function ThemeLogin()
{

  const content = (
    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
  );

    return(<div>
          <Grid
      style={{
        backgroundColor: "wheat",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid
        container
        
        sx={{
          width: { sm: "70%", md: "37%",xs:'100%'},
          height: "100%",
          backgroundImage: "radial-gradient(#353b48, #000)"
        }}>
        <Grid item xs={12} sx={{backgroundImage: "radial-gradient(#353b48, #000)",height:'auto',display:'flex',flexDirection:'column'}}>
        <Grid style={{display:'flex',justifyContent:'center',marginTop:'10%'}}>
            <img src={Logindigitallogo} style={{width:'27%'}} ></img>
        </Grid>
        <Grid sx={{fontSize:'32px',fontWeight:500,color:'#fff',marginTop:'8%',display:'flex',justifyContent:'center'}}>
        welcome back
        </Grid>
        </Grid>

        <Grid item xs={12} sx={{background:'#fff',height:"auto",display:'flex',flexDirection:'column', borderRadius: "17px 17px 0px  0px"}}>
        
        <Grid style={{display:'flex',justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
        <Grid sx={{fontSize:'28px',fontWeight:700,color:'#000',marginTop:'5%'}}>
          Login Now
        </Grid>
        <Grid sx={{fontSize:16,color:'#636e72',marginTop:'2%'}}>
        Activate your card here !
        </Grid>
        </Grid>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'6%'}}>
        <div style={{border:'1px solid #b2bec3',background:'#dfe6e9',borderRadius:6,width:'90%'}}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
       <img src={Emaillogo} width={20}></img>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Email Address or number"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
   </div>   
</div>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'6%'}}>
        <div style={{border:'1px solid #b2bec3',background:'#dfe6e9',borderRadius:6,width:'90%'}}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
       <img src={key} width={20}></img>
      </IconButton>
      <InputBase
        sx={{ width:'60%' }}
        placeholder="Enter OTP"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
       <IconButton type="button"  aria-label="search">
       <div
              style={{
                border: "1px solid #000",
                width: 70,
                backgroundColor: "#000",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 7,
                color: "#fff",
                fontSize:10,
                borderRadius:8,
                marginLeft:'auto'
              
              }}
            >
             Get OTP
            </div>
      </IconButton>
   </div>   
</div>
<Grid style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop: "7%",}}>
<Grid
       sx={{
                border: "1px solid #000",
                width: '90%',
                backgroundColor: "#000",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1.3,
                color: "#fff",
                
               
              }}
            >
              <Grid sx={{ fontsize: "10px", fontWeight: 700 }}>LOGIN</Grid>
            </Grid>
            </Grid>






            <div style={{marginTop: "6%",display:'flex',justifyContent:'center',alignItems:'center'}} >
           <Divider  style={{color:'red',width:"75%"}}>
        <Chip  label="OR" size="large" />
      </Divider>
          </div>


<Grid  sx={{marginTop: "4%",display:'flex',justifyContent:'center',alignItems:'center'}}>
<Grid
      sx={{
          border: "1px solid #2d3436",
                width: '75%',
               background:'#fff',
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3%",
                padding: 0.3,
              }}
            >
              <Grid
                sx={{ marginTop: "2%", marginLeft:"5%"}}
              >
                <img src={google}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: "12%" ,
                  color: "#000",
                  fontWeight: 400,
                  fontSize: 17 ,
                }}
              >
                With Google
              </Grid>
            </Grid>
</Grid>



<Grid  sx={{marginTop: "3%",display:'flex',justifyContent:'center',alignItems:'center'}}>
<Grid
      sx={{
          border: "1px solid #004ACB",
                width: '75%',
               background:'#004ACB',
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3%",
                padding: 0.4,
              }}
            >
              <Grid
                sx={{ marginTop: "2%", marginLeft:"5%"}}
              >
                <img src={fb}></img>
              </Grid>
              <Grid
                sx={{
                  marginLeft: "12%" ,
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: 17 ,
                }}
              >
                With facebook
              </Grid>
            </Grid>
</Grid>

<Grid sx={{marginTop: "3%",display:'flex',justifyContent:'center',alignItems:'center'}}>
<span>Don’t have an account ?</span> <span style={{color:'#004ACB'}}>sign up</span>
</Grid>

           
        </Grid>

        </Grid>
      </Grid>
    </div>)
}