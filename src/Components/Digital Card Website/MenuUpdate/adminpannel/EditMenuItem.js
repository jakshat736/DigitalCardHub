import { Grid } from "@mui/material";
import EditMenuHeader from "./EditMenuHeader";
import EditMenuItemPage from "./EditMenuItemPage";

export default function EditMenuItem()
{
    return(<Grid>
        <Grid  sx={{ position: "sticky", top: "0", zIndex: 50 }}>
          <EditMenuHeader/>
        </Grid>
        <Grid>
          <EditMenuItemPage/>
        </Grid>
    </Grid>)
}