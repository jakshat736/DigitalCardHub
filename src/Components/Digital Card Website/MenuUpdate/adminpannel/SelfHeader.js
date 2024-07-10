import { Grade } from "@mui/icons-material";
import { Grid, Divider, Paper, InputBase, IconButton } from "@mui/material";
import live from "../assets/livesupport.png";
import SearchIcon from "@mui/icons-material/Search";
export default function SelfHeader() {
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
            width: "85%",
            height: 86,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <Grid
              sx={{ fontSize: "30px", fontWeight: 700, lineHeight: "30px" }}
            >
             Self Order
            </Grid>
            <Grid sx={{ marginTop: "2%", fontWeight: 300, fontSize: "12px" }}>
              24 June 2024
            </Grid>
          </Grid>
          <Grid>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 350,
                borderRadius: 4,
                height: 38,
                background: "transparent",
                border: "1px solid #fff",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#fff", fontSize: "14px" }}
                placeholder="Enter search......."
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon style={{ color: "#fff" }} />
              </IconButton>
            </Paper>
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
