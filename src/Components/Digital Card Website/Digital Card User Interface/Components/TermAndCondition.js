import { Button, Divider, Grid, InputBase } from "@mui/material";
import NewHeader from "./NewHeader";
import bulletPoint from "../../Digital Card Assets/bulletpoint.png"
import term from "../../Digital Card Assets/mockupterm.png"
import Newfooter from "./NewFooter";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from "react";
export default function TermAndCondition()
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
            Terms & Conditions
            </Grid>
           </Grid>
           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:matches?'30px':'52px',marginTop:'7%'}}>
           Terms & Conditions - Digital Card Hub :
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Welcome to Digital Card Hub. The Digital Card Hub website comprises various web pages operated by Digital Card Hub. Digital Card Hub is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of Digital Card Hub constitutes your agreement to all such Terms. Please read these terms carefully and keep a copy for your reference.
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Privacy
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Your use of Digital Card Hub is subject to Digital Card Hub’s Privacy Policy.Please review our <span style={{color:'#4891FF'}}>Privacy Policy </span>, which also governs the Site and informs users of our data collection practices.
           </Grid>
           
           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Electronic Communications
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Visiting Digital Card Hub or sending emails to Digital Card Hub constitutes electronic communications. You consent to receive electronic communications and agree that all agreements, notices, disclosures, and other communications that we provide to you electronically, via email, and on the Site, satisfy any legal requirement that such communications be in writing.
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Your Account
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that Digital Card Hub is not responsible for third-party access to your account that results from theft or misappropriation of your account. Digital Card Hub and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content at our sole discretion
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Children Under Thirteen
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Digital Card Hub does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use Digital Card Hub only with the permission of a parent or guardian.
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:matches?'30px':'52px',marginTop:'4%'}}>
           Links to Third-Party Sites/Third-Party Services
           </Grid>
           <Grid sx={{display:'flex',gap:2}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Digital Card Hub may contain links to other websites (“Linked Sites”). The Linked Sites are not under the control of Digital Card Hub and Digital Card Hub is not responsible for the contents of any Linked Site, including any link contained in a Linked Site, or any changes or updates to a Linked Site.
           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Digital Card Hub is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Digital Card Hub of the site or any association with its operators. Certain services made available via Digital Card Hub are delivered by third-party sites and organizations.
           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
               By using any product, service, or functionality originating from the Digital Card Hub domain, you acknowledge and consent that Digital Card Hub may share such information and data with any third party with whom Digital Card Hub has a contractual relationship to provide the requested product, service, or functionality on behalf of Digital Card Hub users and customers.
           </Grid>
           </Grid>
       

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:matches?'30px':'52px',marginTop:'4%'}}>
           No Unlawful or Prohibited Use/Intellectual Property
           </Grid>
           <Grid sx={{display:'flex',gap:2}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You are granted a non-exclusive, non-transferable, revocable license to access and use Digital Card Hub strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Digital Card Hub that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party’s use and enjoyment of the Site.
           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site. All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Digital Card Hub or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends, or other restrictions contained in any such content and will not make any changes thereto. You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Digital Card Hub content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular, you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use and will make no other use of the content without the express written permission of Digital Card Hub and the copyright owner.
           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Digital Card Hub or our licensors except as expressly authorized by these Terms.
           </Grid>
           </Grid>



        <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:matches?'30px':'52px',marginTop:'4%'}}>
           No Unlawful or Prohibited Use/Intellectual Property
           </Grid>
           <Grid sx={{display:'flex',gap:2}}>
            <Grid sx={{height:20,marginTop:matches?'2%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You are granted a non-exclusive, non-transferable, revocable license to access and use Digital Card Hub strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Digital Card Hub that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party’s use and enjoyment of the Site.
           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site. All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Digital Card Hub or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends, or other restrictions contained in any such content and will not make any changes thereto. You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Digital Card Hub content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular, you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use and will make no other use of the content without the express written permission of Digital Card Hub and the copyright owner.
           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Digital Card Hub or our licensors except as expressly authorized by these Terms.
           </Grid>
           </Grid>
       
           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Third-Party Accounts
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You will be able to connect your Digital Card Hub account to third-party accounts. By connecting your Digital Card Hub account to your third-party account, you acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third-party sites). If you do not want information about you to be shared in this manner, do not use this feature.
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           International Users
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           The Service is controlled, operated, and administered by Digital Card Hub from our offices within India. If you access the Service from a location outside India, you are responsible for compliance with all local laws. You agree that you will not use the Digital Card Hub Content accessed through Digital Card Hub in any country or in any manner prohibited by any applicable laws, restrictions, or regulations.
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Indemnification
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           You agree to indemnify, defend, and hold harmless Digital Card Hub, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorney’s fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules, or regulations. Digital Card Hub reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Digital Card Hub in asserting any available defenses.
           </Grid>

           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Class Action Waiver
           </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. The parties agree that a party may bring claims against the other only in each’s individual capacity, and not as a plaintiff or class member in any putative class, collective, and/or representative proceeding, such as in the form of a private attorney general action against the other. Further, unless both you and Digital Card Hub agree otherwise, the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of a representative or class proceeding.
           </Grid>

          
           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Arbitration
           </Grid>
           <Grid sx={{display:'flex',gap:2}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration conducted by a single neutral arbitrator and administered by the Indian Council of Arbitration, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties.
           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           The arbitrator’s award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding, or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney’s fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including tort claims that are a result of these Terms and Conditions.
           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           The parties agree that the Arbitration and Conciliation Act, 1996, governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision, shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.
           </Grid>
           </Grid>


           <Grid sx={{fontSize:matches?'20px':'26px',fontWeight:600,lineHeight:'52px',marginTop:'4%'}}>
           Liability Disclaimer
           </Grid>
           <Grid sx={{display:'flex',gap:2}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           The information, software, products, and services included in or available through the Site may include inaccuracies or typographical errors. Changes are periodically added to the information herein. Digital Card Hub and/or its suppliers may make improvements and/or changes in the Site at any time.
           </Grid>
           </Grid>
           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Digital Card Hub and/or its suppliers make no representations about the suitability, reliability, availability, timeliness, and accuracy of the information, software, products, services, and related graphics contained on the Site for any purpose. To the maximum extent permitted by applicable law, all such information, software, products, services, and related graphics are provided “as is” without warranty or condition of any kind.
           </Grid>
           </Grid>

           <Grid sx={{display:'flex',gap:2,marginTop:'4%'}}>
            <Grid sx={{height:20,marginTop:matches?'4%':'1.3%'}}>
                <img src={bulletPoint} width={20}></img>
            </Grid>
           <Grid sx={{fontSize:matches?'16px':'22px',fontWeight:400,lineHeight:matches?'40px':'54px'}}>
           Digital Card Hub and/or its suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services, and related graphics, including all implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement. To the maximum extent permitted by applicable law, in no event shall Digital Card Hub and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of the Site, with the delay or inability to use the Site or related services, the provision of or failure to provide services, or for any information, software, products, services, and related graphics obtained through the Site, or otherwise arising out of the use of the Site, whether based on contract, tort, negligence, strict liability or otherwise, even if Digital Card Hub or any of its suppliers has been advised of the possibility of damages. Because some states/jurisdictions do not allow the
           </Grid>
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
                <Grid sx={{fontSize:matches?'26px':'40px',fontWeight:600,lineHeight:'40px',textDecoration:'underline'}}>
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