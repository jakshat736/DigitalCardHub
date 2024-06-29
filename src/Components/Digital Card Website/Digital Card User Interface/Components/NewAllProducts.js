import { Grid,Button,Divider,Typography, } from "@mui/material";
import NewHeader from "./NewHeader";
import { useState,useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import hand from "../../Digital Card Assets/hand.png"
import search from "../../Digital Card Assets/search.png"
import line from "../../Digital Card Assets/lineallproduct.png"
import image1 from "../../Digital Card Assets/producti1.png"
import image2 from "../../Digital Card Assets/producti2.png"
import image3 from "../../Digital Card Assets/producti3.png"
import image4 from "../../Digital Card Assets/producti4.png"
import pvccard from "../../Digital Card Assets/pvccardnew.png"
import threecard from "../../Digital Card Assets/threecard.png"
import Blur from "../../Digital Card Assets/blurimage.png"
import { useStyles } from "../../Digital Card User Interface/Components/AllProductCss";
import { useStyles2 } from "../../Digital Card User Interface/Components//AllProductSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../../Digital Card Assets/photo.jpg"
import blur11 from "../../Digital Card Assets/white.png"
import photo3 from "../../Digital Card Assets/photo2.jpg"
import photo2 from "../../Digital Card Assets/photo3.jpg"
import photo4 from "../../Digital Card Assets/photo4.jpg"
import arrow from "../../Digital Card Assets/arrowforproduct.png"
import { ArrowBackSharp } from "@mui/icons-material";
import Newfooter from "./NewFooter";
import { useNavigate } from "react-router-dom";
export default function NewAllProducts()
{
  var navigate=useNavigate()

  const handleNagivate=()=>{
      navigate('/newallproduct2')
  }
    const classes = useStyles()
    const classes2 = useStyles2()
    const [statuscamera,setStatuscamera]=useState(false)
    const [statuscamera2,setStatuscamera2]=useState(false)
    const [statuscamera3,setStatuscamera3]=useState(false)
    const matches = useMediaQuery("(max-width:900px)");
  
     const CustomPrevArrow = (props) => {
      const { className, onClick } = props;
      return (
        <div className={className} onClick={onClick}>
          <img src={arrow} width={80} />
        </div>
      );
    };
    
    // Custom Next Arrow Component
    const CustomNextArrow = (props) => {
      const { className, onClick } = props;
      return (
        <div className={className} onClick={onClick}>
           <img src={arrow} width={80} />
        </div>
      );
    };

    var settings = {               
      infinite: true,
      speed: 1000,
      dots: false,
      slidesToShow:matches?1: 4,
      autospeed: 1,
      slidesToScroll: 4,
      arrows:false
     };
    return(<Grid sx={{backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)"}}>
        <Grid>
            <NewHeader/>
        </Grid>
        <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'Montserrat',flexDirection:"column"}}>
            <Grid sx={{width:'82%',height:matches?'auto':520,marginTop:matches?'7%':'7%'}}>
                <Grid sx={{width:'100%',display:'flex',flexDirection:matches?"column":'row'}}>
                    <Grid sx={{display:'flex',flexDirection:'column',width:matches?'100%':'50%',height:matches?'auto':520,color:'#fff',justifyContent:matches?'center':'normal',alignItems:matches?'center':'normal'}}>
                      <Grid sx={{fontSize:matches?'24px':'2.9vw',fontWeight:600,lineHeight:matches?'30px':'52px',letterSpacing:'-2.4%',textAlign:matches?'center':''}}>
                        Explore Wide Range of Products Here
                        </Grid>
                        <Grid sx={{fontSize:matches?'12px':'14px',fontWeight:400,lineHeight:matches?'16px':'28px',letterSpacing:'-.4px',color:'#979797',marginTop:'2%',textAlign:matches?'center':''}}>
                        Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!
                        </Grid>
                        <Grid sx={{marginTop:'2%'}}>
                        <Button
                        onClick={handleNagivate}
                sx={{
                 border:'3.2px solid #fff',
                  height:matches?35:'3vw',
                  width:matches?140:'16vw',
                  color: "#fff",
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: matches?1.3:2.6,
                  display: "flex",
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "16px",
                  fontWeight: 700,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
              Explore
              </Button>
                    </Grid>
                    <Grid sx={{display:'flex',marginTop:'8%',alignItems:"center",gap:5}}>
                        <Grid sx={{display:'flex',gap:4}}>
                          <Grid>
                            <img src={hand} width={50} style={{marginTop:'2%'}}></img>
                          </Grid>
                          <Grid sx={{display:'flex',flexDirection:'column'}}>
                          <Grid sx={{fontSize:matches?'20px':'24px',fontWeight:600,letterSpacing:'-2%'}}>
                            500+
                          </Grid>
                          <Grid sx={{fontSize:matches?'12px':'16px',fontWeight:400,letterSpacing:'-2%'}}>
                          Business using DCH
                          </Grid>
                          </Grid>
                    </Grid>
                   <Grid>
                    <img src={line} width={1}></img>
                   </Grid>
                   <Grid sx={{display:'flex',gap:4}}>
                          <Grid>
                            <img src={search} width={40} style={{marginTop:'2%'}}></img>
                          </Grid>
                          <Grid sx={{display:'flex',flexDirection:'column'}}>
                          <Grid sx={{fontSize:matches?'20px':'24px',fontWeight:600,letterSpacing:'-2%'}}>
                            3.2k+
                          </Grid>
                          <Grid sx={{fontSize:matches?'12px':'16px',fontWeight:400,letterSpacing:'-2%'}}>
                          Happy DCH card users.
                          </Grid>
                          </Grid>
                      </Grid>
                    </Grid>
                    </Grid> 
                    <Grid sx={{display:'flex',width:matches?'100%':'50%',height:'auto',color:'#fff',alignItems:matches?'center':'normal',justifyContent:matches?'center':'normal',marginTop:matches?'10%':''}}>
                     <Grid sx={{display:'flex',flexDirection:'column',marginLeft:matches?'':'auto'}}>
                        <Grid>
                            <img src={image1} style={{width:matches?'160px':'214px',height:matches?'155px':'205px'}}></img>
                        </Grid>
                        <Grid sx={{marginTop:'20%'}}>
                            <img src={image2} style={{width:matches?'160px':'214px',height:matches?'75px':'91px'}}></img>
                        </Grid>
                     </Grid>
                     <Grid sx={{display:'flex',flexDirection:'column',marginLeft:'8%'}}>
                     <Grid >
                            <img src={image3} style={{width:matches?'160px':'214px',height:matches?'75px':'91px'}}></img>
                        </Grid>
                        <Grid sx={{marginTop:'20%'}}>
                            <img src={image4} style={{width:matches?'160px':'214px',height:matches?'155px':'205px',borderRadius:'10px'}}></img>
                        </Grid>
                     </Grid>
                    </Grid>    
                </Grid>
            </Grid>

            <Grid sx={{width:matches?'95%':'82%',height:matches?'auto':800,marginTop:matches?'10%':'1.5%',display:'flex',alignItems:'center',flexDirection:"column",color:'#fff'}}>
                <Grid sx={{fontSize:matches?'24px':'52px',fontWeight:600,lineHeight:matches?'30px':'52px',letterSpacing:'-2.4%'}}>
                Our Latest Arrivals
                </Grid>
                <Grid sx={{marginTop:'4%',display:'flex',width:'100%',justifyContent:'space-between',flexDirection:matches?'column':'row',gap:matches?5:'',alignItems:matches?'center':'normal'}}>
               <Grid className={classes.imageContainer}>
                    <Grid sx={{height:350}}>
                    <Grid sx={{marginTop:'7%'}}>
                        <img src={pvccard}  className={classes.animatedImage} ></img>
                    </Grid>
                    <Typography style={{marginTop:'20%'}}>
                            <img src={threecard} className={classes.animatedImage2}></img>
                    </Typography>
                    </Grid>
                    <Grid className={classes.animatedImage3} sx={{zIndex:10,alignItems:'center'}}>
                        <img src={Blur} style={{width:'100%',borderRadius:'18px',position:'relative'}}></img>

                    <Grid sx={{position:"absolute",marginTop:matches?'13%':'3%',zIndex:30,marginLeft:'1%',display:'flex'}}>
                        <Grid>
                     <Grid sx={{fontSize:'15px',fontWeight:500,letterSpacing:'-2.6%',lineHeight:'26px',color:'#fff',fontFamily:'poppins'}}>
                        NCF Business Cards
                     </Grid>
                     <Grid sx={{fontSize:'11px',fontWeight:300,letterSpacing:'-2.4%',lineHeight:'26px',color:'#dfe6e9',fontFamily:'poppins',marginTop:'-6%'}}>
                        Starting From Rs.299
                     </Grid>
                    </Grid>
                    <Grid>
                    <Button
                sx={{
                 border:'2px solid #757575',
                  height: 32,
                  width:'7vw',
                  backgroundColor:'#000',
                  color: "#fff",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 1,
                  display: "flex",
                  marginLeft:'60%',
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "12px",
                  fontWeight: 500,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
              Explore
              </Button>
                    </Grid>
                    </Grid>
                    </Grid>

                    </Grid>

                    <Grid  className={classes.imageContainer}>
                    <Grid sx={{height:350}}>
                    <Grid sx={{marginTop:'7%'}}>
                        <img src={pvccard}  className={classes.animatedImage} ></img>
                    </Grid>
                    <Typography style={{marginTop:'20%'}}>
                            <img src={threecard} className={classes.animatedImage2}></img>
                    </Typography>
                    </Grid>
                    <Grid className={classes.animatedImage3}  sx={{zIndex:10,alignItems:'center'}}>
                        <img src={Blur} style={{width:'100%',borderRadius:'18px',position:'relative'}}></img>

                    <Grid sx={{position:"absolute",marginTop:matches?'13%':'3%',zIndex:30,marginLeft:'1%',display:'flex'}}>
                        <Grid>
                     <Grid sx={{fontSize:'15px',fontWeight:500,letterSpacing:'-2.6%',lineHeight:'26px',color:'#fff',fontFamily:'poppins'}}>
                        NCF Business Cards
                     </Grid>
                     <Grid sx={{fontSize:'11px',fontWeight:300,letterSpacing:'-2.4%',lineHeight:'26px',color:'#dfe6e9',fontFamily:'poppins',marginTop:'-6%'}}>
                        Starting From Rs.299
                     </Grid>
                    </Grid>
                    <Grid>
                    <Button
                sx={{
                 border:'2px solid #757575',
                  height: 32,
                  width:'7vw',
                  backgroundColor:'#000',
                  color: "#fff",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 1,
                  display: "flex",
                  marginLeft:'60%',
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "12px",
                  fontWeight: 500,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
              Explore
              </Button>
                    </Grid>
                    </Grid>
                    </Grid>

                    </Grid>





                    <Grid className={classes.imageContainer}>
                    <Grid sx={{height:350}}>
                    <Grid sx={{marginTop:'7%'}}>
                        <img src={pvccard}  className={classes.animatedImage}></img>
                    </Grid>
                    <Typography style={{marginTop:'20%'}}>
                            <img src={threecard} className={classes.animatedImage2}></img>
                    </Typography>
                    </Grid>
                    <Grid className={classes.animatedImage3} sx={{zIndex:10,alignItems:'center'}}>
                        <img src={Blur} style={{width:'100%',borderRadius:'18px',position:'relative'}}></img>

                    <Grid sx={{position:"absolute",marginTop:matches?'13%':'3%',zIndex:30,marginLeft:'1%',display:'flex'}}>
                        <Grid>
                     <Grid sx={{fontSize:'15px',fontWeight:500,letterSpacing:'-2.6%',lineHeight:'26px',color:'#fff',fontFamily:'poppins'}}>
                        NCF Business Cards
                     </Grid>
                     <Grid sx={{fontSize:'11px',fontWeight:300,letterSpacing:'-2.4%',lineHeight:'26px',color:'#dfe6e9',fontFamily:'poppins',marginTop:'-6%'}}>
                        Starting From Rs.299
                     </Grid>
                    </Grid>
                    <Grid>
                    <Button
                sx={{
                 border:'2px solid #757575',
                  height: 32,
                  width:'7vw',
                  backgroundColor:'#000',
                  color: "#fff",
                  justifyContent: "center",
                  textTransform: "none",
                  padding: 1,
                  display: "flex",
                  marginLeft:'60%',
                  borderRadius: 20,
                  marginTop: "3%",
                  fontSize: "12px",
                  fontWeight: 500,
                  alignItems:'center',
                  fontFamily:'Montserrat'
                }}
              >
              Explore
              </Button>
                    </Grid>
                    </Grid>
                    </Grid>

                    </Grid>






                </Grid>
            </Grid>    


            <Grid sx={{width:'100%',height:matches?'auto':800,display:'flex',alignItems:'center',flexDirection:"column",color:'#fff',marginTop:matches?'8%':'',}}>
                <Grid sx={{fontSize:matches?'24px':'52px',fontWeight:600,lineHeight:matches?'30px':'52px',letterSpacing:'-2.4%',textAlign:matches?'center':'',width:matches?'80%':'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                OUR TOP PROFESSIONALS
                </Grid>
                <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'24px':'46px',letterSpacing:'2%',marginTop:'1%',textAlign:matches?'center':''}}>
                They are our reviews with happy user
                </Grid>
                <Grid sx={{marginTop:'5%',display:'flex',width:'100%',justifyContent:'space-between'}}>
               <Grid style={{width:'100%'}}>
               <Slider {...settings}>
        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer',marginLeft:matches?'2.5%':''}}>
          <img src={photo4} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid>
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Chinmay Sharma
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Ui/Ux designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>

        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo2} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Sonam Gupta
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         HR at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>


        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo3} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Ankit Narwariya
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Front-end Developer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>


        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo4} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Junaid Solanki
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Graphic designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>


         <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Chinmay Sharma
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Ui/Ux designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>

        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer'}}>
          <img src={photo} className={classes2.animatedImage} style={{zIndex:10}}></img>
         <Grid> 
         <img src={blur11} className={classes2.animatedImage4} style={{zIndex:50,marginTop:'-20%'}}></img>
         <Grid className={classes2.animatedImage2} sx={{color:'#0054B6',fontSize:'24px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-16%',marginLeft:'1%'}}>
         Chinmay Sharma
         </Grid>
         <Grid className={classes2.animatedImage3} sx={{color:'#022D60',fontSize:'14px',fontWeight:700,lineHeight:'28px',zIndex:60,marginTop:'-1.4%',marginLeft:'1%'}}>
         Ui/Ux designer at IBuzz Tech
         </Grid>
         </Grid> 
        </Grid>
      </Slider>
            </Grid>
                </Grid>
            </Grid>   




        </Grid>
        <Grid sx={{marginTop:matches?'10%':''}}>
  <Newfooter/>
</Grid>
      </Grid>)
}