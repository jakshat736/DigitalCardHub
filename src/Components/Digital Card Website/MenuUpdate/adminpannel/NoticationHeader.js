
import { Grade } from "@mui/icons-material";
import { Grid, Divider, Paper, InputBase, IconButton, FormControlLabel } from "@mui/material";
import live from "../assets/livesupport.png";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from '@mui/material/useMediaQuery';
import Switch from '@mui/material/Switch';

export default function NoticationHeader() {

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
            width: "85%",
            height:86,
            display: "flex",
            alignItems: "center",
            justifyContent: matches?'center':"space-between",
            flexDirection:matches?'column':'row',
            gap:matchesA?.6:''

          }}
        >
          <Grid sx={{display:'flex',flexDirection:matches?'row':'column',alignItems:'center',gap:matches?1:''}}>
            <Grid
              sx={{ fontSize:matches?'20px':"30px", fontWeight: 700 }}
            >
           Notification settings
            </Grid>
          </Grid>
          <Grid>
           
          <Grid>
          <FormControlLabel
           style={{color:'#fff'}}
           value="start"
           control={<Switch style={{color:'#fff'}} />}
           label="Enable notification"
           labelPlacement="start"
         />
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


// import { Grade } from "@mui/icons-material";
// import { Grid, Divider, Paper, InputBase, IconButton } from "@mui/material";
// import live from "../assets/livesupport.png";
// import SearchIcon from "@mui/icons-material/Search";
// import Switch from '@mui/material/Switch';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// export default function NotificationHeader() {
//   return (
//     <Grid sx={{ width: "100%" }}>
//       <Grid
//         sx={{
//           width: "100%",
//           height: 86,
//           background: "#000",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//         }}
//       >
//         <Grid
//           sx={{
//             width: "85%",
//             height: 86,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Grid>
//             <Grid
//               sx={{ fontSize: "30px", fontWeight: 700, lineHeight: "30px" }}
//             >
//         Notification settings
//             </Grid>
//           </Grid>
//           <Grid>
//           <FormControlLabel 
//           style={{color:'#fff'}}
//           value="start"
//           control={<Switch style={{color:'#fff'}} />}
//           label="Enable notification"
//           labelPlacement="start"
//         />
//           </Grid>
//         </Grid>
//       </Grid>
//       <Divider
//         style={{
//           backgroundColor: "#95a5a6",
//         }}
//       />
//     </Grid>
//   );
// }
