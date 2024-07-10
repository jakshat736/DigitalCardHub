import { Box, Divider, Grid, Paper, Typography,Button } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from 'react'
import { getData, serverURL } from '../../../Services/NodeServices'
import bg from "../../Digital Card Assets/footer.png"
import Footer from "./Footer"
import Lower from './Lower'
import Preloader from './Preloader'

const AllProducts = () => {
    const matches = useMediaQuery("(max-width:600px)");
    const { _id } = useParams()
    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true)

    const fetchProductByCategory = async () => {
        setLoading(true)
        const result = await getData('products/displayAllProduct')

        setData(result.data)
        if (result?.data?.length > 0) {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProductByCategory()
    }, [_id])
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [])



    const ProximityComponent = () => {
        return data?.map((item) => {
            return (
                <Grid item xs={12} md={3.8} sx={{ display: "flex", justifyContent: "center",marginTop:'2%' }}>
                <Box
               sx={{
             display: 'flex',
             flexWrap: 'wrap',
             '& > :not(style)': {
              m: 1,
             width: 300,
              height: 'auto',
            },
              }}>
                
            <Paper elevation={15} sx={{background:'#60a3bc',cursor: 'pointer',padding:3}} onClick={() => navigate(`/productscomponent/${item._id}`)}>
                            <Grid sx={{ display: "flex" }}>
                                <img src={`${serverURL}/images/${item.images[0]}`} width={"100%"} />
                            </Grid>
                            <Grid sx={{fontSize:'18px',fontWeight:600,color:'#fff',marginTop:'5%'}}>
                                {item.productName}
                            </Grid>
                            <Grid sx={{display:'flex',marginTop:'5%'}}>
                            <Button
              style={{
                borderColor: "#0078ad",
              
                background: "#0078ad",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 400,
                textTransform: "none",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="outlined"
            >
               Enquiry Now
            </Button>
                 <Grid sx={{marginLeft:'4%'}} >
                        <Grid sx={{width:'#000080',fontSize:'26px',fontWeight:600}}>₹{item.offerprice}</Grid>
                         <Grid sx={{fontSize:12,color:'#2f3640'}}>(inc. all taxes)</Grid>
                            </Grid>
                         
                            <Grid sx={{width:'#718093',fontSize:'14px',fontWeight:300,marginTop:'3.5%',marginLeft:'-4%'}}><s>₹{item.price}</s></Grid>
                           
                     </Grid>
            </Paper>
                 </Box>

    
                    {/* <Paper elevation={2} sx={{ width: "90%", bgcolor: "#001E3C", cursor: 'pointer' }} onClick={() => navigate(`/productscomponent/${item._id}`)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                <img src={`${serverURL}/images/${item.images[0]}`} width={"50%"} />
                            </Grid>
                            <Divider />
                            <Grid item xs={12} sx={{ height: 100 }}>
                                <Typography textAlign={'center'} fontSize={15} color={'white'}>{item.productName}</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ maxHeight: 100 }}>
                                <Typography textAlign={'center'} fontSize={15} sx={{ mt: 0, color: 'darkgoldenrod', textDecoration: 'line-through' }}>₹{item.price}</Typography>
                                <Typography textAlign={'center'} fontSize={15} sx={{ mt: 0, color: 'green', fontSize: 24 }}>₹{item.offerprice}</Typography>
                            </Grid>

                        </Grid>
                    </Paper> */}

                </Grid>

            )

        })
    }
    return (
        <Grid id='top' sx={{ bgcolor: "#0078ad",fontFamily:'Muli, sans-serif'}}>
            <Grid sx={{ position: 'fixed', bottom: -2, zIndex: 2 }}>
                <Lower />
            </Grid>
            <Navbar />
            {loading ?
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center', py: 100, bgcolor: "white" }} >
                    <Preloader />
                </Grid>
                :
                <Grid container spacing={2} sx={{display: "flex", justifyContent: 'center',marginBottom:'8%' }} >
                    <Grid item xs={10} sx={{ mt:matches?10:13 }}>
                        <Typography sx={{ fontSize:matches?'26px':'40px',fontWeight:700,textAlign: "center", color: "#fff" }}>Explore Our Innovative Solutions</Typography>
                    </Grid>
                    <ProximityComponent />

                </Grid>}
            <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
                <Footer />
            </Box>
        </Grid>
    )
}

export default AllProducts
