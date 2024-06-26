import { Grade } from "@mui/icons-material";
import { Grid ,Divider} from "@mui/material";
import logo from "../UserAssets/digitallogo.png";
import Avatar from "@mui/material/Avatar";
import photo from "../Themes/ThemeAssets/ankit1.jpg";
export default function NewBussinessProfileHeader()
{
    return(<Grid sx={{width:'100%'}}>
           
      <Grid
        sx={{
          width: "100%",
          height: 90,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>

        <Grid
          sx={{
            width: "82%",
            height: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <img src={logo} width={100}></img>
          </Grid>
          <Grid>
            <Grid sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Grid
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "26px",
                  color: "#fff",
                }}
              >
                Hey,User
              </Grid>
              <Grid>
                <Avatar alt="Remy Sharp" src={photo} />
              </Grid>
            </Grid>
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