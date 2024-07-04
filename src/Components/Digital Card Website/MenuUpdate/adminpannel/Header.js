import { Grade } from "@mui/icons-material";
import { Grid ,Divider} from "@mui/material";
import live from "../assets/livesupport.png"
export default function NewBussinessProfileHeader()
{
    return(<Grid sx={{width:'100%'}}>
           
      <Grid
        sx={{
          width: "100%",
          height: 86,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color:'#fff'
        }}>

        <Grid
          sx={{
            width: "82%",
            height: 86,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
<Grid>
<Grid sx={{fontSize:'30px',fontWeight:700,lineHeight:'30px'}}>
Restaurant details
</Grid>
<Grid sx={{marginTop:'2%',fontWeight:300,fontSize:'12px'}}>
Eat Healthy Resaturant 
</Grid>
</Grid>
<Grid>
    <img src={live} width={150}></img>
</Grid>

          </Grid>
      </Grid>



      <Divider
        style={{
          backgroundColor: "#95a5a6",
        }}
      />
    </Grid>)
}