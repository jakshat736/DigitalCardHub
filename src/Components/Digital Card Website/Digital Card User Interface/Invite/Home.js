import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postData } from '../../../Services/NodeServices';

import { Grid } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import Theme from './Theme';

const Card = () => {
    let navigate = useNavigate()
    const { companyId } = useParams();
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [ecommerce, setEcommerce] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [show,setShow]=useState(false)
    React.useEffect(() => {
        fetchCardDetail();

    }, []);

    const fetchCardDetail = async () => {
       
        var formData=new FormData
        formData.append('companyId',companyId)

        const response=await postData('carddetails/fetchInvite',formData,true)
        console.log(response)
        if(response){
            setData(response.data)
            setShow(true)
        }else{
            navigate('/digitalcardlogin')
        }
    };



    return (
        <Grid style={{width:"100%"}}>
            
               {show && (<Theme data={data}/>)}
               {/* {show && (<Theme3 data={data} products={products} gallery={gallery} ecommerce={ecommerce}/>) } */}
     </Grid>
    )
}

export default Card
