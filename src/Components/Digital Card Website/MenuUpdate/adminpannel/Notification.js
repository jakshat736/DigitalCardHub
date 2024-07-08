import { Grid } from "@mui/material";
import NotificationHeader from "./NoticationHeader";
import NoticationPage from "./NotificationPage";

export default function Notification()
{
    return(<Grid>
        <Grid>
          <NotificationHeader/>
        </Grid>
        <Grid>
            <NoticationPage/>
        </Grid>
    </Grid>)
}