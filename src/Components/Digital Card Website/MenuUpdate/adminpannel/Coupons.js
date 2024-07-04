import { Grid } from "@mui/material";
import OrderHeader from "./OrderHeader";
import CouponPage from "./CouponPage";
import CouponHeader from "./CouponHeader";
export default function Coupons()
{
    return(<Grid>
        <Grid  sx={{ position: "sticky", top: "0", zIndex: 50 }}>
            <CouponHeader/>
        </Grid>
        <Grid>
        <CouponPage/>
        </Grid>
    </Grid>)
}