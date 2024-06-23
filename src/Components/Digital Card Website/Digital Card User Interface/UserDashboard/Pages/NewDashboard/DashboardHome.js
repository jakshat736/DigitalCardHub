import { Grid } from "@mui/material";
import NewBussinessProfile from "../NewBussinessProfile";
import NewBussinessProfileLink from "../NewBussinessProfileLink";
import NewBussinessProfileEcommerce from "../NewBussinessProfileEcommerce";
import Newfooter from "../../../Components/NewFooter";

export default function DashboardHome()
{
    return(<Grid sx={{background:'#000',fontFamily:'Montserrat'}}>
       <Grid>
        <NewBussinessProfile/>
       </Grid>
       <Grid>
       <NewBussinessProfileLink/>
       </Grid>
       <Grid>
      <NewBussinessProfileEcommerce/>
       </Grid>
       <Grid>
      <Newfooter/>
       </Grid>
    </Grid>)
}