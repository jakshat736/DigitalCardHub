import { Button, Divider, Grid, InputBase } from "@mui/material";
import NewHeader from "./NewHeader";
import bulletPoint from "../../Digital Card Assets/bulletpoint.png"
import term from "../../Digital Card Assets/mockupterm.png"
import Newfooter from "./NewFooter";
import { useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
export default function RefundPolicy()
{
    const matches = useMediaQuery("(max-width:1200px)");
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(<Grid   sx={{
        width: "100%",
        height:'auto',
        backgroundImage:
          "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",
        fontFamily: "Montserrat",
        marginBottom:'3%'
      }}>
        <Grid>
            <NewHeader/>
        </Grid>
        <Grid sx={{marginTop:'3%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'100%',color:'#fff'}}>
          <Grid sx={{width:'82%'}}>
           <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Grid sx={{fontSize:matches?'28px':'50px',fontWeight:700,textDecoration:'underline'}}>
            Refund Policy - Digital Card Hub
            </Grid>
           </Grid>
           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'7%'}}>
           No Return Policy
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           We do not accept returns. To be eligible for a refund, we require a receipt or proof of purchase in the form of an order number. Additionally, your order must not have been delivered according to carrier tracking information.
           </Grid>

         
           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Refunds (if applicable)
           </Grid>
           <Grid sx={{display:'flex',gap:2}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
         
If your product is scratched or damaged, you may be eligible for a replacement. We offer replacements for damaged products with photo proof within 24 hours of delivery. If a product does not adhere well to a case or phone, you may be eligible for a replacement product, not a refund.

           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           If you are having trouble activating your product or tapping to compatible phones and would like to request a refund or replacement, please contact our team at support@digitalcardhub.in. Typically, all issues can be resolved with some helpful tips from the team! If you have successfully activated your product and are experiencing issues tapping to a compatible device after you’ve contacted support@digitalcardhub.in, you may be eligible for a replacement product. 
           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           If you have successfully activated your replacement product and are still experiencing issues tapping to a compatible device, you may be eligible for a refund. If you request a refund and our team cannot confirm the potential defect, you may not be eligible for a refund on your order.
           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Once approved for a refund, we will send you an email notifying you that we have refunded your purchase. Your refund will then be processed, and a credit will automatically be applied to your credit card or original method of payment within 2-4 days.
           </Grid>
           </Grid>
       

        


           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'7%'}}>
           Warranty
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           If your product is damaged or loses its adhesive within the first 30 days of your order being marked as delivered, you are eligible for a free replacement. If your product becomes damaged after 30 days of your order being marked as delivered, you may be eligible for a replacement/discount code. Please speak to a customer service representative at support@digitalcardhub.in to determine your eligibility. If your product loses its adhesive between 31 and 90 days of your order being marked as delivered, you are eligible for a 100% off code to purchase a replacement. Between 90 days and 6 months of your order being marked as delivered, you are eligible to receive a 70% off code to purchase a replacement. Between 6 months and 1 year, you are eligible for 50% off a new order.
           </Grid>


           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:matches?'30px':'52px',marginTop:'7%'}}>
           Late or Missing Refunds (if applicable)
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, as it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at support@digitalcardhub.in.
           </Grid>


           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'7%'}}>
           Sale Items
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Only regular priced items may be refunded (if applicable); unfortunately, sale items cannot be refunded.
           </Grid>


           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'7%'}}>
           Shipping & Exchanges.
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Neither We Accept Exchanges nor accept returns, so no shipping information is required..
           </Grid>

          </Grid>
        </Grid>
        <Divider
              style={{
                height:'1px',
                backgroundColor: "#fff",
                width: "100%",
                marginTop: "3%",
                marginBottom:'2%'
              }}
            />

            <Grid sx={{display:'flex',marginTop:'3%',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',color:'#fff'}}>
                <Grid sx={{fontSize:matches?'30px':'40px',fontWeight:600,lineHeight:'40px',textDecoration:'underline'}}>
                Contact Us !
                </Grid>
               <Grid sx={{width:matches?'90%':'450px',padding:2,border:'1px solid #fff',borderRadius:'10px',height:'auto',marginTop:'2%'}}>
                <Grid sx={{fontSize:matches?'16px':'20px',fontWeight:500,lineHeight:'22px'}}>
                Name
                </Grid>
                <Grid
              sx={{
                border: "1px solid #fff",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: "100%",
                marginTop:'1%'
              }}
            >
              <InputBase
              placeholder="Enter your Full Name"
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
              />
            </Grid>

            <Grid sx={{fontSize:matches?'16px':'20px',fontWeight:500,lineHeight:'22px',marginTop:'3%'}}>
            Email or Number
                </Grid>
                <Grid
              sx={{
                border: "1px solid #fff",
                borderRadius: "4px",
                color: "#fff",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: "38px",
                width: "100%",
                marginTop:'1%'
              }}
            >
              <InputBase
              style={{color:'#ffff'}}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter your Full Name"
              />
            </Grid>


            <Grid sx={{fontSize:matches?'16px':'20px',fontWeight:500,lineHeight:'22px',marginTop:'3%'}}>
            Message
                </Grid>
                <Grid sx={{marginTop:'1%'}}>
             <Grid><textarea style={{height:160,borderColor:'#ffff',border:'1px solid #ffff',borderRadius:'10px',width:'100%',background:'transparent',marginTop:'1%'}} placeholder="Fell Free To Enquire anything here."></textarea></Grid>
            </Grid>
               </Grid>
               <Button
             style={{
                    border:'1px solid #fff',
                    borderColor:'#fff',
                    height:'40px',
                    color: "#000",
                    fontSize:"14px",
                    marginTop:'1%',
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: '10px',
                    display:"flex",
                    lineHeight:'36px',
                    alignItems: "center",
                    justifyContent: "center",
                    background:'#fff',
                    width:matches?'90%':'450px',
                    marginBottom:'4%'
                  }} >
                  Submit
                </Button>
            </Grid>
<Grid>
    <Newfooter/>
</Grid>
    
    </Grid>)
}