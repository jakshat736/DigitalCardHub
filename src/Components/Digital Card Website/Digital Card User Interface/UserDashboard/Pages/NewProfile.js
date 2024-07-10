import { Grid,Divider,Button } from "@mui/material";
import logo from "../UserAssets/digitallogo.png"
import Avatar from '@mui/material/Avatar';
import photo from "../Themes/ThemeAssets/ankit1.jpg"
import background from "../UserAssets/background.png"
import NewBussinessProfileHeader from "./NewBussinessProfileHeader";
export default function NewProfile()
{
    return(<Grid sx={{width:'100%',height:'100vh',background:'#000'}}>
     <NewBussinessProfileHeader/>
        <Grid sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',height:'86%',color:'#000000'}}>
          <Grid sx={{width:'70%',height:400,background:'#fff',borderRadius:'12px',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
            <img src={background} style={{width:'100%',position:'absolute',zIndex:10}}></img>
           <Grid sx={{zIndex:40,width:'50%',display:'flex',alignItems:'center',flexDirection:'column'}}>
            <Grid sx={{fontSize:'28px',fontWeight:600,lineHeight:'28px',zIndex:25,textAlign:'center'}}>
            Create Your Profile And Boost Your Digital business now
            </Grid>
            <Grid sx={{zIndex:30,marginTop:'2%'}}>
            <Button
                           style={{
                            border:'1px solid #000',
                            borderColor:'#000',
                            width: '300px',
                            height: '42px',
                            lineHeight:'36px',       
                            color: "#fff",
                            background:'#000',
                            fontSize: "16px",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: '10px',
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor:'-moz-grab'
                          }}>
                       Create Business Profile +
                        </Button> 
            </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Grid>)
}