import { Grid, Button } from "@mui/material";
import NewHeader from "./NewHeader";
import handss from "../../Digital Card Assets/handss.png";
import handss2 from "../../Digital Card Assets/handss2.png";
import handss3 from "../../Digital Card Assets/handss3.png";
import handss4 from "../../Digital Card Assets/handss4.png";
import image from "../../Digital Card Assets/imagess.png";
import one from "../../Digital Card Assets/one.png";
import { useState } from "react";
import two from "../../Digital Card Assets/two.png";
import three from "../../Digital Card Assets/three.png";
import four from "../../Digital Card Assets/four.png";
import five from "../../Digital Card Assets/five.png";
import howline from "../../Digital Card Assets/howline.png";
import create from "../../Digital Card Assets/linecreate.png";
import useMediaQuery from '@mui/material/useMediaQuery';
import mockup1 from "../../Digital Card Assets/mockupc1.png"
import mockup2 from "../../Digital Card Assets/mockupc2.png"
import mockup3 from "../../Digital Card Assets/mockupc3.png"
import mockup4 from "../../Digital Card Assets/mockupc4.png"
import mockup5 from "../../Digital Card Assets/mockupc5.png"

import right from "../../Digital Card Assets/righthow.png"

export default function NewHowToCreate() {

  const [creates, setCreate] = useState(false);

  const matche = useMediaQuery("(max-width:1400px)");
 const matches = useMediaQuery("(max-width:800px)");
 const matchesA = useMediaQuery("(max-width:500px)");


  const handleCreate = () => {
    setCreate(!creates);
    setTimeout(() => {
      if (creates === false) {
        var section = document.getElementById("create");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", position: "fixed" });
        }
      }
    }, 100);
  }

  return (
    <Grid
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
        fontFamily: "Montserrat",
      }}
    >
      <Grid>
        <NewHeader />
      </Grid>

      <Grid sx={{ width: "100%", height: "90vh", position: "relative" }}>
        <Grid sx={{ display: "flex" }}>
          <Grid>
            <img src={handss} style={{ width: matches?300:"50%" }}></img>
          </Grid>
          {matches?<></>:<Grid style={{ marginLeft: "auto", marginTop: "10%" }}>
            <img src={handss2} width={450}></img>
          </Grid>}
        </Grid>
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: matchesA?110:140,
            flexDirection: "column",
          }}
        >
          <Grid
            sx={{
              fontSize: matches?'30px':"44px",
              fontWeight: 700,
              lineHeight: matches?'35px':"44px",
              letterSpacing: "-2.4%",
              color: "#fff",
              textAlign:'center'
            }}
          >
            How to create Your Digital Business Card ?
          </Grid>
          <Grid
            sx={{
              width: "70%",
              fontSize: matches?'14px': "16px",
              fontWeight: 400,
              lineHeight:  matches?'22px':"28px",
              letterSpacing: "-2.4%",
              color: "#fff",
              textAlign: "center",
              marginTop: matches?'4%': "2%",
            }}
          >
            Creating a digital card is a simple and creative way to share your
            personal or professional information. Here are the steps to create
            your own digital business card.
          </Grid>
          <Grid sx={{ width:matches?'80%':"30%", marginTop:  matches?'5%':"2%" }}>
            <Button
              fullWidth
              style={{
                border: "1px solid #fff",
                borderColor: "#fff",
                background: "#fff",
                height: "50px",
                color: "#000",
                fontSize:  matches?'18px':"25px",
                fontWeight: 600,

                textTransform: "none",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "22px",
                letterSpacing: "-2.2%",
              }}
            >
              Follow the Steps
            </Button>
            <Grid
              sx={{
                fontSize: matches?'16px': "20px",
                fontWeight: 500,
                lineHeight: "28px",
                letterSpacing: "-2.4%",
                color: "#fff",
                textAlign: "center",
                marginTop: matches?'8%': "4%",
              }}
            >
              And make your business digital.
            </Grid>
          </Grid>
          <Grid onClick={handleCreate} sx={{ marginTop:matches?'10%':"5%", cursor: "pointer" }}>
            <img src={image} width={30}></img>
          </Grid>
        </Grid>
      </Grid>
        <div id="create"></div>
     {creates?<><Grid
        sx={{
          width: "100%",
          height:matchesA?'220vh': matches?'300vh':'410vh',
          position: "relative",
          color: "#fff",
          marginBottom:'4%',
        }}>

        <Grid sx={{ display: "flex"  }}>
          <Grid>
            <img src={handss3} style={{ width: matches?100: "50%" }}></img>
          </Grid>
          <Grid style={{ marginLeft: "auto", marginTop: "10%" }}>
            <img src={handss4} width={ matches?150:450}></img>
          </Grid>
        </Grid>
        <Grid
          sx={{
            width: "100%",
        
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 75,
            flexDirection: "column",
          }}
        >
          <Grid sx={{ width: matche?'96%':"60%"   }}>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Grid>
                <img src={one} width={matchesA?50:80}></img>
              </Grid>
              <Grid sx={{ marginLeft: "2%" }}>
                <Grid
                  sx={{
                    fontSize:matchesA?'14px': matches?'20px':"32px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    letterSpacing: "-2.4%",
                  }}
                >
                  Click on “Create your” button.
                </Grid>
                <Grid
                  sx={{
                    fontSize:matchesA?'10px': "16px",
                    fontWeight: 400,
                    lineHeight:matchesA?'14px':  "26px",
                    letterSpacing: "-2.4%",
                  }}
                >
                  Make first step by clicking on “Create Your” or Login or sign
                  up directly to start further
                </Grid>
              </Grid>
            </Grid>

<Grid sx={{display:'flex',alignItems:matche?'normal':'center',justifyContent:matche?'normal':'center'}}>
 {matches?<></>:<Grid sx={{marginLeft:'4.3%'}}>
<img src={create} height={450} width={1}></img>
 </Grid>}
 <Grid sx={{height:matchesA?200: 300}}>
 <img src={mockup1} style={{width:matchesA?'50%': '40%',marginLeft:'15%',marginTop:matche?'10%':'-2%'}}></img>
 </Grid>
</Grid>


<Grid sx={{ display: "flex", alignItems: "center" }}>
              <Grid>
                <img src={two} width={matchesA?50: 80}></img>
              </Grid>
              <Grid sx={{ marginLeft: "2%" }}>
                <Grid
                  sx={{
                    fontSize:matchesA?'14px': matches?'20px': "32px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    letterSpacing: "-2.4%",
                  }}
                >
                 Login or Sign Up your account.
                </Grid>
                <Grid
                  sx={{
                    fontSize:matchesA?'10px':  "16px",
                    fontWeight: 400,
                    lineHeight: matchesA?'14px': "26px",
                    letterSpacing: "-2.4%",
                  }}>
                 To create a digital business profile you must have to Login or if your don’t have a account then make one.
                </Grid>
              </Grid>
            </Grid>



            <Grid sx={{display:'flex',alignItems:matche?'normal':'center',justifyContent:matche?'normal':'center'}}>
            {matches?<></>:<Grid sx={{marginLeft:'4.3%'}}>
<img src={create} height={450} width={1}></img>
 </Grid>}
 <Grid  sx={{height:matchesA?200: 300}}>
 <img src={mockup2} style={{width:matchesA?'50%': '40%',marginLeft:'15%',marginTop:matche?'6%':'-2%'}}></img>
 </Grid>
</Grid>


<Grid sx={{ display: "flex", alignItems: "center"}}>
              <Grid>
                <img src={three} width={matchesA?50: 80}></img>
              </Grid>
              <Grid sx={{ marginLeft: "2%" }}>
                <Grid
                  sx={{
                    fontSize:matchesA?'14px': matches?'20px': "32px",
                    fontWeight: 600,
                    lineHeight:matchesA?'20px':  "32px",
                    letterSpacing: "-2.4%",
                  }}
                >
                 Click on “create business profile” button.
                </Grid>
                  <Grid
                  sx={{
                    fontSize:matchesA?'10px':  "16px",
                    fontWeight: 400,
                    lineHeight:matchesA?'14px':  "26px",
                    letterSpacing: "-2.4%",
                  }}
                >
                 To create a digital business profile you must have to Login or if your don’t have a account then make one.
                </Grid>
              </Grid>
            </Grid>



            <Grid sx={{display:'flex',alignItems:matche?'normal':'center',justifyContent:matche?'normal':'center'}}>
            {matches?<></>:<Grid sx={{marginLeft:'4.3%'}}>
<img src={create} height={450} width={1}></img>
 </Grid>}
 <Grid  sx={{height:matchesA?200: 300}}>
 <img src={mockup3} style={{width:matchesA?'50%': '40%',marginLeft:'15%',marginTop:matche?'10%':'-2%'}}></img>
 </Grid>
</Grid>

<Grid sx={{ display: "flex", alignItems: "center" }}>
              <Grid>
                <img src={four} width={matchesA?50: 80}></img>
              </Grid>
              <Grid sx={{ marginLeft: "2%" }}>
                <Grid
                  sx={{
                    fontSize:matchesA?'14px':  matches?'20px':"32px",
                    fontWeight: 600,
                    lineHeight:matchesA?'20px':  "32px",
                    letterSpacing: "-2.4%",
                  }}
                >
                Fill the informationa about your business.
                </Grid>
                <Grid
                  sx={{
                    fontSize:matchesA?'10px':  "15px",
                    fontWeight: 400,
                    lineHeight:matchesA?'14px':  "22px",
                    letterSpacing: "-2.4%",
                  }}
                >
                 To make your business more eye-catching and to increase the analytics and interaction provide your Business or Company name to begin the process and also fill all the needed information.
                </Grid>
              </Grid>
            </Grid>

            <Grid sx={{display:'flex',alignItems:matche?'normal':'center',justifyContent:matche?'normal':'center'}}>
            {matches?<></>:<Grid sx={{marginLeft:'4.3%'}}>
<img src={create} height={450} width={1}></img>
 </Grid>}
 <Grid sx={{height:matchesA?200: 300}}>
 <img src={mockup4} style={{width:matchesA?'50%': '40%',marginLeft:'15%',marginTop:matche?'10%':'-2%'}}></img>
 </Grid>
</Grid>


<Grid sx={{ display: "flex", alignItems: "center" }}>
              <Grid>
                <img src={five} width={matchesA?50: 80}></img>
              </Grid>
              <Grid sx={{ marginLeft: "2%" }}>
                <Grid
                  sx={{
                    fontSize:matchesA?'14px': matches?'20px': "32px",
                    fontWeight: 600,
                    lineHeight:matchesA?'20px':  "32px",
                    letterSpacing: "-2.4%",
                  }}
                >
                  Done , your profile is ready.
                </Grid>
                <Grid
                  sx={{
                    fontSize:matchesA?'10px':  "16px",
                    fontWeight: 400,
                    lineHeight: matchesA?'14px': "26px",
                    letterSpacing: "-2.4%",
                  }}
                >
                 This is the last to save your information and you can preview your profile by clicking on preview button and here you have your digital business profile go to your customers/clients.
                </Grid>
              </Grid>
            </Grid>


<Grid sx={{display:'flex',alignItems:matche?'normal':'center',justifyContent:matche?'normal':'center'}}>
{matches?<></>:<Grid sx={{marginLeft:'4.3%'}}>
 <img src={create} height={matche?600:400} width={1}></img>
 </Grid>}
 <Grid>
 <img src={mockup5} style={{width:matchesA?'70%': '50%',marginLeft:'15%',marginTop:'4%'}}></img>
 </Grid>
</Grid>



<Grid sx={{ display: "flex", alignItems:"center" }}>
              <Grid>
                <img src={right} width={matchesA?50: 80} style={{marginTop: matche?"":'-50%'}}></img>
              </Grid>
            </Grid>
 
<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'10%'}}></Grid>
<Grid sx={{fontSize:matchesA?'10px': '16px',fontWeight:400,lineHeight:matchesA?'15px': '26px',color:'#fff',marginTop:'8%',textAlign:'center'}}>
Your visually appealing digital business card is ready to use! Design it with contact details, visuals, and clickable links. Optimize for sharing, save in a shareable format, and update regularly. Share via email or social media
</Grid>
</Grid>
        </Grid>
      </Grid></>:<></>}

      <Grid sx={{ width: "100%" }}></Grid>
    </Grid>
  );
}
