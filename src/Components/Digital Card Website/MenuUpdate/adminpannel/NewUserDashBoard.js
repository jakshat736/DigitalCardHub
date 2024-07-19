import { Grid } from "@mui/material";
import Header from "../adminpannel/Header";
import PersonalInformation from "./PersonalInformation";




export default function NewUserDashBoard()
{
    return(<Grid sx={{width:'100%'}}>
       <Grid>
        <Header/>
       </Grid>
       <Grid>
        <PersonalInformation/>
       </Grid>
    </Grid>)
}