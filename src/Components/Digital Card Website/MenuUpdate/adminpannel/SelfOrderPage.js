import { Button, Divider, Grid } from "@mui/material";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
export default function SelfOrderPage()
{
    return(<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Grid sx={{width:'85%',height:'100vh',marginTop:'3%'}}>
              <Grid sx={{fontWeight:600,fontSize:'24px',lineHeight:'20px',color:'#fff'}}>
              Select item :
              </Grid>
              <Grid sx={{width:'100%',height:'60vh',background:'#fff',boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, .1)",borderRadius:'10px',marginTop:'3%'}}>
                <Grid sx={{width:'100%',display:'flex',height:'72px'}}>
              <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: '150px',
                    height: '72px',
                    color: "#fff",
                    background: "#000",
                    fontSize: "22px",
                    fontWeight: 400,
                    textTransform: "none",
                    borderTopLeftRadius:'10px',
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 Category
                </Button>
                <Button
                  style={{
                    width: '145px',
                    height: '72px',
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 500,
                    textTransform: "none",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 Coffee
                </Button>
                <Button
                  style={{
                    width: '150px',
                    height: '72px',
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 500,
                    textTransform: "none",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                Snacks
                </Button>
                <Button
                  style={{
                    width: '145px',
                    height: '72px',
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 500,
                    textTransform: "none",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 Burgers
                </Button>
                <Button
                  style={{
                    width: '150px',
                    height: '72px',
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 500,
                    textTransform: "none",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                 Chinese
                </Button>

                <Button
                  style={{
                    width: '170px',
                    height: '72px',
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 500,
                    textTransform: "none",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                South Indian
                </Button>
                <Button
                  style={{
                    width: '150px',
                    height: '72px',
                    color: "#000",
                    fontSize: "22px",
                    fontWeight: 500,
                    textTransform: "none",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
               More v
                </Button>
                </Grid>
                <Divider
              style={{
                backgroundColor: "#000000",
              }}
            />
<Grid sx={{width:'100%',marginTop:'3%'}}>
<Grid sx={{display:'flex',justifyContent:'space-around'}}>
 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image1} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 espresso
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image2} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Copuccino
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image3} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Dosa
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image4} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 filter coffee
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image5} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Cold Brew
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image1} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Lattes
 </Grid>
 </Grid>
</Grid>


<Grid sx={{display:'flex',justifyContent:'space-around',marginTop:'5%'}}>
 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image1} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 espresso
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image2} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Copuccino
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image3} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Dosa
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image4} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 filter coffee
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image5} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Cold Brew
 </Grid>
 </Grid>

 <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    <Grid>
 <img src={image1} width={100}></img>
 </Grid>
 <Grid sx={{fontSize:'14px',fontWeight:500,color:'#000'}}>
 Lattes
 </Grid>
 </Grid>
</Grid>













</Grid>

              </Grid>
             </Grid>
    </Grid>)
}