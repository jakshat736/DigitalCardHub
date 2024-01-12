import { Button, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getData, postData } from '../Services/NodeServices';

const LinkGenrator = () => {
    
  const [link, setLink] = React.useState('');
  const [businessLink, setBusinessLink] = useState()
  const [companyName, setCompanyName] = useState("");
  const [clientName, setClientName] = useState("");

  const handleCopy=()=>{
   

    // Copy the text inside the text field
   navigator.clipboard.writeText(link);
 
   
   }

  const handleBusinessCopy=()=>{
   

    // Copy the text inside the text field
   navigator.clipboard.writeText(businessLink);
 
   
   }
   const handleGenerate=async()=>{
    if(clientName!=''){
      var formData=new FormData
      formData.append("clientName",clientName)
    const res=await postData('review/addTagLinkId',formData,true)

    if(res.status=="true"){
        setLink(`https://digitalcardhub.in/#/tag/${res.tagId}`)
    }}
   }

   const handleClick=async()=>{
   if(companyName!=""){ 
    var formData=new FormData
    formData.append('companyId',companyName)
  
    const response=await postData('carddetails/verifyCompanyName',formData,true)
    
    var formData1=new FormData
    formData1.append('companyId',companyName.replace(/\s/g, ''))
    const result=await postData('generatedcompanylink/checkCompanyName',formData1,true)
    // alert(JSON.stringify(response))
    if(response.status!=true && result.status!=true){
        var Formdata=new FormData
        Formdata.append("companyId",companyName.replace(/\s/g, ''));
        Formdata.append("link",`https://digitalcardhub.in/#/${companyName.replace(/\s/g, '')}`);
        const res=await postData('/generatedcompanylink/add',Formdata,true)
        setBusinessLink(`https://digitalcardhub.in/#/${companyName.replace(/\s/g, '')}`)
    }else{
        setBusinessLink("Check For Another Name")
    }
    
}
  }



 

  return (
    <Grid>
        <Grid container spacing={2} sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
           <Paper elevation={5} sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:'50%',mt:5}}>
             <Grid item xs={12} sx={{display:"flex",justifyContent:"center",m:1}}>
            <TextField
                          
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                        
                            label="Client Name"
                            required
                           
                        />
            </Grid>
            <Grid item xs={12} sx={{display:"flex",justifyContent:"center",m:1}}>
                <Button variant='contained' onClick={()=>handleGenerate()}>Generate Review/social media tag link</Button>
            </Grid>
            <Grid item xs={6} sx={{display:"flex",justifyContent:"center",m:1}}>
          <Typography>{link}</Typography>
        </Grid>
       {link && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX:"30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleCopy()}>Copy</Button>
          </Grid>}
          </Paper>
          <Paper elevation={5} sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",width:'50%',mt:5}}>
          
          <Grid item xs={12} sx={{display:"flex",justifyContent:"center",m:1}}>
                <Typography>Business Card link</Typography>
            </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: "center", marginBottom: 8,flexDirection:"column",alignItems:"center" }}>
              <TextField
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="start">
                                <Button variant='contained' onClick={()=>handleClick()}>
                                  Generate
                                </Button>
                              </InputAdornment>
                            ),
                          }}
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        
                            label="Company Name"
                            required
                           
                        />
                      </Grid>
           
      
        <Grid item xs={6} sx={{display:"flex",justifyContent:"center",m:1}}>
          <Typography>{businessLink}</Typography>
        </Grid>
       {businessLink && <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", marginBottom: 8 }}>
            <Button sx={{
              borderRadius: 10,
              backgroundImage: "linear-gradient(to top left,#48dbfb,#001e3c)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingX:"30px",
              textAlign: "center",
              alignItems: "center",
            }} variant='contained' onClick={() => handleBusinessCopy()}>Copy</Button>
          </Grid>
          } </Paper>
           </Grid>
          
    </Grid>
  )
}

export default LinkGenrator
