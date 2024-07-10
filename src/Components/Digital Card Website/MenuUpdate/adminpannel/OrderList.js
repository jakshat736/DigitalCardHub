import { Grid } from "@mui/material";
import OrderHeader from "./OrderHeader";
import OrderListCard from "./OrderListCard";

export default function OrderList()
{
    return(<Grid sx={{width:'100%'}}>
        <Grid  sx={{ position: "sticky", top: "0", zIndex: 50 }}>
        <OrderHeader/>
        </Grid>
        <Grid>
         <OrderListCard/>   
        </Grid>
    </Grid>)
}