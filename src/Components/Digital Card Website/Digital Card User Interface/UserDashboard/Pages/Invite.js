import React, { useEffect, useState } from 'react'
import Navbar from "../UserComponents/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../UserComponents/Footer";
import { Avatar, Button, CircularProgress, Grid, InputAdornment, TextField,Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { WhatsApp } from '@mui/icons-material';
import { postData, serverURL } from '../../../../Services/NodeServices';
import Swal from 'sweetalert2';

const Invite = () => {
    const theme = useTheme();
    const userId = window.localStorage.getItem("userId")
    const date = new Date().toLocaleDateString();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));
    const [coverVideo, setCoverVideo] = useState({ url: "", bytes: "" })
    const [invitationVideo, setInvitationVideo] = useState({ url: "", bytes: "" })
    const [show, setShow] = useState(false)
    const [verify, setVerify] = useState()
    const [companyName, setCompanyName] = useState("");
    const [companyName1, setCompanyName1] = useState("");
    const [cardId, setCardId] = useState("");
    const [loading,setLoading]=useState("")
    
    const fetchCardDetail = async () => {
        var formData = new FormData()
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        if(result.data!=undefined){setCardId(result.data._id);}
        if(result.data!=undefined){setCompanyName(result.data.companyname);}
            if(result.data!=undefined){setCompanyName1(result.data.companyname);}
         if(result.data!=undefined){fetchInvite(result.data.companyId)}
      }
      
      React.useEffect(() => {
    
        fetchCardDetail()
      }, [])
    
    
    
    const handleCover = (event) => {
        setCoverVideo({
            url: URL.createObjectURL(event.target.files[0]),
            bytes: event.target.files[0],
        });
    };
    const handleInvitation = (event) => {
        setInvitationVideo({
            url: URL.createObjectURL(event.target.files[0]),
            bytes: event.target.files[0],
        });
    };
    const fetchInvite=async(companyId)=>{
        var formData=new FormData
        formData.append('companyId',companyId)

        const response=await postData('carddetails/fetchInvite',formData,true)
        console.log(response.data)
        if(response){
            setCoverVideo({url:`${serverURL}/images/${response.data.coverVideo}`,bytes:""})
            setInvitationVideo({url:`${serverURL}/images/${response.data.invitationVideo}`,bytes:""})
        }

    }
    const handleSubmit = async () => {
        if(verify==false){var formData = new FormData();
        formData.append("companyname", companyName);
        formData.append("companyId", companyName);
        formData.append("customerId", userId);
        formData.append("paymentStatus", "Trial Period");
        formData.append("cardStatus", "Active");
        formData.append("createdDate", date);
        formData.append("cardViewCount", 0);
    
        var result = await postData("carddetails/addcardDetails", formData, true);
        console.log(result);
        if (result.status) {
            window.localStorage.setItem("CardId", result.data._id);
            
            handleSubmit1(result.data.companyId)
        } else {
           
        }}else{
          Swal.fire({
            title:"First Verify Company Name",
            icon:"error"
          })
        }
    };

    const handleUpdate = async () => {
        if(verify==false || companyName1==companyName){var formData = new FormData();
        formData.append("_id", cardId);
        formData.append("companyname", companyName);
    
        var result = await postData(
            "carddetails/updateCompanyName",
            formData,
            true
        );
        console.log(result);
        if (result.status) {
           
            handleSubmit1(result.data.companyId)
        } else {
           
        }}else{
          Swal.fire({
            title:"First Verify Company Name",
            icon:"error"
          })
        }
    };
    
    const handleSubmit1 = async (companyId) => {

        try {
          // Set loading to true before making the request
          setLoading(true);
        var formData = new FormData()
        formData.append('companyId', companyId)
        formData.append('coverVideo', coverVideo.bytes)
        formData.append('invitationVideo', invitationVideo.bytes)
        // alert(file)
        
        var response = await postData("carddetails/addInvite", formData, true);
        console.log(response)
        if (response.status) {
        
        } else {
    
        }
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error("An error occurred:", error);
      } finally {
        // Set loading back to false after the request completes
        setLoading(false);
      }
    
    
      }
    

    const handleClick=async()=>{
        var formData=new FormData
        formData.append('companyId',companyName)
        const response=await postData('carddetails/verifyCompanyName',formData,true)
        // alert(JSON.stringify(response))
        setVerify(response.status)
    
      }


      const LoaderComponent=()=>{
        return(
          <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        )
      }
    

    return (
        <Grid>
            <Navbar />
            <Grid container spacing={2} sx={{padding:1,display:"flex",justifyContent:"center"}}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center", marginBottom: 2,flexDirection:"column",alignItems:"center",mt:1 }}>
              <TextField
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <Button variant='contained' onClick={()=>handleClick()}>
                                  Verify
                                </Button>
                              </InputAdornment>
                            ),
                          }}
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                             label="Company Name"
                            required
                           
                        />
                        <Typography>{verify==false?"Available":verify==true?"Not Available":''}</Typography>  </Grid>
              
                <Grid item xs={12}  sx={{ display: 'flex', justifyContent: 'center' }} >

                    <video
                        key={coverVideo.url}
                        autoPlay
                        loop
                        muted
                        style={{
                            objectFit: 'fill',
                            width: 290,
                            height: 500,
                            marginLeft: -10,
                            border:1,
                            borderStyle:"solid"


                        }}
                    >
                        <source src={coverVideo.url} type="video/mp4" />

                    </video>
                </Grid>
                <Grid item xs={12}  sx={{ display: 'flex', justifyContent: 'center' }} >
                    <label htmlFor="icon-button-file">
                        <input
                            style={{ display: "none" }}
                            accept="video/*"
                            id="icon-button-file"
                            type="file"
                            onChange={handleCover}
                        />
                        <Button
                            color="primary"
                            aria-label="upload picture"
                            variant='contained'
                            component="span"
                        >
                            Upload Cover Video
                        </Button>
                    </label>
                </Grid>
                
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >

                    <video
                        key={invitationVideo.url}
                        autoPlay
                        loop
                        muted
                        style={{
                            objectFit: 'fill',
                            width: 290,
                            height: 500,
                            marginLeft: -10,
                            border:1,
                            borderStyle:"solid"

                        }}
                    >
                        <source src={invitationVideo.url} type="video/mp4" />

                    </video>
                </Grid>
                
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <label htmlFor="icon-button1-file">
                        <input
                            style={{ display: "none" }}
                            accept="video/*"
                            id="icon-button1-file"
                            type="file"
                            onChange={handleInvitation}
                        />
                        <Button
                            color="primary"
                            aria-label="upload picture"
                            variant='contained'
                            component="span"
                        >
                            Upload Invitation Video
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              paddingInline: "30px",
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => (cardId == "" ? handleSubmit() : handleUpdate())}>Save</Button>
           {loading && <LoaderComponent />}
          </Grid>
         
            </Grid>


            {mobile ? <><br /><br /><br /></> : tablet ? <><br /><br /><br /></> : <></>}

            <Footer />
        </Grid>
    )
}

export default Invite
