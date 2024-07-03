import { Grid,Button,Stack,Rating,Typography } from "@mui/material";
import NewHeader from "./NewHeader";
import headline from "../../Digital Card Assets/headline.png"
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import card from "../../Digital Card Assets/card.png"
import card1 from "../../Digital Card Assets/card1.png"
import card2 from "../../Digital Card Assets/card2.png"
import card3 from "../../Digital Card Assets/card3.png"
import {  useParams} from "react-router-dom";
import Menu from "@mui/material/Menu";
import {  useState } from 'react'
import { getData, serverURL,postData } from '../../../Services/NodeServices'
import { useStyles } from "../../Digital Card User Interface/Components/HoveredCss";
import MenuItem from "@mui/material/MenuItem";
import card4 from "../../Digital Card Assets/card4.png"
import { useLocation } from "react-router-dom";
import card5 from "../../Digital Card Assets/card5.png"
import card6 from "../../Digital Card Assets/card6.png"
import card7 from "../../Digital Card Assets/card7.png"
import photo from "../../Digital Card Assets/photo.jpg"
import blur11 from "../../Digital Card Assets/white.png"
import photo3 from "../../Digital Card Assets/photo2.jpg"
import photo2 from "../../Digital Card Assets/photo3.jpg"
import photo4 from "../../Digital Card Assets/photo4.jpg"
import { useStyles2 } from "../../Digital Card User Interface/Components//AllProductSlider";
import heart from "../../Digital Card Assets/heart.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./Services";
import Newfooter from "./NewFooter";
import { useNavigate } from "react-router-dom";

export default function CategoryProducts()
{  
  var navigate=useNavigate()
  const handleNagivate=()=>{
    navigate('/productcomponents')
}

const [add, setAdd] = useState(false);
const [count, setCount] = useState(0);

const handleClickAdd = () => {
  setAdd(true);
  var c = count + 1;
  setCount(c);
};

const handleMinus = () => {
  var c = count - 1;
  if (c >= 0) {
    setCount(c);
  }
};

const classes = useStyles();
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
    const matches = useMediaQuery("(max-width:900px)");
    const matchesA = useMediaQuery("(max-width:1400px)");
    const matchesB = useMediaQuery("(max-width:500px)");
    const classes2 = useStyles2()
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);
    const sliderRef3 = useRef(null);
    const originalAutoplaySpeed = useRef(1000);


    const { _id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const CategoryName = location.state.category

    const fetchProductByCategory = async () => {
        setLoading(true)
        const result = await postData('products/fetchProductByCategory', { _id: _id })
        setData(result.data)
        if (result?.data?.length > 0) {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProductByCategory()
    }, [_id])


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [])

///////////////////////////////////////////////



  useEffect(() => {
    const slider = sliderRef.current;


    if (!slider || !slider.innerSlider || !slider.innerSlider.list) {
        return;
      }


    const handleMouseEnter = () => {
      slider.slickPlay();
    };

    const handleMouseLeave = () => {
      slider.slickPause();
    };

  

    const sliderList = slider.innerSlider.list;

    sliderList.addEventListener("mouseenter", handleMouseEnter);
    sliderList.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      if (sliderList) {
        sliderList.removeEventListener("mouseenter", handleMouseEnter);
        sliderList.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  //////////////////////////

  useEffect(() => {
    const slider = sliderRef2.current;

    const handleMouseEnter = () => {
      slider.slickPlay();
    };

    

    const handleMouseLeave = () => {
      slider.slickPause();
    };

    if (!slider || !slider.innerSlider || !slider.innerSlider.list) {
        return;
      }

    const sliderList = slider.innerSlider.list;

    sliderList.addEventListener("mouseenter", handleMouseEnter);
    sliderList.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      if (sliderList) {
        sliderList.removeEventListener("mouseenter", handleMouseEnter);
        sliderList.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [])

  /////////////////////////////////
  
  useEffect(() => {
    const slider = sliderRef3.current;
  
    const handleMouseEnter = () => {
      slider.slickPlay();
   
    };

    

    const handleMouseLeave = () => {
      slider.slickPause();
    };

    if (!slider || !slider.innerSlider || !slider.innerSlider.list) {
        return;
      }

    const sliderList = slider.innerSlider.list;

    sliderList.addEventListener("mouseenter", handleMouseEnter);
    sliderList.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      if (sliderList) {
        sliderList.removeEventListener("mouseenter", handleMouseEnter);
        sliderList.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [])

  const settings = {
    dots: false,
        fade: true,
        infinite: true,
        speed: 200,
        autoplaySpeed: originalAutoplaySpeed.current,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows:false,
        pauseOnHover: false,
  };

  var settings2 = {               
    infinite: true,
    speed: 1000,
    dots: false,
    slidesToShow:matches?1: 4,
    autospeed: 1,
    slidesToScroll: 4,
    arrows:false
   };


   const ProximityComponent = () => {
    return data?.map((item,index) => {
        return (
         <Grid key={item.id} item  md={matchesA?6:3.5} sx={{ display: "flex", justifyContent:matchesA?'center':"space-between",alignItems:'center',marginTop:'2%',width:'100%' }}>
            <Grid  sx={{  display: 'flex',flexWrap: 'wrap',flexDirection:'column'}}>
                 <Grid onClick={() => navigate(`/productcomponents/${item._id}`)} sx={{width:matchesB?'320px':'357px',height:'auto',display:'flex',alignItems:'center',border:'1px solid #fff',borderRadius:'10px',background:'#fff',padding:2,flexDirection:'column',cursor:'pointer'}}>
                     <Grid  sx={{marginLeft:'auto'}}><img src={heart} width={25}></img></Grid>
                     <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                     {/* <Slider ref={el => sliderRefs.current[index] = el} {...settings} style={{display:'flex',alignItems:'center',}}>
                     <div><img src={`${serverURL}/images/${item.images[0]}`} width={"60%"} /></div>
                     <div><img src={`${serverURL}/images/${item.images[1]}`} width={"60%"} /></div>
                     <div><img src={`${serverURL}/images/${item.images[2]}`} width={"60%"} /></div>
                    </Slider> */}
                    <img src={`${serverURL}/images/${item.images[0]}`} width={"60%"} />
                    </Grid>
                 </Grid>
                 <Grid sx={{width:matchesB?'320px':'357px',height:'auto',marginTop:'1%'}}>
                    <Grid sx={{display:'flex',width:'100%'}}>
                     <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',width:matchesB?'70%':'75%'}}> {item.productName}</Grid>
                     <Grid sx={{width:'25%'}}>
                     <Rating style={{marginLeft:matchesB?'':'auto',marginTop:'2%',display:'flex'}}
                 size="small"
                 color="green"
                 name="simple-controlled"
                 value={5}
                 />
                     </Grid>
                    </Grid>
                    <Grid sx={{display:'flex',marginTop:'1%',alignItems:'center'}}>
                    <Grid sx={{display:'flex',flexDirection:'column'}}>
                     <Grid sx={{fontSize:'22px',fontWeight:700,lineHeight:'26px',color:'#19B300'}}>₹{item.offerprice}</Grid>
                     <Grid sx={{fontSize:'16px',fontWeight:500,lineHeight:'26px',color:'#A39C00',marginTop:'-4%'}}><s>₹{item.price}</s></Grid>
                 </Grid>
                 <Grid sx={{marginLeft:'auto'}}>
                 {count == 0 ? (
                        <Button
                        onClick={handleClickAdd}
                        style={{
                         border:'1px solid #fff',
                         borderColor:'#fff',
                         width:matchesB?'250px': '271px',
                         height: '34px',
                         lineHeight:'36px',       
                         color: "#fff",
                         marginLeft:'2%',
                         fontSize: "16px",
                         fontWeight: 500,
                         textTransform: "none",
                         borderRadius: '10px',
                         display:"flex",
                         alignItems: "center",
                         justifyContent: "center",
                         cursor:'-moz-grab'
                       }}>
                      Add to cart
                     </Button> 
                     ) : (
                       <div
                         style={{
                           border:'1px solid #fff',
                         borderColor:'#fff',
                         width:matchesB?'250px': '271px',
                         height: '34px',
                         lineHeight:'36px',       
                         color: "#fff",
                         marginLeft:'2%',
                         fontSize: "16px",
                         fontWeight: 500,
                         textTransform: "none",
                         borderRadius: '10px',
                         display:"flex",
                         alignItems: "center",
                         justifyContent: "center",
                         padding:2
                         }}
                       >
                         <Grid
                           sx={{display: "flex",gap:8}}
                         >
                           <Grid
                             onClick={handleMinus}
                             sx={{ fontSize: '20px',fontWeight:600, color: "#fff",cursor:'pointer' }}
                           >
                           -
                           </Grid>
                           <Grid sx={{ fontSize: '16px',fontWeight:500, color: "#fff" }}>
                             {count}
                           </Grid>
                           <Grid
                             onClick={handleClickAdd}
                             sx={{ fontSize: '18px',fontWeight:600, color: "#fff",cursor:'pointer' }}
                           >
                           +
                           </Grid>
                         </Grid>
                       </div>
                     )}
                 </Grid>
                 </Grid>
                 </Grid>
                </Grid>
         </Grid>
        )

       })
   }

   

  return(<Grid sx={{backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat'}}>
  <Grid>
    <NewHeader/>
  </Grid>
  <Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'Montserrat',flexDirection:"column",color:'#fff'}}>
    <Grid sx={{width:'100%',marginTop:'3%'}}>
     <img src={headline} style={{width:'100%'}}></img>
    </Grid>
      <Grid sx={{width:'82%',height:'auto',marginTop:'2%',display:'flex',flexDirection:'column'}}>
        <Grid sx={{display:'flex'}}>
        <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    width:matchesB?80:'13vw',
                    height:matchesB?25: '2.7vw',
                    color: "#fff",
                    fontSize:matchesB?'12px': "1.1vw",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    lineHeight:'36px',
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  Corporate
                </Button>

                <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    width:matchesB?80:'13vw',
                    height:matchesB?25: '2.7vw',
                    color: "#fff",
                    fontSize:matchesB?'12px': "1.1vw",
                    fontWeight: 500,
                    marginLeft:'2%',
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  Creative
                </Button>
                <Button  
                onMouseEnter={handleClick}
                  style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    width: matchesB?100:'11vw',
                    height:matchesB?25:'2.7vw',
                    lineHeight:'36px',
                    color: "#fff",
                    marginLeft:'2%',
                    fontSize: matchesB?'12px':"1.1vw",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft:'auto'
                  }}>              
                 Sort by
                  <ExpandMore fontSize="medium" style={{marginLeft:'3%'}}/>
                </Button>
                <Menu
                PaperProps={{
                  style: {
                  width:200,
                  backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
                  color:'#fff',
                  },
                }}
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      onMouseLeave={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      style={{ marginTop: "1%", marginLeft: "-1%" }}
                    >
                      <div onMouseLeave={handleClose}>
                        <MenuItem
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",                          
                            fontWeight: 500,
                          }}
                        >
                       Featured
                        </MenuItem>

                        <MenuItem
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",                       
                            fontWeight: 500,
                          }}
                          onClick={handleClose}
                        >
                        Best Selling
                        </MenuItem>

                        <MenuItem
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",
                            fontWeight: 500,
                          }}
                          onClick={handleClose}
                        >
                       Price: High to Low
                        </MenuItem>

                        <MenuItem
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",
                            fontWeight: 500,
                          }}
                          onClick={handleClose}
                        >
                        Price: Low to High
                        </MenuItem>
                        <MenuItem
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",                          
                            fontWeight: 500,
                          }}
                          onClick={handleClose}
                        >
                         Alphabetically: A-Z
                        </MenuItem>
                        <MenuItem
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",
                           
                            fontWeight: 500,
                          }}
                          onClick={handleClose}
                        >
                       Alphabetically: Z-A
                        </MenuItem>
                        <MenuItem
                          className={classes.button1}
                          style={{
                            marginBottom: "3px",
                            fontFamily: "Muli, sans-serif",
                            fontWeight: 500,
                          }}
                          onClick={handleClose}
                        >
                        Combos / Bundles
                        </MenuItem>
                      </div>
                    </Menu>

                </Grid>

                <Grid container spacing={2} sx={{display: "flex", justifyContent:"space-between",marginBottom:'8%',marginTop:matchesA?'3%':'' }} >
                    <ProximityComponent />

                </Grid>
    
      </Grid>
  </Grid>
  <Grid sx={{marginTop:'1%'}}>
    <Services/>
  </Grid>
  <Grid>
  <Grid sx={{width:'100%',height:matches?'auto':800,display:'flex',alignItems:'center',flexDirection:"column",color:'#fff',marginTop:matchesA?'8%':'12%'}}>
                <Grid sx={{fontSize:matches?'24px':'52px',fontWeight:600,lineHeight:matches?'30px':'52px',letterSpacing:'-2.4%',textAlign:matches?'center':'',width:matchesB?'70%':'100%'}}>
                OUR TOP PROFESSIONALS
                </Grid>
                <Grid sx={{fontSize:matches?'18px':'22px',fontWeight:400,lineHeight:matches?'24px':'46px',letterSpacing:'2%',marginTop:'1%',textAlign:matches?'center':'',width:matchesB?'85%':'100%'}}>
                They are our reviews with happy user
                </Grid>
                <Grid sx={{marginTop:'5%',display:'flex',width:'100%',justifyContent:'space-between'}}>
               <Grid style={{width:'100%'}}>
               <Slider {...settings2}>
        <Grid className={classes2.imageContainer} sx={{position:'relative',cursor:'pointer',marginLeft:matchesB?'2.5%':''}}>
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



<Grid sx={{marginTop:matchesA?'12%':'0%'}}>
    <Newfooter/>
</Grid>
  </Grid>)
}