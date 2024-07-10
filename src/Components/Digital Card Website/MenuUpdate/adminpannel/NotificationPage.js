import { Button, Dialog, Divider, Grid, InputBase, Switch } from "@mui/material";
import right from "../../Digital Card Assets/right.png"
import * as React from "react";
import { useState } from "react";
import crose from "../../Digital Card Assets/cr.png"
import i from "../../Digital Card Assets/enquary.png"
import time from "../../Digital Card Assets/time.png"
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NoticationPage()
{
  
  const matches = useMediaQuery("(max-width:1000px)");
  const matchesA = useMediaQuery("(max-width:700px)");

    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

const [edit,setEdit]= useState(false)
const [all,setAll]= useState(false)

    const handleEdit = () => {
        setEdit(true);
      };
      const handleCloseEdit = () => {
        setEdit(false);
      };
    
      const handleAll = () => {
        setAll(true);
      };
      const handleCloseAll = () => {
        setAll(false);
      };
    


    const EditDialog = () => {
        return (
          <Dialog
          fullWidth
          maxWidth={false}
            PaperProps={{
              style: {
                width:matchesA?'98%':matches?'97%':'60%',
                height: 'auto',
                borderRadius: 10,
                backgroundImage: "radial-gradient(#f5f6fa,#fff)",
              },
            }}
            open={edit}
            onClose={handleCloseEdit}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
            <Grid sx={{display:'flex',justifyContent:"space-between",alignItems:'center',padding:matches?2:3}}>
            <Grid sx={{fontSize:matches?'16px':'24px',fontWeight:600}}>
            Edit Template
            </Grid>
            <Grid>
                <img src={crose} width={20}  onClick={handleCloseEdit}  style={{cursor:'pointer'}}></img>
            </Grid>
             </Grid>

             <Divider
              style={{
                background:'#000',
                color:'#000',
                height:'2px'
              }}
            />

             <Grid sx={{padding:matches?2:3,width:'100%',display:'flex'}}>
              <Grid sx={{width:'60%'}}>
                 <Grid sx={{fontSize:matches?'14px':'18px',fontWeight:600}}>
                 Subject *
                 </Grid>
                 <Grid
                  sx={{
                    border: "1.5px solid #000",
                    borderRadius: "4px",
                    color: "#000",
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    height:matches?'20px': "35px",
                    width:"100%",
                    marginTop:'1%'
                  }}
                >
                  <InputBase
                    style={{ color: "#000",fontSize:matches?'10px':'16px',fontWeight:400 }}
                    sx={{ ml: 1, flex: 1 }}
                    value='Your order from Restaurant has been placed'
                  />
                </Grid>

                <Grid sx={{fontSize:matches?'14px':'18px',fontWeight:600,marginTop:'4%'}}>
                 Content *
                 </Grid>
                 <Grid sx={{border:'1px solid #000',width:'100%',height:matches?'auto':200,marginTop:'1%',padding:matchesA?.8:2,fontSize:matchesA?'10px':''}}>
                 <div>Dear customer,</div>
                  <div style={{marginTop:'4%'}}>Your order from ' company name ' has been placed, you will be servered as to your table soon .</div>
                  <div style={{marginTop:'2%'}}>Thank you for choosing us. you can track your order from this link:</div><p style={{marginTop:'4%',color:'blue',overflow:'hidden'}}> https//com.dch.restaurant.track.order.in </p><div style={{marginTop:'4%'}}>Thanks</div>
                 </Grid>
              </Grid>
<Grid sx={{width:'40%',color:'#000'}}>
<Grid sx={{fontSize:matches?'14px':'18px',fontWeight:600,marginLeft:'14%'}}>
                 Subject *
     </Grid>
<Grid sx={{marginLeft:matches?'8%':'14%',marginTop:'6%'}}>
<Grid sx={{fontSize:matches?'12px':'16px',fontWeight:400,color:'#696969'}} >
Template 1
</Grid>
<Grid sx={{fontSize:matches?'12px':'16px',fontWeight:400,marginTop:'12%',color:'#696969'}} >
Template 2
</Grid>
<Grid sx={{fontSize:matches?'12px':'16px',fontWeight:400,marginTop:'12%',color:'#696969'}} >
Template 3
</Grid>
<Grid sx={{fontSize:matches?'12px':'16px',fontWeight:400,marginTop:'12%',color:'#696969'}} >
Template 4
</Grid>
<Grid sx={{fontSize:matches?'12px':'16px',fontWeight:400,marginTop:'12%',color:'#696969'}} >
Template 5
</Grid>
<Grid sx={{marginLeft:'auto',marginTop:'8%',width:'100%'}}>
<Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width:matches?'100px': "130px",
                    height:matches?'30px': "40px",
                    color: "#fff",
                    background: "#000",
                    fontSize:matches?'14px': "16px",
                    fontWeight: 400,
                    textTransform: "none",
                    borderRadius: "2px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",marginLeft:'auto'
                  }}
                >
                 Update
                </Button>
</Grid>

</Grid>
</Grid>



             </Grid>

            </Grid>
          </Dialog>
        );
      };
    
    

      
    const AllTransaction = () => {
        return (
          <Dialog
          fullWidth
          maxWidth={false}
            PaperProps={{
              style: {
                width:matches?'98%':'60%',
                height: 'auto',
                borderRadius: 10,
                backgroundImage: "radial-gradient(#f5f6fa,#fff)",
              },
            }}
            open={all}
            onClose={handleCloseAll}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Grid sx={{ width: '100%', height: 'auto' ,color:'#000'}}>
            <Grid sx={{display:'flex',justifyContent:"space-between",alignItems:'center',padding:matches?2:3}}>
            <Grid sx={{fontSize:matchesA?'20px':'24px',fontWeight:600}}>
            All Transactions
            </Grid>
            <Grid>
                <img src={crose} width={matchesA?15:20}  onClick={handleCloseAll}  style={{cursor:'pointer'}}></img>
            </Grid>
             </Grid>

             <Divider
              style={{
                background:'#000',
                color:'#000',
                height:matchesA?'1px':'2px'
              }}
            />

             <Grid sx={{padding:matches?2:3,width:'100%',marginTop:'3%'}}>
            <Grid sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
               <Grid>
               <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: "120px",
                    height: "32px",
                    color: "#000",
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "8px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",padding:1,gap:8
                  }}
                >
                28-5-2024 <img src={time} width={matches?10:14} style={{marginTop:'-3%'}}></img>
                </Button>
               </Grid>
               <Grid>
                <img src={i} ></img>
               </Grid>
            </Grid>

<Grid sx={{border:'1px solid #E9E9E9',width:'100%',height:350,borderRadius:'15px',background:'#E9E9E9',  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',marginTop:'3%',padding:matches?1:2,color:'#000',overflow:'scroll',scrollbarWidth:'none'}}>
<Grid sx={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
    <Grid sx={{fontSize:matchesA?'13px':'22px',fontWeight:500}}>
    Message
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500}}>
    Time
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500}}>
    Points
    </Grid>
</Grid>

    <Divider
              style={{
                background:'#000',
                color:'#000',
                height:'1.4px',
                marginTop:'1.5%'
              }}
            />


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matchesA?'12px':'20px',fontWeight:400}}>
    order paced
    </Grid>
    <Grid  sx={{fontSize:matchesA?'12px':'20px',fontWeight:300}}>
    5:42 pm
    </Grid>
    <Grid  sx={{fontSize:matchesA?'12px':'22px',fontWeight:500,color:'red'}}>
    -6 
    </Grid>
</Grid>



<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matchesA?'13px':'20px',fontWeight:400}}>
    order completed
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'20px',fontWeight:300}}>
    5:42 pm
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500,color:'red'}}>
    -2
    </Grid>
</Grid>



<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matchesA?'13px':'20px',fontWeight:400}}>
    order on cook
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'20px',fontWeight:300}}>
    5:42 pm
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500,color:'red'}}>
    -1
    </Grid>
</Grid>



<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matchesA?'13px':'20px',fontWeight:400}}>
    order paced
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'20px',fontWeight:300}}>
    5:42 pm
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500,color:'red'}}>
    -6 
    </Grid>
</Grid>


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matchesA?'13px':'20px',fontWeight:400}}>
    order paced
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'20px',fontWeight:300}}>
    5:42 pm
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500,color:'red'}}>
    -6 
    </Grid>
</Grid>



<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matchesA?'13px':'20px',fontWeight:400}}>
    order paced
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'20px',fontWeight:300}}>
    5:42 pm
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500,color:'red'}}>
    -6 
    </Grid>
</Grid>


<Grid sx={{display:'flex',background:'#fff',height:'52px',borderRadius:'10px',alignItems:'center',justifyContent:"space-between",marginTop:'1.5%',padding:2}}>
    <Grid sx={{fontSize:matchesA?'13px':'20px',fontWeight:400}}>
    order paced
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'20px',fontWeight:300}}>
    5:42 pm
    </Grid>
    <Grid  sx={{fontSize:matchesA?'13px':'22px',fontWeight:500,color:'red'}}>
    -6 
    </Grid>
</Grid>

</Grid>


             </Grid>
            </Grid>
          </Dialog>
        );
      };
    
    


    return(<Grid sx={{width:'100%',display:'flex',height:'auto',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
             <Grid sx={{width:matches?'97%':'85%',height:matchesA?'40px':matches?'50px':'10vh',borderRadius:'10px',border:'1px solid #fff',background:'#E9E9E9',padding:matches?1:2.4,display:'flex',justifyContent:"space-between",marginTop:matches?'5%':'2.5%',alignItems:'center'}}>
                <Grid sx={{fontWeight:500,fontSize:matches?'14px':'24px',color:'#04CB00'}}>Credit balance : 112</Grid>
                <Grid>
                <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width:matches?80:"11vw",
                    height:matchesA?'25px': "32px",
                    color: "#fff",
                    background: "#000",
                    fontSize:matches?'10px':"14px",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                Buy credits
                </Button>
                </Grid>
             </Grid>

             <Grid sx={{width:matches?'97%':'85%',display:'flex',justifyContent:"space-between",marginTop:matchesA?'4%':'3%'}}>
                <Grid sx={{fontWeight:500,fontSize:matchesA?'10px':matches?'14px':'26px',color:'#fff'}}>Message customization</Grid>
                <Grid onClick={handleAll} sx={{fontWeight:700,cursor:'pointer',fontSize:matchesA?'10px':matches?'12px':'18px',color:'#fff',display:'flex',alignItems:'center'}}>
                 See all Transactions<img src={right} width={matches?7:10} style={{marginTop:'1%'}}></img>
                </Grid>
             </Grid>

             <Grid sx={{width:matches?'97%':'85%',height:'auto',borderRadius:'10px',border:'1px solid #fff',background:'#E9E9E9',padding:matches?.8:2,marginTop:'2%'}}>
                <Grid sx={{display:'flex',alignItems:'center'}}>
                 <Grid sx={{width:matches?'50%':'40%',display:'flex',justifyContent:'space-between'}}>
                 <Grid sx={{fontWeight:700,fontSize:matches?'12px':'18px'}}>Order status</Grid>
                 <Grid sx={{fontWeight:700,fontSize:matches?'12px':'18px'}}>Enable / Disable</Grid>
                 </Grid>
                 <Grid sx={{width:matches?'52%':'38%',display:'flex',justifyContent:'space-between',marginLeft:'auto'}}>
                 <Grid sx={{fontWeight:700,fontSize:matches?'12px':'18px'}}>Template</Grid>
                 <Grid sx={{fontWeight:700,fontSize:matches?'12px':'18px'}}>Action</Grid>
                 </Grid>
                </Grid>
                <Divider
              style={{
                background:'#000',
                color:'#000',
                marginTop: "1%",
              }}
            />

              <Grid sx={{display:'flex',alignItems:'center',marginTop:'5%'}}>
                 <Grid sx={{width:'34%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                 <Grid sx={{fontWeight:600,fontSize:matchesA?'10px':matches?'12px':'22px'}}>order placed</Grid>
                 <Grid>   <Switch
                 style={{fontSize:matches?'10px':'30px'}}
                 size="22px"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              /> </Grid>
                 </Grid>
                 <Grid sx={{width:matches?'55%':'50%',display:'flex',justifyContent:'space-between',marginLeft:'auto',alignItems:'center'}}>
                 <Grid sx={{fontWeight:400,fontSize:matchesA?'10px':matches?'12px':'20px'}}>hello customer your order is placed.</Grid>
                 <Grid>
                 <Button
                 onClick={handleEdit}
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: matches?30:"64px",
                    height:matches?'25px': "40px",
                    color: "#fff",
                    background: "#000",
                    fontSize: matches?'12px':"16px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Edit
                </Button>
                 </Grid>
                 </Grid>
                </Grid>








                <Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
                 <Grid sx={{width:'34%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                 <Grid sx={{fontWeight:600,fontSize:matchesA?'10px':matches?'12px':'22px'}}>On cook</Grid>
                 <Grid>   <Switch
                 style={{fontSize:'30px'}}
                 size="22px"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              /> </Grid>
                 </Grid>
                 <Grid sx={{width:matches?'55%':'50%',display:'flex',justifyContent:'space-between',marginLeft:'auto',alignItems:'center'}}>
                 <Grid sx={{fontWeight:400,fontSize:matchesA?'10px':matches?'12px':'20px'}}>hello customer your order is preparing</Grid>
                 <Grid>
                 <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width:matches?30: "64px",
                    height: matches?'25px':"40px",
                    color: "#fff",
                    background: "#000",
                    fontSize: matches?'12px':"16px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Edit
                </Button>
                 </Grid>
                 </Grid>
                </Grid>





                <Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
                 <Grid sx={{width:'34%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                 <Grid sx={{fontWeight:600,fontSize:matchesA?'10px':matches?'12px':'22px'}}>Delivering</Grid>
                 <Grid>   <Switch
                 style={{fontSize:'30px'}}
                 size="22px"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              /> </Grid>
                 </Grid>
                 <Grid sx={{width:matches?'55%':'50%',display:'flex',justifyContent:'space-between',marginLeft:'auto',alignItems:'center'}}>
                 <Grid sx={{fontWeight:400,fontSize:matchesA?'10px':matches?'12px':'20px'}}>hello customer your order on way</Grid>
                 <Grid>
                 <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: matches?30:"64px",
                    height:matches?'25px': "40px",
                    color: "#fff",
                    background: "#000",
                    fontSize:matches?'12px': "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Edit
                </Button>
                 </Grid>
                 </Grid>
                </Grid>





                <Grid sx={{display:'flex',alignItems:'center',marginTop:'4%'}}>
                 <Grid sx={{width:'34%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                 <Grid sx={{fontWeight:600,fontSize:matchesA?'10px':matches?'12px':'22px'}}>order cancelled</Grid>
                 <Grid>   <Switch
                 style={{fontSize:'30px'}}
                 size="22px"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              /> </Grid>
                 </Grid>
                 <Grid sx={{width:matches?'55%':'50%',display:'flex',justifyContent:'space-between',marginLeft:'auto',alignItems:'center'}}>
                 <Grid sx={{fontWeight:400,fontSize:matchesA?'10px':matches?'12px':'20px'}}>Hello customer, your order is cancelled.</Grid>
                 <Grid>
                 <Button
                  style={{
                    border: "1px solid #000",
                    borderColor: "#000",
                    width: matches?30:"64px",
                    height:matches?'25px': "40px",
                    color: "#fff",
                    background: "#000",
                    fontSize:matches?'12px': "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "10px",
                    display: "flex",
                    lineHeight: "36px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Edit
                </Button>
                 </Grid>
                 </Grid>
                </Grid>




                {EditDialog()}
                {AllTransaction()}


             </Grid>
    </Grid>)
}