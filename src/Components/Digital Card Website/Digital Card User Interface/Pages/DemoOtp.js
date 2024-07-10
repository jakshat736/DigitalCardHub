import { TextField } from "@mui/material";
import { useState } from "react";
import OtpGenerator from '../ReviewTag/OtpGenerator';
import { postData } from '../../../Services/NodeServices';
import Swal from 'sweetalert2';
import {Button} from "@mui/material";
export default function DemoOtp()
{   const [phoneNo, setPhoneNo] = useState("");
    const [otp, setOtp] = useState();


    const handleopenotpdailog = async () => {

        if (phoneNo != '') {
            var otpval = OtpGenerator()

            setOtp(otpval)

            const apiUrl = `https://cloud.soft7.in/api/send?number=91${phoneNo}&type=text&message=Your Otp For Digital Card Hub - ${otpval}&instance_id=666A97D235704&access_token=6665f09c161eb`;
            const response = await postData('otp/api', { url: apiUrl })
            // https://soft7.in/api/send?number=917225051627&type=text&message=test+message&instance_id=65B92B5C6DD7D&access_token=65b928bbcea41
        } else {
            Swal.fire({
                text: "Enter the Number First",
                timer: 1000
            })
        }
    }



    

    return(<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:300,height:400,flexDirection:"column"}}>
            <div>
            <TextField label="Whatsapp Number" type='tel' fullWidth value={phoneNo} onChange={(event) => setPhoneNo(event.target.value)} />
            </div>
          <Button
                fullWidth
                        onClick={handleopenotpdailog}
                                        sx={{
                                            background: "#001E3C",
                                            marginTop:'4%',
                                            color: "#ffffff",
                                            p: "2% 10%",
                                            fontSize: { xs: "0.6em", md: "0.9em", lg: "0.9em" },
                                            fontWeight: 600,
                                            "&:hover": {
                                                background: "#023569",
                                                color: "#ffffff",
                                            }
                                        }}
                                    >
                                        Get Otp
                                    </Button>
        </div>
    </div>)
} 