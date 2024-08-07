import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'

import { useEffect, useState } from 'react'
import { postData, serverURL } from '../../../Services/NodeServices'
import bg from "../../Digital Card Assets/footer.png"
import Footer from "./Footer"
import Lower from './Lower'
import Preloader from './Preloader'

const ProductsPage = () => {
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
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [])



    const ProximityComponent = () => {
        return data.map((item) => {
            return (
                <Grid item xs={5} md={3.8} sx={{ display: "flex", justifyContent: "center", mb: 2, mt: 2 }}>
                    <Paper elevation={2} sx={{ width: "90%", bgcolor: "#001E3C", cursor: 'pointer' }} onClick={() => navigate(`/productscomponent/${item._id}`)}>
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
                    </Paper>

                </Grid>

            )

        })
    }
    return (
        <Grid id='top' sx={{ bgcolor: "#001E3C" }}>
            <Grid sx={{ position: 'fixed', bottom: 0, zIndex: 2 }}>
                <Lower />
            </Grid>
            <Navbar />
            {loading ?
                <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center',py:100 ,bgcolor:"white"}} >
                    <Preloader />
                </Grid>
                : <Grid container spacing={2} sx={{ display: "flex", justifyContent: 'center' }} >
                    <Grid item xs={12} sx={{ mt: 12 }}>
                        <Typography sx={{ fontSize: 45, textAlign: "center", color: "#fff" }}>Our OutStanding {CategoryName} Products</Typography>
                    </Grid>
                    <ProximityComponent />

                </Grid>}
            <Box sx={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover" }}>
                <Footer />
            </Box>
        </Grid>
    )
}

export default ProductsPage
