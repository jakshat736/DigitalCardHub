import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "./UserComponents/Navbar";
import Footer from "./UserComponents/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useLocation, useNavigate } from "react-router-dom";
import { getData, postData } from "../../../Services/NodeServices";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import { AddToHomeScreen } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Switch from '@mui/material/Switch';
import MaterialTable from "@material-table/core";
import { type } from "@testing-library/user-event/dist/type";
const UserDashboard = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(600));
  const tablet = useMediaQuery(theme.breakpoints.down(960));
  const [open, setOpen] = React.useState(false);
  const [cardData, setCardData] = useState([]);
  const location = useLocation();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [tagDialog, setTagDialog] = React.useState(false);
  const [standeeTagDialog, setStandeeTagDialog] = React.useState(false);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [tag,setTag]=useState([])
  const [enquriy,setEnquiry]=useState([])
  const [standeeTag,setStandeeTag]=useState([])
  const [tagDisplay,setTagDisplay]=useState('none')
  const [standeeTagDisplay,setStandeeTagDisplay]=useState('none')
  const [tagId,setTagId]=useState('')
  const [link,setLink]=useState('')
  const [message,setMessage]=useState('')
  const [companyId,setCompanyId]=useState('')
  const [color,setColor]=useState('green')
  const [edit,setEdit]=useState(false)
  const handleClose1 = () => {
    setOpen1(false);
    setOpen2(false)
  };

  const userId = window.localStorage.getItem("userId");
  const user = window.localStorage.getItem("User");

  const navigate = useNavigate();
  //  alert(window.localStorage.getItem("data"))
   const data=JSON.parse(window.localStorage.getItem("data"));
 
  

  const fetchAllTag = async()=>{
        var formData=new FormData();
        formData.append("email",data.email)
        const response=await postData('review/getTagsByEmail',formData,true);
        if(response.data.length!=0){
          setTagDisplay("flex")
          setTag(response.data)

        }
      }    
  const fetchAllStandeeTag = async(data1)=>{
         
        var formData=new FormData();
        formData.append("email",data.email)
        const response=await postData('standee/getTagsByEmail',formData,true);
         
        if(response.status==true){
          
          if(companyId!=""){
          const formData1=new FormData;
    formData1.append('tagId',response.data.tagId);
    formData1.append('link',`https://digitalcardhub.in/#/${companyId}`);
    const response1=await postData('standee/updateLink',formData1,true);
          }
    
          setStandeeTagDisplay("flex")
          setStandeeTag([response.data])
          console.log(response.data)

        }
      }   
      
     

  const fetchCardDetail = async () => {
    var formData = new FormData();
    formData.append("customerId", userId);
   
    var result = await postData("carddetails/getcardDetails", formData, true);
 
    setCardData(result.data);
    setAmount(result.data==undefined?0:result.data.packageAmount);
    setStatus(result.data==undefined?"":result.data.paymentStatus);
    setCompanyId(result.data==undefined?"":result.data.companyId);
     setTimeout(handleDialog(result.data==undefined?0:result.data.packageAmount), 10000);
    if(result.data!=undefined){window.localStorage.setItem("CardId", result.data._id);}
    if(result.data!=undefined){ var createDate=convertToISODate(result.data.createdDate)
    }
     setCreatedDate(createDate)
    
     fetchAllTag()
     fetchAllStandeeTag();
      if(result.data!=undefined){fetchAllEnquiries()}
  };
  
  const fetchAllEnquiries=async()=>{
    var formData=new FormData
    formData.append("cardId",userId)
    const response=await postData('enquiry/displaycardenquiry',formData,true)
    setEnquiry(response.data)
  }
  React.useEffect(() => {
    if (!user) {
      navigate("/digitalcardlogin");
    }
    fetchCardDetail();
  }, []);
  function convertToISODate(dateString) {
    const parts = dateString.split('/'); // Split the date string into an array [month, day, year]
    const year = parts[2];
    const month = parts[0].padStart(2, '0'); // Pad month with leading zero if needed
    const day = parts[1].padStart(2, '0'); // Pad day with leading zero if needed
    return `${year}-${month}-${day}`; // Return the date in ISO 8601 format
  }
  

  useEffect(() => {}, [status]);

  const handleDialog = (amount) => {
    if (amount != 499 && amount!=799 && amount!=999 ) {
      setOpen1(true);
    }

    if(amount==499){
      setOpen2(true)
    }
  };

 
  const targetDate = new Date(createdDate); // Your target date (ISO 8601 format: yyyy-mm-dd)
   
  const currentDate = new Date(); // Current date

  // Calculate the time difference in milliseconds between the target date and current date
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  
  // Calculate the number of days by dividing the time difference by the number of milliseconds in a day
  const daysTillToday = Math.floor(timeDifference / (1000 * 3600 * 24));
 
  // State to hold the calculated days
  const [days, setDays] = useState(daysTillToday);

  useEffect(() => {
    // Recalculate the days every time the component mounts
    if(amount==499)
    {setDays(365+daysTillToday);}
    else if(amount==799)
    {
      setDays(365+daysTillToday);
    }
    else if(amount==999)
    {
      setDays(730+daysTillToday);
    }else{
      setDays(90+daysTillToday)
    }
  }, [createdDate]);




  console.log(" jsbj",standeeTag.length)
  const handleClickOpen = () => {
    if(amount!=499)
    {setOpen(true);}
    else{
      Swal.fire({title: 'Upgrade Your Package !',
      
      background:'#001e3c',
      timer:1500,
      width:500,
      color:'#fff',
      showConfirmButton:false,
      icon:'warning',
      iconColor:'#fff' 
      })
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpen3(false)
  };

  const handleTagDialog=()=>{
    setTagDialog(false)
  }
  const handleStandeeDialog=()=>{
    setStandeeTagDialog(false)
  }

  const dialogComponent = () => {
    return (
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Social Insights
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: "#001e3c",
                color: "white",
                width: { xs: 329, sm: 600, md: 600 },
                ml: -3,
                mt: 1,
              }}
            >
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Whatsapp Clicks:{cardData.whatsappClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Instagram Clicks:{cardData.instaClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Linkdin Clicks:{cardData.linkdinClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Facebook Clicks:{cardData.fbClickCount}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                {cardData == undefined ? (
                  <Typography>No Data Available </Typography>
                ) : (
                  <Typography>
                    Contact Downloads:{cardData.contactDownloadCount}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const Enquiry=()=>{
    return(
      <Dialog open={open3} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Enquiries
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              spacing={2}
              sx={{
               
                color: "white",
                width: { xs: 329, sm: 600, md: 600 },
                ml: -3,
                mt: 1,
              }}
            >
              <Grid item xs={12}>
              <MaterialTable
       
        columns={[
          { title: "name", field: "name" },
          { title: "phone number", field: "number" },
          { title: "Message", field: "query" },
          
        ]}
        data={enquriy}
       
      />
              </Grid>

            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  const handleSave=async(tagId)=>{
       
    const formData=new FormData;
    formData.append('tagId',tagId);
    formData.append('link',link);
    const response=await postData('review/updateLink',formData,true);
    if(response.status){

      setMessage("Link Submitted Succesfully")
        
        fetchAllTag()
    } else {
       
      setMessage("Fail to Edit")
      setColor("Red")

    }
    

}

const handleOpen=(rowData)=>{
    setTagId(rowData.tagId)
    setLink(rowData.link)
    setEdit(true)
}

const handleEditDialog=()=>{
  setEdit(false)
}

function displayTable() {
  return (
    <MaterialTable
      title={"Tag List"}
      data={tag}
      style={{}}
      columns={[
        {
          title: "Tag Id",
          field: "tagId",
        },
        {
          title: "Tag Status",
          field: "status",
        },
        {
          title: "Options",
          render: (rowData) => (
            <div>
              <Button variant="contained" onClick={() => handleOpen(rowData)}>
                {rowData.link!=""?"Edit":"Activate"}
              </Button>
            </div>
          ),
        },
      ]}
      actions={[]}
    />
  );
}
function displayTable1() {
  return (
    <MaterialTable
      title={"Standee Tag List"}
      data={standeeTag}
      style={{}}
      columns={[
        {
          title: "Tag Id",
          field: "tagId",
        },
        {
          title: "Tag Status",
          field: "status",
        },
        {
          title: "Options",
          render: (rowData) => (
            <div>
              <Button variant="contained" onClick={() => navigate("/companyname")}>
                {rowData.link!=""?"Edit":"Activate"}
              </Button>
            </div>
          ),
        },
       
      ]}
      actions={[]}
    />
  );
}

const editDialog=()=>{
  return (
    <Dialog open={edit} onClose={handleEditDialog} fullWidth sx={{width:"100%"}}>
      <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
       Edit Tag
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container spacing={2}>
          <Grid item xs={12} sx={{m:1}}>
                          <TextField value={link} label="Tag Link" onChange={(e)=>setLink(e.target.value)} fullWidth/>
                 </Grid>
                 <Grid item xs={12} sx={{textAlign:"center"}}>
                    <Button variant='contained' onClick={()=>handleSave(tagId)}>Save</Button>
                </Grid>
                 <Grid item xs={12} sx={{textAlign:"center"}}>
                      <Typography color={color} fontSize={20}>{message}</Typography>
                </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEditDialog} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
  const tagsComponent = () => {
    return (
      <Dialog open={tagDialog} onClose={handleTagDialog} fullWidth sx={{width:"100%"}}>
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
         Tags
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {displayTable()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTagDialog} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const standeeTagsComponent = () => {
    return (
      <Dialog open={standeeTagDialog} onClose={handleStandeeDialog} fullWidth sx={{width:"100%"}}>
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
         Standee Tags
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {displayTable1()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleStandeeDialog} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const alertDialog = () => {
    return (
      <Dialog
        open={open1}
        onClose={handleClose}
        fullWidth
        sx={{
          width: { xs: 400, sm: 490, md: 490 },
          marginLeft: { xs: "0%", sm: "20%", md: "35%" },
        }}
      >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Get the Subscription now
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#001e3c", fontWeight: "bolder" }}>
            Starting From Only ₹499/- For One Year Only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => navigate("/designUpload")}
            variant="contained"
            sx={{
              backgroundColor: "#001e3c",
              "&:hover": { backgroundColor: "#001e3c" },
            }}
          >
            Get Now
          </Button>
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
    );
  };
  const alertDialog1 = () => {
    return (
      <Dialog
        open={open2}
        onClose={handleClose}
        fullWidth
        sx={{
          width: { xs: 400, sm: 490, md: 490 },
          marginLeft: { xs: "0%", sm: "20%", md: "35%" },
        }}
      >
        <DialogTitle sx={{ backgroundColor: "#001e3c", color: "white" }}>
          Get Your NFC Card Now
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#001e3c", fontWeight: "bolder" }}>
            Starting From Only ₹299/- For One Year Only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => navigate("/partialDesignUpload")}
            variant="contained"
            sx={{
              backgroundColor: "#001e3c",
              "&:hover": { backgroundColor: "#001e3c" },
            }}
          >
            Get Now
          </Button>
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
    );
  };
  function generateRandomCharacter() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  // Function to generate a random 8-character alphanumeric string
  function generateRandomString() {
    let randomString = "";
    for (let i = 0; i < 8; i++) {
      randomString += generateRandomCharacter();
    }
    return randomString;
  }

  // Generate a random string

  const handlePay = async () => {
    let randomString = generateRandomString();
 
    const requestBody = {
      merchantId: "DIGITALCARDONLINE",
      merchantTransactionId: `${randomString}`,
      merchantUserId: "MUID123",
      amount: 100,
      redirectUrl: "https://digitalcardhub.in/#/userdashboard",
      redirectMode: "POST",
      callbackUrl: "https://digitalcardhub.in/#/userdashboard",
      mobileNumber: "8889430333",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const response = await postData("api/proxy", requestBody);
    console.log("bodyyyyyy", response);

    navigate(response.data.instrumentResponse.redirectInfo.url);
    handleCheck("DIGITALCARDONLINE", randomString);
  };
  const handleCheck = async (merchantId, transactinId) => {
    const response = await getData(`/check-status?tmid=${transactinId}`);
    console.log("bodyyyyyy", response);
  };

  const handleChange = async(id,status) => {

   
    var formData = new FormData();
    formData.append("_id",id);
    formData.append("profile",status=='false'?'true':'false');
    
    const response= await postData('carddetails/updateProfile',formData,true)

    fetchCardDetail()
     
   };
  const handleEnquiry = async(id,status) => {

   
    var formData = new FormData();
    formData.append("_id",id);
    formData.append("enquiry",status=='false'?'true':'false');
    
    const response= await postData('carddetails/updateEnquiry',formData,true)

    fetchCardDetail()
     
   };

  return (
    <Grid>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
          <Grid
            item
            xs={3}
            sx={{
              display:
                cardData == undefined
                  ? mobile
                    ? "flex"
                    : tablet
                    ? "flex"
                    : "block"
                  : "none",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => navigate("/information")}
              variant="contained"
              sx={{ margin: 1, backgroundColor: "#001e3c" }}
            >
              + Create Business Card
            </Button>
          </Grid>
          <Grid item xs={3} sx={{display:tagDisplay,flexDirection:"column"}}>
            <Typography>Review Tags</Typography>
                  
                  <Button
                    variant="contained"
                    onClick={() => setTagDialog(true)}
                    sx={{
                      borderRadius: 2,
                      backgroundImage:
                        "linear-gradient(to top left,#48dbfb,#001e3c)",
                    }}
                  >
                    See Now
                  </Button>
                
            </Grid>
            <Grid item xs={3} sx={{display:standeeTagDisplay,flexDirection:"column"}}>
            <Typography>Standee Tags</Typography>
                      <Button
                        variant="contained"
                        onClick={() => setStandeeTagDialog(true)}
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                        }}
                      >
                        See Now
                      </Button>
                    
                </Grid>
            {/* <Grid item xs={3} sx={{display:"flex",flexDirection:"column"}}>
            <Typography>Restaurant Menu</Typography>
                      <Button
                        variant="contained"
                        onClick={() =>cardData == undefined ?navigate('/information'):navigate(`/menudashboard/${cardData.companyId}`)}
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                        }}
                      >
                        Open
                      </Button>
                    
                </Grid> */}
            {/* <Grid item xs={3} sx={{display:"flex",flexDirection:"column"}}>
            <Typography>Create Invitation</Typography>
                      <Button
                        variant="contained"
                        onClick={() =>navigate(`/invite`)}
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                        }}
                      >
                        Create
                      </Button>
                    
                </Grid> */}
          <Grid
            xs={12}
            item
            sx={{
              mt: "5vh",
              mb: "4vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 600,
                borderRadius: 4,
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: mobile ? "100%" : tablet ? "70%" : "100%",
                  margin: 1,
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                  }}
                >
                  {cardData == undefined ? (
                    <Typography>No Data Available </Typography>
                  ) : (
                    <Typography>To Preview the Card</Typography>
                  )}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  {cardData == undefined ? (
                    ""
                  ) : (
                    <Button
                      onClick={() => window.open(`/#/${cardData.companyId}`)}
                      sx={{
                        borderRadius: 2,
                        backgroundImage:
                          "linear-gradient(to top left,#48dbfb,#001e3c)",
                      }}
                      variant="contained"
                    >
                      Preview
                      <AddToHomeScreen />
                    </Button>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography>Company Name : </Typography>
                </Grid>
                <Grid item xs={6} sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <Typography>
                    {cardData == undefined
                      ? "No Data Available"
                      : cardData.companyname}
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography>Created On : </Typography>
                </Grid>
                <Grid item xs={6} sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}>
                  <Typography>
                    {cardData == undefined
                      ? "No Data Available"
                      : cardData.createdDate}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Social Insights : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="contained"
                        onClick={() => handleClickOpen()}
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                        }}
                      >
                        See Now
                      </Button>
                    </>
                  )}
                </Grid>

                <Grid item xs={6} >
                  <Typography>Enquiries : </Typography>
                </Grid>
                <Grid item xs={6} >
                  
                      <Button
                        variant="contained"
                        onClick={() => setOpen3(true)}
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                        }}
                      >
                        See Now
                      </Button>
                    
                </Grid>
                <Grid item xs={6}>
                  <Typography>Share : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                      <IconButton  sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                            color:"white",
                            m:1
                        }}>
                        <WhatsAppIcon />
                      </IconButton>
                      <IconButton  sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                            color:'white'
                        }}>
                        <FacebookIcon />
                      </IconButton>
                    </>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography>Show business profile : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                     <Switch
                  checked={cardData.profile=='true'?true:false}
                  onChange={()=>handleChange(cardData._id,cardData.profile)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                    </>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography>Show Enquiry Form : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                     <Switch
                  checked={cardData.enquiry=='true'?true:false}
                  onChange={()=>handleEnquiry(cardData._id,cardData.enquiry)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                    </>
                  )}
                </Grid>

                <Grid item xs={6}>
                  <Typography>Edit : </Typography>
                </Grid>
                <Grid item xs={6}>
                  {cardData == undefined ? (
                    <>
                      <Typography>No Data Available</Typography>
                    </>
                  ) : (
                    <>
                      <Button  variant="contained"
                        sx={{
                          borderRadius: 2,
                          backgroundImage:
                            "linear-gradient(to top left,#48dbfb,#001e3c)",
                          fontSize: { xs: 10, sm: 13, md: 15 },
                        }} onClick={() => navigate("/information")}>
                       Edit <BorderColorIcon />
                      </Button>
                    </>
                  )}
                </Grid>
               
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      {dialogComponent()}
      {tagsComponent()}
      {editDialog()}
      {standeeTagsComponent()}
      {Enquiry()}
      <Footer />
    </Grid>
  );
};

export default UserDashboard;
