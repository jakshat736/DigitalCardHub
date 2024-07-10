import { Grade } from "@mui/icons-material";
import { Grid, Divider, Paper, InputBase, IconButton, Button } from "@mui/material";
import live from "../assets/livesupport.png";
import SearchIcon from "@mui/icons-material/Search";
import eye from "../../Digital Card Assets/eye.png"
import useMediaQuery from '@mui/material/useMediaQuery';
export default function EditMenuHeader() {
  const matches = useMediaQuery("(max-width:1000px)");
  const matchesA = useMediaQuery("(max-width:700px)");
  return (
    <Grid sx={{ width: "100%" }}>
      <Grid
        sx={{
          width: "100%",
          height: 86,
          background: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Grid
          sx={{
            width: matchesA?'97%':"85%",
            height: 86,
            display: "flex",
            alignItems: "center",
            flexDirection:matches?"column":'row'
            ,justifyContent:matches?'center':'normal'
          }}
        >
          <Grid sx={{width:matches?'100%':'30%',display:'flex',alignItems:matches?'center':'normal',justifyContent:matches?'center':'normal'}}>
            <Grid
              sx={{ fontSize:matches?'20px':"30px", fontWeight: 700, lineHeight:matches?'': "30px" }}>
           Edit menu items
            </Grid>
          </Grid>
          <Grid sx={{display:'flex',alignItems:'center',gap:2,width:matches?'100%':'50%',marginLeft:matches?'':'auto',marginTop:matches?'2%':''}}>
          <Grid sx={{textAlign:'center',fontSize:matchesA?'8px':'10px'}}>
           you can make changes and see the changes in your existing restaurant menu fro this dashboard.
          </Grid>
          <Grid>
          <Button
                  style={{
                    border: "1px solid #0066FF",
                    borderColor: "#0066FF",
                    width: 110,
                    height: "34px",
                    color: "#fff",
                    background: "#0066FF",
                    fontSize: "15px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "20px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",gap:4
                  }}
                >
            <div style={{marginTop:'5%'}}><img src={eye} width={18} ></img></div>
               <div>Preview</div>
                </Button>
          </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider
        style={{
          backgroundColor: "#95a5a6",
        }}
      />
    </Grid>
  );
}
