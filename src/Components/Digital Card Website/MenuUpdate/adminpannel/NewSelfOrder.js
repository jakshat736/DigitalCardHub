import { Grid } from "@mui/material";
import SelfHeader from "./SelfHeader";
import SelfOrderPage from "./SelfOrderPage";


export default function NewSelfOrder()
{
    return(<Grid>
       <Grid>
       <SelfHeader/>
       </Grid>
       <Grid>
        <SelfOrderPage/>
       </Grid>
    </Grid>)
}