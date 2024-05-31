import { Grid } from '@mui/material';
import NewHeader from '../Components/NewHeader';
import NewContainer from '../Components/NewContainer';
export default function NewHome()
{
    return(<Grid sx={{width:'100%',height:'100vh',backgroundImage: "linear-gradient(to bottom right, #171717,#171717,#070707,#070707)",fontFamily:'Muli, sans-serif' }}>
    <Grid  sx={{position:'sticky',top:'0',zIndex:'5'}}>
        <NewHeader/>
    </Grid>
    <Grid>
        <NewContainer/>
    </Grid>
    </Grid>)
}