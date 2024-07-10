import { Grid } from "@mui/material";
import Header from "../adminpannel/Header";
import NewBussinessProfile from "../../Digital Card User Interface/UserDashboard/Pages/NewBussinessProfile";
import NewBussinessProfileLink from "../../Digital Card User Interface/UserDashboard/Pages/NewBussinessProfileLink";
import NewBussinessProfileEcommerce from "../../Digital Card User Interface/UserDashboard/Pages/NewBussinessProfileEcommerce";
import Link from "./Link";
import Ecommerce from "./Ecommerce";


export default function NewUserDashBoard()
{
    return(<Grid sx={{width:'100%'}}>
       <Grid>
        <Header/>
       </Grid>
       <Grid>
        <NewBussinessProfile/>
       </Grid>
       <Grid>
       <Link/>
       </Grid>
       <Grid>
       <Ecommerce/>
       </Grid>
    </Grid>)
}