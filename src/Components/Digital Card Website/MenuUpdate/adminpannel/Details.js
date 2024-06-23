import { Avatar, Button, Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import img1 from "../assets/dch logooo.png";
import { PhotoCamera, WhatsApp } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { postData, serverURL } from '../../../Services/NodeServices';
import Swal from 'sweetalert2';

const Details = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const menuId = location.state.menuId
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [linkdin, setLinkdin] = useState("")
    const [facebook, setFacebook] = useState("")
    const [insta, setInsta] = useState("")
    const [about, setAbout] = useState("")
    const [Image, setImage] = useState({
        fileName: "",
        bytes: "",
    });

    const [data, setData] = useState([])

    const handleImage = (event) => {
        setImage({
            fileName: URL.createObjectURL(event.target.files[0]),
            bytes: event.target.files[0],
        });
    };

    const fetchData = async () => {
        var formData = new FormData
        formData.append("menuId", menuId)
        const response = await postData('index/getRestaurantDetails', formData, true)
        if (response.status == true) {
            setData(response.data)
            setName(response.data.restaurantName)
            setNumber(response.data.number)
            setAbout(response.data.about)
            setEmail(response.data.email)
            setLinkdin(response.data.linkdin)
            setFacebook(response.data.facebook)
            setInsta(response.data.insta)
            setImage({ fileName: `${serverURL}/images/${response.data.logo}`, bytes: "" })
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const handleSubmit = async () => {
        var formData = new FormData
        formData.append("menuId", menuId)
        formData.append("restaurantName", name)
        formData.append("number", number)
        formData.append("about", about)
        formData.append("insta", insta)
        formData.append("facebook", facebook)
        formData.append("linkdin", linkdin)
        formData.append("email", email)
        formData.append("logo", Image.bytes)

        const response = await postData('index/addRestaurantDetails', formData, true)

        if (response.status == true) {
            Swal.fire({
                text: "Saved Successfully",
                icon: "success",
                timer: 1000
            })
            fetchData()
        }
    }
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <Grid container spacing={2} sx={{ width: { xs: "100%", md: 400 } }}>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', }}>
                    <img src={img1} alt="Masala Grill" width={120} />

                </Grid>

                <Grid item xs={6} sx={{}}>
                    <Button variant="outlined" sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" }, mt: 2 }}><WhatsApp /> Live support</Button>
                </Grid>
                <Divider
                    sx={{
                        backgroundColor: 'black',
                        height: '1px',
                        width: '100%',
                        mt: 1
                    }}
                />
                <Grid item xs={3}>
                    <Button
                        onClick={() => navigate(`/menudashboard/${menuId}`)}
                        variant='contained'
                        sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }}
                    >
                        Back
                    </Button>

                </Grid>
                <Grid item xs={12} sx={{ mt: 5 }}>
                    <Typography sx={{ fontFamily: 'poppins', fontSize: 30, textAlign: 'left' }}>Edit Restaurant Details</Typography>
                </Grid>

                <Divider sx={{ backgroundColor: 'black', height: '1px', width: '100%', }} />
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                    <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={Image.fileName}
                        sx={{ width: 80, height: 80, m: 1 }}
                    />
                    <Button

                        color="primary"
                        aria-label="upload picture"
                        component="label"
                        variant='contained'
                        sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }}
                    >
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={handleImage}

                        />
                        Upload Logo<PhotoCamera />
                    </Button>


                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth onChange={(e) => setName(e.target.value)} value={name} id="outlined-basic" label="Restaurant Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>

                    <TextField fullWidth onChange={(e) => setNumber(e.target.value)} value={number} id="outlined-basic" label="Phone Number" variant="outlined" />
                </Grid>
                <Grid item xs={12}>

                    <TextField multiline fullWidth onChange={(e) => setAbout(e.target.value)} value={about} id="outlined-basic" label="About" variant="outlined" minRows={4}/>
                </Grid>
                <Grid item xs={12}>

                    <TextField fullWidth onChange={(e) => setEmail(e.target.value)} value={email} id="outlined-basic" label="Email Id" variant="outlined" />
                </Grid>
                <Grid item xs={12}>

                    <TextField fullWidth onChange={(e) => setFacebook(e.target.value)} value={facebook} id="outlined-basic" label="Facebook Username" variant="outlined" />
                </Grid>
                <Grid item xs={12}>

                    <TextField fullWidth onChange={(e) => setInsta(e.target.value)} value={insta} id="outlined-basic" label="Instagram Username" variant="outlined" />
                </Grid>
                <Grid item xs={12}>

                    <TextField fullWidth onChange={(e) => setLinkdin(e.target.value)} value={linkdin} id="outlined-basic" label="Linkdin Username" variant="outlined" />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>


                    <Button
                        fullWidth
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                        variant='contained'
                        sx={{ bgcolor: "#f3b419", color: "black", "&:hover": { bgcolor: "#f3b419", color: "black" } }}
                        onClick={() => handleSubmit()}
                    >

                        Save
                    </Button>


                </Grid>


            </Grid>


        </Grid>
    )
}

export default Details
