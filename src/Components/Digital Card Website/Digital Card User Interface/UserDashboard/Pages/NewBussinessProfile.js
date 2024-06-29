import { Grid, Divider, Button, InputBase,IconButton, CircularProgress, Box, DialogContentText,Typography, } from "@mui/material";
import logo from "../UserAssets/digitallogo.png";
import Avatar from "@mui/material/Avatar";
import photo from "../Themes/ThemeAssets/ankit1.jpg";
import background from "../UserAssets/background.png";
import icon from "../UserAssets/icon.png";
import { Container, useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AvatarEditor from 'react-avatar-editor'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import help from '../UserAssets/help.png'
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../../Services/NodeServices'
import { serverURL } from '../../../../Services/NodeServices'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { HelpOutline } from '@mui/icons-material'
import Dialog from '@mui/material/Dialog';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function NewBussinessProfile() {
    const matches = useMediaQuery("(max-width:1300px)");


    const [crop, setCrop] = useState({}); // Stores the crop data
    const [image, setImage] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
  
    const navigate = useNavigate()
    // const cardId = window.localStorage.getItem("CardId")
    const userId = window.localStorage.getItem("userId")
    const [cardId, setCardId] = useState("");
      const date = new Date().toLocaleDateString();
    const [Icon, setIcon] = React.useState({ url: "", bytes: "" });
    const [companyCover, setCompanyCover] = React.useState({ url: "", bytes: "" });
    const [fullName, setFullName] = useState('')
    const [position, setPosition] = useState('')
    const [phone, setPhone] = useState()
    const [alternatePhone, setAlternatePhone] = useState()
    const [whatsappNo, setWhatsappNo] = useState()
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [education, setEducation] = useState('')
    const [hobby, setHobby] = useState('')
    const [fbLink, setFbLink] = useState('')
    const [twitterLink, setTwitterLink] = useState('')
    const [instaLink, setInstaLink] = useState('')
    const [linkedlnLink, setLinkedlnLink] = useState('')
    const [threadLink, setThreadLink] = useState('')
    const [skypeLink, setSkypeLink] = useState('')
    const [zomatoLink, setZomatoLink] = useState('')
    const [discordLink, setDiscordLink] = useState('')
    const [dribbleLink, setDribbleLink] = useState('')
    const [behanceLink, setBehanceLink] = useState('')
    const [playstoreLink, setPlayStoreLink] = useState('')
    const [appstoreLink, setAppStoreLink] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    const [pinterestLink, setPinterestLink] = useState('')
    const [location, setLocation] = useState('')
    const [companyEstDate, setCompanyEstDate] = useState('')
    const [about, setAbout] = useState('')
    const [paytmNumber, setPaytmNumber] = useState('')
    const [googlePayNumber, setGooglePayNumber] = useState('')
    const [phonePeNumber, setPhonePeNumber] = useState('')
    const [googleMapLink, setGoogleMapLink] = useState('');
    const [coverVideo, setCoverVideo] = useState({ url: "", bytes: "" })
    const [companyLogo, setCompanyLogo] = useState({ url: "", bytes: "" })
    const [show, setShow] = useState(false)
    const [edited, setEdited] = useState(false)
    const [edited1, setEdited1] = useState(false)
    const [themeId, setThemeId] = useState('')
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [save, setSave] = useState()
  
    const [Editor, setEditor] = useState(null);
    const [Editor1, setEditor1] = useState(null);
    const [image1, setimage1] = useState(null);
    const [logo1, setLogo1] = useState(null);
    const [file, setfile] = useState(null);
    const [file1, setfile1] = useState(null);
    const [DBimage, setDBimage] = useState(null);
    const [img, setImg] = useState(null)
    const [name1, setName1] = useState()
    const [logo, setLogo] = useState(null)
    const [logoName, setLogoName] = useState()
    const [companyName, setCompanyName] = useState("");
    const [companyName1, setCompanyName1] = useState("");
    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [loadingAnimation,setLoadingAnimation]=useState(false)
    const setEditorRef = (editor) => {
      setEditor(editor);
    };
    const setEditorRef1 = (editor) => {
      setEditor1(editor);
    };
    //convet FILE form URL
   
    //canvert the data Buffer Array into image
    const arrayBufferToBase64 = (buffer) => {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      return window.btoa(binary);
    };
  
    const submit = (e) => {
      e.preventDefault();
      if (Editor) {
        const url = Editor.getImageScaledToCanvas().toDataURL('image/jpeg', 1.0);
        setimage1(url);
        // alert(url)
  
        setfile(DataURLtoFile(url, name1));
      }
      setEdited(true)
      setShow(false)
      setOpen(false)
    };
    const DataURLtoFile = (dataurl, filename) => {
      let arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    };
  
    const submit1 = (e) => {
      e.preventDefault();
      if (Editor1) {
        const url1 = Editor1.getImageScaledToCanvas().toDataURL('image/jpeg', 1.0);
        setLogo1(url1);
        // alert(url1)
  
        setfile1(DataURLtoFile(url1, logoName));
      }
      setEdited1(true)
  
      setOpen1(false)
    };
    const handleClose = () => {
      setOpen(false);
      setOpen1(false)
    };
  
  
  
    const DialogComponent = () => {
      return (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{width:{xs:'100%'}}}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Crop Image
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            {img && (<AvatarEditor
              ref={setEditorRef}
              image={img}
              width={400}
              height={200}
              border={50}
              color={[128, 128, 128]}
              borderRadius={0}
              scale={1.2}
              rotate={0}
            />)}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={submit}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      )
    }
    const DialogComponent1 = () => {
      return (
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open1}
         
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Crop Image
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            {logo && (<AvatarEditor
              ref={setEditorRef1}
              image={logo}
              width={120}
              height={120}
              border={50}
              color={[128, 128, 128]}
              borderRadius={50}
              scale={1}
              rotate={0}
            />)}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={submit1}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      )
    }
  
    const fetchCardDetail = async () => {
      setLoadingAnimation(true)
      var formData = new FormData()
      formData.append("customerId", userId)
      var result = await postData('carddetails/getcardDetails', formData, true)
          if (result.data != undefined) {
              setCompanyName(result.data.companyname);
              setCompanyName1(result.data.companyname);
  
              window.localStorage.setItem("CardId", result.data._id);
              setCardId(result.data._id);
      setFullName(result.data.fullname)
      setPosition(result.data.position)
      setPhone(result.data.phoneNumber)
      setAlternatePhone(result.data.AlternatePhoneNumber)
      setWhatsappNo(result.data.WhatsappNo)
      setAddress(result.data.Address)
      setEmail(result.data.Email)
      setFbLink(result.data.fbLink)
      setInstaLink(result.data.igLink)
      setLinkedlnLink(result.data.LinkdnLink)
      setPinterestLink(result.data.PinterestLink)
      setGoogleMapLink(result.data.GoogleMapLink)
  
      setTwitterLink(result.data.TwitterLink)
      setYoutubeLink(result.data.YoutubeLink)
      setPaytmNumber(result.data.paytmNumber)
      setPhonePeNumber(result.data.phonepenumber)
      setGooglePayNumber(result.data.Googlepaynumber)
      setEducation(result.data.education)
      setHobby(result.data.hobby)
      setThreadLink(result.data.threads)
      setSkypeLink(result.data.skype)
      setZomatoLink(result.data.zomato)
      setDiscordLink(result.data.discord)
      setDribbleLink(result.data.dribble)
      setBehanceLink(result.data.behance)
      setPlayStoreLink(result.data.playstore)
      setAppStoreLink(result.data.appstore)
  
      if (result.data.website != 'undefined') { setWebsite(result.data.website) }
      if (result.data.location != 'undefined') { setLocation(result.data.location) }
      setCompanyEstDate(result.data.CompanyEstDate)
      setAbout(result.data.AboutUs)
      setIcon({ url: `${serverURL}/images/${result.data.companylogo}`, bytes: " " });
      setCompanyLogo({ url: `${serverURL}/images/${result.data.companylogo}`, bytes: " " });
      if (result.data.coverVideo != '') {
        setCoverVideo({ url: `${serverURL}/images/${result.data.coverVideo}`, bytes: " " });
        setShow(true)
      }
      // setimage1(${serverURL}/images/${result.data.companyCoverImage});
      //  console.log(result.data.companylogo.data.data)
      if (result.data.companyCoverImage != undefined) {
        setimage1(arrayBufferToBase64(result.data.companyCoverImage.data.data));
        setLogo1(result.data.companylogo);
        setDBimage(arrayBufferToBase64(result.data.companyCoverImage.data.data));
      }
      setThemeId(result.data.themeid)
      //setType(result.data.companyCoverImage.slice(result.data.companyCoverImage.length-3))
      setGoogleMapLink(result.data.GoogleMapLink)
    }
    if(result===false || result?.data!=undefined){
      setLoadingAnimation(false)
    }
    
  
    }
    React.useEffect(() => {
  
      fetchCardDetail()
    }, [])
  
  
    const handleSubmit = async (verify) => {
    
      if(verify==true){
        var formData = new FormData();
      formData.append("companyname", companyName);
      formData.append("companyId", companyName.replace(/\s/g, '').toLowerCase());
      formData.append("customerId", userId);
      formData.append("paymentStatus", "Trial Period");
      formData.append("cardStatus", "Active");
      formData.append("createdDate", date);
      formData.append("cardViewCount", 0);
  
      var result = await postData("carddetails/addcardDetails", formData, true);
  
      if (result.status) {
          window.localStorage.setItem("CardId", result.data._id);
          
          setCardId(result.data._id)
          setSave(true)
      } else {
         setSave(false)
      }}else if(companyName==''){
        Swal.fire({
          title:'<b>Enter Your Unique Id First</b>',
          icon:"error"
        })
      }else{
        Swal.fire({
          title: '<b style={{color:"#fff"}}>You Are Changine the Unique Card Id!</b>',
          html:'<b>Bad News!</b><br/>Changing the unique id can make the old link deactive for the users and your NFC Card will also not work.',
          showDenyButton: true,
          icon:"warning",
         
          confirmButtonText: 'Save',
          denyButtonText:` Don't save`,
        }).then(async(result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            var formData = new FormData();
            formData.append("companyname", companyName);
            formData.append("companyId", companyName.replace(/\s/g, '').toLowerCase());
            formData.append("customerId", userId);
            formData.append("paymentStatus", "Trial Period");
            formData.append("cardStatus", "Active");
            formData.append("createdDate", date);
            formData.append("cardViewCount", 0);
        
            var result = await postData("carddetails/addcardDetails", formData, true);
            console.log(result);
            if (result.status) {
                window.localStorage.setItem("CardId", result.data._id);
                setSave(true)
            } else {
               setSave(false)
            }
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
  };
  const handleUpdate = async (verify) => {
   
      if(verify==true || companyName1==companyName){
        var formData = new FormData();
      formData.append("_id", cardId);
      formData.append("companyname", companyName.replace(/\s/g, '').toLowerCase());
  
      var result = await postData(
          "carddetails/updateCompanyName",
          formData,
          true
      );
      if (result.status) {
         
          setSave(true)
      } else {
         setSave(false)
      }}else if(companyName==''){
        Swal.fire({
          title:'<b>Enter Your Unique Id First</b>',
          icon:"error"
        })
      }
      else{
        Swal.fire({
          title: '<b style={{color:"#fff"}}>You Are Changine the Unique Card Id!</b>',
          html:'<b>Bad News!</b><br/>Changing the unique id can make the old link deactive for the users and your NFC Card will also not work.',
          showDenyButton: true,
          icon:"warning",
         
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then(async(result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            var formData = new FormData();
            formData.append("_id", cardId);
            formData.append("companyname", companyName.replace(/\s/g, '').toLowerCase());
        
            var result = await postData(
                "carddetails/updateCompanyName",
                formData,
                true
            );
            console.log(result);
            if (result.status) {
               
                setSave(true)
            } else {
               setSave(false)
            }
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
  };
  
    const handleSubmit1 = async (cardId) => {
           
     if(!!cardId){
      try {
        // Set loading to true before making the request
        setLoadingAnimation(true)
      var formData = new FormData()
      formData.append('_id', cardId)
      formData.append('companylogo', companyLogo.bytes)
      formData.append('coverVideo', coverVideo.bytes)
      // alert(file)
      formData.append('companyCover', file)
      formData.append('fullname', fullName)
      formData.append('position', position)
      formData.append('phoneNumber', phone)
      formData.append('AlternatePhoneNumber', alternatePhone)
      formData.append('whatsappNo', whatsappNo)
      formData.append('Address', address)
      formData.append('Email', email)
      formData.append('website', website)
      formData.append('location', location)
      formData.append('AboutUs', about)
      formData.append('fbLink', fbLink)
      formData.append('igLink', instaLink)
      formData.append('TwitterLink', twitterLink)
      formData.append('YoutubeLink', youtubeLink)
      formData.append('PinterestLink', pinterestLink)
      formData.append('LinkdnLink', linkedlnLink)
      formData.append('threads', threadLink)
      formData.append('education', education)
      formData.append('hobby', hobby)
      formData.append('skype', skypeLink)
      formData.append('zomato', zomatoLink)
      formData.append('discord', discordLink)
      formData.append('dribble', dribbleLink)
      formData.append('behance', behanceLink)
      formData.append('playstore', playstoreLink)
      formData.append('appstore', appstoreLink)
      formData.append('paytmNumber', paytmNumber)
      formData.append('Googlepaynumber', googlePayNumber)
      formData.append('phonepenumber', phonePeNumber)
      formData.append('GoogleMapLink', googleMapLink)
  
      var response = await postData("carddetails/updatepersonelinfo", formData, true);
     
      if (response.status) {
        setLoadingAnimation(false)
      } else {
  
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("An error occurred:", error);
    } finally {
      // Set loading back to false after the request completes
      setLoadingAnimation(false);
    }
  }else{
    Swal.fire({
      title:"First Verify Your Unique Card Id",
      icon:'error'
    })
  }
  
  
    }
  
    const handleIcon = (event) => {
      setIcon({
        url: URL.createObjectURL(event.target.files[0]),
        bytes: event.target.files[0],
      });
      setCompanyLogo({
        url: URL.createObjectURL(event.target.files[0]),
        bytes: event.target.files[0],
      });
      // setLogo(event.target.files[0]);
      // setLogoName(event.target.files[0].name)
      // setOpen1(true)
    };
    const handleCover = (event) => {
      if (event.target.files[0].type.slice(event.target.files[0].type.length - 3) == "mp4") {
        setCoverVideo({
          url: URL.createObjectURL(event.target.files[0]),
          bytes: event.target.files[0],
        });
        setShow(true)
      } else {
        setCompanyCover({
          url: URL.createObjectURL(event.target.files[0]),
          bytes: event.target.files[0],
        });
        setImg(event.target.files[0]);
        setName1(event.target.files[0].name)
        setOpen(true)
      }
      setType(event.target.files[0].type.slice(event.target.files[0].type.length - 3))
  
  
  
    };
  
    const handleClick=async()=>{
     
      var formData=new FormData
      formData.append('companyId',companyName.replace(/\s/g, '').toLowerCase())
      const response=await postData('generatedcompanylink/checkCompanyName',formData,true)
     
      if(response.status!=true)
      {
      
        (cardId == "" ? handleSubmit(false) : handleUpdate(false))
       
      }else{
        (cardId == "" ? handleSubmit(response.status) : handleUpdate(response.status))
      
     
      }
  
    }
  
    const LoaderComponent=()=>{
      return(
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      )
    }
  
    const handleClose1=()=>{
      setOpenDialog(false)
    }
  
     const Dialog1=()=>{
      return(
        <Dialog
        open={openDialog}
        onClose={handleClose1}
        fullWidth
        sx={{
          width: { xs: 400, sm: 490, md: 490 },
          marginLeft: { xs: "0%", sm: "20%", md: "35%" },
        }}
      >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Your Unique Card Id
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#001e3c", fontWeight: "bolder" }}>
           <img src={help} width={"100%"}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button
            onClick={handleClose1}
            variant="contained"
            sx={{
              backgroundColor: "#001e3c",
              "&:hover": { backgroundColor: "#001e3c" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      )
     }



  return (
    <Grid sx={{ width: "100%", background: "#000", fontFamily: "Montserrat" }}>

      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "86%",
          marginTop: "1.5%",
          flexDirection: "column",
          color: "#000000",
        }}
      >
        <Grid
          sx={{
            fontSize:matches?'20px':"28px",
            fontWeight: 500,
            lineHeight: "28px",
            letterSpacing: "-2.4%",
            color: "#fff",
          }}
        >
          Profile Setup
        </Grid>

        <Grid
          sx={{
            width: "82%",
            height: 'auto',
            background: "#fff",
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            marginTop: "1.5%",
            padding: 3,
            color: "#000",
          }}
        >
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: matches?"":"space-between",
              flexDirection:matches?"column":'row'
            }}
          >
            <Grid sx={{ width: matches?"100%":"30%" }}>
              <Grid
                sx={{ fontSize: matches?'15px':"22px", fontWeight: 500, lineHeight: "36px" }}
              >
                Profile :
              </Grid>
              <Divider style={{ backgroundColor: "#000", marginTop: ".8%" }} />
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                {edited1 == true ? <Avatar
              fullWidth
              alt="Remy Sharp"
              src={companyLogo?.url}
              sx={{ width: matches?70:'6vw', height:matches?70:'6vw', marginTop: "2%" }}
            /> : <Avatar
              fullWidth
              alt="Remy Sharp"
              src={companyLogo?.url}
              sx={{ width: matches?70:'6vw', height:matches?70:'6vw', marginTop: "2%" }}
            />}
                {/* <Avatar
                  src="/broken-image.jpg"
                  sx={{ width: matches?70:'6vw', height:matches?70:'6vw', marginTop: "2%" }}
                /> */}
                <Grid sx={{ marginLeft: "4%", marginTop:matches?'4%': "2%" }}>
                  <Grid>
                  <label htmlFor="icon-button-file1">
              <input
                style={{ display: "none" }}
                accept="image/*"
                id="icon-button-file1"
                type="file"
                
                onChange={handleIcon}
              />
              <Button
                aria-label="upload picture"
                component="span"
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  height: matches?28:"35px",
                  width: "150px",
                  lineHeight: "36px",
                  color: "#000",
                  fontSize: matches?'12px': "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                >
                Upload Logo
              </Button>
            </label>
                    {/* <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                      />
                      <Button
                        component="span"
                        style={{
                          border: "1px solid #000",
                          borderColor: "#000",
                          height: matches?28:"35px",
                          width: "150px",
                          lineHeight: "36px",
                          color: "#000",
                          fontSize: matches?'12px': "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Upload Logo
                      </Button>
                    </label> */}
                  </Grid>
                  <Grid
                    sx={{
                      fontSize:matches?'12px':  "14px",
                      fontWeight: 400,
                      marginTop: "2%",
                      lineHeight: "20px",
                    }}
                  >
                    Upload Your Profile Photo For your business profile
                  </Grid>
                </Grid>


              </Grid>
            </Grid>
            <Grid sx={{ width:matches?'100%':"60%" }}>
              <Grid
                sx={{ fontSize: matches?'15px':"22px", fontWeight: 500, lineHeight: "36px" }}
              >
                profile banner :
              </Grid>
              <Divider style={{ backgroundColor: "#000", marginTop: ".8%" }} />
              <Grid sx={{ display: "flex", alignItems: "center" }}>
              {show == true ? <video
            key={coverVideo.url}
              autoPlay
              loop
              muted
              style={{
                objectFit: 'fill',
                width:400,
                height: 150,
                marginLeft: -10,
                backgroundColor:"black"

              }}
            >
              <source src={coverVideo.url} type="video/mp4" />

            </video> : edited == true ? <Avatar
              fullWidth
              variant="square"
              alt="Remy Sharp"
              src={image1}
              sx={{ width: matches?120:'25vw', height: matches?70:'6vw', marginTop: "2%" }}
            /> : <Avatar
                fullWidth
                variant="square"
              alt="Remy Sharp"
              src={'data:image/jpeg;base64,' + image1}
              sx={{ width: matches?120:'25vw', height: matches?70:'6vw', marginTop: "2%" }}
            />}    
                {/* <Avatar
                  variant="square"
                  src="/broken-image.jpg"
                  sx={{ width: matches?120:'25vw', height: matches?70:'6vw', marginTop: "2%" }}
                /> */}
                <Grid sx={{ marginLeft: "4%", marginTop:matches?'5%':  "2%" }}>
                  <Grid>

                  <label htmlFor="icon-button-file">
              <input
                style={{ display: "none" }}
                accept="image/, video/"
                id="icon-button-file"
                type="file"
                onChange={handleCover}
              />
              <Button
                aria-label="upload picture"
                component="span"
                style={{
                  border: "1px solid #000",
                  borderColor: "#000",
                  height: matches?28: "35px",
                  width:matches?'115px':  "150px",
                  lineHeight: "36px",
                  color: "#000",
                  fontSize: matches?'12px': "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Upload Cover
              </Button>
            </label>
                    {/* <label htmlFor="icon-button-file1">
                      <input
                        style={{ display: "none" }}
                        accept="image/*"
                        id="icon-button-file1"
                        type="file"
                      />
                      <Button
                        component="span"
                        style={{
                          border: "1px solid #000",
                          borderColor: "#000",
                          height: matches?28: "35px",
                          width:matches?'115px':  "150px",
                          lineHeight: "36px",
                          color: "#000",
                          fontSize: matches?'12px': "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Upload Logo
                      </Button>
                    </label> */}

                  </Grid>
                  <Grid
                    sx={{
                      fontSize:matches?'12px': "14px",
                      fontWeight: 400,
                      marginTop: "2%",
                      lineHeight: "20px",
                    }}
                  >
                    Upload Your Profile Banner For your business profile
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Divider
            style={{
              backgroundColor: "#95a5a6",
              marginTop: "3%",
            }}
          />

          <Grid sx={{ width: "100%", marginTop: "3%" }}>
            <Grid
              sx={{ fontSize:matches?'15px': "22px", fontWeight: 500, lineHeight: "36px" }}
            >
              personal details :
            </Grid>
            <Divider
              style={{
                backgroundColor: "#000",
                marginTop: ".8%",
                width: matches?'100%':"30%",
              }}
            />

            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1%",
                flexDirection:matches?"column":'row'
              }}
            >
              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                  first name*
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Name"
                    value={fullName} onChange={(e) => setFullName(e.target.value)} 
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                 Designation
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#fff",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Position"
                    value={position} onChange={(e) => setPosition(e.target.value)} 
           
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                 Email
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your email"
                    value={email}  onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>




            <Grid sx={{marginTop:'1.5%'}}>
            <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                  }}
                >
                  Bio
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width: "100%",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Tell other about yourself and about your work/business"
                    value={about} onChange={(e) => setAbout(e.target.value)} rows={5}
                  />
                </Grid>
            </Grid>


            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.5%",
                flexDirection:matches?"column":'row'
              }}
            >
              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
                 Mobile Number
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width:matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Mobile Number"
                    value={phone}  onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >
               WhatsApp Number
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#fff",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width:matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your WhatsApp Number"
                    value={whatsappNo}  onChange={(e) => setWhatsappNo(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: ".5%",
                  }}
                >Address 
                </Grid>
                <Grid
                  sx={{
                    border: "1px solid #000",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                    width:matches?'100%':"300px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Address"
                    value={address} onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid
                  sx={{
                    fontSize:matches?'14px':  "16px",
                    fontWeight: 500,
                    lineHeight: "36px",
                    marginTop: "1.5%",
                  }} >unique card id*
                </Grid>
                <Grid sx={{display:'flex',alignItems:"center"}}>
                <Grid
                  sx={{
                    border: "1.8px solid #289B00",
                    borderRadius: "10px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height: "36px",
                    width:matches?'100%': "500px",
                  }}
                >
                  <InputBase
                    style={{ color: "#000" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter Your Unique Id"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                   <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  onClick={()=>handleClick()}
                >
                  <div
                    style={{
                      border: "1px solid #000",
                      background: "#000",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 500,
                      width:matches?70: 100,
                      borderRadius: "5px",
                      height:25,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Save
                  </div>
                </IconButton>
                </Grid>

                
                <Typography>{save==true?"Saved Successfully":save==false?"Not Saved":''}</Typography>  
                <Grid onClick={()=>setOpenDialog(true)}  sx={{marginLeft:'1%'}}>
                    <img src={icon} width={32} style={{marginTop:'1%'}} ></img>
                </Grid>
</Grid>

<Grid sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:matches?'5%':'3%'}}>
                        <Button
                           onClick={() =>handleSubmit1(cardId)}
                           style={{
                            border:'1px solid #289B00',
                            borderColor:'#289B00',
                            background:'#289B00',
                            width:'50%',
                            height:matches?'32px':'40px',
                            lineHeight:'36px',       
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: '10px',
                            display:"flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor:'-moz-grab'
                          }}>
                        Save
                        </Button> 
</Grid>
          </Grid>
        </Grid>
        {DialogComponent()}
      {DialogComponent1()}
      {Dialog1()}
      </Grid>
    </Grid>
  );
}
