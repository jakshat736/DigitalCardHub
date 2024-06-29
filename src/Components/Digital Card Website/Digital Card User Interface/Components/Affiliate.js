import { Grid,InputBase,Button,Divider } from "@mui/material";
import NewHeader from "./NewHeader";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import useMediaQuery from '@mui/material/useMediaQuery';
import FormLabel from '@mui/material/FormLabel';
import Newfooter from "./NewFooter";
export default function Affiliate()
{

  const matches = useMediaQuery("(max-width:900px)");

    return(<Grid sx={{backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)"}}>
           <Grid>
            <NewHeader/>
        </Grid>
     <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

             <Grid sx={{color:'#fff',width:matches?'90%':'80%',height:"auto",marginTop:'3%',fontFamily: "'Space Grotesk', Helvetica, Arial, Lucida, sans-serif",}}>
             <Grid sx={{color:'#40739e',fontWeight:500,fontSize:matches?'16px':'22px',lineHeight:'30px',letterSpacing:'-2.5%',width:matches?'100%':'75%'}}>Ready to Register and Make Money with Digital Card Hub Affiliate Program? Fill the For to Get Started!</Grid>
             <Grid sx={{width:matches?'100%':'70%'}}>
             <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'5%',letterSpacing:'-2.4%'}}>
                Your Name *
            </Grid>
            <Grid sx={{display:'flex',gap:3}}>
                <Grid>
                <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: "100%",
                marginTop:'4%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>

             <Grid sx={{marginTop:'4%',fontSize:'14px',fontWeight:300,color:'#bdc3c7',marginLeft:'1%'}}>
              First
             </Grid>
             </Grid>
             <Grid>
             <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: "100%",
                marginTop:'4%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>
             <Grid sx={{marginTop:'4%',fontSize:'14px',fontWeight:300,color:'#bdc3c7',marginLeft:'1%'}}>
              last
             </Grid>
             </Grid>
             </Grid>
             <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
                Username *
            </Grid>
            <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: matches?'100%':"50%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>


            <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
                Account Email *
            </Grid>
            <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: matches?'100%':"50%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>

            <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
                Phone *
            </Grid>
            <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width:matches?'100%': "50%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>

            <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
                Company Name *
            </Grid>
            <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width:matches?'100%': "50%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>

            <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
                Website URL*
            </Grid>
            <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width:matches?'100%':"50%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>

            <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
                Instagram *
            </Grid>
            <Grid
              sx={{
                border: "1px solid #576574",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width:matches?'100%': "50%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>


            <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
             Marketing Experience  *
            </Grid>
              <select
                      style={{
                        border: "1px solid #576574",
                        borderRadius: "4px",
                        color: "#fff",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        background:'transparent',
                        height: "38px",
                        width:matches?'100%': "50%",
                        marginTop:'1%'
                      }}>
                      <option  style={{background:'#000'}} value="Month">0-1 Year</option>
                      <option  style={{background:'#000'}} value="India">1-3 Year</option>
                      <option  style={{background:'#000'}} value="India">3-5 Year</option>
                      <option  style={{background:'#000'}} value="India">5 Plus</option>
                    </select>

            <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',letterSpacing:'-2.4%'}}>
             Are You a Student *
            </Grid>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel  value="Student" style={{color:'#fff'}} control={<Radio style={{color:'#fff'}} />} />
        <FormControlLabel   value="Worker"  style={{color:'#fff'}} control={<Radio style={{color:'#fff'}}/>} />
      </RadioGroup>
      </FormControl>

      <Grid sx={{fontSize:'15px',fontWeight:500,marginTop:'4%',lineHeight:'28px',letterSpacing:'-2.4%'}}>
       How will you promote us? (Mention Marketing Channels like SEO, PPC, Performance Marketing or Traditional Sales/Marketing)
      </Grid>
      <Grid><textarea  style={{
                        border: "1px solid #576574",
                        borderRadius: "4px",
                        color: "#fff",
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        background:'transparent',
                        height:160,
                        width: "100%",
                        marginTop:'1%'}}  placeholder="Fell Free To Enquire anything here."></textarea></Grid>
           <Button
             style={{
                    border:'1px solid #C5D908',
                    borderColor:'#C5D908',
                    height:'40px',
                    color: "#000",
                    fontSize:matches?'14px':"16px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: '20px',
                    display:"flex",
                    lineHeight:'36px',
                    alignItems: "center",
                    justifyContent: "center",
                    background:'#C5D908',
                    width:matches?'100%':'50%',
                    marginTop:'3%'
                  }} >
                  REGISTER
                </Button>

                <Divider
        style={{
          backgroundColor: "#44bd32",
          marginTop:'5%'
        }}
      />

<Grid sx={{color:'#40739e',fontWeight:500,fontSize:matches?'16px':'22px',lineHeight:'30px',letterSpacing:'-2.5%',width:'100%',marginTop:'5%'}}>Ready to Register and Make Money with UnoGreen’s Smart Affiliate Program? Fill the For to Get Started!</Grid>

<Grid sx={{border:'1px solid #44bd32', width:'100%',borderRadius:'5px',height:'auto',padding:2,background:'#6ab04c',marginTop:'5%',marginBottom:'4%'}}>
<Grid sx={{color:'#000',fontSize:'16px',fontWeight:400,lineHeight:'30px',letterSpacing:'-2.4%',textAlign:'left'}}>
    <p style={{fontSize:'18px',fontWeight:500,}}>Thank  you for register for our affiliate program.</p>
    <p>our team carefully Ready to Register and Make Money with UnoGreen’s Smart Affiliate Ready to Register and Make Money with UnoGreen’s Smart Affiliate Ready to Register and Make Money with UnoGreen’s Smart Affiliate Ready to Register and Make Money with UnoGreen’s Smart Affiliate Ready to Register and Make Money with UnoGreen’s Smart Affiliate </p>
</Grid>
</Grid>
             </Grid>
             </Grid>
    </Grid>
    <Grid>
      <Newfooter/>
    </Grid>
    </Grid>)
}