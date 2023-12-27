import React from 'react'
import Navbar from '../UserComponents/Navbar'
import Footer from '../UserComponents/Footer'
import { Grid, Button, Typography, TextField, useTheme, useMediaQuery, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postData } from '../../../../Services/NodeServices'
import BeenhereIcon from '@mui/icons-material/Beenhere';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Delete } from '@mui/icons-material'

const Links = () => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down(600));
    const tablet = useMediaQuery(theme.breakpoints.down(960));

    const navigate = useNavigate()
    const cardId = window.localStorage.getItem("CardId")
    const userId = window.localStorage.getItem("userId")
    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')
    const [fbLink, setFbLink] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [instaLink, setInstaLink] = useState('')
    const [linkedlnLink, setLinkedlnLink] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    const [pinterestLink, setPinterestLink] = useState('')
    const [youtubeLink1, setYoutubeLink1] = useState('')
    const [youtubeLink2, setYoutubeLink2] = useState('')
    const [link2, setLink2] = useState('none')
    const [youtubeLink3, setYoutubeLink3] = useState('')
    const [link3, setLink3] = useState('none')
    const [youtubeLink4, setYoutubeLink4] = useState('')
    const [link4, setLink4] = useState('none')
    const [youtubeLink5, setYoutubeLink5] = useState('')
    const [link5, setLink5] = useState('none')
    const [googleMapLink, setGoogleMapLink] = useState('')
    const [count,setCount]=useState(1);
    const [themeId, setThemeId] = useState('')
    const [menuLink, setMenuLink] = useState('')
    const [otherLink, setOtherLink] = useState(Array(0).fill(null));
   
    const fetchCardDetail = async () => {
        var formData = new FormData()
        formData.append("customerId", userId)
        var result = await postData('carddetails/getcardDetails', formData, true)
        console.log(result.data)
        setFbLink(result.data.fbLink)
        setInstaLink(result.data.igLink)
        setLinkedlnLink(result.data.LinkdnLink)
        setPinterestLink(result.data.PinterestLink)
        setTwitterLink(result.data.TwitterLink)
        setYoutubeLink(result.data.YoutubeLink)
        setYoutubeLink1(result.data.YoutubeVideoLink1)
        setMenuLink(result.data.menuLink)
        if (result.data.website != 'undefined') { setWebsite(result.data.website) }
        if (result.data.location != 'undefined') { setLocation(result.data.location) }
        if(result.data.YoutubeVideoLink2!=''){
            setLink2('flex')
            setCount(count+1)
        }
        if(result.data.YoutubeVideoLink3!=''){
            setLink3('flex')
            setCount(count+1)
        }
        if(result.data.YoutubeVideoLink4!=''){
            setLink4('flex')
            setCount(count+1)
        }
        if(result.data.YoutubeVideoLink5!=''){
            setLink5('flex')
            setCount(count+1)
        }
        setYoutubeLink2(result.data.YoutubeVideoLink2)
        setYoutubeLink3(result.data.YoutubeVideoLink3)
        setYoutubeLink4(result.data.YoutubeVideoLink4)
        setYoutubeLink5(result.data.YoutubeVideoLink5)
        setGoogleMapLink(result.data.GoogleMapLink)
        setThemeId(result.data.themeid)
        setOtherLink(result.data.links)

    }
    React.useEffect(() => {

        fetchCardDetail()
    }, [])

    const handleSubmit = async () => {
        var formData = new FormData()
        formData.append('_id', cardId)
        formData.append('fbLink', fbLink)
        formData.append('igLink', instaLink)
        formData.append('TwitterLink', twitterLink)
        formData.append('YoutubeLink', youtubeLink)
        formData.append('PinterestLink', pinterestLink)
        formData.append('LinkdnLink', linkedlnLink)
        formData.append('YoutubeVideoLink1', youtubeLink1)
        formData.append('YoutubeVideoLink2', youtubeLink2)
        formData.append('YoutubeVideoLink3', youtubeLink3)
        formData.append('YoutubeVideoLink4', youtubeLink4)
        formData.append('YoutubeVideoLink5', youtubeLink5)
        formData.append('GoogleMapLink', googleMapLink)
        formData.append('menuLink', menuLink)
        formData.append('website', website)
        formData.append('location', location)
        formData.append('links', JSON.stringify(otherLink))

        var response = await postData("carddetails/updatesociallinks", formData, true);
        if (response.status) {
            navigate('/ecommerce')
        } else {

        }
    }

    const handleAdd=(n)=>{
       
        if(n==1){
            setLink2('flex')
            setCount(n+1)
        }
        if(n==2){
            setLink3('flex')
            setCount(n+1)
        }
        if(n==3){
            setLink4('flex')
            setCount(n+1)
        }
        if(n==4){
            setLink5('flex')
            setCount(n+1)
        }

    }

    const handleAddLink=()=>{
       
        const emptyLink = {
            title: '',
            link: '',
          };
          setOtherLink([...otherLink,...Array(1).fill(emptyLink)])
    }
    const handleDeleteLink = (index) => {
        // Create a copy of the array
        const updatedLinks = [...otherLink];
      
        // Remove the element at the specified index
        updatedLinks.splice(index, 1);
      
        // Update the state with the modified array
        setOtherLink(updatedLinks);
      };
    const handleTitleChange = (index, value) => {
        const newData = [...otherLink];
        newData[index] = { ...newData[index], title: value };
        setOtherLink(newData);
    };
    const handleLinkChange = (index, value) => {
        const newData = [...otherLink];
        newData[index] = { ...newData[index], link: value };
        setOtherLink(newData);
        
    };
    return (
        <Grid>
            <Navbar />
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', paddingInline: "20px" }}>
                <Grid item xs={4} sx={{ marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() =>navigate('/information')} variant='contained'><NavigateBeforeIcon />Back</Button>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => handleSubmit()} variant='contained'>Save<BeenhereIcon /></Button>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "2vh", marginBottom: "2vh" }}>
                    <Button sx={{
                        borderRadius: 10,
                        backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        alignItems: "center",
                    }} onClick={() => navigate('/ecommerce')} variant='contained'>Skip<NavigateNextIcon /></Button>
                </Grid>
                <Grid container spacing={2} sx={{ width: mobile ? "100%" : tablet ? "100%" : '70%', display: mobile ? "flex" : tablet ? "" : "", justifyContent: mobile ? "center" : tablet ? "" : "", alignItems: mobile ? "center" : tablet ? "" : "", flexDirection: mobile ? "column" : tablet ? "" : "" }}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.3rem", md: 28 }, fontWeight: 'bold' }}>Social Links</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Social Media Links</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={fbLink} onChange={(e) => setFbLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Facebook Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={twitterLink} onChange={(e) => setTwitterLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Twitter Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={instaLink} onChange={(e) => setInstaLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Instagram Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={linkedlnLink} onChange={(e) => setLinkedlnLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Linkedln Username(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Channel Name(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={googleMapLink} onChange={(e) => setGoogleMapLink(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Review Link(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8,flexDirection:'column',alignItems:"center" }}>
                        <TextField value={menuLink} onChange={(e) => setMenuLink(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Menu Link(Optional)' />
                        
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={website} onChange={(e) => setWebsite(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Website(Optional)' />
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={location} onChange={(e) => setLocation(e.target.value)} sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Location Link(Optional)' />
              </Grid>
              
              <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <Button sx={{
                            borderRadius: 10,
                            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            paddingX: "30px",
                            textAlign: "center",
                            alignItems: "center",
                        }} variant='contained' onClick={()=>handleAddLink()}>Add More Link</Button>
                    </Grid>
                    {
                otherLink.map((item,index)=>(
                 <>   
                 <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                <TextField value={otherLink[index]?.title ||""}  onChange={(event) =>
                                        handleTitleChange(index, event.target.value)
                                    } sx={{ width: mobile ? "65%" : tablet ? "100%" : '56%' }} label='Title' />
                    <IconButton onClick={()=>handleDeleteLink(index)}><Delete/></IconButton>
                   </Grid>
               
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                 <TextField value={otherLink[index]?.link ||""}  onChange={(event) =>
                                        handleLinkChange(index, event.target.value)
                                    } sx={{ width: mobile ? "95%" : tablet ? "100%" : '60%' }} label='Link' />
               
                   </Grid>
                   </>
                ))
              }
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={{ fontSize: { xs: "1.2rem", md: 28 }, fontWeight: 'bold' }}>Youtube Video Links</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink1} onChange={(e) => setYoutubeLink1(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: link2, justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink2} onChange={(e) => setYoutubeLink2(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 2(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: link3, justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink3} onChange={(e) => setYoutubeLink3(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 3(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: link4, justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink4} onChange={(e) => setYoutubeLink4(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 4(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: link5, justifyContent: "center", marginBottom: 8 }}>
                        <TextField value={youtubeLink5} onChange={(e) => setYoutubeLink5(e.target.value)} sx={{ width: { xs: '100%', md: '60%' } }} label='Youtube Video Link 5(Optional)' />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <Button sx={{
                            borderRadius: 10,
                            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            paddingX: "30px",
                            textAlign: "center",
                            alignItems: "center",
                        }} variant='contained' onClick={()=>handleAdd(count)}>Add More Youtube</Button>
                    </Grid>
                    
                    

                    <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
                        <Button sx={{
                            borderRadius: 10,
                            backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
                            display: "flex",
                            paddingX: "30px",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            textAlign: "center",
                            alignItems: "center",
                        }} variant='contained' onClick={() => handleSubmit()}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Footer />
        </Grid>
    )
}

export default Links
