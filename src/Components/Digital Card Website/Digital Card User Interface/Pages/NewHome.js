import { Grid, Slide, Slider } from '@mui/material';
import NewHeader from '../Components/NewHeader';
import NewContainer from '../Components/NewContainer';
import Introducing from '../Components/Introducing';
import ConnectNow from '../Components/ConnectNow';
import { useEffect } from 'react';
import Ecommerce from '../Components/Ecommerce';
import Trusted from '../Components/Trusted';
import Banner from '../Components/Banner';
import Superior from '../Components/Superior';
import Utube from '../Components/Utube';
import SliderForProducts from '../Components/SliderForProducts';
import Services from '../Components/Services';

export default function NewHome()
{

    return(<Grid sx={{width:'100%',backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Montserrat', }}>
    <Grid  sx={{position:'sticky',top:'0',zIndex:50}}>
        <NewHeader/>
    </Grid>
    <Grid>
        <NewContainer/>
    </Grid>
    <Grid>
    <Introducing/>
    </Grid>
    <Grid>
        <ConnectNow/>
    </Grid>
    <Grid>
        <Ecommerce/>
    </Grid>
    <Grid>
       <Trusted/>
    </Grid>
    <Grid>
       <Banner/>
    </Grid>
    <Grid>
       <Superior/>
    </Grid>
    <Grid>
       <Utube/>
    </Grid>
    <Grid>
      <SliderForProducts/>
    </Grid>
    <Grid>
     <Services/>
    </Grid>
    </Grid>)
}